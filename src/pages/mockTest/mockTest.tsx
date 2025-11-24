import {Link, useLocation, useNavigate} from "react-router";
import {useState, useEffect} from "react";
import {useForm} from "react-hook-form";
import axios from "axios";

import {RadioGroup, RadioGroupItem} from "@/components/ui/radio-group";
import {Label} from "@/components/ui/label";
import {Button} from "@/components/ui/button";
import Loader from "@/components/loader/loader";
import Markdown from "react-markdown";
// for error page
import {Alert, AlertTitle, AlertDescription} from "@/components/ui/alert";
import {AlertCircle, ChevronLeft, ChevronRight, Flag} from "lucide-react";
// custom hooks
import useQuestions from "@/store/useQuestions";
import useRAnswers from "@/store/useRAnswers";

// Type imports
import type {QuestionAPIResponse} from "@/types/question";

// import { sampleQuestionPaper } from "./sample";

type FormData = Record<string, string>;

// React Hook Form setup
export default function MockTest() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const SubjectCode = searchParams.get("subjectCode") || "";
  const SubjectName = searchParams.get("subjectName") || "";

  const navigate = useNavigate();
  const questions = useQuestions((state) => state.questions);
  const setQuestions = useQuestions((state) => state.setQuestions);
  const setAnswers = useRAnswers((state) => state.setAnswers);
  // const setSubjects = useSubjects((state) => state.setSubject);

  const {register, handleSubmit, watch, setValue} = useForm<FormData>();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error>();
  const [questionNumber, setQuestionNumber] = useState<number>(0);

  const showNotification = (message: string) => {
    if ("Notification" in window) {
      if (Notification.permission === "granted") {
        new Notification("Makaut Mock Test", {body: message});
      } else if (Notification.permission !== "denied") {
        Notification.requestPermission().then((permission) => {
          if (permission === "granted") {
            new Notification("Makaut Mock Test", {body: message});
          }
        });
      }
    }
  };

  useEffect(() => {
    (async function () {
      try {
        setLoading(true);
        // setSubjects(SubjectName);
          // "https://dapi-0rv5.onrender.com/v1/aiexam/get-questions",

        const response = await axios.post(
          "http://localhost:3000/api/aiexam/get-questions",
          {
            subject_code: SubjectCode,
            university: "makaut",
            user_id: "",
          },
          {
            headers: {"Content-Type": "application/json"},
          },
        );
        if (response.status !== 200) {
          throw new Error("Failed to fetch questions");
        }
        setQuestions(response.data as QuestionAPIResponse);
        // setQuestions(sampleQuestionPaper);
        showNotification("Hey! your questions are ready.");
      } catch (error) {
        setError(error as Error);
      } finally {
        setLoading(false);
      }
    })();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  function goToNextQuestion() {
    setQuestionNumber((prev) => prev + 1);
  }

  function goToPrevQuestion() {
    setQuestionNumber((prev) => prev - 1);
  }

  // All answers are automatically preserved
  function onSubmit(data: FormData) {
    setAnswers(data); // Has ALL answers from all questions
    navigate({pathname: "/result"});
  }
  if (loading) {
    return <Loader />;
  }
  if (error) {
    return (
      <div className="text-red-500 w-full text-center h-full flex align-center justify-center">
        <Alert variant={"destructive"} className="w-[350px] mx-auto my-4">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Something went wrong</AlertTitle>
          <AlertDescription>{error.message}</AlertDescription>
        </Alert>
      </div>
    );
  }

  const currentQuestion =
    "question" in questions ? questions.question[questionNumber] : null;
  const currentQuestionKey = `question-${questionNumber}`;
  const currentAnswer = watch(currentQuestionKey);

  return (
    <>
      <header className="sticky top-0 z-30 backdrop-blur bg-white/80 border-b border-slate-100">
        <div
          className="max-w-7xl h-16 lg:px-8 flex mr-auto ml-auto pr-6 pl-6 items-center justify-between"
          data-animate=""
        >
          <Link
            to="/dashboard"
            className="inline-flex items-center gap-1 hover:text-cyan-800 transition-colors font-semibold text-cyan-700 tracking-tight"
          >
            MMT
          </Link>
          <Button
            id="finishBtn"
            className="inline-flex gap-2 items-center rounded-lg border border-red-600 bg-red-600 text-white hover:bg-white hover:text-red-600 font-medium px-5 py-2.5 transition-colors"
            onClick={() => handleSubmit(onSubmit)()}
          >
            <Flag className="h-5 w-5 stroke-[1.5]" /> Finish test
          </Button>
        </div>
      </header>
      <main className="background max-w-4xl lg:px-8 mx-auto pt-14 pb-20 px-6 space-y-12">
        <section>
          <h1 className="mb-6 text-lg md:text-2xl underline mx-auto text-center font-bold text-gray-800">
            {SubjectName}
          </h1>
          <section className="space-y-2 my-4" data-animate="">
            <div className="flex items-center justify-between">
              <strong
                id="qProgress"
                className="text-lg lg:text-xl font-semibold tracking-tight text-slate-900"
              >
                Question {questionNumber + 1} of 25
              </strong>
              <div className="w-44 h-2 bg-slate-200 rounded-full overflow-hidden">
                <div
                  id="bar"
                  className="h-full bg-cyan-600 transition-all duration-300"
                  style={{width: `${4 * (questionNumber + 1)}%`}}
                ></div>
              </div>
            </div>
          </section>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col items-center"
          >
            {currentQuestion && (
              <section className="space-y-6 mx-auto my-4">
                <h2 className="text-1xl lg:text-2xl font-semibold tracking-tight leading-snug text-slate-900">
                  <Markdown>{currentQuestion.question}</Markdown>
                </h2>
                <div>
                  <RadioGroup
                    value={currentAnswer || ""}
                    onValueChange={(value) =>
                      setValue(currentQuestionKey, value)
                    }
                    className="my-2 grid gap-4 sm:grid-cols-2"
                  >
                    {currentQuestion.options.map((option, idx) => (
                      <Label
                        htmlFor={`question${questionNumber}option${idx}`}
                        key={option}
                        className="font-medium text-slate-800 space-x-2 flex items-center gap-3 w-full rounded-lg border border-slate-200 bg-white/80 px-4 py-5 text-left hover:border-cyan-400 transition focus:outline-none"
                      >
                        <RadioGroupItem
                          value={option}
                          id={`question${questionNumber}option${idx}`}
                        />{" "}
                        {option}
                      </Label>
                    ))}
                  </RadioGroup>

                  {/* Hidden input to register the field */}
                  <input type="hidden" {...register(currentQuestionKey)} />
                </div>
              </section>
            )}
            <section
              className="flex flex-wrap gap-4 items-center justify-between w-full"
              data-animate=""
            >
              <div className="flex gap-4 justify-around w-full">
                <button
                  className="inline-flex gap-2 items-center rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium px-5 py-2.5 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                  disabled={questionNumber == 0}
                  type="button"
                  onClick={goToPrevQuestion}
                >
                  <ChevronLeft className="h-5 w-5 stroke-[1.5]" /> Previous
                </button>
                <button
                  className="inline-flex gap-2 items-center rounded-lg bg-cyan-600 hover:bg-cyan-700 text-white font-medium px-5 py-2.5 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                  disabled={questionNumber == 24}
                  type="button"
                  onClick={goToNextQuestion}
                >
                  Next <ChevronRight className="h-5 w-5 stroke-[1.5]" />
                </button>
              </div>
            </section>
          </form>
        </section>
      </main>
    </>
  );
}
