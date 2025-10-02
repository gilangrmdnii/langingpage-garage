"use client";

type TabsProps = {
  activeTab: "showroom" | "service";
  setActiveTab: React.Dispatch<React.SetStateAction<"showroom" | "service">>;
};

export default function Tabs({ activeTab, setActiveTab }: TabsProps) {
  return (
    <section className="bg-[#f8f9fa] py-6 sticky top-0 z-40 shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex space-x-2 bg-[#023e8a] rounded-xl p-1 max-w-2xl mx-auto">
          {/* Showroom Tab */}
          <button
            onClick={() => setActiveTab("showroom")}
            className={`flex-1 py-4 px-6 rounded-lg font-semibold transition-all ${activeTab === "showroom"
              ? "bg-gradient-to-r from-[#00b4d8] to-[#0077b6] text-white shadow-md"
              : "text-[#90e0ef] hover:text-white hover:bg-[#0077b6]/40"
              }`}
          >
            🏪 Showroom Mobil
          </button>

          {/* Service Tab */}
          <button
            onClick={() => setActiveTab("service")}
            className={`flex-1 py-4 px-6 rounded-lg font-semibold transition-all ${activeTab === "service"
              ? "bg-gradient-to-r from-[#00b4d8] to-[#0077b6] text-white shadow-md"
              : "text-[#90e0ef] hover:text-white hover:bg-[#0077b6]/40"
              }`}
          >
            🔧 Layanan Servis
          </button>
        </div>
      </div>
    </section>
  );
}
