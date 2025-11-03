import Section from '@/components/Section';
import SectionTitle from '@/components/SectionTitle';
import ContactForm from './components/ContactForm';

const ContactSection = () => {
  return (
    <Section className=" flex">
      <div className="flex-2/5">
        <SectionTitle>Entre em contato</SectionTitle>
        <p>
          Quer conversar a respeito de um projeto que tem mente, ou se
          interessou em minhas habilidades e quer me contratar? Me dá um toque!
        </p>
      </div>
      <div className="flex-3/5 p-3">
        <div className="border rounded-2xl h-full bg-white">
          <ContactForm />
        </div>
      </div>
    </Section>
  );
};

export default ContactSection;
