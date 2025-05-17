const products=[
    {id :1, name:"Product 1",price:40},
    {id :2, name:"Product 2",price:22},
    {id :3, name:"Product 3",price:54},
];

let newPrice=products.map((value) => value.price+5);
 console.log(newPrice);

products.forEach((product)=> console.log(product.name));