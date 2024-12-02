import { FaFacebook, FaInstagramSquare, FaTwitter } from "react-icons/fa";

const AwardCard = ({ imgSrc, title, description }) => (
  <div className="text-center bg-white shadow-md rounded-lg p-6 space-y-4">
    <figure className="flex justify-center">
      <img src={imgSrc} alt={title} className="w-20 h-20 object-cover" />
    </figure>
    <h2 className="text-xl font-bold playfair text-green-600">{title}</h2>
    <p className="text-gray-700 text-sm">{description}</p>
  </div>
);

const Bio = () => {
  const awards = [
    {
      imgSrc: "/award1.png",
      title: "Readers’ Choice Award",
      description: "Awarded for our exceptional commitment to empowering readers worldwide.",
    },
    {
      imgSrc: "/award2.png",
      title: "Best Digital Library Platform",
      description: "Recognized for creating a seamless, innovative online library experience.",
    },
    {
      imgSrc: "/award3.png",
      title: "Innovation in Knowledge Access",
      description: "Celebrated for integrating technology to expand access to learning resources.",
    },
  ];

  return (
    <div className="bg-gray-50">
      {/* Header Section */}
      <div className="text-center py-20 bg-gradient-to-r from-green-500 via-green-600 to-green-700 text-white rounded-lg mb-10">
        <h1 className="text-6xl font-bold tracking-wide">
          Welcome to <span className="text-yellow-300">LibraryHub</span>
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg">
          Your gateway to knowledge, inspiration, and community. Discover a world of resources, tailored for every reader.
        </p>
      </div>

      {/* Story Section */}
      <div className="container mx-auto px-5 md:px-20 flex flex-col md:flex-row gap-12 items-center">
        <div className="flex-1 space-y-6">
          <h2 className="text-4xl font-bold text-green-700 playfair">
            Our Journey at <span className="text-yellow-500">LibraryHub</span>
          </h2>
          <p className="text-gray-700 leading-relaxed text-justify">
            At LibraryHub, we aim to redefine how people connect with books, knowledge, and learning. Founded with a mission 
            to make reading accessible and engaging for everyone, LibraryHub bridges the gap between traditional libraries 
            and the modern digital experience. 
            <br /><br />
            Our curated collection of physical and digital books spans genres, interests, and languages, ensuring that 
            everyone finds something they love. With state-of-the-art technology and a passion for literacy, we strive to 
            create a space where readers, students, and researchers can thrive.
          </p>
          <div className="flex gap-4">
            <a href="https://facebook.com" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="text-green-600 hover:text-green-800 text-3xl cursor-pointer" />
            </a>
            <a href="https://twitter.com" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="text-green-600 hover:text-green-800 text-3xl cursor-pointer" />
            </a>
            <a href="https://instagram.com" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
              <FaInstagramSquare className="text-green-600 hover:text-green-800 text-3xl cursor-pointer" />
            </a>
          </div>
        </div>
        <figure className="flex-1">
          <img
            src="public/bio1.png"
            alt="Illustration of LibraryHub's journey"
            className="rounded-lg shadow-lg object-cover w-full"
          />
        </figure>
      </div>

      {/* Awards Section */}
      <div className="mt-20 pb-20">
        <h2 className="text-center text-5xl font-bold text-green-700 mb-12">
          Why Choose <span className="text-yellow-500">LibraryHub</span>
        </h2>
        <p className="text-center text-gray-700 max-w-3xl mx-auto mb-10">
          LibraryHub is more than just a library; it's an innovative platform that integrates education, 
          entertainment, and community. Our accolades reflect our dedication to bringing readers and learners 
          the very best experiences.
        </p>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-5 md:px-20">
          {awards.map((award, index) => (
            <AwardCard key={index} {...award} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Bio;
