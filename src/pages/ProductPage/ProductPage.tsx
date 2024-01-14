import { useCallback, useEffect, useState } from 'react';
import { Select, ISelectOption, OnChangeSelect } from '@/ui-kit';
import { productsAPI } from '@/api';
import { sortOption, IProduct } from '@/types/products.ts';
import ProductCard from '@/components/ProductCard';
import './ProductPage.scss'

const DESC = 'По зменшенню ціни'
const ASC = 'По збільшенню ціни'

interface IOption extends ISelectOption {
  value : sortOption
}

type Options = IOption[]

export const options: Options = [
  { value: 'desc', label: DESC },
  { value: 'asc', label: ASC }
]

const ProductPage = () => {


  const [chosenValue, setChosenValue] = useState<IOption>(options[0])
  const [products, setProducts] = useState<IProduct[] | null>(null)


  const getProd = useCallback((sort: sortOption) => {
    productsAPI.getProducts(sort)
      .then(res => res && setProducts(res.data))
  }, [])

  useEffect(() => {
    getProd(chosenValue.value)
  }, [chosenValue])

  const onChange: OnChangeSelect = (newValue) => {
   setChosenValue(newValue as IOption)
  }

  return (
    <div>
      <Select options={options} onChange={onChange} value={chosenValue}/>
      <div className={'Products'}>
        {products?.map(item => (
          <ProductCard {...item} key={item.id} />
        ))}
      </div>
    </div>
  )
}


export default ProductPage