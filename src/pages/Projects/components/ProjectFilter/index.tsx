import SearchInput from "@/components/SearchInput";
import { useTranslation } from "react-i18next";

interface ProjectFilterProps {
  onSearch: (value: string) => void
}

const ProjectFilter = ({onSearch}: ProjectFilterProps) => {

  const { t } = useTranslation('projects')

  
  return (
    <div className="rounded-lg border-1 w-full h-15 mt-6 flex items-center px-2" >
      <SearchInput onSearch={onSearch} placeholder={t('filter.search.placeholder')} />
    </div>
  )
}

export default ProjectFilter;