import { CheckCircle, Printer, RefreshCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import useSubjectStore from "@/store/useSubject";
import useRAnswers from "@/store/useRAnswers";
import useQuestions from "@/store/useQuestions";
import { useNavigate } from "react-router-dom";
import type { Question } from "@/types/question";
import "./style.css";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { Link } from "react-router-dom";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function Result() {
  const navigate = useNavigate();
  const subject = useSubjectStore((state) => state.subject);
  const userAnswers = useRAnswers((state) => state.answers);
  const questions = useQuestions((state) => state.questions);

  function calculateScore(selectedAnswers: { [key: string]: string }): number {
    let score = 0;
    if (!("question" in questions)) {
      return 0;
    }

    const allQuestions: Question[] = questions.question;
    if (allQuestions.length == 0) return 0;

    allQuestions.forEach((question: Question, index: number) => {
      const questionKey: string = `question-${index}`;
      if (
        questionKey in selectedAnswers &&
        selectedAnswers[questionKey] === question.answer
      ) {
        score += 1;
      }
    });
    return score;
  }

  const score = calculateScore(userAnswers);
  const percentage = score * 4;

  return (
    <div className="antialiased text-slate-900 bg-white selection:bg-cyan-200/60">
      <header className="sticky top-0 z-30 backdrop-blur bg-white/80 border-b border-slate-100">
        <div className="max-w-7xl h-16 mx-auto px-6 lg:px-8 flex items-center justify-between">
          <Link
            to="/"
            className="inline-flex items-center gap-1 font-semibold tracking-tight text-cyan-700 hover:text-cyan-800 transition"
          >
            MMT
          </Link>
          <span className="text-sm font-medium text-slate-600">Results</span>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 lg:px-8 pt-14 pb-24 space-y-16">
        <section className="space-y-8" data-animate="">
          <h1 className="text-2xl lg:text-3xl font-semibold tracking-tight">
            Your Performance
          </h1>
          <h2 className="text-lg font-medium text-slate-600">
            Subject: {subject}
          </h2>

          <div className="grid md:grid-cols-3 gap-10 items-center">
            <div className="relative isolate flex items-center justify-center w-full">
              <div className="aspect-square max-w-[250px]">
                <Doughnut
                  data={{
                    labels: ["Correct", "Incorrect"],
                    datasets: [
                      {
                        data: [score, 25 - score],
                        backgroundColor: ["#059669", "#f43f5e"],
                        borderWidth: 0,
                      },
                    ],
                  }}
                  options={{
                    cutout: "70%",
                    plugins: {
                      legend: { display: false },
                      tooltip: { enabled: false },
                    },
                  }}
                />
              </div>
            </div>

            <div className="md:col-span-2 flex flex-col gap-6">
              <div className="flex items-center gap-6">
                <div
                  className="text-4xl lg:text-5xl font-semibold tracking-tight"
                  id="scorePercent"
                >
                  {`${percentage}%`}
                </div>
                <div className="text-slate-600 text-lg">
                  Correct answers:
                  <br />
                  <span
                    className="font-semibold tracking-tight text-slate-900"
                    id="scoreCorrect"
                  >
                    {score}&nbsp;
                  </span>
                  of
                  <span id="scoreTotal">&nbsp;25</span>
                </div>
              </div>

              <div className="border-t border-slate-200"></div>

              <div className="flex gap-6">
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-emerald-500"></span>
                  <span className="text-sm font-medium text-slate-600">
                    Correct
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-rose-500"></span>
                  <span className="text-sm font-medium text-slate-600">
                    Incorrect
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="flex justify-center" data-animate>
          <Button
            onClick={() => navigate("/start-test", { replace: true })}
            className="inline-flex gap-2 items-center rounded-lg bg-teal-600 hover:bg-teal-700 text-white font-medium px-6 py-3 transition"
          >
            <RefreshCcw className="h-5 w-5 stroke-[1.5]" />
            Take another exam
          </Button>
        </div>
        <section className="space-y-8" data-animate="">
          <h2 className="text-2xl lg:text-3xl font-semibold tracking-tight">
            Review Your Answers
          </h2>

          <div id="cards" className="grid sm:grid-cols-2 gap-6">
            {"question" in questions &&
              questions.question.map((q: Question, index: number) => (
                <div className="flex flex-col gap-4 rounded-xl border border-slate-200 bg-white/80 p-6 shadow-sm hover:shadow transition">
                  <h3 className="font-semibold text-lg tracking-tight leading-snug">
                    {`${index + 1}. ${q.question}`}
                  </h3>

                  <p className="text-sm">
                    <span className="font-medium">Your answer:</span>
                    <span
                      className={`font-medium ${userAnswers[`question-${index}`] == q.answer ? "text-emerald-600" : "text-rose-600"} `}
                    >
                      {userAnswers[`question-${index}`]}
                    </span>
                  </p>

                  <p className="text-sm text-slate-600">{q.description}</p>

                  <div className="self-start inline-flex items-center gap-1 rounded-full px-2.5 py-1 bg-emerald-100 text-emerald-700 text-xs font-medium">
                    <CheckCircle className="h-4 w-4 stroke-[1.5]" />
                    {q.answer}
                  </div>
                </div>
              ))}
          </div>
        </section>

        <div className="flex justify-center pt-8" data-animate="">
          <button
            onClick={() => window.print()}
            className="inline-flex gap-2 items-center rounded-lg bg-cyan-600 hover:bg-cyan-700 text-white font-medium px-6 py-3 transition"
          >
            <Printer className="h-5 w-5 stroke-[1.5]" />
            Print as PDF
          </button>
        </div>
      </main>
    </div>
  );
}
