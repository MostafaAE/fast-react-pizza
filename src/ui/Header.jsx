import { Link } from 'react-router-dom';
import SearchOrder from '../features/orders/SearchOrder';

function Header() {
  return (
    <header>
      <Link to={'/'}>Fast React Pizza Co.</Link>
      <SearchOrder />
      <p>Mostafa</p>
    </header>
  );
}

export default Header;
