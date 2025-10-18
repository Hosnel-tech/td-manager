import Home_Header from "@/components/home_header";
import Image from "next/image";
import Typewriter from "@/components/typewriter";

export default function Home() {
  return (
    <div className="h-screen w-full">
      {/* Appel du header */}
      <Home_Header />
      <div className="py-10 px-15 flex flex-col md:flex-row gap-6 justify-center items-center">
        {/* section 1 (titre/description/boutons) */}
        <div className="w-1/2 flex flex-col gap-12">
          {/* Grand titre */}
          <div>
            <p className="text-5xl font-medium">Bienvenu sur notre</p>
            <p className="text-5xl font-medium">
              <Typewriter text="site éducative " speed={80} />
              <span className="text-[#004B70] text-semibold">EduTD</span>
            </p>
          </div>

          {/* Breve description */}
          <p className="text-xl font-regular">
            Gérez vos Travaux Dirigés de bout en bout, de l’assignation des
            tâches à la validation finale. EduTD simplifie chaque étape —
            attribution des TD, suivi de l’avancement, validation et paiement
            des enseignants — pour une gestion fluide, transparente et efficace.
          </p>

          {/* Boutons de connexions */}
          <div className="flex gap-4">
            <button className="text-[#004B70] py-3 px-10 border border-[#004B70] hover:border-none hover:bg-[#004B70] hover:text-white rounded-md">
              Se connecter
            </button>
            <button className="text-[#004B70] py-3 px-10 border border-[#004B70] hover:border-none hover:bg-[#004B70] hover:text-white rounded-md">
              S&apos;inscrire
            </button>
          </div>
        </div>

        {/* section 2 (image) */}
        <div className="flex justify-center items-center w-1/2">
          <Image
            src="/section2_image.jpg"
            alt="Aperçu EduTD"
            width={500}
            height={200}
            priority
          />
        </div>
      </div>
    </div>
  );
}
