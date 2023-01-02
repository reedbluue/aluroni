import style from './Filtros.module.scss';
import filtros from './filtros.json';
import React from 'react';
import className from 'classnames';

interface FiltrosPropsInterface {
  filtroAtivo: number | null;
  setFiltroAtivo: React.Dispatch<React.SetStateAction<number | null>>;
}

interface FiltroInterface {
  id: number;
  label: string;
}

export const Filtros = ({
  filtroAtivo,
  setFiltroAtivo,
}: FiltrosPropsInterface) => {
  const updateFiltroAtivo = (filtro: FiltroInterface) => {
    if (filtroAtivo === filtro.id) return setFiltroAtivo(null);
    setFiltroAtivo(filtro.id);
  };

  return (
    <div className={style['filtros']}>
      {filtros.map((filtro) => (
        <button
          className={className({
            [style['filtros__filtro']]: true,
            [style['filtros__filtro--ativo']]: filtroAtivo === filtro.id,
          })}
          key={`filtro__button--${filtro.id}`}
          onClick={() => {
            updateFiltroAtivo(filtro);
          }}
        >
          {filtro.label}
        </button>
      ))}
    </div>
  );
};
