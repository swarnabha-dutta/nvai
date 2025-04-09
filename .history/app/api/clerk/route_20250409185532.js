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
    const body = JSON.stringify(payload);
    const { data, type } = wh.verify(body, svixHeaders);

    const userData = {
        _id: data.id,
        email: data.email_addresses[0].address,
        name: `${data.first_name} ${data.last_name}`,
        image: data.image_url
    }
}