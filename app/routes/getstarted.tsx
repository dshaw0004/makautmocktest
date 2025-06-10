import type {Route} from "./+types/home";
import GetStarted from "../pages/getstarted/index";

export function meta({}: Route.MetaArgs) {
  return [
    {title: "AI Exam Prep"},
    {name: "AI Exam Preparation", content: "Prepare for your exam with the help of AI."},
  ];
}

export default function Home() {
  return <GetStarted />;
}


