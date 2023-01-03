import style from './Menu.module.scss';
import {ReactComponent as Logo} from 'assets/logo.svg';
import rotas from './rotasMenu.json';
import { Link } from 'react-router-dom';

interface MenuPropsInterface {}

export const Menu = (props: MenuPropsInterface) => {
  return(
    <nav className={style['menu']}>
      <Logo className={style['menu__logo']}/>
      <ul className={style["menu__list"]}>
        {rotas.map((rota, index) => (
          <li className={style['menu__link']} key={`menu__list--${index}`}>
            <Link to={rota.to}>{rota.label}</Link>
          </li>
        ))}
      </ul>
    </nav> 
  );
}