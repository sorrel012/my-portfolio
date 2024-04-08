import axios from 'axios';
import { ICertification } from '../components/admin/profile/AdminProfileCert.tsx';
import { IEducation } from '../components/admin/profile/AdminProfileEdu.tsx';
import { ICareer } from '../components/admin/profile/AdminProfileCareer.tsx';
import { ICareerProject } from '../components/admin/profile/AdminProfileCareerProject.tsx';
import { ICareerWork } from '../components/admin/profile/AdminProfileCareerWork.tsx';
import { ISkills } from '../pages/admin/AdminSkills.tsx';

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

export async function getProfileCareer() {
  const { data } = await axios.get(`${apiUrl}/profile/career`);
  return data.result;
}

export async function saveProfileCareer(careers: ICareer[]) {
  const { data } = await axios.post(`${apiUrl}/profile/career`, careers);
  return data;
}

export async function delProfileCareer(index: number) {
  const { data } = await axios.delete(`${apiUrl}/profile/career`, {
    params: { careerOrder: index },
  });
  return data;
}

export async function getProfileCareerProject() {
  const { data } = await axios.get(`${apiUrl}/profile/career-project`);
  return data.result;
}

export async function saveProfileCareerProject(
  careerProjects: ICareerProject[],
) {
  const { data } = await axios.post(
    `${apiUrl}/profile/career-project`,
    careerProjects,
  );
  return data;
}

export async function delProfileCareerProject(index: number) {
  const { data } = await axios.delete(`${apiUrl}/profile/career-project`, {
    params: { careerProjectOrder: index },
  });
  return data;
}

export async function getProfileCareerWork() {
  const { data } = await axios.get(`${apiUrl}/profile/career-work`);
  return data.result;
}

export async function saveProfileCareerWork(careerWorks: ICareerWork[]) {
  const { data } = await axios.post(
    `${apiUrl}/profile/career-work`,
    careerWorks,
  );
  return data;
}

export async function delProfileCareerWork(index: number) {
  const { data } = await axios.delete(`${apiUrl}/profile/career-work`, {
    params: { careerWorkOrder: index },
  });
  return data;
}

export async function getClientSkills() {
  const { data } = await axios.get(`${apiUrl}/skills/client`);
  return data.result;
}

export async function saveClientSkills(clientSkills: ISkills[]) {
  const { data } = await axios.post(`${apiUrl}/skills/client`, clientSkills);
  return data;
}

export async function delClientSkills(index: number) {
  const { data } = await axios.delete(`${apiUrl}/skills/client`, {
    params: { fileOrder: index },
  });
  return data;
}

export async function getServerSkills() {
  const { data } = await axios.get(`${apiUrl}/skills/server`);
  return data.result;
}

export async function saveServerSkills(serverSkills: ISkills[]) {
  const { data } = await axios.post(`${apiUrl}/skills/server`, serverSkills);
  return data;
}

export async function delServerSkills(index: number) {
  const { data } = await axios.delete(`${apiUrl}/skills/server`, {
    params: { fileOrder: index },
  });
  return data;
}

export async function getToolSkills() {
  const { data } = await axios.get(`${apiUrl}/skills/tool`);
  return data.result;
}

export async function saveToolSkills(tools: ISkills[]) {
  const { data } = await axios.post(`${apiUrl}/skills/tool`, tools);
  return data;
}

export async function delToolSkills(index: number) {
  const { data } = await axios.delete(`${apiUrl}/skills/tool`, {
    params: { fileOrder: index },
  });
  return data;
}
