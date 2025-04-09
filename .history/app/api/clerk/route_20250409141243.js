import { Webhook } from 'svix';
import connectToDB from '@/config/db.js';
import User from '@/models/User';



export async function POST(req) {
    const wh = new Webhook(process.env.SIGNING_SECRET);
    const headerPayload = await headers();
    const svixHeaders = {
        "svix-id": headerPayload.get("svix-id"),
        "svix-signature": headerPayload.get("svix-signature"),


    }
}