import { Award, Users, Briefcase, Star, ChevronRight, Code, Database, CheckCircle, Monitor, Shield, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  const stats = [
    { icon: <Monitor className="w-10 h-10" />, value: '100+', label: 'Projects Delivered' },
    { icon: <Briefcase className="w-10 h-10" />, value: '50+', label: 'Corporate Clients' },
    { icon: <Users className="w-10 h-10" />, value: '500+', label: 'Engineers & Students Trained' },
    { icon: <Award className="w-10 h-10" />, value: '15+', label: 'Years Tech Experience' },
  ];

  const services = [
    { title: 'Custom Software Development', description: 'Tailor-made web, mobile, and enterprise solutions built with modern technology stacks.', icon: <Code className="w-8 h-8" /> },
    { title: 'Data & AI Engineering', description: 'Transforming complex corporate data into actionable intelligence and predictive models.', icon: <Database className="w-8 h-8" /> },
    { title: 'Quality Assurance & Testing', description: 'Rigorous automated and manual testing to ensure flawless application performance.', icon: <CheckCircle className="w-8 h-8" /> },
  ];

  const courses = [
    { name: 'Python Full Stack Development', icon: <Code className="w-8 h-8" />, slug: 'python-fullstack' },
    { name: 'Java Full Stack Development', icon: <Code className="w-8 h-8" />, slug: 'java' },
    { name: 'Data Science & Analytics', icon: <Database className="w-8 h-8" />, slug: 'data-science' },
    { name: 'Software Testing & Automation', icon: <CheckCircle className="w-8 h-8" />, slug: 'testing' },
  ];

  const companyLogos = ['Google', 'Microsoft', 'Amazon', 'TCS', 'Infosys', 'Wipro', 'Accenture', 'Cognizant'];

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-blue-950 to-gray-900 text-white py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <span className="bg-blue-500/20 text-blue-300 px-4 py-1.5 rounded-full text-sm font-semibold tracking-wide uppercase mb-4 inline-block">
              Enterprise Software & Talent Solutions
            </span>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Building Next-Gen Software. <br />
              <span className="text-blue-400">Cultivating Tech Talent.</span>
            </h1>
            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
              We engineer robust digital solutions for global businesses and leverage our production experience to train the next generation of software professionals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/services"
                className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition flex items-center justify-center gap-2 text-lg font-semibold shadow-lg shadow-blue-600/30"
              >
                Our Software Services
              </Link>
              <Link
                to="/courses"
                className="bg-transparent text-white px-8 py-4 rounded-lg hover:bg-white/10 transition border-2 border-white/30 text-lg font-semibold"
              >
                Explore Training Academy
              </Link>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 max-w-5xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center">
                <div className="flex justify-center text-blue-400 mb-3">{stat.icon}</div>
                <div className="text-3xl font-bold mb-1">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What We Do Best
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From architecture design to continuous deployment, we deliver scalable digital infrastructure.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition">
                <div className="text-blue-600 mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Training Advantage Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-cyan-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our Academy: <span className="text-yellow-300">Learn from actual Software Developers</span>
            </h2>
            <p className="text-xl text-blue-50">
              We don't teach from outdated textbooks. Our training division brings real, production-floor code directly into the classroom. Learn what teams are actually building in IT today.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-lg border border-white/10">
              <h3 className="text-2xl font-bold mb-3 text-yellow-300">Live Client Projects</h3>
              <p className="text-blue-50">
                Top-performing students get selected to intern directly on our active development pipelines, gaining genuine corporate exposure.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-lg border border-white/10">
              <h3 className="text-2xl font-bold mb-3 text-yellow-300">Non-IT to IT Pipelines</h3>
              <p className="text-blue-50">
                We design intensive developer tracks tailored for engineering freshers, switchers, and professionals managing career gaps.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-lg border border-white/10">
              <h3 className="text-2xl font-bold mb-3 text-yellow-300">Direct Placement Access</h3>
              <p className="text-blue-50">
                Gain instant access to our client ecosystems, internal hiring needs, and an extensive network of global placement partners.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Training Programs Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Industry Ready <span className="text-blue-600">Specializations</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Accelerate your engineering journey with our production-vetted syllabus.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {courses.map((course, index) => (
              <div
                key={index}
                className="bg-white border-2 border-gray-100 rounded-xl p-6 hover:border-blue-600 hover:shadow-xl transition group flex flex-col justify-between"
              >
                <div>
                  <div className="text-blue-600 mb-4 group-hover:scale-110 transition">{course.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{course.name}</h3>
                </div>
                <Link
                  to={`/courses/${course.slug}`}
                  className="text-blue-600 font-semibold flex items-center gap-2 hover:gap-3 transition-all text-sm mt-4"
                >
                  Syllabus Details <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Network Ecosystem / Hiring Partners */}
      <section className="py-20 bg-gray-50 border-t">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Where Our Tech Solutions & Engineers Go
            </h2>
            <p className="text-xl text-gray-600">
              Trusted by tech giants and enterprise consulting firms alike.
            </p>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 max-w-5xl mx-auto">
            {companyLogos.map((company, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 px-8 py-4 rounded-lg text-xl font-bold text-gray-500 hover:border-blue-500 hover:text-blue-600 transition shadow-sm"
              >
                {company}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate/Academy Call to Action */}
      <section className="py-20 bg-gray-950 text-white text-center">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-4xl font-bold mb-6">
            Let's Collaborate on Your Next <span className="text-blue-400">Milestone</span>
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Whether you are looking for complex enterprise software components or aiming to start a software engineering career—we have the expertise to execute.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/contact?type=project"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition font-semibold"
            >
              Hire Us for a Project
            </Link>
            <Link
              to="/contact?type=training"
              className="bg-gray-800 text-gray-200 border border-gray-700 px-8 py-4 rounded-lg hover:bg-gray-700 transition font-semibold"
            >
              Join Our Tech Academy
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}