import { useEffect, useState } from "react";
import { getAllCampaigns } from "../api/campaigns";

import Section from "../components/ui/Section";
import Container from "../components/ui/Container";
import Loading from "../components/ui/Loading";
import CampaignsGrid from "../components/campaigns/CampaignsGrid";

interface Campaign {
  id: string;
  title: string;
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
    <Section
      title="All Campaigns"
      subtitle="Choose a cause and make an immediate impact."
      align="center"
      className="bg-gray-50 pt-32 pb-24"
    >
      <Container>
        <CampaignsGrid campaigns={campaigns} />
      </Container>
    </Section>
  );
}
