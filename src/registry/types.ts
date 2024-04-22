import { z } from 'zod';

const registryEntry = z.object({
  name: z.string(),
  title: z.string(),
  description: z.string(),
  dependencies: z.array(
    z.object({
      name: z.string(),
      url: z.string(),
      version: z.string().optional(),
    })
  ),
});

export type RegistryEntry = z.infer<typeof registryEntry>;

export const registry = z.record(registryEntry);
export type Registry = z.infer<typeof registry>;

export const componentEntr = registryEntry.extend({
  component: z.lazy(() => z.any()),
  codeString: z.string(),
});

export type ComponentEntry = z.infer<typeof componentEntr>;
