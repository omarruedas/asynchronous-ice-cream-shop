let stocks = {
    Fruits : ["Strawberry", "Grapes", "Banana", "Apple"],
    liquid : ["Water", "ice"],
    holder : ["cone", "cup", "stick"],
    toppings : ["Chocolate", "Peanuts"],
 };

 let is_shop_open = true;

 /* using promises => resolve or reject
 let order = (time, work) => {
    return new Promise((resolve, reject) => {
        if (is_shop_open) {
            setTimeout(() => {
                resolve(work())
            }, time)
        }
        else {
            reject(console.log("Our shop is closed."))
        }
    })
 }

 order(2000, () => console.log(`${stocks.Fruits[0]} was selected.`))

 .then(() => {
    return order(0000, () => console.log('Production has started.'))
 })
 .then(() => {
    return order(2000, () => console.log('Fruit has been chopped.'))
 })
 .then(() => {
    return order(1000, () => console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} were added.`))
 })
 .then(() => {
    return order(1000, () => console.log('Ice cream machine has started.'))
 })
 .then(() => {
    return order(2000, () => console.log(`Ice cream placed on ${stocks.holder[0]}.`))
 })
.then(() => {
    return order(3000, () => console.log(`${stocks.toppings[0]} added as topping.`))
})
.then(() => {
return order(2000, () => console.log('Ice cream served.'))    
})

//error handling with .catch handler
.catch(() => {
    console.log('Customer left.')
})

//finally handler works regardless of whether promise was resolved or rejected
.finally(() => {
    return order(5000, () => console.log('Closed for end of day.'))
})
*/ 

//using async/await => try, catch
    //time function: to assign the amount of time each small task will take
function time(ms) {
    return new Promise((resolve, reject) => {
        if(is_shop_open) {
            setTimeout(resolve, ms);
        }
        else {
            reject(console.log('Shop is closed.'))
        }
    });
}
    //kitchen function: to make ice cream
async function kitchen() {
    try{
        //time taken to perform this task
    await time(2000)
    console.log(`${stocks.Fruits[0]} was selected.`)
    await time(0000)
    console.log('Production has started.')
    await time(2000)
    console.log('Fruit has been chopped.')
    await time(1000)
    console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} added.`)
    await time(1000)
    console.log('Machine started.')
    await time(2000)
    console.log(`Ice cream placed on ${stocks.holder[0]}.`)
    await time(3000)
    console.log(`${stocks.toppings[0]} added as topping.`)
    await time(2000)
    console.log('Ice creamed served.')
    }
    
    catch(error) {
        console.log('Customer left.', error)
    }
}

kitchen();