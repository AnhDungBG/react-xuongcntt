import * as z from "zod";

const productSchema = z.object({
    title: z.string().min(5).max(100),
    price: z.number().min(0),
    description: z.string().optional(),
});
const registerSchema = z.object({
    email: z.string().email(),
    password: z.string(),

});
export { registerSchema, productSchema };
