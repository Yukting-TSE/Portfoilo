import { Route, Routes } from "react-router-dom";
import { HashScroll } from "./components/HashScroll";
import { AboutPage } from "./pages/AboutPage";
import { HomePage } from "./pages/HomePage";
import { ProjectPage } from "./pages/ProjectPage";

export default function App() {
  return (
    <>
      <HashScroll />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/work/:id" element={<ProjectPage />} />
      </Routes>
    </>
  );
}
