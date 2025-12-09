import Section from "../components/ui/Section";
import Container from "../components/ui/Container";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";
import { Link } from "react-router-dom";

export default function AboutPage() {
  return (
    <div className="bg-gray-50">
      
      {/* HERO */}
      <Section
        title="About DonationFlows"
        subtitle="Empowering donors and communities with transparency, simplicity, and real social impact."
        align="center"
        className="pt-24 pb-8 bg-gradient-to-b from-white to-gray-50"
      >
        <Container className="max-w-3xl"/>
      </Section>

      {/* FEATURE CARDS */}
      <Section
        title=""
        subtitle=""
        align="center"
        className="pb-24"
      >
        <Container className="max-w-6xl">
          <div className="grid md:grid-cols-3 gap-10">
            <Card
              icon="🌍"
              title="Our Mission"
              description="Making charitable giving easier, faster, and more transparent for donors and organizations."
            />

            <Card
              icon="🤝"
              title="Community Impact"
              description="Connecting donors with verified campaigns that deliver measurable help to communities in need."
            />

            <Card
              icon="🔒"
              title="Transparency First"
              description="Every campaign includes full details and traceability for complete donor confidence."
            />
          </div>
        </Container>
      </Section>

      {/* HOW IT WORKS */}
      <Section
        title="How DonationFlows Works"
        subtitle=""
        align="center"
        className="bg-white py-24"
      >
        <Container className="max-w-5xl">
          <div className="grid md:grid-cols-3 gap-10">

            <Card
              icon="🔎"
              title="1. Discover"
              description="Browse active campaigns created by trusted organizations and partners."
            />

            <Card
              icon="💳"
              title="2. Donate"
              description="Make secure contributions using a smooth and simple donation flow."
            />

            <Card
              icon="✨"
              title="3. Impact"
              description="Your support directly reaches the communities highlighted in each campaign."
            />
          </div>
        </Container>
      </Section>

      {/* VALUES */}
      <Section
        title="Our Core Values"
        subtitle=""
        align="center"
        className="py-24 bg-gray-50"
      >
        <Container className="max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8">

            <Card
              icon="💡"
              title="Transparency"
              description="Clear, honest information about every campaign."
            />

            <Card
              icon="🚀"
              title="Impact"
              description="Every donation is designed to create meaningful change."
            />

            <Card
              icon="🤲"
              title="Accessibility"
              description="A platform anyone can use to help those in need."
            />

            <Card
              icon="🌱"
              title="Community"
              description="Supporting local initiatives and grassroots organizations."
            />
          </div>
        </Container>
      </Section>

      {/* CTA FINAL */}
      <Section
        title="Ready to Make a Difference?"
        subtitle="Explore active campaigns and create real impact today."
        align="center"
        className="py-24 bg-white"
      >
        <Container>
        <Link to="/campaigns">
          <Button size="lg" color="primary">
            View Campaigns
          </Button>
        </Link>
        </Container>
      </Section>

    </div>
  );
}
