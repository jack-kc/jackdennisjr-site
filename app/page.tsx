export default function Home() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-4xl font-semibold tracking-tight">Jack Dennis Jr.</h1>

      <p className="mt-6 text-lg leading-7 text-neutral-700">
        I’m a software engineering leader and lifelong builder. This site is where I share what I’m learning,
        what I’m building, and the ideas I’m working through in public.
      </p>

      <div className="mt-10 space-y-2 text-neutral-700">
        <p>
          <span className="font-medium">Exploring:</span> Frontend engineering, Next.js, and modern deployment workflows.
        </p>
        <p>
          <span className="font-medium">Building:</span> A personal site that stays stable while the content evolves.
        </p>
      </div>

      <footer className="mt-16 border-t pt-6 text-sm text-neutral-500">
        Views are my own and do not represent my employer.
      </footer>
    </main>
  );
}
