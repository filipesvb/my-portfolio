import { ExternalLink, LucideMail, PhoneCallIcon } from "lucide-react";

const ContactInfo = () => {
  return (
    <div className="border-foreground text-foreground mt-4 space-y-5 rounded-lg border-2 p-8 md:max-w-[390px]">
      <div className="flex items-center gap-2 text-inherit">
        <div className="flex-1/5 flex items-center">
          <LucideMail className="stroke-foreground" />
        </div>
        <div className="flex-4/5 flex items-center gap-2 text-inherit">
          <a
            className="flex gap-2 text-inherit"
            href="mailto:fvb.boas@gmail.com"
          >
            <span className="text-inherit">fvb.boas@gmail.com </span>
            <ExternalLink className="stroke-foreground" />
          </a>
        </div>
      </div>
      <div className="flex items-center gap-2 text-inherit">
        <div className="flex-1/5 flex items-center">
          <PhoneCallIcon className="stroke-foreground" />
        </div>
        <div className="flex-4/5 flex text-inherit">
          <a
            className="flex items-center gap-2 text-inherit"
            href="tel:+551999734-0189"
          >
            <span className="truncate text-inherit">+55 (19)99734-0189</span>
            <ExternalLink className="stroke-foreground" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
