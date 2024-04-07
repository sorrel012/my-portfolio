import { useSelector } from 'react-redux';
import { RootState } from '../../store/store.ts';
import Swal from 'sweetalert2';
import { Navigate } from 'react-router-dom';
import { ReactNode } from 'react';

interface AdminPrivateProps {
  children: ReactNode;
}

function AdminPrivate({ children }: AdminPrivateProps) {
  const { name, pic } = useSelector((state: RootState) => state.admin);
  let isAuthenticated = false;

  if (sessionStorage.getItem('isLogin') && name !== '' && pic !== '') {
    isAuthenticated = true;
  }

  if (!isAuthenticated) {
    Swal.fire({
      title: '❗',
      text: '로그인이 필요한 기능입니다.',
    });
    return <Navigate to="/login" replace />;
  }

  return children;
}

export default AdminPrivate;
