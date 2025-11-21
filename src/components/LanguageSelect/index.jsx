import { useState } from "react";
import { supportedLngs } from "../../i18n.js";
import styles from "./LanguageSelect.module.css";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "../ui/dropdown-menu.js";

import { Button } from "../ui/button.js";
import { ChevronDown } from "lucide-react";

const LanguageSelect = ({ selectedOption, selectOption }) => {
  const handleSelectOption = (option) => {
    selectOption(option);
  };

  return (
    <div className="flex items-center relative ">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant={"outline"}
            className=" focus:text-black cursor-pointer group"
          >
            <div className="flex items-center gap-2">
              <span className="group-hover:text-background">
                {selectedOption.toUpperCase()}
              </span>
              <ChevronDown className="group-hover:stroke-black" />
            </div>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          className="border rounded-xl overflow-hidden p-0 bg-background"
          side="bottom"
        >
          <ul className="flex-col flex items-center ">
            {supportedLngs.map((language) => (
              <DropdownMenuItem
                asChild
                className="hover:bg-transparent hover:text-inherit focus:bg-transparent focus:text-inherit rounded-none"
              >
                <li
                  className={`select-none text-center text-white w-full  ${styles.selectable} `}
                >
                  <button
                    className="cursor-pointer py-3 px-4 w-full"
                    onClick={() => {
                      handleSelectOption(language);
                    }}
                  >
                    <span>{language.toUpperCase()}</span>
                  </button>
                </li>
              </DropdownMenuItem>
            ))}
          </ul>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default LanguageSelect;
