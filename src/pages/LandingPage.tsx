import Button from "../components/ui/Button";
import Card from "../components/ui/Card";
import Hero from "../components/ui/Hero";
import Section from "../components/ui/Section";

export default function LandingPage() {
  return (
    <div className="bg-white text-gray-800">
      {/* HERO */}
      <Hero
        title={
          <>
            Make a Real Impact
            <span className="text-primary"> Today 💙</span>
          </>
        }
        subtitle="Smart, transparent donation flows that create immediate impact in communities in urgent need."
        cta={
          <Button size="lg" color="primary">
            Donate Now
          </Button>
        }
        className="bg-gradient-to-b from-white to-[#faf5ff]"
      />

      {/* Campaigns */}
      <Section
        title="Featured Campaigns"
        subtitle="Explore our most impactful projects running right now."
        align="center"
        className="bg-white"
      >
        <div className="grid md:grid-cols-3 gap-10">
          <Card
            title="Emergency Relief"
            icon="🔥"
            description="Immediate support for families in critical situations."
          >
            <Button size="sm" variant="outline" color="primary">
              Donate
            </Button>
          </Card>

          <Card
            title="Reforestation"
            icon="🌱"
            description="Plant trees and restore critical ecosystems around the world."
          >
            <Button size="sm" variant="outline" color="primary">
              Donate
            </Button>
          </Card>

          <Card
            title="Animal Rescue"
            icon="🐶"
            description="Support rescue operations and protect abandoned animals."
          >
            <Button size="sm" variant="outline" color="primary">
              Donate
            </Button>
          </Card>
        </div>
      </Section>

      <Section
        title="Ready to Change Lives?"
        subtitle="Join thousands of donors making a measurable difference around the world."
        align="center"
        className="bg-gradient-to-b from-[#faf5ff] to-white"
        padding="py-28 px-6"
        maxWidth="max-w-xl"
      >
        <div className="mt-10">
          <Button size="lg" color="primary">
            Start Donating
          </Button>
        </div>
      </Section>
    </div>
  );
}
