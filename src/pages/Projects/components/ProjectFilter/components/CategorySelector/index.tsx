import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { Check, ChevronsUpDown, XIcon } from "lucide-react";
import { useEffect, useState } from "react";

const CategorySelector = ({
  onSelect,
  tags,
  text,
}: {
  onSelect: (value: string) => void;
  tags: Map<string, { label: string, value: string }>,
  text: {placeholder: string, searchText: string, notFound: string};
}) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

  useEffect(() => {
     onSelect(value);
  }, [value])

  return (
    <div className="border rounded-lg w-auto h-full flex items-center pr-2">
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              role="combobox"
              aria-expanded={open}
              className="justify-between items-center h-full bg-transparent"
            >
              {value
                ? Array.from(tags).find((tag) => tag[1].value === value)?.[1].label
                : text.placeholder}
              <ChevronsUpDown className="opacity-50" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-[200px] p-0">
            <Command>
              <CommandInput placeholder={text.searchText} className="h-9" />
              <CommandList>
                <CommandEmpty>{text.notFound}</CommandEmpty>
                <CommandGroup>
                  {Array.from(tags).map((tag) => (
                    <CommandItem
                      key={tag[1].value}
                      value={tag[1].value}
                      onSelect={(currentValue) => {
                        setValue(currentValue === value ? "" : currentValue);
                        setOpen(false);
                      }}
                    >
                      {tag[1].label}
                      <Check
                        className={cn(
                          "ml-auto",
                          value === tag[1].value ? "opacity-100" : "opacity-0",
                        )}
                      />
                    </CommandItem>
                  ))}
                </CommandGroup>
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>
        { value && (
            <button 
              onClick={() => setValue('')}
              className="cursor-pointer"
            >
              <XIcon />
            </button>
          )
        }
    </div>
  );
};

export default CategorySelector;
