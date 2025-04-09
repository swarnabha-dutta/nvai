import { Webhook } from "svix";
import connectToDB from "@/config/db";
import User from "@/models/User";

export async function POST(req) {
    const wh = await Webhook(process.env.SIGNING_SECRET);
    const headerPayload = await headers();
    const svixHeaders = {
        "svix-id": headerPayload.get("svix-id"),
        "svix-timestamp": headerPayload.get("svix-timestamp"),
        "svix-signature": headerPayload.get("svix-signature")
    };

    const payload = await req.json();
}