import React, { useState } from "react";

type InternshipCategory = "technical" | "nonTechnical";

interface InternshipItem {
  title: string;
  description: string;
}

const Internship: React.FC = () => {
  const [activeTab, setActiveTab] = useState<InternshipCategory>("technical");

  const internships: Record<InternshipCategory, InternshipItem[]> = {
    technical: [
      {
        title: "Frontend Development",
        description:
          "Learn HTML, CSS, JavaScript, React and build responsive real-world websites.",
      },
      {
        title: "Backend Development",
        description:
          "Work with APIs, databases, authentication and server-side logic.",
      },
      {
        title: "Full Stack Development",
        description:
          "Develop complete web applications using frontend & backend technologies.",
      },
      {
        title: "Flutter App Development",
        description:
          "Build cross-platform Android & iOS apps using Flutter framework.",
      },
      {
        title: "Data Science & Machine Learning",
        description:
          "Learn data analysis, visualization and build predictive ML models.",
      },
      {
        title: "Cyber Security",
        description:
          "Understand ethical hacking, network security and data protection.",
      },
      {
        title: "UI/UX Design",
        description:
          "Design user-friendly interfaces and improve user experience skills.",
      },
      {
        title: "Cloud Computing",
        description:
          "Deploy applications and manage servers using cloud platforms.",
      },
    ],
    nonTechnical: [
      {
        title: "Human Resources (HR)",
        description:
          "Learn recruitment processes, employee management and HR operations.",
      },
      {
        title: "Digital Marketing",
        description:
          "Gain skills in SEO, social media marketing and online campaigns.",
      },
      {
        title: "Business Development",
        description:
          "Develop client acquisition, negotiation and business growth skills.",
      },
      {
        title: "Content Writing",
        description:
          "Improve writing skills for blogs, websites and marketing content.",
      },
      {
        title: "Operations Management",
        description:
          "Understand business operations, workflow and process optimization.",
      },
      {
        title: "Customer Support",
        description:
          "Build communication and problem-solving skills for customer handling.",
      },
      {
        title: "Finance & Accounting",
        description:
          "Learn basic accounting, budgeting and financial record management.",
      },
      {
        title: "Sales & Promotion",
        description:
          "Gain practical experience in sales strategies and promotions.",
      },
    ],
  };

  const currentList = internships[activeTab];

  return (
    <div className="bg-gray-100 py-12 px-6 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-8">
        Internship Opportunities
      </h1>

      {/* Toggle */}
      <div className="flex justify-center mb-8">
        <button
          onClick={() => setActiveTab("technical")}
          className={`px-6 py-2 rounded-l-lg font-semibold ${
            activeTab === "technical"
              ? "bg-indigo-600 text-white"
              : "bg-white border"
          }`}
        >
          Technical
        </button>

        <button
          onClick={() => setActiveTab("nonTechnical")}
          className={`px-6 py-2 rounded-r-lg font-semibold ${
            activeTab === "nonTechnical"
              ? "bg-indigo-600 text-white"
              : "bg-white border"
          }`}
        >
          Non-Technical
        </button>
      </div>

      {/* Cards */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {currentList.map((item, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition"
          >
            <h2 className="text-lg font-semibold mb-2">{item.title}</h2>
            <p className="text-gray-600 text-sm">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Internship;