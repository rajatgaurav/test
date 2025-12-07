import { FileText, AlertCircle, Scale, Shield } from 'lucide-react'

export const metadata = {
  title: 'Terms & Conditions | Petro Power Engineering Services',
  description: 'Terms and conditions for using our website and services.',
}

export default function TermsPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-900 to-primary-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-6">
            <Scale className="w-12 h-12" />
            <h1 className="text-4xl md:text-5xl font-bold">Terms & Conditions</h1>
          </div>
          <p className="text-xl text-blue-100 max-w-3xl">
            Please read these terms carefully before using our website or engaging our services.
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
              Welcome to Petro Power Engineering Services. By accessing our website or using our services, 
              you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, 
              please do not use our website or services.
            </p>
          </div>

          {/* General Terms */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <FileText className="w-8 h-8 text-primary-600" />
              <h2 className="text-2xl font-bold text-gray-900">General Terms</h2>
            </div>
            <div className="space-y-4 text-gray-700">
              <p>
                These Terms and Conditions govern your use of our website and the services provided by 
                Petro Power Engineering Services. We reserve the right to update or modify these terms at any time 
                without prior notice. Your continued use of our website constitutes acceptance of any changes.
              </p>
            </div>
          </div>

          {/* Website Use */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Use of Our Website</h2>
            <div className="space-y-3 text-gray-700">
              <p>You agree to use our website only for lawful purposes. You must not:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Use the website in any way that violates applicable laws or regulations</li>
                <li>Attempt to gain unauthorized access to our systems or networks</li>
                <li>Transmit any viruses, malware, or harmful code</li>
                <li>Collect or harvest any information from the website without permission</li>
                <li>Use automated systems or software to extract data from the website</li>
                <li>Impersonate any person or entity or misrepresent your affiliation</li>
              </ul>
            </div>
          </div>

          {/* Intellectual Property */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Intellectual Property Rights</h2>
            <div className="space-y-3 text-gray-700">
              <p>
                All content on this website, including but not limited to text, graphics, logos, images, 
                videos, and software, is the property of Petro Power Engineering Services or its content suppliers 
                and is protected by Indian and international copyright laws.
              </p>
              <p>You may not:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Reproduce, distribute, or modify any content without our written permission</li>
                <li>Use our trademarks, logos, or brand names without authorization</li>
                <li>Create derivative works based on our content</li>
                <li>Remove or alter any copyright notices or proprietary markings</li>
              </ul>
            </div>
          </div>

          {/* Services and Contracts */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <Shield className="w-8 h-8 text-primary-600" />
              <h2 className="text-2xl font-bold text-gray-900">Services and Project Contracts</h2>
            </div>
            <div className="space-y-3 text-gray-700">
              <h3 className="font-bold text-lg">Service Agreements</h3>
              <p>
                All engineering services provided by Petro Power Engineering Services are subject to separate 
                written contracts or purchase orders. These Terms and Conditions do not constitute a service 
                agreement or contract for specific projects.
              </p>
              
              <h3 className="font-bold text-lg mt-4">Project Quotations</h3>
              <p>
                Quotations provided through our website or communication channels are valid for 30 days unless 
                otherwise specified. Final terms, pricing, and deliverables will be outlined in formal project contracts.
              </p>

              <h3 className="font-bold text-lg mt-4">Work Standards</h3>
              <p>
                All work performed by Petro Power Engineering Services will be executed in accordance with:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Indian Boiler Regulations (IBR) 1950</li>
                <li>Relevant industry standards and codes</li>
                <li>Client specifications and requirements</li>
                <li>Safety regulations and compliance standards</li>
              </ul>
            </div>
          </div>

          {/* Disclaimers */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <AlertCircle className="w-8 h-8 text-accent-600" />
              <h2 className="text-2xl font-bold text-gray-900">Disclaimers and Warranties</h2>
            </div>
            <div className="space-y-3 text-gray-700">
              <div className="bg-yellow-50 border-2 border-yellow-200 rounded-lg p-4">
                <h3 className="font-bold text-lg mb-2">Website Content</h3>
                <p>
                  The information provided on this website is for general informational purposes only. While we 
                  strive to keep the information accurate and up-to-date, we make no representations or warranties 
                  of any kind, express or implied, about the completeness, accuracy, reliability, or availability 
                  of the website or the information contained therein.
                </p>
              </div>

              <h3 className="font-bold text-lg mt-4">No Professional Advice</h3>
              <p>
                Content on this website should not be considered as professional engineering advice. For specific 
                project requirements, please contact us directly for a consultation.
              </p>

              <h3 className="font-bold text-lg mt-4">"As Is" Basis</h3>
              <p>
                Your use of the website is at your own risk. The website is provided on an "as is" and 
                "as available" basis without any warranties of any kind.
              </p>
            </div>
          </div>

          {/* Limitation of Liability */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Limitation of Liability</h2>
            <div className="space-y-3 text-gray-700">
              <p>
                To the fullest extent permitted by law, Petro Power Engineering Services shall not be liable for:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Any indirect, incidental, special, or consequential damages</li>
                <li>Loss of profits, revenue, data, or business opportunities</li>
                <li>Damages arising from your use or inability to use the website</li>
                <li>Errors or omissions in website content</li>
                <li>Unauthorized access to or alteration of your transmissions or data</li>
              </ul>
              <p className="mt-3">
                Nothing in these terms excludes or limits our liability for death or personal injury caused by 
                negligence, fraud, or any other liability that cannot be excluded by law.
              </p>
            </div>
          </div>

          {/* Indemnification */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Indemnification</h2>
            <p className="text-gray-700">
              You agree to indemnify, defend, and hold harmless Petro Power Engineering Services, its officers, 
              directors, employees, and agents from any claims, liabilities, damages, losses, or expenses 
              (including legal fees) arising from your use of the website or violation of these Terms and Conditions.
            </p>
          </div>

          {/* Governing Law */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Governing Law and Jurisdiction</h2>
            <div className="space-y-3 text-gray-700">
              <p>
                These Terms and Conditions shall be governed by and construed in accordance with the laws of India. 
                Any disputes arising from these terms or your use of the website shall be subject to the exclusive 
                jurisdiction of the courts in Kota, Rajasthan.
              </p>
            </div>
          </div>

          {/* Third-Party Links */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Third-Party Websites</h2>
            <p className="text-gray-700">
              Our website may contain links to third-party websites. We are not responsible for the content, 
              privacy practices, or terms of use of any third-party sites. You access such sites at your own risk 
              and should review their terms and policies.
            </p>
          </div>

          {/* Severability */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Severability</h2>
            <p className="text-gray-700">
              If any provision of these Terms and Conditions is found to be invalid or unenforceable, the remaining 
              provisions shall continue to be valid and enforceable to the fullest extent permitted by law.
            </p>
          </div>

          {/* Entire Agreement */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Entire Agreement</h2>
            <p className="text-gray-700">
              These Terms and Conditions, together with our Privacy Policy, constitute the entire agreement between 
              you and Petro Power Engineering Services regarding your use of the website.
            </p>
          </div>

          {/* Contact Information */}
          <div className="bg-primary-50 border-2 border-primary-200 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Questions About These Terms?</h2>
            <p className="text-gray-700 mb-4">
              If you have any questions or concerns about these Terms and Conditions, please contact us:
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

          {/* Acceptance */}
          <div className="mt-12 bg-blue-50 border-2 border-blue-200 rounded-lg p-6">
            <p className="text-gray-700 text-center">
              <strong>By using our website, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions.</strong>
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
