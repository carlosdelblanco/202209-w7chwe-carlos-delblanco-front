import RegisterFormStyled from "./RegisterFormStyled";
const RegisterForm = (): JSX.Element => {
  return (
    <>
      <RegisterFormStyled>
        <h2>Your social network</h2>
        <div className="loginData">
          <form action="">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" placeholder="name surname" />
            <label htmlFor="password">Password</label>
            <input type="text" id="password" placeholder="!P@ssword22" />
          </form>
          <button>Log in</button>
        </div>
      </RegisterFormStyled>
    </>
  );
};

export default RegisterForm;
