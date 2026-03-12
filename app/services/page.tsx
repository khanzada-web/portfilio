import { Metadata } from 'next'
import { Header } from '@/app/components/layout/Header'
import { Footer } from '@/app/components/layout/Footer'
import { BreadcrumbSchema } from '@/app/components/seo/BreadcrumbSchema'
import { FAQSchema } from '@/app/components/seo/FAQSchema'

export const metadata: Metadata = {
  title: 'Tech & Digital Services Canada & Worldwide | Web Development, E-commerce, POS Software | Neural Code',
  description: 'Comprehensive tech and digital services across Canada and worldwide including web development, e-commerce solutions, POS software, digital marketing, UI/UX design, and maintenance. Serving businesses in Toronto, Vancouver, Montreal, Calgary and globally.',
  keywords: 'tech services Canada, digital solutions worldwide, web development Canada, e-commerce platforms global, POS software development, digital marketing services, UI/UX design Canada, maintenance support, custom software development, Shopify stores Canada, web applications worldwide, mobile app development Canada, tech solutions Toronto, digital services Vancouver, web development Montreal, e-commerce Calgary, POS software Canada, blockchain development global',
  openGraph: {
    title: 'Tech & Digital Services Canada & Worldwide | Web Development & E-commerce Solutions',
    description: 'Comprehensive tech and digital services across Canada and worldwide including web development, e-commerce solutions, POS software, digital marketing, UI/UX design, and maintenance.',
    url: 'https://www.neuralcode.tech/services',
    type: 'website',
    images: [
      {
        url: 'https://www.neuralcode.tech/logo-removebg-preview.png',
        width: 300,
        height: 110,
        alt: 'Tech & Digital Services Canada - Neural Code',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tech & Digital Services Canada & Worldwide | Neural Code',
    description: 'Comprehensive tech and digital services across Canada and worldwide including web development, e-commerce solutions, POS software, digital marketing, UI/UX design, and maintenance.',
    images: ['https://www.neuralcode.tech/logo-removebg-preview.png'],
  },
  alternates: {
    canonical: '/services',
  },
}

const breadcrumbs = [
  { name: 'Home', url: '/' },
  { name: 'Services', url: '/services' }
]

const faqs = [
  {
    question: 'What services does Neural Code offer?',
    answer: 'Neural Code provides comprehensive digital solutions including technology development, design & branding, digital advertising, production services, maintenance & support, POS software solutions, and AI strategy & innovation.'
  },
  {
    question: 'Do you provide e-commerce solutions?',
    answer: 'Yes, we specialize in e-commerce development including custom online stores, Shopify store setup and customization, payment gateway integration, inventory management systems, and complete e-commerce platform development.'
  },
  {
    question: 'Can you help with POS software development?',
    answer: 'Absolutely! We develop custom Point of Sale (POS) software solutions tailored to your business needs, including inventory tracking, sales reporting, customer management, and integration with existing business systems.'
  },
  {
    question: 'What maintenance services do you provide?',
    answer: 'We offer comprehensive maintenance services including website updates, security monitoring, performance optimization, bug fixes, content updates, and ongoing technical support to ensure your digital assets remain secure and up-to-date.'
  }
]

const services = [
  {
    title: 'Technology Development',
    description: 'Custom software development, web applications, mobile apps, and enterprise solutions built with modern technologies.',
    features: ['React & Next.js Development', 'Custom Web Applications', 'Mobile App Development', 'API Integration'],
    link: '/services#technology'
  },
  {
    title: 'E-commerce Solutions',
    description: 'Complete e-commerce platforms including Shopify stores, custom online shops, payment integration, and inventory management.',
    features: ['Shopify Store Setup', 'Custom E-commerce Platforms', 'Payment Gateway Integration', 'Inventory Management'],
    link: '/services#ecommerce'
  },
  {
    title: 'POS Software Development',
    description: 'Custom Point of Sale systems with inventory tracking, sales reporting, customer management, and retail analytics.',
    features: ['Custom POS Systems', 'Inventory Tracking', 'Sales Reporting', 'Customer Management'],
    link: '/services#pos'
  },
  {
    title: 'Digital Marketing',
    description: 'Strategic digital marketing campaigns including SEO, PPC advertising, social media marketing, and content creation.',
    features: ['SEO Optimization', 'PPC Campaigns', 'Social Media Marketing', 'Content Strategy'],
    link: '/services#marketing'
  },
  {
    title: 'Design & Branding',
    description: 'Complete design solutions including UI/UX design, branding, graphic design, and creative visual identities.',
    features: ['UI/UX Design', 'Brand Identity', 'Graphic Design', 'Creative Direction'],
    link: '/services#design'
  },
  {
    title: 'Maintenance & Support',
    description: 'Ongoing website maintenance, security updates, performance optimization, bug fixes, and technical support.',
    features: ['Website Maintenance', 'Security Updates', 'Performance Optimization', 'Technical Support'],
    link: '/services#maintenance'
  },
  {
    title: 'AI Strategy & Consulting',
    description: 'Strategic AI planning, innovation acceleration, and ethical AI governance for responsible deployment in Canadian businesses.',
    features: ['AI Roadmap Development', 'Innovation Planning', 'Ethical AI Guidelines', 'Risk Assessment'],
    link: '/services#ai-strategy'
  },
  {
    title: 'AI Development & Implementation',
    description: 'Custom AI solutions including machine learning models, predictive analytics, and intelligent automation systems.',
    features: ['ML Model Development', 'Predictive Analytics', 'Automation Systems', 'Data Processing'],
    link: '/services#ai-development'
  },
  {
    title: 'AI Integration & Support',
    description: 'Seamless integration of AI technologies into existing systems with ongoing support and optimization.',
    features: ['System Integration', 'API Development', 'Performance Monitoring', 'Ongoing Support'],
    link: '/services#ai-integration'
  },
  {
    title: 'Security',
    description: 'Comprehensive cybersecurity solutions, threat assessment, data protection, and secure system implementations.',
    features: ['Threat Assessment', 'Data Protection', 'Secure Implementations', 'Cybersecurity Solutions'],
    link: '/services#security'
  },
  {
    title: 'Help Desk',
    description: '24/7 technical support, user assistance, troubleshooting, and customer service solutions for optimal user experience.',
    features: ['24/7 Support', 'User Assistance', 'Troubleshooting', 'Customer Service'],
    link: '/services#help-desk'
  },
  {
    title: 'Email Management',
    description: 'Professional email hosting, spam protection, migration services, and advanced email security and management tools.',
    features: ['Email Hosting', 'Spam Protection', 'Migration Services', 'Email Security'],
    link: '/services#email-management'
  }
]

export default function ServicesPage() {
  return (
    <>
      <BreadcrumbSchema items={breadcrumbs} />
      <FAQSchema faqs={faqs} />
      
      <div className="min-h-screen bg-[#060B16] font-orbitron">
        <Header />
        <main role="main" id="main-content" className="pt-20">
          <div className="max-w-6xl mx-auto px-4 py-16">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-white font-orbitron mb-6">
                Tech & Digital <span className="text-[#39FF14]">Services</span>
              </h1>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Comprehensive tech and digital solutions for Canadian businesses. 
                From web development to e-commerce platforms, POS software, and digital marketing.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {services.map((service, index) => (
                <div key={index} className="bg-gray-900/20 border border-white/10 rounded-lg p-6 hover:shadow-lg hover:border-[#39FF14]/30 transition-all">
                  <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-400 mb-4">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-400">
                        <span className="w-2 h-2 bg-[#39FF14] rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Service Details Sections */}
            <div id="technology" className="scroll-mt-24 mb-20">
              <div className="bg-gray-900/20 border border-white/10 rounded-lg p-8">
                <h2 className="text-3xl font-bold text-white font-orbitron mb-6">Technology <span className="text-[#39FF14]">Development</span></h2>
                <p className="text-gray-400 text-lg mb-6">Custom software development, web applications, mobile apps, and enterprise solutions built with modern technologies.</p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-4">Our Services</h3>
                    <ul className="space-y-2 text-gray-400">
                      <li>• React & Next.js Development</li>
                      <li>• Custom Web Applications</li>
                      <li>• Mobile App Development</li>
                      <li>• API Integration</li>
                      <li>• Progressive Web Apps (PWA)</li>
                      <li>• Enterprise Software Solutions</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-4">Technologies We Use</h3>
                    <ul className="space-y-2 text-gray-400">
                      <li>• React, Next.js, TypeScript</li>
                      <li>• Node.js, Python, PHP</li>
                      <li>• PostgreSQL, MongoDB, MySQL</li>
                      <li>• AWS, Vercel, Digital Ocean</li>
                      <li>• Docker, Kubernetes</li>
                      <li>• Git, CI/CD Pipelines</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div id="ecommerce" className="scroll-mt-24 mb-20">
              <div className="bg-gray-900/20 border border-white/10 rounded-lg p-8">
                <h2 className="text-3xl font-bold text-white font-orbitron mb-6">E-commerce <span className="text-[#39FF14]">Solutions</span></h2>
                <p className="text-gray-400 text-lg mb-6">Complete e-commerce platforms including Shopify stores, custom online shops, payment integration, and inventory management.</p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-4">E-commerce Services</h3>
                    <ul className="space-y-2 text-gray-400">
                      <li>• Shopify Store Setup & Customization</li>
                      <li>• Custom E-commerce Platforms</li>
                      <li>• Payment Gateway Integration</li>
                      <li>• Inventory Management Systems</li>
                      <li>• Multi-channel Sales Integration</li>
                      <li>• E-commerce Migration Services</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-4">Payment Integration</h3>
                    <ul className="space-y-2 text-gray-400">
                      <li>• Stripe, PayPal, Square</li>
                      <li>• Interac Online (Canada)</li>
                      <li>• Apple Pay, Google Pay</li>
                      <li>• Cryptocurrency Payments</li>
                      <li>• Buy Now Pay Later (BNPL)</li>
                      <li>• International Payment Processing</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div id="pos" className="scroll-mt-24 mb-20">
              <div className="bg-gray-900/20 border border-white/10 rounded-lg p-8">
                <h2 className="text-3xl font-bold text-white font-orbitron mb-6">POS Software <span className="text-[#39FF14]">Development</span></h2>
                <p className="text-gray-400 text-lg mb-6">Custom Point of Sale systems with inventory tracking, sales reporting, customer management, and retail analytics.</p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-4">POS Features</h3>
                    <ul className="space-y-2 text-gray-400">
                      <li>• Custom POS Systems</li>
                      <li>• Inventory Tracking & Management</li>
                      <li>• Sales Reporting & Analytics</li>
                      <li>• Customer Management & Loyalty</li>
                      <li>• Mobile POS Solutions</li>
                      <li>• Integration with Accounting Software</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-4">Retail Solutions</h3>
                    <ul className="space-y-2 text-gray-400">
                      <li>• Multi-store Management</li>
                      <li>• Employee Time Clock</li>
                      <li>• Supplier Management</li>
                      <li>• Purchase Order System</li>
                      <li>• Barcode & RFID Integration</li>
                      <li>• GST/HST Tax Calculations</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div id="marketing" className="scroll-mt-24 mb-20">
              <div className="bg-gray-900/20 border border-white/10 rounded-lg p-8">
                <h2 className="text-3xl font-bold text-white font-orbitron mb-6">Digital <span className="text-[#39FF14]">Marketing</span></h2>
                <p className="text-gray-400 text-lg mb-6">Strategic digital marketing campaigns including SEO, PPC advertising, social media marketing, and content creation.</p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-4">Marketing Services</h3>
                    <ul className="space-y-2 text-gray-400">
                      <li>• SEO Optimization & Strategy</li>
                      <li>• PPC Advertising (Google Ads)</li>
                      <li>• Social Media Marketing</li>
                      <li>• Content Creation & Strategy</li>
                      <li>• Email Marketing Campaigns</li>
                      <li>• Local SEO for Canadian Businesses</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-4">Analytics & Reporting</h3>
                    <ul className="space-y-2 text-gray-400">
                      <li>• Google Analytics Setup</li>
                      <li>• Conversion Tracking</li>
                      <li>• Performance Reporting</li>
                      <li>• ROI Analysis</li>
                      <li>• A/B Testing & Optimization</li>
                      <li>• Competitor Analysis</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div id="design" className="scroll-mt-24 mb-20">
              <div className="bg-gray-900/20 border border-white/10 rounded-lg p-8">
                <h2 className="text-3xl font-bold text-white font-orbitron mb-6">Design & <span className="text-[#39FF14]">Branding</span></h2>
                <p className="text-gray-400 text-lg mb-6">Complete design solutions including UI/UX design, branding, graphic design, and creative visual identities.</p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-4">Design Services</h3>
                    <ul className="space-y-2 text-gray-400">
                      <li>• UI/UX Design & Prototyping</li>
                      <li>• Brand Identity Development</li>
                      <li>• Logo Design & Guidelines</li>
                      <li>• Graphic Design & Print Materials</li>
                      <li>• Website & App Design</li>
                      <li>• Packaging Design</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-4">Design Tools & Technologies</h3>
                    <ul className="space-y-2 text-gray-400">
                      <li>• Figma, Adobe Creative Suite</li>
                      <li>• Sketch, InVision</li>
                      <li>• User Research & Testing</li>
                      <li>• Design Systems & Guidelines</li>
                      <li>• Interactive Prototypes</li>
                      <li>• Accessibility & WCAG Compliance</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div id="maintenance" className="scroll-mt-24 mb-20">
              <div className="bg-gray-900/20 border border-white/10 rounded-lg p-8">
                <h2 className="text-3xl font-bold text-white font-orbitron mb-6">Maintenance & <span className="text-[#39FF14]">Support</span></h2>
                <p className="text-gray-400 text-lg mb-6">Ongoing website maintenance, security updates, performance optimization, bug fixes, and technical support.</p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-4">Maintenance Services</h3>
                    <ul className="space-y-2 text-gray-400">
                      <li>• Website Maintenance & Updates</li>
                      <li>• Security Monitoring & Updates</li>
                      <li>• Performance Optimization</li>
                      <li>• Bug Fixes & Troubleshooting</li>
                      <li>• Content Updates & Management</li>
                      <li>• Backup & Recovery Services</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-4">Support Plans</h3>
                    <ul className="space-y-2 text-gray-400">
                      <li>• 24/7 Technical Support</li>
                      <li>• Emergency Response Service</li>
                      <li>• Monthly Maintenance Packages</li>
                      <li>• Training & Documentation</li>
                      <li>• System Health Monitoring</li>
                      <li>• Proactive Issue Resolution</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* AI Services Sections */}
            <div id="ai-strategy" className="scroll-mt-24 mb-20">
              <div className="bg-gray-900/20 border border-white/10 rounded-lg p-8">
                <h2 className="text-3xl font-bold text-white font-orbitron mb-6">AI Strategy & <span className="text-[#39FF14]">Consulting</span></h2>
                <p className="text-gray-400 text-lg mb-6">Strategic AI planning, innovation acceleration, and ethical AI governance for responsible deployment in Canadian businesses.</p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-4">AI Strategy Services</h3>
                    <ul className="space-y-2 text-gray-400">
                      <li>• AI Readiness Assessment</li>
                      <li>• AI Roadmap Development</li>
                      <li>• Innovation Planning & Strategy</li>
                      <li>• Ethical AI Guidelines</li>
                      <li>• Risk Assessment & Mitigation</li>
                      <li>• AI Governance Framework</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-4">Industry Applications</h3>
                    <ul className="space-y-2 text-gray-400">
                      <li>• Retail & E-commerce</li>
                      <li>• Healthcare & Medical</li>
                      <li>• Manufacturing & Logistics</li>
                      <li>• Financial Services</li>
                      <li>• Customer Service Automation</li>
                      <li>• Predictive Analytics</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div id="ai-development" className="scroll-mt-24 mb-20">
              <div className="bg-gray-900/20 border border-white/10 rounded-lg p-8">
                <h2 className="text-3xl font-bold text-white font-orbitron mb-6">AI Development & <span className="text-[#39FF14]">Implementation</span></h2>
                <p className="text-gray-400 text-lg mb-6">Custom AI solutions including machine learning models, predictive analytics, and intelligent automation systems.</p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-4">AI Development Services</h3>
                    <ul className="space-y-2 text-gray-400">
                      <li>• Machine Learning Model Development</li>
                      <li>• Predictive Analytics Solutions</li>
                      <li>• Natural Language Processing (NLP)</li>
                      <li>• Computer Vision Applications</li>
                      <li>• Intelligent Automation Systems</li>
                      <li>• Chatbot & Virtual Assistant Development</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-4">AI Technologies</h3>
                    <ul className="space-y-2 text-gray-400">
                      <li>• TensorFlow, PyTorch</li>
                      <li>• OpenAI GPT Integration</li>
                      <li>• Custom ML Models</li>
                      <li>• Deep Learning Solutions</li>
                      <li>• AutoML Platforms</li>
                      <li>• Edge AI Deployment</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div id="ai-integration" className="scroll-mt-24 mb-20">
              <div className="bg-gray-900/20 border border-white/10 rounded-lg p-8">
                <h2 className="text-3xl font-bold text-white font-orbitron mb-6">AI Integration & <span className="text-[#39FF14]">Support</span></h2>
                <p className="text-gray-400 text-lg mb-6">Seamless integration of AI technologies into existing systems with ongoing support and optimization.</p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-4">Integration Services</h3>
                    <ul className="space-y-2 text-gray-400">
                      <li>• System Integration & API Development</li>
                      <li>• AI Model Deployment</li>
                      <li>• Performance Monitoring & Optimization</li>
                      <li>• Ongoing Support & Maintenance</li>
                      <li>• Scalability Planning</li>
                      <li>• Data Pipeline Development</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-4">Support Services</h3>
                    <ul className="space-y-2 text-gray-400">
                      <li>• 24/7 AI System Monitoring</li>
                      <li>• Model Retraining & Updates</li>
                      <li>• Performance Optimization</li>
                      <li>• Security & Compliance Updates</li>
                      <li>• User Training & Documentation</li>
                      <li>• Emergency Response Support</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div id="security" className="scroll-mt-24 mb-20">
              <div className="bg-gray-900/20 border border-white/10 rounded-lg p-8">
                <h2 className="text-3xl font-bold text-white font-orbitron mb-6">Security <span className="text-[#39FF14]">Solutions</span></h2>
                <p className="text-gray-400 text-lg mb-6">Comprehensive cybersecurity solutions, threat assessment, data protection, and secure system implementations.</p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-4">Security Services</h3>
                    <ul className="space-y-2 text-gray-400">
                      <li>• Threat Assessment & Analysis</li>
                      <li>• Data Protection & Encryption</li>
                      <li>• Secure System Implementation</li>
                      <li>• Vulnerability Testing</li>
                      <li>• Compliance Auditing (PIPEDA)</li>
                      <li>• Incident Response Planning</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-4">Security Technologies</h3>
                    <ul className="space-y-2 text-gray-400">
                      <li>• SSL/TLS Certificates</li>
                      <li>• Firewall & DDoS Protection</li>
                      <li>• Multi-Factor Authentication</li>
                      <li>• Encryption Solutions</li>
                      <li>• Security Information & Event Management</li>
                      <li>• Regular Security Audits</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div id="help-desk" className="scroll-mt-24 mb-20">
              <div className="bg-gray-900/20 border border-white/10 rounded-lg p-8">
                <h2 className="text-3xl font-bold text-white font-orbitron mb-6">Help <span className="text-[#39FF14]">Desk</span></h2>
                <p className="text-gray-400 text-lg mb-6">24/7 technical support, user assistance, troubleshooting, and customer service solutions for optimal user experience.</p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-4">Support Services</h3>
                    <ul className="space-y-2 text-gray-400">
                      <li>• 24/7 Technical Support</li>
                      <li>• User Assistance & Training</li>
                      <li>• Troubleshooting & Problem Solving</li>
                      <li>• Customer Service Solutions</li>
                      <li>• Knowledge Base Development</li>
                      <li>• Support Ticket Management</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-4">Communication Channels</h3>
                    <ul className="space-y-2 text-gray-400">
                      <li>• Live Chat Support</li>
                      <li>• Email & Phone Support</li>
                      <li>• Remote Desktop Assistance</li>
                      <li>• Video Call Support</li>
                      <li>• Self-Service Portal</li>
                      <li>• Mobile App Support</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div id="email-management" className="scroll-mt-24 mb-20">
              <div className="bg-gray-900/20 border border-white/10 rounded-lg p-8">
                <h2 className="text-3xl font-bold text-white font-orbitron mb-6">Email <span className="text-[#39FF14]">Management</span></h2>
                <p className="text-gray-400 text-lg mb-6">Professional email hosting, spam protection, migration services, and advanced email security and management tools.</p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-4">Email Services</h3>
                    <ul className="space-y-2 text-gray-400">
                      <li>• Professional Email Hosting</li>
                      <li>• Spam Protection & Filtering</li>
                      <li>• Email Migration Services</li>
                      <li>• Advanced Email Security</li>
                      <li>• Custom Domain Email Setup</li>
                      <li>• Email Backup & Recovery</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-4">Management Tools</h3>
                    <ul className="space-y-2 text-gray-400">
                      <li>• Email Marketing Integration</li>
                      <li>• Contact Management</li>
                      <li>• Email Templates & Automation</li>
                      <li>• Analytics & Reporting</li>
                      <li>• Mobile Email Access</li>
                      <li>• Collaboration Features</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-900/20 rounded-lg p-8 mb-16 border border-white/10">
              <h2 className="text-3xl font-bold text-white font-orbitron mb-6">Why Choose Neural Code?</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-white font-orbitron mb-4">Technical Excellence</h3>
                  <ul className="space-y-2 text-gray-400">
                    <li>• 5+ years of tech development experience</li>
                    <li>• Expert in React, Next.js, Shopify, and custom solutions</li>
                    <li>• Focus on performance and user experience</li>
                    <li>• Clean, scalable, and maintainable code</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white font-orbitron mb-4">Canadian Business Focus</h3>
                  <ul className="space-y-2 text-gray-400">
                    <li>• Understanding of Canadian market needs</li>
                    <li>• Experience with diverse business types</li>
                    <li>• Compliance with local regulations</li>
                    <li>• Dedicated support for Canadian clients</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="text-center">
              <h2 className="text-3xl font-bold text-white font-orbitron mb-6">Ready to Transform Your <span className="text-[#39FF14]">Business</span>?</h2>
              <p className="text-xl text-gray-400 mb-8">
                Let's discuss how Neural Code can help bring your digital vision to life
              </p>
              <a 
                href="/#contact" 
                className="inline-flex items-center px-6 py-3 bg-[#39FF14] text-black font-medium rounded-lg hover:bg-[#39FF14]/80 transition-colors"
              >
                Get Started
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  )
}
