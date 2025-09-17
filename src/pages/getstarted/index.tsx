import {Link} from "react-router-dom";
import {ArrowRight, BarChart3, Bot, Check, ClipboardList, LogIn, PlayCircle} from "lucide-react";

export default function LandingPage() {
  return (
    <div className="antialiased text-slate-900 dark:text-slate-200 bg-white dark:bg-slate-900">

      {/* The existing header is in a separate component, so we don't need to touch this part. */}
      {/* The global Header component will be used instead */}

      <section className="relative overflow-hidden pt-24 lg:pt-32">
        <div className="absolute inset-x-0 top-0 -z-10 h-96 bg-gradient-to-b from-cyan-50 to-transparent dark:from-cyan-950/50"></div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">

          <div className="space-y-6" data-animate="">
            <h1 className="text-4xl/tight lg:text-5xl/tight font-semibold tracking-tight text-slate-900 dark:text-white">
              Ace your exams<br />
              with <span className="text-cyan-700 dark:text-cyan-400">AI-powered</span> practice
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-lg">
              Personalized mock questions, adaptive tests, and detailed analytics—all in one streamlined platform designed to elevate your scores.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
              <Link to="/start-test" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md text-white bg-cyan-700 hover:bg-cyan-800 transition-colors shadow-sm">
                Get started free
                <ArrowRight className="w-4 h-4" />
              </Link>
              <button className="inline-flex items-center gap-2 text-cyan-700 dark:text-cyan-400 hover:text-cyan-800 dark:hover:text-cyan-300 transition-colors">
                <PlayCircle className="w-5 h-5" />
                Watch demo
              </button>
            </div>
          </div>

          <div className="relative" data-animate="">
            <img src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80" alt="Student preparing for exams" className="w-full rounded-lg shadow-sm ring-1 ring-slate-200 dark:ring-slate-800 object-cover" />
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="h-px bg-slate-100 dark:bg-slate-800 my-24"></div>
      </div>

      <section id="features" className="mx-auto max-w-7xl px-6 lg:px-8 space-y-16">

        <div className="text-center max-w-2xl mx-auto space-y-4" data-animate="">
          <h2 className="text-3xl/tight font-semibold tracking-tight text-slate-900 dark:text-white">
            Everything you need to excel
          </h2>
          <p className="text-slate-600 dark:text-slate-400">
            A focused set of tools to turn preparation into mastery.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          <div className="space-y-4" data-animate="">
            <div className="w-12 h-12 flex items-center justify-center rounded-md bg-cyan-50 dark:bg-cyan-950/50 text-cyan-700 dark:text-cyan-400 ring-1 ring-cyan-100 dark:ring-cyan-900">
              <Bot className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-medium tracking-tight dark:text-white">Adaptive Questioning</h3>
            <p className="text-slate-600 dark:text-slate-400">
              Our engine tailors each question to your skill level, ensuring optimal challenge and growth.
            </p>
          </div>

          <div className="space-y-4" data-animate="">
            <div className="w-12 h-12 flex items-center justify-center rounded-md bg-cyan-50 dark:bg-cyan-950/50 text-cyan-700 dark:text-cyan-400 ring-1 ring-cyan-100 dark:ring-cyan-900">
              <ClipboardList className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-medium tracking-tight dark:text-white">Timed Mock Tests</h3>
            <p className="text-slate-600 dark:text-slate-400">
              Simulate real-exam pressure with customizable, timed sessions you can take anywhere.
            </p>
          </div>

          <div className="space-y-4" data-animate="">
            <div className="w-12 h-12 flex items-center justify-center rounded-md bg-cyan-50 dark:bg-cyan-950/50 text-cyan-700 dark:text-cyan-400 ring-1 ring-cyan-100 dark:ring-cyan-900">
              <BarChart3 className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-medium tracking-tight dark:text-white">Actionable Insights</h3>
            <p className="text-slate-600 dark:text-slate-400">
              Granular analytics pinpoint weak spots, so you can focus your study time where it matters.
            </p>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="h-px bg-slate-100 dark:bg-slate-800 my-24"></div>
      </div>

      <section id="pricing" className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12">

          <div className="space-y-6" data-animate="">
            <h2 className="text-3xl font-semibold tracking-tight dark:text-white">Fair pricing for serious learners</h2>
            <p className="text-slate-600 dark:text-slate-400">
              Start free and upgrade when you’re ready for advanced analytics and unlimited tests.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-cyan-700 dark:text-cyan-400 mt-1" />
                <span className="dark:text-slate-300">Unlimited practice questions</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-cyan-700 dark:text-cyan-400 mt-1" />
                <span className="dark:text-slate-300">AI-generated explanations</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-cyan-700 dark:text-cyan-400 mt-1" />
                <span className="dark:text-slate-300">Detailed progress tracking</span>
              </li>
            </ul>
            <a href="#" className="inline-flex items-center gap-2 px-6 py-3 rounded-md text-white bg-cyan-700 hover:bg-cyan-800 transition-colors shadow-sm">
              Go Pro
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div className="border border-slate-200 dark:border-slate-800 rounded-xl p-8 shadow-sm bg-white dark:bg-slate-900" data-animate="">
            <h3 className="text-lg font-medium tracking-tight text-slate-900 dark:text-white">Pro</h3>
            <p className="mt-2 text-slate-600 dark:text-slate-400">Everything you need to dominate your exams</p>
            <div className="flex items-end gap-1 mt-6">
              <span className="text-5xl font-semibold tracking-tight dark:text-white">$9</span>
              <span className="pb-1 text-slate-600 dark:text-slate-400">/ month</span>
            </div>
            <button className="mt-6 w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-md text-white bg-cyan-700 hover:bg-cyan-800 transition-colors">
              Start free trial
            </button>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="h-px bg-slate-100 dark:bg-slate-800 my-24"></div>
      </div>

      <section id="faq" className="mx-auto max-w-4xl px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-4" data-animate="">
          <h2 className="text-3xl font-semibold tracking-tight dark:text-white">Frequently asked</h2>
          <p className="text-slate-600 dark:text-slate-400">Everything else you might be wondering about.</p>
        </div>

        <div className="space-y-8" data-animate="">
          <details className="border-slate-200 dark:border-slate-800 border rounded-lg pt-6 pr-6 pb-6 pl-6">
            <summary className="cursor-pointer font-medium dark:text-white">What exams do you support?</summary>
            <p className="mt-4 text-slate-600 dark:text-slate-400">We currently cover standardized exams across STEM, business, and languages with more added monthly.</p>
          </details>
          <details className="border border-slate-200 dark:border-slate-800 rounded-lg p-6">
            <summary className="cursor-pointer font-medium dark:text-white">Can I cancel anytime?</summary>
            <p className="mt-4 text-slate-600 dark:text-slate-400">Absolutely, there are no contracts and you can cancel directly from your dashboard.</p>
          </details>
          <details className="border border-slate-200 dark:border-slate-800 rounded-lg p-6">
            <summary className="cursor-pointer font-medium dark:text-white">Is my progress saved across devices?</summary>
            <p className="mt-4 text-slate-600 dark:text-slate-400">Yes—your data syncs in real time so you can prep seamlessly on desktop, tablet, or phone.</p>
          </details>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="h-px bg-slate-100 dark:bg-slate-800 my-24"></div>
      </div>

      <footer className="mx-auto max-w-7xl px-6 lg:px-8 pb-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6" data-animate="">
          <a href="#" className="text-cyan-700 dark:text-cyan-400 font-semibold tracking-tight text-lg">Makaut Mock Test</a>
          <p className="text-sm text-slate-500 dark:text-slate-400">© <span id="year">2025</span> MMT. All rights reserved.</p>
          <nav className="flex gap-4 text-sm">
            <a href="#" className="hover:text-cyan-700 dark:hover:text-cyan-400 transition-colors">Privacy</a>
            <a href="#" className="hover:text-cyan-700 dark:hover:text-cyan-400 transition-colors">Terms</a>
            <a href="#" className="hover:text-cyan-700 dark:hover:text-cyan-400 transition-colors">Contact</a>
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
