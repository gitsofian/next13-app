// GET - getting dta
// POST - creating data
// PUT - updating data

import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";

// how to return a collection of users
export function GET(request: NextRequest){ // to cache data in browser removing the "request: NextRequest" to prevent caching data in Browser add this parameter! 

    return NextResponse.json(
        [
            {id: 100, prod_name: "Bike", prod_price: 999.99},
            {id: 102, prod_name: "Teil", prod_price: 12.98}
        ]);
}

// how to create a user
export async function POST(request: NextRequest){

    // validating data: if invalid return 400 error, else return the data was created with status code 201

    const body = await request.json();
    const validation = schema.safeParse(body);

    if(!validation.success)
        return (NextResponse.json(validation.error.errors, {status: 400}));
    
    return (NextResponse.json({id:1, name:body.name}, {status: 201}))
}
