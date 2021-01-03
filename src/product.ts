import { Client } from 'src/client';

export class Product{
    id: string;
    name: string;
    price: number;
    quantity: number;
    client: Client;
    active: boolean;    
}