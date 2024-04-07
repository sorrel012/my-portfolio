import { useState } from 'react';
import {
  Button,
  MainTitle,
  Profile,
  Save,
  Table,
  TableButton,
  Th,
} from '../../pages/admin/AdminProfile.tsx';

interface ICareerProject {
  careerCompany: string;
  careerProjectName: string;
  careerProjectOrder: number;
}

function AdminProfileCareerProject() {
  const [careerProject, setCareerProject] = useState<ICareerProject[]>([]);

  const addRow = () => {
    setCareerProject([
      ...careerProject,
      { careerCompany: '', careerProjectName: '', careerProjectOrder: 1 },
    ]);
  };

  const removeRow = (index: number) => {
    setCareerProject(careerProject.filter((_, i) => i !== index));
  };

  const onChange = (index: number, label: string, value: string | number) => {
    const updatedCareerProject = careerProject.map((project, i) => {
      if (i === index) {
        return { ...project, [label]: value };
      }
      return project;
    });
    setCareerProject(updatedCareerProject);
  };

  return (
    <Profile>
      <MainTitle>회사 프로젝트</MainTitle>
      <TableButton onClick={addRow}>+</TableButton>
      <Table>
        <thead>
          <tr>
            <Th>회사명</Th>
            <Th>프로젝트명</Th>
            <Th>정렬</Th>
            <Th>🗑</Th>
          </tr>
        </thead>
        <tbody>
          {careerProject.map((project, index) => (
            <tr key={index}>
              <td>
                <input
                  type="text"
                  value={project.careerCompany}
                  onChange={(e) =>
                    onChange(index, 'careerCompany', e.target.value)
                  }
                />
              </td>
              <td>
                <input
                  type="text"
                  value={project.careerProjectName}
                  onChange={(e) =>
                    onChange(index, 'careerProjectName', e.target.value)
                  }
                />
              </td>
              <td>
                <input
                  type="number"
                  value={project.careerProjectOrder}
                  onChange={(e) =>
                    onChange(index, 'careerProjectOrder', e.target.value)
                  }
                />
              </td>
              <td>
                <TableButton onClick={() => removeRow(index)}>-</TableButton>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Save>
        <Button>저장</Button>
      </Save>
    </Profile>
  );
}

export default AdminProfileCareerProject;
