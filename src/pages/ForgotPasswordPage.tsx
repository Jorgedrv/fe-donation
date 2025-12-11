import Container from "../components/ui/Container";
import Section from "../components/ui/Section";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";
import Input from "../components/ui/Input";
import Loading from "../components/ui/Loading";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";

export default function ForgotPasswordPage() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!email) return;

    setLoading(true);

    try {
      await axios.post(
        `${import.meta.env.VITE_API_URL}/donation/v1/auth/forgot-password`,
        { email }
      );

      setSuccess("We have sent a recovery link to your email.");
      setLoading(false);
    } catch (err) {
      setError("Unable to process request. Verify your email.");
      setLoading(false);
    }
  };

  if (loading) return <Loading />;

  return (
    <Section
      className="
        min-h-screen flex flex-col justify-center
        bg-gradient-to-b from-[#fafafb] to-[#eef1ff]
        pt-10 pb-10
      "
    >
      <Container className="flex flex-col items-center animate-fadeInSlow">
        <div className="flex flex-col items-center mb-3">
          <h1 className="text-3xl font-extrabold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            DonationFlows
          </h1>
          <p className="text-gray-600 text-sm -mt-1">Recover account access</p>
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
            Forgot Password
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
              label="Email Address"
              labelClassName="text-left text-[0.9rem] font-medium"
              name="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="h-12 rounded-2xl border-[1.5px] focus:ring-purple-300"
            />

            <Button
              type="submit"
              disabled={!email}
              className={`
                w-full h-12 rounded-2xl text-white font-semibold
                bg-gradient-to-r from-[#7A5CF5] via-[#6A67F9] to-[#2D9CFF]
                shadow-[0_4px_16px_rgba(124,58,237,0.25)]
                transition
                ${
                  !email
                    ? "opacity-50 cursor-not-allowed"
                    : "hover:brightness-105"
                }
              `}
            >
              Send Reset Link
            </Button>
          </form>

          <p
            className="
              text-center text-sm text-gray-500 mt-6
            "
          >
            Remember your password?{" "}
            <span
              className="text-purple-600 font-medium cursor-pointer hover:underline"
              onClick={() => navigate("/login")}
            >
              Log in
            </span>
          </p>

          <p className="text-center text-xs text-gray-400 mt-4 opacity-70">
            Secure recovery powered by{" "}
            <span className="font-semibold text-gray-500">DonationFlows</span>
          </p>
        </Card>

        <footer className="text-center text-gray-400 text-xs mt-10 pb-6">
          © {new Date().getFullYear()} DonationFlows — All rights reserved.
        </footer>
      </Container>
    </Section>
  );
}
