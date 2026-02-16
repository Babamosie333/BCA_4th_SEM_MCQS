import type { Metadata } from "next";
import "./globals.css";

export const metadata:Metadata = {
  title: "MCQ Master - BCA 4th SEM MCQs",
  description:
    "Boost your BCA 4th sem exam prep with 500+ MCQs across Computer Graphics, DBMS, Software Engineering, Optimization Techniques, and Mathematics-III.",
  openGraph: {
    title: "BCA 4th SEM MCQs | MCQ Master",
    description:
      "Boost your exam prep with comprehensive multiple choice questions for BCA 4th semester.",
    url: "https://bca-4th-sem-mcqs.vercel.app", // Change to your actual deployed URL
    siteName: "MCQ Master",
    images: [
      {
        url: "https://bca-4th-sem-mcqs.vercel.app/og-image.png", // Change to your actual deployed URL
        width: 1200,
        height: 630,
        alt: "BCA 4th SEM MCQs - Created by Vikram Singh",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BCA 4th SEM MCQs | MCQ Master",
    description:
      "Practice 500+ MCQs for BCA 4th sem with timed tests and instant results.",
    images: ["https://bca-4th-sem-mcqs.vercel.app/og-image.png"], // Change to your actual deployed URL
  },
  themeColor: "#0f172a",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
