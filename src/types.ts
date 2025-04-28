export type ProductInCart = {
    productId: number,
    quantity: number
}

export type Rating = {
    rate: number,
    count: number
}

export type Geolocation = {
    lat: string,
    long: string
}

export type Address = {
    geolocation: Geolocation,
    city: string,
    street: string,
    number: number,
    zipcode: string
}

export type Name = {
    firstname: string,
    lastname: string
}