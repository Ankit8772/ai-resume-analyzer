# 🩺 The Resume Doctor

**The Resume Doctor** is an AI-powered resume analyzer that helps job seekers improve their resumes by comparing them against a specific job role and description. It provides an **ATS (Applicant Tracking System) score** along with **custom feedback**, enabling users to tailor their resumes for better job relevance.

🔗 **Live Demo**: [https://ai-resume-analyzer-five-rho.vercel.app/upload](https://ai-resume-analyzer-five-rho.vercel.app/upload)

---

## 🚀 Features

- 📤 Upload your resume (PDF format)
- 🧠 Enter the job title and job description
- 🤖 Get real-time AI feedback and ATS score
- 📝 Personalized suggestions to improve resume alignment
- 💾 Resume and feedback are saved with a unique ID for later review

---

## 🛠️ Tech Stack

| Technology         | Description                                   |
|--------------------|-----------------------------------------------|
| **React**          | Front-end framework                           |
| **React Router v7**| Routing and route-based code-splitting        |
| **Vite**           | Lightning-fast bundler and dev server         |
| **Tailwind CSS**   | Utility-first styling                         |
| **pdfjs-dist**     | Client-side PDF to Image conversion           |
| **Zustand**        | Lightweight state management                  |
| **Custom AI API**  | For resume scoring and feedback generation    |
| **Vercel**         | Hosting and deployment                        |

---

## 🖼️ How It Works

1. User uploads their resume (PDF).
2. Enters the **Job Title** and **Job Description**.
3. The app:
   - Converts the PDF to an image for visualization.
   - Uploads both PDF and image to storage.
   - Sends resume + job context to an AI engine.
4. The AI returns:
   - An **ATS Score** (how well your resume matches the job).
   - **Detailed feedback** on how to improve it.
5. The results are stored with a unique UUID and shown on the result page.

---

## 📦 Getting Started (Local Development)

### Prerequisites

- Node.js (v16+)
- npm

### Steps

```bash
# 1. Clone the repository
git clone https://github.com/your-username/ai-resume-analyzer.git
cd ai-resume-analyzer

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev

# 4. Visit the app at
http://localhost:5173
