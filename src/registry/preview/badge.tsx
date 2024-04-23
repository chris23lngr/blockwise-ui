import { Badge } from '@/registry/ui/badge';

export default async function BadgePreview() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-4">
      <Badge size={'default'}>Default</Badge>
      <Badge variant={'success'}>Success</Badge>
      <Badge variant={'warning'}>Warning</Badge>
      <Badge variant={'destructive'}>Destructive</Badge>
    </div>
  );
}
