import { useLocation, useNavigate } from "react-router";
import { useState, useEffect } from "react";
import axios from "axios";

import {
  Card,
  CardContent,
  CardHeader,
} from '~/components/ui/card'
import {RadioGroup, RadioGroupItem} from '~/components/ui/radio-group'
import {Label} from '~/components/ui/label';
import {Button} from '~/components/ui/button';
import Loader from "~/components/loader/loader";
import useQuestions from '~/store/useQuestions'
import useRAnswers from '~/store/useRAnswers'
import type { QuestionsType} from '~/store/useQuestions.ts'
import useSubjects from '~/store/useSubject'

export default function MockTest(){
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const Subject = searchParams.get('subject') || "";

  const navigate = useNavigate();
  const questions = useQuestions((state) => state.questions);
  const setQuestions = useQuestions((state) => state.setQuestions);
  const setAnswers = useRAnswers((state) => state.setAnswers);
  const setSubjects = useSubjects((state) => state.setSubject);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error>();

  useEffect(() => {
    (async function(){
      try {
        setLoading(true);
        setSubjects(Subject);
        const response = await axios.get(`https://dshaw.pythonanywhere.com/api/v1/mocktest/${Subject}`);
        if (response.status !== 200) {
          throw new Error("Failed to fetch questions");
        }
        setQuestions(response.data as Array<QuestionsType>);
      } catch (error) {
        setError(error as Error);
      }finally {
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
      // search: '?subject=' + Subject,
      state: { subject: Subject,  userAnswers: keyValuePairs, questions: questions }
    });
  }

  if (loading) {
    return <Loader />;
  }
  if (error) {
    return <div className="text-red-500 w-full text-center h-full flex align-center justify-center">
    <h1>
           Error: {error.message}
    </h1>
    </div>;
  }
  return (
    <main className="background m-0 px-0 py-4">
      <section>
        <h1 
        className="mb-4 text-4xl mx-auto text-center font-bold text-gray-800">
        Subject: {Subject}</h1>
        <form onSubmit={HandleSubmit} className="flex flex-col items-center">
          {questions.map((question, index) => (
            <Card className="w-[350px] mx-auto my-4" key={index}>
              <CardHeader>{index+1}.&nbsp;{question.question}</CardHeader>
              <CardContent>
                <RadioGroup name={`question-${index}`} defaultValue={undefined} className="space-y-2">
                  {
                    question.options.map((option, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <RadioGroupItem value={option} id={`question${index}option${idx}`} />
                        <Label htmlFor={`question${index}option${idx}`}>{option}</Label>
                      </div>
                    ))

                  }
                </RadioGroup>
              </CardContent>
            </Card>
          ))}
          <Button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded mx-auto">
            submit
          </Button>
        </form>
      </section>
    </main>
  );
}
