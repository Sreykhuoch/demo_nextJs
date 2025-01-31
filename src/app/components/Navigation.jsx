import Link from "next/link";

import React from "react";
export const Navigation = () => {
  return (
    <div className="sticky top-0 backdrop-blur-xl  border-b  z-50">
      <div className="flex justify-around py-5">
        <Link href="/">
          <img
            src="https://media.istockphoto.com/id/1269843303/vector/happy-family.jpg?s=2048x2048&w=is&k=20&c=k9BrNFUba5fs0G7JS6G9mQEK0aweyaD4ttkSXwSWRt0="
            alt="Family Guy"
            width={70}
            height={50}
            className="m-10"
          />
        </Link>
        <Link
          href="/quiz"
          className="flex items-center justify-center gap-1 px-5 font-semibold text-black transition-colors bg-green-500 rounded-md duration-600 hover:bg-green-600 m-10"
        >
          Take a Quiz
        </Link>

        <Link
          type="button"
          href={"/employee"}
          className="py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
        >
          Employee
        </Link>
      </div>
    </div>
  );
};
