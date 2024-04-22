import { Index } from '@/__registry__';
import * as CD from '@/components/component-display';
import { Hero } from '@/components/hero';

export default async function Home() {
  return (
    <main>
      <Hero />
      {Object.entries(Index).map(([key, value]) => {
        const Component = value.component;
        return (
          <CD.Section key={value.name}>
            <CD.ContentSidebar>
              <CD.Title>{value.title}</CD.Title>
              <CD.Description>{value.description}</CD.Description>
              {value.dependencies.length > 0 && (
                <CD.DependencyList>
                  {value.dependencies.map((dependency) => (
                    <CD.Dependency key={dependency.name} href={dependency.url}>
                      {dependency.name}
                    </CD.Dependency>
                  ))}
                </CD.DependencyList>
              )}
            </CD.ContentSidebar>
            <CD.PreviewWrapper>
              <Component />
            </CD.PreviewWrapper>
          </CD.Section>
        );
      })}
    </main>
  );
}
