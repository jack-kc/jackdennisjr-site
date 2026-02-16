import { now } from "../content/now";

export default function Home() {
  return (
    <>
      <h1 className="text-4xl font-semibold tracking-tight">Jack Dennis, Jr.</h1>

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
      
      <section className="mt-12 rounded-xl border bg-white p-6">
        <div className="flex items-baseline justify-between gap-4">
          <h2 className="text-lg font-semibold">Now</h2>
          <div className="text-sm text-neutral-500">Updated {now.updated}</div>
        </div>

        <dl className="mt-4 space-y-3">
          {now.items.map((item) => (
            <div key={item.label} className="grid grid-cols-1 gap-1 sm:grid-cols-[110px_1fr]">
              <dt className="text-sm font-medium text-neutral-700">{item.label}</dt>
              <dd className="text-sm text-neutral-700">{item.value}</dd>
            </div>
          ))}
        </dl>
      </section>
    </>
  );
}
