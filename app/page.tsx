import { Col } from "@components/Col";
import { Container } from "@components/Container";
import { Product, ProductCard } from "@components/ProductCard";
import { Row } from "@components/Row";

export default async function Home() {
  const res = await fetch(`http:/localhost:3000/api/products`, {
    cache: "no-store",
    credentials: "include",
    method: "GET"
  });

  const data = await res.json();

  return (
    <div>
      <Container>
        <h1 className="text-4xl font-bold mb-4">Latest Products</h1>
        <Row>
          {data.map((product: Product) => (
            <Col key={product._id}>
              <ProductCard product={product} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}
