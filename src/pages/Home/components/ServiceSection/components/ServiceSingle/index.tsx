import CardTitle from "@/components/CardTitle";

interface ServiceSingleProps {
  title: string,
  description: string
}

const ServiceSingle = ({title, description}: ServiceSingleProps) => {
  return (
    <div className="flex-1">
      <div className="border-1 border-dotted pt-[100%] border-muted-foreground"></div>
      <CardTitle className="text-foreground">{title}</CardTitle>
      <p className="text-muted-foreground">{description}</p>
    </div>
  )
}

export default ServiceSingle;