import {
  Button,
  MainTitle,
  Save,
  TableButton,
  Th,
} from '../../../pages/admin/AdminProfile.tsx';
import { ISkills, Skills, Table } from '../../../pages/admin/AdminSkills.tsx';
import { useState } from 'react';

function AdminSkillsServer() {
  const [serverSkills, setServerSkills] = useState<ISkills[]>([]);

  const addRow = () => {
    setServerSkills([...serverSkills, { fileName: '', fileOrder: 1 }]);
  };

  const removeRow = (index: number) => {
    setServerSkills(serverSkills.filter((_, i) => i !== index));
  };

  const onChange = (index: number, label: string, value: string | number) => {
    const updatedServerSkills = serverSkills.map((skill, i) => {
      if (i === index) {
        return { ...skill, [label]: value };
      }
      return skill;
    });
    setServerSkills(updatedServerSkills);
  };

  return (
    <Skills>
      <MainTitle>SERVER</MainTitle>
      <TableButton onClick={addRow}>+</TableButton>
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
                  onChange={(e) => onChange(index, 'fileName', e.target.value)}
                />
              </td>
              <td>
                <input
                  type="number"
                  value={server.fileOrder}
                  onChange={(e) => onChange(index, 'fileOrder', e.target.value)}
                />
              </td>
              <td>
                <TableButton onClick={() => removeRow(server.fileOrder)}>
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
  );
}

export default AdminSkillsServer;
