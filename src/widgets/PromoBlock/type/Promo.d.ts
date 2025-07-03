export type SlideType = {
    title: string;
    description: string;
    image: string;
    imageMobile: string;
}


export type DeliveryType = {
    days: string | 'next day' | 'today';
    pays: string | 'free' | 'paid';
    selfPickup: boolean;
}

export type ProductType = {
    id: number;
    name: string;
    discount: string | null;
    price: string;
    discountPrice: string | null;
    image: string;
    rating: number;
    delivered: DeliveryType;
}