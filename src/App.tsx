import { Suspense, lazy } from "react";
import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import GetStarted from "@/pages/getstarted";
import NotFoundPage from "./pages/notfound";
import Loader2 from "./components/loader/loader2";
import "./App.css";

function ProtectedRoute({ isAuthenticated }: { isAuthenticated: boolean }) {
  return isAuthenticated ? <Outlet /> : <Navigate to="/signup" />;
}

function App() {
  const MockTest = lazy(() => import("./pages/mockTest/mockTest"));
  const StartTest = lazy(() => import("./pages/startTest"));
  const Result = lazy(() => import("./pages/result"));
  const SignUp = lazy(() => import("./pages/authentication/signup.tsx"));
  return (
    <>
      <Suspense
        fallback={
          <div className="size-full flex justify-center align-center">
            <Loader2 />
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<GetStarted />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/mocktest" element={<MockTest />} />
          <Route path="/result" element={<Result />} />
          <Route path="/start-test" element={<StartTest />} />
          <Route path="/dashboard" element={<div>Dashboard</div>} />
          <Route element={<ProtectedRoute isAuthenticated={false} />}>
            <Route
              path="/protect"
              element={
                <div>
                  <h1>Protected Route</h1>
                  <Outlet />
                </div>
              }
            />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
