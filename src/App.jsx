import LoginPage from "./pages/LoginPage.jsx";
import FeedPage from "./pages/FeedPage.jsx";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/login" component={LoginPage} />
        <Route path="/home" component={}
    </Routes>

  )
}

export default App;
