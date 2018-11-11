const faker = require('faker')
const Item = require('../models/Item')
// const num = process.argv[2]
const categories = ['5be2c6fe63161474898d37c1', '5be2cdad63161474898d37c2', '5be2cdbe63161474898d37c3']


function fakeItems(num){
    let items = []
    for(let i = 0; i < num; i++){
        let newItem = {
            name: faker.commerce.productName(),
            description: faker.lorem.sentence(),
            price: faker.commerce.price(),
            stock: faker.random.number({min: 10, max: 50}),
            img: faker.image.food(),
            category: categories[Math.floor(Math.random()*categories.length)]
        }
        items.push(newItem)
    }

    return items

}

let items = fakeItems(process.argv[2])
Item.insertMany(items)

module.exports = fakeItems

