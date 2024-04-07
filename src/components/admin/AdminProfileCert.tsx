import {
  Button,
  MainTitle,
  Profile,
  Save,
  Table,
  TableButton,
  Th,
} from '../../pages/admin/AdminProfile.tsx';
import { useEffect, useState } from 'react';
import { useMutation, useQuery } from '@tanstack/react-query';
import {
  delProfileCert,
  getProfileCert,
  saveProfileCert,
} from '../../util/api.ts';
import Swal from 'sweetalert2';
import { queryClient } from '../../index.tsx';

interface ICertification {
  certName: string;
  certDate: string;
  certScore: string;
  certOrder: number;
}

function AdminProfileCert() {
  const [certifications, setCertifications] = useState<ICertification[]>([]);
  const { data, isLoading } = useQuery({
    queryKey: ['profileCert'],
    queryFn: getProfileCert,
  });

  useEffect(() => {
    if (!isLoading && data) {
      setCertifications(data);
    }
  }, [data, isLoading]);

  const { mutate } = useMutation({
    mutationFn: saveProfileCert,
    onSuccess: () => {
      Swal.fire({
        title: '✅',
        text: '저장에 성공했습니다.',
      });
      queryClient.invalidateQueries({ queryKey: ['profileCert'] });
    },
    onError: () => {
      Swal.fire({
        title: '❗',
        text: '저장에 실패했습니다.',
      });
    },
  });

  const { mutate: delMutate } = useMutation({
    mutationFn: delProfileCert,
    onSuccess: () => {
      Swal.fire({
        title: '✅',
        text: '삭제에 성공했습니다.',
      });
      queryClient.invalidateQueries({ queryKey: ['profileCert'] });
    },
    onError: () => {
      Swal.fire({
        title: '❗',
        text: '삭제에 실패했습니다.',
      });
    },
  });

  const addRow = () => {
    setCertifications([
      ...certifications,
      { certName: '', certDate: '', certScore: '', certOrder: 1 },
    ]);
  };

  const removeRow = (index: number) => {
    if (!window.confirm('정말 삭제하시겠습니까?')) {
      return;
    }

    setCertifications(
      certifications.filter(
        (certification) => certification.certOrder !== index,
      ),
    );
    delMutate(index);
  };

  const onChange = (index: number, label: string, value: string | number) => {
    const updatedCertifications = certifications.map((certification) => {
      if (certification.certOrder === index) {
        return { ...certification, [label]: value };
      }
      return certification;
    });
    setCertifications(updatedCertifications);
  };

  const onCertSave = () => {
    mutate(certifications);
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
          {!isLoading &&
            certifications.map((certification) => (
              <tr key={certification.certOrder}>
                <td>
                  <input
                    type="text"
                    value={certification.certName}
                    onChange={(e) =>
                      onChange(
                        certification.certOrder,
                        'certName',
                        e.target.value,
                      )
                    }
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={certification.certDate}
                    onChange={(e) =>
                      onChange(
                        certification.certOrder,
                        'certDate',
                        e.target.value,
                      )
                    }
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={certification.certScore}
                    onChange={(e) =>
                      onChange(
                        certification.certOrder,
                        'certScore',
                        e.target.value,
                      )
                    }
                  />
                </td>
                <td>
                  <input
                    type="number"
                    value={certification.certOrder}
                    onChange={(e) =>
                      onChange(
                        certification.certOrder,
                        'certOrder',
                        e.target.value,
                      )
                    }
                  />
                </td>
                <td>
                  <TableButton
                    onClick={() => removeRow(certification.certOrder)}
                  >
                    -
                  </TableButton>
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
      <Save>
        <Button onClick={onCertSave}>저장</Button>
      </Save>
    </Profile>
  );
}

export default AdminProfileCert;
