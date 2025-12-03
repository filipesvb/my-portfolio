import { Phone } from "@/components/icons/Phone";
import { ExternalLink, LucideMail, PhoneCallIcon } from "lucide-react";

const ContactInfo = () => {
  return (
    <div className="border-foreground mt-4 space-y-5 rounded-lg border-2 p-8 md:max-w-[390px]">
      <div className="flex items-center gap-2">
        <div className="flex-1/5 flex items-center">
          <LucideMail className="stroke-foreground" />
        </div>
        <div className="flex-4/5 flex items-center gap-2">
          <a
            className="text-foreground flex gap-2"
            href="mailto:fvb.boas@gmail.com"
          >
            <span>fvb.boas@gmail.com </span>
            <ExternalLink />
          </a>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <div className="flex-1/5 flex items-center">
          <PhoneCallIcon className="stroke-foreground" />
        </div>
        <div className="flex-4/5 flex">
          <a
            className="text-foreground flex items-center gap-2"
            href="tel:+551999734-0189"
          >
            <span className="truncate">+55 (19)99734-0189</span>
            <ExternalLink />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
