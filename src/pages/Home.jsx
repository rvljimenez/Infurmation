import { NavBar } from "../component/NavBar";
import { TempList } from "../component/TempList";
import { FAQS } from "../component/FAQS";
import { useEffect, useState } from "react";

export default function Home() {
  const [dogList, setDogList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const [query, setQuery] = useState("");

  console.log(selectedId);

  useEffect(() => {
    async function title() {
      document.title = "INFURMATION";
    }
    title();
  }, []);

  useEffect(() => {
    async function fetchDogList() {
      setIsLoading(true);
      try {
        const res = await fetch(
          "https://dogapi.dog/api/v2/breeds?page%5Bsize%5D=1000&filter%5Bhas_images%5D=true",
        );
        const data = await res.json();

        setDogList(data.data);
      } catch (error) {
        console.error("Error fetching dog list:", error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchDogList();
  }, []);

  return (
    <div className="flex flex-col gap-8">
      <NavBar query={query} setQuery={setQuery} />
      <main className="flex flex-col">
        <TempList
          dogList={dogList}
          isLoading={isLoading}
          onSelect={setSelectedId}
        />
        <FAQS />
      </main>
    </div>
  );
}
