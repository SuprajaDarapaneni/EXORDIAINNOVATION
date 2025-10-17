import { Briefcase, Award } from "lucide-react";

export default function Placements() {
  const placedStudents = [
    {
      name: "Aarav Sharma",
      role: "Software Engineer - Google",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      companyLogo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    },
    {
      name: "Sneha Reddy",
      role: "Data Analyst - Amazon",
      avatar: "https://randomuser.me/api/portraits/women/45.jpg",
      companyLogo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
    },
    {
      name: "Rahul Mehta",
      role: "Mobile Developer - Infosys",
      avatar: "https://randomuser.me/api/portraits/men/50.jpg",
      companyLogo: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Infosys_logo.svg",
    },
    {
      name: "Priya Iyer",
      role: "Frontend Developer - TCS",
      avatar: "https://randomuser.me/api/portraits/women/46.jpg",
      companyLogo: "https://upload.wikimedia.org/wikipedia/commons/5/5b/Tata_Consultancy_Services_Logo.svg",
    },
    {
      name: "Vikram Rao",
      role: "AI Engineer - Microsoft",
      avatar: "https://randomuser.me/api/portraits/men/51.jpg",
      companyLogo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
    },
    {
      name: "Nisha Patel",
      role: "Backend Developer - Wipro",
      avatar: "https://randomuser.me/api/portraits/women/54.jpg",
      companyLogo: "https://upload.wikimedia.org/wikipedia/commons/6/6e/Wipro_Primary_Logo_Color_RGB.svg",
    },
    {
      name: "Rohit Singh",
      role: "Data Scientist - Accenture",
      avatar: "https://randomuser.me/api/portraits/men/53.jpg",
      companyLogo: "https://upload.wikimedia.org/wikipedia/commons/1/19/Accenture.svg",
    },
    {
      name: "Ananya Das",
      role: "UI/UX Designer - Deloitte",
      avatar: "https://randomuser.me/api/portraits/women/60.jpg",
      companyLogo: "https://upload.wikimedia.org/wikipedia/commons/5/56/Deloitte.svg",
    },
    {
      name: "Karan Verma",
      role: "Software Engineer - Cognizant",
      avatar: "https://randomuser.me/api/portraits/men/61.jpg",
      companyLogo: "https://upload.wikimedia.org/wikipedia/commons/0/0a/Cognizant_Logo_2022.svg",
    },
    {
      name: "Meera Nair",
      role: "QA Engineer - IBM",
      avatar: "https://randomuser.me/api/portraits/women/62.jpg",
      companyLogo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
    },
    {
      name: "Dev Raj",
      role: "DevOps Engineer - Capgemini",
      avatar: "https://randomuser.me/api/portraits/men/63.jpg",
      companyLogo: "https://upload.wikimedia.org/wikipedia/commons/9/94/Capgemini_201x_logo.svg",
    },
    {
      name: "Ishita Kapoor",
      role: "Cloud Engineer - Oracle",
      avatar: "https://randomuser.me/api/portraits/women/64.jpg",
      companyLogo: "https://upload.wikimedia.org/wikipedia/commons/c/c1/Oracle_logo.svg",
    },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-b from-white to-gray-50 pt-28 pb-16">
      {/* ✅ Added top padding (pt-28) so content starts below the fixed header */}
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4 flex justify-center items-center gap-2">
          <Briefcase className="text-blue-600" /> Our Placements
        </h1>
        <p className="text-gray-600 mb-10 max-w-2xl mx-auto">
          We take pride in our students securing top positions across global tech companies.
        </p>

        {/* ✅ Placement Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {placedStudents.map((student, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border border-gray-100"
            >
              <img
                src={student.avatar}
                alt={student.name}
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-4 border-blue-100"
              />
              <h3 className="text-lg font-semibold text-gray-800">{student.name}</h3>
              <p className="text-gray-500 text-sm mb-4">{student.role}</p>
              <img
                src={student.companyLogo}
                alt={`${student.name}'s company`}
                className="h-10 mx-auto"
              />
            </div>
          ))}
        </div>

        <div className="mt-16 flex justify-center items-center gap-2 text-blue-600 font-semibold text-lg">
          <Award /> Over 1000+ students placed in top MNCs worldwide!
        </div>
      </div>
    </section>
  );
}
