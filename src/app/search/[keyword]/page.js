import { getTopAnme } from "@/app/libs/api.libs";
import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";

export default async function Page({ params }) {
  const { keyword } = params;
  const decodedKeyword = decodeURI(keyword);

  const searchAnime = await getTopAnme("anime", `q=${decodedKeyword}`);

  return (
    <>
      <section>
        <Header title={`Pencarian untuk ${decodedKeyword}.....`} />
        <AnimeList api={searchAnime} />
      </section>
    </>
  );
}
