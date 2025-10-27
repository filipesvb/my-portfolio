import Wrapper from '../Wrapper';
import LanguageSelect from '../LanguageSelect';
import { useEffect, useState } from 'react';
import SocialList from './components/SocialList';
import Menu from './components/Menu';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState(i18n.language);

  const changeLanguage = (language) => {
    i18n.changeLanguage(language)
    setLanguage(language)
  };


  return (
    <header className="w-full  py-5">
      <Wrapper>
        <div className="flex justify-between">
          <Menu />
          <div className=" flex gap-4">
            <SocialList />
            <LanguageSelect
              selectedOption={language}
              selectOption={changeLanguage}
            />
          </div>
        </div>
      </Wrapper>
    </header>
  );
};

export default Header;
