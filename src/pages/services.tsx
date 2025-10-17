import { Globe, Smartphone, Cpu, Cloud, Database, Code, Megaphone } from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "Web Development",
      description: "Custom and responsive websites using modern frameworks like React, Next.js, and Tailwind CSS.",
      icon: <Globe className="w-10 h-10 text-blue-600" />,
    },
    {
      title: "App Development",
      description: "Cross-platform mobile applications using Flutter and React Native for Android & iOS.",
      icon: <Smartphone className="w-10 h-10 text-green-600" />,
    },
    {
      title: "AI & Machine Learning",
      description: "Data-driven AI solutions that bring automation, insights, and intelligence to your business.",
      icon: <Cpu className="w-10 h-10 text-purple-600" />,
    },
    {
      title: "Cloud Solutions",
      description: "Seamless cloud deployment, migration, and management using AWS, Azure, and GCP.",
      icon: <Cloud className="w-10 h-10 text-cyan-600" />,
    },
    {
      title: "Database Management",
      description: "Secure and scalable data storage, integration, and analytics services for businesses.",
      icon: <Database className="w-10 h-10 text-orange-600" />,
    },
    {
      title: "Software Consulting",
      description: "End-to-end IT strategy and product consultation to help you build scalable solutions.",
      icon: <Code className="w-10 h-10 text-pink-600" />,
    },
    {
      title: "Digital Marketing",
      description: "Grow your brand visibility with SEO, social media marketing, Google Ads, and content strategies.",
      icon: <Megaphone className="w-10 h-10 text-yellow-600" />,
    },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-28 pb-16">
      {/* ✅ Added top padding so it starts below fixed header */}
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Our IT Services</h1>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          We deliver innovative digital and IT solutions to help your business grow, scale, and succeed.
        </p>

        {/* ✅ Services Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex justify-center mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h3>
              <p className="text-gray-500 text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
