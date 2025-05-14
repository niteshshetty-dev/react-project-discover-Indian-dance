function About() {
  return (
    <div className="max-w-3xl mx-auto py-12 px-4 sm:px-6">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">
        About This Project
      </h2>
      <p className="text-gray-700 text-lg mb-4 leading-relaxed">
        "Discover Indian Dance" is a passion project built to showcase the
        beauty, diversity, and tradition of Indian dance forms. Whether
        classical or folk, each dance represents a unique cultural identity
        rooted in history and emotion.
      </p>
      <p className="text-gray-700 text-lg mb-4 leading-relaxed">
        This application categorizes dances by style and region, offering short
        insights, visual elements, and a gateway to deeper appreciation. Built
        using <span className="font-semibold">React</span> and{" "}
        <span className="font-semibold">Tailwind CSS</span>, it's designed to be
        responsive, accessible, and informative.
      </p>
      <p className="text-gray-600 text-md">
        © 2025 • Developed as part of a React learning project. Images and data
        sourced from public resources and cultural archives.
      </p>
    </div>
  );
}

export default About;
