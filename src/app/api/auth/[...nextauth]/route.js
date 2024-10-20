import User from "@/models/user";
import { verifyPassword } from "@/utils/auth";
import ConnectDB from "@/utils/connectDB";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
   session: { strategy: "jwt" },
   providers: [
      CredentialsProvider({
         async authorize(credentials, req) {
            const { email, password } = credentials;
            try {
               await ConnectDB();
            } catch (err) {
               throw new Error("مشکلی در سرور رخ داده");
            }
            if (!email || !password) {
               throw new Error("لطفا اطلاعات معتبر وارد کنید");
            }
            const user = await User.findOne({ email });
            console.log(user);
            if (!user) {
               throw new Error("کاربری  با این ایمیل ثبت نام نکرده است");
            }

            const isValid = await verifyPassword(password, user.password);
            if (!isValid) throw new Error("   رمز نامعتبر است");

            return { email };
         },
      }),
   ],
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
