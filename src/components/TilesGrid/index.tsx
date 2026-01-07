"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { MaterialTile } from "@/components/MaterialTile";
import { ITile } from "./types";
import Loading from "./loading";

const TilesGrid = () => {
  const [tiles, setTiles] = useState<ITile[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchTiles = async () => {
      try {
        const { data, error } = await supabase.from("test_tiles").select("*");
        if (error) throw error;
        setTiles(data || []);
      } catch (err: unknown) {
        console.error("Error fetching tiles:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchTiles();
  }, []);

  if (loading) return <Loading />;

  return (
    <div className="min-h-screen py-8 px-1 md:px-3 lg:px-8 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white transition-colors duration-300">
            Material Design
          </h1>
          <p className="text-lg max-w-2xl text-gray-600 dark:text-gray-300 transition-colors duration-300">
            Displaying {tiles.length} tiles with dynamic theming
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
          {tiles.map((tile, index) => (
            <MaterialTile
              key={tile.id || index}
              title={tile.title}
              subtitle={tile.subtitle}
              imageURL={tile.imageURL}
              cardType={tile.cardType}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TilesGrid;
