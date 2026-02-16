# 📚 MCQ Master - BCA Exam Preparation Platform

<div align="center">



**A modern, interactive MCQ practice platform for BCA students**

[
[
[
[

[🚀 Live Demo](#) -  [📖 Documentation](#features) -  [🐛 Report Bug](https://github.com/babamosie333/bca-mcq-hub/issues)

</div>

***

## ✨ Features

🎯 **500+ Curated MCQs** - Comprehensive question bank covering all major BCA subjects

⏱️ **Smart Timer System** - 30-minute timed tests with real-time countdown

📊 **Instant Results** - Detailed performance analysis with correct/incorrect breakdown

🎨 **Modern UI/UX** - Dark-themed, responsive design with smooth animations

📱 **Mobile Responsive** - Seamless experience across all devices

🔄 **Unit-wise Practice** - Each subject divided into 2 units with 50 questions each

***

## 📚 Subjects Covered

| Subject | Questions | Units | Topics |
|---------|-----------|-------|--------|
| 🎨 **Computer Graphics** | 100 | 2 | Interactive Graphics, Scan Conversion, Clipping Algorithms |
| 💾 **Database Management** | 100 | 2 | Data Models, DBMS Architecture, E-R Modeling |
| ⚙️ **Software Engineering** | 100 | 2 | Software Paradigms, Requirements Analysis |
| 📊 **Optimization Techniques** | 100 | 2 | Linear Programming, Game Theory, Network Analysis |
| 🔢 **Mathematics-III** | 100 | 2 | Laplace Transform, Fourier Series, PDEs |

***

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/babamosie333/bca-mcq-hub.git

# Navigate to project directory
cd bca-mcq-hub

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

***

## 🏗️ Project Structure

```
bca-mcq-hub/
├── src/
│   ├── app/
│   │   ├── page.tsx                    # Home page
│   │   ├── quiz/
│   │   │   └── [subject]/
│   │   │       └── page.tsx            # Quiz interface
│   │   └── result/
│   │       └── page.tsx                # Results page
│   └── data/
│       ├── types.ts                    # TypeScript interfaces
│       ├── subjects.ts                 # Subject metadata
│       ├── computer-graphics.ts        # CG MCQs
│       ├── dbms.ts                     # DBMS MCQs
│       ├── software-engineering.ts     # SE MCQs
│       ├── optimization.ts             # OT MCQs
│       └── mathematics.ts              # Math MCQs
├── public/
├── tailwind.config.ts
├── package.json
└── README.md
```

***

## 🎮 How to Use

1. **Choose a Subject** - Select from 5 available subjects on the home page
2. **Start Quiz** - Begin with Unit 1 (50 questions)
3. **Answer Questions** - Select your answer from 4 options (A, B, C, D)
4. **Track Progress** - Monitor your progress with the real-time timer
5. **Complete Units** - Finish both Unit 1 and Unit 2 (100 total questions)
6. **View Results** - Get instant feedback with detailed performance metrics

***

## 🛠️ Built With

- **[Next.js 15](https://nextjs.org/)** - React framework for production
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe JavaScript
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Lucide React](https://lucide.dev/)** - Beautiful icon library
- **[React](https://react.dev/)** - UI component library

***

## 🎨 Design Philosophy

- **Dark Theme First** - Easy on the eyes during long study sessions
- **Minimal Distractions** - Clean interface focused on learning
- **Instant Feedback** - Immediate validation after each answer
- **Progress Tracking** - Visual indicators for motivation
- **Accessibility** - Keyboard navigation and screen reader support

***



## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

***

## 🐛 Known Issues

- [ ] Timer doesn't pause when switching tabs (feature consideration)
- [ ] No bookmark feature for questions (planned)
- [ ] No practice mode without timer (planned)

***

## 🔮 Roadmap

- [ ] User authentication & progress saving
- [ ] Leaderboard system
- [ ] Bookmark difficult questions
- [ ] Practice mode (untimed)
- [ ] Subject-wise analytics
- [ ] PDF report generation
- [ ] Mobile app (React Native)

***

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

***

## 👨‍💻 Author

**Vikram Singh**

- Portfolio: [babamosie333.github.io/Personal-Portfolio](https://babamosie333.github.io/Personal-Portfolio/)
- GitHub: [@babamosie333](https://github.com/babamosie333)

***

## 🙏 Acknowledgments

- Question bank compiled from BCA curriculum
- UI inspiration from modern AI tools
- Icons by [Lucide](https://lucide.dev/)

***

## ⭐ Show Your Support

If this project helped you, please give it a ⭐ on GitHub!

***

<div align="center">

**Made with ❤️ for BCA students**
