import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Activity from "./pages/activity";
import News from "./pages/news";
import Support from "./pages/support";
import Auth from "./pages/Auth";
import Boost from "./pages/Boost";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/activity" element={<Activity />} />
          <Route path="/news" element={<News />} />
          <Route path="/support" element={<Support />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/boost" element={<Boost />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;