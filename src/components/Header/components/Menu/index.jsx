import { Link } from 'react-router';
import ListItem from '../ListItem';
import { useTranslation } from 'react-i18next'

const menuOptions = ['PROJETOS', 'SOBRE', 'CONTATO'];

const Menu = () => {

  const { t } = useTranslation()

  return (
    <nav className="">
      <ul className="flex gap-10">
        <ListItem key={'inicio'}>
          <Link to={`/`}>{t('home_inicio')}</Link>
        </ListItem>
        {menuOptions.map((opt, i) => (
          <ListItem key={i}>
            <Link to={`/${opt.toLowerCase()}`}>{t(`home_${opt.toLowerCase()}`)}</Link>
          </ListItem>)
        )}
      </ul>
    </nav>
  );
};

export default Menu;
