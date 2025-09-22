import { Route, Routes } from "react-router";
import "./App.css";
import AuthLayout from "./layouts/auth-layout";
import LoginPage from "./pages/login-page";
import SignUpPage from "./pages/sign-up-page";
import AppLayout from "./layouts/app-layout";
import NotesPage from "./pages/notes-page";

function App() {
  return (
    <div className="flex items-center overflow-auto min-h-screen ">
      <Routes>
        <Route index element={<p>Home</p>} />
        {/* <Route path="about" element={<About />} /> */}

        <Route element={<AuthLayout />}>
          <Route path="login" element={<LoginPage />} />
          <Route path="sign-up" element={<SignUpPage />} />
        </Route>

        <Route element={<AppLayout />}>
          <Route path="dashboard" element={<div>dashboard works</div>} />
          <Route path="notes" element={<NotesPage />} />
          <Route path="upload" element={<div>upload works</div>} />
          <Route path="quizzes" element={<div>Quizzes works</div>} />
          <Route path="profile" element={<div>Profile works</div>} />
        </Route>
      </Routes>
      {/* <Route index element={<div>a</div>} /> */}
    </div>
  );
}

export default App;
