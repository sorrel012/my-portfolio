import { useState } from 'react';
import {
  Button,
  MainTitle,
  Save,
  Table,
  TableButton,
  Th,
} from '../../../pages/admin/AdminProfile.tsx';
import { Projects } from '../../../pages/admin/AdminProjects.tsx';

export interface IProjectTbShooting {
  projectName: string;
  projectError: string;
  projectSolution: string;
  projectTbOrder: number;
}

function AdminProjectTbShooting() {
  const [projectTbShootings, setProjectTbShootings] = useState<
    IProjectTbShooting[]
  >([]);

  const addRow = () => {
    setProjectTbShootings([
      ...projectTbShootings,
      {
        projectName: '',
        projectError: '',
        projectSolution: '',
        projectTbOrder: 1,
      },
    ]);
  };

  const removeRow = (index: number) => {
    setProjectTbShootings(projectTbShootings.filter((_, i) => i !== index));
  };

  const onChange = (index: number, label: string, value: string | number) => {
    const updatedProjectTbShootings = projectTbShootings.map(
      (tbShooting, i) => {
        if (i === index) {
          return { ...tbShooting, [label]: value };
        }
        return tbShooting;
      },
    );
    setProjectTbShootings(updatedProjectTbShootings);
  };

  return (
    <Projects>
      <MainTitle>프로젝트 트러블 슈팅</MainTitle>
      <TableButton onClick={() => addRow(Categories.PROJECT_TROUBLE_SHOOTING)}>
        +
      </TableButton>
      <Table>
        <thead>
          <tr>
            <Th>프로젝트명</Th>
            <Th>에러</Th>
            <Th>해결</Th>
            <Th>정렬</Th>
            <Th>🗑</Th>
          </tr>
        </thead>
        <tbody>
          {projectTbShootings.map((tbShooting, index) => (
            <tr key={index}>
              <td>
                <input
                  type="text"
                  value={tbShooting.projectName}
                  onChange={(e) =>
                    onChange(
                      Categories.PROJECT_TROUBLE_SHOOTING,
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
                  value={tbShooting.projectError}
                  onChange={(e) =>
                    onChange(
                      Categories.PROJECT_TROUBLE_SHOOTING,
                      index,
                      'projectError',
                      e.target.value,
                    )
                  }
                />
              </td>
              <td>
                <input
                  type="text"
                  value={tbShooting.projectSolution}
                  onChange={(e) =>
                    onChange(
                      Categories.PROJECT_TROUBLE_SHOOTING,
                      index,
                      'projectSolution',
                      e.target.value,
                    )
                  }
                />
              </td>
              <td>
                <input
                  type="number"
                  value={tbShooting.projectTbOrder}
                  onChange={(e) =>
                    onChange(
                      Categories.PROJECT_TROUBLE_SHOOTING,
                      index,
                      'projectTbOrder',
                      e.target.value,
                    )
                  }
                />
              </td>
              <td>
                <TableButton
                  onClick={() =>
                    removeRow(Categories.PROJECT_TROUBLE_SHOOTING, index)
                  }
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

export default AdminProjectTbShooting;
