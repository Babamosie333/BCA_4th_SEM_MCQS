"use client";

import { useRouter } from "next/navigation";
import { BookOpen, Trophy, Clock, Target } from "lucide-react";
import { SUBJECTS } from "@/data/subjects";

export default function Home() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-100">
      {/* Header */}
      <header className="border-b border-slate-800/50 bg-slate-900/30 backdrop-blur">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-gradient-to-r from-cyan-500 to-blue-500 p-3 rounded-xl">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  MCQ Master
                </h1>
                <p className="text-slate-400 text-sm">Test Your Knowledge</p>
              </div>
            </div>
            <div className="hidden md:flex items-center gap-6">
              <div className="flex items-center gap-2 text-slate-300">
                <Trophy className="w-5 h-5 text-yellow-400" />
                <span className="font-semibold">500+ Questions</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Target className="w-5 h-5 text-green-400" />
                <span className="font-semibold">5 Subjects</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h2 className="text-6xl font-bold text-white mb-8">
            Master Your <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Exams</span>
          </h2>
          <p className="text-4xl font-bold text-slate-200 max-w-4xl mx-auto leading-relaxed">
            Practice with <span className="text-cyan-400">100 MCQs</span> per subject. Each subject has <span className="text-cyan-400">2 units</span> with <span className="text-cyan-400">50 questions</span> each.
          </p>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <div className="bg-slate-900/30 backdrop-blur rounded-xl p-6 border border-slate-800/50 hover:border-cyan-500/50 transition-all">
            <div className="bg-cyan-500/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4 ring-1 ring-cyan-400/30">
              <Clock className="w-6 h-6 text-cyan-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Timed Tests</h3>
            <p className="text-slate-400">30 minutes to complete each subject with real-time timer</p>
          </div>
          <div className="bg-slate-900/30 backdrop-blur rounded-xl p-6 border border-slate-800/50 hover:border-blue-500/50 transition-all">
            <div className="bg-blue-500/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4 ring-1 ring-blue-400/30">
              <Target className="w-6 h-6 text-blue-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Instant Results</h3>
            <p className="text-slate-400">Get detailed performance analysis after each test</p>
          </div>
          <div className="bg-slate-900/30 backdrop-blur rounded-xl p-6 border border-slate-800/50 hover:border-green-500/50 transition-all">
            <div className="bg-green-500/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4 ring-1 ring-green-400/30">
              <Trophy className="w-6 h-6 text-green-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Track Progress</h3>
            <p className="text-slate-400">Monitor your improvement across all subjects</p>
          </div>
        </div>

        {/* Subjects Grid */}
        <div>
          <h3 className="text-3xl font-bold text-white mb-8 text-center">Choose Your Subject</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SUBJECTS.map((subject) => (
              <button
                key={subject.id}
                onClick={() => router.push(`/quiz/${subject.id}`)}
                className="group bg-slate-900/30 backdrop-blur rounded-2xl p-8 border-2 border-slate-800/50 hover:border-cyan-500/50 hover:bg-slate-900/50 transition-all transform hover:-translate-y-2"
              >
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">
                  {subject.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  {subject.name}
                </h3>
                <div className="flex items-center justify-between mt-4 pt-4 border-t border-slate-800">
                  <span className="text-slate-400 text-sm font-semibold">
                    {subject.totalQuestions} Questions
                  </span>
                  <span className="text-cyan-400 font-bold group-hover:translate-x-2 transition-transform">
                    Start →
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800/50 bg-slate-900/30 backdrop-blur mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-slate-400">
            <p className="mb-2">Created with 💜Babamosie333 - Vikram Singh  for Students</p>
            <div className="flex items-center justify-center gap-6">
              <a
                href="https://github.com/babamosie333"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-cyan-400 transition-colors font-semibold"
              >
                GitHub
              </a>
              <span className="text-slate-600">•</span>
              <a
                href="https://babamosie333.github.io/Personal-Portfolio/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-cyan-400 transition-colors font-semibold"
              >
                Portfolio
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
