import "../../styles/globalStyles.css";
import "./header.css";

const Header = ({ setLogin }) => {
  return (
    <header className="homeHeader">
      <img id="logoImg" src="../../src/assets/NuKenzie.svg" alt="" />
      <button
        id="goToLandingPage"
        className="smallBtn btnHover"
        onClick={() => {
          setLogin(false);
        }}
      >
        Inicio
      </button>
    </header>
  );
};

export default Header;
