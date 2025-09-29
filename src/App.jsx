import LoginPage from "./pages/LoginPage.jsx";
import FeedPage from "./pages/FeedPage.jsx";
import { Routes, Route } from "react-router-dom";

function App() {
    return (
        <Routes>
            <Route path="/auth" element={<LoginPage />} />
            <Route path="/home" element={<FeedPage />} />
        </Routes>
    )
}

export default App;