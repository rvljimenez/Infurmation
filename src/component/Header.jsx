import { FaPaw } from "react-icons/fa";
import { useNavigate } from "react-router";

export function Header() {
  const navigate = useNavigate();

  return (
    <header
      onClick={() => navigate("/")}
      className="flex items-center gap-3 rounded-b-3xl bg-zinc-950 px-6 py-8 text-white shadow-lg transition-all duration-300 hover:bg-zinc-900 cursor-pointer"
    >
      <FaPaw className="text-3xl text-orange-400" />

      <h1 className="font-[Fredoka] text-3xl font-bold uppercase tracking-wide md:text-4xl">
        Infurmation
      </h1>
    </header>
  );
}
