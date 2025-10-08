import Home_Header from "@/components/home_header";

export default function Home() {
  return (
    <div className="h-screen">
      <Home_Header />
      <div className="container mx-auto mt-10">
        <div className="grid grid-cols-2 gap-8">
          <div>
            <p className="text-xl font-semibold">Body</p>
          </div>
          <div>
            <p className="text-xl font-semibold">Body</p>
          </div>
        </div>
      </div>
    </div>
  );
}
