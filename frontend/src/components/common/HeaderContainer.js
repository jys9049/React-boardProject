import { useSelector, useDispatch } from 'react-redux';
import Header from './Header';
import { logout } from '../../module/user';

const HeaderContainer = () => {
  const { user } = useSelector(({ user }) => ({ user: user.user }));
  const dispatch = useDispatch()
  const onLogout = () => {
    dispatch(logout())
  }
  console.log(user)
  return (
    <>
      <Header user={user} onLogout={onLogout} />
      <div>안녕하세요</div>
    </>
  );
};

export default HeaderContainer;
