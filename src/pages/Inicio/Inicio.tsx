import style from './Inicio.module.scss';
import cardapio from 'data/cardapio.json';

interface InicioPropsInterface {}

export const Inicio = (props: InicioPropsInterface) => {
  const pratosRecomendados = [...cardapio]
    .sort(() => 0.5 - Math.random())
    .splice(0, 3);

  return (
    <main>
      <section>
        <h3 className={style['titulo']}>Recomendações da cozinha</h3>
        <div className={style['recomendados']}>
          {pratosRecomendados.map((prato, index) => (
            <div className={style['recomendado']} key={`recomendado-${index}`}>
              <div className={style['recomendado__imagem']}>
                <img src={prato.photo} alt={prato.title} />
              </div>
              <button className={style['recomendado__botao']}>Ver mais</button>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};
