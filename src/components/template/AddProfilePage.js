"use client";

import CustomDatePicker from "@/module/CustomDatePicker";
import RadioList from "@/module/RadioList";
import TextInput from "@/module/TextInput";
import TextList from "@/module/TextList";
import styles from "@/template/AddProfilePage.module.css";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { FallingLines } from "react-loader-spinner";

function AddProfilePage({ cardId }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [profileDate, setProfileDate] = useState({
    title: "",
    description: "",
    location: "",
    phone: "",
    price: "",
    realState: "",
    constructionDate: new Date(),
    category: "",
    rules: [],
    amenities: [],
  });
  ///////
  const clickHandler = async () => {
    setLoading(true);
    const res = await fetch("/api/auth/profile", {
      method: "POST",
      body: JSON.stringify({ profileDate }),
      headers: { "Content-Type": "application/json" },
    });
    const data = await res.json();
    setLoading(false);
    if (data.error) {
      toast.error(data.error);
    } else {
      toast.success(data.message);
      // router.refresh();
    }
  };
  ///////
  useEffect(() => {
    if (cardId) {
      setProfileDate(cardId);
    }
  }, []);
  const editHandler = async () => {
    const res = await fetch("/api/auth/profile", {
      method: "PATCH",
      body: JSON.stringify({ profileDate }),
      headers: { "Content-Type": "application/json" },
    });
    const data = await res.json();
    if (data.error) {
      toast.error(data.error);
    } else {
      toast.success(data.message);
    }
  };
  //////

  return (
    <div className={styles.container}>
      <h3>{cardId ? "ویرایش آگهی" : "ثبت آگهی"}</h3>
      <TextInput
        title="عنوان آگهی"
        name="title"
        profileDate={profileDate}
        setProfileDate={setProfileDate}
      />
      <TextInput
        title=" توضیحات"
        name="description"
        profileDate={profileDate}
        setProfileDate={setProfileDate}
        textarea={true}
      />
      <TextInput
        title=" آدرس"
        name="location"
        profileDate={profileDate}
        setProfileDate={setProfileDate}
      />
      <TextInput
        title=" شماره تماس"
        name="phone"
        profileDate={profileDate}
        setProfileDate={setProfileDate}
      />
      <TextInput
        title="  قیمت (تومان)"
        name="price"
        profileDate={profileDate}
        setProfileDate={setProfileDate}
      />
      <TextInput
        title="بنگاه"
        name="realState"
        profileDate={profileDate}
        setProfileDate={setProfileDate}
      />

      <RadioList profileDate={profileDate} setProfileDate={setProfileDate} />
      <TextList
        profileDate={profileDate}
        setProfileDate={setProfileDate}
        title="امکانات رفاهی"
        type="amenities"
      />
      <TextList
        profileDate={profileDate}
        setProfileDate={setProfileDate}
        title="قوانین"
        type="rules"
      />
      <CustomDatePicker
        profileDate={profileDate}
        setProfileDate={setProfileDate}
      />

      {loading ? (
        <FallingLines
          color="#4fa94d"
          width="100"
          visible={true}
          wrapperStyle={{ margin: "auto" }}
          ariaLabel="falling-lines-loading"
        />
      ) : cardId ? (
        <button className={styles.submit} onClick={editHandler}>
          ویرایش آگهی
        </button>
      ) : (
        <button className={styles.submit} onClick={clickHandler}>
          ثبت آگهی
        </button>
      )}

      <Toaster />
    </div>
  );
}
export default AddProfilePage;
