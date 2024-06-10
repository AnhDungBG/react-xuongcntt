import * as z from "zod";

const productSchema = z.object({
    title: z.string().min(5).max(100),
    price: z.number().min(0),
    description: z.string().optional(),
});
const registerSchema = z
    .object({
        email: z.string().email(),
        password: z.string().min(6, "enter more 6 "),
        confirm_password: z.string()
    })
    .refine((data) => data.password === data.confirm_password, {
        message: "error",
        path: ["confirm_password"]
    })

const loginSchema = z
    .object({
        email: z.string().email(),
        password: z.string(),

    });
export { loginSchema, registerSchema, productSchema };
