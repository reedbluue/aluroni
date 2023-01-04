import style from './Inicio.module.scss';
import styleTema from 'styles/Tema.module.scss';
import cardapio from 'data/cardapio.json';
import nossaCasa from 'assets/nossa_casa.png';
import { useNavigate } from 'react-router-dom';

interface InicioPropsInterface {}

export const Inicio = (props: InicioPropsInterface) => {

  const navigate = useNavigate();

  const pratosRecomendados = [...cardapio]
    .sort(() => 0.5 - Math.random())
    .splice(0, 3);

  return (
    <section>
      <h3 className={styleTema['titulo']}>Recomendações da cozinha</h3>
      <div className={style['recomendados']}>
        {pratosRecomendados.map((prato, index) => (
          <div className={style['recomendado']} key={`recomendado-${index}`}>
            <div className={style['recomendado__imagem']}>
              <img src={prato.photo} alt={prato.title} />
            </div>
            <button className={style['recomendado__botao']} onClick={() => { navigate(`/prato/${prato.id}`, { state: { prato } }) }}>Ver mais</button>
          </div>
        ))}
      </div>
      <h3 className={styleTema['titulo']}>Nossa casa</h3>
      <div className={style['nossaCasa']}>
          <img src={nossaCasa} alt="casa do aluroni" />
          <div className={style['nossaCasa__endereco']}>Rua Vergueiro, 3185 <br /> <br /> Vila Mariana - SP</div>
      </div>
    </section>
  );
};
