import style from './Sobre.module.scss';
import styleMenu from 'styles/Tema.module.scss';
import casa from 'assets/sobre/casa.png';
import img1 from 'assets/sobre/massa1.png';
import img2 from 'assets/sobre/massa2.png';

interface SobrePropsInterface {}

export const Sobre = (props: SobrePropsInterface) => {

  const imagens = [img1, img2];

  return (
    <section>
      <h3 className={styleMenu['titulo']}>Sobre</h3>
      <div className={style['sobreNos']}>
        <img src={casa} alt="Casa Aluroni" />
        <div className={style['sobreNos__texto']}>
          <p>
            Nós do Aluroni oferecemos a vocês, nossos queridos clientes, a Massa
            Italiana Caseira mais saborosa e sofisticada de São Paulo! Prezamos
            pelos ingredientes tradicionais da culinária Italiana, frescos e de
            excelente qualidade para que sua experiência seja ainda mais
            intensa!
          </p>
          <p>
            Também possuímos uma cardápio de carnes com muitas opções de acordo
            com o seu gosto!
          </p>
          <p>
            Para acompanhar as massas italianas, Aluroni possui uma reserva de
            vinhos especiais, que harmonizam perfeitamente com o seu parto, seja
            carne ou massa!
          </p>
        </div>
      </div>
      <div className={style['imagens']}>
        {imagens.map((imagem, index) => (
          <div className={style['imagens__imagem']} key={`imagens__imagem--${index}`}>
            <img src={imagem} alt="imagem de massa"/>
          </div>
        ))}
      </div>
    </section>
  );
};
