import { headers } from "next/headers";
import { NextRequest } from "next/server";


export async function GET(request: NextRequest){
    const requestHeaders = new Headers(request.headers);
    const headerList = headers();
    
    console.log("headerList : ", headerList.get('Authorization'));
    console.log("requestHeaders : ", requestHeaders.get('Authorization'));
    

    
    return new Response('<h1>Profile API</h1>', {
        headers: {
            "Content-Type": "text/html"
        }
    });
}