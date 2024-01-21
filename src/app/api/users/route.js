import { PrismaClient } from '@prisma/client';
import { NextResponse } from "next/server";
import bcrypt from 'bcrypt'

const prisma = new PrismaClient();

export async function POST(request) {
    try {
      const {email,password,name,role,image} = await request.json();
     const crypted_password = await bcrypt.hash(password, 12)
      const data ={
        name:name,
        email: email,
        image:image,
        role:role,
        password: crypted_password
      }
      const user = await prisma.User.create({
        data: data,
      })
       return NextResponse.json(user);
    } catch (error) {
         return new NextResponse(JSON.stringify(error), {
        status: 500,
        headers: { "Content-Type": "application/json" },
      });
    } finally{
        prisma.$disconnect()
    }
  }