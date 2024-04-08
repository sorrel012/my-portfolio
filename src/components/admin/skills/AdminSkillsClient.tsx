import {
  Button,
  MainTitle,
  Save,
  TableButton,
  Th,
} from '../../../pages/admin/AdminProfile.tsx';
import { ISkills, Skills, Table } from '../../../pages/admin/AdminSkills.tsx';
import { useState } from 'react';

function AdminSkillsClient() {
  const [clientSkills, setClientSkills] = useState<ISkills[]>([]);

  const addRow = () => {
    setClientSkills([...clientSkills, { fileName: '', fileOrder: 1 }]);
  };

  const removeRow = (index: number) => {
    setClientSkills(clientSkills.filter((_, i) => i !== index));
  };

  const onChange = (index: number, label: string, value: string | number) => {
    const updatedClientSkills = clientSkills.map((skill, i) => {
      if (i === index) {
        return { ...skill, [label]: value };
      }
      return skill;
    });
    setClientSkills(updatedClientSkills);
  };

  return (
    <Skills>
      <MainTitle>CLIENT</MainTitle>
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
          {clientSkills.map((client, index) => (
            <tr key={index}>
              <td>
                <input
                  type="text"
                  value={client.fileName}
                  onChange={(e) => onChange(index, 'fileName', e.target.value)}
                />
              </td>
              <td>
                <input
                  type="number"
                  value={client.fileOrder}
                  onChange={(e) => onChange(index, 'fileOrder', e.target.value)}
                />
              </td>
              <td>
                <TableButton onClick={() => removeRow(client.fileOrder)}>
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

export default AdminSkillsClient;
