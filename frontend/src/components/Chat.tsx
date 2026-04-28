"use client";

import { useEffect, useRef, useState } from "react";
import { API_BASE_URL } from "@/lib/config";
import type { BackendAskResponse, ChatMessage } from "@/lib/types";
import { Send } from "lucide-react";

export function Chat() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const bottomRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  async function send() {
    const trimmed = input.trim();
    if (!trimmed || busy) return;

    setError(null);
    setBusy(true);

    const userMsg: ChatMessage = {
      id: crypto.randomUUID(),
      role: "user",
      content: trimmed,
      createdAt: Date.now(),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput("");

    try {
      const res = await fetch(`${API_BASE_URL}/ask-question`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ user_query: trimmed }),
      });

      if (!res.ok) {
        const text = await res.text();
        throw new Error(text || `Request failed (${res.status})`);
      }

      const data = (await res.json()) as BackendAskResponse;

      const assistantMsg: ChatMessage = {
        id: crypto.randomUUID(),
        role: "assistant",
        content: data.answer,
        createdAt: Date.now(),
        sources: data.sources,
      };

      setMessages((prev) => [...prev, assistantMsg]);
    } catch (e) {
      const message = e instanceof Error ? e.message : "Unknown error";
      setError(message);
      console.error("Error:", message);
    } finally {
      setBusy(false);
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      send();
    }
  };

  return (
    <>
      {messages.length === 0 ? (
        <div className="emptyStateContainer">
          <div className="emptyStateIcon">✨</div>
          <div className="emptyStateText">
            Start by asking a question about any topic
          </div>
        </div>
      ) : (
        <div className="chatMessages">
          {messages.map((m) => (
            <div key={m.id} className={`messageItem ${m.role}`}>
              <div className="messageBubble">
                {m.content}
              </div>
            </div>
          ))}
          <div ref={bottomRef} />
        </div>
      )}

      {error && (
        <div
          style={{
            padding: "1rem",
            background: "#fee2e2",
            color: "#991b1b",
            borderRadius: "6px",
            margin: "0 1.5rem 1rem",
            fontSize: "0.9rem",
          }}
        >
          Error: {error}
        </div>
      )}

      <div className="chatInputArea">
        <input
          type="text"
          className="chatInput"
          placeholder="Ask me anything..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={handleKeyPress}
          disabled={busy}
        />
        <button
          className="chatSendBtn"
          onClick={send}
          disabled={busy || !input.trim()}
          title={busy ? "Processing..." : "Send message"}
        >
          <Send size={18} />
        </button>
      </div>
    </>
  );
}

