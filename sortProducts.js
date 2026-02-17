/**
You're online shopping for holiday gifts, but money is tight
so we need to look at the cheapest items first. 
Use the built in sort() method to write a function that returns a new array of
products sorted by price, cheapest to most expensive. 
    
Then log the item and the price to the console: 
    💕,0
    🍬,0.89
    🍫,0.99
    🧁,0.99
    📚,0.99
... continued
 */

//data
const products =[
    {
        product: "🍭",
        price: 2.99,
    },
    {
        product: "🍫",
        price: .99, 
    },
    {
        product: "🏡",
        price: 40000000
    },
    {
        product: "🧁",
        price: .99, 
    },
    {
        product: "📚",
        price: .99, 
    },
    {
        product: "⏰",
        price: 13.99, 
    }, 
    {
        product: "🍬",
        price: .89, 
    },
    {
        product: "🥎",
        price: 3.99,
    }, 
    {
        product: "🎸",
        price: 13.99, 
    }, 
    {
        product: "🎨",
        price: 23.99, 
    }, 
    {
        product: "💕",
        price: 0, 
    }, 
]

/**pseudo
 * 1. return ascending order
 * 2. log each item
 */
function sortProducts(data){
    return data.sort((a,b)=> a.price-b.price)
}

//test
const listByCheapest = sortProducts(products)
console.log(listByCheapest)

listByCheapest.forEach(item => console.log(item.product, item.price) )