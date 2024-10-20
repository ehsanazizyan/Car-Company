import DashboardPage from "@/template/DashboardPage";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import User from "@/models/user";
import ConnectDB from "@/utils/connectDB";

async function Dashboard() {
  await ConnectDB();
  const session = await getServerSession(authOptions);
  const { email } = session.user;

  // console.log("هیچ خطایی در داشبورد رخ نداده");
  const user = await User.findOne({ email });

  return <DashboardPage date={user.createAt} />;
}

export default Dashboard;
