import { Award, Users, Target, Heart, CheckCircle, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function About() {
  const stats = [
    { icon: <Users className="w-10 h-10" />, value: '10,000+', label: 'Students Trained' },
    { icon: <Award className="w-10 h-10" />, value: '100+', label: 'Expert Trainers' },
    { icon: <TrendingUp className="w-10 h-10" />, value: '95%', label: 'Placement Rate' },
    { icon: <Target className="w-10 h-10" />, value: '1250+', label: 'Hiring Partners' },
  ];

  const values = [
    {
      icon: <Target className="w-12 h-12" />,
      title: 'Excellence in Education',
      description:
        'We are committed to delivering top-quality education and IT services that meet industry standards and exceed expectations.',
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: 'Client & Student-Centric Approach',
      description:
        'We believe in long-term relationships by focusing on client satisfaction and student success through personalized mentorship and innovation.',
    },
    {
      icon: <Heart className="w-12 h-12" />,
      title: 'Passion for Technology',
      description:
        'Our passion for technology drives us to continuously innovate and deliver impactful learning and IT solutions.',
    },
    {
      icon: <Award className="w-12 h-12" />,
      title: 'Industry Recognition',
      description:
        'Our training programs and IT services are recognized by leading companies and aligned with modern business requirements.',
    },
  ];

  const achievements = [
    'Awarded Best IT & EdTech Company 2024',
    'Partnership with 1250+ Hiring Companies',
    'Trained 10,000+ Students Successfully',
    '95% Placement Success Rate',
    'Serving Clients Across 15+ Cities in India',
    'Rated 4.8/5 by Students & Clients',
  ];

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-cyan-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              About <span className="text-blue-600">exordiainnovation</span>
            </h1>
            <p className="text-xl text-gray-600">
              Empowering individuals and businesses through innovative IT services and world-class tech education.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
                <div className="space-y-4 text-gray-700 text-lg">
                  <p>
                    Founded in 2019, <strong>exordiainnovation</strong> began with a clear vision — to bridge the gap
                    between education, technology, and real-world business solutions. We identified the need for a
                    company that could both train aspiring professionals and deliver high-quality IT services to clients.
                  </p>
                  <p>
                    Since our inception, we have grown into one of India’s trusted names in both training and IT
                    development. Our team of experts works tirelessly to ensure excellence in software development,
                    corporate training, and career transformation.
                  </p>
                  <p>
                    Today, exordiainnovation continues to empower students and businesses alike — transforming ideas into
                    impactful digital experiences and successful careers.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 text-center"
                  >
                    <div className="flex justify-center text-blue-600 mb-3">{stat.icon}</div>
                    <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Mission & Vision</h2>
              <p className="text-xl text-gray-600">Driving innovation, growth, and digital excellence</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                  <Target className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
                <p className="text-gray-700 text-lg">
                  To deliver high-quality IT services and professional training that empower individuals and
                  organizations to achieve digital transformation and career success.
                </p>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-lg">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                  <TrendingUp className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
                <p className="text-gray-700 text-lg">
                  To become a global leader in IT services and tech education — shaping the future through innovation,
                  learning, and excellence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
              <p className="text-xl text-gray-600">Principles that drive our success</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <div key={index} className="flex gap-6">
                  <div className="text-blue-600 flex-shrink-0">{value.icon}</div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{value.title}</h3>
                    <p className="text-gray-700 text-lg">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Achievements</h2>
              <p className="text-xl text-gray-600">Milestones that define our journey</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 flex items-start gap-4 shadow-lg hover:shadow-xl transition"
                >
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <span className="text-lg text-gray-800 font-medium">{achievement}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Join Our Success Story</h2>
            <p className="text-xl text-gray-300 mb-8">
              Be part of exordiainnovation — where innovation meets opportunity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/courses"
                className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition font-semibold"
              >
                Explore Courses
              </Link>
              <Link
                to="/contact"
                className="bg-white text-gray-900 px-8 py-3 rounded-lg hover:bg-gray-100 transition font-semibold"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
