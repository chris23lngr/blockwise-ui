import { DocsSidebar } from '@/components/docs-sidebar';
import '@/styles/mdx.css';

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="bg-background relative z-10">
      <section className="py-32">
        <div className="container flex ">
          <DocsSidebar />
          <div className="grow">{children}</div>
        </div>
      </section>
    </main>
  );
}
