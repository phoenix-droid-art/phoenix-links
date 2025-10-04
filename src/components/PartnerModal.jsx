import { useState, useEffect, memo } from 'react'
import { X, Instagram, MapPin } from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa'

const PartnerModal = ({ partner, isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  if (!isOpen || !partner) return null

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      onClick={handleBackdropClick}
    >
      <div 
        className="relative w-full max-w-md mx-auto bg-zinc-900/95 backdrop-blur-xl border border-zinc-700 rounded-2xl shadow-2xl"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-zinc-800/80 hover:bg-zinc-700 transition-colors duration-150 flex items-center justify-center group"
        >
          <X className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
        </button>

        {/* Header with Logo */}
        <div className="relative p-6 pb-4">
          <div className="flex items-center justify-center mb-4">
            <div className="w-32 h-24 rounded-xl bg-white/10 backdrop-blur-sm border border-zinc-600 flex items-center justify-center p-0 shadow-lg overflow-hidden">
              <img
                src={partner.logo}
                alt={partner.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <h2 className="text-xl font-bold text-white text-center mb-2">
            {partner.name}
          </h2>
          <div className="h-px bg-gradient-to-r from-transparent via-[#a70240] to-transparent"></div>
        </div>

        {/* Content */}
        <div className="px-6 pb-6 space-y-4">
          {/* Benefits */}
          {partner.benefits && (
            <div>
              <h3 className="text-sm font-bold text-[#a70240] mb-2 uppercase tracking-wider">
                Benefícios Exclusivos
              </h3>
              {Array.isArray(partner.benefits) ? (
                <ul className="list-disc list-inside text-gray-300 text-sm leading-relaxed space-y-1">
                  {partner.benefits.map((item, idx) => (
                    <li key={idx} dangerouslySetInnerHTML={{
                      __html: item.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                    }} />
                  ))}
                </ul>
              ) : (
                <p className="text-gray-300 text-sm leading-relaxed" dangerouslySetInnerHTML={{
                  __html: partner.benefits.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                }} />
              )}
              {partner.observation && (
                <p className="text-gray-400 text-xs mt-2 italic text-center">
                  {partner.observation}
                </p>
              )}
            </div>
          )}

          {/* Social Links */}
          <div className="flex gap-3 justify-center pt-2">
            {partner.instagram && (
              <a
                href={partner.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#a70240] to-[#d4145a] hover:from-[#8a0235] hover:to-[#a70240] rounded-lg transition-all duration-150 transform hover:scale-105"
              >
                <Instagram className="w-4 h-4 text-white" />
                <span className="text-white text-sm font-medium">Instagram</span>
              </a>
            )}

            {partner.whatsapp && (
              <a
                href={partner.whatsapp.startsWith('http') ? partner.whatsapp : `https://wa.me/${partner.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 rounded-lg transition-all duration-150 transform hover:scale-105"
              >
                <FaWhatsapp className="w-4 h-4 text-white" />
                <span className="text-white text-sm font-medium">WhatsApp</span>
              </a>
            )}
          </div>

          {/* Address */}
          {partner.address && (
            <div className="pt-2">
              <div className="flex items-start gap-2 p-3 bg-zinc-800/50 rounded-lg border border-zinc-700">
                <MapPin className="w-4 h-4 text-[#a70240] mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="text-sm font-medium text-white mb-1">Endereço</h4>
                  <p className="text-gray-400 text-xs leading-relaxed">
                    {partner.address}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default memo(PartnerModal)
