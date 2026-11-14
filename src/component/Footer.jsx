import { FaPaw } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="mt-20 flex flex-col items-center justify-between gap-4 rounded-t-3xl bg-zinc-950 px-6 py-6 text-white md:flex-row md:px-12">
      <div className="flex items-center gap-3 text-xl font-semibold uppercase tracking-wider">
        <FaPaw className="text-orange-400" />
        <span>Infurmation</span>
      </div>

      <p className="text-center text-sm text-zinc-400 md:text-right">
        © {new Date().getFullYear()} Infurmation by Ronald Vincent Jimenez. All
        rights reserved.
      </p>
    </footer>
  );
}
