import styled from 'styled-components';
import { Button, MainTitle, Save, TableButton, Th } from './AdminProfile.tsx';
import { useState } from 'react';

const Wrapper = styled.main`
  background-color: ${(props) => props.theme.admin.bgColor};
  width: 75vw;
  height: 100vh;
  padding: 3%;
  overflow-y: auto;
`;

const Skills = styled.section`
  background-color: ${(props) => props.theme.admin.wrapperBgColor};
  border: 1px solid ${(props) => props.theme.admin.wrapperBorderColor};
  border-radius: 5px;
  color: ${(props) => props.theme.admin.textColor};
  padding: 3%;
  margin-bottom: 3%;
`;

const Table = styled.table`
  width: 100%;
  text-align: center;

  input {
    border: 1px solid ${(props) => props.theme.admin.wrapperBorderColor};
    border-radius: 5px;
    color: ${(props) => props.theme.admin.textColor};
    font-size: 1.8vw;
    padding: 0 10px;
    outline: none;
    font-family: 'SUITE-Regular', sans-serif;
    margin-bottom: 1%;
    width: 95%;
  }
`;

enum Categories {
  CLIENT = 'client',
  SERVER = 'server',
  TOOL = 'tool',
}

interface ISkills {
  fileName: string;
  fileOrder: number;
}

function AdminSkills() {
  const [clientSkills, setClientSkills] = useState<ISkills[]>([]);
  const [serverSkills, setServerSkills] = useState<ISkills[]>([]);
  const [tools, setTools] = useState<ISkills[]>([]);

  const addRow = (type: string) => {
    switch (type) {
      case Categories.CLIENT:
        setClientSkills([...clientSkills, { fileName: '', fileOrder: 1 }]);
        break;
      case Categories.SERVER:
        setServerSkills([...serverSkills, { fileName: '', fileOrder: 1 }]);
        break;
      case Categories.TOOL:
        setTools([...tools, { fileName: '', fileOrder: 1 }]);
        break;
    }
  };

  const removeRow = (type: string, index: number) => {
    switch (type) {
      case Categories.CLIENT:
        setClientSkills(clientSkills.filter((_, i) => i !== index));
        break;
      case Categories.SERVER:
        setServerSkills(serverSkills.filter((_, i) => i !== index));
        break;
      case Categories.TOOL:
        setTools(tools.filter((_, i) => i !== index));
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
      case Categories.CLIENT:
        const updatedClientSkills = clientSkills.map((skill, i) => {
          if (i === index) {
            return { ...skill, [label]: value };
          }
          return skill;
        });
        setClientSkills(updatedClientSkills);
        break;
      case Categories.SERVER:
        const updatedServerSkills = serverSkills.map((skill, i) => {
          if (i === index) {
            return { ...skill, [label]: value };
          }
          return skill;
        });
        setServerSkills(updatedServerSkills);
        break;
      case Categories.TOOL:
        const updatedTools = tools.map((tool, i) => {
          if (i === index) {
            return { ...tool, [label]: value };
          }
          return tool;
        });
        setTools(updatedTools);
        break;
    }
  };

  return (
    <Wrapper>
      <Skills>
        <MainTitle>CLIENT</MainTitle>
        <TableButton onClick={() => addRow(Categories.CLIENT)}>+</TableButton>
        <Table>
          <thead>
            <tr>
              <Th>파일명</Th>
              <Th>정렬</Th>
              <Th>🗑</Th>
            </tr>
          </thead>
          <tbody>
            {clientSkills.map((client, index) => (
              <tr key={index}>
                <td>
                  <input
                    type="text"
                    value={client.fileName}
                    onChange={(e) =>
                      onChange(
                        Categories.CLIENT,
                        index,
                        'fileName',
                        e.target.value,
                      )
                    }
                  />
                </td>
                <td>
                  <input
                    type="number"
                    value={client.fileOrder}
                    onChange={(e) =>
                      onChange(
                        Categories.CLIENT,
                        index,
                        'fileOrder',
                        e.target.value,
                      )
                    }
                  />
                </td>
                <td>
                  <TableButton
                    onClick={() => removeRow(Categories.CLIENT, index)}
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
      </Skills>
      <Skills>
        <MainTitle>SERVER</MainTitle>
        <TableButton onClick={() => addRow(Categories.SERVER)}>+</TableButton>
        <Table>
          <thead>
            <tr>
              <Th>파일명</Th>
              <Th>정렬</Th>
              <Th>🗑</Th>
            </tr>
          </thead>
          <tbody>
            {serverSkills.map((server, index) => (
              <tr key={index}>
                <td>
                  <input
                    type="text"
                    value={server.fileName}
                    onChange={(e) =>
                      onChange(
                        Categories.SERVER,
                        index,
                        'fileName',
                        e.target.value,
                      )
                    }
                  />
                </td>
                <td>
                  <input
                    type="number"
                    value={server.fileOrder}
                    onChange={(e) =>
                      onChange(
                        Categories.SERVER,
                        index,
                        'fileOrder',
                        e.target.value,
                      )
                    }
                  />
                </td>
                <td>
                  <TableButton
                    onClick={() => removeRow(Categories.SERVER, index)}
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
      </Skills>
      <Skills>
        <MainTitle>TOOL</MainTitle>
        <TableButton onClick={() => addRow(Categories.TOOL)}>+</TableButton>
        <Table>
          <thead>
            <tr>
              <Th>파일명</Th>
              <Th>정렬</Th>
              <Th>🗑</Th>
            </tr>
          </thead>
          <tbody>
            {tools.map((tool, index) => (
              <tr key={index}>
                <td>
                  <input
                    type="text"
                    value={tool.fileName}
                    onChange={(e) =>
                      onChange(
                        Categories.TOOL,
                        index,
                        'fileName',
                        e.target.value,
                      )
                    }
                  />
                </td>
                <td>
                  <input
                    type="number"
                    value={tool.fileOrder}
                    onChange={(e) =>
                      onChange(
                        Categories.TOOL,
                        index,
                        'fileOrder',
                        e.target.value,
                      )
                    }
                  />
                </td>
                <td>
                  <TableButton
                    onClick={() => removeRow(Categories.TOOL, index)}
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
      </Skills>
    </Wrapper>
  );
}

export default AdminSkills;
