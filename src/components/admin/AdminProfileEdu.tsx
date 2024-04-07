import {
  Button,
  MainTitle,
  Profile,
  Save,
  Table,
  TableButton,
  Th,
} from '../../pages/admin/AdminProfile.tsx';
import { useState } from 'react';

interface IEducation {
  eduPeriod: string;
  eduContent: string;
  eduCategory: string;
  eduOrder: number;
}

function AdminProfileEdu() {
  const [educations, setEducations] = useState<IEducation[]>([]);

  const addRow = () => {
    setEducations([
      ...educations,
      { eduPeriod: '', eduContent: '', eduCategory: '', eduOrder: 1 },
    ]);
  };

  const removeRow = (index: number) => {
    setEducations(educations.filter((_, i) => i !== index));
  };

  const onChange = (index: number, label: string, value: string | number) => {
    const updatedEducations = educations.map((education, i) => {
      if (i === index) {
        return { ...education, [label]: value };
      }
      return education;
    });
    setEducations(updatedEducations);
  };

  return (
    <Profile>
      <MainTitle>교육</MainTitle>
      <TableButton onClick={addRow}>+</TableButton>
      <Table>
        <thead>
          <tr>
            <Th>기간</Th>
            <Th>내용</Th>
            <Th>카테고리</Th>
            <Th>정렬</Th>
            <Th>🗑</Th>
          </tr>
        </thead>
        <tbody>
          {educations.map((education, index) => (
            <tr key={index}>
              <td>
                <input
                  type="text"
                  value={education.eduPeriod}
                  onChange={(e) => onChange(index, 'eduPeriod', e.target.value)}
                />
              </td>
              <td>
                <input
                  type="text"
                  value={education.eduContent}
                  onChange={(e) =>
                    onChange(index, 'eduContent', e.target.value)
                  }
                />
              </td>
              <td>
                <input
                  type="text"
                  value={education.eduCategory}
                  onChange={(e) =>
                    onChange(index, 'eduCategory', e.target.value)
                  }
                />
              </td>
              <td>
                <input
                  type="number"
                  value={education.eduOrder}
                  onChange={(e) => onChange(index, 'eduOrder', e.target.value)}
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

export default AdminProfileEdu;
