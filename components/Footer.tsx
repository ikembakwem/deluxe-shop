import { Container } from "./Container";

export const Footer = () => {
  return (
    <footer>
      <Container className="mt-auto">
        <div className="flex justify-center items-center py-5 px-3">
          <div className="w-full">
            <p className="text-center mb-4">Deluxe Shop &copy; {new Date().getFullYear()}</p>
          </div>
        </div>
      </Container>
    </footer>
  );
};
