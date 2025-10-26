import Wrapper from '../Wrapper';
import LanguageSelect from '../LanguageSelect';
import { useState } from 'react';
import SocialList from './components/SocialList';
import Menu from './components/Menu';

const Header = () => {
  const [language, setLanguage] = useState('PT');

  const changeLanguage = (language) => {
    setLanguage(language);
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
