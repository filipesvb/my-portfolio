import { Link } from 'react-router';
import ListItem from '../ListItem';

const Menu = () => {
  return (
    <nav className="">
      <ul className="flex gap-10">
        <ListItem>
          <Link to={'/'}>Inicio</Link>
        </ListItem>
        <ListItem>
          <Link to={'/projetos'}>Projetos</Link>
        </ListItem>
        <ListItem>
          <Link to={'/sobre'}>Sobre</Link>
        </ListItem>
        <ListItem>
          <Link to={'/contato'}>Contato</Link>
        </ListItem>
      </ul>
    </nav>
  );
};

export default Menu;
