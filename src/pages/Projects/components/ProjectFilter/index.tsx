import SearchInput from "@/components/SearchInput";
import { useTranslation } from "react-i18next";
import CategorySelector from "./components/CategorySelector";

interface ProjectFilterProps {
  onSearch: (value: string) => void;
  searchValue: string,
  onSelectCategory: (value: string) => void;
  tags: Map<string, { label: string, value: string }>
}

type CategoryText = {
  placeholder: string,
  searchText: string,
  notFound: string
}

const ProjectFilter = ({onSearch, searchValue, onSelectCategory, tags}: ProjectFilterProps) => {

  const { t } = useTranslation('projects')

  const {placeholder, searchText, notFound } = t('filter.category', {returnObjects: true}) as CategoryText;
  
  return (
    <div className="rounded-lg border-1 w-full h-15 mt-6 flex items-center px-2 py-2 gap-4" >
      <SearchInput onSearch={onSearch} searchValue={searchValue} placeholder={t('filter.search.placeholder')} />
      <CategorySelector onSelect={onSelectCategory} tags={tags} text={{placeholder, searchText, notFound}} />
    </div>
  )
}

export default ProjectFilter;