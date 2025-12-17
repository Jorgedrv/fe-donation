import { useLocation, useNavigate } from "react-router-dom";

import Section from "../components/ui/Section";
import Container from "../components/ui/Container";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";

type ErrorState = {
  title?: string;
  message?: string;
};

export default function ErrorPage() {
  const navigate = useNavigate();
  const location = useLocation();

  const state = location.state as ErrorState | null;

  const title = state?.title || "Something went wrong";
  const message =
    state?.message || "An unexpected error occurred. Please try again later.";

  return (
    <div className="bg-gray-50 min-h-screen">
      <Section
        title={title}
        subtitle={message}
        align="center"
        className="pt-24 pb-12 bg-gradient-to-b from-white to-gray-50"
      />

      <Container className="max-w-xl pb-16">
        <Card
          icon="❌"
          title="Unexpected Error"
          description="We ran into an issue while processing your request."
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
