import CardTitle from "@/components/CardTitle";
import { motion } from "motion/react";

interface ServiceSingleProps {
  title: string;
  description: string;
  image: string;
}

const ServiceSingle = ({ title, description, image }: ServiceSingleProps) => {
  return (
    <>
      <div className="flex-1 md:hidden">
        <motion.div
          className="relative"
          whileInView={{ right: "0%", opacity: 1 }}
          initial={{ right: "-100%", opacity: 0 }}
          transition={{
            right: { duration: 0.65, ease: "easeOut" },
            opacity: { duration: 2.85, ease: "easeOut" },
          }}
          viewport={{ once: true }}
        >
          <div className="h-100 w-full">
            <img
              src={image}
              alt={title}
              className="h-full w-full object-cover object-center"
            />
          </div>
          <CardTitle className="text-foreground">{title}</CardTitle>
          <p className="text-muted-foreground">{description}</p>
        </motion.div>
      </div>

      {/* DESKTOP */}
      <motion.div
        className="relative hidden md:block"
        whileInView={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{
          right: { duration: 0.65, ease: "easeOut" },
          opacity: { duration: 2.85, ease: "easeOut" },
        }}
        viewport={{ once: true }}
      >
        <div className="h-100 w-full">
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover object-center"
          />
        </div>
        <CardTitle className="text-foreground">{title}</CardTitle>
        <p className="text-muted-foreground">{description}</p>
      </motion.div>
    </>
  );
};

export default ServiceSingle;
