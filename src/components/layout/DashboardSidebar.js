import styles from "@/layout/DashboardSidebar.module.css";
import Link from "next/link";
import { CgProfile } from "react-icons/cg";
import { getServerSession } from "next-auth";
import { authOption } from "@/api/auth/[...nextauth]/route";
import LogoutButton from "@/module/LogoutButton";
import User from "@/models/user";
import ConnectDB from "@/utils/connectDB";

async function DashboardSidebar({ children }) {
  const session = await getServerSession(authOption);
  await ConnectDB();
  const user = await User.findOne({ email: session.user.email });

  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <CgProfile />
        {user.role === "ADMIN" && "Admin"}
        <p>{session?.user.email}</p>
        <span></span>
        <Link href="/dashboard">حساب کاربری</Link>
        <Link href="/dashboard/my-profile">آگهی های من</Link>
        <Link href="/dashboard/add">ثبت آگهی</Link>
        {user.role === "ADMIN" ? (
          <Link href="/dashboard/admin">در انتظار تایید</Link>
        ) : null}
        <LogoutButton />
      </div>
      <div className={styles.main}>{children}</div>
    </div>
  );
}
export default DashboardSidebar;
