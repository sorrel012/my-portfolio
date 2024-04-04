import styled from 'styled-components';
import {
  Button,
  MainTitle,
  Save,
  Table,
  TableButton,
  Th,
} from './AdminProfile.tsx';
import { useState } from 'react';

const Wrapper = styled.main`
  background-color: ${(props) => props.theme.admin.bgColor};
  width: 75vw;
  height: 100vh;
  padding: 3%;
  overflow-y: auto;
`;

const Projects = styled.section`
  background-color: ${(props) => props.theme.admin.wrapperBgColor};
  border: 1px solid ${(props) => props.theme.admin.wrapperBorderColor};
  border-radius: 5px;
  color: ${(props) => props.theme.admin.textColor};
  padding: 3%;
  margin-bottom: 3%;
`;

enum Categories {
  PROJECT = 'project',
  PROJECT_FUNCTION = 'function',
  PROJECT_TROUBLE_SHOOTING = 'troubleShooting',
}

interface IProject {
  projectName: string;
  projectPeriodCnt: string;
  projectFrontSkills: string;
  projectBackSkills: string;
  projectPic: string;
  projectOrder: number;
}

interface IProjectFn {
  projectName: string;
  projectFnContent: string;
  projectFnTitle: string;
  projectFnOrder: number;
}

interface IProjectTbShooting {
  projectName: string;
  projectError: string;
  projectSolution: string;
  projectTbOrder: number;
}

function AdminProjects() {
  const [projects, setProjects] = useState<IProject[]>([]);
  const [projectFns, setProjectFns] = useState<IProjectFn[]>([]);
  const [projectTbShootings, setProjectTbShootings] = useState<
    IProjectTbShooting[]
  >([]);

  const addRow = (type: string) => {
    switch (type) {
      case Categories.PROJECT:
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
        break;
      case Categories.PROJECT_FUNCTION:
        setProjectFns([
          ...projectFns,
          {
            projectName: '',
            projectFnContent: '',
            projectFnTitle: '',
            projectFnOrder: 1,
          },
        ]);
        break;
      case Categories.PROJECT_TROUBLE_SHOOTING:
        setProjectTbShootings([
          ...projectTbShootings,
          {
            projectName: '',
            projectError: '',
            projectSolution: '',
            projectTbOrder: 1,
          },
        ]);
        break;
    }
  };

  const removeRow = (type: string, index: number) => {
    switch (type) {
      case Categories.PROJECT:
        setProjects(projects.filter((_, i) => i !== index));
        break;
      case Categories.PROJECT_FUNCTION:
        setProjectFns(projectFns.filter((_, i) => i !== index));
        break;
      case Categories.PROJECT_TROUBLE_SHOOTING:
        setProjectTbShootings(projectTbShootings.filter((_, i) => i !== index));
        break;
    }
  };

  const onChange = (
    type: string,
    index: number,
    label: string,
    value: string | number,
  ) => {
    switch (type) {
      case Categories.PROJECT:
        const updatedProjects = projects.map((project, i) => {
          if (i === index) {
            return { ...project, [label]: value };
          }
          return project;
        });
        setProjects(updatedProjects);
        break;
      case Categories.PROJECT_FUNCTION:
        const updatedProjectFns = projectFns.map((fn, i) => {
          if (i === index) {
            return { ...fn, [label]: value };
          }
          return fn;
        });
        setProjectFns(updatedProjectFns);
        break;
      case Categories.PROJECT_TROUBLE_SHOOTING:
        const updatedProjectTbShootings = projectTbShootings.map(
          (tbShooting, i) => {
            if (i === index) {
              return { ...tbShooting, [label]: value };
            }
            return tbShooting;
          },
        );
        setProjectTbShootings(updatedProjectTbShootings);
        break;
    }
  };

  return (
    <Wrapper>
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
                    onClick={() =>
                      removeRow(Categories.PROJECT_FUNCTION, index)
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
      <Projects>
        <MainTitle>프로젝트 트러블 슈팅</MainTitle>
        <TableButton
          onClick={() => addRow(Categories.PROJECT_TROUBLE_SHOOTING)}
        >
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
    </Wrapper>
  );
}

export default AdminProjects;
