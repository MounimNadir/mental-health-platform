import React from 'react';

const VideoSection = () => {
  return (
    <section className="bg-gray-50 py-16 md:py-32">
      <div className="container mx-auto px-6 text-center">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-6">
          Learn More About Our Mission
        </h2>

        {/* Description */}
        <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
          Watch this short video to understand our vision and how we are here to support you on your mental health journey.
        </p>

        {/* Video Container */}
      <div className="relative pb-[56.25%] mb-8 overflow-hidden rounded-lg shadow-lg">
        <iframe
            className="absolute inset-0 w-full h-full object-cover"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ" // Replace with your video ID
            title="About Us Video"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>

      </div>

      </div>
    </section>
  );
};

export default VideoSection;
