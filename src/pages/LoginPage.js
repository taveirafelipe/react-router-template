import Header from "../components/Header";


function LoginPage() {

  return (
    <main>
      <Header />
      <h1>Login</h1>
      <label>E-mail</label>
      <input/>
      <br/>
      <label>Senha</label>
      <input/>
      <br/>
      <button>Entrar</button>
    </main>
  );
}

export default LoginPage;