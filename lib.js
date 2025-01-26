
let prod = [
    {
        price: 100,
        name: 'Каша',
        top: 1,
        oldPrice: 140        
    },
    {
        price: 150,
        name: 'Суп',
        top: 2,
        oldPrice: 190        
    },
    {
        price: 200,
        name: 'шашлык',
        top: 3,
        oldPrice: 300        
    },
    {
        price: 400,
        name: 'Плов',
        top: 4,
        oldPrice: 500        
    },
];

function sortProducts(products, sortBy, order = 'asc') {
    return products.sort((a, b) => {
        let valueA = a[sortBy];
        let valueB = b[sortBy];
        
        // Для строк применяем метод localeCompare
        if (typeof valueA === 'string' && typeof valueB === 'string') {
            return order === 'asc' ? valueA.localeCompare(valueB) : valueB.localeCompare(valueA);
        }

        // Для чисел или других типов
        return order === 'asc' ? valueA - valueB : valueB - valueA;
    });
}

// Примеры использования:
console.log(sortProducts(prod, 'price', 'asc'));  // Сортировка по цене (возрастание)
console.log(sortProducts(prod, 'name', 'desc')); // Сортировка по названию (убывание)
console.log(sortProducts(prod, 'oldPrice', 'asc')); // Сортировка по старой цене (возрастание)
console.log(sortProducts(prod, 'top', 'desc')); // Сортировка по рейтингу (убывание)



let a = prod.filter((v)=>{return v.price < 150})


const filterByPrice = prod.filter((v)=>{return v.price < 150})
const filterByCat = prod.filter((v)=>{return v.category == 'Бытовая техника'})


function filterBy(prod, cat, param){
  return prod.filter((v)=>{return v.[cat] == param })
  
}

filterBy(prod, 'чытовая техника', 'часы' )

// из JSON в Объект
const json = '{"result":true, "count":42}';
const obj = JSON.parse(json);
