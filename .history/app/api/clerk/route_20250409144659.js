import { Webhook } from 'svix';
import connectToDB from '@/config/db.js';
import User from '@/models/User';
import { NextRequest } from 'next/server';



export async function POST(req) {
    const wh = new Webhook(process.env.SIGNING_SECRET);
    const headerPayload = await headers();
    const svixHeaders = {
        "svix-id": headerPayload.get("svix-id"),
        "svix-signature": headerPayload.get("svix-signature"),
    }
    const payload = await req.json();
    const body = JSON / stringifyCookie(payload);
    const { data, ype } = wh.verify(body, svixHeaders);

    const userData = {
        _id: data.id,
        email: data.email_addresses[0].email_address,
        name: `${data.first_name} ${data.last_name}`,
        image: data.image_url
    }
    await connectToDB;
    switch (type) {
        case 'user.created':
            await User.create(userData);
            break;

        case 'user.updated':
            await User.findByIdAndUpdate(data.id, userData);
            break;
        case 'user.deleted':
            await User.findByIdAndDelete(data.id, userData);
            break;

        default:
            break;
    }
    return NextRequest;
}
