import { AppStyled } from "./components/AppStyled";
import Header from "./components/Header/Header";
import RegisterForm from "./components/RegisterForm/RegisterForm";

const App = () => {
  return (
    <>
      <AppStyled>
        <Header />
        <RegisterForm />
      </AppStyled>
    </>
  );
};

export default App;
