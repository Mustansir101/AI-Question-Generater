"use client";

import { useState, useRef } from "react";
import { Chat } from "@/components/Chat";
import {
  Sparkles,
  Zap,
  Brain,
  BookOpen,
  Users,
  Code,
  ArrowRight,
  CheckCircle,
  Lightbulb,
  Target,
} from "lucide-react";

export default function HomePage() {
  const [showChat, setShowChat] = useState(false);
  const chatSectionRef = useRef<HTMLDivElement>(null);

  const scrollToChat = () => {
    setShowChat(true);
    setTimeout(() => {
      chatSectionRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <div className="appRoot">
      {/* Header/Navigation */}
      <header className="appHeader">
        <div className="headerContent">
          <div className="logo">
            <div className="logoIcon">✨</div>
            <span>AI Questions Generator</span>
          </div>
          <nav className="navLinks">
            <a href="#features">Features</a>
            <a href="#howitworks">How It Works</a>
            <a href="#usecases">Use Cases</a>
            <button
              onClick={scrollToChat}
              className="btnPrimary"
              style={{ padding: "0.5rem 1.2rem", fontSize: "0.9rem" }}
            >
              Try Now
            </button>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <div className="mainContent">
        {/* Hero Section */}
        <section className="heroSection">
          <div className="heroContent">
            <h1 className="heroTitle">
              AI-Powered Question Generation at Your Fingertips
            </h1>
            <p className="heroSubtitle">
              Transform any topic into thoughtfully crafted, contextually relevant questions
              using advanced AI technology. Perfect for educators, students, and content creators
              seeking to enhance learning and engagement.
            </p>

            <div className="heroActions">
              <button onClick={scrollToChat} className="btnPrimary">
                <span>Get Started Free</span>
                <span style={{ marginLeft: "0.5rem" }}>→</span>
              </button>
              <button className="btnSecondary" onClick={() => window.open("https://github.com/Mustansir101/AI-Question-Generater", "_blank")}>
                <span>View Source Code</span>
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="featuresSection" id="features">
          <div className="sectionContainer">
            <h2 className="sectionTitle">Powerful Features</h2>
            <p className="sectionSubtitle">
              Everything you need to generate high-quality questions instantly
            </p>

            <div className="featuresGrid">
              <div className="featureCard">
                <div className="featureIcon">
                  <Brain size={24} />
                </div>
                <h3 className="featureTitle">AI-Powered</h3>
                <p className="featureDesc">
                  Powered by Google's Gemini API, generating intelligent and contextually
                  relevant questions with advanced natural language understanding.
                </p>
              </div>

              <div className="featureCard">
                <div className="featureIcon">
                  <Zap size={24} />
                </div>
                <h3 className="featureTitle">Lightning Fast</h3>
                <p className="featureDesc">
                  Get instant results without waiting. Our optimized backend delivers responses
                  in milliseconds, not seconds.
                </p>
              </div>

              <div className="featureCard">
                <div className="featureIcon">
                  <Sparkles size={24} />
                </div>
                <h3 className="featureTitle">Diverse Question Types</h3>
                <p className="featureDesc">
                  Generate factual, conceptual, and analytical questions. Mix and match question
                  types for comprehensive learning materials.
                </p>
              </div>

              <div className="featureCard">
                <div className="featureIcon">
                  <BookOpen size={24} />
                </div>
                <h3 className="featureTitle">Context-Aware</h3>
                <p className="featureDesc">
                  Questions are generated with full context awareness, ensuring they're relevant
                  and meaningful to your topic.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="howItWorksSection" id="howitworks">
          <div className="sectionContainer">
            <h2 className="sectionTitle">How It Works</h2>
            <p className="sectionSubtitle">Simple, intuitive, and powerful</p>

            <div className="stepsGrid">
              <div className="stepCard">
                <div className="stepNumber">1</div>
                <h3 className="stepTitle">Enter Your Topic</h3>
                <p className="stepDesc">
                  Simply type in any topic or subject matter you want to generate questions about.
                </p>
              </div>

              <div className="stepCard">
                <div className="stepNumber">2</div>
                <h3 className="stepTitle">AI Processes</h3>
                <p className="stepDesc">
                  Our AI engine analyzes your input and generates contextually relevant,
                  high-quality questions instantly.
                </p>
              </div>

              <div className="stepCard">
                <div className="stepNumber">3</div>
                <h3 className="stepTitle">Receive Questions</h3>
                <p className="stepDesc">
                  Get a comprehensive set of diverse questions including factual, conceptual,
                  and analytical types.
                </p>
              </div>

              <div className="stepCard">
                <div className="stepNumber">4</div>
                <h3 className="stepTitle">Use & Share</h3>
                <p className="stepDesc">
                  Copy, export, or share the generated questions with your students, colleagues, or
                  audience.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="useCasesSection" id="usecases">
          <div className="sectionContainer">
            <h2 className="sectionTitle">Perfect For</h2>
            <p className="sectionSubtitle">Empower your work across multiple domains</p>

            <div className="useCasesGrid">
              <div className="useCaseCard">
                <div className="useCaseIcon">🎓</div>
                <h3 className="useCaseTitle">Education</h3>
                <p className="useCaseDesc">
                  Teachers create comprehensive exam questions, quiz materials, and study guides
                  in seconds.
                </p>
              </div>

              <div className="useCaseCard">
                <div className="useCaseIcon">💼</div>
                <h3 className="useCaseTitle">Corporate Training</h3>
                <p className="useCaseDesc">
                  HR departments generate assessment questions and training materials for employee
                  development.
                </p>
              </div>

              <div className="useCaseCard">
                <div className="useCaseIcon">📚</div>
                <h3 className="useCaseTitle">Content Creation</h3>
                <p className="useCaseDesc">
                  Bloggers and authors generate engaging questions for interactive content and
                  discussions.
                </p>
              </div>

              <div className="useCaseCard">
                <div className="useCaseIcon">🧠</div>
                <h3 className="useCaseTitle">Interview Prep</h3>
                <p className="useCaseDesc">
                  Job seekers and interviewers create targeted questions for better preparation
                  and assessment.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Chat Section */}
        <section className="chatSection !w-full" ref={chatSectionRef} id="chat">
          <div className="chatSectionContent !w-full">
            <h2 className="chatSectionTitle">Try It Now</h2>

            <div className="chatContainer">
              <div className="chatHeader">
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                  <Sparkles size={20} />
                  <span>AI Question Generator</span>
                </div>
              </div>

              <div className="chatMessages">
                <Chat />
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="appFooter">
          <div className="footerContent">
            <div className="footerSection">
              <h3>Product</h3>
              <a href="#features">Features</a>
              <a href="#howitworks">How It Works</a>
              <a href="#usecases">Use Cases</a>
              <a href="#pricing">Pricing</a>
            </div>

            <div className="footerSection">
              <h3>Company</h3>
              <a href="#about">About Us</a>
              <a href="#blog">Blog</a>
              <a href="#careers">Careers</a>
              <a href="#contact">Contact</a>
            </div>

            <div className="footerSection">
              <h3>Resources</h3>
              <a href="#docs">Documentation</a>
              <a href="#api">API Reference</a>
              <a href="#examples">Examples</a>
              <a href="#community">Community</a>
            </div>

            <div className="footerSection">
              <h3>Legal</h3>
              <a href="#privacy">Privacy Policy</a>
              <a href="#terms">Terms of Service</a>
              <a href="#security">Security</a>
              <a href="#cookies">Cookie Policy</a>
            </div>
          </div>

          <div className="footerBottom">
            <p>
              © 2026 AI Questions Generator. All rights reserved. Powered by FastAPI, Next.js, and Google
              Gemini.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}
