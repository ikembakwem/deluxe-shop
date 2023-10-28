import { Col } from "@components/Col";
import { Container } from "@components/Container";
import { ProductCard } from "@components/ProductCard";
import { Row } from "@components/Row";
import { assertIsProducts } from "@utils/checkers";

export default async function Home() {
  const res = await fetch(`http:/localhost:3000/api/products`);

  const data = (await res.json()) as unknown;
  assertIsProducts(data);

  return (
    <div>
      <Container>
        <h1 className="text-4xl font-bold mb-4">Latest Products</h1>
        <Row>
          {data.map((product) => (
            <Col key={product._id}>
              <ProductCard product={product} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}
