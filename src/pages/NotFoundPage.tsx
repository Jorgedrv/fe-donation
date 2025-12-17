import { useNavigate } from "react-router-dom";

import Section from "../components/ui/Section";
import Container from "../components/ui/Container";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";

export default function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <div className="bg-gray-50 min-h-screen">
      <Section
        title="Page Not Found"
        subtitle="The page you are looking for does not exist or may have been moved."
        align="center"
        className="pt-24 pb-12 bg-gradient-to-b from-white to-gray-50"
      />

      <Container className="max-w-xl pb-16">
        <Card
          icon="🚧"
          title="404 Error"
          description="We couldn’t find the page you were trying to access."
          className="text-center"
        >
          <div className="mt-6 flex justify-center gap-4">
            <Button
              variant="outline"
              color="primary"
              onClick={() => navigate(-1)}
            >
              Go Back
            </Button>

            <Button
              variant="default"
              color="primary"
              onClick={() => navigate("/")}
            >
              Go Home
            </Button>
          </div>
        </Card>
      </Container>
    </div>
  );
}
