import { Col } from "@components/Col";
import { Container } from "@components/Container";
import { ProductCard } from "@components/ProductCard";
import { Row } from "@components/Row";
import { fetchProducts } from "@utils/fetchProducts";

export default async function Home() {
  const products = await fetchProducts();

  return (
    <div>
      <Container>
        <h1 className="text-4xl font-bold mb-4 text-bsGray">Latest Products</h1>
        <Row>
          {products.map((product) => (
            <Col key={product._id}>
              <ProductCard product={product} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}
