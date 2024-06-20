import Link from "next/link";

const Header = ({ title, linkTitle, linkHref }) => {
  return (
    <div className="flex justify-between p-4 items-center">
      <h1 className="text-2xl font-bold text-color-primary">{title}</h1>
      {linkTitle && linkHref ? (
        <Link
          href={linkHref}
          className="md:text-xl text-sm underline text-color-primary hover:text-color-accent transition-all"
        >
          {linkTitle}
        </Link>
      ) : null}
    </div>
  );
};

export default Header;
