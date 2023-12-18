import Link from "next/link";

const page = () => {
  return (
    <main className="flex flex-col align-middle justify-center">
      <h1 className="text-3xl font-bold text-center">This is Login</h1>
      <p className="mt-3 text-1xl text-center">
        Don't have an account?{" "}
        <Link href="/register" className="text-blue-400 font-bold" prefetch>
          Register
        </Link>
      </p>
    </main>
  );
};

export default page;
