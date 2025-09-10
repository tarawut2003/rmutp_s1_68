import { Hono } from "hono";
//import { PrismaClient } from "../generated/prisma/client";
import { PrismaClient } from "@prisma/client";
import * as bcrypt from "bcrypt"; 
import { encrypt, decrypt } from "./crypto";

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
    const passwordHash = await bcrypt.hash(body.password, 6);
    console.log('hash.password(after)', passwordHash);
    body.password = passwordHash;
    console.log("body.password(replace)", body);

    // encode 
    if (body.cardid) {body.cardid = encrypt(body.cardid);}
    if (body.mobile) {body.mobile = encrypt(body.mobile);}

    //save to db 
    body.status = false;
    const result = await prisma.profile.create({data:body})
    //decode 
    console.log("body.cardid(decode)", decrypt(body.cardid));
    console.log("body.mobile(decode)", decrypt(body.mobile));
    //output
    return c.json({message: "complete",data: result});
    
    //try&catch test
    //error
    //c.status(503);
    //return c.json({message:"error",data:"data"});
});

app.get("/profile/:id", async (c)=>{
    const id = c.req.param("id");
    console.log('profile id', id);
    return c.json({data:id});
});
export default app;
