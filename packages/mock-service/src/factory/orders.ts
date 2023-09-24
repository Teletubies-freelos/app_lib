import { faker } from "@faker-js/faker";
import { primaryKey } from "@mswjs/data";

export const ordersFactory = (hasId:boolean)=>({
    ...(hasId ? {id: primaryKey(faker.string.uuid)} : {}),
    client_name: ()=> faker.person.firstName(),
    client_phone: ()=> faker.phone.number(),
    client_address: ()=> faker.location.direction(),
    state_payment: ()=> 'Pendiente',
    method_payment: ()=> 'Efectivo',
    total: ()=> faker.number.float({max:1000}),
})
