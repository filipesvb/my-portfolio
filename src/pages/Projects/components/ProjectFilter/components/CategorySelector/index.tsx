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
  tags: Map<string, { label: string; value: string }>;
  text: { placeholder: string; searchText: string; notFound: string };
}) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

  useEffect(() => {
    onSelect(value);
  }, [value]);

  return (
    <div className="  w-auto h-full flex   items-center w-full">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <div className="flex border rounded-lg ">
            <Button
              role="combobox"
              aria-expanded={open}
              className=" items-center h-full bg-transparent flex border-none "
            >
              <span className="truncate  overflow-hidden">
                {value ? tags.get(value)?.label : text.placeholder}
              </span>
              <ChevronsUpDown className="opacity-50 " />
            </Button>
            {value && (
              <button
                onClick={() => setValue("")}
                className="cursor-pointer px-2"
              >
                <XIcon />
              </button>
            )}
          </div>
        </PopoverTrigger>
        <PopoverContent className="min-w-30 p-0 border-2 ">
          <Command className="bg-[#171523]">
            <CommandInput
              placeholder={text.searchText}
              className="h-9 bg-transparent text-white truncate"
            />
            <CommandList>
              <CommandEmpty className="text-center py-3 text-white">
                {text.notFound}
              </CommandEmpty>
              <CommandGroup>
                {Array.from(tags).map((tag) => (
                  <CommandItem
                    className="text-white"
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
    </div>
  );
};

export default CategorySelector;
