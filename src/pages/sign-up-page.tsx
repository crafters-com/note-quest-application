import SignUp from "@/components/sign-up/sign-up";
import type React from "react";

const SignUpPage: React.FC = () => {
  return (
    <SignUp
      fullName={""}
      email={""}
      password={""}
      confirmPassword={""}
      showPassword={false}
      showConfirmPassword={false}
      onSubmit={() => {}}
      onGoogleSignOn={() => {}}
    />
  );
};

export default SignUpPage;