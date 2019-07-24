export interface CarQuality {
    name: string;
    rating: number;
}

export const defaultCarQuality = {
     name: '',
     rating: 0
};

export interface Car {
    image: string;
    manufacturer: string;
    model: string;
    price: number;
    wiki: string;
    quality: CarQuality[];
}

export const defaultCar = {
    image: '',
    manufacturer: '',
    model: '',
    price: 0,
    wiki: '',
    quality: []
};
