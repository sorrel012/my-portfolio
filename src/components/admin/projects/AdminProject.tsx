import {
  Button,
  MainTitle,
  Save,
  Table,
  TableButton,
  Th,
} from '../../../pages/admin/AdminProfile.tsx';
import { Projects } from '../../../pages/admin/AdminProjects.tsx';
import { useState } from 'react';

export interface IProject {
  projectName: string;
  projectPeriodCnt: string;
  projectFrontSkills: string;
  projectBackSkills: string;
  projectPic: string;
  projectOrder: number;
}

function AdminProject() {
  const [projects, setProjects] = useState<IProject[]>([]);

  const addRow = () => {
    setProjects([
      ...projects,
      {
        projectName: '',
        projectPeriodCnt: '',
        projectFrontSkills: '',
        projectBackSkills: '',
        projectPic: '',
        projectOrder: 1,
      },
    ]);
  };

  const removeRow = (index: number) => {
    setProjects(projects.filter((_, i) => i !== index));
  };

  const onChange = (index: number, label: string, value: string | number) => {
    const updatedProjects = projects.map((project, i) => {
      if (i === index) {
        return { ...project, [label]: value };
      }
      return project;
    });
    setProjects(updatedProjects);
  };

  return (
    <Projects>
      <MainTitle>프로젝트</MainTitle>
      <TableButton onClick={() => addRow(Categories.PROJECT)}>+</TableButton>
      <Table>
        <thead>
          <tr>
            <Th>프로젝트명</Th>
            <Th>기간/인원</Th>
            <Th>프론트</Th>
            <Th>백</Th>
            <Th>사진</Th>
            <Th>정렬</Th>
            <Th>🗑</Th>
          </tr>
        </thead>
        <tbody>
          {projects.map((project, index) => (
            <tr key={index}>
              <td>
                <input
                  type="text"
                  value={project.projectName}
                  onChange={(e) =>
                    onChange(
                      Categories.PROJECT,
                      index,
                      'projectName',
                      e.target.value,
                    )
                  }
                />
              </td>
              <td>
                <input
                  type="text"
                  value={project.projectPeriodCnt}
                  onChange={(e) =>
                    onChange(
                      Categories.PROJECT,
                      index,
                      'projectPeriodCnt',
                      e.target.value,
                    )
                  }
                />
              </td>
              <td>
                <input
                  type="text"
                  value={project.projectFrontSkills}
                  onChange={(e) =>
                    onChange(
                      Categories.PROJECT,
                      index,
                      'projectFrontSkills',
                      e.target.value,
                    )
                  }
                />
              </td>
              <td>
                <input
                  type="text"
                  value={project.projectBackSkills}
                  onChange={(e) =>
                    onChange(
                      Categories.PROJECT,
                      index,
                      'projectBackSkills',
                      e.target.value,
                    )
                  }
                />
              </td>
              <td>
                <input
                  type="text"
                  value={project.projectPic}
                  onChange={(e) =>
                    onChange(
                      Categories.PROJECT,
                      index,
                      'projectPic',
                      e.target.value,
                    )
                  }
                />
              </td>
              <td>
                <input
                  type="number"
                  value={project.projectOrder}
                  onChange={(e) =>
                    onChange(
                      Categories.PROJECT,
                      index,
                      'projectOrder',
                      e.target.value,
                    )
                  }
                />
              </td>
              <td>
                <TableButton
                  onClick={() => removeRow(Categories.PROJECT, index)}
                >
                  -
                </TableButton>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Save>
        <Button>저장</Button>
      </Save>
    </Projects>
  );
}

export default AdminProject;
