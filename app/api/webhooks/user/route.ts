import { prisma } from "@/lib/db";
import { clerkClient } from "@clerk/nextjs/server";
import { IncomingHttpHeaders } from "http";
import { headers } from "next/headers";
import { NextResponse } from "next/server";
import { Webhook, WebhookRequiredHeaders } from "svix";
import {Employee} from "@prisma/client";
import { currentUser } from '@clerk/nextjs';

const webhookSecret = process.env.WEBHOOK_SECRET || "";

async function handler(request: Request) {

  const payload = await request.json();
  const headersList = headers();
  const heads = {
    "svix-id": headersList.get("svix-id"),
    "svix-timestamp": headersList.get("svix-timestamp"),
    "svix-signature": headersList.get("svix-signature"),
  };
  const wh = new Webhook(webhookSecret);
  let evt: Event | null = null;

  try {
    evt = wh.verify(
      JSON.stringify(payload),
      heads as IncomingHttpHeaders & WebhookRequiredHeaders
    ) as Event;
  } catch (err) {
    console.error((err as Error).message);
    return NextResponse.json({}, { status: 400 });
  }

  const eventType: EventType = evt.type;
  if (eventType === "user.created" || eventType === "user.updated") {
    const { id, ...attributes } = evt.data;
    console.log(id);
    console.log(attributes);
    const setUser = await prisma.user.upsert({
      where: { externalId: id as string },
      create: {
        externalId: id as string,
        attributes,
      },
      update: { attributes },
    });


    
    if (setUser) {
      const setEmployee = await prisma.employee.upsert({
        where: { clerkUserId: setUser.externalId },
        create: {
          clerkUserId: setUser.externalId,
          firstName: attributes.first_name as string,
          lastName: attributes.last_name as string,
        },
        update: {
          firstName: attributes.first_name as string,
          lastName: attributes.last_name as string,
        },
      });
      console.log(setEmployee);
    }
  }
  

  return NextResponse.json({}, { status: 200 });
}

type EventType = "user.created" | "user.updated" | "*";

type Event = {
  data: Record<string, string | number>;
  object: "event";
  type: EventType;
};

export const GET = handler;
export const POST = handler;
export const PUT = handler;
