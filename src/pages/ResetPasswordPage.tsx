import Container from "../components/ui/Container";
import Section from "../components/ui/Section";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";
import Input from "../components/ui/Input";
import Loading from "../components/ui/Loading";

import { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

import axios from "axios";

export default function ResetPasswordPage() {
  const navigate = useNavigate();
  const [params] = useSearchParams();

  const token = params.get("token") || "";

  const [form, setForm] = useState({ password: "", confirm: "" });
  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, [token, navigate]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!form.password || !form.confirm || form.password !== form.confirm) {
      setError("Passwords must match.");
      return;
    }

    setLoading(true);

    try {
      await axios.post(
        `${import.meta.env.VITE_API_URL}/donation/v1/auth/reset-password`,
        { token, password: form.password }
      );

      setSuccess("Password successfully updated!");
      setLoading(false);

      setTimeout(() => navigate("/login"), 1500);
    } catch (err) {
      setError("Invalid or expired token.");
      setLoading(false);
    }
  };

  if (loading) return <Loading />;

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
            DonationFlows
          </h1>
          <p className="text-gray-600 text-sm -mt-1">Reset account password</p>
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
              Reset Password
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
                label="New Password"
                type="password"
                name="password"
                placeholder="Enter new password"
                value={form.password}
                onChange={handleChange}
                className="h-12 rounded-2xl border-[1.5px] focus:ring-purple-300"
              />

              <Input
                label="Confirm Password"
                type="password"
                name="confirm"
                placeholder="Re-enter new password"
                value={form.confirm}
                onChange={handleChange}
                className="h-12 rounded-2xl border-[1.5px] focus:ring-purple-300"
              />

              <Button
                type="submit"
                disabled={!form.password || !form.confirm}
                className={`
                w-full h-12 rounded-2xl text-white font-semibold
                bg-gradient-to-r from-[#7A5CF5] via-[#6A67F9] to-[#2D9CFF]
                shadow-[0_4px_16px_rgba(124,58,237,0.25)]
                transition
                ${
                  !form.password || !form.confirm
                    ? "opacity-50 cursor-not-allowed"
                    : "hover:brightness-105"
                }
              `}
              >
                Update Password
              </Button>
            </form>

            <p className="text-center text-xs text-gray-400 mt-4 opacity-70">
              Secure update powered by{" "}
              <span className="font-semibold text-gray-500">DonationFlows</span>
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
