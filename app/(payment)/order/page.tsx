import Link from "next/link";

const page = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-center">This is Order 🛍</h1>

      <ul className="mt-10 text-center">
        <li className="border mb-5 py-2">
          <Link href="/order/order-one">Order one</Link>
        </li>
        <li className="border mb-5 py-2">
          <Link href="/order/order-two">Order two</Link>
        </li>
        <li className="border mb-5 py-2">
          <Link href="/order/order-three">Order three</Link>
        </li>
      </ul>
    </div>
  );
};

export default page;
