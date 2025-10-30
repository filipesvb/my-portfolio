import { useState } from 'react';
import DownArrow from '../icons/DownArrow.jsx';
import { supportedLngs } from '../../i18n.js'
import styles from './LanguageSelect.module.css'

const LanguageSelect = ({ selectedOption, selectOption }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleButtonClick = () => {
    setIsOpen(!isOpen);
  };

  const handleSelectOption = (option) => {
    selectOption(option);
    setIsOpen(false);
  };

  return (
    <div className="flex items-center relative">
      <span>{selectedOption.toUpperCase()}</span>
      <button onClick={handleButtonClick} className='cursor-pointer'>
        <DownArrow />
      </button>
      {isOpen && (
        <div className="bg-[#171523] border-1 rounded-md overflow-hidden border-white text-black absolute z-100 top-8 w-15 h-auto">
          <ul className="flex-col flex items-center">
            {supportedLngs.map((language) => (
              <li
                className={`cursor-pointer select-none text-center text-white w-full ${styles.selectable} py-3`}
                onClick={() => {
                  handleSelectOption(language);
                }}
              >
                <span>
                  {language.toUpperCase()}
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default LanguageSelect;
