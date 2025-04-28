import { Name, Address } from "../types"

export type User = {
    address: Address,
    id: number,
    email: string,
    username: string,
    password: string,
    name: Name,
    phone: string,
    __v: number
}