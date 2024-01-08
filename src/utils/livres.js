import { PrismaClient } from '@prisma/client';


const prisma = new PrismaClient();
export const QueryLiv=async()=>{
    try {
        const listl=await prisma.livres.findMany();
        return listl
    } catch (error) {
        console.log(error)
    }
    finally{
        prisma.$disconnect()
    }
}