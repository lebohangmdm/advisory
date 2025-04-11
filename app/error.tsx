"use client"; // Error boundaries must be Client Components

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  console.error(error);
  const router = useRouter();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-slate-100 p-4 md:p-6 lg:p-8">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-blue-500 ">
          Opps! Something went wrong
        </h1>
        <p className="mt-4 text-gray-700 mx-auto max-w-md font-medium">
          We’re working on fixing it. Please try again later or contact support
          if the problem persists.
        </p>
        <div className="flex items-center justify-center gap-4 mt-6">
          <button
            onClick={() => router.back()}
            className="text-base md:text-lg h-9 md:h-10 font-semibold border-none  px-4 bg-white text-black  hover:outline-1 rounded-sm hover:outline-neutral-700 cursor-pointer transition-all duration-150"
          >
            Go Back
          </button>

          <button
            onClick={() => reset()}
            className="text-base md:text-lg h-9 md:h-10 rounded-sm px-4 bg-blue-500 font-semibold text-white hover:bg-blue-600 cursor-pointer   transition-all duration-150"
          >
            Try again
          </button>
        </div>
      </div>
    </main>
  );
}

{
  /* <Button
onClick={() => reset()}
variant={"default"}
// className="mt-6 inline-block rounded-none bg-blue-600 px-6 py-3 text-white hover:bg-blue-700 transition"
>
Try again
</Button> */
}
