import { faker } from '@faker-js/faker';
import { primaryKey } from '@mswjs/data';

export const productsFactory = (hasId:boolean)=>({
    ...(hasId ? {id: primaryKey(faker.string.uuid)} : {}),
    name: ()=> faker.commerce.productName(),
    description: ()=> faker.commerce.productDescription(),
    price: ()=> Number(faker.commerce.price()),
    price_offer: ()=> Number(faker.commerce.price()),
    quantity: ()=> faker.number.int({min:0}),
    image_url: ()=> faker.image.urlPicsumPhotos(),
})
