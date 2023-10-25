import { accountLogo, cartLogo, navLogo } from "../../assets/img";
import { Link, NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <div className="container">
        <div className="nav__wrapper py-8 flex justify-between">
          <Link to='/' className="nav__logo text-lg">
            <img src={navLogo} alt="" className="bg" />
          </Link>
          <div className="nav__items flex gap-10">
          <div className="nav__links flex gap-8">
            <NavLink to='/catalog'>Каталог</NavLink>
            <NavLink to='/about'>О нас</NavLink>
            <NavLink className={({isActive})=>isActive?"underline decoration-solid decoration-black":""} to='/contacts'>Контакты</NavLink>
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
