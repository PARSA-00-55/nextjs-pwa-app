import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col align-middle justify-center">
      <h1 className="text-3xl font-bold text-center">This is Home 🏠</h1>

      <Link href="/order" className="mt-5 text-blue-500 font-bold text-center">
        Go to Order page
      </Link>
    </main>
  );
}
