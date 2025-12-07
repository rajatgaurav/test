import { Shield, Lock, Eye, Database, UserCheck, FileText } from 'lucide-react'

export const metadata = {
  title: 'Privacy Policy | Petro Power Engineering Services',
  description: 'Our commitment to protecting your privacy and personal information.',
}

export default function PrivacyPolicyPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-900 to-primary-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-6">
            <Shield className="w-12 h-12" />
            <h1 className="text-4xl md:text-5xl font-bold">Privacy Policy</h1>
          </div>
          <p className="text-xl text-blue-100 max-w-3xl">
            Your privacy is important to us. This policy outlines how we collect, use, and protect your information.
          </p>
          <p className="text-sm text-blue-200 mt-4">Last Updated: December 7, 2025</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Introduction */}
          <div className="mb-12">
            <p className="text-gray-700 leading-relaxed">
              Petro Power Engineering Services ("we," "our," or "us") is committed to protecting your privacy. 
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information when 
              you visit our website or engage our services.
            </p>
          </div>

          {/* Information We Collect */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <Database className="w-8 h-8 text-primary-600" />
              <h2 className="text-2xl font-bold text-gray-900">Information We Collect</h2>
            </div>
            <div className="space-y-4 text-gray-700">
              <div>
                <h3 className="font-bold text-lg mb-2">Personal Information</h3>
                <p className="mb-2">We may collect personal information that you voluntarily provide to us when you:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Fill out contact forms on our website</li>
                  <li>Request information about our services</li>
                  <li>Subscribe to our newsletters or updates</li>
                  <li>Engage us for project inquiries</li>
                </ul>
                <p className="mt-2">This may include: name, email address, phone number, company name, and project details.</p>
              </div>

              <div>
                <h3 className="font-bold text-lg mb-2">Automatically Collected Information</h3>
                <p className="mb-2">When you visit our website, we may automatically collect:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>IP address and browser type</li>
                  <li>Device information and operating system</li>
                  <li>Pages visited and time spent on pages</li>
                  <li>Referring website addresses</li>
                </ul>
              </div>
            </div>
          </div>

          {/* How We Use Your Information */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <UserCheck className="w-8 h-8 text-primary-600" />
              <h2 className="text-2xl font-bold text-gray-900">How We Use Your Information</h2>
            </div>
            <div className="space-y-3 text-gray-700">
              <p>We use the information we collect to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Respond to your inquiries and provide customer support</li>
                <li>Process your requests for quotes and project proposals</li>
                <li>Send you information about our services and updates</li>
                <li>Improve our website and user experience</li>
                <li>Comply with legal obligations and industry regulations</li>
                <li>Protect against fraudulent or unauthorized activity</li>
              </ul>
            </div>
          </div>

          {/* Information Sharing */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <Eye className="w-8 h-8 text-primary-600" />
              <h2 className="text-2xl font-bold text-gray-900">Information Sharing and Disclosure</h2>
            </div>
            <div className="space-y-3 text-gray-700">
              <p>We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Service Providers:</strong> With trusted third-party vendors who assist us in operating our website and conducting our business</li>
                <li><strong>Legal Requirements:</strong> When required by law or to protect our rights, property, or safety</li>
                <li><strong>Business Transfers:</strong> In connection with any merger, sale, or transfer of company assets</li>
                <li><strong>With Your Consent:</strong> When you explicitly authorize us to share your information</li>
              </ul>
            </div>
          </div>

          {/* Data Security */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <Lock className="w-8 h-8 text-primary-600" />
              <h2 className="text-2xl font-bold text-gray-900">Data Security</h2>
            </div>
            <div className="space-y-3 text-gray-700">
              <p>
                We implement appropriate technical and organizational security measures to protect your personal 
                information against unauthorized access, alteration, disclosure, or destruction. These measures include:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Secure SSL encryption for data transmission</li>
                <li>Regular security audits and updates</li>
                <li>Restricted access to personal information</li>
                <li>Employee training on data protection</li>
              </ul>
              <p className="mt-3">
                However, no method of transmission over the internet is 100% secure. While we strive to protect 
                your information, we cannot guarantee absolute security.
              </p>
            </div>
          </div>

          {/* Your Rights */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <FileText className="w-8 h-8 text-primary-600" />
              <h2 className="text-2xl font-bold text-gray-900">Your Rights and Choices</h2>
            </div>
            <div className="space-y-3 text-gray-700">
              <p>You have the right to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Access:</strong> Request access to the personal information we hold about you</li>
                <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
                <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                <li><strong>Opt-Out:</strong> Unsubscribe from marketing communications at any time</li>
                <li><strong>Data Portability:</strong> Request a copy of your data in a portable format</li>
              </ul>
              <p className="mt-3">
                To exercise any of these rights, please contact us at{' '}
                <a href="mailto:petropowerengineering@gmail.com" className="text-primary-600 hover:underline">
                  petropowerengineering@gmail.com
                </a>
              </p>
            </div>
          </div>

          {/* Cookies */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Cookies and Tracking Technologies</h2>
            <div className="space-y-3 text-gray-700">
              <p>
                We may use cookies and similar tracking technologies to enhance your experience on our website. 
                Cookies are small data files stored on your device that help us:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Remember your preferences and settings</li>
                <li>Understand how you use our website</li>
                <li>Improve website functionality and performance</li>
              </ul>
              <p className="mt-3">
                You can control cookies through your browser settings. However, disabling cookies may limit 
                your ability to use certain features of our website.
              </p>
            </div>
          </div>

          {/* Third-Party Links */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Third-Party Links</h2>
            <p className="text-gray-700">
              Our website may contain links to third-party websites. We are not responsible for the privacy 
              practices or content of these external sites. We encourage you to review the privacy policies 
              of any third-party sites you visit.
            </p>
          </div>

          {/* Children's Privacy */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Children's Privacy</h2>
            <p className="text-gray-700">
              Our services are not directed to individuals under the age of 18. We do not knowingly collect 
              personal information from children. If you believe we have inadvertently collected information 
              from a child, please contact us immediately.
            </p>
          </div>

          {/* Changes to Policy */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes to This Privacy Policy</h2>
            <p className="text-gray-700">
              We may update this Privacy Policy from time to time to reflect changes in our practices or 
              legal requirements. We will notify you of any material changes by posting the updated policy 
              on our website with a revised "Last Updated" date.
            </p>
          </div>

          {/* Contact Information */}
          <div className="bg-primary-50 border-2 border-primary-200 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
            <p className="text-gray-700 mb-4">
              If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, 
              please contact us:
            </p>
            <div className="space-y-2 text-gray-700">
              <p><strong>Petro Power Engineering Services</strong></p>
              <p>Building No. 8, Bhawana Vihar 1st Floor</p>
              <p>Main Deoli Arab Road, Borkhera</p>
              <p>Kota - 324001, Rajasthan, India</p>
              <p>Phone: <a href="tel:+919983327005" className="text-primary-600 hover:underline">+91 9983327005</a></p>
              <p>Email: <a href="mailto:petropowerengineering@gmail.com" className="text-primary-600 hover:underline">petropowerengineering@gmail.com</a></p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
