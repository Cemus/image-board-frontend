import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import ThreadPage from "./components/ThreadPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/thread/:id" element={<ThreadPage />} />
    </Routes>
  );
}

export default App;
