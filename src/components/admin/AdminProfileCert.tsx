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

interface ICertification {
  certName: string;
  certDate: string;
  certScore: string;
  certOrder: number;
}

function AdminProfileCert() {
  const [certifications, setCertifications] = useState<ICertification[]>([]);

  const addRow = () => {
    setCertifications([
      ...certifications,
      { certName: '', certDate: '', certScore: '', certOrder: 1 },
    ]);
  };

  const removeRow = (index: number) => {
    setCertifications(certifications.filter((_, i) => i !== index));
  };

  const onChange = (index: number, label: string, value: string | number) => {
    const updatedCertifications = certifications.map((certification, i) => {
      if (i === index) {
        return { ...certification, [label]: value };
      }
      return certification;
    });
    setCertifications(updatedCertifications);
  };

  return (
    <Profile>
      <MainTitle>자격증 및 어학</MainTitle>
      <TableButton onClick={addRow}>+</TableButton>
      <Table>
        <thead>
          <tr>
            <Th>이름</Th>
            <Th>날짜</Th>
            <Th>점수</Th>
            <Th>정렬</Th>
            <Th>🗑</Th>
          </tr>
        </thead>
        <tbody>
          {certifications.map((certification, index) => (
            <tr key={index}>
              <td>
                <input
                  type="text"
                  value={certification.certName}
                  onChange={(e) => onChange(index, 'certName', e.target.value)}
                />
              </td>
              <td>
                <input
                  type="text"
                  value={certification.certDate}
                  onChange={(e) => onChange(index, 'certDate', e.target.value)}
                />
              </td>
              <td>
                <input
                  type="text"
                  value={certification.certScore}
                  onChange={(e) => onChange(index, 'certScore', e.target.value)}
                />
              </td>
              <td>
                <input
                  type="number"
                  value={certification.certOrder}
                  onChange={(e) => onChange(index, 'certOrder', e.target.value)}
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

export default AdminProfileCert;
