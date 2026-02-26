import React, { useState } from "react";

type InternshipCategory = "technical" | "nonTechnical";

const InternshipsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<InternshipCategory>("technical");

  const internships: Record<InternshipCategory, string[]> = {
    technical: [
      "Frontend Development",
      "Backend Development",
      "Full Stack Development",
      "Flutter App Development",
      "Data Science & Machine Learning",
      "Cyber Security",
      "UI/UX Design",
      "Cloud Computing",
    ],
    nonTechnical: [
      "Human Resources (HR)",
      "Digital Marketing",
      "Business Development",
      "Content Writing",
      "Operations Management",
      "Customer Support",
      "Finance & Accounting",
      "Sales & Promotion",
    ],
  };

  const currentList = internships[activeTab];

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-8">
        Internship Opportunities
      </h1>

      {/* Toggle Buttons */}
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

      {/* Internship Cards */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {currentList.map((item: string, index: number) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition text-center"
          >
            <h2 className="text-lg font-semibold">{item}</h2>

            <button className="mt-4 w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700">
              Apply Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InternshipsPage;