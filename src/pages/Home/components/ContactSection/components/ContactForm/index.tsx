import FormButton from '@/components/FormButton';
import InputWrapper from '@/components/InputWrapper';
import TextAreaWrapper from '@/components/TextAreaWrapper';
import { Magnetic } from '@/components/ui/shadcn-io/magnetic';
import { useState } from 'react';
import FormInput from '@/components/FormInput';
import { useTranslation } from 'react-i18next';

const formInputStyle = 'py-4 px-2';

const ContactForm = () => {
  const [name, setName] = useState('John Doe');
  const [message, setMessage] = useState('')
  const [isTextAreaUpdated, setIsTextAreaUpdated] = useState(false)
  const [subject, setSubject] = useState('default');

  const { t } = useTranslation('contact');

  function getTranslatedMessagePlaceholder() {

    switch(subject) {
      case 'servico':
        return t('form.mensagem.placeholder.servico', {name})
      case 'entrevista':
        return t('form.mensagem.placeholder.entrevista', {name})
      default:
        return t('form.mensagem.placeholder.default')
    }
    
  }
  
  return (
    <form className=" p-8  text-black flex flex-col gap-5">
      <fieldset className="grid grid-cols-2 grid-rows-2 gap-4">
        <label>
          <span className="">Nome</span>
          <InputWrapper>
            <FormInput
              className={formInputStyle}
              placeholder="John Doe"
              tipo="text"
              onChange={(e) => {
                setName(e.target.value);
              }}
              value={name}
            />
          </InputWrapper>
        </label>
        <label>
          <span>Email</span>
          <InputWrapper>
            <FormInput
              tipo="email"
              placeholder="email@email.com"
              className={formInputStyle}
            ></FormInput>
          </InputWrapper>
        </label>
        <label>
          <span>Telefone</span>
          <InputWrapper>
            <FormInput
              tipo="tel"
              placeholder="(234) 99323-1232"
              className={formInputStyle}
            ></FormInput>
          </InputWrapper>
        </label>
        <label>
          <span>Assunto</span>
          <InputWrapper>
            <select
              className={`w-full h-full border-0 outline-0 ${formInputStyle}`}
              onChange={(e) => {setSubject(e.target.value)}}
            >
              <option value="default" selected disabled>
                Select
              </option>
              <option value="servico">Contratar para um serviço</option>
              <option value="entrevista">Agendar uma entrevista</option>
            </select>
          </InputWrapper>
        </label>
      </fieldset>
      <fieldset>
        <TextAreaWrapper
          label={t('form.mensagem.label')}
          rows={3}
          onUpdate={(value) => {
            setMessage(value);
            setIsTextAreaUpdated(true);
          }}
          {...(!isTextAreaUpdated ? {value: getTranslatedMessagePlaceholder()} : {value: message})}
        />
      </fieldset>
      <fieldset>
        <Magnetic>
          <FormButton>Enviar</FormButton>
        </Magnetic>
      </fieldset>
    </form>
  );
};

export default ContactForm;
