"use client";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneVolume } from "react-icons/fa6";
import styles from "@/module/CardAdmin.module.css";
import Link from "next/link";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";

function CardAdmin({ data }) {
  //////
  const router = useRouter();
  /////////
  const publishedHandler = async () => {
    const res = await fetch("/api/admin/publish", {
      method: "PATCH",
      body: JSON.stringify(data._id),
      headers: { "Content-Type": "application/json" },
    });
    const result = await res.json();
    if (result.message) {
      toast.success(result.message);
      router.refresh();
    } else {
      toast.error(result.error);
    }
  };
  ////////
  const deleteHandler = async () => {
    const res = await fetch("/api/admin/remove", {
      method: "DELETE",
      body: JSON.stringify(data._id),
    });
    const result = await res.json();
    if (result.message) {
      toast.success(result.message);
      router.refresh();
    } else {
      toast.error(result.error);
    }
  };
  ////////
  return (
    <div className={styles.container}>
      <h4>{data.title}</h4>
      <div className={styles.location}>
        <p>
          <FaLocationDot /> : {data.location}
        </p>
        <p>املاک : {data.realState}</p>
      </div>
      <div className={styles.price}>
        <p> {data.price.toLocaleString()} : تومان</p>
        <p>
          <FaPhoneVolume /> : {data.phone}
        </p>
      </div>
      <div className={styles.button}>
        <button onClick={publishedHandler}>انتشار</button>
        <Link href={`/buy-residential/${data._id}`}>جزِِییات</Link>
        <button onClick={deleteHandler}>حذف</button>
      </div>
      <Toaster />
    </div>
  );
}
export default CardAdmin;
