import React from 'react';

export default function HomeLayout({ children }) {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <article className="prose lg:prose-xl dark:prose-invert">
        {children}
      </article>
    </div>
  );
}