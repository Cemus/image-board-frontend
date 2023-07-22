import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Topic from "./components/Topic";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/topic/:id" element={<Topic />} />
    </Routes>
  );
}

export default App;
