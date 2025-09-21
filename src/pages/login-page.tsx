import Login from "@/components/login/login";
import type React from "react";

const LoginPage: React.FC = () => {
  return (
    <Login
      email={""}
      password={""}
      showPassword={false}
      onSubmit={() => {}}
      onGoogleSignOn={() => {}}
    />
  );
};

export default LoginPage;
