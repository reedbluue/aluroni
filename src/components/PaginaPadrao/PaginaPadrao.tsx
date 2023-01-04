import style from './PaginaPadrao.module.scss';
import styleTema from 'styles/Tema.module.scss';
import { Outlet } from 'react-router-dom';

interface PaginaPadraoPropsInterface {}

export const PaginaPadrao = (props: PaginaPadraoPropsInterface) => {
  return (
    <>
      <header className={style['header']}>
        <h1 className={style['header__text']}>A casa do código e da massa</h1>
      </header>
      <div className={styleTema['container']}>
        <Outlet/>
      </div>
    </>
  );
};
