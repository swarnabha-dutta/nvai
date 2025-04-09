import { Webhook } from "svix";
import connectToDB from "@/config/db";
import User from "@/models/User";

export async function POST(req) {
    const wh = new Webhook();
    const headerPayload = await Webhook(process.env.SIGNING_SECRET);
}