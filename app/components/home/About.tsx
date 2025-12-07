// components/home/About.tsx
import Link from 'next/link'
import Image from 'next/image'

export default function About() {
  return (
    <section className="bg-slate-50 py-16">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 md:grid-cols-2">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">About Petro Power Engineering Services</h2>
          <p className="mt-4 text-sm text-slate-700">
            Founded in November 2015 as a partnership firm under the Indian Partnership Act 1932, Petro Power Engineering
            Services has grown into a trusted name in industrial engineering for refineries, fertilizers, power plants and
            chemical industries.
          </p>
          <ul className="mt-4 space-y-2 text-sm text-slate-700">
            <li>• IBR Special Class certification for boiler erection and repair</li>
            <li>• Approved for pressure vessel and pressure parts manufacturing</li>
            <li>• 1000+ skilled employees including engineers and certified welders</li>
            <li>• Operations across Rajasthan, Gujarat and Uttar Pradesh</li>
          </ul>
          <Link href="/about" className="mt-6 inline-block text-sm font-semibold text-blue-700">
            Learn more →
          </Link>
        </div>
        <div className="rounded-lg bg-white p-6 shadow">
          <h3 className="text-lg font-semibold text-slate-900">Financial growth</h3>
          <div className="mt-4 space-y-3 text-sm">
            <div className="flex justify-between border-b pb-2">
              <span>FY 2015–16</span>
              <span className="font-semibold text-blue-700">₹1.17 Cr</span>
            </div>
            <div className="flex justify-between border-b pb-2">
              <span>FY 2017–18</span>
              <span className="font-semibold text-blue-700">₹13.32 Cr</span>
            </div>
            <div className="flex justify-between border-b pb-2">
              <span>FY 2019–20</span>
              <span className="font-semibold text-blue-700">₹21.85 Cr</span>
            </div>
            <div className="flex justify-between border-b pb-2">
              <span>FY 2022–23</span>
              <span className="font-semibold text-blue-700">₹29.02 Cr</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
