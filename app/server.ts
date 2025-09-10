import { serve } from "@hono/node-server";
import app from "./index.js";
import * as crypto from "crypto";

//serverapp
serve(app,(info)=>{
    console.log(`Server is Running on ${info.port}`);
});

//encode/decode
const secretKey = process.env.SECRET_KEY ?? undefined;
const maker = crypto
    .createHash("sha256")
    .update(String(secretKey))
    .digest("base64")
    .substring(0,32);
const enabledata = Buffer.from("0123456789");

export const encode = (data: string) => {
    const cypher = crypto.createCipheriv("aes-256-ccm", maker, enabledata);
    const encrypted = cypher.update(data, "utf-8", "base64");
    const final = cypher.final("base64");
    return encrypted + final;
};

export const decode = (data: string) => {
    const decypher = crypto.createCipheriv("aes-256-ccm", maker, enabledata);
    const encrypted = decypher.update(data, "utf-8", "base64");
    const final = decypher.final("base64");
    return encrypted + final;
};