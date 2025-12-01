import CardTitle from "@/components/CardTitle";

interface ServiceSingleProps {
  title: string,
  description: string,
  image: string
}

const ServiceSingle = ({title, description, image}: ServiceSingleProps) => {
  return (
    <div className="flex-1">
      <div className=" w-full h-100 ">
        <img src={image} alt={title} className="object-cover object-center h-full w-full" />
      </div>
      <CardTitle className="text-foreground">{title}</CardTitle>
      <p className="text-muted-foreground">{description}</p>
    </div>
  )
}

export default ServiceSingle;