import SearchInput from "@/components/SearchInput";
import { useTranslation } from "react-i18next";
import CategorySelector from "./components/CategorySelector";

interface ProjectFilterProps {
  onSearch: (value: string) => void;
  tags: Set<string>[]
}

const ProjectFilter = ({onSearch, tags}: ProjectFilterProps) => {

  const { t } = useTranslation('projects')

  
  return (
    <div className="rounded-lg border-1 w-full h-15 mt-6 flex items-center px-2 py-2 gap-4" >
      <SearchInput onSearch={onSearch} placeholder={t('filter.search.placeholder')} />
      <CategorySelector tags={tags} />
    </div>
  )
}

export default ProjectFilter;