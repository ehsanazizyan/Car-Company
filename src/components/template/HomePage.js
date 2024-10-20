import Categoryes from "@/module/Categoryes";
import styles from "@/template/HomePage.module.css";

import { BiSolidCity } from "react-icons/bi";
import { BiCircle } from "react-icons/bi";
const services = ["خرید", "فروش", "رهن", "اجاره"];
const city = ["تهران", "سنندج", "کرمانشاه", "کرج", "مشهد", "شیراز", "اصفهان", "کرمان"];
function HomePage() {
    return (
        <div>
            <div className={styles.desc}>
                <h1>سامانه خریدواجاره ملک</h1>
                <ul>
                    {services.map((item) => (
                        <li key={item}>
                            <span>
                                <BiCircle />
                            </span>
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
            <div className={styles.categories}>
                <Categoryes title="ویلا" name="villa" />
                <Categoryes title="آپارتمان" name="apartment" />
                <Categoryes title="مغازه" name="store" />
                <Categoryes title="دفترکار" name="office" />
            </div>
            <div className={styles.city}>
                <ul>
                    {city.map((item) => (
                        <li>
                            <span>
                                <BiSolidCity />
                            </span>
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
export default HomePage;
