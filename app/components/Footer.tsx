import Link from 'next/link'
import Image from 'next/image'
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const services = [
    { name: 'Boiler Erection', href: '/services#boiler' },
    { name: 'Reformer Installation', href: '/services#reformer' },
    { name: 'IBR Piping', href: '/services#piping' },
    { name: 'Pressure Vessels', href: '/services#vessels' },
    { name: 'Maintenance', href: '/services#maintenance' },
  ]

  const quickLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Our Services', href: '/services' },
    { name: 'Projects', href: '/projects' },
    { name: 'Capabilities', href: '/capabilities' },
    { name: 'Certificates', href: '/certificates' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Company Info with Logo */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              {/* Logo - Option 1: Using placeholder */}
              <div className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                PP
              </div>
              
              {/* Logo - Option 2: Using actual logo image (uncomment when you have logo) */}
              {/* <Image 
                src="/logo-white.png" 
                alt="Petro Power Engineering Services Logo" 
                width={50} 
                height={50}
                className="rounded-lg"
              /> */}
              
              <div>
                <span className="text-white text-lg font-bold block">PETRO POWER</span>
                <span className="text-xs text-gray-400">Engineering Services</span>
              </div>
            </div>
            <p className="text-sm text-gray-400 mb-4">
              Leading industrial engineering firm specializing in refineries, power plants, and boiler fabrication with 33+ years of expertise.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-9 h-9 bg-gray-800 hover:bg-primary-600 rounded-full flex items-center justify-center transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 bg-gray-800 hover:bg-primary-600 rounded-full flex items-center justify-center transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 bg-gray-800 hover:bg-primary-600 rounded-full flex items-center justify-center transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 bg-gray-800 hover:bg-primary-600 rounded-full flex items-center justify-center transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm hover:text-primary-400 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Our Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.name}>
                  <Link href={service.href} className="text-sm hover:text-primary-400 transition-colors">
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <MapPin className="w-5 h-5 text-primary-400 flex-shrink-0 mt-1" />
                <p className="text-sm">
                  Building No. 8, Bhawana Vihar<br />
                  Main Deoli Arab Road, Borkhera<br />
                  Kota - 324001, Rajasthan
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-primary-400 flex-shrink-0" />
                <a href="tel:+919983327005" className="text-sm hover:text-primary-400 transition-colors">
                  +91 9983327005
                </a>
              </div>
              <div className="flex items-start gap-2">
                <Mail className="w-5 h-5 text-primary-400 flex-shrink-0 mt-0.5" />
                <a href="mailto:petropowerengineering@gmail.com" className="text-sm hover:text-primary-400 transition-colors break-all">
                  petropowerengineering@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p>
              © {currentYear} Petro Power Engineering Services. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link href="/privacy-policy" className="hover:text-primary-400 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-primary-400 transition-colors">
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}










// // components/Footer.tsx
// import Link from 'next/link'
// import { MapPin, Phone, Mail } from 'lucide-react'

// export default function Footer() {
//   return (
//     <footer className="mt-16 bg-slate-900 text-slate-200">
//       <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 md:grid-cols-4">
//         <div>
//           <h3 className="text-lg font-semibold">PETRO POWER</h3>
//           <p className="mt-3 text-sm text-slate-400">
//             Industrial engineering services for refineries, power plants, fertilizers and chemical industries.
//           </p>
//         </div>

//         <div>
//           <h4 className="text-sm font-semibold uppercase tracking-wide">Quick Links</h4>
//           <ul className="mt-3 space-y-2 text-sm text-slate-300">
//             <li><Link href="/about">About</Link></li>
//             <li><Link href="/services">Services</Link></li>
//             <li><Link href="/projects">Projects</Link></li>
//             <li><Link href="/capabilities">Capabilities</Link></li>
//             <li><Link href="/contact">Contact</Link></li>
//           </ul>
//         </div>

//         <div>
//           <h4 className="text-sm font-semibold uppercase tracking-wide">Services</h4>
//           <ul className="mt-3 space-y-2 text-sm text-slate-300">
//             <li>Boiler erection & maintenance</li>
//             <li>Reformer installation</li>
//             <li>IBR piping</li>
//             <li>Pressure vessels</li>
//             <li>Shutdown & overhauling</li>
//           </ul>
//         </div>

//         <div>
//           <h4 className="text-sm font-semibold uppercase tracking-wide">Contact</h4>
//           <div className="mt-3 space-y-3 text-sm text-slate-300">
//             <div className="flex gap-2">
//               <MapPin className="mt-0.5 h-4 w-4 flex-none" />
//               <span>
//                 Building No. 8, Bhawana Vihar, 1st Floor, Main Deoli Arab Road,
//                 Borkhera, Kota – 324001, Rajasthan
//               </span>
//             </div>
//             <div className="flex items-center gap-2">
//               <Phone className="h-4 w-4" />
//               <a href="tel:+919983327005">+91 99833 27005</a>
//             </div>
//             <div className="flex items-center gap-2">
//               <Mail className="h-4 w-4" />
//               <a href="mailto:petropowerengineering@gmail.com">
//                 petropowerengineering@gmail.com
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="border-t border-slate-800 py-3 text-center text-xs text-slate-500">
//         © {new Date().getFullYear()} Petro Power Engineering Services. All rights reserved.
//       </div>
//     </footer>
//   )
// }
