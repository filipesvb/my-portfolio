import HoverableWithBall from '@/components/HoverableWithBall';
import CardTitle from '../../../../../../components/CardTitle';

type Project = {
  title: string,
  description: string,
  image: string
}

const ProjectSingle = ({title, description, image}: Project) => {
  return (
    <div className='w-200 max-w-[300px]'>
      <div className=''>
        <HoverableWithBall ballText='Veja mais' className='overflow-hidden'>
          <div className='h-150 border-2'>
            {/* <img src={"image"} className='w-full' /> */}
          </div>
        </HoverableWithBall>
      </div>
      <CardTitle>{title}</CardTitle>
      <p className='whitespace-wrap w-full'>{description}</p>
    </div>
  )
}

export default ProjectSingle;