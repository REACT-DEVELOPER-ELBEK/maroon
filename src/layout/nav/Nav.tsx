import { accountLogo, cartLogo, navLogo } from "../../assets/img";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <div className="container">
        <div className="nav__wrapper py-8 flex justify-between">
          <div className="nav__logo text-lg">
            <img src={navLogo} alt="" className="bg" />
          </div>
          <div className="nav__items flex gap-10">
          <div className="nav__links flex gap-8">
            <Link to='/catalog'>Каталог</Link>
            <Link to='/about'>О нас</Link>
            <Link to='/contacts'>Контакты</Link>
          </div>
          <div className="nav__buttons flex gap-7 ml-7">
            <img src={accountLogo} alt="" />
            <img src={cartLogo} alt="" />
          </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
