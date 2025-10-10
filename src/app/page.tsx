import Home_Header from "@/components/home_header";
import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen w-full">
      {/* Appel du header */}
      <Home_Header />
      <div className="py-4 px-15 flex gap-6 justify-center items-center">
        {/* section 1 (titre/description/boutons) */}
        <div className="w-1/2 flex flex-col gap-12 border">
          {/* Grand titre */}
          <p className="text-5xl font-medium">
            Bienvenu sur notre site éducative{" "}
            <span className="text-[#004B70] text-semibold">EduTD</span>
          </p>

          {/* Breve description */}
          <p className="text-xl font-regular">
            Gérez vos Travaux Dirigés de bout en bout, de l’assignation des
            tâches à la validation finale. EduTD simplifie chaque étape —
            attribution des TD, suivi de l’avancement, validation et paiement
            des enseignants — pour une gestion fluide, transparente et efficace.
          </p>

          {/* Boutons de connexions */}
          <div className="flex gap-4">
            <button className="bg-[#004B70] text-white py-3 px-10 rounded-md">
              Se connecter
            </button>
            <button className="text-[#004B70] py-3 px-10 border border-[#004B70] rounded-md">
              S&apos;inscrire
            </button>
          </div>
        </div>

        {/* section 2 (image) */}
        <div className="flex justtify-center items-center w-1/2 border">
          <Image
            src="/section2_image.jpg"
            alt="Aperçu EduTD"
            width={500}
            height={300}
            priority
          />
        </div>
      </div>
    </div>
  );
}
