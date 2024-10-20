"use client";
import styles from "@/template/SignupPage.module.css";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { ThreeDots } from "react-loader-spinner";
import { useRouter } from "next/navigation";

function SignInPage() {
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [loader, setLoader] = useState(false);
   const router = useRouter();
   /////
   const SigninHandler = async (e) => {
      setLoader(true);
      e.preventDefault();
      const res = await signIn("credentials", {
         email,
         password,
         redirect: false,
      });
      setLoader(false);
      console.log(res);
      if (res.error) return toast.error(res.error);
      if (res.status === 200) router.replace("/dashboard");
   };
   /////
   return (
      <div className={styles.form}>
         <h3>فرم ورود</h3>
         <form>
            <label>ایمیل :</label>
            <input
               type="text"
               value={email}
               onChange={(e) => setEmail(e.target.value)}
            />
            <label>رمز عبور :</label>
            <input
               type="password"
               value={password}
               onChange={(e) => setPassword(e.target.value)}
            />

            {loader ? (
               <ThreeDots
                  height="80"
                  width="80"
                  radius="9"
                  color="#4fa94d"
                  ariaLabel="three-dots-loading"
                  wrapperStyle={{ margin: "auto" }}
                  wrapperClassName=""
                  visible={true}
               />
            ) : (
               <button type="submit" onClick={SigninHandler}>
                  ورود
               </button>
            )}
         </form>

         <p>
            آیا قبلاثبته نام نکردید؟
            <Link href="/signup">ثبت نام</Link>
         </p>
         <h3>
            <Toaster />
         </h3>
      </div>
   );
}
export default SignInPage;
