import { 
  Award, 
  Briefcase, 
  ChevronRight, 
  Code, 
  Database, 
  CheckCircle, 
  Monitor, 
  Shield, 
  Zap,
  Layers,
  CloudContainer,
  Server
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  const stats = [
    { icon: <Monitor className="w-10 h-10" />, value: '150+', label: 'Enterprise Systems Delivered' },
    { icon: <Briefcase className="w-10 h-10" />, value: '60+', label: 'Corporate & Fortune 500 Clients' },
    { icon: <Zap className="w-10 h-10" />, value: '99.9%', label: 'SLA Uptime Maintained' },
    { icon: <Award className="w-10 h-10" />, value: '15+', label: 'Years Technical Expertise' },
  ];

  const services = [
    { 
      title: 'Custom Software Development', 
      description: 'Tailor-made web, mobile, and enterprise solutions built with resilient architectural patterns and cutting-edge technology stacks.', 
      icon: <Code className="w-8 h-8" />,
      techs: ['React', 'Node.js', 'Python', 'Go']
    },
    { 
      title: 'Data & AI Engineering', 
      description: 'Transforming complex, disparate corporate data pools into actionable operational intelligence, automated pipelines, and predictive workflows.', 
      icon: <Database className="w-8 h-8" />,
      techs: ['Machine Learning', 'ETL Pipelines', 'PowerBI', 'BigData']
    },
    { 
      title: 'Quality Assurance & Automation', 
      description: 'Rigorous automated continuous integration testing and end-to-end performance validation to safeguard enterprise application health.', 
      icon: <CheckCircle className="w-8 h-8" />,
      techs: ['Selenium', 'Playwright', 'CI/CD Pipelines', 'Load Testing']
    },
    { 
      title: 'Cloud Infrastructure & DevOps', 
      description: 'Architecting highly available, secure, and autoscaling cloud environments optimized for maximum cost efficiency.', 
      icon: <Layers className="w-8 h-8" />,
      techs: ['AWS', 'Azure', 'Docker', 'Kubernetes']
    },
  ];

  const valueProps = [
    { title: 'Production-Floor Excellence', desc: 'We build systems utilizing microservices, high-concurrency protocols, and zero-trust engineering standards.' },
    { title: 'Dedicated Delivery Pods', desc: 'Gain immediate access to full-cycle engineering squads including Solutions Architects, DevOps leads, and senior QA engineers.' },
    { title: 'Global Compliance Integration', desc: 'Every line of code and architectural deployment strictly follows international standards including SOC2, GDPR, and ISO compliance parameters.' }
  ];

  const companyLogos = ['Google', 'Microsoft', 'Amazon', 'TCS', 'Infosys', 'Wipro', 'Accenture', 'Cognizant'];

  return (
    <main className="pt-20 bg-white antialiased">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#f8fafc] via-[#f0f9ff] to-[#e0f2fe] py-28 border-b border-blue-100/50">
        <div className="absolute top-0 right-0 -mt-24 -mr-24 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="bg-blue-600/10 text-blue-700 px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase mb-6 inline-block border border-blue-200">
              Next-Gen Enterprise Engineering
            </span>
            <h1 className="text-5xl md:text-6xl font-black text-gray-900 mb-6 tracking-tight leading-[1.15]">
              Building High-Scale <br />
              <span className="text-blue-600">Digital Solutions.</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
              We engineer robust web, mobile, and deep-tech cloud infrastructure for global business ecosystems. Transform your processes with production-vetted architecture.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/services"
                className="w-full sm:w-auto bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-all font-bold shadow-lg shadow-blue-600/20 text-center"
              >
                Explore Services Portfolio
              </Link>
              <Link
                to="/contact"
                className="w-full sm:w-auto bg-white text-gray-700 px-8 py-4 rounded-lg hover:bg-gray-50 transition-all border-2 border-gray-200 font-bold text-center"
              >
                Schedule Technical Discovery
              </Link>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-24 max-w-5xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white/70 backdrop-blur-md border border-gray-200/60 rounded-xl p-6 text-center shadow-sm">
                <div className="flex justify-center text-blue-600 mb-3">{stat.icon}</div>
                <div className="text-3xl font-extrabold text-gray-900 mb-1">{stat.value}</div>
                <div className="text-xs font-semibold uppercase tracking-wider text-gray-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Capabilities Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">
              Our Software Capabilities
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From robust custom architectures to continuous automated deployment pipelines, we construct resilient systems built to scale exponentially.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl border border-gray-100 hover:border-blue-500 hover:shadow-2xl hover:shadow-blue-500/5 transition-all group flex flex-col justify-between">
                <div>
                  <div className="text-blue-600 mb-5 bg-blue-50 w-14 h-14 rounded-xl flex items-center justify-center border border-blue-100">{service.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">{service.description}</p>
                </div>
                
                {/* Tech tags directly matching screenshot styling */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-50">
                  {service.techs.map((tech, idx) => (
                    <span key={idx} className="bg-blue-50 text-blue-600 text-xs font-semibold px-3 py-1 rounded-md border border-blue-100/60">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate Advantage Feature Section */}
      <section className="py-24 bg-gradient-to-r from-blue-700 to-blue-600 text-white relative">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight">
              Why Global Enterprise Teams Trust Us
            </h2>
            <p className="text-xl text-blue-100 leading-relaxed">
              We operate strictly at the intersection of business intelligence and battle-tested code architecture, bypassing outmoded workflows completely.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {valueProps.map((prop, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/10 shadow-xl flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold mb-4 text-blue-200 tracking-wide flex items-center gap-2">
                    <Shield className="w-5 h-5 text-blue-300" /> {prop.title}
                  </h3>
                  <p className="text-blue-50/90 leading-relaxed text-sm">
                    {prop.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Network Ecosystem / Corporate Partners */}
      <section className="py-20 bg-gray-50 border-t border-b border-gray-100">
        <div className="container mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-3 tracking-tight">
              Where Our Technical Solutions Deploy
            </h2>
            <p className="text-md text-gray-500 font-medium">
              Trusted integration capabilities across market leaders and massive legacy tech platforms alike.
            </p>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-6 max-w-5xl mx-auto">
            {companyLogos.map((company, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200/80 px-8 py-3.5 rounded-xl text-lg font-bold text-gray-400 hover:border-blue-500 hover:text-blue-600 transition-all duration-300 shadow-sm"
              >
                {company}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise Closing Call to Action */}
      <section className="py-24 bg-gray-950 text-white text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="container mx-auto px-6 max-w-3xl relative z-10">
          <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight">
            Accelerate Your Next Digital <span className="text-blue-400">Milestone</span>
          </h2>
          <p className="text-lg text-gray-400 mb-10 leading-relaxed max-w-2xl mx-auto">
            Connect directly with a Senior Solutions Architect to break down your application scale goals, system integration needs, or deep-tech product specification roadmap.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/contact?type=consultation"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-all font-bold text-lg shadow-lg shadow-blue-600/20"
            >
              Request Tech Consultation
            </Link>
            <Link
              to="/portfolio"
              className="bg-gray-900 text-gray-200 border border-gray-800 px-8 py-4 rounded-lg hover:bg-gray-800 transition-all font-bold text-lg"
            >
              Review Case Studies
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}