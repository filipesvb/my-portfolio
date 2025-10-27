import { Link } from 'react-router';
import ListItem from '../ListItem';

const menuOptions = ['PROJETOS', 'SOBRE', 'CONTATO'];

const Menu = () => {
  return (
    <nav className="">
      <ul className=  "flex gap-10">
        <ListItem key={'inicio'}>
          <Link to={`/`}>INICIO</Link>
        </ListItem>
        {menuOptions.map((opt, i) => (
          <ListItem key={i}>
            <Link to={`/${opt.toLowerCase()}`}>{opt}</Link>
          </ListItem>)
        )}
      </ul>
    </nav>
  );
};

export default Menu;
