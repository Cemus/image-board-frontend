import { Routes, Route } from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import ThreadPage from "./components/pages/ThreadPage";
import { HelmetProvider } from "react-helmet-async";
function App() {
  return (
    <HelmetProvider>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/thread/:id" element={<ThreadPage />} />
      </Routes>
    </HelmetProvider>
  );
}

export default App;
