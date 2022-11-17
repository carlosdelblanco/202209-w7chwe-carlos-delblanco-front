import { Route, Routes } from "react-router-dom";
import { AppStyled } from "./components/AppStyled";
import Header from "./components/Header/Header";
import LoginForm from "./components/Loginform/LoginForm";
import RegisterForm from "./components/RegisterForm/RegisterForm";

const App = () => {
  return (
    <>
      <Header />
      <AppStyled>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/register" element={<RegisterForm />} />
        </Routes>
      </AppStyled>
    </>
  );
};

export default App;
