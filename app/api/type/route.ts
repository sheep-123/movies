import { NextResponse } from "next/server";
import Type from "@/models/type";
import setJson from "@/helpers/setJson";

export async function GET() {
    try {
        const list = await Type.findAll();
        return NextResponse.json(setJson({code:1, data: list }));
    } catch (error) {
        console.log(error);
        return NextResponse.json(setJson({message:"请求错误" }), { status: 500 });
    }
    
}