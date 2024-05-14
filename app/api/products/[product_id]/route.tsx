// GET - getting dta
// POST - creating data
// PUT - updating data

import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";

// how to return a specific user_id

interface Props{
    params: {
        prod_id: number
    }
}

// alternative writing
// we can define the shape of the object inline like this
// export function GET(request: NetxRequest, 
//                      {params}:{params: {id: number}})

export function GET(request: NextRequest, {params:{prod_id}}: Props) {
    // fetch data from database
    // if no data found, return 404 error
    // else return data


    if(prod_id > 10)
        return NextResponse.json({error: 'Product not found!'}, { status: 404});

    return NextResponse.json({prod_id: 10, prod_name: "Indefined", prod_price: 0});

}

export async function PUT(request: NextRequest, {params:{prod_id}}: Props) {
    // validate the request body
    // if invalid, return 400
    // fetch the user with the given user_id
    // if does't exist return 404
    // update the user 
    // return the updated user

    const body = await request.json()
    const validation = schema.safeParse(body)

    if(!validation.success)
        return (NextResponse.json(validation.error.errors, { status: 400}))

    if(prod_id > 1000)
        return(NextResponse.json({error: "Produc don't in Catalog!"}, {status: 404}))
    
    return (NextResponse.json(
        {
            prod_id: prod_id, 
            prod_name: body.prod_name, 
            prod_price: body.prod_price
        }, 
        {status: 200}))    
}

export async function DELETE(request: NextRequest, {params:{prod_id}}:Props){
    // validate th body
    // if invalid return 400
    // fetch the user with the given user_id
    // if does't exist return 404
    // delete the user
    // return empty

    const body = await request.json()
    const validation = schema.safeParse(body)

    if(!validation.success)
        return (NextResponse.json({error: "Product name is required"}, {status:400}))

    if(prod_id > 1000)
        return (NextResponse.json({error: "Product don't exist!"}, {status: 404}))

    return (NextResponse.json({prod_id: "", prod_name: "", prod_price: 0}, {status: 200}))

}
