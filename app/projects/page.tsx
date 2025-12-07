import { CheckCircle2, Clock, Camera } from 'lucide-react'
import Image from 'next/image'


export const metadata = {
  title: 'Projects | Petro Power Engineering Services',
  description: 'View our completed and ongoing industrial engineering projects across India.',
}

export default function ProjectsPage() {
  const completedProjects = [
    {
      title: 'HRSG Boiler Dismantling & Erection',
      client: 'Thermax Engineering Construction Company Ltd',
      location: 'RIL Dahej & Jamnagar, Gujarat',
      description: 'Dismantling of 1 x 125 TPH HRSG at RIL Dahej and erection at RIL Jamnagar',
      value: '₹4.64 Cr',
    },
    {
      title: 'Primary Reformer Erection',
      client: 'Onshore Construction Company Pvt Ltd',
      location: 'CFCL, Kota',
      description: 'Erection and commissioning of primary reformer and startup heater',
    },
    {
      title: 'Reformer Package Installation',
      client: 'Onshore Construction Company Pvt Ltd',
      location: 'RFCL, Ramagundam',
      description: 'Complete reformer package erection',
    },
    {
      title: 'WHRB Boiler Overhauling',
      client: 'Hindalco Industries Ltd (Birla Copper)',
      location: 'Dahej, Gujarat',
      description: 'Complete overhauling of WHRB boiler CU-3 during ASD 2021 and CU-1 & SAP-1 during ASD 2023',
    },
    {
      title: 'HRSG#1 & 2 Relocation',
      client: 'Thermax Babcock & Wilcox Energy Solutions Pvt Ltd',
      location: 'Reliance Syngas Ltd',
      description: 'Relocation of HRSG#1 and HRSG#2 systems',
    },
    {
      title: 'IBR Piping at Utility Boiler',
      client: 'GAIL India Ltd',
      location: 'GAIL Vijaipur, Guna (MP)',
      description: 'Site execution of IBR piping works - interconnection of BFW pump discharge header',
      value: '₹23.67 Lakh',
    },
    {
      title: 'Reformer Revamp Works',
      client: 'Thermax Babcock & Wilcox Energy Solutions',
      location: 'MCF, Mangalore, Karnataka',
      description: 'Reformer revamp works during shutdown',
    },
  ]

  const ongoingProjects = [
    {
      title: 'DCU-1 Heater Erection',
      client: 'Tecnicas Reunidas S.A',
      location: 'HRRL, Barmer',
      description: 'Mechanical erection of DCU-1 heater',
    },
    {
      title: 'DCU-2 Heater Erection',
      client: 'Neo Structo Construction Pvt Ltd',
      location: 'HRRL, Barmer',
      description: 'Mechanical erection of DCU-2 heater',
    },
    {
      title: 'Gas Fired Boilers',
      client: 'Isgec Heavy Engineering Ltd',
      location: 'Various',
      description: 'Unloading, shifting, mechanical erection & commissioning of 2 x 60 TPH, 33 kg/cm², 425°C gas fired boilers',
    },
    {
      title: 'IBR and Non-IBR Piping',
      client: 'Shriram Alkali and Chemicals Ltd',
      location: 'Jagadia, Bharuch',
      description: 'IBR and Non-IBR piping at 120 MW boiler',
    },
    {
      title: 'WHRB Boiler AMC',
      client: 'Hindalco Industries Ltd (Birla Copper)',
      location: 'Dahej, Gujarat',
      description: 'Annual Maintenance Contract for CU-3 WHRB boilers',
    },
    {
      title: 'Annual Maintenance Contract',
      client: 'Chambal Fertilisers and Chemicals Ltd',
      location: 'Kota, Rajasthan',
      description: 'Ongoing annual maintenance services',
    },
    {
      title: 'Commissioning Manpower',
      client: 'Toyo Engineering India Private Limited',
      location: 'HRRL, Barmer',
      description: 'Providing manpower assistance for commissioning',
    },
    {
      title: 'CDU and VDU Heaters',
      client: 'Tecnicas Reunidas S.A',
      location: 'IOCL, Panipat',
      description: 'Mechanical erection of CDU and VDU heaters - Mobilization in progress',
    },
  ]

  const projectGallery = [
    {
      title: 'HRSG Boiler Erection',
      location: 'RIL Jamnagar',
      type: 'Boiler Works',
      image: '/images/projects/hrsg-boiler.jpg', // placeholder
    },
    {
      title: 'Primary Reformer Installation',
      location: 'CFCL Kota',
      type: 'Reformer Works',
      image: '/images/projects/reformer.jpg',
    },
    {
      title: 'IBR Piping Installation',
      location: 'GAIL Vijaypur',
      type: 'Piping Works',
      image: '/images/projects/piping.jpg',
    },
    {
      title: 'DCU Heater Erection',
      location: 'HRRL Barmer',
      type: 'Heater Works',
      image: '/images/projects/heater.jpg',
    },
    {
      title: 'WHRB Boiler Maintenance',
      location: 'Hindalco Dahej',
      type: 'Maintenance',
      image: '/images/projects/maintenance.jpg',
    },
    {
      title: 'Structural Fabrication',
      location: 'Various Sites',
      type: 'Structural Works',
      image: '/images/projects/structural.jpg',
    },
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-900 to-primary-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Projects</h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            Delivering complex industrial engineering projects for leading organizations across India
          </p>
        </div>
      </section>

      {/* Ongoing Projects */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-8">
            <Clock className="w-8 h-8 text-blue-600 mr-3" />
            <h2 className="section-title mb-0">Ongoing Projects</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ongoingProjects.map((project, i) => (
              <div key={i} className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-lg border-2 border-blue-200 shadow-md hover:shadow-xl transition-shadow">
                <div className="bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full inline-block mb-3">
                  IN PROGRESS
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-primary-600 font-semibold text-sm mb-2">{project.client}</p>
                <p className="text-gray-600 text-sm mb-2">{project.location}</p>
                <p className="text-gray-700 text-sm">{project.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Completed Projects */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-8">
            <CheckCircle2 className="w-8 h-8 text-green-600 mr-3" />
            <h2 className="section-title mb-0">Completed Projects</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {completedProjects.map((project, i) => (
              <div key={i} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="bg-green-100 text-green-800 text-xs font-bold px-3 py-1 rounded-full inline-block mb-3">
                  COMPLETED
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-primary-600 font-semibold text-sm mb-2">{project.client}</p>
                <p className="text-gray-600 text-sm mb-2">{project.location}</p>
                <p className="text-gray-700 text-sm mb-3">{project.description}</p>
                {project.value && (
                  <p className="text-accent-600 font-bold text-sm">Project Value: {project.value}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-primary-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-blue-200">Total Projects</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">8+</div>
              <div className="text-blue-200">Active Projects</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">100%</div>
              <div className="text-blue-200">Success Rate</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">15+</div>
              <div className="text-blue-200">Major Clients</div>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECT GALLERY SECTION - THIS WAS MISSING */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center mb-4">
            <Camera className="w-8 h-8 text-primary-600 mr-3" />
            <h2 className="section-title text-center mb-0">Project Gallery</h2>
          </div>
          <p className="text-center text-gray-600 mb-12">Visual showcase of our industrial engineering work</p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projectGallery.map((item, i) => (
              <div key={i} className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300">
                {/* Image Container - Replace with actual images */}
                <div className="aspect-video bg-gradient-to-br from-primary-600 via-primary-700 to-primary-900 relative overflow-hidden">
                  {/* Placeholder gradient background - Replace with <Image> component when you have images */}
                  <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-20 transition-all duration-300"></div>
                  
                  {/* Overlay Content */}
                  <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                    <div className="bg-accent-600 text-white text-xs font-bold px-3 py-1 rounded-full inline-block mb-2 w-fit">
                      {item.type}
                    </div>
                    <h3 className="text-xl font-bold mb-1 group-hover:text-blue-200 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm text-blue-100">{item.location}</p>
                  </div>

                  {/* Camera Icon Overlay on Hover */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-full p-4">
                      <Camera className="w-8 h-8 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Note for adding images */}
          <div className="mt-12 bg-blue-50 border-2 border-blue-200 rounded-lg p-6 text-center">
            <p className="text-gray-700 mb-2">
              <strong>Note:</strong> To add actual project images:
            </p>
            <ol className="text-sm text-gray-600 text-left max-w-2xl mx-auto space-y-1">
              <li>1. Save your project photos in <code className="bg-gray-200 px-2 py-1 rounded">/public/images/projects/</code></li>
              <li>2. Import Next.js Image: <code className="bg-gray-200 px-2 py-1 rounded">import Image from 'next/image'</code></li>
              <li>3. Replace the gradient div with: <code className="bg-gray-200 px-2 py-1 rounded">&lt;Image src="/images/projects/filename.jpg" alt="..." fill className="object-cover" /&gt;</code></li>
            </ol>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-primary-900 to-primary-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Have a Project in Mind?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Let's discuss how we can help you achieve your industrial engineering goals
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/contact" className="btn-secondary">
              Start a Conversation
            </a>
            <a href="/capabilities" className="bg-white text-primary-900 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-colors">
              View Our Capabilities
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}










// import { CheckCircle2, Clock } from 'lucide-react'

// export const metadata = {
//   title: 'Projects | Petro Power Engineering Services',
//   description: 'View our completed and ongoing industrial engineering projects.',
// }

// export default function ProjectsPage() {
//   const completedProjects = [
//     {
//       title: 'HRSG Boiler Relocation',
//       client: 'Thermax Ltd',
//       location: 'RIL Dahej & Jamnagar',
//       description: 'Dismantling of 125 TPH HRSG at RIL Dahej and erection at RIL Jamnagar',
//       value: '₹4.64 Cr',
//     },
//     {
//       title: 'Primary Reformer Erection',
//       client: 'Onshore Construction',
//       location: 'CFCL, Kota',
//       description: 'Erection and commissioning of primary reformer',
//     },
//     {
//       title: 'WHRB Boiler Overhauling',
//       client: 'Hindalco Industries (Birla Copper)',
//       location: 'Dahej, Gujarat',
//       description: 'Complete overhauling of WHRB boiler during ASD',
//     },
//   ]

//   const ongoingProjects = [
//     {
//       title: 'DCU-1 Heater Erection',
//       client: 'Tecnicas Reunidas S.A',
//       location: 'HRRL, Barmer',
//       description: 'Mechanical erection of DCU-1 heater',
//     },
//     {
//       title: 'DCU-2 Heater Erection',
//       client: 'Neo Structo Construction',
//       location: 'HRRL, Barmer',
//       description: 'Mechanical erection of DCU-2 heater',
//     },
//     {
//       title: 'Gas Fired Boilers',
//       client: 'Isgec Heavy Engineering',
//       location: 'Various',
//       description: 'Erection of 2 x 60 TPH gas fired boilers',
//     },
//   ]

//   return (
//     <div className="pt-20">
//       <section className="bg-gradient-to-br from-primary-900 to-primary-700 text-white py-20">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Projects</h1>
//           <p className="text-xl text-blue-100 max-w-3xl">
//             Delivering complex industrial engineering projects across India
//           </p>
//         </div>
//       </section>

//       <section className="py-16 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex items-center mb-8">
//             <Clock className="w-8 h-8 text-blue-600 mr-3" />
//             <h2 className="text-3xl font-bold">Ongoing Projects</h2>
//           </div>
//           <div className="grid md:grid-cols-3 gap-6">
//             {ongoingProjects.map((project, i) => (
//               <div key={i} className="bg-blue-50 p-6 rounded-lg border-2 border-blue-200">
//                 <span className="bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">IN PROGRESS</span>
//                 <h3 className="text-lg font-bold mt-3 mb-2">{project.title}</h3>
//                 <p className="text-primary-600 font-semibold text-sm mb-2">{project.client}</p>
//                 <p className="text-gray-600 text-sm mb-2">{project.location}</p>
//                 <p className="text-gray-700 text-sm">{project.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       <section className="py-16 bg-gray-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex items-center mb-8">
//             <CheckCircle2 className="w-8 h-8 text-green-600 mr-3" />
//             <h2 className="text-3xl font-bold">Completed Projects</h2>
//           </div>
//           <div className="grid md:grid-cols-3 gap-6">
//             {completedProjects.map((project, i) => (
//               <div key={i} className="bg-white p-6 rounded-lg shadow-md">
//                 <span className="bg-green-100 text-green-800 text-xs font-bold px-3 py-1 rounded-full">COMPLETED</span>
//                 <h3 className="text-lg font-bold mt-3 mb-2">{project.title}</h3>
//                 <p className="text-primary-600 font-semibold text-sm mb-2">{project.client}</p>
//                 <p className="text-gray-600 text-sm mb-2">{project.location}</p>
//                 <p className="text-gray-700 text-sm mb-3">{project.description}</p>
//                 {project.value && <p className="text-accent-600 font-bold">{project.value}</p>}
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </div>
//   )
// }
