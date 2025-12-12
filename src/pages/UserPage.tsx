import Section from "../components/ui/Section";
import Container from "../components/ui/Container";
import Button from "../components/ui/Button";
import Loading from "../components/ui/Loading";
import Table from "../components/ui/Table";
import type { TableColumn } from "../components/ui/Table";

import { useEffect, useState } from "react";
import { getAllUsers } from "../api/users";

interface User {
  id: number;
  name: string;
  lastname: string;
  email: string;
  status: string;
  roles: { name: string }[];
}

export default function UsersPage() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    setTimeout(() => {
      getAllUsers()
        .then((data) => setUsers(data))
        .finally(() => setLoading(false));
    }, 1000);
  }, []);

  if (loading) return <Loading />;

  const filtered = users.filter((u) =>
    `${u.name} ${u.lastname} ${u.email}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  const columns: TableColumn<User>[] = [
    {
      key: "user",
      label: "User",
      render: (u) => (
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 text-white flex items-center justify-center font-semibold">
            {u.name.charAt(0).toUpperCase()}
          </div>
          <div>
            <p className="font-medium">
              {u.name} {u.lastname}
            </p>
          </div>
        </div>
      )
    },

    { key: "email", label: "Email" },

    {
      key: "roles",
      label: "Roles",
      render: (u) =>
        u.roles.map((r) => (
          <span
            key={r.name}
            className="px-2 py-1 text-xs rounded bg-blue-100 text-blue-600 mr-2"
          >
            {r.name}
          </span>
        ))
    },

    {
      key: "status",
      label: "Status",
      render: (u) => (
        <span
          className={`px-3 py-1 text-xs rounded-full ${
            u.status === "ACTIVE"
              ? "bg-green-100 text-green-600"
              : "bg-yellow-100 text-yellow-600"
          }`}
        >
          {u.status}
        </span>
      )
    },

    {
      key: "enabled",
      label: "Enabled",
      className: "text-right",
      render: () => (
        <Button size="sm" variant="soft">
          Edit
        </Button>
      )
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      <Section
        title="Users Management"
        subtitle="View and manage all user accounts."
        align="center"
        className="pt-24 pb-8 bg-gradient-to-b from-white to-gray-50"
      />

      <Container className="max-w-6xl py-8">
        <div className="flex justify-between items-center mb-6">
          <input
            type="text"
            placeholder="Search users..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-72 px-4 py-2 border rounded-xl shadow-sm"
          />

          <Button size="md" color="primary">
            + Add User
          </Button>
        </div>

        <Table
          data={filtered}
          columns={columns}
          emptyIcon="👥"
          emptyMessage="No users found"
          emptyDescription="There are no users in the system yet."
          emptyAction={<Button color="primary">+ Add User</Button>}
        />
      </Container>
    </div>
  );
}
