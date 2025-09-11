import { Route, Routes } from "react-router";
import "./App.css";
import AuthLayout from "./layouts/auth-layout";
import LoginPage from "./pages/login-page";
import SignUpPage from "./pages/sign-up-page";

function App() {
  return (
    <div className="flex items-center max-w-7xl overflow-auto mx-auto min-h-screen ">
      <Routes>
        <Route index element={<p>Home</p>} />
        {/* <Route path="about" element={<About />} /> */}

        <Route element={<AuthLayout />}>
          <Route path="login" element={<LoginPage />} />
          <Route path="sign-up" element={<SignUpPage />} />
        </Route>

        {/* <Route path="concerts">
          <Route index element={<ConcertsHome />} />
          <Route path=":city" element={<City />} />
          <Route path="trending" element={<Trending />} />
        </Route> */}
      </Routes>
    </div>
  );
}

export default App;
