import { nowUpdates } from "../../content/now";

export default function NowArchivePage() {
  return (
    <>
      <h1 className="text-2xl font-semibold">Now</h1>
      <p className="mt-4 text-neutral-700">
        A lightweight history of what I’ve been learning and building lately.
      </p>

      <div className="mt-10 space-y-10">
        {nowUpdates.map((update) => (
          <section key={update.date} className="rounded-xl border bg-white p-6">
            <div className="text-sm text-neutral-500">Updated {update.date}</div>

            <dl className="mt-4 space-y-3">
              {update.items.map((item) => (
                <div key={`${update.date}-${item.label}`} className="grid grid-cols-1 gap-1 sm:grid-cols-[110px_1fr]">
                  <dt className="text-sm font-medium text-neutral-700">{item.label}</dt>
                  <dd className="text-sm text-neutral-700">{item.value}</dd>
                </div>
              ))}
            </dl>
          </section>
        ))}
      </div>
    </>
  );
}
