import CardAdmin from "@/module/CardAdmin";
import styles from "@/template/AdminPage.module.css";

function AdminPage({ data }) {
  return (
    <div className={styles.container}>
      {data.length ? null : <h3>هیچ آگهی برای انتشار وجود ندارد</h3>}
      {data?.map((item) => (
        <CardAdmin key={item._id} data={JSON.parse(JSON.stringify(item))} />
      ))}
    </div>
  );
}

export default AdminPage;
