import Image from 'next/image'

export default function Clients() {
  const clients = [
    'Thermax Ltd',
    'Onshore Construction',
    'Hindalco Industries',
    'GAIL India',
    'Bharat Oman Refineries',
    'Engineers India Ltd',
    'Reliance Industries',
    'Chambal Fertilizers',
    'Isgec Heavy Engineering',
    'Toyo Engineering',
  ]

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title text-center">Our Esteemed Clients</h2>
        <p className="section-subtitle text-center max-w-2xl mx-auto">
          Trusted by leading companies across industries
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-12">
          {clients.map((client, i) => (
            <div 
              key={i} 
              className="bg-white border-2 border-gray-200 p-6 rounded-lg flex items-center justify-center text-center hover:shadow-lg hover:border-primary-300 transition-all min-h-[100px]"
            >
              <span className="font-semibold text-gray-700 text-sm">{client}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}










// // components/home/Clients.tsx
// export default function Clients() {
//   const clients = [
//     'Thermax',
//     'Onshore Construction',
//     'Hindalco',
//     'GAIL',
//     'BORL',
//     'EIL',
//     'Reliance',
//     'Chambal Fertilizers',
//     'Isgec',
//     'Toyo Engineering',
//   ]

//   return (
//     <section className="bg-white py-16">
//       <div className="mx-auto max-w-7xl px-4">
//         <h2 className="text-center text-2xl font-bold text-slate-900">Our Clients</h2>
//         <p className="mt-2 text-center text-sm text-slate-600">
//           Trusted by leading organizations across India.
//         </p>
//         <div className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
//           {clients.map(c => (
//             <div
//               key={c}
//               className="flex items-center justify-center rounded-lg bg-slate-50 px-3 py-4 text-center text-xs font-semibold text-slate-700 shadow-sm"
//             >
//               {c}
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }
