import axiosClient from "./axiosClient";

export async function getAllUsers() {
  const res = await axiosClient.get("/donation/v1/users/all");
  return res.data;
}
