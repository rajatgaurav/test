// components/home/CTA.tsx
import Link from 'next/link'
import { Phone } from 'lucide-react'
import Image from 'next/image'

export default function CTA() {
  return (
    <section className="bg-slate-900 py-16 text-white">
      <div className="mx-auto max-w-4xl px-4 text-center">
        <h2 className="text-2xl font-bold">Ready to start your project?</h2>
        <p className="mt-3 text-sm text-slate-200">
          Contact us to discuss your boiler, reformer, piping or structural requirements.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-4">
          <Link
            href="/contact"
            className="rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold hover:bg-blue-700"
          >
            Get in touch
          </Link>
          <a
            href="tel:+919983327005"
            className="inline-flex items-center gap-2 rounded-lg border border-slate-400 px-6 py-3 text-sm font-semibold"
          >
            <Phone className="h-4 w-4" />
            Call now
          </a>
        </div>
      </div>
    </section>
  )
}
