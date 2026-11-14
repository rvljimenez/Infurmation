export function NavBar({ query, setQuery }) {
  return (
    <section className="relative h-150 w-full overflow-hidden rounded-b-3xl">
      <img
        src="https://wallpapercave.com/wp/wp4768227.jpg"
        alt="Dog"
        className="h-full w-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-12 lg:px-20">
        <p className="mb-2 font-[Fredoka] text-lg uppercase tracking-widest text-orange-400">
          🐾 Welcome Fur Parents
        </p>

        <h1 className="mb-4 max-w-4xl text-5xl font-bold text-white md:text-7xl lg:text-8xl">
          As a Fur Parent
        </h1>

        <h2 className="mb-8 max-w-2xl text-xl font-medium text-zinc-200 md:text-3xl">
          Learn More About Dogs
        </h2>

        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          type="text"
          placeholder="Search by breed..."
          className="
            w-full
            max-w-md
            rounded-full
            border
            border-white/20
            bg-white
            px-6
            py-4
            text-lg
            text-zinc-900
            shadow-xl
            outline-none
            transition
            focus:border-orange-400
            focus:ring-4
            focus:ring-orange-400/20
          "
        />
      </div>
    </section>
  );
}
