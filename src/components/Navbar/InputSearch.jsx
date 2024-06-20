"use client";
import { MagnifyingGlass } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";
import { useRef } from "react";

const InputSearch = () => {
  const searchRef = useRef();
  const router = useRouter();

  const handleSearch = (event) => {
    const keyword = searchRef.current.value;

    if (!keyword) return;

    if (event.key === "Enter" || event.type === "click") {
      event.preventDefault();

      router.push(`/search/${keyword}`);
    }
  };

  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Cari Anime..."
        className="py-2 pr-10 pl-2 text-slate-700 rounded-md w-full"
        ref={searchRef}
        onKeyDown={handleSearch}
      />
      <button
        className="absolute top-1 end-2 text-slate-700"
        onClick={handleSearch}
      >
        <MagnifyingGlass size={28} />
      </button>
    </div>
  );
};

export default InputSearch;
