// components/home/Services.tsx
import { Flame, Cog, Droplets, Shield, Wrench, Hammer } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'


export default function Services() {
  const items = [
    { icon: Flame, title: 'Boilers & Heaters', desc: 'Erection, commissioning and maintenance of boilers and HRSG.' },
    { icon: Cog, title: 'Reformers', desc: 'Primary reformer and startup heater erection and commissioning.' },
    { icon: Droplets, title: 'IBR Piping', desc: 'High‑pressure IBR piping with heavy wall thickness.' },
    { icon: Shield, title: 'Pressure Vessels', desc: 'Fabrication of pressure vessels and pressure parts.' },
    { icon: Wrench, title: 'Shutdown Services', desc: 'Planned shutdown and overhauling services.' },
    { icon: Hammer, title: 'Structural Works', desc: 'Structural fabrication and mechanical installations.' },
  ]

  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="text-center text-2xl font-bold text-slate-900">Our Services</h2>
        <p className="mt-2 text-center text-sm text-slate-600">
          Comprehensive engineering solutions for industrial applications.
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {items.map((s, i) => (
            <div key={i} className="rounded-lg border bg-slate-50 p-5 text-sm">
              <s.icon className="mb-3 h-6 w-6 text-blue-600" />
              <h3 className="text-base font-semibold text-slate-900">{s.title}</h3>
              <p className="mt-2 text-slate-700">{s.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link href="/services" className="text-sm font-semibold text-blue-700">
            View all services →
          </Link>
        </div>
      </div>
    </section>
  )
}
