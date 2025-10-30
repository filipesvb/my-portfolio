import CardTitle from "@/components/CardTitle";

interface ServiceSingleProps {
  title: string,
  description: string
}

const ServiceSingle = ({title, description}: ServiceSingleProps) => {
  return (
    <div className="flex-1">
      <div className="border-1 border-dotted pt-[100%]"></div>
      <CardTitle>{title}</CardTitle>
      <p>{description}</p>
    </div>
  )
}

export default ServiceSingle;