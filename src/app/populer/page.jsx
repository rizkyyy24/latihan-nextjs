"use client";
import AnimeList from "@/components/AnimeList";
import HeaderMenu from "@/components/Utilities/HeaderMenu";
import Pagination from "@/components/Utilities/pagination";
import { useEffect, useState } from "react";
import { getTopAnme } from "../libs/api.libs";

const PopulerPage = () => {
  const [popularAnime, setPopularAnime] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    getPopularAnime();
  }, [page]);

  const getPopularAnime = async () => {
    const popularAnime = await getTopAnme("anime", `page=${page}`);
    setPopularAnime(popularAnime);
  };

  return (
    <>
      <section>
        <HeaderMenu title={`Anime Terpopuler ${page}`} />
        <AnimeList api={popularAnime} />
        <Pagination
          page={page}
          setPage={setPage}
          lastPage={popularAnime.pagination?.last_visible_page}
        />
      </section>
    </>
  );
};

export default PopulerPage;
