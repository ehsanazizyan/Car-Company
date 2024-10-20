"use client";
import styles from "@/module/TextList.module.css";
import { MdOutlineLibraryAdd } from "react-icons/md";
import { AiOutlineDelete } from "react-icons/ai";

function TextList({ profileDate, setProfileDate, title, type }) {
  /////
  const addHandler = () => {
    setProfileDate({
      ...profileDate,
      [type]: [...profileDate[type], ""],
    });
  };
  //////////
  const changeHandler = (e, index) => {
    const list = [...profileDate[type]];
    list[index] = e.target.value;
    setProfileDate({
      ...profileDate,
      [type]: list,
    });
  };
  const deleteHandler = (index) => {
    const list = [...profileDate[type]];
    list.splice(index, 1);
    setProfileDate({
      ...profileDate,
      [type]: list,
    });
  };
  return (
    <div className={styles.container}>
      <p>{title}</p>
      {profileDate[type]?.map((item, index) => (
        <div className={styles.card} key={index}>
          <input
            value={item}
            type="text"
            onChange={(e) => changeHandler(e, index)}
          />
          <button onClick={(e) => deleteHandler(index)}>
            حذف
            <AiOutlineDelete />
          </button>
        </div>
      ))}
      <button onClick={addHandler}>
        افزودن
        <MdOutlineLibraryAdd />
      </button>
    
    </div>
  );
}
export default TextList;
