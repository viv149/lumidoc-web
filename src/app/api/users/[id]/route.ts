import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";


export async function PUT(req: Request, { params }: { params: { id: string } }) {
    try {
        const { name, email } = await req.json();
        const prisma = new PrismaClient();
        const user = await prisma.user.update({
            where: { id: params.id },
            data: { name, email },
        });
        return NextResponse.json(user, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: "Error updating user" }, { status: 500 });
    }
}
  