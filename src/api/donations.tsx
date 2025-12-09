import axiosClient from "./axiosClient";

interface DonationPayload {
  donorId: number;
  campaignId: number;
  amount: number;
}

export const donate = async (payload: DonationPayload) => {
  const response = await axiosClient.post("/donation/v1/donations", payload);
  return response.data;
};
