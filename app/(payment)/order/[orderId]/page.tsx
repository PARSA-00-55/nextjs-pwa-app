import Link from "next/link";
import React from "react";

const page = ({ params }: { params: any }) => {
  return (
    <div className="w-full flex align-middle justify-center flex-col">
      <h1 className="text-3xl font-bold text-center">
        This is Order <span className="text-blue-500">{params.orderId}</span>{" "}
        details 🛍
      </h1>
      <Link href="/order" className="text-blue-400 font-bold text-center mt-5">
        Back to Order page
      </Link>
    </div>
  );
};

export default page;
