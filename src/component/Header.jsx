import { FaPaw } from "react-icons/fa";
import { useNavigate } from "react-router";

export function Header() {
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-800 bg-zinc-950/95 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-3 transition-opacity hover:opacity-80"
        >
          <FaPaw className="text-3xl text-orange-400" />

          <h1 className="font-[Fredoka] text-2xl font-bold uppercase tracking-wide text-white md:text-3xl">
            Infurmation
          </h1>
        </button>

        <span className="hidden text-sm text-zinc-400 md:block">
          Discover dog breeds from around the world 🐾
        </span>
      </div>
    </header>
  );
}
