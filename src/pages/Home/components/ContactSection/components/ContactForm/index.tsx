import FormButton from "@/components/FormButton";
import InputWrapper from "@/components/InputWrapper";
import TextAreaWrapper from "@/components/TextAreaWrapper";
import { Magnetic } from "@/components/ui/shadcn-io/magnetic";
import { useState } from "react";
import FormInput from "@/components/FormInput";
import { useTranslation } from "react-i18next";
import LabelWrapper from "@/components/LabelWrapper";

const formInputStyle = "py-4 px-2";

const ContactForm = () => {
  const { t } = useTranslation("contact");
  const [name, setName] = useState(t("form.name.placeholder"));
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [isTextAreaUpdated, setIsTextAreaUpdated] = useState(false);
  const [subject, setSubject] = useState("default");

  function getTranslatedMessagePlaceholder() {
    switch (subject) {
      case "servico":
        return t("form.mensagem.placeholder.servico", { name });
      case "entrevista":
        return t("form.mensagem.placeholder.entrevista", { name });
      default:
        return t("form.mensagem.placeholder.default");
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("/.netlify/functions/sendEmail", {
      method: "POST",
      body: JSON.stringify({
        name,
        email,
        message,
        subject,
      }),
    });

    const data = await res.json();
    if (data.success) {
      alert("Email enviado com sucesso!");
    } else {
      alert("Erro ao enviar email: " + data.error);
    }
  };

  const testHandleSubmit = async (e) => {
    e.preventDefault();
    console.log("enviado");
  };

  return (
    <form
      className="flex flex-col gap-5 p-8 text-black"
      onSubmit={handleSubmit}
    >
      <fieldset className="md:grid md:grid-cols-2 md:grid-rows-2 flex flex-col gap-4">
        <label className="">
          <LabelWrapper>{t("form.name.label")}</LabelWrapper>
          <InputWrapper>
            <FormInput
              className={formInputStyle}
              placeholder={t("form.name.placeholder")}
              tipo="text"
              onChange={(e) => {
                setName(e.target.value);
              }}
              value={name}
            />
          </InputWrapper>
        </label>
        <label>
          <LabelWrapper>{t("form.email.label")}</LabelWrapper>
          <InputWrapper>
            <FormInput
              tipo="email"
              placeholder={t("form.email.placeholder")}
              className={formInputStyle}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              value={email}
            ></FormInput>
          </InputWrapper>
        </label>
        <label>
          <LabelWrapper>{t("form.telefone.label")}</LabelWrapper>
          <InputWrapper>
            <FormInput
              tipo="tel"
              placeholder={t("form.telefone.placeholder")}
              className={formInputStyle}
              onChange={(e) => {
                setPhone(e.target.value);
              }}
              value={phone}
            ></FormInput>
          </InputWrapper>
        </label>
        <label>
          <LabelWrapper>{t("form.assunto.label")}</LabelWrapper>
          <InputWrapper className="pr-2">
            <select
              className={` h-full w-full border-0 outline-0 text-black dark:text-black ${formInputStyle}`}
              onChange={(e) => {
                setSubject(e.target.value);
              }}
              required
            >
              <option
                className="text-black dark:text-black"
                value="default"
                selected
                disabled
              >
                {t("form.assunto.placeholder")}
              </option>
              <option value="servico" className="text-black">
                {t("form.assunto.options.servico")}
              </option>
              <option value="entrevista" className="text-black">
                {t("form.assunto.options.entrevista")}
              </option>
            </select>
          </InputWrapper>
        </label>
      </fieldset>
      <fieldset>
        <TextAreaWrapper
          label={t("form.mensagem.label")}
          rows={3}
          onUpdate={(value) => {
            setMessage(value);
            setIsTextAreaUpdated(true);
          }}
          {...(!isTextAreaUpdated
            ? { value: getTranslatedMessagePlaceholder() }
            : { value: message })}
        />
      </fieldset>
      <fieldset>
        <Magnetic className=" w-full md:w-auto">
          <FormButton>Enviar</FormButton>
        </Magnetic>
      </fieldset>
    </form>
  );
};

export default ContactForm;
