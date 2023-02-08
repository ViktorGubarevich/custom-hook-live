import { useRef } from "react";

import styles from "./ProductForm.module.css";

const ProductForm = ({ onEnterProduct, loading }) => {
  const productInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredValue = productInputRef.current.value;

    if (enteredValue.trim().length > 0) {
      onEnterProduct(enteredValue);
    }
  };

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <input type="text" ref={productInputRef} />
      <button>{loading ? "Обработка запроса..." : "Добавить Товар"}</button>
    </form>
  );
};

export default ProductForm;
