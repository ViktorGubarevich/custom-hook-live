import Section from "../UI/Section";
import ProductForm from "./ProductForm";

import useHttp from "../../hooks/use-http";

const NewProduct = ({ onAddProduct }) => {
  const httpRequestData = useHttp();
  const { isLoading, error, sendHttpRequest: sendProduct } = httpRequestData;

  const createProduct = (productText, productData) => {
    const generatedId = productData.name;
    const createdProduct = { id: generatedId, text: productText };

    onAddProduct(createdProduct);
  };

  const enterProductHandler = async (productText) => {
    sendProduct(
      {
        endpoint:
          "https://react-course-http-8220d-default-rtdb.firebaseio.com/products.json",
        method: "POST",
        body: { text: productText },
        headers: {
          "Content-Type": "application/json",
        },
      },
      createProduct.bind(null, productText)
    );
  };

  return (
    <Section>
      <ProductForm onEnterProduct={enterProductHandler} loading={isLoading} />
      {error && <p>{error}</p>}
    </Section>
  );
};

export default NewProduct;
