"use client";
import styles from "@/template/CardDashboard.module.css";
import Card from "./Card";
import { FiEdit } from "react-icons/fi";
import { AiOutlineDelete } from "react-icons/ai";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";

//////
function CardDashboard({ data }) {
  const idCard = data._id;
  const idUser = data.userId;
  const router = useRouter();

  ////////
  const editHandler = () => {
    router.push(`/dashboard/my-profile/${idCard}`);
  };
  //////

  const deleteHandler = async () => {
    const res = await fetch("/api/auth/profile", {
      method: "DELETE",
      body: JSON.stringify({ idCard, idUser }),
      headers: { "Content-Type": "application/json" },
    });
    const data = await res.json();
    
    if (data.error) {
      toast.error(data.error);
    } else {
      toast.success(data.message);
      router.refresh();
    }
  };
  /////
  return (
    <div className={styles.container}>
      <Card data={data} />
      <div className={styles.main}>
        <button onClick={editHandler}>
          ویرایش
          <FiEdit />
        </button>
        <button onClick={deleteHandler}>
          حذف
          <AiOutlineDelete />
        </button>
      </div>
      <Toaster />
    </div>
  );
}

export default CardDashboard;
