import styles from "./ProductItem.module.css";

const ProductItem = ({ children }) => {
  return <li className={styles.product}>{children}</li>;
};

export default ProductItem;
