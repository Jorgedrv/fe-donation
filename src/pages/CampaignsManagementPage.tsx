import Section from "../components/ui/Section";
import Container from "../components/ui/Container";
import Button from "../components/ui/Button";
import Loading from "../components/ui/Loading";
import Table from "../components/ui/Table";
import type { TableColumn } from "../components/ui/Table";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAllCampaigns } from "../api/campaigns";

interface Campaign {
  id: number;
  name: string;
  description: string;
  icon: string;
  status: string;
}

export default function CampaignsManagementPage() {
  const navigate = useNavigate();

  const [campaigns, setCampaigns] = useState<Campaign[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  const goNewCampaign = () => navigate("/campaigns/new");

  useEffect(() => {
    setTimeout(() => {
      getAllCampaigns()
        .then(setCampaigns)
        .finally(() => setLoading(false));
    }, 800);
  }, []);

  if (loading) return <Loading />;

  const filtered = campaigns.filter((c) =>
    `${c.name} ${c.description}`.toLowerCase().includes(search.toLowerCase())
  );

  const columns: TableColumn<Campaign>[] = [
    {
      key: "icon",
      label: "Icon",
      render: (c) => <span className="text-3xl">{c.icon || "🎁"}</span>
    },
    { key: "name", label: "Name" },
    {
      key: "description",
      label: "Description",
      render: (c) => (
        <p className="line-clamp-2 text-gray-600 text-sm">{c.description}</p>
      )
    },
    {
      key: "status",
      label: "Status",
      render: (c) => (
        <span
          className={`px-3 py-1 text-xs rounded-full ${
            c.status === "ACTIVE"
              ? "bg-green-100 text-green-600"
              : "bg-red-100 text-red-600"
          }`}
        >
          {c.status}
        </span>
      )
    },
    {
      key: "actions",
      label: "Actions",
      render: () => (
        <div className="flex justify-end">
          <Button size="sm" variant="soft">
            Manage
          </Button>
        </div>
      )
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      <Section
        title="Campaigns Management"
        subtitle="Create, update, and manage donation campaigns."
        align="center"
        className="pt-24 pb-8 bg-gradient-to-b from-white to-gray-50"
      />

      <Container className="max-w-7xl py-8">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-6">
          <input
            type="text"
            placeholder="Search campaigns..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full md:w-72 px-4 py-2 border rounded-xl shadow-sm"
          />

          <div className="hidden md:block">
            <Button size="md" color="primary" onClick={goNewCampaign}>
              + New Campaign
            </Button>
          </div>
        </div>

        {filtered.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-2xl shadow border">
            <p className="text-6xl mb-4">📭</p>
            <h3 className="text-lg font-semibold text-gray-700">
              No campaigns found
            </h3>
            <p className="text-gray-500 mb-6">
              Try adjusting your search or create a new campaign.
            </p>
            <Button color="primary" onClick={goNewCampaign}>
              + Create Campaign
            </Button>
          </div>
        ) : (
          <>
            <div className="hidden md:block">
              <Table columns={columns} data={filtered} />
            </div>

            <div className="md:hidden space-y-4">
              {filtered.map((c) => (
                <div
                  key={c.id}
                  className="bg-white rounded-2xl shadow border p-4 flex gap-4"
                >
                  <div className="text-3xl">{c.icon || "🎁"}</div>

                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <h4 className="font-semibold text-gray-800">{c.name}</h4>
                      <span
                        className={`px-2 py-0.5 text-xs rounded-full ${
                          c.status === "ACTIVE"
                            ? "bg-green-100 text-green-600"
                            : "bg-red-100 text-red-600"
                        }`}
                      >
                        {c.status}
                      </span>
                    </div>

                    <p className="text-sm text-gray-600 mt-1 line-clamp-2">
                      {c.description}
                    </p>

                    <div className="mt-3 flex justify-end">
                      <Button size="sm" variant="soft">
                        Manage
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </Container>

      <div className="md:hidden fixed bottom-6 right-6 z-50 pb-[env(safe-area-inset-bottom)]">
        <Button
          aria-label="Create new campaign"
          size="lg"
          color="primary"
          className="rounded-full shadow-lg w-14 h-14 flex items-center justify-center text-2xl"
          onClick={goNewCampaign}
        >
          +
        </Button>
      </div>
    </div>
  );
}
