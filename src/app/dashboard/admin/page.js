import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import Profile from "@/models/profile";
import User from "@/models/user";
import AdminPage from "@/template/AdminPage";
import ConnectDB from "@/utils/connectDB";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

async function Admin() {
  await ConnectDB();

  const session = await getServerSession(authOptions);
  if (!session) redirect("/signin");
  const user = await User.findOne({ email: session.user.email });

  if (user.role !== "ADMIN") {
    redirect("/dashboard");
  }
  const profiles = await Profile.find({ published: false });
  return (
    <div>
      <AdminPage data={profiles} />
    </div>
  );
}
export default Admin;
