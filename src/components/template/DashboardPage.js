import styles from "@/template/DashboardPage.module.css";

function DashboardPage({ date }) {
  console.log(date);
  return (
    <div className={styles.container}>
      <h3>سلام👋</h3>
      <p>آگهی های خودراثبت کنیدتاهزاران نفرآن رامشاهده کنند</p>
      <div className={styles.createdAt}>
        <p>تاریخ عضویت:</p>
        <span>{new Date(date).toLocaleDateString("fa-IR")}</span>
      </div>
    </div>
  );
}
export default DashboardPage;
// .toString()
