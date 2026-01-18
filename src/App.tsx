import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import HomePage from "./pages/HomePage";

// Lazy load ProjectDetailPage for better performance
const ProjectDetailPage = lazy(() => import("./pages/ProjectDetailPage"));

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route 
          path="/projects/:slug" 
          element={
            <Suspense fallback={
              <div className="min-h-screen bg-black flex items-center justify-center">
                <div className="text-white text-xl">Loading...</div>
              </div>
            }>
              <ProjectDetailPage />
            </Suspense>
          } 
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
