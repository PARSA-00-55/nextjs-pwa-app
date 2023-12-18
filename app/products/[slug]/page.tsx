import Link from "next/link";

const page = ({ params }: { params: any }) => {
  return (
    <main className="flex align-middle justify-center flex-col">
      <h1 className="text-3xl font-bold text-center ">
        This is <span className="text-blue-500">{params.slug}</span> Details 🛒
      </h1>
      <p className="mt-3 text-1xl text-center">
        <Link href="/products" className="text-blue-400 font-bold">
          Back to Product page
        </Link>
      </p>
    </main>
  );
};

export default page;
