import { Hono } from "hono";
//import { PrismaClient } from "../generated/prisma/client";
import { PrismaClient } from "@prisma/client";
import * as bcrypt from "bcrypt"; 

const prisma = new PrismaClient();
const app = new Hono();

app.get("/",(c) => c.text("Hello World"));
app.get("/about",(c) => {
    return c.json({
        message:"Tarawut"
    })
});

app.get("/profile", async(c) => {
    const profiles = await prisma.profile.findMany();
    return c.json(profiles);
});

app.post("/profile", async(c)=>{
    const body = await c.req.json();
    console.log('input of profile', body);
    console.log('body.password(original)', body.password);

    //encode password
    const passwordHash = await bcrypt.hash(body.password, 18);
    console.log('hash.password(after)', passwordHash);
    //save to db 
    
    return c.json({message: "create profile"});
});

export default app;
