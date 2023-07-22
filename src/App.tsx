import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Thread from "./components/Thread";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/thread/:id" element={<Thread />} />
    </Routes>
  );
}

export default App;
