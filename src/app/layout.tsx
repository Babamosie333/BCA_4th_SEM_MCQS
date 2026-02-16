import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "MCQ Master - BCA 4th SEM MCQs",
  description: "Boost your BCA 4th sem exam prep with 500+ MCQs...",
  
  openGraph: {
    title: "BCA 4th SEM MCQs | MCQ Master",
    description: "Boost your exam prep with comprehensive multiple choice questions for BCA 4th semester.",
    url: "https://bca-4th-sem-mcqs.vercel.app",  // ← YOUR DEPLOYED URL
    siteName: "MCQ Master",
    images: [
      {
        url: "https://bca-4th-sem-mcqs.vercel.app/og-image.png",  // ← FULL ABSOLUTE URL
        width: 1200,
        height: 630,
        alt: "BCA 4th SEM MCQs - Created by Vikram Singh",
      },
    ],
  },
  
  twitter: {
    card: "summary_large_image",
    images: ["https://bca-4th-sem-mcqs.vercel.app/og-image.png"],  // ← FULL ABSOLUTE URL
  },
};
