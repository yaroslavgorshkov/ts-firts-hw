import { ProductInCart } from "../types"

export type Cart = {
    id: number,
    userId: number,
    date: string,
    products: ProductInCart[],
    __v: number
}