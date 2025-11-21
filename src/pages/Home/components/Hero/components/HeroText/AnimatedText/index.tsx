import TypingText from "@/components/ui/shadcn-io/typing-text";
import { useTranslation } from "react-i18next";

const AnimatedText = ({ textArr }: { textArr: string[] }) => {
  const { t, i18n } = useTranslation();
  return (
    <div className="pl-4 border-1 py-4">
      <TypingText
        key={i18n.language}
        text={textArr}
        typingSpeed={75}
        pauseDuration={1500}
        showCursor={true}
        cursorCharacter="|"
        className="text-xl font-bold"
        variableSpeed={{ min: 50, max: 120 }}
      />
    </div>
  );
};

export default AnimatedText;
