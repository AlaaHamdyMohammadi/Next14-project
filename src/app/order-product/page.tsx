
'use client';

import { useRouter } from "next/navigation";

export default function OrderProduct() {
    const router = useRouter();
    const handleclick = () => {
        router.push('/');
    }   
     return (
       <>
         <h1>Order page</h1>
         <button onClick={handleclick}>Place order</button>
       </>
     );
}