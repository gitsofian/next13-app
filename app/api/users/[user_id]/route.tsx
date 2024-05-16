// GET - getting dta
// POST - creating data
// PUT - updating data

import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";

import { prisma } from "@/prisma/client";


// how to return a specific user_id

interface Props{
    params: {
        user_id: string
    }
}

// alternative writing
// we can define the shape of the object inline like this
// export function GET(request: NetxRequest, 
//                      {params}:{params: {id: number}})

export async function GET(request: NextRequest, {params:{user_id}}: Props) {
    // fetch data from database
    // if no data found, return 404 error
    // else return data

    const user = await prisma.user.findUnique({
        where: {
            id: parseInt(user_id)
        }
    });


    if(!user)
        return NextResponse.json({error: 'User not found!'}, { status: 404});

    return NextResponse.json(user);

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

    const user = await prisma.user.findUnique({ 
        where: {
            id: parseInt(user_id)
        }
    })
    
    if(!user)
        return(NextResponse.json({error: "User don't exist!"}, {status: 404}))

    const updatedUser = await prisma.user.update({
        where: {
            id: parseInt(user_id),
        },
        data: {
                name: body.name,
                email: body.email,
                age: body.age,
            }
        }
    )
    
    return (NextResponse.json(
        updatedUser, 
        {status: 200}))    
}

export async function DELETE(request: NextRequest, {params:{user_id}}:Props){
    // validate th body
    // if invalid return 400
    // fetch the user with the given user_id
    // if does't exist return 404
    // delete the user
    // return empty

    const body = await request.json()
    const validation = schema.safeParse(body)

    if(!validation.success)
        return (NextResponse.json({error: "User is required"}, {status:400}))

    const user = await prisma.user.findUnique({
        where: {
            id: parseInt(user_id)
        }
    })

    if(!user)
        return (NextResponse.json({error: "User don't exist!"}, {status: 404}))

    await prisma.user.delete({
        where:{
            id: parseInt(user_id)
        }
    })
    return (NextResponse.json({message: "Successful User deleted!"}, {status: 200}))


}
