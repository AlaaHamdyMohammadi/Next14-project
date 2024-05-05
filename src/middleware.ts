import { NextRequest, NextResponse } from "next/server";


export function middleware(request: NextRequest){
    return NextResponse.redirect(new URL('/', request.url));
}

export const config ={
    matcher: '/profile' // I want when user visit /profile I want to redirect to /
}