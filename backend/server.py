from fastapi import FastAPI, HTTPException 
from fastapi.middleware.cors import CORSMiddleware  
from pydantic import BaseModel  
from dotenv import load_dotenv
import uvicorn 
from typing import Any, Dict
import os
from openai import OpenAI

def answer_question(user_query):
    SYSTEM_PROMPT = f"""You are an AI questions generator. You generate questions based only on the user query, including questions example (optional).

    Your task is to create clear, relevant, and meaningful questions that can be answered using the given context.

    Rules:
    - Questions should test understanding, not be trivial or copied directly.
    - Include a mix of question types such as factual, conceptual, and analytical when possible.
    - Do NOT provide answers Only create distinct questions.
    - If user asks for anything other than generating questions, respond with "I can only generate questions based on the user query."

    Example Questions:
    - Explain the fundamental working principle of the Hill Climbing algorithm, detailing its objective and how it iteratively moves through the search space.
    - Describe the three primary problems (local maxima, ridges, and plateaus) that can hinder the Hill Climbing algorithm from reaching a global optimum, and briefly explain why each is a challenge.
    - Discuss the main advantages and disadvantages of employing the Hill Climbing algorithm for solving optimization problems.
    - Differentiate between Simple Hill Climbing and Steepest-Ascent Hill Climbing, highlighting their distinct approaches to selecting the next state.
    - Critically analyze why Hill Climbing is categorized as a greedy local search algorithm and explain the implications of this characteristic on its ability to guarantee optimal solutions.
    """

    gemini_api_key = os.getenv("GEMINI_API_KEY")
    if not gemini_api_key:
        raise ValueError(
            "Missing GEMINI_API_KEY. Add it to your .env file (or Streamlit secrets)."
        )

    client = OpenAI(
        api_key=gemini_api_key,
        base_url="https://generativelanguage.googleapis.com/v1beta/openai/",
    )

    response = client.chat.completions.create(
        model="gemini-2.5-flash",
        messages=[
            {"role": "system", "content": SYSTEM_PROMPT},
            {"role": "user", "content": user_query},
        ],
    )

    return response.choices[0].message.content

load_dotenv()
app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# maps unique session_id to vector store id
VECTOR_STORES: Dict[str, Any] = {}

# Extract raw page data
class AskQuestionRequest(BaseModel):
    user_query: str
    
@app.post("/ask-question")
async def ask_question(payload: AskQuestionRequest):
    try:
        answer = answer_question(payload.user_query)
        return {"answer": answer}
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error answering question: {e}")

if __name__ == "__main__":
    uvicorn.run(app, port=8000, host="0.0.0.0")