import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";
import { getTopAnme } from "./libs/api.libs";

export default async function Home() {
  const topAnime = await getTopAnme("anime", `limit=8`);

  return (
    <>
      <section>
        <Header
          title="Paling Populer"
          linkTitle="Lihat Semua"
          linkHref={"/populer"}
        />
        <AnimeList api={topAnime} />
      </section>
    </>
  );
}
