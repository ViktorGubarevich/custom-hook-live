import Section from "../UI/Section";
import ProductItem from "./ProductItem";
import styles from "./Products.module.css";

const Products = ({ items, error, onFetch, loading }) => {
  let productList = (
    <h2>Товаров не обнаружено. Добавьте хотя бы один товар!</h2>
  );

  if (items.length > 0) {
    productList = (
      <ul>
        {items.map((product) => (
          <ProductItem key={product.id}>{product.text}</ProductItem>
        ))}
      </ul>
    );
  }

  let content = productList;

  if (error) {
    content = <button onClick={onFetch}>Попробуйте Ёщё Раз</button>;
  }

  if (loading) {
    content = "Загрузка товаров...";
  }

  return (
    <Section>
      <div className={styles.container}>{content}</div>
    </Section>
  );
};

export default Products;
