import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
//import BananasPage from "./components/pages/BananasPage";
import Practice from "./components/practice/Practice"

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/practice" element={<Practice />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
