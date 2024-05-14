
// schena product

import { z } from "zod";


const schema = z.object({
    prod_id: z.number(),
    prod_name: z.string({
                    required_error: "Name is required!",
                    invalid_type_error: "Name must be a string!"})
                .regex(new RegExp(/^[a-zA-Z]+[-'s]?[a-zA-Z ]+$/), {message:'Name should contain only alphabets'})
                .min(5, {message: "Must be 5 or more characters long!"}),
    prod_price: z.number().multipleOf(0.01)
})

export default schema;
