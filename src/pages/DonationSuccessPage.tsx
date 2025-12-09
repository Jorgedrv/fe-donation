import Section from "../components/ui/Section";
import Container from "../components/ui/Container";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";

import { useLocation, Link } from "react-router-dom";

export default function DonationSuccessPage() {
  const location = useLocation();

  const params = new URLSearchParams(location.search);
  const amount = params.get("amount");
  const campaign = params.get("name");

  return (
    <div className="bg-gray-50 min-h-screen">
      <Section
        title="🎉 Donation Successful!"
        subtitle="Thank you for your contribution — your support creates meaningful and lasting impact."
        align="center"
        className="pt-24 pb-8 bg-gradient-to-b from-white to-gray-50"
      />

      <Container className="max-w-3xl pb-24 relative">
        <Card
          className="
              p-10 
              rounded-3xl
              shadow-xl shadow-gray-300/40
              border border-gray-200 
              backdrop-blur-sm bg-white/90
              animate-fadeInUp
            "
        >
          <div className="text-7xl mb-4 drop-shadow-sm">💜</div>

          <h2 className="text-3xl font-semibold text-gray-900 tracking-tight">
            Thank you for your donation!
          </h2>

          <p className="text-gray-600 mt-2 text-lg">
            Your contribution has been processed successfully.
          </p>

          <div
            className="
                bg-white 
                border border-gray-200 
                rounded-2xl p-6 mt-10 
                space-y-4 shadow-sm
              "
          >
            <div className="border-t border-gray-200/70 pt-4 space-y-4">
              <p>
                <strong>Campaign:</strong>{" "}
                <span className="text-gray-700">
                  {campaign ?? "Selected Campaign"}
                </span>
              </p>

              <p>
                <strong>Amount Donated:</strong>{" "}
                <span className="text-gray-700">
                  {amount ? `$${amount}` : "—"}
                </span>
              </p>

              <p>
                <strong>Confirmation:</strong>{" "}
                <span className="text-gray-700">
                  Your donation has been received.
                </span>
              </p>
            </div>
          </div>

          <div className="mt-10 flex flex-col md:flex-row gap-4 justify-center">
            <Link to="/campaigns">
              <Button
                size="lg"
                color="primary"
                variant="outline"
                className="px-10 py-3 text-lg rounded-xl"
              >
                Explore More Campaigns
              </Button>
            </Link>

            <Link to="/">
              <Button
                size="lg"
                color="primary"
                className="px-10 py-3 text-lg rounded-xl shadow-md hover:shadow-lg transition"
              >
                Return Home
              </Button>
            </Link>
          </div>
        </Card>
      </Container>
    </div>
  );
}
