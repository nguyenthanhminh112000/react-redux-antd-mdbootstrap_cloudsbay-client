import { Link } from 'react-router-dom';
console.log('UserNav outside');
const UserNav = () => {
  console.log('UserNav inside');
  return (
    <nav>
      {console.log('UserNav inside return')}
      <ul className='nav flex-column'>
        <li className='nav-item'>
          <Link to='/user/history' className='nav-link'>
            History
          </Link>
        </li>
        <li className='nav-item'>
          <Link to='/user/password' className='nav-link'>
            Password
          </Link>
        </li>
        <li className='nav-item'>
          <Link to='/user/wishlist' className='nav-link'>
            Wishlist
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default UserNav;
