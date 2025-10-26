import { useState } from 'react';
import DownArrow from '../icons/DownArrow.jsx';

const options = ['PT', 'EN'];

const LanguageSelect = ({ selectedOption = 'PT', selectOption }) => {
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
      <span>{selectedOption}</span>
      <button onClick={handleButtonClick}>
        <DownArrow />
      </button>
      {isOpen && (
        <div className="bg-white text-black absolute top-8 w-10">
          <ul className="flex-col flex items-center">
            {options.map((language) => (
              <li
                onClick={() => {
                  handleSelectOption(language);
                }}
              >
                {language}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default LanguageSelect;
