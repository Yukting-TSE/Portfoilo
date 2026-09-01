import { Route, Routes } from "react-router-dom";
import { HashScroll } from "./components/HashScroll";
import { HomePage } from "./pages/HomePage";
import { ProjectPage } from "./pages/ProjectPage";

export default function App() {
  return (
    <>
      <HashScroll />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/work/:id" element={<ProjectPage />} />
      </Routes>
    </>
  );
}
