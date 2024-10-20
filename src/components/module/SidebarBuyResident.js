import styles from "@/module/SidebarBuyResident.module.css";
import Link from "next/link";
import { HiFilter } from "react-icons/hi";
function SidebarBuy() {
  return (
    <div className={styles.container}>
      <p>
        <HiFilter />
        دسته بندی
      </p>
      <Link href="/buy-residential">همه</Link>
      <Link href="/buy-residential?category=villa">ویلا</Link>
      <Link href="/buy-residential?category=apertment">آپارتمان</Link>
      <Link href="/buy-residential?category=office">دفتر</Link>
      <Link href="/buy-residential?category=store">مغازه</Link>
    </div>
  );
}
export default SidebarBuy;
