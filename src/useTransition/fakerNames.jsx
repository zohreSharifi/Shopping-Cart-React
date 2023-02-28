import {faker} from "@faker-js/faker"
 export const fakeNames=Array.from(Array(100),()=>{
    return faker.name.findName()
})
