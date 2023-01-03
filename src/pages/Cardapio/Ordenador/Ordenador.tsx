import style from './Ordenador.module.scss';
import opcoes from './opcoes.json';
import React, { useState } from 'react';
import classNames from 'classnames';
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from 'react-icons/md';

interface OrdenadorPropsInterface {
  ordenador: string;
  setOrdenador: React.Dispatch<React.SetStateAction<string>>;
}

interface OpcaoInterface {
  nome: string;
  valor: string;
}

export const Ordenador = ({
  ordenador,
  setOrdenador,
}: OrdenadorPropsInterface) => {
  const [ordenadorAberto, setOrdenadorAberto] = useState(false);
  const [nomeOrdenadorAtual, setNomeOrdenadorAtual] = useState('');

  return (
    <button
      className={classNames({
        [style['ordenador']]: true,
        [style['ordenador--ativo']]: ordenador !== '',
      })}
      onClick={() => {
        setOrdenadorAberto(!ordenadorAberto);
      }}
      onBlur={() => setOrdenadorAberto(false)}
    >
      <span>
        {nomeOrdenadorAtual !== ''
          ? `Ordenar por: ${nomeOrdenadorAtual}`
          : `Ordenar por:`}
      </span>
      {ordenadorAberto ? (
        <MdKeyboardArrowUp size={20} />
      ) : (
        <MdKeyboardArrowDown size={20} />
      )}
      <div
        className={classNames({
          [style['ordenador__options']]: true,
          [style['ordenador__options--ativo']]: ordenadorAberto,
        })}
      >
        {opcoes.map((opcao, index) => (
          <div
            className={style['ordenador__option']}
            onClick={() => {
              setOrdenador(opcao.value);
              setNomeOrdenadorAtual(opcao.nome);
            }}
            key={`ordenador__option--${index}`}
          >
            {opcao.nome}
          </div>
        ))}
      </div>
    </button>
  );
};
