import Container from "../components/ui/Container";
import Section from "../components/ui/Section";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";
import Input from "../components/ui/Input";
import Loading from "../components/ui/Loading";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function SignupPage() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    lastname: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

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
    setSuccess("");

    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setLoading(true);

    try {
      await axios.post(
        `${import.meta.env.VITE_API_URL}/donation/v1/auth/register`,
        {
          username: form.username,
          email: form.email,
          password: form.password
        }
      );

      setSuccess("Account created successfully! Redirecting...");
      setTimeout(() => navigate("/login"), 1500);
    } catch {
      setError("Could not create account.");
      setLoading(false);
    }
  };

  return (
    <Section
      auth={true}
      padding="p-0"
      className="
        min-h-screen flex flex-col 
        justify-start md:justify-center
        bg-gradient-to-b from-[#fafafb] to-[#eef1ff]
        pt-10 pb-10 md:pt-0
      "
    >
      <Container auth className="animate-fadeInSlow">
        <div className="flex flex-col items-center mb-3">
          <h1 className="text-3xl font-extrabold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Create Your Account
          </h1>
          <p className="text-gray-600 text-sm -mt-1">
            Start managing campaigns and donations
          </p>
        </div>

        <div className="w-full max-w-[420px] px-4 md:px-0">
          <Card
            className="
            p-8 pt-6 pb-10 
            w-full
            rounded-[30px] bg-white
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
              Sign Up
            </h2>

            {error && (
              <p className="text-red-500 text-sm text-center -mt-4 mb-3">
                {error}
              </p>
            )}

            {success && (
              <p className="text-green-600 text-sm text-center -mt-4 mb-3">
                {success}
              </p>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                label="Name"
                labelClassName="text-left text-[0.9rem] font-medium"
                name="name"
                placeholder="Your name"
                value={form.name}
                onChange={handleChange}
                className="h-12 rounded-2xl border-[1.5px] focus:ring-purple-300"
              />

              <Input
                label="Lastname"
                labelClassName="text-left text-[0.9rem] font-medium"
                name="lastname"
                placeholder="Your lastname"
                value={form.lastname}
                onChange={handleChange}
                className="h-12 rounded-2xl border-[1.5px] focus:ring-purple-300"
              />

              <Input
                label="Email"
                labelClassName="text-left text-[0.9rem] font-medium"
                name="email"
                placeholder="Your email address"
                value={form.email}
                onChange={handleChange}
                className="h-12 rounded-2xl border-[1.5px] focus:ring-purple-300"
              />

              <Input
                label="Password"
                labelClassName="text-left text-[0.9rem] font-medium"
                name="password"
                type="password"
                placeholder="Create a password"
                value={form.password}
                onChange={handleChange}
                className="h-12 rounded-2xl border-[1.5px] focus:ring-purple-300"
              />

              <Input
                label="Confirm Password"
                labelClassName="text-left text-[0.9rem] font-medium"
                name="confirmPassword"
                type="password"
                placeholder="Repeat your password"
                value={form.confirmPassword}
                onChange={handleChange}
                className="h-12 rounded-2xl border-[1.5px] focus:ring-purple-300"
              />

              <Button
                type="submit"
                disabled={
                  !form.name ||
                  !form.lastname ||
                  !form.email ||
                  !form.password ||
                  !form.confirmPassword
                }
                className={`
                w-full h-12 rounded-2xl text-white font-semibold
                bg-gradient-to-r from-[#7A5CF5] via-[#6A67F9] to-[#2D9CFF]
                shadow-[0_4px_16px_rgba(124,58,237,0.25)]
                transition
                ${
                  !form.name ||
                  !form.lastname ||
                  !form.email ||
                  !form.password ||
                  !form.confirmPassword
                    ? "opacity-50 cursor-not-allowed"
                    : "hover:brightness-105"
                }
              `}
              >
                Create Account
              </Button>
            </form>

            <p className="text-center text-sm text-gray-500 mt-6">
              Already have an account?{" "}
              <span
                className="text-purple-600 font-medium cursor-pointer hover:underline"
                onClick={() => navigate("/login")}
              >
                Log in
              </span>
            </p>
          </Card>
        </div>

        <footer className="text-center text-gray-400 text-xs mt-10 pb-6">
          © {new Date().getFullYear()} DonationFlows — All rights reserved.
        </footer>
      </Container>
    </Section>
  );
}
