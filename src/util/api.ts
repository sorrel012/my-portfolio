import axios from 'axios';

const apiUrl = import.meta.env.VITE_API_URL;

export interface IProfileInfo {
  name: string | undefined;
  mainPic: string | undefined;
  title: string | undefined;
  content: string | undefined;
  subPic: string | undefined;
  birth: string | undefined;
  email: string | undefined;
  address: string | undefined;
}

export async function getProfileInfo() {
  const { data } = await axios.get(`${apiUrl}/profile/info`);
  return data.result;
}

export async function saveProfileInfo(profileInfo: IProfileInfo) {
  const { data } = await axios.post(`${apiUrl}/profile/info`, profileInfo);
  return data;
}

export async function editProfileInfo(profileInfo: IProfileInfo) {
  const { data } = await axios.put(`${apiUrl}/profile/info`, profileInfo);
  return data;
}
