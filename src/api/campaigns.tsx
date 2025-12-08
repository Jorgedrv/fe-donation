import axiosClient from "./axiosClient";

export const getAllCampaigns = async () => {
  const response = await axiosClient.get("/donation/v1/campaigns/all");
  return response.data;
};
