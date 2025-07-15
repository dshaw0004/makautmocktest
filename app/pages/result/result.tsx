import {useLocation, useNavigate} from "react-router"
import { useState, useEffect } from "react"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "~/components/ui/card"
import { Progress } from "~/components/ui/progress"
import { Badge } from "~/components/ui/badge"
import { Separator } from "~/components/ui/separator"

import useSubjectStore from "~/store/useSubject"
import useRAnswers from "~/store/useRAnswers"
import useQuestions from "~/store/useQuestions"
import type {QuestionsType, QuestionType} from "~/store/useQuestions"
import {Button} from "~/components/ui/button"



export function TestResultsPage() {
  const navigate = useNavigate()
  const subject = useSubjectStore((state) => state.subject)
  const userAnswers = useRAnswers((state) => state.answers)
  const questions = useQuestions((state) => state.questions)
  const [score, setScore] = useState<number>(0)



  function calculateScore(selectedAnswers: {[key: string]: string}): number {
    // console.log(selectedAnswers);
    let score = 0;
    ('question' in questions) && questions.question.forEach((question: QuestionType, index: number) => {
      let questionKey: string = `question-${index}`
      if (selectedAnswers[questionKey] === question.answer) {
        score += 1;
      }
    });
    return score;
  }

  useEffect(() => {
   setScore(calculateScore(userAnswers));
  },[])


  return (
    <div className="background min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4 md:p-8">
      <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-2xl font-bold text-center mb-4">Test Results</h1>
        <Separator className="mb-4" />
        <Card>
          <CardHeader>
            <CardTitle>Subject: {subject}</CardTitle>
            <CardDescription>Score: {String(score)}</CardDescription>
          </CardHeader>
          <CardContent>
            <Progress value={score * 4} max={25} className="mb-4" />
            <Badge variant="outline" className="mr-2">Correct Answers: {String(score)}</Badge>
          </CardContent>
        </Card>
        <Separator className="my-4" />
        <Button
          className="mx-auto" 
          onClick={(event) => {
                event.preventDefault()
                navigate('/')
          }}
        >
        Take another test
        </Button>
      </div>

      <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg p-6 mt-8">
        <h1 className="text-2xl font-bold text-center mb-4">Answers</h1>
        <Separator className="mb-4" />
        {('question' in questions) && questions.question.map((question: QuestionType, index: number) => {
          let questionKey: string = `question-${index}`
          return (
            <Card key={index} className="my-4">
              <CardHeader>
                <CardTitle>{index+1}.&nbsp;{question.question}</CardTitle>
                <CardDescription className={`${userAnswers[questionKey] == question.answer ? "text-green-400": "text-red-400"}`} >
                Selected Answer: {userAnswers[questionKey]}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-500">{question.description}</p>
                <p className="mt-2 text-wrap border-solid border-black-400 border-2 rounded-md p-1 text-sm">
                Correct Answer: {question.answer}
                </p>
              </CardContent>
            </Card>
          )
        })}
        <Separator className="my-4" />
        <Button
          className="mx-auto" 
          onClick={(event) => {
                event.preventDefault()
                window.print()
          }}
        >
        Print
        </Button>
      </div>
    </div>
  )
}

