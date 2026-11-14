export function FAQS() {
  return (
    <section className="mx-auto my-24 grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:items-center">
      <div className="flex flex-col gap-6">
        <h2 className="text-4xl font-bold text-red-950 md:text-6xl lg:text-7xl">
          Why You Should Have a Dog?
        </h2>

        <p className="font-[Fredoka] text-lg leading-relaxed text-zinc-700 md:text-xl">
          Dogs provide profound emotional support and social benefits.
          Interacting with a dog releases oxytocin and serotonin, helping reduce
          stress, anxiety, and feelings of loneliness while improving overall
          well-being.
        </p>

        <a
          href="https://bestfriends.org/pet-care-resources/benefits-having-dog"
          target="_blank"
          rel="noopener noreferrer"
          className="w-fit font-[Fredoka] text-xl uppercase tracking-wide text-red-950/70 transition-all duration-200 hover:text-red-950 hover:underline"
        >
          Read More →
        </a>
      </div>

      <div className="overflow-hidden rounded-3xl shadow-xl">
        <img
          src="https://t4.ftcdn.net/jpg/18/48/67/71/240_F_1848677170_5LkF5C1HOuKigupi98etnc0Voc7ZL9WT.jpg"
          alt="Golden Retriever"
          className="h-87.5 w-full object-cover transition-transform duration-500 hover:scale-105 lg:h-125"
        />
      </div>
    </section>
  );
}
