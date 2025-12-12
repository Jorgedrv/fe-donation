import Section from "../components/ui/Section";
import Container from "../components/ui/Container";
import Button from "../components/ui/Button";
import Loading from "../components/ui/Loading";
import Table from "../components/ui/Table";
import type { TableColumn } from "../components/ui/Table";

import { useEffect, useState } from "react";
import { getAllCampaigns } from "../api/campaigns";

interface Campaign {
  id: number;
  name: string;
  description: string;
  icon: string;
  status: string;
}

export default function CampaignsManagementPage() {
  const [campaigns, setCampaigns] = useState<Campaign[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    setTimeout(() => {
      getAllCampaigns()
        .then((data) => setCampaigns(data))
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
    {
      key: "name",
      label: "Name"
    },
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
            Edit
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
        <div className="flex justify-between items-center mb-6">
          <input
            type="text"
            placeholder="Search campaigns..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-72 px-4 py-2 border rounded-xl shadow-sm"
          />

          <Button size="md" color="primary">
            + New Campaign
          </Button>
        </div>

        {/* TABLE OR EMPTY STATE */}
        {filtered.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-2xl shadow border">
            <p className="text-6xl mb-4">📭</p>
            <h3 className="text-lg font-semibold text-gray-700">
              No campaigns found
            </h3>
            <p className="text-gray-500 mb-6">
              Try adjusting your search or create a new campaign.
            </p>
            <Button color="primary">+ Create Campaign</Button>
          </div>
        ) : (
          <Table columns={columns} data={filtered} />
        )}
      </Container>
    </div>
  );
}
