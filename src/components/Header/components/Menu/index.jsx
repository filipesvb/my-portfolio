import { Link } from 'react-router';
import ListItem from '../ListItem';
import { useTranslation } from 'react-i18next'

const menuOptions = ['PROJETOS', 'SOBRE', 'CONTATO'];

const Menu = ({variant}) => {

  const { t } = useTranslation('header')

  const menuClassName = {
    "footer": "flex flex-col gap-4"
  }

  return (
    <nav className="">
      <ul className={menuClassName[variant] || `flex gap-10`}>
        <ListItem key={'inicio'}>
          <Link to={`/`}>{t('header_inicio')}</Link>
        </ListItem>
        {menuOptions.map((opt, i) => (
          <ListItem key={i}>
            <Link to={`/${opt.toLowerCase()}`}>{t(`header_${opt.toLowerCase()}`)}</Link>
          </ListItem>)
        )}
      </ul>
    </nav>
  );
};

export default Menu;
