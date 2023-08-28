import { sql } from "@vercel/postgres"
import {pgTable, varchar, integer, serial} from "drizzle-orm/pg-core"
import {drizzle} from "drizzle-orm/vercel-postgres"
import { InferModel } from "drizzle-orm";

export const cartTable= pgTable("hackathon", {
    id: serial("id").primaryKey(),
    user_id: varchar("user_id", {
        length: 255
    }).notNull(),
    image: varchar("image", {
        length: 255
    }).notNull(),
    price: integer("price").notNull(),
    product_name: varchar("product_name", {
        length: 255
    }).notNull(),
    product_id: varchar("product_id", {
        length: 255
    }).notNull(),
    quantity: integer("quantity").notNull()
})

export type cart = InferModel<typeof cartTable>;
export type NewTodo = InferModel<typeof cartTable,"insert">;

export const db = drizzle(sql)