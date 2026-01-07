import { Navbar } from "@/components/Navbar";
import TilesGrid from "@/components/TilesGrid";

export default function Page() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <Navbar />
      <TilesGrid />
    </div>
  );
}
