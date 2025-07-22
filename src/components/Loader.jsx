import React from "react";

const Loader = () => {
  return (
    
    <div className="flex flex-col items-center justify-center h-screen bg-white">
      <div className="animate-spin text-6xl mb-4">🌿</div>
      <p className="text-green-700 text-lg font-semibold animate-pulse">
        Loading Freshness...
      </p>
    </div>
  );
};

export default Loader;