import ItemList from "@/module/ItemList";
import styles from "@/template/DetailsPage.module.css";
import { CiLocationOn } from "react-icons/ci";
import { SiHomebridge } from "react-icons/si";
import { AiOutlinePhone } from "react-icons/ai";
import { MdApartment } from "react-icons/md";
import { BiSolidStore } from "react-icons/bi";
import { GiOfficeChair } from "react-icons/gi";
import { AiOutlineHome } from "react-icons/ai";
import { BsCalendarDate } from "react-icons/bs";
import ShareButton from "@/module/ShareButton";

function DetailsPage({ data }) {
  // console.log(data);
  const categoryis = {
    store: "مغازه",
    apertment: "آپارتمان",
    villa: "ویلا",
    office: "دفتر",
  };
  const icons = {
    store: <BiSolidStore />,
    apertment: <MdApartment />,
    villa: <AiOutlineHome />,
    office: <GiOfficeChair />,
  };
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <h1>{data.title}</h1>
        <span>
          <CiLocationOn />
          {data.location}
        </span>
        <h1 className={styles.title}> توضیحات</h1>
        <p>{data.description}</p>
        <h1 className={styles.title}> امکانات </h1>
        <ItemList data={data.amenities} />
        <h1 className={styles.title}> قوانین </h1>
        <ItemList data={data.rules} />
      </div>
      <div className={styles.sidebar}>
        <div className={styles.realState}>
          <SiHomebridge />
          <p>املاک : {data.realState} </p>
          <span>
            <AiOutlinePhone />
            {data.phone}
          </span>
        </div>
        <ShareButton />
        <div className={styles.price}>
          <p>
            {icons[data.category]}
            {categoryis[data.category]}
          </p>
          <p> {data.price.toLocaleString()} تومان</p>
          <p>
            <BsCalendarDate />
            {new Date(data.constructionDate).toLocaleDateString("fa-IR")}
          </p>
        </div>
      </div>
    </div>
  );
}

export default DetailsPage;
