
import { Phone } from "@/components/icons/Phone";
import { LucideMail, PhoneCallIcon } from "lucide-react";

const ContactInfo = () => {
  return (
    <div className="mt-4 border-2 rounded-lg p-8 md:max-w-[330px] space-y-4 border-foreground">
      <div className=" flex  items-center gap-2">
        <div className="flex-1/5 flex items-center">
          <LucideMail className="stroke-foreground"/>
        </div>
        <div className="flex-4/5 flex ">
          <a className="text-foreground">fvb.boas@gmail.com</a>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <div className="flex-1/5 flex items-center">
          <PhoneCallIcon className="stroke-foreground" />
        </div>
        <div className="flex-4/5 flex ">
          <a className="text-foreground">+55 (19)99734-0189</a>
        </div>
      </div>
    </div>
  )
}

export default ContactInfo;