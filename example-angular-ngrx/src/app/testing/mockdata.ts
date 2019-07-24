export const mockBooks = [
    {
        'id': 1,
        'name': 'Learning Ext JS',
        'author': 'Shea Frederick, Colin Ramsay & Steve \'Cutter\' Blades',
        'detail': 'As more and more of our work is done through a web browser',
        'price': 38.21,
        'image': 'books/learning-extjs.jpg',
        'reviews': [
            {
                'author': 'Kyle D. Wagner',
                'rating': 4,
                'date': 'May 24, 2009',
                'title': 'A good introduction to EXT JS',
                'comment': 'This book is a good introduction to EXT JS.'
            },
            {
                'author': 'James P. Stone',
                'rating': 4,
                'date': 'September 22, 2009',
                'title': 'Good Basic Coverage',
                'comment': 'This book is good at teaching the basics to get you up and running quickly.'
            }
        ]
    },
    {
        'id': 2,
        'name': 'Learning Ext JS 3.2',
        'author': 'Shea Frederick, Colin Ramsay & Steve \'Cutter\' Blades and Nigel White',
        'detail': 'The book provides plenty of fun example code and screenshots ',
        'price': 38.03,
        'image': 'books/learning-extjs-32.jpg',
        'reviews': [
            {
                'author': 'R. Chesley',
                'rating': 5,
                'date': 'Feburary 10, 2011',
                'title': 'Great overview of ExtJS',
                'comment': 'I bought the first edition of this book for a project'
            }
        ]
    }
];

export const mockCars = [{
    'image' : 'cars/2004_Porsche_911_Carrera_type_997.jpg',
    'manufacturer' : 'Porsche',
    'model' : '911',
    'price' : 135000,
    'quality' : [{
        'name' : 'overall',
        'rating' : 1
    }, {
        'name' : 'mechanical',
        'rating' : 4
    }, {
        'name' : 'powertrain',
        'rating' : 2
    }, {
        'name' : 'body',
        'rating' : 4
    }, {
        'name' : 'interior',
        'rating' : 3
    }, {
        'name' : 'accessories',
        'rating' : 2
    }],
    'wiki' : 'http://en.wikipedia.org/wiki/Porsche_997'
    }, {
    'image' : 'cars/250px-Nissan_GT-R.jpg',
    'manufacturer' : 'Nissan',
    'model' : 'GT-R',
    'price' : 80000,
    'quality' : [{
        'name' : 'overall',
          'rating' : 2
        },
        {'name' : 'mechanical',
          'rating' : 3
        },
        {'name' : 'powertrain',
          'rating' : 5
        },
        {'name' : 'body',
          'rating' : 4
        },
        {'name' : 'interior',
          'rating' : 2
        },
        {'name' : 'accessories',
          'rating' : 2
        }
    ],
    'wiki' : 'http://en.wikipedia.org/wiki/Nissan_Gt-r'
    }
];
