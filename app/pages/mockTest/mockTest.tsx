import { useLocation, useNavigate } from "react-router";
import { useState, useEffect } from "react";
import axios from "axios";

import {
  Card,
  CardContent,
  CardHeader,
} from '~/components/ui/card'
import { RadioGroup, RadioGroupItem } from '~/components/ui/radio-group'
import { Label } from '~/components/ui/label';
import { Button } from '~/components/ui/button';
import Loader from "~/components/loader/loader";
import { MarkdownRenderer } from "~/components/ui/markdown-renderer";
// for error page
import { Alert, AlertTitle, AlertDescription } from "~/components/ui/alert";
import { AlertCircle } from "lucide-react";
// custom hooks
import useQuestions from '~/store/useQuestions'
import useRAnswers from '~/store/useRAnswers'
import type { QuestionsType } from '~/store/useQuestions.ts'
import useSubjects from '~/store/useSubject'

export default function MockTest() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const SubjectCode = searchParams.get('subjectCode') || "";
  const SubjectName = searchParams.get('subjectName') || "";

  const navigate = useNavigate();
  const questions = useQuestions((state) => state.questions);
  const setQuestions = useQuestions((state) => state.setQuestions);
  const setAnswers = useRAnswers((state) => state.setAnswers);
  const setSubjects = useSubjects((state) => state.setSubject);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error>();

  useEffect(() => {
    (async function () {
      try {
        setLoading(true);
        setSubjects(SubjectName);

        const response = await axios.post('https://dapi-0rv5.onrender.com/v1/aiexam/get-prev-questions', {
          subject_code: SubjectCode,
          university: 'makaut',
          user_id: ''
        }, {
          headers: { 'Content-Type': 'application/json' },
        });
        if (response.status !== 200) {
          throw new Error("Failed to fetch questions");
        }
        setQuestions(response.data[0] as QuestionsType);
      } catch (error) {
        setError(error as Error);
      } finally {
        setLoading(false);
      }
    })()
  }, [])

  function HandleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const keyValuePairs = Array.from(form.entries()).reduce((acc, [key, value]) => {
      acc[key] = value;
      return acc;
    }, {});
    setAnswers(keyValuePairs);
    navigate({
      pathname: '/result',
    });
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
          <AlertDescription>
            {error.message}
          </AlertDescription>
        </Alert>
      </div>
    )
  }
  return (
    <main className="background m-0 px-0 py-4">
      <section>
        <h1
          className="mb-4 text-4xl mx-auto text-center font-bold text-gray-800">
          Subject: {SubjectName}</h1>
        <form onSubmit={HandleSubmit} className="flex flex-col items-center">
          { ('question' in questions) ? questions.question.map((question, index) => (
            <Card className="w-[350px] mx-auto my-4" key={index}>
              <CardHeader>
                {index + 1}.&nbsp;
                <MarkdownRenderer>
                  {question.question}
                </MarkdownRenderer>
              </CardHeader>
              <CardContent>
                <RadioGroup name={`question-${index}`} defaultValue={undefined} className="space-y-2">
                  {
                    question.options.map((option, idx) => (
                      <div key={idx} className="flex items-center space-x-2">

                        <Label htmlFor={`question${index}option${idx}`}>
                          <RadioGroupItem value={option} id={`question${index}option${idx}`} /> {option}
                        </Label>
                      </div>
                    ))

                  }
                </RadioGroup>
              </CardContent>
            </Card>
          )) : null}
          <Button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded mx-auto">
            submit
          </Button>
        </form>
      </section>
    </main>
  );
}
