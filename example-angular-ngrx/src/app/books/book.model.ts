export interface BookReview {
    author: string;
    rating: number;
    date: string;
    title: string;
    comment: string;
}

export const defaultBookReview = {
     author: '',
     rating: 0,
     date: '',
     title: '',
     comment: ''
};

export interface Book {
     id: number;
     name: string;
     author: string;
     detail: string;
     price: number;
     image: string;
     reviews: BookReview[];
}

export const defaultBook = {
     id: -1,
     name: '',
     author: '',
     detail: '',
     price: 0,
     image: '',
     reviews: []
};
