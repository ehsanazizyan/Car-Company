import Profile from "@/models/profile";
import ConnectDB from "@/utils/connectDB";
import { NextResponse } from "next/server";

export async function PATCH(req) {
  try {
    await ConnectDB();
    const body = await req.json();
    const Profiles = await Profile.findOne({ _id: body });
    Profiles.published = true;
    Profiles.save();

    return NextResponse.json({ message: "آگهی منتشر شد" });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ error: "Error Connect To DB", status: 500 });
  }
}
