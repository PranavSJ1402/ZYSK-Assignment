import React from "react";

const Testimonials = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center min-h-screen bg-gray-100 mt-0 p-2 mb-2">
      {/* Logo */}
      <img
        src="/src/assets/Fictional company logo (6).png"
        alt="Company Logo"
        className="w-32 h-auto mb-6"
      />

      {/* Testimonial Text */}
      <h1 className="text-2xl md:text-4xl font-semibold text-gray-800 mb-4">
        We have been using Untitled to kick-start every new
        project and can't imagine working without it.
      </h1>

      {/* Avatar */}
      <div className="flex items-center mt-2 mb-3">
        <img
          src="src/assets/Avatar.png"
          alt="User Avatar"
          className="h-16 w-16 rounded-full border border-gray-200"
        />
      </div>

      {/* User Info */}
      <p className="font-semibold text-lg text-gray-800">Candice Wu</p>
      <p className="text-gray-600">Product Manager, Sisyphus</p>

      {/* Dashed line */}
      <hr className="border-t-2 border-dashed border-gray-600 mt-6" />
    </div>
  );
};

export default Testimonials;
