import React from "react";

const offerings = [
  {
    title: "Fresh Sourdough",
    description:
      "Small-batch weekly bakes with crisp crusts, open crumb, and a schedule you can count on.",
  },
  {
    title: "Classes",
    description:
      "Hands-on sourdough workshops in a relaxed home setting for curious beginners and returning bakers.",
  },
  {
    title: "Bake List",
    description:
      "Join the weekly note for upcoming bread drops, class dates, and the occasional kitchen story.",
  },
];

const details = [
  "Naturally leavened and slow-fermented",
  "Shaped, scored, and baked by hand",
  "Made in Reigate for local collection",
];

export default function FromJudeWithLove() {
  return (
    <div className="min-h-screen overflow-hidden bg-[#f5ede2] text-stone-900">
      <div className="relative isolate">
        <div className="absolute inset-x-0 top-0 -z-10 h-[32rem] bg-[radial-gradient(circle_at_top,_rgba(158,98,47,0.22),_transparent_58%),linear-gradient(180deg,_#f8f1e8_0%,_#f5ede2_60%,_#f3e7d8_100%)]" />
        <div className="absolute left-[-6rem] top-24 -z-10 h-48 w-48 rounded-full bg-[#c77745]/20 blur-3xl" />
        <div className="absolute right-[-4rem] top-40 -z-10 h-64 w-64 rounded-full bg-[#7e9c72]/20 blur-3xl" />

        <section className="mx-auto grid max-w-7xl gap-14 px-6 pb-16 pt-8 md:px-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:px-12 lg:pt-12">
          <div>
            <div className="mb-8 inline-flex items-center rounded-full border border-stone-900/10 bg-white/70 px-4 py-2 text-xs font-medium uppercase tracking-[0.28em] text-stone-700 backdrop-blur">
              Reigate sourdough studio
            </div>

            <h1 className="max-w-3xl font-serif text-5xl leading-[0.95] text-stone-900 md:text-7xl">
              From Jude
              <span className="block text-[#a4512b]">With Love</span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-700 md:text-xl">
              Handmade sourdough, thoughtful classes, and a slower way of
              feeding people. Every loaf is shaped by hand and baked to be
              shared.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <button className="rounded-full bg-stone-950 px-7 py-4 text-sm font-medium text-white transition hover:bg-stone-800">
                Order This Week&apos;s Loaves
              </button>
              <button className="rounded-full border border-stone-900/15 bg-white/80 px-7 py-4 text-sm font-medium text-stone-900 transition hover:bg-white">
                Join a Bread Class
              </button>
            </div>

            <div className="mt-10 grid gap-3 sm:grid-cols-3">
              {details.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/60 bg-white/60 px-4 py-4 text-sm text-stone-700 shadow-[0_12px_30px_rgba(110,79,45,0.08)] backdrop-blur"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 translate-x-4 translate-y-4 rounded-[2rem] bg-[#d9b28f]/50" />
            <div className="relative rounded-[2rem] border border-stone-900/10 bg-[#f8f3ec] p-6 shadow-[0_30px_80px_rgba(83,51,24,0.18)]">
              <div className="rounded-[1.5rem] bg-[linear-gradient(180deg,_#d8a06f_0%,_#b66337_40%,_#6d3b20_100%)] p-8 text-[#fff7ef]">
                <p className="text-xs uppercase tracking-[0.3em] text-white/70">
                  This week&apos;s bake
                </p>
                <h2 className="mt-4 font-serif text-4xl leading-tight">
                  Slow-fermented country loaf
                </h2>
                <p className="mt-4 max-w-md text-sm leading-7 text-white/80">
                  A crackling crust, deep caramel color, and the kind of crumb
                  that disappears quickly once the butter is out.
                </p>
                <div className="mt-8 grid grid-cols-2 gap-3 text-sm">
                  <div className="rounded-2xl bg-white/10 px-4 py-4 backdrop-blur">
                    <div className="text-white/65">Ferment</div>
                    <div className="mt-1 font-medium">24 hours</div>
                  </div>
                  <div className="rounded-2xl bg-white/10 px-4 py-4 backdrop-blur">
                    <div className="text-white/65">Pickup</div>
                    <div className="mt-1 font-medium">Friday mornings</div>
                  </div>
                </div>
              </div>

              <div className="mt-6 rounded-[1.5rem] bg-white p-6">
                <p className="text-sm uppercase tracking-[0.24em] text-stone-500">
                  Philosophy
                </p>
                <p className="mt-4 text-lg leading-8 text-stone-700">
                  Bread should not be rushed. It should not be uniform. It
                  should feel like it came from someone&apos;s hands, not a line.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-8 md:px-10 lg:px-12">
          <div className="grid gap-6 md:grid-cols-3">
            {offerings.map((item) => (
              <div
                key={item.title}
                className="rounded-[1.75rem] border border-stone-900/8 bg-white/75 p-7 shadow-[0_18px_40px_rgba(91,60,33,0.08)] backdrop-blur"
              >
                <h3 className="font-serif text-2xl text-stone-900">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-stone-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto grid max-w-6xl gap-10 px-6 py-20 md:px-10 lg:grid-cols-[0.95fr_1.05fr] lg:px-12">
          <div className="rounded-[2rem] bg-[#8f4b2b] p-8 text-[#fff5ec] shadow-[0_24px_60px_rgba(90,46,22,0.22)]">
            <p className="text-xs uppercase tracking-[0.3em] text-white/65">
              About Jude
            </p>
            <h2 className="mt-4 font-serif text-4xl">A kitchen ritual turned outward</h2>
            <p className="mt-5 text-base leading-8 text-white/82">
              What began during Covid as a quiet, steady practice grew into a
              weekly rhythm of feeding neighbours, teaching friends, and making
              something worth gathering around.
            </p>
          </div>

          <div className="flex items-center">
            <p className="max-w-2xl text-lg leading-9 text-stone-700">
              Jude now bakes dozens of loaves each week and teaches others the
              craft of sourdough with the same guiding idea: make something
              real, make it carefully, and share it generously.
            </p>
          </div>
        </section>

        <section className="px-6 pb-24 md:px-10 lg:px-12">
          <div className="mx-auto max-w-5xl rounded-[2.25rem] border border-stone-900/10 bg-[linear-gradient(135deg,_#201716_0%,_#33211c_45%,_#704127_100%)] px-6 py-10 text-center text-[#fff8f2] shadow-[0_30px_70px_rgba(34,20,16,0.28)] md:px-12 md:py-14">
            <p className="text-xs uppercase tracking-[0.32em] text-white/60">
              Weekly bread drops
            </p>
            <h3 className="mt-4 font-serif text-3xl md:text-4xl">
              Join the bake list
            </h3>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-white/75 md:text-base">
              Be first to hear about fresh loaves, class openings, and what is
              coming out of the oven next.
            </p>

            <form className="mx-auto mt-8 flex max-w-2xl flex-col gap-3 sm:flex-row">
              <input
                type="email"
                placeholder="Your email address"
                className="min-w-0 flex-1 rounded-full border border-white/15 bg-white/10 px-5 py-4 text-white placeholder:text-white/45 focus:border-white/35 focus:outline-none"
              />
              <button
                type="submit"
                className="rounded-full bg-[#f4d7b7] px-7 py-4 text-sm font-medium text-stone-950 transition hover:bg-[#f8dfc3]"
              >
                Sign Up
              </button>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
}
