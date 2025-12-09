import { Briefcase, Award } from "lucide-react";

export default function Placements() {
  const placedStudents = [
    {
      name: "Sai Teja Reddy",
      role: "Software Engineer",
      company: "Infosys",
    },
    {
      name: "Keerthi Lakshmi",
      role: "Frontend Developer",
      company: "TCS",
    },
    {
      name: "Vamsi Krishna",
      role: "Data Analyst",
      company: "Wipro",
    },
    {
      name: "Harika Devi",
      role: "UI/UX Designer",
      company: "Tech Mahindra",
    },
    {
      name: "Manoj Kumar",
      role: "AI Engineer",
      company: "HCL",
    },
    {
      name: "Sravani Reddy",
      role: "Backend Developer",
      company: "Cognizant",
    },
    {
      name: "Rakesh Babu",
      role: "DevOps Engineer",
      company: "Accenture",
    },
    {
      name: "Divya Sri",
      role: "Data Scientist",
      company: "IBM",
    },
  ];

  const companies = [
    "Infosys",
    "TCS",
    "Wipro",
    "Tech Mahindra",
    "HCL",
    "Cognizant",
    "Accenture",
    "IBM",
    "Amazon",
    "Capgemini",
    "Deloitte",
    "Oracle",
  ];

  return (
    <section className="min-h-screen bg-gradient-to-b from-white to-gray-50 pt-28 pb-20">
      <div className="container mx-auto px-4 text-center">
        {/* --- Header Section --- */}
        <h1 className="text-4xl font-bold text-gray-800 mb-4 flex justify-center items-center gap-2">
          <Briefcase className="text-blue-600" /> Our Placements
        </h1>
        <p className="text-gray-600 mb-10 max-w-2xl mx-auto">
          We take pride in our students who have successfully started
          their careers in top tech companies across India and the globe.
          Our dedicated placement training ensures every student achieves success.
        </p>

        {/* --- Placement Stats --- */}
        <div className="flex flex-wrap justify-center gap-6 mb-14">
          <div className="bg-blue-50 text-blue-700 font-semibold px-6 py-3 rounded-full shadow-sm">
            💼 1000+ Students Placed
          </div>
          <div className="bg-green-50 text-green-700 font-semibold px-6 py-3 rounded-full shadow-sm">
            💰 Highest Package: ₹12 LPA
          </div>
          <div className="bg-yellow-50 text-yellow-700 font-semibold px-6 py-3 rounded-full shadow-sm">
            🌍 Trusted by Top MNCs
          </div>
        </div>

        {/* --- Placement Cards --- */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {placedStudents.map((student, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-full mx-auto mb-4 flex items-center justify-center bg-blue-50 text-blue-700 font-bold text-xl">
                {student.name.charAt(0)}
              </div>
              <h3 className="text-lg font-semibold text-gray-800">
                {student.name}
              </h3>
              <p className="text-gray-500 text-sm mb-2">{student.role}</p>
              <span className="inline-block bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                Placed at {student.company}
              </span>
            </div>
          ))}
        </div>

        {/* --- Scrolling Company Names --- */}
        <div className="overflow-hidden mt-16 relative">
          <div className="flex items-center justify-center gap-16 animate-scroll text-lg font-semibold text-gray-700 opacity-80">
            {companies.map((name, index) => (
              <span key={index} className="whitespace-nowrap">
                {name}
              </span>
            ))}
            {/* Duplicate for smooth looping */}
            {companies.map((name, index) => (
              <span key={`dup-${index}`} className="whitespace-nowrap">
                {name}
              </span>
            ))}
          </div>
        </div>

        {/* --- Footer Text --- */}
        <div className="mt-16 flex justify-center items-center gap-2 text-blue-600 font-semibold text-lg">
          <Award /> Over 1000+ Students Placed in Leading Companies!
        </div>
      </div>

      {/* --- Scrolling Animation --- */}
      <style>
        {`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-scroll {
            animation: scroll 25s linear infinite;
            width: max-content;
          }
        `}
      </style>
    </section>
  );
}
