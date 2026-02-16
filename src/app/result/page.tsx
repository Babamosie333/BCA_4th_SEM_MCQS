"use client";

import { Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Award, Clock, TrendingUp, Github, Globe, ArrowLeft, Trophy, Target } from "lucide-react";

function ResultContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  
  const subject = searchParams.get("subject") || "";
  const score = parseInt(searchParams.get("score") || "0");
  const total = parseInt(searchParams.get("total") || "0");
  const timeTaken = parseInt(searchParams.get("time") || "0");
  const percentage = Math.round((score / total) * 100);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}m ${secs}s`;
  };

  const getGrade = (percentage: number) => {
    if (percentage >= 90) return { grade: "A+", message: "Outstanding! 🌟", color: "text-green-600" };
    if (percentage >= 80) return { grade: "A", message: "Excellent! 🎉", color: "text-green-500" };
    if (percentage >= 70) return { grade: "B+", message: "Great Job! 👏", color: "text-blue-600" };
    if (percentage >= 60) return { grade: "B", message: "Good Work! 👍", color: "text-blue-500" };
    if (percentage >= 50) return { grade: "C", message: "Keep Practicing! 💪", color: "text-yellow-600" };
    return { grade: "D", message: "Need Improvement 📚", color: "text-red-600" };
  };

  const gradeInfo = getGrade(percentage);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 py-12 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <button
          onClick={() => router.push("/")}
          className="flex items-center text-cyan-400 hover:text-cyan-300 mb-6 transition-colors"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Home
        </button>

        {/* Main Result Card */}
        <div className="bg-gradient-to-r from-slate-900/50 to-slate-800/50 backdrop-blur rounded-2xl border border-slate-700/50 shadow-2xl p-8 mb-8">
          <div className="text-center mb-8">
            <Trophy className="w-20 h-20 mx-auto mb-4 text-yellow-400 animate-bounce" />
            <h1 className="text-5xl font-bold text-white mb-3">Test Completed! 🎉</h1>
            <p className="text-xl text-cyan-400">{subject}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {/* Score Card */}
            <div className="bg-slate-800/50 backdrop-blur-md rounded-xl p-6 text-center border border-cyan-500/30">
              <Award className="w-12 h-12 mx-auto mb-3 text-cyan-400" />
              <h3 className="text-lg font-semibold text-slate-300 mb-2">Your Score</h3>
              <div className="text-6xl font-bold text-white mb-2">
                {score}<span className="text-3xl text-slate-400">/{total}</span>
              </div>
              <p className="text-xl font-semibold text-cyan-400">{percentage}%</p>
            </div>

            {/* Time Card */}
            <div className="bg-slate-800/50 backdrop-blur-md rounded-xl p-6 text-center border border-blue-500/30">
              <Clock className="w-12 h-12 mx-auto mb-3 text-blue-400" />
              <h3 className="text-lg font-semibold text-slate-300 mb-2">Time Taken</h3>
              <div className="text-4xl font-bold text-white mb-2">
                {formatTime(timeTaken)}
              </div>
              <p className="text-slate-400">
                Out of 30 minutes
              </p>
            </div>

            {/* Grade Card */}
            <div className="bg-slate-800/50 backdrop-blur-md rounded-xl p-6 text-center border border-green-500/30">
              <TrendingUp className="w-12 h-12 mx-auto mb-3 text-green-400" />
              <h3 className="text-lg font-semibold text-slate-300 mb-2">Grade</h3>
              <div className="text-6xl font-bold text-white mb-2">
                {gradeInfo.grade}
              </div>
              <p className="text-xl font-semibold text-green-400">{gradeInfo.message}</p>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="bg-slate-800/50 rounded-full h-4 overflow-hidden">
            <div
              className="bg-gradient-to-r from-green-500 to-cyan-500 h-full transition-all duration-1000 ease-out"
              style={{ width: `${percentage}%` }}
            ></div>
          </div>
        </div>

        {/* Performance Analysis */}
        <div className="bg-slate-900/50 backdrop-blur rounded-2xl border border-slate-700/50 shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
            <Target className="w-8 h-8 mr-3 text-cyan-400" />
            Performance Analysis
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-green-900/30 to-green-800/30 rounded-xl p-6 border-2 border-green-500/30">
              <h3 className="text-xl font-bold text-green-400 mb-2">Correct Answers</h3>
              <p className="text-5xl font-bold text-green-400">{score}</p>
              <p className="text-green-300 mt-2">Keep up the good work! ✓</p>
            </div>
            <div className="bg-gradient-to-br from-red-900/30 to-red-800/30 rounded-xl p-6 border-2 border-red-500/30">
              <h3 className="text-xl font-bold text-red-400 mb-2">Incorrect Answers</h3>
              <p className="text-5xl font-bold text-red-400">{total - score}</p>
              <p className="text-red-300 mt-2">Review these topics ✗</p>
            </div>
          </div>
        </div>

        {/* Developer Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* GitHub Card */}
          <a
            href="https://github.com/babamosie333"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-gradient-to-br from-slate-900/50 to-slate-800/50 backdrop-blur rounded-2xl border border-slate-700/50 shadow-lg p-8 hover:shadow-2xl hover:border-cyan-500/50 transition-all transform hover:-translate-y-2"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-white rounded-full p-4 group-hover:scale-110 transition-transform">
                <Github className="w-10 h-10 text-slate-900" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">GitHub Profile</h3>
                <p className="text-slate-400">@babamosie333</p>
              </div>
            </div>
            <p className="text-slate-300 mb-4 leading-relaxed">
              Explore my coding projects, open-source contributions, and development journey on GitHub.
            </p>
            <div className="flex items-center text-cyan-400 font-bold group-hover:text-cyan-300 transition-colors">
              <span>Visit My GitHub</span>
              <ArrowLeft className="w-5 h-5 ml-2 rotate-180 group-hover:translate-x-2 transition-transform" />
            </div>
          </a>

          {/* Portfolio Card */}
          <a
            href="https://babamosie333.github.io/Personal-Portfolio/"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-gradient-to-br from-cyan-900/30 to-blue-900/30 backdrop-blur rounded-2xl border border-cyan-500/30 shadow-lg p-8 hover:shadow-2xl hover:border-cyan-400/50 transition-all transform hover:-translate-y-2"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-white rounded-full p-4 group-hover:scale-110 transition-transform">
                <Globe className="w-10 h-10 text-cyan-600" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Portfolio</h3>
                <p className="text-cyan-200">My Work & Projects</p>
              </div>
            </div>
            <p className="text-cyan-100 mb-4 leading-relaxed">
              Discover my portfolio showcasing web development projects, skills, and professional achievements.
            </p>
            <div className="flex items-center text-white font-bold group-hover:text-cyan-100 transition-colors">
              <span>View Portfolio</span>
              <ArrowLeft className="w-5 h-5 ml-2 rotate-180 group-hover:translate-x-2 transition-transform" />
            </div>
          </a>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-4 justify-center">
          <button
            onClick={() => router.push("/")}
            className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-cyan-600 hover:to-blue-600 shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
          >
            Try Another Subject
          </button>
          <button
            onClick={() => router.back()}
            className="bg-slate-800 text-cyan-400 border-2 border-cyan-500 px-8 py-4 rounded-xl font-bold text-lg hover:bg-slate-700 shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
          >
            Back to Quiz
          </button>
        </div>
      </div>
    </div>
  );
}

export default function ResultPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-cyan-400 mx-auto mb-4"></div>
          <p className="text-slate-400">Loading results...</p>
        </div>
      </div>
    }>
      <ResultContent />
    </Suspense>
  );
}
