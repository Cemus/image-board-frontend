import { Routes, Route } from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import ThreadPage from "./components/pages/ThreadPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/thread/:id" element={<ThreadPage />} />
    </Routes>
  );
}

export default App;
