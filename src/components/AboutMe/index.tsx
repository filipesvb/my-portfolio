import React from 'react';
import { Trans } from 'react-i18next';

export default function AboutMe({ compact = false }) {
  return (
    <section className="max-w-3xl mx-auto p-4 prose prose-lg text-white">
      <Trans
        i18nKey={compact ? 'aboutMe:presentation.compact' : 'aboutMe:presentation.full'}
        ns="aboutMe"
        components={{
          p: <p className='text-foreground' />,
          strong: <strong className="font-bold text-blue-600" />,
        }}
        
      />
    </section>
  );
}
