import Section from "../components/ui/Section";
import Container from "../components/ui/Container";
import Button from "../components/ui/Button";
import Loading from "../components/ui/Loading";
import Table from "../components/ui/Table";
import type { TableColumn } from "../components/ui/Table";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();

  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  const goNewUser = () => navigate("/users/new");

  useEffect(() => {
    setTimeout(() => {
      getAllUsers()
        .then(setUsers)
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
            <p className="text-sm text-gray-500">{u.email}</p>
          </div>
        </div>
      )
    },
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
      key: "actions",
      label: "Actions",
      className: "text-right",
      render: () => (
        <Button size="sm" variant="soft">
          Manage
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
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-6">
          <input
            type="text"
            placeholder="Search users..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full md:w-72 px-4 py-2 border rounded-xl shadow-sm"
          />

          <div className="hidden md:block">
            <Button size="md" color="primary" onClick={goNewUser}>
              + Add User
            </Button>
          </div>
        </div>

        {filtered.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-2xl shadow border">
            <p className="text-6xl mb-4">👥</p>
            <h3 className="text-lg font-semibold text-gray-700">
              No users found
            </h3>
            <p className="text-gray-500 mb-6">
              There are no users in the system yet.
            </p>
            <Button color="primary" onClick={goNewUser}>
              + Add User
            </Button>
          </div>
        ) : (
          <>
            <div className="hidden md:block">
              <Table data={filtered} columns={columns} />
            </div>

            <div className="md:hidden space-y-4">
              {filtered.map((u) => (
                <div
                  key={u.id}
                  className="bg-white rounded-2xl shadow border p-4 flex gap-4"
                >
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 text-white flex items-center justify-center font-semibold">
                    {u.name.charAt(0).toUpperCase()}
                  </div>

                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="font-semibold text-gray-800">
                          {u.name} {u.lastname}
                        </p>
                        <p className="text-sm text-gray-500">{u.email}</p>
                      </div>

                      <span
                        className={`px-2 py-0.5 text-xs rounded-full ${
                          u.status === "ACTIVE"
                            ? "bg-green-100 text-green-600"
                            : "bg-yellow-100 text-yellow-600"
                        }`}
                      >
                        {u.status}
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-2 mt-2">
                      {u.roles.map((r) => (
                        <span
                          key={r.name}
                          className="px-2 py-0.5 text-xs rounded bg-blue-100 text-blue-600"
                        >
                          {r.name}
                        </span>
                      ))}
                    </div>

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
          aria-label="Add user"
          size="lg"
          color="primary"
          className="rounded-full shadow-lg w-14 h-14 flex items-center justify-center text-2xl"
          onClick={goNewUser}
        >
          +
        </Button>
      </div>
    </div>
  );
}
