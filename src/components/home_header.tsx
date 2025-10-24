"use client";
import { useRouter } from "next/navigation";

export default function Home_Header() {
    const router = useRouter();
    const handleLogin = () => {
        router.push("/login");
    };
  return (
    <nav>
      <div className="bg-white flex justify-between items-center py-4 px-15 sticky top-0 z-50 shadow-md">
        <h1 className="text-2xl font-semibold">EduTD Manager</h1>
        <button onClick={handleLogin} className="bg-[#004B70]/80 hover:bg-[#004B70] text-white font-medium py-2 px-8 rounded-md">
            Se connecter
          </button>
      </div>
    </nav>
  );
}
