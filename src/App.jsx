import { useMemo } from 'react'
import {
  Instagram,
  Facebook,
  Linkedin,
  Youtube,
  Globe
} from 'lucide-react'

// Custom TikTok Icon Component
const TikTokIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
)

function App() {
  const socialLinks = [
    { 
      name: 'Landing Page', 
      url: 'https://phoenix.com.br', 
      icon: Globe
    },
    { 
      name: 'Instagram', 
      url: 'https://instagram.com/phoenix', 
      icon: Instagram
    },
    { 
      name: 'Facebook', 
      url: 'https://facebook.com/phoenix', 
      icon: Facebook
    },
    { 
      name: 'TikTok', 
      url: 'https://tiktok.com/@phoenix', 
      icon: TikTokIcon
    },
    { 
      name: 'LinkedIn', 
      url: 'https://linkedin.com/company/phoenix', 
      icon: Linkedin
    },
    { 
      name: 'YouTube', 
      url: 'https://youtube.com/@phoenix', 
      icon: Youtube
    },
  ]

  const sponsors = [
    { name: 'Patrocinador 1', logo: 'https://via.placeholder.com/150x80/1a1a1a/ffffff?text=Patrocinador+1' },
    { name: 'Patrocinador 2', logo: 'https://via.placeholder.com/150x80/1a1a1a/ffffff?text=Patrocinador+2' },
    { name: 'Patrocinador 3', logo: 'https://via.placeholder.com/150x80/1a1a1a/ffffff?text=Patrocinador+3' },
    { name: 'Patrocinador 4', logo: 'https://via.placeholder.com/150x80/1a1a1a/ffffff?text=Patrocinador+4' },
    { name: 'Patrocinador 5', logo: 'https://via.placeholder.com/150x80/1a1a1a/ffffff?text=Patrocinador+5' },
    { name: 'Patrocinador 6', logo: 'https://via.placeholder.com/150x80/1a1a1a/ffffff?text=Patrocinador+6' },
    { name: 'Patrocinador 7', logo: 'https://via.placeholder.com/150x80/1a1a1a/ffffff?text=Patrocinador+7' },
    { name: 'Patrocinador 8', logo: 'https://via.placeholder.com/150x80/1a1a1a/ffffff?text=Patrocinador+8' },
    { name: 'Patrocinador 9', logo: 'https://via.placeholder.com/150x80/1a1a1a/ffffff?text=Patrocinador+9' },
    { name: 'Patrocinador 10', logo: 'https://via.placeholder.com/150x80/1a1a1a/ffffff?text=Patrocinador+10' },
    { name: 'Patrocinador 11', logo: 'https://via.placeholder.com/150x80/1a1a1a/ffffff?text=Patrocinador+11' },
    { name: 'Patrocinador 12', logo: 'https://via.placeholder.com/150x80/1a1a1a/ffffff?text=Patrocinador+12' },
    { name: 'Patrocinador 13', logo: 'https://via.placeholder.com/150x80/1a1a1a/ffffff?text=Patrocinador+13' },
    { name: 'Patrocinador 14', logo: 'https://via.placeholder.com/150x80/1a1a1a/ffffff?text=Patrocinador+14' },
    { name: 'Patrocinador 15', logo: 'https://via.placeholder.com/150x80/1a1a1a/ffffff?text=Patrocinador+15' },
  ]

  // Memoizar as redes sociais para evitar re-renders
  const socialLinksMemo = useMemo(() => socialLinks, [])

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background with starry sky */}
      <div className="fixed inset-0 bg-gradient-to-b from-black via-zinc-950 to-black">
        {/* Stars layer 1 - small stars */}
        <div className="absolute inset-0 opacity-60" style={{
          backgroundImage: `radial-gradient(2px 2px at 20% 30%, white, transparent),
                           radial-gradient(2px 2px at 60% 70%, white, transparent),
                           radial-gradient(1px 1px at 50% 50%, white, transparent),
                           radial-gradient(1px 1px at 80% 10%, white, transparent),
                           radial-gradient(2px 2px at 90% 60%, white, transparent),
                           radial-gradient(1px 1px at 33% 80%, white, transparent),
                           radial-gradient(1px 1px at 15% 90%, white, transparent)`,
          backgroundSize: '200px 200px, 300px 300px, 250px 250px, 400px 400px, 350px 350px, 280px 280px, 320px 320px',
          backgroundPosition: '0 0, 40px 60px, 130px 270px, 70px 100px, 200px 150px, 300px 50px, 150px 200px'
        }}></div>
        
        {/* Stars layer 2 - medium stars */}
        <div className="absolute inset-0 opacity-40" style={{
          backgroundImage: `radial-gradient(3px 3px at 10% 20%, rgba(255,255,255,0.8), transparent),
                           radial-gradient(2px 2px at 70% 40%, rgba(255,255,255,0.8), transparent),
                           radial-gradient(2px 2px at 40% 60%, rgba(255,255,255,0.8), transparent),
                           radial-gradient(3px 3px at 85% 80%, rgba(255,255,255,0.8), transparent)`,
          backgroundSize: '400px 400px, 350px 350px, 450px 450px, 380px 380px',
          backgroundPosition: '50px 50px, 180px 100px, 250px 250px, 100px 300px'
        }}></div>
        
        {/* Stars layer 3 - twinkling effect */}
        <div className="absolute inset-0 opacity-30 animate-pulse" style={{
          backgroundImage: `radial-gradient(1px 1px at 25% 15%, white, transparent),
                           radial-gradient(2px 2px at 75% 85%, white, transparent),
                           radial-gradient(1px 1px at 45% 45%, white, transparent)`,
          backgroundSize: '300px 300px, 400px 400px, 350px 350px',
          backgroundPosition: '0 0, 100px 100px, 200px 50px',
          animationDuration: '3s'
        }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          
          {/* Logo Section */}
          <div className="text-center mb-4 animate-fade-in">
            <div className="inline-flex items-center justify-center mb-2">
              <img 
                src="/assets/logo-vertical.png" 
                alt="Phoenix Logo" 
                className="h-40 sm:h-48 object-contain"
              />
            </div>
            <div className="mt-1 h-1 w-20 mx-auto bg-gradient-to-r from-transparent via-[#a70240] to-transparent mb-4"></div>
          </div>

          {/* Redes Sociais - Ícones Redondos */}
          <div className="mb-8 animate-slide-up">
            <div className="flex justify-center space-x-4 sm:space-x-6">
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
            <h2 className="text-center text-sm tracking-wider text-gray-500 mb-6 font-semibold">
            Aproveite os descontos exclusivos que a Phoenix oferece com seus parceiros
            </h2>
            <div className="grid grid-cols-3 sm:grid-cols-5 gap-4">
              {sponsors.map((sponsor, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-xl bg-zinc-900/30 border border-zinc-800 backdrop-blur-sm transition-all duration-300 hover:scale-105"
                >
                  <div className="relative aspect-video flex items-center justify-center p-3">
                    <img
                      src={sponsor.logo}
                      alt={sponsor.name}
                      className="max-w-full max-h-full object-contain opacity-60 group-hover:opacity-100 transition-opacity filter grayscale group-hover:grayscale-0"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Footer */}
          <div className="mt-16 text-center animate-fade-in">
            <p className="text-gray-600 text-sm">
              © 2025 Phoenix - Escola de Inglês. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
