import Link from "next/link";

const page = () => {
  return (
    <main className="flex flex-col align-middle justify-center">
      <h1 className="text-3xl text-center font-bold">This is Products 🛒</h1>

      <ul className="mt-10 text-center">
        <li className="border mb-5 py-2">
          <Link href="/products/product-one">Product one</Link>
        </li>
        <li className="border mb-5 py-2">
          <Link href="/products/product-two">Product two</Link>
        </li>
        <li className="border mb-5 py-2">
          <Link href="/products/product-three">Product three</Link>
        </li>
      </ul>
    </main>
  );
};

export default page;
