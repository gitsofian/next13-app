
// schema user

import {z} from "zod"

const schema = z.object({
    name: z.string({
            required_error: "Name is required!",
            invalid_type_error: "Name must be a string!"})
            .regex(new RegExp(/^[a-zA-Z]+[-'s]?[a-zA-Z ]+$/), {message:'Name should contain only alphabets'})
            .min(3, {message: 'Name should have atleast 3 alphabets'}),
    email: z.string().email(),
    age: z.number().nonnegative().max(120)
});

export default schema;
