import styles from "@/module/RadioList.module.css";

function RadioList({ profileDate, setProfileDate }) {
  const { category } = profileDate;
 
  const changeHandler = (e) => {
    const { name, value } = e.target;
    setProfileDate({ ...profileDate, [name]: value });
  };
  return (
    <div className={styles.container}>
      <p>دسته بندی</p>
      <div className={styles.main}>
        <div>
          <label>ویلا</label>
          <input
            type="radio"
            value="villa"
            name="category"
            onChange={changeHandler}
            checked={category === "villa"}
          />
        </div>
        <div>
          <label>آپارتمان</label>
          <input
            type="radio"
            value="apertment"
            name="category"
            onChange={changeHandler}
            checked={category === "apertment"}
          />
        </div>
        <div>
          <label>دفتر</label>
          <input
            type="radio"
            value="office"
            name="category"
            onChange={changeHandler}
            checked={category === "office"}
          />
        </div>
        <div>
          <label>مغازه</label>
          <input
            type="radio"
            value="store"
            name="category"
            checked={category === "store"}
            onChange={changeHandler}
          />
        </div>
      </div>
    </div>
  );
}
export default RadioList;
