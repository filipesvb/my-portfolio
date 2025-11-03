import { EmailFill16 } from "@/components/icons/EmailLetter";
import { Phone } from "@/components/icons/Phone";

const ContactInfo = () => {
  return (
    <div className="mt-4 border-3 rounded-lg p-8 max-w-[330px] space-y-4">
      <div className=" flex  items-center gap-2">
        <div className="flex-1/5 flex items-center">
          <EmailFill16 />
        </div>
        <div className="flex-4/5 flex justify-end">
          <a className="">fvb.boas@gmail.com</a>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <div className="flex-1/5 flex items-center">
          <Phone /> 
        </div>
        <div className="flex-4/5 flex justify-end">
          <a className="">+55 (19)99734-0189</a>
        </div>
      </div>
    </div>
  )
}

export default ContactInfo;