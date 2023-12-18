import Link from "next/link";

const page = () => {
  return (
    <main className="flex flex-col align-middle justify-center">
      <h1 className="text-3xl font-bold text-center">This is Register</h1>
      <p className="mt-3 text-1xl text-center">
        Already have an accout?{" "}
        <Link href="/login" className="text-blue-400 font-bold" prefetch>
          Login
        </Link>
      </p>
    </main>
  );
};

export default page;
