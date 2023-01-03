import style from './Item.module.scss';
import cardapio from 'data/cardapio.json';
import className from 'classnames';

type ItemInterface = typeof cardapio[0]; 

interface ItemPropsInterface extends ItemInterface {}


export const Item = ({ title, category, description, photo, price, serving, size }: ItemPropsInterface) => {
  return(
    <div className={style['item']}>
      <div className={style['item__imagem']}>
        <img src={photo} alt="imagem" />
      </div>
      <div className={style['item__descricao']}>
        <div className={style['item__titulo']}>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <div className={style['item__tags']}>
          <div className={className({
            [style['item__tipo']]: true,
            [style[`item__tipo--${category.label.toLowerCase()}`]]: true
          })}>{category.label}</div>
          <div className={style['item__porcao']}>{size}g</div>
          <div className={style['item__qtdpessoas']}>Serve {serving} {serving > 1 ? 'pessoas' : 'pessoa'}</div>
          <div className={style['item__valor']}>R$ {price.toFixed(2)}</div>
        </div>
      </div>
    </div>
  );
}