import style from './Itens.module.scss';
import itens from './itens.json';
import { Item } from './Item/Item';
import { useEffect, useState } from 'react';

interface ItensPropsInterface {
  busca: string;
  filtro: number | null;
  ordenador: string;
}

type ItemInterface = typeof itens[0];

export const Itens = ({ busca, filtro, ordenador }: ItensPropsInterface) => {
  
  const [ lista, setLista ] = useState(itens);

  useEffect(() => {
    let listaFiltro = itens.filter(item => {
      const regex = new RegExp(busca, 'i');
      return regex.test(item.title);
    });

    listaFiltro = listaFiltro.filter(item => {
      if(!filtro) return true;
      return filtro == item.category.id;
    });

    switch(ordenador) {
      case 'porcao':
        setLista(listaFiltro.sort((a, b) => a.size > b.size ? 1 : -1));
      break;
      case 'preco':
        setLista(listaFiltro.sort((a, b) => a.price > b.price ? 1 : -1));
      break;
      case 'qtd_pessoas':
        setLista(listaFiltro.sort((a, b) => a.serving > b.serving ? 1 : -1));
      break;
      default:
        setLista(listaFiltro);
      break;
    }
  }, [busca, filtro, ordenador])
  
  return(
    <div className={style['itens']}>
      {lista.map(item => (
        <Item key={`itens__item--${item.id}`} {...item}/>
      ))}
    </div>
  );
}
