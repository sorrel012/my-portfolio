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

export interface IProjectFn {
  projectName: string;
  projectFnContent: string;
  projectFnTitle: string;
  projectFnOrder: number;
}

function AdminProjectFn() {
  const [projectFns, setProjectFns] = useState<IProjectFn[]>([]);

  const addRow = () => {
    setProjectFns([
      ...projectFns,
      {
        projectName: '',
        projectFnContent: '',
        projectFnTitle: '',
        projectFnOrder: 1,
      },
    ]);
  };

  const removeRow = (index: number) => {
    setProjectFns(projectFns.filter((_, i) => i !== index));
  };

  const onChange = (index: number, label: string, value: string | number) => {
    const updatedProjectFns = projectFns.map((fn, i) => {
      if (i === index) {
        return { ...fn, [label]: value };
      }
      return fn;
    });
    setProjectFns(updatedProjectFns);
  };

  return (
    <Projects>
      <MainTitle>프로젝트 기능</MainTitle>
      <TableButton onClick={() => addRow(Categories.PROJECT_FUNCTION)}>
        +
      </TableButton>
      <Table>
        <thead>
          <tr>
            <Th>프로젝트명</Th>
            <Th>기능</Th>
            <Th>부제</Th>
            <Th>정렬</Th>
            <Th>🗑</Th>
          </tr>
        </thead>
        <tbody>
          {projectFns.map((fn, index) => (
            <tr key={index}>
              <td>
                <input
                  type="text"
                  value={fn.projectName}
                  onChange={(e) =>
                    onChange(
                      Categories.PROJECT_FUNCTION,
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
                  value={fn.projectFnTitle}
                  onChange={(e) =>
                    onChange(
                      Categories.PROJECT_FUNCTION,
                      index,
                      'projectFnTitle',
                      e.target.value,
                    )
                  }
                />
              </td>
              <td>
                <input
                  type="text"
                  value={fn.projectFnContent}
                  onChange={(e) =>
                    onChange(
                      Categories.PROJECT_FUNCTION,
                      index,
                      'projectFnContent',
                      e.target.value,
                    )
                  }
                />
              </td>
              <td>
                <input
                  type="number"
                  value={fn.projectFnOrder}
                  onChange={(e) =>
                    onChange(
                      Categories.PROJECT_FUNCTION,
                      index,
                      'projectFnOrder',
                      e.target.value,
                    )
                  }
                />
              </td>
              <td>
                <TableButton
                  onClick={() => removeRow(Categories.PROJECT_FUNCTION, index)}
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

export default AdminProjectFn;
