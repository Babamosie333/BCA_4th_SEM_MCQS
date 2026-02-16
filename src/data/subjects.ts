export interface Subject {
  id: string;
  name: string;
  icon: string;
  color: string;
  totalQuestions: number;
}

export const SUBJECTS: Subject[] = [
  {
    id: "cg",  // ✅ Changed from "computer-graphics"
    name: "Computer Graphics & Animation",
    icon: "🎨",
    color: "from-pink-500 to-rose-500",
    totalQuestions: 100,
  },
  {
    id: "dbms",  // ✅ Already correct
    name: "Database Management System",
    icon: "💾",
    color: "from-blue-500 to-cyan-500",
    totalQuestions: 100,
  },
  {
    id: "se",  // ✅ Changed from "software-engineering"
    name: "Software Engineering",
    icon: "⚙️",
    color: "from-purple-500 to-indigo-500",
    totalQuestions: 100,
  },
  {
    id: "ot",  // ✅ Changed from "optimization"
    name: "Optimization Techniques",
    icon: "📊",
    color: "from-green-500 to-emerald-500",
    totalQuestions: 100,
  },
  {
    id: "math",  // ✅ Changed from "mathematics"
    name: "Mathematics-III",
    icon: "🔢",
    color: "from-orange-500 to-amber-500",
    totalQuestions: 100,
  },
];
