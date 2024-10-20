import { FcShare } from "react-icons/fc";
import styles from "@/module/ShareButton.module.css";

function ShareButton() {
  return (
    <div className={styles.container}>
      <button>
        <FcShare />
        اشتراک گزاری
      </button>
    </div>
  );
}
export default ShareButton;
