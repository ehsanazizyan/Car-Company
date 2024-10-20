import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import ConnectDB from "@/utils/connectDB";
import Profile from "@/models/profile";
import User from "@/models/user";
import { Types } from "mongoose";

export async function POST(req) {
  try {
    await ConnectDB();

    const session = await getServerSession(req);
    if (!session) {
      return NextResponse({ error: "این کاربر وجود ندارد" });
    }

    const user = await User.findOne({ email: session.user.email });
    if (!user) {
      return NextResponse({ error: "این کاربر در DB وجود ندارد" });
    }

    const body = await req.json();
    const { profileDate } = body;
    const {
      title,
      description,
      location,
      phone,
      price,
      realState,
      constructionDate,
      category,
      rules,
      amenities,
    } = profileDate;

    if (
      !title ||
      !description ||
      !location ||
      !phone ||
      !price ||
      !realState ||
      !constructionDate ||
      !category
    ) {
      return NextResponse.json(
        { error: "لطفا تمامه فیلد ها را پر کنید" },
        { status: 401 }
      );
    }
    const newProfile = await Profile.create({
      title,
      description,
      location,
      phone,
      price: +price,
      realState,
      constructionDate,
      category,
      rules,
      amenities,
      userId: new Types.ObjectId(user._id),
    });

    return NextResponse.json({ message: "آگهی جدید اضافه شد" });
  } catch (err) {
    console.log(err);
    return NextResponse.json({
      error: "مشکلی در سرور پیش آمده",
      status: 500,
    });
  }
}

export async function PATCH(req) {
  try {
    await ConnectDB();
    const body = await req.json();
    const { profileDate } = body;
    const {
      _id,
      title,
      description,
      location,
      phone,
      price,
      realState,
      constructionDate,
      category,
      rules,
      amenities,
    } = profileDate;

    if (
      !title ||
      !description ||
      !location ||
      !phone ||
      !price ||
      !realState ||
      !constructionDate ||
      !category
    ) {
      return NextResponse.json(
        { error: "لطفا تمامه فیلد ها را پر کنید" },
        { status: 401 }
      );
    }

    const userProfile = await Profile.findOne({ _id: _id });
    userProfile.title = title;
    userProfile.description = description;
    userProfile.location = location;
    userProfile.phone = phone;
    userProfile.price = price;
    userProfile.realState = realState;
    userProfile.constructionDate = constructionDate;
    userProfile.category = category;
    userProfile.rules = rules;
    userProfile.amenities = amenities;
    userProfile.save();
    return NextResponse.json({ message: "ویرایش انجام شد" });
  } catch (err) {
    console.log(err);
    return NextResponse.json({
      error: "مشکلی در سرور پیش آمده",
      status: 500,
    });
  }
}
export async function DELETE(req) {
  try {
    await ConnectDB();
    const session = await getServerSession(req);
    if (!session) {
      return NextResponse.json({ error: "ابتدا وارد حساب کاربری خودشوید" });
    }
    const user = await User.findOne({ email: session.user.email });
    const { idCard, idUser } = await req.json();
    if (!user._id.equals(idUser)) {
      return NextResponse.json({ error: "دسترسی شما به این آگهی محدود است" });
    }
    const remov = await Profile.deleteOne({ _id: idCard });
    if (remov.deletedCount >= 1) {
      return NextResponse.json({ message: "آگهی حذف شد" });
    } else {
      return NextResponse.json({ status: 401, error: "آگهی حذف نشد" });
    }
  } catch (err) {
    console.log(err);
    return NextResponse.json({
      status: 500,
      error: "مشکلی در ارطبات با سرور رخ داده",
    });
  }
}

// export async function GET(req) {
//   try {
//     await ConnectDB();
//     const profiles = await Profile.find().select("-userId");
//     return NextResponse.json(profiles);
//   } catch (err) {
//     console.log(err);
//     return NextResponse.json({
//       status: 500,
//       error: "مشکلی در ارطبات با سرور رخ داده",
//     });
//   }
// }
