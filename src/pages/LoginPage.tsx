import Container from "../components/ui/Container";
import Section from "../components/ui/Section";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";
import Input from "../components/ui/Input";
import Loading from "../components/ui/Loading";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";

export default function Login() {
  const navigate = useNavigate();

  const [form, setForm] = useState({ username: "", password: "" });
  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  if (loading) return <Loading />;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/donation/v1/auth/login`,
        form
      );

      const { token, user, menus } = res.data;

      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("menus", JSON.stringify(menus));

      setTimeout(() => {
        navigate("/dashboard");
      }, 1200);
    } catch (err) {
      setError("Invalid credentials.");
      setLoading(false);
    }
  };

  return (
    <Section
      className="
        min-h-screen flex flex-col justify-center
        bg-gradient-to-b from-[#fafafb] to-[#eef1ff]
        pt-10 pb-10
      "
    >
      <Container className="flex flex-col items-center animate-fadeInSlow">
        <Button
          onClick={() => navigate("/")}
          className="
            mb-6 px-4 py-2 rounded-xl 
            text-gray-600 text-sm font-medium 
            bg-white border border-gray-200
            shadow-[0_2px_8px_rgba(0,0,0,0.05)]
            hover:bg-gray-50 hover:border-gray-300 
            transition flex items-center gap-2
          "
        >
          ← Back to Home
        </Button>

        <div className="flex flex-col items-center mb-3">
          <h1 className="text-3xl font-extrabold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            DonationFlows
          </h1>
          <p className="text-gray-600 text-sm -mt-1">
            Manage campaigns and donations
          </p>
        </div>

        <Card
          className="
            p-8 pt-6 pb-10 w-[420px] rounded-[30px] bg-white
            shadow-[0_4px_24px_rgba(0,0,0,0.06)]
            hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)]
            transition-all duration-300 animate-fadeIn
            mt-2
          "
        >
          <h2
            className="
              text-[26px] font-extrabold text-center mb-8 
              bg-gradient-to-r from-purple-600 to-blue-600 
              bg-clip-text text-transparent
          "
          >
            Welcome Back
          </h2>

          {error && (
            <p className="text-red-500 text-sm text-center -mt-4 mb-3">
              {error}
            </p>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              label="Username"
              labelClassName="text-left text-[0.9rem] font-medium"
              name="username"
              placeholder="Enter your username"
              value={form.username}
              onChange={handleChange}
              className="h-12 rounded-2xl border-[1.5px] focus:ring-purple-300"
            />

            <Input
              label="Password"
              labelClassName="text-left text-[0.9rem] font-medium"
              name="password"
              type="password"
              placeholder="Enter your password"
              value={form.password}
              onChange={handleChange}
              className="h-12 rounded-2xl border-[1.5px] focus:ring-purple-300"
            />

            <Button
              type="submit"
              disabled={!form.username || !form.password}
              className={`
                w-full h-12 rounded-2xl text-white font-semibold
                bg-gradient-to-r from-[#7A5CF5] via-[#6A67F9] to-[#2D9CFF]
                shadow-[0_4px_16px_rgba(124,58,237,0.25)]
                transition
                ${
                  !form.username || !form.password
                    ? "opacity-50 cursor-not-allowed"
                    : "hover:brightness-105"
                }
              `}
            >
              Log In
            </Button>
          </form>

          <p
            className="
              text-right text-sm text-gray-500 pr-1 mt-1
              hover:text-purple-600 transition cursor-pointer
            "
          >
            Forgot password?
          </p>

          <p className="text-center text-sm text-gray-500 mt-6">
            Need access? Contact your administrator.
          </p>

          <p className="text-center text-xs text-gray-400 mt-4 opacity-70">
            Secure login powered by{" "}
            <span className="font-semibold text-gray-500">DonationFlows</span>
          </p>
        </Card>

        {/* FOOTER */}
        <footer className="text-center text-gray-400 text-xs mt-10 pb-6">
          © {new Date().getFullYear()} DonationFlows — All rights reserved.
        </footer>
      </Container>
    </Section>
  );
}
