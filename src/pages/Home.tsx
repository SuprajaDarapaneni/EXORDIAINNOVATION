import { Award, Users, Briefcase, Star, ChevronRight, Code, Database, Brain, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  const stats = [
    { icon: <Users className="w-10 h-10" />, value: '30,000+', label: 'Trained Students' },
    { icon: <Briefcase className="w-10 h-10" />, value: '1250+', label: 'Hiring Companies' },
    { icon: <Star className="w-10 h-10" />, value: '4.8/5', label: 'Student Rating' },
    { icon: <Award className="w-10 h-10" />, value: '100+', label: 'Expert Trainers' },
  ];

  const courses = [
    { name: 'Python Programming', duration: '2 Months', icon: <Code className="w-8 h-8" />, slug: 'python' },
    { name: 'Java Full Stack', duration: '3 Months', icon: <Code className="w-8 h-8" />, slug: 'java' },
    { name: 'Data Science', duration: '4 Months', icon: <Database className="w-8 h-8" />, slug: 'data-science' },
    { name: 'Machine Learning', duration: '3 Months', icon: <Brain className="w-8 h-8" />, slug: 'machine-learning' },
    { name: 'React JS Development', duration: '2 Months', icon: <Code className="w-8 h-8" />, slug: 'react' },
    { name: 'Software Testing', duration: '2 Months', icon: <CheckCircle className="w-8 h-8" />, slug: 'testing' },
  ];

  const testimonials = [
    {
      name: 'Priya Sharma',
      course: 'Data Science',
      text: 'The training was excellent and helped me land my dream job at a leading tech company.',
      rating: 5,
    },
    {
      name: 'Rajesh Kumar',
      course: 'Java Full Stack',
      text: 'Practical approach with real projects made all the difference in my learning journey.',
      rating: 5,
    },
    {
      name: 'Ananya Reddy',
      course: 'Python Programming',
      text: 'Best decision I made for my career. The instructors are knowledgeable and supportive.',
      rating: 5,
    },
  ];

  const companyLogos = ['Google', 'Microsoft', 'Amazon', 'TCS', 'Infosys', 'Wipro', 'Accenture', 'Cognizant'];

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-cyan-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              India's Most Trusted <span className="text-blue-600">EdTech Institute</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Transform your career with expert-led training programs. Get job-ready skills from industry professionals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/courses"
                className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition flex items-center justify-center gap-2 text-lg font-semibold"
              >
                Explore Courses <ChevronRight className="w-5 h-5" />
              </Link>
              <Link
                to="/contact"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-50 transition border-2 border-blue-600 text-lg font-semibold"
              >
                Book Free Demo
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 max-w-5xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition">
                <div className="flex justify-center text-blue-600 mb-3">{stat.icon}</div>
                <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Popular <span className="text-blue-600">Training Programs</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose from our comprehensive range of courses designed to make you job-ready
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {courses.map((course, index) => (
              <div
                key={index}
                className="bg-white border-2 border-gray-100 rounded-xl p-8 hover:border-blue-600 hover:shadow-xl transition group"
              >
                <div className="text-blue-600 mb-4 group-hover:scale-110 transition">{course.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{course.name}</h3>
                <p className="text-gray-600 mb-4">Duration: {course.duration}</p>
                <Link
                  to={`/courses/${course.slug}`}
                  className="text-blue-600 font-semibold flex items-center gap-2 hover:gap-3 transition-all"
                >
                  View Details <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/courses"
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition text-lg font-semibold"
            >
              View All Courses
            </Link>
          </div>
        </div>
      </section>

      {/* Hiring Partners Section */}
      <section className="py-20 bg-white border-t">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our <span className="text-blue-600">Hiring Partners</span>
            </h2>
            <p className="text-xl text-gray-600">
              Students get placed in top companies across the globe
            </p>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 max-w-5xl mx-auto">
            {companyLogos.map((company, index) => (
              <div
                key={index}
                className="bg-gray-50 px-8 py-4 rounded-lg text-2xl font-bold text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition"
              >
                {company}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              What Our <span className="text-blue-600">Students Say</span>
            </h2>
            <p className="text-xl text-gray-600">
              Success stories from our alumni
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>
                <div>
                  <div className="font-bold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.course}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Start Your <span className="text-blue-400">Learning Journey</span>?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of students who have transformed their careers with us
            </p>
            <Link
              to="/contact"
              className="inline-block bg-blue-600 text-white px-10 py-4 rounded-lg hover:bg-blue-700 transition text-lg font-semibold"
            >
              Get Started Today
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
