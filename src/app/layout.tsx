import type { Metadata } from "next";
import "./globals.css";

export const metadata:Metadata = {
  title: "MCQ Master - BCA Exam Preparation Platform",
  description: "Practice 500+ MCQs across 5 BCA subjects. Master Computer Graphics, DBMS, Software Engineering, Optimization, and Mathematics with timed tests and instant results.",
  keywords: ["BCA", "MCQ", "exam preparation", "computer graphics", "DBMS", "software engineering", "optimization", "mathematics"],
  authors: [{ name: "Vikram Singh", url: "https://github.com/babamosie333" }],
  creator: "Vikram Singh",
  publisher: "MCQ Master",
  
  // OpenGraph for WhatsApp, Facebook, LinkedIn
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://bca-mcq-hub.vercel.app",
    siteName: "MCQ Master",
    title: "MCQ Master - BCA Exam Preparation Platform",
    description: "🎯 500+ Curated MCQs | ⏱️ Timed Tests | 📊 Instant Results | Master your BCA exams with interactive practice tests!",
    images: [
      {
        url: "https://bca-mcq-hub.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "MCQ Master - BCA Exam Preparation",
        type: "image/png",
      },
    ],
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "MCQ Master - BCA Exam Preparation",
    description: "Practice 500+ MCQs across 5 BCA subjects with timed tests and instant results!",
    images: ["https://bca-mcq-hub.vercel.app/og-image.png"],
    creator: "@babamosie333",
  },

  // Additional metadata
  manifest: "/manifest.json",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },

  // Theme color for mobile browsers
  themeColor: "#0f172a",
  colorScheme: "dark",

  // Verification (optional - add when you have these)
  // verification: {
  //   google: "your-google-verification-code",
  // },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
