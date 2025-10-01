"use client";

type TabsProps = {
  activeTab: "showroom" | "service";
  setActiveTab: React.Dispatch<React.SetStateAction<"showroom" | "service">>;
};

export default function Tabs({ activeTab, setActiveTab }: TabsProps) {
  return (
    <section className="bg-gray-800 py-8 sticky top-0 z-40 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex space-x-1 bg-gray-700 rounded-xl p-1 max-w-2xl mx-auto">
          <button
            onClick={() => setActiveTab("showroom")}
            className={`flex-1 py-4 px-6 rounded-lg font-semibold transition-all ${
              activeTab === "showroom"
                ? "bg-gradient-to-r from-orange-500 to-red-600 text-white shadow-lg"
                : "text-gray-300 hover:text-white hover:bg-gray-600"
            }`}
          >
            🏪 Showroom Mobil
          </button>
          <button
            onClick={() => setActiveTab("service")}
            className={`flex-1 py-4 px-6 rounded-lg font-semibold transition-all ${
              activeTab === "service"
                ? "bg-gradient-to-r from-orange-500 to-red-600 text-white shadow-lg"
                : "text-gray-300 hover:text-white hover:bg-gray-600"
            }`}
          >
            🔧 Layanan Servis
          </button>
        </div>
      </div>
    </section>
  );
}
