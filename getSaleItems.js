/**
 Expected output: 
   [
       {item: "🍭", price: 2.99},
       {item: "🍫", price: 1.99}, 
       {item: "🍬", price: 0.89}
    ]
 */

// data
const products = [
    {
        item: "🍭",
        price: 2.99,
        type: "sweet",
    },
    {
        item: "🍫",
        price: 1.99, 
        type: "sweet",
    },
    {
        item: "🥫",
        price: 1.99, 
        type: "savory",
    },
    {
        item: "🍬",
        price: .89, 
        type: "sweet",
    },
    {
        item: "🥦",
        price: 3.99,
        type: "savory",
    }, 
    {
        item: "🍖",
        price: 3.99, 
        type: "savory",
    }, 
]

function getSaleItems(data){
 return data.filter(item => item.type === "sweet")
            .map(({item, price}) => {
                return {item, price}
            })
}

//test
const shoppingCart = getSaleItems(products)
console.log(shoppingCart)

//problem
/**
 Example output: 73.44
 */

/**pseudo
 * 1. get total (.reduce())
 * 2. return total with 2 decimal places
 */
function total(arr){
    const total = arr.reduce((total, current)=> {return total + current.price}, 0)
    return total.toFixed(2)
}

 //test
 console.log(total(shoppingCart))

 //problem
 /**
Use reduce() and only reduce() to calculate and return 
the total cost of only the savory
items in the shopping cart.

Expected output: 9.97 
  */

//test
console.log(totalSavory(shoppingCart))