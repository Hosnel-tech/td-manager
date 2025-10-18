import Link from "next/link";

export default function Home_Header() {
  return (
    <nav>
      <div className="bg-white flex justify-between items-center py-4 px-15 sticky top-0 z-50 shadow-md">
        <h1 className="text-2xl font-semibold">EduTD Manager</h1>
        <Link href="/login">
          <button className="bg-[#004B70] hover:bg-[#004B70]/80 text-white font-medium py-2 px-8 rounded-md">
            Se connecter
          </button>
        </Link>
      </div>
    </nav>
  );
}
