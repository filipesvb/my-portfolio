import TypingText from '@/components/ui/shadcn-io/typing-text';
import { useTranslation } from 'react-i18next';

const AnimatedText = () => {
  const { t, i18n } = useTranslation();
  return (
    <div className="mt-10 my-4 pl-4 border-1 py-4">
      <TypingText
        key={i18n.language}
        text={[
          t('hero_typewriter_landingPages'),
          t('hero_typewriter_institucional'),
          t('hero_typewriter_dados'),
        ]}
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
