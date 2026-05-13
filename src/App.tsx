import { useState } from 'react';
import { Modal } from './components/Modal';
import { Mail, Shield } from 'lucide-react';
import { motion } from 'motion/react';

export default function App() {
  const [isFormModalOpen, setIsFormModalOpen] = useState(false);
  const [isInfoModalOpen, setIsInfoModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans selection:bg-indigo-100 selection:text-indigo-900 overflow-x-hidden">
      {/* Background Pattern */}
      <div className="fixed inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-50 pointer-events-none" />
      
      <main className="relative flex flex-col items-center justify-center min-h-[100dvh] p-6 max-w-4xl mx-auto text-center z-10 w-full window-height-fix">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full flex-1 flex flex-col items-center justify-center"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 mb-6 [text-wrap:balance]">
            Beautiful, Animated <br className="hidden md:block"/> Modal Popups
          </h1>
          <p className="text-lg md:text-xl text-gray-500 mb-10 max-w-xl mx-auto [text-wrap:balance] font-medium">
            Click to see polished modal popups in action. Featuring smooth animations, accessibility considerations, and modern layout.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full px-4 sm:px-0">
            <button
              onClick={() => setIsFormModalOpen(true)}
              className="w-full sm:w-auto px-8 py-3.5 bg-gray-900 hover:bg-gray-800 text-white font-medium rounded-xl transition-all shadow-lg shadow-gray-900/10 active:scale-95 outline-none focus-visible:ring-2 focus-visible:ring-gray-900 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-50"
            >
              Open Form Modal
            </button>
            <button
              onClick={() => setIsInfoModalOpen(true)}
              className="w-full sm:w-auto px-8 py-3.5 bg-white hover:bg-gray-50 text-gray-900 font-medium rounded-xl transition-all shadow-sm border border-gray-200 active:scale-95 outline-none focus-visible:ring-2 focus-visible:ring-gray-900 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-50"
            >
              Open Info Modal
            </button>
          </div>
        </motion.div>
      </main>

      {/* Form Modal */}
      <Modal
        isOpen={isFormModalOpen}
        onClose={() => setIsFormModalOpen(false)}
        title="Welcome Aboard"
        description="Join thousands of developers building modern websites. Enter your details to get started."
      >
        <form className="flex flex-col gap-5" onSubmit={(e) => { e.preventDefault(); setIsFormModalOpen(false); }}>
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1.5">
              Full Name
            </label>
            <div className="relative">
              <input
                type="text"
                id="name"
                className="w-full px-3.5 py-2.5 bg-white border border-gray-200 outline-none rounded-xl focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all text-sm placeholder:text-gray-400 shadow-sm"
                placeholder="Jane Doe"
              />
            </div>
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">
              Email Address
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                <Mail className="w-4.5 h-4.5" />
              </div>
              <input
                type="email"
                id="email"
                className="w-full pl-10 pr-3.5 py-2.5 bg-white border border-gray-200 outline-none rounded-xl focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all text-sm placeholder:text-gray-400 shadow-sm"
                placeholder="jane@example.com"
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-full mt-2 px-4 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-xl transition-colors active:scale-[0.98] outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 focus-visible:ring-offset-2"
          >
            Create Account
          </button>
          <p className="text-center text-xs text-gray-500 mt-2">
            By registering, you agree to our <a href="#" className="underline hover:text-gray-800">Terms of Service</a> and <a href="#" className="underline hover:text-gray-800">Privacy Policy</a>.
          </p>
        </form>
      </Modal>

      {/* Info Modal */}
      <Modal
        isOpen={isInfoModalOpen}
        onClose={() => setIsInfoModalOpen(false)}
        title="Security Upgrade Complete"
        description="We've updated our security protocols across our entire network infrastructure to keep your data safe."
      >
        <div className="flex flex-col gap-6">
          <div className="flex items-start gap-4 p-4 bg-indigo-50/50 rounded-xl border border-indigo-100">
            <div className="p-2.5 bg-white rounded-lg shadow-sm text-indigo-600 shrink-0 border border-indigo-50">
              <Shield className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-900 mb-1">End-to-End Encryption</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                All your communications are now secured with enterprise-grade end-to-end encryption. Keys never leave your device.
              </p>
            </div>
          </div>

          <div className="flex flex-col-reverse sm:flex-row gap-3 sm:justify-end sm:items-center mt-2">
            <button
              onClick={() => setIsInfoModalOpen(false)}
              className="w-full sm:w-auto px-5 py-2.5 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-xl transition-colors outline-none focus-visible:ring-2 focus-visible:ring-gray-900 focus-visible:ring-offset-2"
            >
              Dismiss
            </button>
            <button
              onClick={() => setIsInfoModalOpen(false)}
              className="w-full sm:w-auto px-5 py-2.5 text-sm font-medium bg-gray-900 hover:bg-gray-800 text-white rounded-xl transition-colors shadow-sm outline-none focus-visible:ring-2 focus-visible:ring-gray-900 focus-visible:ring-offset-2"
            >
              Understood
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
