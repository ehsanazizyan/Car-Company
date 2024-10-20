import styles from "@/template/Card.module.css";
import Link from "next/link";

import { RiHome3Line } from "react-icons/ri";
import { MdApartment } from "react-icons/md";
import { BiStore } from "react-icons/bi";
import { GiOfficeChair } from "react-icons/gi";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { AiOutlineArrowLeft } from "react-icons/ai";

function Card({ data: { title, location, category, price, _id } }) {
  const icons = {
    villa: <RiHome3Line />,
    apertment: <MdApartment />,
    store: <BiStore />,
    office: <GiOfficeChair />,
  };
  return (
    <div className={styles.container}>
      <div className={styles.icon}>{icons[category]}</div>
      <p className={styles.title}>{title}</p>
      <p className={styles.location}>
        <HiOutlineLocationMarker />
        {location}
      </p>
      <span> {price.toLocaleString()} تومان </span>
      <Link href={`/buy-residential/${_id}`}>
        مشاهده آگهی
        <AiOutlineArrowLeft />
      </Link>
    </div>
  );
}

export default Card;
