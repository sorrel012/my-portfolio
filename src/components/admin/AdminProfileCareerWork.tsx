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

interface ICareerWork {
  careerProjectName: string;
  careerWorkContent: string;
  careerWorkOrder: number;
}

function AdminProfileCareerWork() {
  const [careerWork, setCareerWork] = useState<ICareerWork[]>([]);

  const addRow = () => {
    setCareerWork([
      ...careerWork,
      { careerProjectName: '', careerWorkContent: '', careerWorkOrder: 1 },
    ]);
  };

  const removeRow = (index: number) => {
    setCareerWork(careerWork.filter((_, i) => i !== index));
  };

  const onChange = (index: number, label: string, value: string | number) => {
    const updatedCareerWork = careerWork.map((work, i) => {
      if (i === index) {
        return { ...work, [label]: value };
      }
      return work;
    });
    setCareerWork(updatedCareerWork);
  };

  return (
    <Profile>
      <MainTitle>업무</MainTitle>
      <TableButton onClick={addRow}>+</TableButton>
      <Table>
        <thead>
          <tr>
            <Th>프로젝트명</Th>
            <Th>업무내용</Th>
            <Th>정렬</Th>
            <Th>🗑</Th>
          </tr>
        </thead>
        <tbody>
          {careerWork.map((work, index) => (
            <tr key={index}>
              <td>
                <input
                  type="text"
                  value={work.careerProjectName}
                  onChange={(e) =>
                    onChange(index, 'careerProjectName', e.target.value)
                  }
                />
              </td>
              <td>
                <input
                  type="text"
                  value={work.careerWorkContent}
                  onChange={(e) =>
                    onChange(index, 'careerWorkContent', e.target.value)
                  }
                />
              </td>
              <td>
                <input
                  type="number"
                  value={work.careerWorkOrder}
                  onChange={(e) =>
                    onChange(index, 'careerWorkOrder', e.target.value)
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

export default AdminProfileCareerWork;
