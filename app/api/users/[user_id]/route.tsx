// GET - getting dta
// POST - creating data
// PUT - updating data

import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";

// how to return a specific user_id

interface Props{
    params: {
        user_id: number
    }
}

// alternative writing
// we can define the shape of the object inline like this
// export function GET(request: NetxRequest, 
//                      {params}:{params: {id: number}})

export function GET(request: NextRequest, {params:{user_id}}: Props) {
    // fetch data from database
    // if no data found, return 404 error
    // else return data


    if(user_id > 10)
        return NextResponse.json({error: 'User not found!'}, { status: '404'});

    return NextResponse.json({id: 1, name:"Sofiane"});

}

export async function PUT(request: NextRequest, {params:{user_id}}: Props) {
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

    if(user_id > 10)
        return(NextResponse.json({error: "User don't exist!"}, {status: 404}))
    
    return (NextResponse.json({user_id: user_id, name: body.name}, {status: 200}))    
}

export async function DELETE(request: NextRequest, {params:{user_id}}:Props){
    // validate th body
    // if invalid return 400
    // fetch the user with the given user_id
    // if does't exist return 404
    // delete the user
    // return empty

    const body = await request.json()
    if(!body.name)
        return (NextResponse.json({error: "User is required"}, {status:400}))

    if(user_id > 10)
        return (NextResponse.json({error: "User don't exist!"}, {status: 404}))

    return (NextResponse.json({user_id: "", name: ""}, {status: 200}))


}
