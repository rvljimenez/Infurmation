import { useNavigate } from "react-router";

export function DogCard({ name, img, id }) {
  const navigate = useNavigate();

  function handleClick() {
    navigate(`/dogs/${id}`);
  }

  return (
    <li
      onClick={handleClick}
      className="
    flex flex-col overflow-hidden
    rounded-2xl bg-gray-100
    font-[Fredoka]
    cursor-pointer
    transition-all duration-300
    hover:scale-105 hover:shadow-lg
  "
    >
      <img src={img} alt={name} className="aspect-4/3 w-full object-cover" />

      <div className="p-4">
        <p className="text-center text-xl uppercase">{name}</p>
      </div>
    </li>
  );
}
