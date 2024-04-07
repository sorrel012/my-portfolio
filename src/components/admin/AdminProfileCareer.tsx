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

interface ICareer {
  careerCompany: string;
  careerPeriod: string;
  careerOrder: number;
}

function AdminProfileCareer() {
  const [career, setCareer] = useState<ICareer[]>([]);

  const addRow = () => {
    setCareer([
      ...career,
      { careerCompany: '', careerPeriod: '', careerOrder: 1 },
    ]);
  };
  const removeRow = (index: number) => {
    setCareer(career.filter((_, i) => i !== index));
  };

  const onChange = (index: number, label: string, value: string | number) => {
    const updatedCareer = career.map((career, i) => {
      if (i === index) {
        return { ...career, [label]: value };
      }
      return career;
    });
    setCareer(updatedCareer);
  };

  return (
    <Profile>
      <MainTitle>경력</MainTitle>
      <TableButton onClick={addRow}>+</TableButton>
      <Table>
        <thead>
          <tr>
            <Th>회사명</Th>
            <Th>기간</Th>
            <Th>정렬</Th>
            <Th>🗑</Th>
          </tr>
        </thead>
        <tbody>
          {career.map((career, index) => (
            <tr key={index}>
              <td>
                <input
                  type="text"
                  value={career.careerCompany}
                  onChange={(e) =>
                    onChange(index, 'careerCompany', e.target.value)
                  }
                />
              </td>
              <td>
                <input
                  type="text"
                  value={career.careerPeriod}
                  onChange={(e) =>
                    onChange(index, 'careerPeriod', e.target.value)
                  }
                />
              </td>
              <td>
                <input
                  type="number"
                  value={career.careerOrder}
                  onChange={(e) =>
                    onChange(index, 'careerOrder', e.target.value)
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

export default AdminProfileCareer;
