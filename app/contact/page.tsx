'use client'

import { MapPin, Phone, Mail } from 'lucide-react'
import { useState } from 'react'

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Thank you! We will contact you soon.')
    setFormData({ name: '', email: '', phone: '', message: '' })
  }

  return (
    <div className="pt-20">
      <section className="bg-gradient-to-br from-primary-900 to-primary-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            Get in touch for inquiries or project discussions
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold mb-6">Send a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Name *</label>
                  <input type="text" required value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Email *</label>
                  <input type="email" required value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Phone *</label>
                  <input type="tel" required value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Message *</label>
                  <textarea required rows={4} value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500" />
                </div>
                <button type="submit" className="btn-primary w-full">Send Message</button>
              </form>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              <div className="bg-primary-50 p-6 rounded-lg space-y-4">
                <div className="flex items-start">
                  <MapPin className="w-6 h-6 text-primary-600 mr-3 mt-1" />
                  <div>
                    <h3 className="font-bold mb-1">Head Office</h3>
                    <p className="text-sm text-gray-700">Building No. 8, Bhawana Vihar 1st Floor<br />Main Deoli Arab Road, Borkhera<br />Kota - 324001, Rajasthan</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-primary-600 mr-3" />
                  <a href="tel:+919983327005" className="text-primary-700 font-medium">+91 9983327005</a>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-primary-600 mr-3" />
                  <a href="mailto:petropowerengineering@gmail.com" className="text-primary-700 font-medium text-sm">petropowerengineering@gmail.com</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
