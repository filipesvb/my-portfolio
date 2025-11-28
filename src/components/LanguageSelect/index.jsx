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
            className=" focus:text-foreground cursor-pointer group border-foreground hover:bg-foreground dark:hover:bg-foreground"
          >
            <div className="flex items-center gap-2">
              <span className="group-hover:text-background text-foreground">
                {selectedOption.toUpperCase()}
              </span>
              <ChevronDown className="group-hover:stroke-background stroke-foreground" />
            </div>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          className="border-foreground rounded-xl overflow-hidden p-0 bg-background"
          side="bottom"
        >
          <ul className="flex-col flex items-center">
            {supportedLngs.map((language, i) => (
            <>
            
              <DropdownMenuItem
                asChild
                className="hover:bg-transparent p-0 hover:text-inherit focus:bg-transparent focus:text-inherit rounded-none "
              >
                <li
                  className={`select-none text-center  w-full flex-col group `}
                >
                  <button
                    className="cursor-pointer py-3 px-4 w-full group-hover:bg-foreground hover:text-background transition-colors duration-200 "
                    onClick={() => {
                      handleSelectOption(language);
                    }}
                  >
                    <span className="text-foreground group-hover:text-background">{language.toUpperCase()}</span>
                  </button>
                  
                </li>
              </DropdownMenuItem>
              {i !== supportedLngs.length - 1 && (
                <div className=" text-red-400 w-full flex justify-center">
                  <hr className="text-red-300  border-t-muted-foreground w-10/10 " />
                </div>
              )}
          </>
          
            ))}
          </ul>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default LanguageSelect;
