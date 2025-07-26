import '../styles/globals.css'
import { MDXProvider } from '@mdx-js/react'

const components = {
  h1: props => <h1 className="text-3xl font-bold mb-4" {...props} />,
  h2: props => <h2 className="text-2xl font-semibold mt-8 mb-4" {...props} />,
  p: props => <p className="mb-4" {...props} />,
  ul: props => <ul className="list-disc pl-6 mb-4 space-y-2" {...props} />,
  ol: props => <ol className="list-decimal pl-6 mb-4 space-y-2" {...props} />,
  pre: props => <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto mb-4" {...props} />,
  code: props => <code className="bg-gray-100 px-1 py-0.5 rounded" {...props} />,
  a: props => <a className="text-blue-600 hover:underline" {...props} />,
}

export default function App({ Component, pageProps }) {
  return (
    <MDXProvider components={components}>
      <Component {...pageProps} />
    </MDXProvider>
  )
}