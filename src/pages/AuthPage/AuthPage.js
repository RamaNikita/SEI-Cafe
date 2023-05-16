import SignUpForm from "../../components/SingUpForm/SignUpForm";
import LoginForm from "../../components/LoginForm/LoginForm.js";
export default function AuthPage({ setUser }) {
  return (
    <>
      <h1>AuthPage</h1>
      <SignUpForm setUser={setUser} />
      <LoginForm setUser={setUser} />
    </>
  );
}
