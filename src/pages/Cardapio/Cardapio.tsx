import style from './Cardapio.module.scss';
import { Buscador } from './Buscador/Buscador';
import { useState } from 'react';
import { Filtros } from './Filtros/Filtros';
import { Ordenador } from './Ordenador/Ordenador';
import { Itens } from './Itens/Itens';

interface CardapioPropsInterface {}

export const Cardapio = (props: CardapioPropsInterface) => {
  const [busca, setBusca] = useState('');
  const [filtroAtivo, setFiltroAtivo] = useState<number | null>(null);
  const [ordenador, setOrdenador] = useState('');

  return (
    <main className={style['main']}>
      <header className={style['header']}>
        <h1 className={style['header__text']}>A casa do código e da massa</h1>
      </header>
      <section className={style['cardapio']}>
        <h3 className={style['cardapio__titulo']}>Cardápio</h3>
        <Buscador busca={busca} setBusca={setBusca} />
        <div className={style['cardapio__filtros']}>
          <Filtros filtroAtivo={filtroAtivo} setFiltroAtivo={setFiltroAtivo} />
          <Ordenador ordenador={ordenador} setOrdenador={setOrdenador} />
        </div>
        <Itens busca={busca} filtro={filtroAtivo} ordenador={ordenador} />
      </section>
    </main>
  );
};
