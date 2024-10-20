"use client";
import styles from "@/template/SignupPage.module.css";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";
import { ThreeDots } from "react-loader-spinner";

function SignupPage() {
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [rePassword, setRePassword] = useState("");
   const [visibleti, setVisibleti] = useState(false);

   const router = useRouter();
   //////
   const SignupHandler = async (e) => {
      e.preventDefault();
      setVisibleti(true);
      if (password !== rePassword) {
         toast.error("رمز و تکرار آن برابر نیست");
         setVisibleti(false);
         return;
      }
      const res = await fetch("/api/auth/signup", {
         method: "POST",
         body: JSON.stringify({ email, password }),
         headers: { "Content-Type": "application/json" },
      });
      const data = await res.json();
      console.log(data);
      if (data.status === 201) {
         router.replace("/signin");
      } else {
         toast.error(data.error);
      }
      setVisibleti(false);
   };
   //////
   return (
      <div className={styles.form}>
         <h3>فرم ثبت نام</h3>
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
            <label>تکرار رمز عبور :</label>
            <input
               type="password"
               value={rePassword}
               onChange={(e) => setRePassword(e.target.value)}
            />

            {visibleti ? (
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
               <button type="submit" onClick={SignupHandler}>
                  ثبت نام
               </button>
            )}
         </form>

         <p>
            آیا قبلاثبته نام کردید؟
            <Link href="/signin">ورود</Link>
         </p>
         <h3>
            <Toaster />
         </h3>
      </div>
   );
}

export default SignupPage;
