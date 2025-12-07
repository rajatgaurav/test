import { Download, FileText } from 'lucide-react'
import Image from 'next/image'

export const metadata = {
  title: 'Certificates | Petro Power Engineering Services',
  description: 'Download our certificates and approvals.',
}

export default function CertificatesPage() {
  const certificates = [
    {
      title: 'IBR Special Class Certificate',
      issuer: 'Chief Inspector of Factories & Boilers, Rajasthan',
      validity: 'Valid up to 02/11/2024',
      file: '/certificates/ibr-certificate.pdf',
    },
    {
      title: 'Gujarat State Endorsement',
      issuer: 'Director of Boilers, Gujarat',
      validity: 'Valid up to 02/11/2024',
      file: '/certificates/gujarat-endorsement.pdf',
    },
    {
      title: 'Pressure Vessel Manufacturing Approval',
      issuer: 'Chief Inspector, Rajasthan',
      validity: 'Valid up to 26/04/2025',
      file: '/certificates/pressure-vessel-approval.pdf',
    },
    {
      title: 'BORL Vendor Registration',
      issuer: 'Bharat Oman Refineries Limited',
      validity: 'Dated 25/02/2021',
      file: '/certificates/borl-vendor.pdf',
    },
    {
      title: 'Thermax Appreciation Certificate',
      issuer: 'Thermax Babcock & Wilcox',
      validity: 'October 2020',
      file: '/certificates/thermax-appreciation.pdf',
    },
    {
      title: 'GAIL Completion Certificate',
      issuer: 'GAIL India Limited',
      validity: 'December 2018',
      file: '/certificates/gail-completion.pdf',
    },
    {
      title: 'EIL Approved Sub-Contractor',
      issuer: 'Engineers India Limited',
      validity: 'September 2017',
      file: '/certificates/eil-approval.pdf',
    },
  ]

  return (
    <div className="pt-20">
      <section className="bg-gradient-to-br from-primary-900 to-primary-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Certificates & Approvals</h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            Download our certifications, approvals, and recognition documents
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6">
            {certificates.map((cert, i) => (
              <div key={i} className="bg-gradient-to-br from-primary-50 to-blue-50 p-6 rounded-lg border-2 border-primary-200 hover:shadow-xl transition-shadow">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <FileText className="w-8 h-8 text-primary-600 mb-3" />
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{cert.title}</h3>
                    <p className="text-primary-700 font-semibold text-sm mb-1">{cert.issuer}</p>
                    <p className="text-gray-600 text-sm mb-4">{cert.validity}</p>
                  </div>
                </div>
                <a
                  href={cert.file}
                  download
                  className="inline-flex items-center gap-2 bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors text-sm font-semibold"
                >
                  <Download className="w-4 h-4" />
                  Download PDF
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
