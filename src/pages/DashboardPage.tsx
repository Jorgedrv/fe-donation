import Container from "../components/ui/Container";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";

export default function Dashboard() {
  const user = JSON.parse(localStorage.getItem("user") || "{}");

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 pb-16">
      <Container className="pt-24 animate-fadeIn">
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 text-transparent bg-clip-text">
              Welcome back, {user.username} 👋
            </h1>

            <p className="text-gray-500 mt-1 text-sm">
              Here’s a quick overview of your donation activity.
            </p>
          </div>

          <img
            src={`https://api.dicebear.com/8.x/identicon/svg?seed=${user.username}`}
            className="w-16 h-16 rounded-full shadow-xl border-[3px] border-white"
          />
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-14">
          <Card
            icon="📦"
            title="Total Campaigns"
            className="hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
          >
            <p className="text-3xl font-bold mt-4">12</p>
          </Card>

          <Card
            icon="🔥"
            title="Active Campaigns"
            className="hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
          >
            <p className="text-3xl font-bold mt-4">8</p>
          </Card>

          <Card
            icon="💰"
            title="Total Donations"
            className="hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
          >
            <p className="text-3xl font-bold mt-4">$4,520</p>
          </Card>

          <Card
            icon="👥"
            title="Total Donors"
            className="hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
          >
            <p className="text-3xl font-bold mt-4">143</p>
          </Card>
        </div>

        {/* Actions */}
        <div className="grid md:grid-cols-3 gap-6 mb-14">
          <Card
            icon="➕"
            title="Create Campaign"
            className="hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
          >
            <Button className="w-full mt-6 bg-gradient-to-r from-purple-500 to-blue-500 text-white">
              New Campaign
            </Button>
          </Card>

          <Card
            icon="📄"
            title="View Donations"
            className="hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
          >
            <Button className="w-full mt-6 bg-gray-100 hover:bg-gray-200 active:scale-[0.98] transition">
              Donations
            </Button>
          </Card>

          <Card
            icon="👥"
            title="Manage Users"
            className="hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
          >
            <Button className="w-full mt-6 bg-gray-100 hover:bg-gray-200 active:scale-[0.98] transition">
              Users
            </Button>
          </Card>
        </div>

        {/* Latest Campaigns */}
        <h2 className="text-xl font-semibold mb-6 text-gray-700">
          Latest Campaigns
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          <Card
            icon="🎁"
            title="Food for Refugees"
            description="Delivering food boxes to refugee families."
            className="hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
          />
          <Card
            icon="💧"
            title="Clean Water Project"
            description="Installing water pumps in rural areas."
            className="hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
          />
          <Card
            icon="🏥"
            title="Medical Aid"
            description="Helping children access essential medicines."
            className="hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
          />
        </div>
      </Container>
    </div>
  );
}
