import { NextRequest, NextResponse } from "next/server";
import { db, cartTable } from "@/lib/drizzle"
import { and, eq } from "drizzle-orm";

export const GET = async (request: NextRequest) => {
    const uid = request.nextUrl.searchParams.get("user_id") as string;
    try {
      const res = await db
        .select()
        .from(cartTable)
        .where(eq(cartTable.user_id, uid));
      return NextResponse.json(res);
    } catch (error) {
      console.log(error);
      return NextResponse.json(error);
    }
  };

export async function POST (request: NextRequest) {

    const req = await request.json()

    try {
        const res = await db.insert(cartTable).values({
            user_id: req.user_id,
            product_id: req.product_id,
            product_name: req.product_name,
            price: req.price,
            image: req.image,
            quantity: req.quantity,
        }).onConflictDoUpdate({
            target: [cartTable.product_name],
            set: {
                quantity: req.quantity,
                price: req.price
            }
        })
        .returning();
        return NextResponse.json({res})
    }catch(error){
        console.log("This is api error",error)
        return NextResponse.json({message: "Something went wrong"})
    }
}

export async function DELETE(request: NextRequest){
  const req = await request.json();

  try {
    const res = await db.delete(cartTable).where(
      and(
        eq(cartTable.user_id , req.user_id),
        eq(cartTable.product_name, req.product_name)
      )
    ).returning()
    return NextResponse.json({message:"success"})
  } catch (error) {
    console.log("Error deleting",error);
    return NextResponse.json({message:"Error deleting"});
  }
}
