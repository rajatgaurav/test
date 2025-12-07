import { Users, Award, Target, Shield } from 'lucide-react'
import Image from 'next/image'

export const metadata = {
  title: 'About Us | Petro Power Engineering Services',
  description: 'Learn about our company history, leadership team, and commitment to quality.',
}

export default function AboutPage() {
  const team = [
    { name: 'Mr. A. Joseph Raj', position: 'Business Head & Partner', experience: '33+ years', phone: '9983327005' },
    { name: 'Mr. Anthony Joseph', position: 'Partner', experience: '31+ years', phone: '9950332766' },
    { name: 'Mr. Shahzad', position: 'Partner', experience: '28+ years', phone: '9672290922' },
    { name: 'Mr. Saurabh Pahwa', position: 'Partner - Finance', experience: '18+ years', phone: '7727056504' },
  ]

  return (
    <div className="pt-20">
      <section className="bg-gradient-to-br from-primary-900 to-primary-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Petro Power Engineering Services</h1>
          <p className="text-xl text-blue-100 max-w-3xl">Partnership firm established in November 2015, specializing in industrial engineering solutions for refineries, fertilizers, power plants, and chemical industries.</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-center">Leadership Team</h2>
          <p className="section-subtitle text-center max-w-2xl mx-auto">Our partners bring over 110 combined years of industrial engineering expertise</p>
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            {team.map((member, i) => (
              <div key={i} className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-primary-700">{member.name}</h3>
                <p className="text-gray-600 font-medium">{member.position}</p>
                <p className="text-sm text-gray-500 mt-2">{member.experience} of experience</p>
                <p className="text-sm text-primary-600 mt-2">Contact: {member.phone}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-primary-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-center">Workforce Strength</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-12">
            {[
              { role: 'Execution Engineers', count: 24 },
              { role: 'QA Engineers', count: 10 },
              { role: 'Supervisors', count: 40 },
              { role: 'Safety Supervisors', count: 15 },
              { role: 'HP Welders', count: 40 },
              { role: 'Pipe Fitters', count: 65 },
              { role: 'Riggers', count: 400 },
              { role: 'Support Staff', count: 300 },
            ].map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-lg shadow text-center">
                <div className="text-3xl font-bold text-primary-600 mb-2">{item.count}+</div>
                <div className="text-gray-700 font-medium text-sm">{item.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

            {/* Certificates & Recognition */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-center">Certificates & Recognition</h2>
          <p className="section-subtitle text-center max-w-2xl mx-auto">
            Our certifications validate our commitment to quality and safety
          </p>
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {[
              {
                title: 'IBR Special Class Certificate',
                issuer: 'Govt. of Rajasthan',
                year: '2022-2024',
                description: 'Boiler repair/erection certification',
              },
              {
                title: 'BORL Vendor Registration',
                issuer: 'Bharat Oman Refineries',
                year: '2021',
                description: 'Approved service provider',
              },
              {
                title: 'Thermax Appreciation',
                issuer: 'Thermax Ltd',
                year: '2020',
                description: 'KAVACH Safety Champion Award',
              },
              {
                title: 'Pressure Vessel Approval',
                issuer: 'Govt. of Rajasthan',
                year: '2023-2025',
                description: 'Manufacturing approval',
              },
              {
                title: 'GAIL Completion Certificate',
                issuer: 'GAIL India Ltd',
                year: '2018',
                description: 'IBR piping works completion',
              },
              {
                title: 'EIL Approved Contractor',
                issuer: 'Engineers India Ltd',
                year: '2017',
                description: 'Sub-contractor approval',
              },
            ].map((cert, i) => (
              <div key={i} className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-lg border-2 border-blue-200 hover:shadow-lg transition-shadow">
                <div className="bg-primary-600 text-white text-xs font-bold px-3 py-1 rounded-full inline-block mb-3">
                  {cert.year}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{cert.title}</h3>
                <p className="text-primary-600 font-semibold text-sm mb-2">{cert.issuer}</p>
                <p className="text-gray-600 text-sm">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}