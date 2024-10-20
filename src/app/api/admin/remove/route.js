import Profile from "@/models/profile";
import User from "@/models/user";
import ConnectDB from "@/utils/connectDB";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function DELETE(req) {
  try {
    await ConnectDB();
    const session = await getServerSession(req);
    if (!session) {
      return NextResponse.json({ error: "دسترسی محدود" }, { status: 403 });
    }
    const user = await User.findOne({ email: session.user.email });
    if (user.role !== "ADMIN") {
      return NextResponse.json(
        { error: "تنها ادمین اجازه دسترسی را دارد" },
        { status: 404 }
      );
    }
    const body = await req.json();
    const profiles = await Profile.deleteOne({ _id: body });
    if (profiles.deletedCount >= 1) {
      return NextResponse.json({ message: "آگهی حذف شد" });
    } else {
      return NextResponse.json({
        error:
          "مشکلی رخ داده لطفا بعدا امتحان کنید ویا به برنامه نویس اطلاع دهید",
      });
    }
  } catch (err) {
    console.log(err);
    return NextResponse.json({ error: " Error Connect To DB" });
  }
}
