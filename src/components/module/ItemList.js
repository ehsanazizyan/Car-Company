import styles from "@/module/ItemList.module.css";

function ItemList({ data }) {
  return (
    <div className={styles.container}>
      <ul>
        {data.length ? (
          data.map((item, index) => <li key={index}>{item}</li>)
        ) : (
          <h3>مقداری وارد نشده</h3>
        )}
      </ul>
    </div>
  );
}
export default ItemList;
