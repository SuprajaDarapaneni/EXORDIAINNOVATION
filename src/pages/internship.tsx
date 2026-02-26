import React, { useState } from "react";
import { Code, Database, Smartphone, Shield, PenTool, BarChart } from "lucide-react";

type InternshipCategory = "technical" | "nonTechnical";

interface InternshipItem {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const Internship: React.FC = () => {
  const [activeTab, setActiveTab] = useState<InternshipCategory>("technical");

  const internships: Record<InternshipCategory, InternshipItem[]> = {
    technical: [
      {
        title: "Frontend Development",
        description: "Build modern responsive websites using React & UI frameworks.",
        icon: <Code size={28} />,
      },
      {
        title: "Backend Development",
        description: "Develop APIs, databases & server-side applications.",
        icon: <Database size={28} />,
      },
      {
        title: "Flutter App Development",
        description: "Create Android & iOS apps using Flutter framework.",
        icon: <Smartphone size={28} />,
      },
      {
        title: "Cyber Security",
        description: "Learn ethical hacking & protect systems from threats.",
        icon: <Shield size={28} />,
      },
      {
        title: "UI/UX Design",
        description: "Design intuitive user interfaces & improve user experience.",
        icon: <PenTool size={28} />,
      },
      {
        title: "Data Science & ML",
        description: "Analyze data & build intelligent machine learning models.",
        icon: <BarChart size={28} />,
      },
    ],
    nonTechnical: [
      {
        title: "Digital Marketing",
        description: "Master SEO, social media & online branding strategies.",
        icon: <BarChart size={28} />,
      },
      {
        title: "Human Resources",
        description: "Learn recruitment, employee relations & HR operations.",
        icon: <PenTool size={28} />,
      },
      {
        title: "Business Development",
        description: "Develop client acquisition & business growth strategies.",
        icon: <Database size={28} />,
      },
      {
        title: "Content Writing",
        description: "Create engaging content for websites & marketing.",
        icon: <Code size={28} />,
      },
      {
        title: "Customer Support",
        description: "Build communication & customer handling skills.",
        icon: <Smartphone size={28} />,
      },
      {
        title: "Finance & Accounting",
        description: "Understand budgeting & financial record management.",
        icon: <Shield size={28} />,
      },
    ],
  };

  const currentList = internships[activeTab];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-blue-50">

      {/* HERO */}
      <div className="text-center py-16 px-6">
        
        
      </div>

      {/* Toggle */}
      <div className="flex justify-center mb-12">
        <div className="bg-white shadow-md rounded-full p-1 flex">
          <button
            onClick={() => setActiveTab("technical")}
            className={`px-6 py-2 rounded-full font-medium transition ${
              activeTab === "technical"
                ? "bg-indigo-600 text-white"
                : "text-gray-600"
            }`}
          >
            Technical
          </button>

          <button
            onClick={() => setActiveTab("nonTechnical")}
            className={`px-6 py-2 rounded-full font-medium transition ${
              activeTab === "nonTechnical"
                ? "bg-indigo-600 text-white"
                : "text-gray-600"
            }`}
          >
            Non-Technical
          </button>
        </div>
      </div>

      {/* Cards */}
      <div className="max-w-6xl mx-auto px-6 pb-16 grid sm:grid-cols-2 md:grid-cols-3 gap-8">
        {currentList.map((item, index) => (
          <div
            key={index}
            className="bg-white/70 backdrop-blur-lg border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition duration-300"
          >
            <div className="text-indigo-600 mb-4">{item.icon}</div>
            <h2 className="text-lg font-semibold mb-2 text-gray-800">
              {item.title}
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Internship;