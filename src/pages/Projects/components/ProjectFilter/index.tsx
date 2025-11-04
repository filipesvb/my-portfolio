import SearchInput from "@/components/SearchInput";

interface ProjectFilterProps {
  onSearch: (value: string) => void
}

const ProjectFilter = ({onSearch}: ProjectFilterProps) => {
  return (
    <div className="rounded-lg border-1 w-full h-15 mt-6 flex items-center px-2" >
      <SearchInput onSearch={onSearch} />
    </div>
  )
}

export default ProjectFilter;