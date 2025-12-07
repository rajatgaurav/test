'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, Phone, Mail } from 'lucide-react'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Projects', href: '/projects' },
    { name: 'Capabilities', href: '/capabilities' },
    { name: 'Certificates', href: '/certificates' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <header className="fixed w-full bg-white shadow-md z-50">
      {/* Top Bar */}
      <div className="bg-primary-900 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-between items-center text-sm">
            <a href="mailto:petropowerengineering@gmail.com" className="flex items-center hover:text-blue-200">
              <Mail className="w-4 h-4 mr-1" />
              <span className="hidden sm:inline">petropowerengineering@gmail.com</span>
            </a>
            <a href="tel:+919983327005" className="flex items-center hover:text-blue-200">
              <Phone className="w-4 h-4 mr-1" />
              +91 9983327005
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-3">
              {/* Add your logo here - for now using text */}
              <div className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                PP
              </div>
              <div>
                <span className="text-xl font-bold text-primary-700 block">PETRO POWER</span>
                <span className="text-xs text-gray-600">Engineering Services</span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-primary-600 font-medium transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block py-2 text-gray-700 hover:text-primary-600 font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </header>
  )
}











// 'use client'

// import { useState } from 'react'
// import Link from 'next/link'
// import { Menu, X, Phone, Mail } from 'lucide-react'

// export default function Header() {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

//   const navigation = [
//     { name: 'Home', href: '/' },
//     { name: 'About', href: '/about' },
//     { name: 'Services', href: '/services' },
//     { name: 'Projects', href: '/projects' },
//     { name: 'Capabilities', href: '/capabilities' },
//     { name: 'Certificates', href: '/certificates' },
//     { name: 'Contact', href: '/contact' },
//   ]

//   return (
//     <header className="fixed w-full bg-white shadow-md z-50">
//       {/* Top Bar */}
//       <div className="bg-primary-900 text-white py-2">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex flex-wrap justify-between items-center text-sm">
//             <a href="mailto:petropowerengineering@gmail.com" className="flex items-center hover:text-blue-200">
//               <Mail className="w-4 h-4 mr-1" />
//               <span className="hidden sm:inline">petropowerengineering@gmail.com</span>
//             </a>
//             <a href="tel:+919983327005" className="flex items-center hover:text-blue-200">
//               <Phone className="w-4 h-4 mr-1" />
//               +91 9983327005
//             </a>
//           </div>
//         </div>
//       </div>

//       {/* Main Navigation */}
//       <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-16">
//           <div className="flex items-center">
//             <Link href="/" className="flex items-center">
//               <span className="text-2xl font-bold text-primary-700">PETRO POWER</span>
//               <span className="text-sm text-gray-600 ml-2 hidden sm:block">Engineering Services</span>
//             </Link>
//           </div>

//           {/* Desktop Navigation */}
//           <div className="hidden md:flex space-x-8">
//             {navigation.map((item) => (
//               <Link
//                 key={item.name}
//                 href={item.href}
//                 className="text-gray-700 hover:text-primary-600 font-medium transition-colors"
//               >
//                 {item.name}
//               </Link>
//             ))}
//           </div>

//           {/* Mobile menu button */}
//           <button
//             className="md:hidden text-gray-700"
//             onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//             aria-label="Toggle menu"
//           >
//             {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
//           </button>
//         </div>

//         {/* Mobile Navigation */}
//         {mobileMenuOpen && (
//           <div className="md:hidden py-4 border-t">
//             {navigation.map((item) => (
//               <Link
//                 key={item.name}
//                 href={item.href}
//                 className="block py-2 text-gray-700 hover:text-primary-600 font-medium"
//                 onClick={() => setMobileMenuOpen(false)}
//               >
//                 {item.name}
//               </Link>
//             ))}
//           </div>
//         )}
//       </nav>
//     </header>
//   )
// }
