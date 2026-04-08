
import { Suspense, lazy, type ReactElement } from "react";
import { createRoot } from 'react-dom/client'
// import './index.css'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Loader2 from "../components/loader/loader2";

const MockTest = lazy(() => import("../pages/mockTest/mockTest"));
const PreviousQuestions = lazy(() => import("../pages/previousQuestions"));
const Result = lazy(() => import("../pages/result"));
const StartTest = lazy(() => import("../pages/startTest"));

const withLoader = (element: ReactElement) => (
  <Suspense
    fallback={
      <div className="size-full flex justify-center align-center">
        <Loader2 />
      </div>
    }
  >
    {element}
  </Suspense>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello World</div>,
  },
  {
    path: "/mocktest",
    element: withLoader(<MockTest />),
  },
  {
    path: "/previous-questions",
    element: withLoader(<PreviousQuestions />),
  },
  {
    path: "/result",
    element: withLoader(<Result />),
  },
  {
    path: "/start-test",
    element: withLoader(<StartTest />),
  },
//   {
//     path: "/app",
//     element: <Outlet />,
//     children: [
//       {
//         path: "mocktest",
//         element: withLoader(<MockTest />),
//       },
//       {
//         path: "previous-questions",
//         element: withLoader(<PreviousQuestions />),
//       },
//       {
//         path: "result",
//         element: withLoader(<Result />),
//       },
//       {
//         path: "start-test",
//         element: withLoader(<StartTest />),
//       },
//     ],
//   },
], {
    basename: "/app",
});


const root = document.getElementById("root");

createRoot(root).render(
  <RouterProvider router={router} />,
);
