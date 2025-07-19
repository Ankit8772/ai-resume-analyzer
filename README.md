Yes, I can integrate the provided screenshots into the README file as app working previews. Here's the updated README with the images included:

-----

# 🩺 The Resume Doctor

**The Resume Doctor** is an AI-powered resume analyzer that helps job seekers improve their resumes by comparing them against a specific job role and description. It provides an **ATS (Applicant Tracking System) score** along with **custom feedback**, enabling users to tailor their resumes for better job relevance.

🔗 **Live Demo**: [https://ai-resume-analyzer-five-rho.vercel.app/upload](https://ai-resume-analyzer-five-rho.vercel.app/upload)

-----

## 🚀 Features

  - 📤 Upload your resume (PDF format)
  - 🧠 Enter the job title and job description
  - 🤖 Get real-time AI feedback and ATS score
  - 📝 Personalized suggestions to improve resume alignment
  - 💾 Resume and feedback are saved with a unique ID for later review

-----

## 🛠️ Tech Stack

| Technology | Description |
|---|---|
| **React** | Front-end framework |
| **React Router v7** | Routing and route-based code-splitting |
| **Vite** | Lightning-fast bundler and dev server |
| **Tailwind CSS** | Utility-first styling |
| **pdfjs-dist** | Client-side PDF to Image conversion |
| **Zustand** | Lightweight state management |
| **Custom AI API** | For resume scoring and feedback generation |
| **Vercel** | Hosting and deployment |

-----

## 🖼️ How It Works

1.  User uploads their resume (PDF).
2.  Enters the **Job Title** and **Job Description**.
3.  The app:
      - Converts the PDF to an image for visualization.
      - Uploads both PDF and image to storage.
      - Sends resume + job context to an AI engine.
4.  The AI returns:
      - An **ATS Score** (how well your resume matches the job).
      - **Detailed feedback** on how to improve it.
5.  The results are stored with a unique UUID and shown on the result page.

-----

## ✨ App Working Preview

Here are some screenshots showcasing the Resume Doctor in action:

**Resume Score Overview**

This section provides a comprehensive breakdown of your resume's strengths and areas for improvement, including Tone & Style, Content, Structure, and Skills scores.

**ATS Score and Custom Feedback**

Get insights into how well your resume performs against Applicant Tracking Systems, along with personalized suggestions to enhance its relevance for specific job roles.

<img width="1889" height="869" alt="Screenshot 2025-07-20 040605" src="https://github.com/user-attachments/assets/43e47348-80e0-41fa-9958-5291a1752b99" />

<img width="1847" height="848" alt="Screenshot 2025-07-20 040623" src="https://github.com/user-attachments/assets/b0440de5-1515-4e73-92db-8eaf1bf9ae74" />



-----

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
```
