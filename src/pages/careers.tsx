// Careers.tsx
import React from "react";
import { Briefcase, MapPin, Clock, ArrowUpRight, Sparkles, GraduationCap, Heart } from "lucide-react";

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
  const handleApplyClick = (jobTitle: string) => {
    const emailTo = "careers@exordiainnovation.com";
    const subject = encodeURIComponent(`Application for ${jobTitle} position`);
    const body = encodeURIComponent(
      `Hi Team,\n\nI am interested in applying for the ${jobTitle} position.\n\nPlease find my attached resume.\n\nBest regards,`
    );

    window.location.href = `mailto:${emailTo}?subject=${subject}&body=${body}`;
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased selection:bg-blue-500 selection:text-white">
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-blue-950 via-blue-900 to-indigo-950 text-white py-24 lg:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.15),transparent_50%)]" />
        <div className="max-w-6xl mx-auto px-6 relative z-10 text-center">
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-blue-500/10 text-blue-300 border border-blue-400/20 tracking-wide uppercase mb-6">
            <Sparkles size={12} /> We are hiring
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-100 to-blue-200 mb-6 max-w-3xl mx-auto leading-tight">
            Shape the Future of Innovation With Us
          </h1>
          <p className="text-base md:text-xl text-blue-100/80 max-w-2xl mx-auto font-light leading-relaxed">
            Join a distributed team of creators, engineers, and visionaries building digital experiences that matter.
          </p>
        </div>
      </section>

      {/* Why Join Us (Bento Grid Inspired Layout) */}
      <section className="py-24 max-w-6xl mx-auto px-6">
        <div className="text-center max-w-xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mb-4">
            Why Work With Us?
          </h2>
          <p className="text-slate-500">
            We offer our team members space to grow, experiment, and do their best work.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="group bg-white p-8 rounded-2xl border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_4px_30px_rgba(30,58,138,0.06)] hover:-translate-y-1 transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
              <GraduationCap size={24} />
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-3">Accelerated Growth</h3>
            <p className="text-slate-600 leading-relaxed text-sm">
              Continuous masterclasses, upskilling opportunities, and career mapping built specifically around your individual strengths.
            </p>
          </div>

          <div className="group bg-white p-8 rounded-2xl border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_4px_30px_rgba(30,58,138,0.06)] hover:-translate-y-1 transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600 mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300">
              <Heart size={22} />
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-3">Inclusive Culture</h3>
            <p className="text-slate-600 leading-relaxed text-sm">
              A vibrant atmosphere anchored by transparency, creative safety, open communication, and rewarding teamwork.
            </p>
          </div>

          <div className="group bg-white p-8 rounded-2xl border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_4px_30px_rgba(30,58,138,0.06)] hover:-translate-y-1 transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600 mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300">
              <Clock size={22} />
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-3">True Flexibility</h3>
            <p className="text-slate-600 leading-relaxed text-sm">
              We design workflows prioritizing productivity over micro-presence. Work optimally with hybrid and asynchronous operations.
            </p>
          </div>
        </div>
      </section>

      {/* Job Openings Section */}
      <section className="py-24 bg-white border-y border-slate-150">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center max-w-xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mb-4">
              Current Openings
            </h2>
            <p className="text-slate-500">
              Find your role and hit apply to launch your email client immediately.
            </p>
          </div>

          <div className="space-y-4">
            {jobs.map((job) => (
              <div
                key={job.id}
                onClick={() => handleApplyClick(job.title)}
                className="group border border-slate-200 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:border-blue-300 hover:bg-slate-50/60 transition-all duration-300 cursor-pointer shadow-sm hover:shadow-md"
              >
                <div className="space-y-3">
                  <div className="inline-block bg-slate-100 text-slate-600 text-xs px-2.5 py-1 rounded-md font-semibold tracking-wide uppercase">
                    {job.department}
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-slate-900 tracking-tight group-hover:text-blue-900 transition-colors">
                    {job.title}
                  </h3>

                  <div className="flex flex-wrap gap-x-5 gap-y-2 text-slate-500 text-sm font-medium">
                    <span className="flex items-center gap-1.5">
                      <MapPin size={16} className="text-slate-400" />
                      {job.location}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock size={16} className="text-slate-400" />
                      {job.type}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Briefcase size={16} className="text-slate-400" />
                      {job.department}
                    </span>
                  </div>
                </div>

                <div className="inline-flex items-center justify-center gap-2 bg-slate-900 group-hover:bg-blue-900 text-white font-medium px-5 py-3 rounded-xl transition-all self-start md:self-auto shadow-sm group-hover:shadow">
                  Apply Now
                  <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* General Inquiry Footer */}
      <section className="py-24 bg-gradient-to-b from-slate-50 to-slate-100 text-center">
        <div className="max-w-xl mx-auto px-6">
          <h3 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight mb-4">
            Don't see a matching role?
          </h3>
          <p className="text-slate-600 font-normal leading-relaxed mb-8">
            We are constantly looking for brilliant minds. Drop your resume over directly, and we will contact you if an opportunity lines up!
          </p>
          <button
            onClick={() => handleApplyClick("General Inquiry")}
            className="inline-flex items-center gap-2 bg-transparent text-slate-800 border-2 border-slate-300 hover:border-slate-800 hover:bg-slate-900 hover:text-white px-7 py-3.5 rounded-xl transition-all duration-300 font-semibold text-sm shadow-sm"
          >
            Send General Application
          </button>
        </div>
      </section>
    </div>
  );
};

export default Careers;