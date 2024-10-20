import styles from "@/template/BuyResidentialsPage.module.css";
import Card from "./Card";
import SidebarBuy from "@/module/SidebarBuyResident";

function BuyResidentialsPage({ data, searchParams }) {
    const url = searchParams.category;
    let newData = data;
    if (url) {
        newData = data.filter((item) => item.category === url);
    }

    return (
        <div className={styles.container}>
            <div className={styles.sidebar}>
                <SidebarBuy />
            </div>
            <div className={styles.main}>
                {data.length ? null : <p className={styles.text}>هیچ اگهی ثبت نشده است</p>}

                {newData.map((item) => (
                    <Card key={item._id} data={item} />
                ))}
            </div>
        </div>
    );
}
export default BuyResidentialsPage;
