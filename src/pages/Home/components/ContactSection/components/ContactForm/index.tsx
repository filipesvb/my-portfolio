import FormButton from '@/components/FormButton';
import InputWrapper from '@/components/InputWrapper';
import TextAreaWrapper from '@/components/TextAreaWrapper';
import { Magnetic } from '@/components/ui/shadcn-io/magnetic';
import { useState } from 'react';
import FormInput from '@/components/FormInput';

const formInputStyle = 'py-4 px-2';

const ContactForm = () => {
  const [name, setName] = useState('John Doe');
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
            >
              <option value="" selected disabled>
                Select
              </option>
              <option value="">Contratar para um serviço</option>
              <option value="">Agendar uma entrevista</option>
            </select>
          </InputWrapper>
        </label>
      </fieldset>
      <fieldset>
        <TextAreaWrapper
          rows={3}
          value={`Olá, eu me chamo ${name}, e gostaria de contratar seus serviços`}
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
