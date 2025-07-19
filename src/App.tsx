// import { useState } from 'react'
import { Route, Routes } from "react-router-dom";
import GetStarted from "@/pages/getstarted";
import NotFoundPage from "./pages/notfound";
import "./App.css";
import StartTest from "./pages/startTest";
import MockTest from "./pages/mockTest/mockTest";
import { TestResultsPage } from "./pages/result/result";
import Result from "./pages/result";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<GetStarted />} />
        <Route path="/mocktest" element={<MockTest />} />
        <Route path="/result" element={<TestResultsPage />} />
        <Route path="/new-result" element={<Result />} />
        <Route path="/start-test" element={<StartTest />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
