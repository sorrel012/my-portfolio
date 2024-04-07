import axios from 'axios';
import { ICertification } from '../components/admin/AdminProfileCert.tsx';
import { IEducation } from '../components/admin/AdminProfileEdu.tsx';

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

export async function getProfileCert() {
  const { data } = await axios.get(`${apiUrl}/profile/cert`);
  return data.result;
}

export async function saveProfileCert(certs: ICertification[]) {
  const { data } = await axios.post(`${apiUrl}/profile/cert`, certs);
  return data;
}

export async function delProfileCert(index: number) {
  const { data } = await axios.delete(`${apiUrl}/profile/cert`, {
    params: { certOrder: index },
  });
  return data;
}

export async function getProfileEdu() {
  const { data } = await axios.get(`${apiUrl}/profile/edu`);
  return data.result;
}

export async function saveProfileEdu(educations: IEducation[]) {
  const { data } = await axios.post(`${apiUrl}/profile/edu`, educations);
  return data;
}

export async function delProfileEdu(index: number) {
  const { data } = await axios.delete(`${apiUrl}/profile/edu`, {
    params: { eduOrder: index },
  });
  return data;
}
