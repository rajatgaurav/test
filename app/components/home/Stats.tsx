// components/home/Stats.tsx
'use client'

import { TrendingUp, Award, Users, Wrench } from 'lucide-react'

export default function Stats() {
  const stats = [
    { icon: TrendingUp, value: '2475%', label: 'Growth since 2015', desc: 'From ₹1.17 Cr to ₹29 Cr' },
    { icon: Award, value: 'Special Class', label: 'IBR certified', desc: 'Rajasthan & Gujarat' },
    { icon: Users, value: '110+ yrs', label: 'Leadership exp.', desc: 'Combined experience' },
    { icon: Wrench, value: '50+', label: 'Major projects', desc: 'Executed successfully' },
  ]

  return (
    <section className="bg-white py-12">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 md:grid-cols-4">
        {stats.map((s, i) => (
          <div key={i} className="text-center">
            <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
              <s.icon className="h-6 w-6 text-blue-600" />
            </div>
            <div className="text-xl font-bold text-slate-900">{s.value}</div>
            <div className="text-sm font-semibold text-slate-700">{s.label}</div>
            <div className="mt-1 text-xs text-slate-500">{s.desc}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
