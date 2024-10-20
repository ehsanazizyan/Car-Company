import styles from "@/module/Categoryes.module.css";
import Image from "next/image";
import Link from "next/link";

function Categoryes({ title, name }) {
  return (
    <div className={styles.card}>
      <Link href={`/buy-residential?category=${name}`}>
        <Image
          alt={name}
          src={`/images/${name}.png`}
          width="200"
          height="150"
        />
        <p>{title}</p>
      </Link>
    </div>
  );
}

export default Categoryes;
