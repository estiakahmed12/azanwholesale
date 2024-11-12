"use client";
import { useRouter } from "next/navigation";

const HomePage = () => {
  const router = useRouter();

  const handleLoginClick = () => {
    router.push("/auth/login");
  };

  return (
    <div className="text-2xl text-center mt-8">
      <h1>Home Page</h1>

      <button
        type="button"
        onClick={handleLoginClick}
        className="mt-10 py-2 px-4 w-52 bg-[#F03C7D] text-white rounded-xl font-medium hover:bg-[#F03C7D]/85"
      >
        Log In
      </button>
    </div>
  );
};

export default HomePage;
