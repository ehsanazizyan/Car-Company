import styles from "@/template/MyProfilePage.module.css";
import CardDashboard from "./CardDashboard";

function MyProfilePage({ data }) {
  return (
    <div>
      {data.length ? null : (
        <p className={styles.text}> شما هیچ آگهی ندارید </p>
      )}
      {data?.map((item) => (
        <CardDashboard data={JSON.parse(JSON.stringify(item))} key={item._id} />
      ))}
    </div>
  );
}
export default MyProfilePage;
