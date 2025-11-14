
// import {Button} from "@/components/ui/button";

export default function NotFoundPage() {
  const path = window.location.pathname || '/';

  return (
    <div className="antialiased text-slate-900 bg-slate-50 selection:bg-cyan-200/60">

      <header className="sticky top-0 z-30 backdrop-blur bg-white/80 border-b border-slate-100">
        <div className="max-w-7xl h-16 mx-auto px-6 lg:px-8 flex items-center justify-between">
          <a href="dashboard.html" className="inline-flex items-center gap-1 font-semibold tracking-tight text-cyan-700 hover:text-cyan-800 transition">MMT</a>
          <a href="dashboard.html" className="text-sm font-medium text-slate-600 hover:text-cyan-700 transition">Dashboard</a>
        </div>
      </header>

      <main className="min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center px-6 py-24 space-y-8" data-animate>
        <i data-lucide="alert-triangle" className="h-12 w-12 stroke-[1.5] text-red-500"></i>
        <h1 className="text-4xl font-semibold tracking-tight text-slate-900 text-center">404 – Page not found</h1>
        <p className="max-w-md text-center text-slate-600">
          The endpoint&nbsp;
          <span id="endpoint-path" className="font-medium text-slate-800">{path}</span>
          &nbsp;is not available.
        </p>
        <a href="dashboard.html"
          className="inline-flex items-center gap-2 rounded-lg bg-cyan-600 hover:bg-cyan-700 text-white font-medium px-4 py-2.5 transition">
          <i data-lucide="arrow-left" className="h-4 w-4 stroke-[1.5]"></i>
          Back to dashboard
        </a>
      </main>

    </div>
  );
}

// <script>
//   lucide.createIcons({attrs:{class:"stroke-[1.5]"}});

//   // Subtle entrance animation
//   const el = document.querySelector('[data-animate]');
//   el.classList.add('opacity-0','translate-y-6','blur-sm');
//   setTimeout(()=>el.classList.remove('opacity-0','translate-y-6','blur-sm'),240);
// </script>

