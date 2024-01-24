import styles from "./shadcn.module.scss";

/* eslint-disable-next-line */
export interface ShadcnProps {}

export function Shadcn(props: ShadcnProps) {
  return (
    <div className={styles["container"]}>
      <h1>Welcome to Shadcn!</h1>
    </div>
  );
}

export default Shadcn;
