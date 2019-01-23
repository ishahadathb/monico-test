/* mimicking a fake api call with faker*/
import faker from 'faker';


// your schema
const schema = {
    id: '{{random.number}}',
    name: '{{commerce.productName}}',
    price: '{{commerce.price}}',
    category: '{{commerce.product}}',
    image: '{{image.food}}'
}


// random generator
const generator = (ammount=12) => {
    return Array.from({length: ammount})
        .map(() => Object.keys(schema)
            .reduce((entity, key) => {
                entity[key] = faker.fake(schema[key]);
                return entity
            }, {}))
}

export default generator;