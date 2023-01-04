import style from './Footer.module.scss';
import { ReactComponent as Logo } from 'assets/logo.svg';

interface FooterPropsInterface {}

export const Footer = (props: FooterPropsInterface) => {
  return(
    <footer className={style['footer']}>
      <Logo/>
    </footer>
  );
}