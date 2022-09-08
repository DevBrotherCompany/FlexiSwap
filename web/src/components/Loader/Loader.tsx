import React, { FC } from "react";
import styles from "./Loader.module.scss";

interface LoaderProps {}

const Loader: FC<LoaderProps> = () => (
  <div className={styles.Loader}>Loader Component</div>
);

export default Loader;
