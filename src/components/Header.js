import { useNavigate, useParams } from "react-router-dom";
import { goToHome, goToProfile, goToLogin } from "../routes/coordinator"

function Header() {
  const navigate = useNavigate();
  const pathParams = useParams();

  return (
    <header>
      <button onClick={() => goToHome(navigate)}>
        Ir para página inicial
      </button>
      <button onClick={() => goToProfile(navigate, "Felipe")}>
        Ir para página de perfil
      </button>
      <button onClick={() => goToLogin(navigate)}>Login</button>
    </header>
  );
}

export default Header;
