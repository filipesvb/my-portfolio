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
    <div className="relative flex items-center">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant={"outline"}
            className="focus:text-foreground border-foreground hover:bg-foreground dark:hover:bg-foreground group cursor-pointer"
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
          className="border-foreground bg-background overflow-hidden rounded-xl p-0"
          side="bottom"
        >
          <ul className="flex flex-col items-center">
            {supportedLngs.map((language, i) => (
              <div key={language} className="w-full">
                <DropdownMenuItem
                  asChild
                  className="rounded-none p-0 hover:bg-transparent hover:text-inherit focus:bg-transparent focus:text-inherit"
                >
                  <li
                    className={`group w-full select-none flex-col text-center`}
                  >
                    <button
                      className="group-hover:bg-foreground hover:text-background w-full cursor-pointer px-4 py-3 transition-colors duration-200"
                      onClick={() => {
                        handleSelectOption(language);
                      }}
                    >
                      <span className="text-foreground group-hover:text-background">
                        {language.toUpperCase()}
                      </span>
                    </button>
                  </li>
                </DropdownMenuItem>
                {i !== supportedLngs.length - 1 && (
                  <div className="flex w-full justify-center text-red-400">
                    <hr className="border-t-muted-foreground w-10/10 text-red-300" />
                  </div>
                )}
              </div>
            ))}
          </ul>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default LanguageSelect;
