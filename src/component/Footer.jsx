import { FaPaw } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="w-full bg-zinc-950 text-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-8 md:flex-row md:px-8">
        <div className="flex items-center gap-3 text-xl font-semibold uppercase tracking-wider">
          <FaPaw className="text-orange-400" />
          <span>Infurmation</span>
        </div>

        <p className="text-center text-sm text-zinc-400 md:text-right">
          © {new Date().getFullYear()} Infurmation by Ronald Vincent Jimenez.
          All rights reserved.
        </p>
      </div>
    </footer>
  );
}
