# QuestionAI - AI-Powered Question Generation Engine

> Transform any topic into thoughtfully crafted, contextually relevant questions using advanced AI technology. Perfect for educators, students, and content creators seeking to enhance learning and engagement.

## 🎯 Overview

QuestionAI is a modern, full-stack application that leverages Google's Gemini API to generate high-quality, contextually relevant questions from any topic. The system combines advanced prompt engineering with a professional, responsive web interface to deliver an exceptional user experience.

### Key Features

- ✨ **AI-Powered Generation** - Powered by Google's Gemini 2.5 Flash API
- ⚡ **Lightning Fast** - Instant question generation with optimized backend
- 🎨 **Beautiful UI** - Modern, responsive design with professional styling
- 🔒 **Smart Prompt Engineering** - Carefully crafted system prompts ensure quality
- 📱 **Fully Responsive** - Works seamlessly on desktop, tablet, and mobile
- 🎓 **Versatile** - Generate questions for education, training, interviews, research, and more

## 🏗️ Architecture

### Tech Stack

**Backend:**
- FastAPI - High-performance Python web framework
- Pydantic - Data validation and settings management
- OpenAI SDK - Interface for Google Generative Language API
- Python 3.13+

**Frontend:**
- Next.js 14+ - React framework for production
- React 18+ - UI library
- TypeScript - Type-safe JavaScript
- Lucide React - Beautiful SVG icons
- Pure CSS3 - Modern styling with CSS variables
- Node.js 18+

## 🚀 Getting Started

### Prerequisites

- **Python 3.13+** with pip
- **Node.js 18+** with npm
- **Google API Key** for Gemini API access

### Installation

#### 1. Clone the Repository

```bash
git clone <repository-url>
cd Multi\ PDF\ RAG
```

#### 2. Backend Setup

```bash
cd backend

# Create virtual environment
python -m venv .venv
source .venv/bin/activate  # On Windows: .venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# Create .env file with your API keys
echo "GEMINI_API_KEY=your_api_key_here" > .env
```

#### 3. Frontend Setup

```bash
cd ../frontend

# Install dependencies
npm install

# Create .env.local file
echo "NEXT_PUBLIC_API_BASE_URL=http://localhost:8000" > .env.local
```

### Running the Application

#### Start Backend Server

```bash
cd backend
source .venv/bin/activate
python server.py
```

The backend will be available at `http://localhost:8000`

#### Start Frontend Development Server

```bash
cd frontend
npm run dev
```

The frontend will be available at `http://localhost:3000`

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## 📚 API Documentation

### Base URL

```
http://localhost:8000
```

### Endpoints

#### POST `/ask-question`

Generate questions based on a user query.

**Request:**
```json
{
  "user_query": "What are the main types of algorithms?"
}
```

**Response:**
```json
{
  "answer": "1. Explain the fundamental working principle of sorting algorithms...\n2. Describe the differences between recursive and iterative algorithms...\n3. Compare the time complexity of merge sort and quick sort..."
}
```

**cURL Example:**
```bash
curl -X POST http://localhost:8000/ask-question \
  -H "Content-Type: application/json" \
  -d '{"user_query": "machine learning basics"}'
```

## 🎨 Frontend Features

### Pages & Sections

1. **Navigation Header**
   - Logo and branding
   - Quick navigation links
   - "Try Now" CTA button
   - Responsive mobile menu

2. **Hero Section**
   - Eye-catching headline
   - Clear value proposition
   - Call-to-action buttons
   - Impressive statistics

3. **Features Section**
   - AI-Powered Generation
   - Lightning Fast Responses
   - Diverse Question Types
   - Developer Friendly APIs
   - Smart Prompt Engineering
   - Context-Aware Questions

4. **How It Works**
   - 4-step process visualization
   - Clear descriptions
   - Visual flow

5. **Use Cases**
   - Education & Teaching
   - Corporate Training
   - Content Creation
   - Interview Preparation
   - Research & Academia
   - Skill Development

6. **Interactive Chat**
   - Beautiful chat interface
   - Real-time message updates
   - Error handling
   - Auto-scrolling

7. **Footer**
   - Comprehensive links
   - Product information
   - Company details
   - Resources
   - Legal links

### Design System

The frontend uses a modern color palette with CSS variables:

```css
--accent: #6366f1 (Indigo)
--accent-dark: #4f46e5
--accent-light: #818cf8
--text: #1a1a1a
--text-secondary: #666666
--bg: #ffffff
--bg-secondary: #f5f7fa
--border: #e0e7ff
```

All styling is built with pure CSS3 for optimal performance and customization.

## 📁 Project Structure

```
Multi PDF RAG/
├── backend/
│   ├── server.py              # FastAPI application
│   ├── requirements.txt        # Python dependencies
│   ├── .env                   # Environment variables (create this)
│   ├── .venv/                 # Virtual environment
│   └── pyproject.toml         # Project configuration
│
├── frontend/
│   ├── src/
│   │   ├── app/
│   │   │   ├── page.tsx       # Landing page
│   │   │   ├── layout.tsx     # Root layout
│   │   │   └── globals.css    # Global styles
│   │   ├── components/
│   │   │   ├── Chat.tsx       # Chat component
│   │   │   └── PdfProcessor.tsx
│   │   └── lib/
│   │       ├── config.ts      # Configuration
│   │       └── types.ts       # TypeScript types
│   ├── package.json           # Node dependencies
│   ├── tsconfig.json          # TypeScript config
│   ├── next.config.mjs        # Next.js config
│   └── .env.local            # Environment variables (create this)
│
├── readme.md                  # This file
└── FRONTEND_README.md         # Frontend documentation
```
## 📊 How It Works

### Question Generation Flow

1. **User Input** - User enters a topic in the chat interface
2. **API Request** - Frontend sends request to backend API
3. **Prompt Engineering** - Backend crafts a sophisticated system prompt
4. **API Call** - System makes request to Google Gemini API
5. **Response** - Gemini generates contextually relevant questions
6. **Display** - Frontend renders questions in the chat interface


## 🔐 Security Considerations

- API keys are stored securely in environment variables
- CORS is configured appropriately
- Request validation is enforced
- No sensitive data is logged
- Frontend communicates only with trusted backend

## 📦 Dependencies

### Backend

See `backend/requirements.txt` for full list. Key dependencies:
- fastapi
- pydantic
- openai
- python-dotenv
- uvicorn

### Frontend

See `frontend/package.json` for full list. Key dependencies:
- next
- react
- typescript
- lucide-react