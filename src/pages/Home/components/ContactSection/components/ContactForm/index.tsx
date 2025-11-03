import FormButton from '@/components/FormButton';
import InputWrapper from '@/components/InputWrapper';
import TextAreaWrapper from '@/components/TextAreaWrapper';
import { Magnetic } from '@/components/ui/shadcn-io/magnetic';
import { useState } from 'react';
import FormInput from '@/components/FormInput';
import { useTranslation } from 'react-i18next';

const formInputStyle = 'py-4 px-2';

const ContactForm = () => {
  const { t } = useTranslation('contact');
  const [name, setName] = useState(t('form.name.placeholder'));
  const [message, setMessage] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [isTextAreaUpdated, setIsTextAreaUpdated] = useState(false)
  const [subject, setSubject] = useState('default');


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

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch('/.netlify/functions/sendEmail', {
      method: 'POST',
      body: JSON.stringify({
        name,
        email,
        message,
      }),
    });

    const data = await res.json();
    if (data.success) {
      alert('Email enviado com sucesso!');
    } else {
      alert('Erro ao enviar email: ' + data.error);
    }
  };
  
  return (
    <form className=" p-8  text-black flex flex-col gap-5" onSubmit={handleSubmit}>
      <fieldset className="grid grid-cols-2 grid-rows-2 gap-4">
        <label>
          <span className="">{t('form.name.label')}</span>
          <InputWrapper>
            <FormInput
              className={formInputStyle}
              placeholder={t('form.name.placeholder')}
              tipo="text"
              onChange={(e) => {
                setName(e.target.value);
              }}
              value={name}
            />
          </InputWrapper>
        </label>
        <label>
          <span>{t('form.email.label')}</span>
          <InputWrapper>
            <FormInput
              tipo="email"
              placeholder={t('form.email.placeholder')}
              className={formInputStyle}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              value={email}
            ></FormInput>
          </InputWrapper>
        </label>
        <label>
          <span>{t('form.telefone.label')}</span>
          <InputWrapper>
            <FormInput
              tipo="tel"
              placeholder={t('form.telefone.placeholder')}
              className={formInputStyle}
              onChange={(e) => {
                setPhone(e.target.value);
              }}
              value={phone}
            ></FormInput>
          </InputWrapper>
        </label>
        <label>
          <span>{t('form.assunto.label')}</span>
          <InputWrapper>
            <select
              className={`w-full h-full border-0 outline-0 ${formInputStyle}`}
              onChange={(e) => {setSubject(e.target.value)}}
            >
              <option value="default" selected disabled>
                {t('form.assunto.placeholder')}
              </option>
              <option value="servico">{t('form.assunto.options.servico')}</option>
              <option value="entrevista">{t('form.assunto.options.entrevista')}</option>
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
