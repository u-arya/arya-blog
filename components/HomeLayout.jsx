import React from 'react';

export default function HomeLayout({ children }) {
  return (
    <div className="w-full px-4 py-8">
      <div className="max-w-4xl mx-auto text-center">
        <article className="prose lg:prose-xl dark:prose-invert mx-auto">
          {children}
        </article>
      </div>
    </div>
  );
}