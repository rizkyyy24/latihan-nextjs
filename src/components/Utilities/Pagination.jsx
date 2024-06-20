const Pagination = ({ page, setPage, lastPage }) => {
  const scrollTop = () => {
    scrollTo({
      behavior: "smooth",
      top: 0,
    });
  };

  const handlePrev = () => {
    setPage((prevState) => prevState - 1);
    scrollTop();
  };

  const handleNext = () => {
    setPage((prevState) => prevState + 1);
    scrollTop();
  };

  return (
    <div className="flex justify-center items-center gap-4 py-4 font-bold">
      {page <= 1 ? null : (
        <button
          className="text-color-primary hover:text-color-accent"
          onClick={handlePrev}
        >
          Prev
        </button>
      )}

      <p className="text-color-primary">
        {page} of {lastPage}
      </p>
      {page >= lastPage ? null : (
        <button
          className="text-color-primary hover:text-color-accent"
          onClick={handleNext}
        >
          Next
        </button>
      )}
    </div>
  );
};

export default Pagination;
