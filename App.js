import { LoginProvider } from "./src/app/isLogin.js";
import { MainApp } from "./src/app/app.js";

export default function App() {
  return (
    <LoginProvider>
      <MainApp />
    </LoginProvider>
  );
}