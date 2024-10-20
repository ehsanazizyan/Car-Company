import styles from "@/module/TextInput.module.css";

function TextInput({
  title,
  // value,
  name,
  profileDate,
  textarea = false,
  setProfileDate,
}) {
  // console.log({ name, value });
  const changeHandler = (e) => {
    setProfileDate({ ...profileDate, [e.target.name]: e.target.value });
  };

  return (
    <div className={styles.container}>
      <p>{title}</p>
      {textarea ? (
        <textarea
          type="text"
          value={profileDate[name]}
          name={name}
          onChange={changeHandler}
        />
      ) : (
        <input
          type="text"
          value={profileDate[name]}
          name={name}
          onChange={changeHandler}
        />
      )}
    </div>
  );
}
export default TextInput;
