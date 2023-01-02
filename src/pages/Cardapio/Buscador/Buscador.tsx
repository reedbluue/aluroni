import style from './Buscador.module.scss';
import { CgSearch } from 'react-icons/cg';
import React from 'react';

interface BuscadorPropsInterface {
  busca: string;
  setBusca: React.Dispatch<React.SetStateAction<string>>
}

export const Buscador = ({ busca , setBusca }: BuscadorPropsInterface) => {

  return(
    <div className={style['buscador']}>
      <input type="text" onChange={e => { setBusca(e.target.value) }} value={ busca } placeholder='Buscar'/>
      <CgSearch color='#4C4D5E' size={20}/>
    </div>
  );

}