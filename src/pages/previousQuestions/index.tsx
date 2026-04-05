import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { ArrowLeft, Clock, BookOpen } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";
import axios from "axios";
import { useSubjects } from "@/store/useSubject";
import useTestType from "@/store/useTestType";
import useQuestions from "@/store/useQuestions";
import type { Question, QuestionAPIResponse } from "@/types/question";

interface PreviousQuestionMetadata {
  subcode: string;
  university: string;
  timestamp: number;
  questionID: string;
  question: Question[];
}

export default function PreviousQuestions() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { setCurrentSubject } = useSubjects();
  const { setIsNewTest } = useTestType();
  const { setQuestions } = useQuestions();

  const subcode = searchParams.get("subcode");
  const subjectName = searchParams.get("subjectName");
  const university = searchParams.get("university") || "nptel";

  const [previousQuestions, setPreviousQuestions] = useState<
    PreviousQuestionMetadata[]
  >([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [takenQuestions, setTakenQuestions] = useState<Set<string>>(new Set());

  // Load taken questions from localStorage
  useEffect(() => {
    const storedTaken = localStorage.getItem("takenQuestionIDs");
    if (storedTaken) {
      try {
        const parsed = JSON.parse(storedTaken);
        setTakenQuestions(new Set(parsed));
      } catch (e) {
        console.error("Error parsing localStorage:", e);
      }
    }
  }, []);

  // Fetch previous questions
  useEffect(() => {
    (async function () {
      if (!subcode) {
        setError("Subject code is required");
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        const res = await axios.get(
          `https://dapi-0rv5.onrender.com/v1/aiexam/prev-questions/metadata?subcode=${subcode}`,
        );
        const data = res.data as PreviousQuestionMetadata[];
        setPreviousQuestions(data);
        setError(null);
      } catch (err) {
        console.error("Error fetching previous questions:", err);
        setError("Failed to load previous questions. Please try again.");
        setPreviousQuestions([]);
      } finally {
        setLoading(false);
      }
    })();
  }, [subcode]);

  const handleStartNewTest = () => {
    // Set isNewTest to true to indicate we need to generate new questions
    setIsNewTest(true);

    if (subcode && subjectName) {
      setCurrentSubject({
        subcode: subcode,
        subject: subjectName,
      });
      navigate({
        pathname: "/mocktest",
        search:
          "?subjectCode=" +
          subcode +
          "&subjectName=" +
          subjectName +
          "&university=" +
          university,
      });
    }
  };

  const handlePreviousQuestionClick = (
    questionMetadata: PreviousQuestionMetadata,
  ) => {
    // Mark as taken in localStorage
    const newTaken = new Set(takenQuestions);
    newTaken.add(questionMetadata.questionID);
    setTakenQuestions(newTaken);
    localStorage.setItem(
      "takenQuestionIDs",
      JSON.stringify(Array.from(newTaken)),
    );

    // Set isNewTest to false to indicate this is a previous question
    setIsNewTest(false);

    // Load the questions into the store
    const transformedData: QuestionAPIResponse = {
      subcode: questionMetadata.subcode,
      university: questionMetadata.university,
      timestamp: questionMetadata.timestamp,
      questionID: questionMetadata.questionID,
      question: questionMetadata.question,
    };
    setQuestions(transformedData);

    if (subcode && subjectName) {
      setCurrentSubject({
        subcode: subcode,
        subject: subjectName,
      });
      navigate({
        pathname: "/mocktest",
        search:
          "?subjectCode=" +
          subcode +
          "&subjectName=" +
          subjectName +
          "&questionID=" +
          questionMetadata.questionID +
          "&university=" +
          university,
      });
    }
  };

  const formatDate = (timestamp: number) => {
    return new Date(timestamp).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <div className="antialiased selection:bg-cyan-200/60 text-slate-900 bg-white">
      <header className="sticky top-0 z-30 backdrop-blur bg-white/80 border-b border-slate-100">
        <div
          className="mx-auto max-w-7xl h-16 px-6 lg:px-8 flex items-center justify-between"
          data-animate=""
        >
          <button
            role="anchor"
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-1 font-semibold tracking-tight text-cyan-700 hover:text-cyan-800 transition-colors bg-transparent"
          >
            <ArrowLeft className="h-5 w-5 stroke-[1.5]" />
            Back
          </button>
          <span className="font-medium text-slate-600">MMT</span>
        </div>
      </header>

      <main className="max-w-7xl lg:px-8 mr-auto ml-auto pt-14 pr-6 pb-14 pl-6 space-y-12">
        <section className="space-y-4" data-animate="">
          <h1 className="text-3xl lg:text-4xl font-semibold tracking-tight text-slate-900">
            {subjectName}
          </h1>
          <p className="text-slate-600 max-w-lg">
            Choose from previous exam question sets or start a new test with
            generated questions.
          </p>
        </section>

        {error && (
          <div className="rounded-lg border border-red-200 bg-red-50 p-4 text-red-700">
            {error}
          </div>
        )}

        <section className="space-y-6" data-animate="">
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              className="inline-flex gap-2 transition-colors hover:bg-cyan-700 focus:outline-none font-medium text-white bg-cyan-600 rounded-lg py-4 px-8 items-center justify-center"
              onClick={handleStartNewTest}
            >
              <BookOpen className="h-5 w-5 stroke-[1.5]" />
              Generate New Test
            </Button>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold tracking-tight text-slate-900">
              Previous Question Sets ({previousQuestions.length})
            </h2>

            {loading ? (
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {Array(6)
                  .fill(0)
                  .map((_, index) => (
                    <Skeleton
                      key={index}
                      className="rounded-lg border border-slate-200 bg-white/80 p-6 space-y-3"
                    >
                      <Skeleton className="w-3/4 h-4 bg-slate-200"></Skeleton>
                      <Skeleton className="w-1/2 h-3 bg-slate-100"></Skeleton>
                      <Skeleton className="w-2/3 h-3 bg-slate-100"></Skeleton>
                    </Skeleton>
                  ))}
              </div>
            ) : previousQuestions.length > 0 ? (
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {previousQuestions.map((questionSet) => {
                  const isTaken = takenQuestions.has(questionSet.questionID);
                  return (
                    <button
                      key={questionSet.questionID}
                      onClick={() => handlePreviousQuestionClick(questionSet)}
                      className={`
                        group relative flex flex-col text-left focus:outline-none
                        rounded-xl border p-6 transition-all duration-150
                        ${
                          isTaken
                            ? "border-cyan-300 bg-cyan-50 hover:border-cyan-400 hover:shadow-md"
                            : "border-slate-200 bg-white hover:border-cyan-400 hover:shadow-md"
                        }
                      `}
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h3 className="font-semibold tracking-tight text-slate-900">
                            Question Set
                          </h3>
                          <p className="mt-1 text-xs font-mono text-slate-500">
                            ID: {questionSet.questionID.substring(0, 8)}...
                          </p>
                        </div>
                        {isTaken && (
                          <span className="inline-flex items-center rounded-full bg-cyan-100 px-3 py-1 text-xs font-medium text-cyan-700">
                            Taken
                          </span>
                        )}
                      </div>

                      <div className="mt-4 space-y-2 text-sm text-slate-600">
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4 stroke-[1.5]" />
                          <span>{formatDate(questionSet.timestamp)}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <BookOpen className="h-4 w-4 stroke-[1.5]" />
                          <span>{questionSet.question.length} questions</span>
                        </div>
                      </div>

                      <div className="mt-4 pt-4 border-t border-slate-100">
                        <span className="inline-flex text-sm font-medium text-cyan-600 group-hover:text-cyan-700">
                          Start Test →
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
            ) : (
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-12 text-center">
                <BookOpen className="mx-auto h-12 w-12 text-slate-400" />
                <h3 className="mt-4 font-semibold text-slate-900">
                  No Previous Question Sets
                </h3>
                <p className="mt-2 text-sm text-slate-600">
                  There are no previous exam questions available for this
                  subject yet.
                </p>
              </div>
            )}
          </div>
        </section>
      </main>
    </div>
  );
}
