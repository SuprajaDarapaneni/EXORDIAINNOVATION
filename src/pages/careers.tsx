// Careers.tsx
import React from "react";
import { Briefcase, MapPin, Clock, ArrowRight } from "lucide-react";

interface Job {
  id: number;
  title: string;
  location: string;
  type: string;
  department: string;
}

const jobs: Job[] = [
  {
    id: 1,
    title: "Frontend Developer",
    location: "Remote",
    type: "Full Time",
    department: "Engineering",
  },
  {
    id: 2,
    title: "UI/UX Designer",
    location: "Hyderabad, India",
    type: "Full Time",
    department: "Design",
  },
  {
    id: 3,
    title: "Digital Marketing Executive",
    location: "Vijayawada, India",
    type: "Internship",
    department: "Marketing",
  },
];

const Careers: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-4">
            Join Our Team
          </h1>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto">
            Build your future with us. Explore exciting opportunities
            and become part of our growing team.
          </p>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Work With Us?
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold mb-3">
                Career Growth
              </h3>
              <p className="text-gray-600">
                Continuous learning opportunities and career advancement.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold mb-3">
                Great Culture
              </h3>
              <p className="text-gray-600">
                Collaborative, inclusive, and innovation-driven environment.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold mb-3">
                Flexible Work
              </h3>
              <p className="text-gray-600">
                Remote-friendly policies and work-life balance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Job Openings */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            Current Openings
          </h2>

          <div className="space-y-6">
            {jobs.map((job) => (
              <div
                key={job.id}
                className="bg-gray-50 border rounded-xl p-6 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:shadow-lg transition"
              >
                <div>
                  <h3 className="text-2xl font-semibold mb-2">
                    {job.title}
                  </h3>

                  <div className="flex flex-wrap gap-4 text-gray-600">
                    <span className="flex items-center gap-2">
                      <Briefcase size={18} />
                      {job.department}
                    </span>

                    <span className="flex items-center gap-2">
                      <MapPin size={18} />
                      {job.location}
                    </span>

                    <span className="flex items-center gap-2">
                      <Clock size={18} />
                      {job.type}
                    </span>
                  </div>
                </div>

                <button className="bg-blue-900 text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition flex items-center gap-2">
                  Apply Now
                  <ArrowRight size={18} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-center mb-8">
              Apply for a Position
            </h2>

            <form className="space-y-6">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full border p-4 rounded-lg"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full border p-4 rounded-lg"
              />

              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full border p-4 rounded-lg"
              />

              <input
                type="file"
                className="w-full border p-4 rounded-lg"
              />

              <textarea
                rows={5}
                placeholder="Cover Letter"
                className="w-full border p-4 rounded-lg"
              />

              <button
                type="submit"
                className="w-full bg-blue-900 text-white py-4 rounded-lg hover:bg-blue-800"
              >
                Submit Application
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;