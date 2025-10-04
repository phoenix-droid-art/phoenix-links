import { useMemo, useState, useCallback } from 'react'
import {
  Instagram,
  Facebook,
  Linkedin,
  Youtube,
  Globe
} from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa'; // Ícone do WhatsApp
import PartnerModal from './components/PartnerModal.jsx'

// Custom TikTok Icon Component
const TikTokIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
)

function App() {
  const [selectedPartner, setSelectedPartner] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const socialLinks = [
    { 
      name: 'Landing Page', 
      url: 'https://be-phoenix.vercel.app', 
      icon: Globe
    },
    { 
      name: 'Instagram', 
      url: 'https://www.instagram.com/phoenix_english_school', 
      icon: Instagram
    },
    { 
      name: 'Facebook', 
      url: 'https://www.facebook.com/phoenixenglishschool', 
      icon: Facebook
    },
    { 
      name: 'TikTok', 
      url: 'https://www.tiktok.com/@phoenix.pedreiras', 
      icon: TikTokIcon
    },
    { 
      name: 'LinkedIn', 
      url: 'https://www.linkedin.com/company/phoenix-english-school', 
      icon: Linkedin
    },
    { 
      name: 'YouTube', 
      url: 'https://www.youtube.com/@phoenixpedreiras?sub_confirmation=1', 
      icon: Youtube
    },
    { 
      name: 'Whatsapp', 
      url: 'https://api.whatsapp.com/send/?phone=5599992066131',
      icon: FaWhatsapp
    },
  ]

  const partners = [
    {
      id: 1,
      name: 'UniCesumar',
      logo: '/assets/parceiros-phoenix/unicesumar.jpg',
      benefits: 'Bolsa de estudos com **50% de desconto** durante **toda a graduação**.',
      instagram: 'https://www.instagram.com/polo_unicesumar_pedreiras',
      whatsapp: 'https://api.whatsapp.com/send/?phone=5599999999999',
      address: 'Av. Rio Branco, Nº 737 - Centro, Pedreiras - MA'
    },

    {
      id: 2,
      name: 'Instituto IESP',
      logo: '/assets/parceiros-phoenix/instituto-IESP.jpg',
      benefits: 'Bolsa de estudos de **50% de desconto** no curso de **Informática**.',
      instagram: 'https://www.instagram.com/iespeducacaosocial/',
      whatsapp: 'https://api.whatsapp.com/send/?phone=5599999999999',
      address: 'Av. Rio Branco, Nº 737 - Centro, Pedreiras - MA'
    },

    {
      id: 3,
      name: 'Academia Hardcore',
      logo: '/assets/parceiros-phoenix/academia-hardcore.jpg',
      benefits: [
        '**6% de desconto** em compras **à vista** (em espécie) acima de **R$100,00**.',
        'Pagamentos no cartão: preço normal à vista, com parcelamento em **até 4x sem juros**.',
        'Nas compras a partir de **R$400,00**: ganhe **2 meses grátis** na academia, com **avaliação física gratuita** e **treino periodizado personalizado**.',
      ],
      observation: '* Válido apenas para novos alunos (não se aplica a quem já é cliente da Academia Hardcore).',
      instagram: 'https://www.instagram.com/acd.hardcore/',
      whatsapp: 'https://api.whatsapp.com/send/?phone=5599999999999',
      address: 'R. Santo Antônio dos Oliveiras, Nº 179, Trizidela do Vale - MA'
    },

    {
      id: 4,
      name: 'Cine Inter',
      logo: '/assets/parceiros-phoenix/cine-inter.jpg',
      benefits: '**Meia-entrada garantida** para portadores do **Phoenix Card**.',
      instagram: 'https://www.instagram.com/cineinter_pedreiras',
      whatsapp: 'https://api.whatsapp.com/send/?phone=55981705216',
      address: 'Rod. João do Vale - Center Valley Shopping, Pedreiras - MA'
    },

    {
      id: 5,
      name: 'Star Kids',
      logo: '/assets/parceiros-phoenix/star-kids.jpg',
      benefits: 'Desconto de **10%** em **festas de aniversário**.',
      instagram: 'https://www.instagram.com/starkidspedreiras',
      whatsapp: 'https://api.whatsapp.com/send/?phone=5598984036507',
      address: 'Rod. João do Vale - Center Valley Shopping, Pedreiras - MA'
    },

    {
      id: 6,
      name: 'Farmácia Qualifarma',
      logo: '/assets/parceiros-phoenix/farmacia-qualifarma.jpg',
      benefits: '**10% de desconto** em **medicamentos**.',
      instagram: 'https://www.instagram.com/qualifarma.perfil',
      whatsapp: 'https://api.whatsapp.com/send/?phone=55984807194',
      address: 'R. da Salvação, Nº 485 - Centro, Trizidela do Vale - MA'
    },

    { 
      id: 7,
      name: 'Multi Peças', 
      logo: '/assets/parceiros-phoenix/multi-peças.jpg',
      benefits: [
        '**10% de desconto** **à vista** em serviços e produtos.',
        '**Serviços gratuitos**: calibragem dos pneus, regulagem de freio, lubrificação e aperto da corrente.',
      ],
      instagram: null,
      whatsapp: 'https://api.whatsapp.com/send/?phone=55988485344',
      address: 'R. da Salvação, Nº 607 - Centro, Trizidela do Vale - MA'
    },
    { 
      id: 8,
      name: 'Dormitório Santo Antônio', 
      logo: '/assets/parceiros-phoenix/dormitório-s-antônio.png',
      benefits: '**6% de desconto** **à vista** em **hospedagens**.',
      instagram: 'https://www.instagram.com/dormitoriosantoantonio',
      whatsapp: 'https://api.whatsapp.com/send/?phone=5599988485333',
      address: 'R. da Salvação, 485A - Centro, Trizidela do Vale - MA'
    },
    { 
      id: 9,
      name: 'Espaço Prime', 
      logo: '/assets/parceiros-phoenix/espaço-prime.jpg',
      benefits: '**10% de desconto** no **aluguel do espaço**.',
      instagram: 'https://www.instagram.com/espacoprimeped',
      whatsapp: 'https://api.whatsapp.com/send/?phone=5599981124331',
      address: 'R. 1, Nº 192 - Mutirão, Pedreiras - MA'
    },
    { 
      id: 10,
      name: 'Novo Parceiro 4', 
      logo: 'https://via.placeholder.com/150x150/1a1a1a/ffffff?text=Em+Breve',
      benefits: 'Benefícios exclusivos em breve!',
      instagram: null,
      whatsapp: null,
      address: null
    },
  ]

  const handlePartnerClick = useCallback((partner) => {
    setSelectedPartner(partner)
    setIsModalOpen(true)
  }, [])

  const closeModal = useCallback(() => {
    setIsModalOpen(false)
    setSelectedPartner(null)
  }, [])

  // Memoizar as redes sociais e parceiros para evitar re-renders
  const socialLinksMemo = useMemo(() => socialLinks, [])
  const partnersMemo = useMemo(() => partners, [])

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background from assets */}
      <div className="fixed inset-0">
        {/* Image layer */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/assets/fundo.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        ></div>
        {/* Overlay for readability (darker) */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-zinc-950/80 to-black/95"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          
          {/* Logo Section */}
          <div className="text-center mb-4 animate-fade-in">
            <div className="inline-flex items-center justify-center mb-2">
              <img 
                src="https://raw.githubusercontent.com/phoenix-droid-art/phoenix-links/refs/heads/main/assets/logo-vertical.png" 
                alt="Phoenix Logo" 
                className="h-28 sm:h-32 object-contain"
              />
            </div>
            <div className="mt-1 h-1 w-20 mx-auto bg-gradient-to-r from-transparent via-[#a70240] to-transparent mb-4"></div>
          </div>

          {/* Redes Sociais - Ícones Redondos */}
          <div className="mb-8 animate-slide-up">
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 max-w-[240px] sm:max-w-none mx-auto">
              {socialLinksMemo.map((social) => {
                const IconComponent = social.icon
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-zinc-900/80 border-2 border-zinc-700 backdrop-blur-sm hover:bg-[#a70240] hover:border-[#a70240] transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-[#a70240]/40 flex items-center justify-center"
                    aria-label={social.name}
                  >
                    <IconComponent className="w-5 h-5 sm:w-5 sm:h-5 text-gray-300 group-hover:text-white transition-all duration-300 relative z-10" strokeWidth={2} />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Sponsors Section */}
          <div className="animate-slide-up">
            <h2 className="text-center text-sm tracking-wider text-white mb-6 font-semibold">
            Conheça os benefícios exclusivos que os parceiros da Phoenix prepararam para você.
            </h2>
            <div className="grid grid-cols-4 sm:grid-cols-4 lg:grid-cols-4 gap-2 sm:gap-3">
              {partnersMemo.map((partner) => (
                <button
                  key={partner.id}
                  onClick={(e) => { handlePartnerClick(partner); e.currentTarget.blur(); }}
                  className="group relative overflow-hidden rounded-xl bg-zinc-900/30 border border-zinc-800 backdrop-blur-sm hover:scale-105 hover:bg-zinc-800/40 hover:border-[#a70240]/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#a70240]/50 cursor-pointer touch-manipulation"
                >
                  <div className="relative aspect-[4/3] flex items-center justify-center p-0">
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="max-w-full max-h-full object-contain opacity-70 group-hover:opacity-100 filter grayscale group-hover:grayscale-0"
                    />
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 rounded-xl"></div>
                    {/* Partner name on hover */}
                    <div className="absolute bottom-2 left-2 right-2 text-white text-xs font-medium opacity-0 group-hover:opacity-100 text-center">
                      {partner.name}
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Footer */}
          <div className="mt-16 text-center animate-fade-in">
            <p className="text-gray-600 text-sm">
              © 2025 Phoenix, Inglês de Verdade! Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>

      {/* Partner Modal */}
      <PartnerModal
        partner={selectedPartner}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </div>
  )
}

export default App
