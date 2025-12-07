import { Wrench, Shield, Award } from 'lucide-react'
import Image from 'next/image'

export const metadata = {
  title: 'Capabilities | Petro Power Engineering Services',
  description: 'Our equipment inventory and certifications.',
}

export default function CapabilitiesPage() {
  return (
    <div className="pt-20">
      <section className="bg-gradient-to-br from-primary-900 to-primary-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Capabilities</h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            World-class equipment, certified workforce, and industry certifications
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-8">
            <Shield className="w-8 h-8 text-primary-600 mr-3" />
            <h2 className="text-3xl font-bold">Certifications</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-primary-50 p-6 rounded-lg">
              <Award className="w-8 h-8 text-accent-600 mb-3" />
              <h3 className="text-xl font-bold mb-2">IBR Special Class Certificate</h3>
              <p className="text-gray-700 mb-2">Chief Inspector of Factories & Boilers, Rajasthan</p>
              <p className="text-sm text-gray-600">Boiler repair/erection certification</p>
              <p className="text-sm text-accent-600 font-semibold mt-2">Valid up to 02/11/2024</p>
              <p className="text-sm text-gray-600">Valid in: Rajasthan & Gujarat</p>
            </div>
            <div className="bg-primary-50 p-6 rounded-lg">
              <Award className="w-8 h-8 text-accent-600 mb-3" />
              <h3 className="text-xl font-bold mb-2">Pressure Vessel Manufacturing</h3>
              <p className="text-gray-700 mb-2">Approved by Chief Inspector, Rajasthan</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Design Pressure: Up to 300 kg/cm²</li>
                <li>• Design Temperature: Up to 3000°C</li>
                <li>• Evaporation Capacity: Up to 3000 kg/hr</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-8">
            <Wrench className="w-8 h-8 text-primary-600 mr-3" />
            <h2 className="text-3xl font-bold">Equipment Inventory</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-bold text-primary-700 mb-4">Lifting/Rigging Equipment</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex justify-between"><span>Chain Pulley Blocks</span><span className="font-semibold">243 units</span></li>
                <li className="flex justify-between"><span>Wire Rope Slings</span><span className="font-semibold">148 units</span></li>
                <li className="flex justify-between"><span>Shackles & Pulleys</span><span className="font-semibold">390 units</span></li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-bold text-primary-700 mb-4">Welding Equipment</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex justify-between"><span>Welding Rectifiers (450A)</span><span className="font-semibold">85 units</span></li>
                <li className="flex justify-between"><span>TIG Welding Sets</span><span className="font-semibold">65 units</span></li>
                <li className="flex justify-between"><span>Other Welding Equipment</span><span className="font-semibold">78 units</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
