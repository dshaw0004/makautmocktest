import type { Route } from "./+types/home";
import PricingPage from "~/pages/pricing";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "MAKAUT Mock Test" },
    { name: "makaut mock test", content: "MAKAUT CA4 Mock Test" },
  ];
}

export default function Home() {
  return <PricingPage />;
}




