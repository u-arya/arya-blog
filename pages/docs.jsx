import React from 'react';
import Link from 'next/link';

export default function DocsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Documentation</h1>
      
      <p className="mb-4">
        This is the documentation page for Arya Blog.
      </p>
      
      <div className="my-8">
        <h2 className="text-2xl font-semibold mb-4">Getting Started</h2>
        <p className="mb-4">
          Arya Blog is built with Next.js, a React framework for production.
        </p>
        <p className="mb-4">
          To run the development server:
        </p>
        <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto mb-4">
          <code>npm run dev</code>
        </pre>
        <p>
          Open <code className="bg-gray-100 px-2 py-1 rounded">http://localhost:3000</code> in your browser to see the result.
        </p>
      </div>
      
      <div className="my-8">
        <h2 className="text-2xl font-semibold mb-4">Project Structure</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li><code className="bg-gray-100 px-2 py-1 rounded">pages/</code> - Contains all the pages of the application</li>
          <li><code className="bg-gray-100 px-2 py-1 rounded">app/</code> - Contains the App Router components</li>
          <li><code className="bg-gray-100 px-2 py-1 rounded">public/</code> - Contains static assets like images</li>
        </ul>
      </div>
      
      <div className="mt-8">
        <Link href="/" className="text-blue-600 hover:underline">
          Return to Home Page
        </Link>
      </div>
    </div>
  );
}