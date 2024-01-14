import axios from 'axios';
import { products } from '@/types';
import { types } from 'sass';
import Error = types.Error;
import { IProduct } from '@/types/products.ts';

const axiosInstance = axios.create({
  baseURL: 'https://fakestoreapi.com/'
})

const getProducts = async (sortOption: products.sortOption) => {
  try {
    const products = await axiosInstance.get<IProduct[]>(`/products?sort=${sortOption}`)
    return products
  } catch (err) {
    if (err instanceof Error) {
      console.log({err})
    }
  }
}

export {
  getProducts
}