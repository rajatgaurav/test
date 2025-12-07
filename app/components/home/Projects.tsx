// components/home/Projects.tsx
import Link from 'next/link'
import Image from 'next/image'


export default function Projects() {
  const projects = [
    {
      title: 'HRSG Boiler Relocation',
      client: 'Thermax Ltd',
      desc: 'Dismantling 125 TPH HRSG at RIL Dahej and erection at RIL Jamnagar.',
      status: 'Completed',
    },
    {
      title: 'DCU Heater Erection',
      client: 'Tecnicas Reunidas / Neo Structo',
      desc: 'Mechanical erection of DCU-1 and DCU-2 heaters at HRRL Barmer.',
      status: 'In progress',
    },
    {
      title: 'Reformer Installation',
      client: 'Onshore Construction',
      desc: 'Erection and commissioning of primary reformer at CFCL Kota.',
      status: 'Completed',
    },
  ]

  return (
    <section className="bg-slate-50 py-16">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="text-center text-2xl font-bold text-slate-900">Featured Projects</h2>
        <p className="mt-2 text-center text-sm text-slate-600">
          Delivering critical projects for leading industrial clients.
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {projects.map((p, i) => (
            <div key={i} className="rounded-lg bg-white p-5 shadow-sm">
              <div className="mb-2 text-xs font-semibold text-blue-600">{p.status}</div>
              <h3 className="text-base font-semibold text-slate-900">{p.title}</h3>
              <div className="mt-1 text-xs font-semibold text-slate-600">{p.client}</div>
              <p className="mt-2 text-sm text-slate-700">{p.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link href="/projects" className="text-sm font-semibold text-blue-700">
            View all projects →
          </Link>
        </div>
      </div>
    </section>
  )
}
