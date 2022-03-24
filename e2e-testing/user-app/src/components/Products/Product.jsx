import {
  ContainerProduct,
  Title,
  Category,
  Price,
  Errors
} from './ProductStyles';

export function Product({ title, description, errors }) {

  return (
    <ContainerProduct>
      <Errors>{errors}</Errors>
      <Title>{title}</Title>
      <p>{description}</p>
      <Price>$ 20000</Price>
      <Category>Varios</Category>
    </ContainerProduct>
  );
}
