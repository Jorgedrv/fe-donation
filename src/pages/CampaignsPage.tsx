import Section from "../components/ui/Section";
import Container from "../components/ui/Container";
import Loading from "../components/ui/Loading";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";
import { Link } from "react-router-dom";

import { getAllCampaigns } from "../api/campaigns";
import { useEffect, useState } from "react";

interface Campaign {
  id: string;
  name: string;
  description: string;
  icon?: string;
}

export default function CampaignsPage() {
  const [campaigns, setCampaigns] = useState<Campaign[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      getAllCampaigns()
        .then((data) => setCampaigns(data))
        .finally(() => setLoading(false));
    }, 1500);
  }, []);

  if (loading) return <Loading />;

  return (
    <div className="bg-gray-50 min-h-screen">
      <Section
        title="All Campaigns"
        subtitle="Choose a cause and make an immediate impact."
        align="center"
        className="pt-24 pb-10 bg-gradient-to-b from-white to-gray-50"
      />

      <Container className="py-10">
        {campaigns.length === 0 ? (
          <div className="flex justify-center">
            <Card className="max-w-md w-full text-center py-14 px-10">
              <div className="text-6xl mb-6 opacity-80">🌱</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                No campaigns available
              </h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                We’re preparing new causes to make a real impact.
                <br />
                Please check back soon.
              </p>
              <Button
                variant="soft"
                color="primary"
                size="md"
                as={Link}
                to="/"
                className="px-8"
              >
                Go back home
              </Button>
            </Card>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fadeInUp">
            {campaigns.map((c) => (
              <Card
                key={c.id}
                title={c.name}
                icon={c.icon ?? "🎁"}
                description={c.description}
                className="border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all"
              >
                <Button
                  size="md"
                  variant="outline"
                  color="primary"
                  className="w-full mt-4 py-2 hover:bg-primary/5"
                  as={Link}
                  to={`/campaigns/${c.id}/donate`}
                >
                  Donate
                </Button>
              </Card>
            ))}
          </div>
        )}
      </Container>
    </div>
  );
}
