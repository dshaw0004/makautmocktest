import {Link} from "react-router-dom";
import {ArrowRight, BarChart3, Bot, Check, ClipboardList, LogIn, PlayCircle} from "lucide-react";

export default function LandingPage() {
  return (
    <div className="antialiased text-slate-900 bg-white">

      <header className="sticky top-0 z-30 backdrop-blur bg-white/80 border-b border-slate-100">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 flex items-center justify-between h-16" data-animate="">
          <a href="#" className="text-cyan-700 font-semibold tracking-tight text-lg">MMT</a>
          <nav className="hidden md:flex items-center gap-8 text-sm">
            <a href="#features" className="hover:text-cyan-700 transition-colors">Features</a>
            <a href="#pricing" className="hover:text-cyan-700 transition-colors">Pricing</a>
            <a href="#faq" className="hover:text-cyan-700 transition-colors">FAQ</a>
          </nav>
          <a href="#" className="inline-flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium border border-cyan-600 text-cyan-600 hover:bg-cyan-50 transition-colors">
            Login
            <LogIn className="w-4 h-4" />
          </a>
        </div>
      </header>

      <section className="relative overflow-hidden pt-24 lg:pt-32">
        <div className="absolute inset-x-0 top-0 -z-10 h-96 bg-gradient-to-b from-cyan-50 to-transparent"></div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">

          <div className="space-y-6" data-animate="">
            <h1 className="text-4xl/tight lg:text-5xl/tight font-semibold tracking-tight text-slate-900">
              Ace your exams<br />
              with <span className="text-cyan-700">AI-powered</span> practice
            </h1>
            <p className="text-lg text-slate-600 max-w-lg">
              Personalized mock questions, adaptive tests, and detailed analytics—all in one streamlined platform designed to elevate your scores.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
              <Link to="/start-test" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md text-white bg-cyan-700 hover:bg-cyan-800 transition-colors shadow-sm">
                Get started free
                <ArrowRight className="w-4 h-4" />
              </Link>
              <button className="inline-flex items-center gap-2 text-cyan-700 hover:text-cyan-800 transition-colors">
                <PlayCircle className="w-5 h-5" />
                Watch demo
              </button>
            </div>
          </div>

          <div className="relative" data-animate="">
            <img src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80" alt="Student preparing for exams" className="w-full rounded-lg shadow-sm ring-1 ring-slate-200 object-cover" />
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="h-px bg-slate-100 my-24"></div>
      </div>

      <section id="features" className="mx-auto max-w-7xl px-6 lg:px-8 space-y-16">

        <div className="text-center max-w-2xl mx-auto space-y-4" data-animate="">
          <h2 className="text-3xl/tight font-semibold tracking-tight text-slate-900">
            Everything you need to excel
          </h2>
          <p className="text-slate-600">
            A focused set of tools to turn preparation into mastery.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          <div className="space-y-4" data-animate="">
            <div className="w-12 h-12 flex items-center justify-center rounded-md bg-cyan-50 text-cyan-700 ring-1 ring-cyan-100">
              <Bot className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-medium tracking-tight">Adaptive Questioning</h3>
            <p className="text-slate-600">
              Our engine tailors each question to your skill level, ensuring optimal challenge and growth.
            </p>
          </div>

          <div className="space-y-4" data-animate="">
            <div className="w-12 h-12 flex items-center justify-center rounded-md bg-cyan-50 text-cyan-700 ring-1 ring-cyan-100">
              <ClipboardList className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-medium tracking-tight">Timed Mock Tests</h3>
            <p className="text-slate-600">
              Simulate real-exam pressure with customizable, timed sessions you can take anywhere.
            </p>
          </div>

          <div className="space-y-4" data-animate="">
            <div className="w-12 h-12 flex items-center justify-center rounded-md bg-cyan-50 text-cyan-700 ring-1 ring-cyan-100">
              <BarChart3 className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-medium tracking-tight">Actionable Insights</h3>
            <p className="text-slate-600">
              Granular analytics pinpoint weak spots, so you can focus your study time where it matters.
            </p>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="h-px bg-slate-100 my-24"></div>
      </div>

      <section id="pricing" className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12">

          <div className="space-y-6" data-animate="">
            <h2 className="text-3xl font-semibold tracking-tight">Fair pricing for serious learners</h2>
            <p className="text-slate-600">
              Start free and upgrade when you’re ready for advanced analytics and unlimited tests.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-cyan-700 mt-1" />
                <span>Unlimited practice questions</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-cyan-700 mt-1" />
                <span>AI-generated explanations</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-cyan-700 mt-1" />
                <span>Detailed progress tracking</span>
              </li>
            </ul>
            <a href="#" className="inline-flex items-center gap-2 px-6 py-3 rounded-md text-white bg-cyan-700 hover:bg-cyan-800 transition-colors shadow-sm">
              Go Pro
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div className="border border-slate-200 rounded-xl p-8 shadow-sm bg-white" data-animate="">
            <h3 className="text-lg font-medium tracking-tight text-slate-900">Pro</h3>
            <p className="mt-2 text-slate-600">Everything you need to dominate your exams</p>
            <div className="flex items-end gap-1 mt-6">
              <span className="text-5xl font-semibold tracking-tight">$9</span>
              <span className="pb-1 text-slate-600">/ month</span>
            </div>
            <button className="mt-6 w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-md text-white bg-cyan-700 hover:bg-cyan-800 transition-colors">
              Start free trial
            </button>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="h-px bg-slate-100 my-24"></div>
      </div>

      <section id="faq" className="mx-auto max-w-4xl px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-4" data-animate="">
          <h2 className="text-3xl font-semibold tracking-tight">Frequently asked</h2>
          <p className="text-slate-600">Everything else you might be wondering about.</p>
        </div>

        <div className="space-y-8" data-animate="">
          <details className="border-slate-200 border rounded-lg pt-6 pr-6 pb-6 pl-6">
            <summary className="cursor-pointer font-medium">What exams do you support?</summary>
            <p className="mt-4 text-slate-600">We currently cover standardized exams across STEM, business, and languages with more added monthly.</p>
          </details>
          <details className="border border-slate-200 rounded-lg p-6">
            <summary className="cursor-pointer font-medium">Can I cancel anytime?</summary>
            <p className="mt-4 text-slate-600">Absolutely, there are no contracts and you can cancel directly from your dashboard.</p>
          </details>
          <details className="border border-slate-200 rounded-lg p-6">
            <summary className="cursor-pointer font-medium">Is my progress saved across devices?</summary>
            <p className="mt-4 text-slate-600">Yes—your data syncs in real time so you can prep seamlessly on desktop, tablet, or phone.</p>
          </details>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="h-px bg-slate-100 my-24"></div>
      </div>

      <footer className="mx-auto max-w-7xl px-6 lg:px-8 pb-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6" data-animate="">
          <a href="#" className="text-cyan-700 font-semibold tracking-tight text-lg">Makaut Mock Test</a>
          <p className="text-sm text-slate-500">© <span id="year">2025</span> MMT. All rights reserved.</p>
          <nav className="flex gap-4 text-sm">
            <a href="#" className="hover:text-cyan-700 transition-colors">Privacy</a>
            <a href="#" className="hover:text-cyan-700 transition-colors">Terms</a>
            <a href="#" className="hover:text-cyan-700 transition-colors">Contact</a>
          </nav>
        </div>
      </footer>


    </div>

  );
}

/*
  <script>
    document.getElementById('year').textContent = new Date().getFullYear();
    lucide.createIcons({ strokeWidth: 1.5 });
  </script>
  <script>
    document.addEventListener('DOMContentLoaded', () => {
      const els = document.querySelectorAll('[data-animate]');
      els.forEach((el, i) => {
        setTimeout(() => {
          el.classList.remove('opacity-0', 'translate-y-6', 'blur-sm');
        }, 200 + i * 120);
      });
    });
  </script>
  */
