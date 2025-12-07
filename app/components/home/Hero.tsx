// components/home/Hero.tsx
'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 pt-28 pb-16 text-white">
      <div className="mx-auto max-w-7xl px-4">
        <h1 className="text-4xl font-bold md:text-5xl">
          Excellence in Industrial Engineering Solutions
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-slate-200">
          Specialized in refineries, fertilizers, power plants, boilers and IBR certified works
          with 33+ years of experience.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Link href="/services" className="rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold hover:bg-blue-700">
            Our Services
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center rounded-lg border border-slate-400 px-6 py-3 text-sm font-semibold"
          >
            Get in touch
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
        <div className="mt-10 grid gap-6 text-sm text-slate-200 md:grid-cols-4">
          <div>
            <div className="text-2xl font-bold">33+</div>
            <div>Years experience</div>
          </div>
          <div>
            <div className="text-2xl font-bold">1000+</div>
            <div>Skilled workforce</div>
          </div>
          <div>
            <div className="text-2xl font-bold">₹29 Cr+</div>
            <div>Annual turnover</div>
          </div>
          <div>
            <div className="text-2xl font-bold">IBR</div>
            <div>Special Class certified</div>
          </div>
        </div>
      </div>
    </section>
  )
}
