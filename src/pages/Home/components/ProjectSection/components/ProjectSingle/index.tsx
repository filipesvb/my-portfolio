import CardTitle from '../../../../../../components/CardTitle';

type Project = {
  title: string,
  description: string,
  image: string
}

const ProjectSingle = ({title, description, image}: Project) => {
  return (
    <div className='w-200 max-w-[300px]'>
      <div className='h-150 border-2'>
        {/* <img src={"image"} className='w-full' /> */}
      </div>
      <CardTitle>{title}</CardTitle>
      <p className='whitespace-wrap w-full'>{description}</p>
    </div>
  )
}

export default ProjectSingle;