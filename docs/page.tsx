// app/docs/page.tsx
import { notFound } from 'next/navigation';

export default function DocsPage() {
  // Nextra 会自动接管 .mdx 路由
  notFound(); // 让 Nextra 处理这个页面
}