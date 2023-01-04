import { Item } from 'components/Item/Item';
import style from './Prato.module.scss';
import cardapio from 'data/cardapio.json';
import { useParams, useNavigate, Routes, Route } from 'react-router-dom';
import { NotFound } from 'pages/NotFound/NotFound';
import { PaginaPadrao } from 'components/PaginaPadrao/PaginaPadrao';

interface PratoPropsInterface {}

export const Prato = (props: PratoPropsInterface) => {

  const navigate = useNavigate();

  const { id } = useParams();
  const pratoAtual = cardapio.find(prato => prato.id.toString() === id);
  if(!pratoAtual) return <NotFound/>;

  return (
    <Routes>
      <Route path='*' element={<PaginaPadrao/>}>
        <Route index element={
          <main className='container'>
            <button className={style['voltar']} onClick={() => {navigate(-1)}}>{'< Voltar'}</button>
            <Item {...pratoAtual}/>
          </main>
        }/>
      </Route>
    </Routes>
  );
};
