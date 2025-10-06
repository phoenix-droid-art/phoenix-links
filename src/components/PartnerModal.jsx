import { useEffect, useRef, memo } from 'react'
import { X, Instagram, MapPin } from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa'

const PartnerModal = ({ partner, isOpen, onClose }) => {
  // All hooks must be at the top, before any conditional returns
  const panelRef = useRef(null)
  const touchStartY = useRef(null)
  const touchCurrentY = useRef(null)

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

  // Accessibility: close on Escape
  const handleKeyDown = (e) => {
    if (e.key === 'Escape') onClose()
  }

  const handleTouchStart = (e) => {
    touchStartY.current = e.touches[0].clientY
    touchCurrentY.current = null
  }

  const handleTouchMove = (e) => {
    if (touchStartY.current == null) return
    touchCurrentY.current = e.touches[0].clientY
    const diff = touchCurrentY.current - touchStartY.current
    if (diff > 0 && panelRef.current) {
      panelRef.current.style.transition = 'none'
      panelRef.current.style.transform = `translateY(${Math.min(diff, 100)}px)`
    }
  }

  const handleTouchEnd = () => {
    const diff = (touchCurrentY.current ?? 0) - (touchStartY.current ?? 0)
    if (panelRef.current) {
      panelRef.current.style.transition = ''
      panelRef.current.style.transform = ''
    }
    touchStartY.current = null
    touchCurrentY.current = null
    if (diff > 80) onClose()
  }

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      onClick={handleBackdropClick}
      onKeyDown={handleKeyDown}
      role="presentation"
    >
      <div 
        ref={panelRef}
        className="relative w-full max-w-md mx-auto bg-zinc-900/95 backdrop-blur-xl border border-zinc-700 rounded-2xl shadow-2xl overflow-hidden max-h-[85vh] flex flex-col"
        role="dialog"
        aria-modal="true"
        aria-labelledby="partner-modal-title"
        tabIndex={-1}
        autoFocus
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 sm:w-8 sm:h-8 rounded-full bg-zinc-800/80 hover:bg-zinc-700 transition-colors duration-150 flex items-center justify-center group touch-manipulation"
          aria-label="Fechar"
        >
          <X className="w-5 h-5 sm:w-4 sm:h-4 text-gray-300 group-hover:text-white transition-colors" />
        </button>

        {/* Header with Logo */}
        <div className="relative p-6 pb-3">
          {/* Drag handle for mobile */}
          <div className="absolute left-1/2 -translate-x-1/2 -top-2 sm:hidden w-12 h-1.5 rounded-full bg-zinc-600/70" />
          <div className="flex items-center justify-center mb-4">
            <div className="w-32 h-24 rounded-xl bg-white/10 backdrop-blur-sm border border-zinc-600 flex items-center justify-center p-0 shadow-lg overflow-hidden">
              <img
                src={partner.logo}
                alt={partner.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <h2 id="partner-modal-title" className="text-xl font-bold text-white text-center mb-2">
            {partner.name}
          </h2>
          <div className="h-px bg-gradient-to-r from-transparent via-[#a70240] to-transparent"></div>
        </div>

        {/* Content */}
        <div className="px-6 pb-4 space-y-4 overflow-y-auto flex-1 overscroll-contain">
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

        {/* Sticky Bottom Close (mobile) */}
        <div className="sticky bottom-0 bg-zinc-900/95 backdrop-blur-sm border-t border-zinc-700 p-4 sm:hidden">
          <button
            onClick={onClose}
            className="w-full py-3 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-white font-medium transition-colors"
            aria-label="Fechar"
          >
            Fechar
          </button>
        </div>
      </div>
    </div>
  )
}

export default memo(PartnerModal)
