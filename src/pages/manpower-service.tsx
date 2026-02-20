import React from "react";

const industries: string[] = [
  "Construction",
  "Manufacturing",
  "Logistics",
  "Healthcare",
  "Retail",
  "Hospitality",
  "IT & Technical",
];

const ManpowerServicesPage: React.FC = () => {
  return (
    <div className="font-sans text-gray-800">

      {/* HERO */}
      <section className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white text-center py-20 pt-32 px-2">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Reliable Manpower Services
        </h1>
        <p className="max-w-2xl mx-auto text-lg opacity-90">
          Providing skilled and dependable workforce for businesses of all sizes.
        </p>
        <button className="mt-8 bg-white text-indigo-600 px-8 py-3 rounded-xl font-semibold shadow">
          Request Workforce
        </button>
      </section>

      {/* SERVICES */}
      <section className="py-16 px-6 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-10">Our Services</h2>

        <div className="grid md:grid-cols-3 gap-8">
          <ServiceCard
            title="Skilled Workforce"
            description="Professional and technical staff ready to support your operations."
          />
          <ServiceCard
            title="Temporary Staffing"
            description="Flexible manpower solutions for seasonal and project needs."
          />
          <ServiceCard
            title="Contract Staffing"
            description="Long-term workforce deployment with compliance support."
          />
        </div>
      </section>

      {/* WHY CHOOSE Us */}
      <section className="bg-gray-100 py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Why Choose Us</h2>
          <ul className="space-y-3 text-lg">
            <li>✔ Verified & trained workforce</li>
            <li>✔ Quick deployment</li>
            <li>✔ Compliance with labor laws</li>
            <li>✔ Cost-effective staffing</li>
            <li>✔ Dedicated support</li>
          </ul>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-8">Industries We Serve</h2>
        <div className="flex flex-wrap justify-center gap-3">
          {industries.map((item, index) => (
            <span
              key={index}
              className="bg-gray-200 px-4 py-2 rounded-full text-sm font-medium"
            >
              {item}
            </span>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-indigo-600 text-white text-center py-16 px-6">
        <h2 className="text-3xl font-bold mb-4">
          Need Reliable Workforce?
        </h2>
        <p className="mb-6 opacity-90">
          Partner with us for dependable manpower solutions.
        </p>
          

  <a
    href="https://wa.me/919493252078"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-xl font-semibold shadow"
  >
    Contact us on WhatsApp
  </a>

      </section>

      

    </div>
  );
};

interface ServiceCardProps {
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description }) => (
  <div className="bg-white p-6 rounded-2xl shadow">
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

export default ManpowerServicesPage;
