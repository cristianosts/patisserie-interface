import cbolo from '@/assets/cbolo.jpg';
import nbolo from '@/assets/nbolo.jpg';
import pbolo from '@/assets/pbolo.jpg';
import caseirinhos from '@/assets/caseirinhos.jpg';
import { StaticImageData } from "next/image";

export interface FoodItem {
    id: string;
    image: StaticImageData;
    title: string;
    describe: string;
    price?: string;
    price1?: string;
    price2?: string;
    price3?: string;
}

export const foodData: FoodItem[] = [
    { id: '1', image: cbolo, title: 'Torta Chocolatuda', describe: 'Nossa torta na massa de chocolate e recheio de brigadeiro Belga', price1: '80,00', price2: '100,00', price3: '120,00' },
    { id: '2', image: nbolo, title: 'Naked Cake', describe: 'Nosso famoso naked cake recheado com brigadeiro e pedaços de morango', price1: '80,00', price2: '100,00', price3: '120,00' },
    { id: '3', image: pbolo, title: 'Torta Red Velvet', describe: 'Nossa torta de frutas vermelhas com recheio de brigadeiro branco e geleia natural de frutas vermelhas', price1: '80,00', price2: '100,00', price3: '120,00' },
    { id: '4', image: caseirinhos, title: 'Caseirinhos', describe: 'Nossos maravilhosos caseirinhos que trazem a essência da minha infância, temos em vários sabores', price: '12,00' }
];