import { NextResponse } from "next/server"
export default async function GET() {
    try {
   const response=    NextResponse.json({
    message:"logout succesful",
    success:true
   }) 
   response.cookies.set("token","",{httpOnly:true,expires:new Date(0)})
   return response
    } catch (error) {
       return NextResponse.json({error:"error"},{status:200})
    }
}