import {
  Button,
  MainTitle,
  Save,
  TableButton,
  Th,
} from '../../../pages/admin/AdminProfile.tsx';
import { ISkills, Skills, Table } from '../../../pages/admin/AdminSkills.tsx';
import { useState } from 'react';

function AdminSkillsTool() {
  const [tools, setTools] = useState<ISkills[]>([]);

  const addRow = () => {
    setTools([...tools, { fileName: '', fileOrder: 1 }]);
  };

  const removeRow = (index: number) => {
    setTools(tools.filter((_, i) => i !== index));
  };

  const onChange = (index: number, label: string, value: string | number) => {
    const updatedTools = tools.map((tool, i) => {
      if (i === index) {
        return { ...tool, [label]: value };
      }
      return tool;
    });
    setTools(updatedTools);
  };

  return (
    <Skills>
      <MainTitle>TOOL</MainTitle>
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
          {tools.map((tool, index) => (
            <tr key={index}>
              <td>
                <input
                  type="text"
                  value={tool.fileName}
                  onChange={(e) => onChange(index, 'fileName', e.target.value)}
                />
              </td>
              <td>
                <input
                  type="number"
                  value={tool.fileOrder}
                  onChange={(e) => onChange(index, 'fileOrder', e.target.value)}
                />
              </td>
              <td>
                <TableButton onClick={() => removeRow(tool.fileOrder)}>
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

export default AdminSkillsTool;
