import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center max-w-2xl px-4">
        <h1 className="text-4xl font-bold text-foreground mb-4">
          ProtektSurface
        </h1>
        <p className="text-lg text-muted-foreground mb-8">
          Next.js migration in progress. This is a placeholder home page.
        </p>
        <div className="space-y-2 text-sm text-muted-foreground">
          <p>✓ Next.js 16 installed</p>
          <p>✓ Tailwind CSS configured</p>
          <p>✓ shadcn/ui components copied</p>
          <p>✓ Root layout created</p>
          <p>→ Page migration pending</p>
        </div>
      </div>
    </div>
  );
}
