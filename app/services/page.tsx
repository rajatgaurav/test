import { Wrench, Flame, Droplets, Shield, Cog, Hammer } from 'lucide-react'
import Link from 'next/link'

export const metadata = {
  title: 'Our Services | Petro Power Engineering Services',
  description: 'Comprehensive engineering services including boiler erection, reformer installation, IBR piping, and more.',
}

export default function ServicesPage() {
  const services = [
    {
      icon: Flame,
      title: 'Boiler & Heater Services',
      description: 'Complete erection, commissioning, maintenance and overhauling of boilers, HRSG, and industrial heaters.',
      details: ['HRSG Boiler Erection', 'Boiler Maintenance', 'IBR Certified Works', 'Pressure Parts Replacement']
    },
    {
      icon: Cog,
      title: 'Reformer Installation',
      description: 'Specialized in primary reformer and startup heater fabrication, erection, and commissioning.',
      details: ['Primary Reformer Erection', 'Startup Heater Installation', 'Reformer Revamp', 'Commissioning Support']
    },
    {
      icon: Droplets,
      title: 'IBR Piping Works',
      description: 'High-pressure piping with wall thickness up to 76mm in P22 material and other alloy steels.',
      details: ['High-Pressure Piping', 'Heavy Wall Thickness', 'Steam & Feed Lines', 'IBR Compliance']
    },
    {
      icon: Shield,
      title: 'Pressure Vessel Fabrication',
      description: 'Manufacturing of pressure vessels and pressure parts with design pressure up to 300 kg/cm².',
      details: ['Pressure Vessel Manufacturing', 'Pressure Parts', 'Heat Exchanger Fabrication', 'Quality Testing']
    },
    {
      icon: Wrench,
      title: 'Shutdown & Maintenance',
      description: 'Planned shutdown works, maintenance contracts, and emergency repair services.',
      details: ['Annual Maintenance Contract', 'Shutdown Planning', 'Preventive Maintenance', 'Emergency Repairs']
    },
    {
      icon: Hammer,
      title: 'Structural Fabrication',
      description: 'Miscellaneous structural fabrication jobs and mechanical equipment installation.',
      details: ['Structural Steel Work', 'Equipment Installation', 'Mechanical Packages', 'Site Erection']
    },
  ]

  const alliedServices = [
    'NDT Services (Radiography, UT, LPT, PMI)',
    'PWHT Services',
    'Liaison with Factories & Boiler Department',
    'Project Management Consulting',
    'Heavy Equipment Rigging',
    'Quality Assurance & Control'
  ]

  return (
    <div className="pt-20">
      <section className="bg-gradient-to-br from-primary-900 to-primary-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-blue-100 max-w-3xl">Comprehensive engineering solutions across fabrication, erection, maintenance, and shutdown services</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <div key={i} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-xl transition-shadow">
                <service.icon className="w-12 h-12 text-primary-600 mb-4" />
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.details.map((detail, j) => (
                    <li key={j} className="text-sm text-gray-700 flex items-start">
                      <span className="text-accent-500 mr-2">•</span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-center">Allied Services</h2>
          <p className="section-subtitle text-center max-w-2xl mx-auto">Comprehensive support services to complement our core offerings</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-12">
            {alliedServices.map((service, i) => (
              <div key={i} className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-primary-500">
                <p className="font-medium text-gray-800">{service}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Need a Custom Solution?</h2>
          <p className="text-xl text-blue-100 mb-8">Contact us to discuss your specific project requirements</p>
          <Link href="/contact" className="btn-secondary inline-block">Get in Touch</Link>
        </div>
      </section>
    </div>
  )
}