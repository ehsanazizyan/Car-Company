import User from "@/models/user";
import { hashdPassword } from "@/utils/auth";
import ConnectDB from "@/utils/connectDB";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    await ConnectDB();

    const { email, password } = await req.json();
    if (!email || !password) {
      return NextResponse.json({
        error: "لطفا اطلاعات را به درستی واردکنید",
        status: 422,
      });
    }
    const exsistinguser = await User.findOne({ email: email });
    if (exsistinguser) {
      return NextResponse.json({
        error: "این کاربر قبلا ثبته نام کرده است",
        status: 422,
      });
    }
    const hashPass = await hashdPassword(password);

    const user = await User.create({ email: email, password: hashPass });
    if (user) {
      return NextResponse.json({ message: "کاربر ایجاد شد", status: 201 });
    }
  } catch (err) {
    console.log(err);
    return NextResponse.json({
      error: "مشکلی  در سرور رخ داده است",
      state: 500,
    });
  }
}
