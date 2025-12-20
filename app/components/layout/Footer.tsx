'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiArrowUp, FiGithub, FiTwitter, FiLinkedin, FiX } from 'react-icons/fi';
import { useState } from 'react';
import logo from '../logo.png';

export function Footer() {
  const currentYear = new Date().getFullYear();
  const [showTerms, setShowTerms] = useState(false);
  const [showPrivacy, setShowPrivacy] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="text-gray-700 py-8 sm:py-12 relative overflow-hidden mx-2 sm:mx-4 lg:mx-8">
      <div className="w-full px-2 sm:px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Brand & Contact */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="md:col-span-2 lg:col-span-1"
          >
            <div className="flex items-center mb-4">
              <Image 
                src={logo} 
                alt="Mussawar Hayat" 
                width={200} 
                height={80} 
                className="h-10 sm:h-12 w-auto mr-3"
              />
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 font-orbitron">Mussawar Hayat</h2>
            </div>
            <p className="text-gray-600 mb-4 sm:mb-6 leading-relaxed font-orbitron text-xs sm:text-sm">
              Full Stack Web3 Developer building decentralized applications with 5+ years experience.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-2 sm:space-y-3">
              <div className="flex items-center space-x-2 sm:space-x-3 text-gray-600">
                <FiMail className="w-3 h-3 sm:w-4 sm:h-4 text-blue-600" />
                <span className="text-xs sm:text-sm font-orbitron break-all">zada38843@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2 sm:space-x-3 text-gray-600">
                <FiPhone className="w-3 h-3 sm:w-4 sm:h-4 text-purple-600" />
                <span className="text-xs sm:text-sm font-orbitron">+923358328468</span>
              </div>
              <div className="flex items-center space-x-2 sm:space-x-3 text-gray-600">
                <FiMapPin className="w-3 h-3 sm:w-4 sm:h-4 text-pink-600" />
                <span className="text-xs sm:text-sm font-orbitron">Office Mehria Town Attock</span>
              </div>
            </div>
          </motion.div>
          
          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-bold mb-4 font-orbitron">Quick Links</h3>
            <div className="grid grid-cols-2 gap-4">
              <ul className="space-y-2">
                <li><Link href="#home" className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-orbitron">Home</Link></li>
                <li><Link href="#services" className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-orbitron">Skills</Link></li>
                <li><Link href="#process" className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-orbitron">Process</Link></li>
                <li><Link href="#testimonials" className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-orbitron">Testimonials</Link></li>
              </ul>
              <ul className="space-y-2">
                <li><Link href="#contact" className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-orbitron">Contact</Link></li>
                <li><Link href="https://github.com/khanzada-web" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-orbitron">GitHub</Link></li>
                <li><Link href="https://www.linkedin.com/in/mussawar-hayat/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-orbitron">LinkedIn</Link></li>
                <li><Link href="https://twitter.com/Mussawar_Hayat" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-orbitron">Twitter</Link></li>
              </ul>
            </div>
          </motion.div>
          
          {/* Social Media */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-bold mb-4 font-orbitron">Connect With Me</h3>
            <div className="flex space-x-3 mb-6">
              <motion.a 
                href="https://twitter.com/Mussawar_Hayat" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center text-white hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <FiTwitter className="w-5 h-5" />
              </motion.a>
              <motion.a 
                href="https://www.linkedin.com/in/mussawar-hayat/" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gradient-to-r from-blue-700 to-blue-800 rounded-lg flex items-center justify-center text-white hover:from-blue-800 hover:to-blue-900 transition-all duration-300 shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <FiLinkedin className="w-5 h-5" />
              </motion.a>
              <motion.a 
                href="https://github.com/khanzada-web" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gradient-to-r from-gray-700 to-gray-800 rounded-lg flex items-center justify-center text-white hover:from-gray-800 hover:to-gray-900 transition-all duration-300 shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <FiGithub className="w-5 h-5" />
              </motion.a>
            </div>
            <p className="text-gray-600 text-sm font-orbitron">
              Let's build something amazing together!
            </p>
          </motion.div>
        </div>
        
        {/* Bottom Section */}
        <div className="border-t border-gray-200 mt-8 pt-6">
          <div className="flex flex-col lg:flex-row justify-between items-center">
            <motion.p 
              className="text-gray-600 text-sm font-orbitron mb-2 lg:mb-0"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              © {currentYear} Mussawar Hayat. All rights reserved.
            </motion.p>
            
            <motion.div 
              className="flex space-x-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <button 
                onClick={() => setShowTerms(true)}
                className="text-gray-600 hover:text-gray-900 text-sm transition-colors font-orbitron"
              >
                Terms
              </button>
              <button 
                onClick={() => setShowPrivacy(true)}
                className="text-gray-600 hover:text-gray-900 text-sm transition-colors font-orbitron"
              >
                Privacy
              </button>
            </motion.div>
          </div>
        </div>

        {/* Scroll to Top Button */}
        <motion.button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 z-50"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <FiArrowUp className="w-4 h-4" />
        </motion.button>
      </div>

      {/* Terms Popup */}
      {showTerms && (
        <div 
          className="fixed inset-0 bg-black/20 backdrop-blur-sm flex items-center justify-center z-50 p-2 sm:p-4"
          onClick={() => setShowTerms(false)}
        >
          <div 
            className="bg-white rounded-xl sm:rounded-2xl max-w-2xl w-full max-h-[85vh] sm:max-h-[80vh] overflow-auto shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <style jsx>{`
              .custom-scrollbar::-webkit-scrollbar {
                width: 6px;
              }
              .custom-scrollbar::-webkit-scrollbar-track {
                background: transparent;
              }
              .custom-scrollbar::-webkit-scrollbar-thumb {
                background-color: rgba(156, 163, 175, 0.5);
                border-radius: 3px;
                transition: background-color 0.2s ease;
              }
              .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                background-color: rgba(107, 114, 128, 0.7);
              }
            `}</style>
            <div className="p-4 sm:p-6 custom-scrollbar">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 font-orbitron">Terms of Service</h2>
                <button 
                  onClick={() => setShowTerms(false)}
                  className="text-gray-500 hover:text-gray-700 transition-colors"
                >
                  <FiX className="w-5 h-5 sm:w-6 sm:h-6" />
                </button>
              </div>
              <div className="space-y-4 text-gray-700">
                <div>
                  <h3 className="text-lg font-semibold mb-2 font-orbitron">1. Acceptance of Terms</h3>
                  <p className="text-sm leading-relaxed font-orbitron">
                    By accessing and using this portfolio website, you accept and agree to be bound by the terms and provision of this agreement.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 font-orbitron">2. Use License</h3>
                  <p className="text-sm leading-relaxed font-orbitron">
                    Permission is granted to temporarily download one copy of the materials on Mussawar Hayat's portfolio for personal, non-commercial transitory viewing only.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 font-orbitron">3. Intellectual Property Rights</h3>
                  <p className="text-sm leading-relaxed font-orbitron">
                    All content, including but not limited to text, graphics, logos, images, and software, is the property of Mussawar Hayat and is protected by international copyright laws.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 font-orbitron">4. Services and Projects</h3>
                  <p className="text-sm leading-relaxed font-orbitron">
                    The portfolio showcases Web3 development services including smart contract development, DApp creation, and blockchain consulting. Service terms are discussed on a per-project basis.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 font-orbitron">5. User Conduct</h3>
                  <p className="text-sm leading-relaxed font-orbitron">
                    Users agree not to use this portfolio for any unlawful purposes, to harass others, or to transmit any harmful or malicious code through contact forms.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 font-orbitron">6. Disclaimer</h3>
                  <p className="text-sm leading-relaxed font-orbitron">
                    The materials on Mussawar Hayat's portfolio are provided on an 'as is' basis. Mussawar Hayat makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 font-orbitron">7. Limitations</h3>
                  <p className="text-sm leading-relaxed font-orbitron">
                    In no event shall Mussawar Hayat or his suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on his portfolio.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 font-orbitron">8. Liability and Damages</h3>
                  <p className="text-sm leading-relaxed font-orbitron">
                    Mussawar Hayat shall not be liable for any direct, indirect, incidental, special, or consequential damages resulting from the use or inability to use this portfolio.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 font-orbitron">9. Indemnification</h3>
                  <p className="text-sm leading-relaxed font-orbitron">
                    You agree to indemnify and defend Mussawar Hayat against any claims, losses, damages, liabilities, and expenses arising from your use of this portfolio.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 font-orbitron">10. Termination</h3>
                  <p className="text-sm leading-relaxed font-orbitron">
                    Mussawar Hayat reserves the right to terminate or suspend access to this portfolio immediately, without prior notice or liability, for any reason.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 font-orbitron">11. Governing Law</h3>
                  <p className="text-sm leading-relaxed font-orbitron">
                    These terms and conditions are governed by and construed in accordance with the laws of Pakistan and you irrevocably submit to the exclusive jurisdiction of the courts.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 font-orbitron">12. Changes to Terms</h3>
                  <p className="text-sm leading-relaxed font-orbitron">
                    Mussawar Hayat reserves the right to modify these terms at any time. Changes will be effective immediately upon posting to this portfolio.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 font-orbitron">13. Privacy Policy</h3>
                  <p className="text-sm leading-relaxed font-orbitron">
                    Your privacy is important to us. Our Privacy Policy outlines how we collect, use, and protect your information when you visit our portfolio website.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 font-orbitron">14. Contact Information</h3>
                  <p className="text-sm leading-relaxed font-orbitron">
                    For any questions about these Terms of Service, please contact us at zada38843@gmail.com or +923358328468.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Privacy Popup */}
      {showPrivacy && (
        <div 
          className="fixed inset-0 bg-black/20 backdrop-blur-sm flex items-center justify-center z-50 p-2 sm:p-4"
          onClick={() => setShowPrivacy(false)}
        >
          <div 
            className="bg-white rounded-xl sm:rounded-2xl max-w-2xl w-full max-h-[85vh] sm:max-h-[80vh] overflow-auto shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <style jsx>{`
              .custom-scrollbar::-webkit-scrollbar {
                width: 6px;
              }
              .custom-scrollbar::-webkit-scrollbar-track {
                background: transparent;
              }
              .custom-scrollbar::-webkit-scrollbar-thumb {
                background-color: rgba(156, 163, 175, 0.5);
                border-radius: 3px;
                transition: background-color 0.2s ease;
              }
              .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                background-color: rgba(107, 114, 128, 0.7);
              }
            `}</style>
            <div className="p-4 sm:p-6 custom-scrollbar">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 font-orbitron">Privacy Policy</h2>
                <button 
                  onClick={() => setShowPrivacy(false)}
                  className="text-gray-500 hover:text-gray-700 transition-colors"
                >
                  <FiX className="w-5 h-5 sm:w-6 sm:h-6" />
                </button>
              </div>
              <div className="space-y-4 text-gray-700">
                <div>
                  <h3 className="text-lg font-semibold mb-2 font-orbitron">1. Information Collection</h3>
                  <p className="text-sm leading-relaxed font-orbitron">
                    We collect information you provide directly to us, such as when you contact us through our portfolio website or submit a form. This may include your name, email address, phone number, and project details.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 font-orbitron">2. Use of Information</h3>
                  <p className="text-sm leading-relaxed font-orbitron">
                    We use the information we collect to respond to your inquiries, provide our services, improve our portfolio website, and communicate with you about potential projects and collaborations.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 font-orbitron">3. Data Storage and Security</h3>
                  <p className="text-sm leading-relaxed font-orbitron">
                    We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. Your data is stored securely and retained only as long as necessary.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 font-orbitron">4. Email Communications</h3>
                  <p className="text-sm leading-relaxed font-orbitron">
                    When you contact us via email, we may retain the content of your email and your email address to respond to your inquiry. We will not share your email with third parties without your consent.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 font-orbitron">5. Third-Party Services</h3>
                  <p className="text-sm leading-relaxed font-orbitron">
                    Our portfolio may contain links to third-party websites and services (such as GitHub, LinkedIn, Twitter). We are not responsible for the privacy practices of these third-party sites.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 font-orbitron">6. Cookies and Tracking</h3>
                  <p className="text-sm leading-relaxed font-orbitron">
                    Our website may use cookies to enhance user experience, analyze traffic, and personalize content. You can control cookie settings through your browser preferences.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 font-orbitron">7. Analytics and Performance</h3>
                  <p className="text-sm leading-relaxed font-orbitron">
                    We may use analytics tools to understand how visitors interact with our portfolio. This information is aggregated and anonymized and does not identify individual users.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 font-orbitron">8. Project Portfolio Data</h3>
                  <p className="text-sm leading-relaxed font-orbitron">
                    Projects displayed in our portfolio may include descriptions of client work. We ensure that all project information shared respects client confidentiality agreements and privacy.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 font-orbitron">9. Data Retention</h3>
                  <p className="text-sm leading-relaxed font-orbitron">
                    We retain personal information only as long as necessary to fulfill the purposes for which it was collected, unless a longer retention period is required or permitted by law.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 font-orbitron">10. Your Rights</h3>
                  <p className="text-sm leading-relaxed font-orbitron">
                    You have the right to access, update, or request deletion of your personal information. Contact us to exercise these rights or for any privacy-related inquiries.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 font-orbitron">11. Children's Privacy</h3>
                  <p className="text-sm leading-relaxed font-orbitron">
                    Our portfolio is not directed to children under 13. We do not knowingly collect personal information from children under 13.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 font-orbitron">12. International Data Transfers</h3>
                  <p className="text-sm leading-relaxed font-orbitron">
                    Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place for international data transfers.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 font-orbitron">13. Policy Updates</h3>
                  <p className="text-sm leading-relaxed font-orbitron">
                    We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page with an updated effective date.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 font-orbitron">14. Contact Information</h3>
                  <p className="text-sm leading-relaxed font-orbitron">
                    If you have any questions about this Privacy Policy, please contact us at zada38843@gmail.com or +923358328468.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
}
