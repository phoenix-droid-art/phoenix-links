import { useMemo, useState, useCallback } from 'react'
import {
  Instagram,
  Facebook,
  Linkedin,
  Youtube,
  Globe,
  LayoutGrid,
  GraduationCap,
  Heart,
  Gamepad2,
  Wrench,
  Utensils,
  ShoppingBag,
  Car,
  Home,
  Plane
} from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa'; // Ícone do WhatsApp
import PartnerModal from './components/PartnerModal'

// Custom TikTok Icon Component
const TikTokIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
)

function App() {
  const [selectedPartner, setSelectedPartner] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState('all')

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

  const categories = [
    { id: 'all', name: 'Todos', icon: LayoutGrid },
    { id: 'education', name: 'Educação', icon: GraduationCap },
    { id: 'health', name: 'Saúde & Bem-estar', icon: Heart },
    { id: 'entertainment', name: 'Entretenimento', icon: Gamepad2 },
    { id: 'services', name: 'Serviços', icon: Wrench },
    { id: 'food', name: 'Alimentação', icon: Utensils },
    { id: 'shopping', name: 'Compras', icon: ShoppingBag },
    { id: 'automotive', name: 'Automotivo', icon: Car },
    { id: 'accommodation', name: 'Hospedagem', icon: Home },
    { id: 'travel', name: 'Viagens & Turismo', icon: Plane }
  ]

  const partners = [
    {
      id: 1,
      name: 'UniCesumar',
      category: 'education',
      logo: 'https://raw.githubusercontent.com/phoenix-droid-art/phoenix-links/refs/heads/main/assets/parceiros-phoenix/unicesumar.jpg',
      benefits: 'Bolsa de estudos com **50% de desconto** durante **toda a graduação**.',
      instagram: 'https://www.instagram.com/polo_unicesumar_pedreiras',
      whatsapp: 'https://api.whatsapp.com/send/?phone=5599984019987',
      address: 'Av. Rio Branco, Nº 737 - Centro, Pedreiras - MA'
    },

    {
      id: 2,
      name: 'Instituto IESP',
      category: 'education',
      logo: 'https://raw.githubusercontent.com/phoenix-droid-art/phoenix-links/refs/heads/main/assets/parceiros-phoenix/instituto-IESP.jpg',
      benefits: 'Bolsa de estudos de **50% de desconto** no curso de **Informática**.',
      instagram: 'https://www.instagram.com/iespeducacaosocial/',
      whatsapp: 'https://api.whatsapp.com/send/?phone=5599984019987',
      address: 'Av. Rio Branco, Nº 737 - Centro, Pedreiras - MA'
    },

    {
      id: 3,
      name: 'Academia Hardcore',
      category: 'health',
      logo: 'https://raw.githubusercontent.com/phoenix-droid-art/phoenix-links/refs/heads/main/assets/parceiros-phoenix/academia-hardcore.jpg',
      benefits: [
        '**6% de desconto** em compras **à vista** acima de **R$100,00**.',
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
      category: 'entertainment',
      logo: 'https://raw.githubusercontent.com/phoenix-droid-art/phoenix-links/refs/heads/main/assets/parceiros-phoenix/cine-inter.jpg',
      benefits: '**Meia-entrada garantida** para portadores do **Phoenix Card**.',
      instagram: 'https://www.instagram.com/cineinter_pedreiras',
      whatsapp: 'https://api.whatsapp.com/send/?phone=55981705216',
      address: 'Rod. João do Vale - Center Valley Shopping, Pedreiras - MA'
    },

    {
      id: 5,
      name: 'Star Kids',
      category: 'entertainment',
      logo: 'https://raw.githubusercontent.com/phoenix-droid-art/phoenix-links/refs/heads/main/assets/parceiros-phoenix/star-kids.jpg',
      benefits: 'Desconto de **10%** em **festas de aniversário**.',
      instagram: 'https://www.instagram.com/starkidspedreiras',
      whatsapp: 'https://api.whatsapp.com/send/?phone=5598984036507',
      address: 'Rod. João do Vale - Center Valley Shopping, Pedreiras - MA'
    },

    {
      id: 6,
      name: 'Farmácia Qualifarma',
      category: 'health',
      logo: 'https://raw.githubusercontent.com/phoenix-droid-art/phoenix-links/refs/heads/main/assets/parceiros-phoenix/farmacia-qualifarma.jpg',
      benefits: '**10% de desconto** em todos os **medicamentos**.',
      instagram: 'https://www.instagram.com/qualifarma.perfil',
      whatsapp: 'https://api.whatsapp.com/send/?phone=55984807194',
      address: 'R. da Salvação, Nº 485 - Centro, Trizidela do Vale - MA'
    },

    { 
      id: 7,
      name: 'Multi Peças',
      category: 'automotive', 
      logo: 'https://raw.githubusercontent.com/phoenix-droid-art/phoenix-links/refs/heads/main/assets/parceiros-phoenix/multi-pe%C3%A7as.jpg',
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
      category: 'accommodation', 
      logo: 'https://raw.githubusercontent.com/phoenix-droid-art/phoenix-links/refs/heads/main/assets/parceiros-phoenix/dormit%C3%B3rio-s-ant%C3%B4nio.png',
      benefits: '**6% de desconto** **à vista** em **hospedagens**.',
      instagram: 'https://www.instagram.com/dormitoriosantoantonio',
      whatsapp: 'https://api.whatsapp.com/send/?phone=5599988485333',
      address: 'R. da Salvação, 485A - Centro, Trizidela do Vale - MA'
    },
    { 
      id: 9,
      name: 'Espaço Prime',
      category: 'entertainment', 
      logo: 'https://raw.githubusercontent.com/phoenix-droid-art/phoenix-links/refs/heads/main/assets/parceiros-phoenix/espa%C3%A7o-prime.jpg',
      benefits: '**10% de desconto** no **aluguel do espaço**.',
      instagram: 'https://www.instagram.com/espacoprimeped',
      whatsapp: 'https://api.whatsapp.com/send/?phone=5599981124331',
      address: 'R. 1, Nº 192 - Mutirão, Pedreiras - MA'
    },
    { 
      id: 10,
      name: 'Bella Store',
      category: 'shopping', 
      logo: 'https://raw.githubusercontent.com/phoenix-droid-art/phoenix-links/refs/heads/main/assets/parceiros-phoenix/bella-store.jpg',
      benefits: '**15% de desconto** em **todas as compras**.',
      instagram: 'https://www.instagram.com/usebelastore_pedreiras',
      whatsapp: 'https://api.whatsapp.com/send/?phone=5599981562255',
      address: 'R. Eurico Ribeiro, N° 437 - Centro, Pedreiras - MA'
    },
    { 
      id: 11,
      name: 'Mart Modas',
      category: 'shopping', 
      logo: 'https://raw.githubusercontent.com/phoenix-droid-art/phoenix-links/refs/heads/main/assets/parceiros-phoenix/mart-modas.jpg',
      benefits: '**10% de desconto** em **todas as compras**.',
      instagram: 'https://www.instagram.com/martmodas',
      whatsapp: 'https://api.whatsapp.com/send/?phone=',
      address: 'R. Eurico Ribeiro, N° 437 - Centro, Pedreiras - MA'
    },
    { 
      id: 12,
      name: 'Frango ao Vinho',
      category: 'food', 
      logo: 'https://raw.githubusercontent.com/phoenix-droid-art/phoenix-links/refs/heads/main/assets/parceiros-phoenix/galeteria-frango-ao-vinho.jpg',
      benefits: '',
      instagram: 'https://www.instagram.com/',
      whatsapp: 'https://api.whatsapp.com/send/?phone=5599981421384',
      address: 'Travessa Carvalinho, 68B - Centro, Pedreiras - MA'
    },
    { 
      id: 13,
      name: 'Recar-Tur',
      category: 'travel', 
      logo: 'https://raw.githubusercontent.com/phoenix-droid-art/phoenix-links/refs/heads/main/assets/parceiros-phoenix/recar-tur.jpg',
      benefits: '',
      instagram: 'https://www.instagram.com/',
      whatsapp: 'https://api.whatsapp.com/send/?phone=55',
      address: 'Travessa Carvalinho, 68B - Centro, Pedreiras - MA'
    },
    { 
      id: 14,
      name: 'Multi-Pro Serviços',
      category: 'services', 
      logo: 'https://raw.githubusercontent.com/phoenix-droid-art/phoenix-links/refs/heads/main/assets/parceiros-phoenix/multipro-servicos.jpg',
      benefits: '10% de desconto em todos os serviços.',
      services: [
        { title: 'Taxista', description: 'Transporte seguro e confortável para você e sua família.' },
        { title: 'Moto-Táxi', description: 'Rápido e econômico, a opção certa para quem tem pressa.' },
        { title: 'Eletricista', description: 'Soluções elétricas seguras e eficientes para sua casa.' },
      ],
      instagram: 'https://www.instagram.com/',
      whatsapp: 'https://api.whatsapp.com/send/?phone=55',
      address: ''
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

  // Filtrar parceiros por categoria
  const filteredPartners = useMemo(() => {
    if (selectedCategory === 'all') return partners
    return partners.filter(partner => partner.category === selectedCategory)
  }, [selectedCategory])

  // Memoizar as redes sociais para evitar re-renders
  const socialLinksMemo = useMemo(() => socialLinks, [])
  const categoriesMemo = useMemo(() => categories, [])

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background from assets */}
      <div className="fixed inset-0">
        {/* Image layer */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('https://raw.githubusercontent.com/phoenix-droid-art/phoenix-links/refs/heads/main/assets/fundo.jpg')",
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
              Conheça os benefícios exclusivos que os parceiros da Phoenix prepararam para&nbsp;você.
            </h2>
            
            {/* Category Filter */}
            <div className="mb-6">
              <div className="flex flex-wrap justify-center gap-2 sm:gap-3 max-w-lg mx-auto">
                {categoriesMemo.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`category-button px-3 py-2 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 border backdrop-blur-sm flex items-center gap-1.5 ${
                      selectedCategory === category.id
                        ? 'bg-[#a70240] border-[#a70240] text-white shadow-lg shadow-[#a70240]/30'
                        : 'bg-zinc-900/50 border-zinc-700 text-gray-300 hover:bg-zinc-800/60 hover:border-zinc-600 hover:text-white'
                    }`}
                  >
                    <category.icon className="w-3 h-3 sm:w-4 sm:h-4" />
                    {category.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Partners Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
              {filteredPartners.map((partner) => (
                <button
                  key={partner.id}
                  onClick={(e) => { handlePartnerClick(partner); e.currentTarget.blur(); }}
                  className="partner-card group relative overflow-hidden rounded-xl bg-zinc-900/30 border border-zinc-800 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-zinc-800/40 hover:border-[#a70240]/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#a70240]/50 cursor-pointer touch-manipulation"
                >
                  <div className="relative aspect-[4/3] flex items-center justify-center p-0">
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="partner-logo max-w-full max-h-full object-contain opacity-70 filter grayscale transition-all duration-300"
                    />
                    {/* Hover overlay - only on desktop */}
                    <div className="partner-overlay absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 rounded-xl"></div>
                  </div>
                </button>
              ))}
            </div>
            
            {/* Empty state */}
            {filteredPartners.length === 0 && (
              <div className="text-center py-8">
                <p className="text-gray-400 text-sm">
                  Nenhum parceiro encontrado nesta categoria.
                </p>
              </div>
            )}
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
