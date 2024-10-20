import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth/next";
import User from "@/models/user";
import Profile from "@/models/profile";
import MyProfilePage from "@/template/MyProfilePage";
import ConnectDB from "@/utils/connectDB";

async function MyProfile() {
  await ConnectDB();
  const session = await getServerSession(authOptions);
  const email = session.user.email;

  const user = await User.findOne({ email: email });
  const id = user._id;
  const profileID = await Profile.find({ userId: id });

  return (
    <div>
      <MyProfilePage data={profileID} />
    </div>
  );
}
export default MyProfile;
