import Card from "../ui/Card";
import Button from "../ui/Button";

interface Campaign {
  id: string;
  title: string;
  description: string;
  icon?: string;
}

export default function CampaignsGrid({ campaigns }: { campaigns: Campaign[] }) {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 animate-fadeIn">
      {campaigns.map((c) => (
        <Card
          key={c.id}
          title={c.title}
          icon={c.icon ?? "🎁"}
          description={c.description}
          className="transition-transform hover:scale-[1.02] hover:shadow-lg"
        >

          <Button size="sm" variant="outline" color="primary" className="w-full mt-4">Donate</Button>
        </Card>
      ))}
    </div>
  );
}
