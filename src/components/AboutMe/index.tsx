import React from "react";
import { Trans, useTranslation } from "react-i18next";
import { Button } from "../ui/button";
import { Link } from "react-router";

export default function AboutMe({ compact = false }) {
  const { t } = useTranslation("aboutMe");

  return (
    <section className="prose prose-lg mx-auto max-w-3xl text-white">
      <Trans
        i18nKey={
          compact ? "aboutMe:presentation.compact" : "aboutMe:presentation.full"
        }
        ns="aboutMe"
        components={{
          p: <p className="text-foreground" />,
          strong: <strong className="font-bold text-blue-600" />,
        }}
      />
      {compact && (
        <Button
          asChild
          variant={"outline"}
          className="border-foreground w-full py-5 no-underline"
        >
          <Link to={"/sobre"} className="text-foreground text-xl">
            {t("findOutMore")}
          </Link>
        </Button>
      )}
    </section>
  );
}
