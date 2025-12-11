import Section from "../components/ui/Section";
import Container from "../components/ui/Container";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";
import Loading from "../components/ui/Loading";
import Input from "../components/ui/Input";

import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { getCampaignById } from "../api/campaigns";
//import { donate } from "../api/donations";

interface Campaign {
  id: string;
  name: string;
  description: string;
  icon?: string;
  impact?: string;
}

export default function DonationPage() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [campaign, setCampaign] = useState<Campaign | null>(null);
  const [amount, setAmount] = useState(25);

  const [loading, setLoading] = useState(true);
  const [processing, setProcessing] = useState(false);

  const presetAmounts = [10, 25, 50, 100];

  useEffect(() => {
    if (!id) return;

    setTimeout(() => {
      getCampaignById(id)
        .then((data) => setCampaign(data))
        .finally(() => setLoading(false));
    }, 1500);
  }, [id]);

  if (loading) return <Loading />;

  if (!campaign) return <div className="p-10">Campaign not found</div>;

  const handleDonation = async () => {
    setProcessing(true);
    try {
      //const payload = {
      //  donorId: 1,
      //  campaignId: Number(id),
      //  amount: amount
      //};

      //await donate(payload);

      setTimeout(() => {
        navigate(
          `/donation/success?amount=${amount}&name=${encodeURIComponent(
            campaign.name
          )}`
        );
      }, 2000);
    } catch (error) {
      console.error(error);
      setProcessing(false);
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <Section
        title="Donate to Campaign"
        subtitle="Your contribution directly helps families and communities in need."
        align="center"
        className="pt-24 pb-8 bg-gradient-to-b from-white to-gray-50"
      />

      <Container className="max-w-5xl pb-16">
        <div className="grid md:grid-cols-3 gap-10 items-stretch">
          <div className="md:col-span-1">
            <Card
              icon={campaign.icon ?? "🎁"}
              title={campaign.name}
              description={campaign.description}
              className="h-full flex flex-col"
            />
          </div>

          <div className="md:col-span-2 grid md:grid-cols-2 gap-8 items-stretch">
            <Card
              icon="💸"
              title="Choose Your Donation"
              className="h-full flex flex-col"
            >
              <div className="grid grid-cols-2 gap-3 mt-4">
                {presetAmounts.map((preset) => (
                  <Button
                    key={preset}
                    color="primary"
                    variant={amount === preset ? "default" : "outline"}
                    disabled={processing}
                    onClick={() => setAmount(preset)}
                    className="py-3"
                  >
                    ${preset}
                  </Button>
                ))}
              </div>

              <div className="mt-5">
                <label className="text-sm text-gray-600">Custom Amount</label>
                <Input
                  type="number"
                  className="w-full mt-1 p-3 border rounded-xl text-gray-700"
                  value={amount}
                  onChange={(e) => setAmount(Number(e.target.value))}
                />
              </div>
            </Card>

            <Card
              icon="📄"
              title="Donation Summary"
              className="h-full flex flex-col"
            >
              <div className="text-gray-700 space-y-2 mt-4">
                <p>
                  <strong>Campaign:</strong> {campaign.name}
                </p>
                <p>
                  <strong>Donation:</strong> ${amount}
                </p>
                <p>
                  <strong>Impact:</strong>{" "}
                  {campaign.impact ?? "Your donation makes a difference."}
                </p>
              </div>

              <Button
                size="lg"
                variant="soft"
                color="primary"
                disabled={processing || amount <= 0}
                className="w-full mt-6 py-4"
                onClick={handleDonation}
              >
                {processing ? "Processing..." : "Complete Donation"}
              </Button>
            </Card>
          </div>
        </div>
      </Container>
    </div>
  );
}
