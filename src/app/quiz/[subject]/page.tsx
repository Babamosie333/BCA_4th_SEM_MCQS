"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { Timer, CheckCircle, XCircle, ArrowLeft } from "lucide-react";
import { SUBJECTS } from "@/data/subjects";
import { CG_MCQS } from "@/data/computer-graphics";
import { DBMS_MCQS } from "@/data/dbms";
import { SE_MCQS } from "@/data/software-engineering";
import { OT_MCQS } from "@/data/optimization";
import { MATH_MCQS } from "@/data/mathematics";
import type { MCQ } from "@/data/types";

export default function QuizPage() {
  const params = useParams();
  const router = useRouter();
  const subjectId = params.subject as string;

  const subject = SUBJECTS.find((s) => s.id === subjectId);

  // ✅ Get MCQs ONLY for the selected subject
  const getMcqsForSubject = (): MCQ[] => {
    switch (subjectId) {
      case "cg":
        return CG_MCQS;
      case "dbms":
        return DBMS_MCQS;
      case "se":
        return SE_MCQS;
      case "ot":
        return OT_MCQS;
      case "math":
        return MATH_MCQS;
      default:
        return [];
    }
  };

  const mcqs = getMcqsForSubject(); // Get only this subject's questions

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(1800); // 30 minutes for 100 questions

  // Timer
  useEffect(() => {
    if (timeLeft === 0) {
      alert("Time's up!");
      router.push(`/result?subject=${encodeURIComponent(subject?.name || "")}&score=${score}&total=${mcqs.length}&time=${1800}`);
      return;
    }
    const timer = setInterval(() => setTimeLeft((t) => t - 1), 1000);
    return () => clearInterval(timer);
  }, [timeLeft, router, subject, score, mcqs.length]);

  if (!subject) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">Subject not found</h1>
          <button
            onClick={() => router.push("/")}
            className="bg-cyan-500 text-white px-6 py-3 rounded-lg hover:bg-cyan-600"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  if (mcqs.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 flex items-center justify-center">
        <div className="text-center bg-slate-900/50 rounded-xl p-8 border border-slate-800">
          <h1 className="text-2xl font-bold text-white mb-4">No questions available</h1>
          <p className="text-slate-400 mb-6">
            Questions for {subject.name} are not available yet.
          </p>
          <button
            onClick={() => router.push("/")}
            className="bg-cyan-500 text-white px-6 py-3 rounded-lg hover:bg-cyan-600"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  const currentMcq = mcqs[currentIndex];

  const handleAnswer = (option: string) => {
    if (isAnswered) return;
    setSelectedAnswer(option);
    setIsAnswered(true);
    if (option === currentMcq.correct) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < mcqs.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setSelectedAnswer(null);
      setIsAnswered(false);
    } else {
      // Quiz complete - go to result page
      const timeTaken = 1800 - timeLeft;
      router.push(
        `/result?subject=${encodeURIComponent(subject.name)}&score=${score}&total=${mcqs.length}&time=${timeTaken}`
      );
    }
  };

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-100">
      <div className="relative mx-auto max-w-4xl px-4 py-8">
        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <button
            onClick={() => router.push("/")}
            className="flex items-center gap-2 text-sm text-slate-400 hover:text-cyan-300 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to subjects
          </button>
          <div className="flex items-center gap-2 rounded-full bg-slate-900/50 px-4 py-2 ring-1 ring-cyan-400/30">
            <Timer className="h-4 w-4 text-cyan-400" />
            <span className="font-mono text-sm font-semibold text-white">
              {String(minutes).padStart(2, "0")}:{String(seconds).padStart(2, "0")}
            </span>
          </div>
        </div>

        {/* Subject Title */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-white mb-2">{subject.name}</h1>
          <p className="text-slate-400">Complete all {mcqs.length} questions</p>
        </div>

        {/* Progress */}
        <div className="mb-8">
          <div className="mb-2 flex items-center justify-between text-sm">
            <span className="text-slate-400">
              Question {currentIndex + 1} of {mcqs.length}
            </span>
            <span className="font-semibold text-cyan-300">
              Score: {score}/{mcqs.length}
            </span>
          </div>
          <div className="h-2 overflow-hidden rounded-full bg-slate-800">
            <div
              className="h-full bg-gradient-to-r from-cyan-500 to-cyan-400 transition-all"
              style={{ width: `${((currentIndex + 1) / mcqs.length) * 100}%` }}
            />
          </div>
        </div>

        {/* Question Card */}
        <div className="mb-8 rounded-2xl border border-slate-800/50 bg-slate-900/30 p-8 shadow-2xl backdrop-blur">
          <div className="mb-6">
            <span className="mb-2 inline-block rounded-full bg-cyan-500/10 px-3 py-1 text-xs font-semibold text-cyan-300 ring-1 ring-cyan-400/30">
              Unit {currentMcq.unit}
            </span>
            <h2 className="mt-4 text-xl font-semibold text-white leading-relaxed">
              {currentMcq.question}
            </h2>
          </div>

          {/* Options */}
          <div className="space-y-3">
            {Object.entries(currentMcq.options).map(([key, value]) => {
              const isCorrect = key === currentMcq.correct;
              const isSelected = key === selectedAnswer;
              const showFeedback = isAnswered;

              let bgClass = "bg-slate-800/30 hover:bg-slate-800/50";
              let borderClass = "border-slate-700";
              let icon = null;

              if (showFeedback) {
                if (isCorrect) {
                  bgClass = "bg-green-500/20";
                  borderClass = "border-green-400/60";
                  icon = <CheckCircle className="h-5 w-5 text-green-400" />;
                } else if (isSelected && !isCorrect) {
                  bgClass = "bg-red-500/20";
                  borderClass = "border-red-400/60";
                  icon = <XCircle className="h-5 w-5 text-red-400" />;
                }
              }

              return (
                <button
                  key={key}
                  onClick={() => handleAnswer(key)}
                  disabled={isAnswered}
                  className={`flex w-full items-center justify-between rounded-xl border p-4 text-left transition-all ${bgClass} ${borderClass} ${
                    !isAnswered ? "hover:border-cyan-400/50 cursor-pointer" : "cursor-default"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-700/50 font-mono text-sm font-semibold text-slate-300">
                      {key.toUpperCase()}
                    </span>
                    <span className="text-sm text-slate-200">{value}</span>
                  </div>
                  {icon}
                </button>
              );
            })}
          </div>
        </div>

        {/* Next Button */}
        {isAnswered && (
          <button
            onClick={handleNext}
            className="w-full rounded-xl bg-gradient-to-r from-cyan-500 to-cyan-600 px-6 py-4 font-semibold text-white transition-all hover:from-cyan-600 hover:to-cyan-700 hover:shadow-lg hover:shadow-cyan-500/50"
          >
            {currentIndex < mcqs.length - 1 ? "Next Question →" : "Finish Quiz ✓"}
          </button>
        )}

        {/* Must select answer prompt */}
        {!isAnswered && (
          <div className="text-center text-sm text-slate-400">
            Select an answer to continue
          </div>
        )}
      </div>
    </main>
  );
}
