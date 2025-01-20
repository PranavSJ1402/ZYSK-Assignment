import React from "react";

const SocialProof = () => {
  return (
    <div className="text-center my-8">
      <p className="text-gray-500 text-lg font-semibold mb-4">
        Join 4,000+ companies already growing
      </p>
      <div className="flex flex-wrap justify-center gap-8">
        <img
          src="/src/assets/Fictional company logo (2).png"
          alt="Boltshift"
          className="w-36 h-auto"
        />
        <img
          src="/src/assets/Fictional company logo.png"
          alt="Lightbox"
          className="w-36 h-auto"
        />
        <img
          src="/src/assets/Fictional company logo (1).png"
          alt="FeatherDev"
          className="w-36 h-auto"
        />
        <img
          src="/src/assets/Fictional company logo (3).png"
          alt="Spherule"
          className="w-36 h-auto"
        />
        <img
          src="/src/assets/Fictional company logo (5).png"
          alt="GlobalBank"
          className="w-36 h-auto"
        />
        <img
          src="/src/assets/Fictional company logo (4).png"
          alt="Nietzsche"
          className="w-36 h-auto"
        />
      </div>
    </div>
  );
};

export default SocialProof;
