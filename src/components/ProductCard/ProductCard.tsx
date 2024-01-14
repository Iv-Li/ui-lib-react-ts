import { IProduct } from '@/types/products.ts';
import './ProductCard.scss'

type ProductCardProps = Omit<IProduct, 'id'>
export const ProductCard = ({ title, price, category, description, image }: ProductCardProps) => {
  return (
    <div className={'Product'}>
      <img src={image} alt={title} />
        <div>
          <p>category: {category}</p>
          <p>price: {price}</p>
          <p>{description}</p>
        </div>
    </div>
  )
}