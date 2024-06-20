import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex justify-center items-center min-h-screen flex-col space-y-4">
      <h1 className="text-2xl font-bold text-color-primary">Ooopps!!!</h1>
      <p className="text-base font-semibold text-color-accent">
        Something error has occurred
      </p>
      <Link
        href={"/"}
        className="px-6 py-2 block bg-color-secondary rounded-md text-color-accent"
      >
        Reset
      </Link>
    </div>
  );
}
