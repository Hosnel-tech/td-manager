import NavBar from "./components/navbar";

export default function Home() {
  return (
    <div className="container mx-auto px-4">
      <NavBar />
      <div className="flex space-x-4">
        <div>
          <h1>Left</h1>
        </div>
        <div>
          <h1>Right</h1>
        </div>
      </div>
    </div>
  );
}
