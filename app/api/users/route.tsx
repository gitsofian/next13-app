// GET - getting dta
// POST - creating data
// PUT - updating data

import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";
import { prisma } from "@/prisma/client";



// how to return a collection of users
export async function GET(request: NextRequest){ // to cache data in browser removing the "request: NextRequest" to prevent caching data in Browser add this parameter! 

    const users = await prisma.user.findMany({
        where: {
        }
    })

    return NextResponse.json(users);
}

// how to create a user
export async function POST(request: NextRequest){

    // validating data: if invalid return 400 error, else return the data was created with status code 201

    const body = await request.json();
    const validation = schema.safeParse(body);

    if(!validation.success)
        return (NextResponse.json(validation.error.errors, {status: 400}));
    
    const user = await prisma.user.findUnique({
        where: {
            email: body.email,
        }
    })
    if (user)
        return (NextResponse.json({error: "User already exist!"}, {status: 400}));

    const newUser = await prisma.user.create({
        data: {
            name: body.name,
            email: body.email,
            age: body.age
        }
    })
    return (NextResponse.json(newUser, {status: 201}))
}
