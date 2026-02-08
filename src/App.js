import React, { useState } from 'react';
import { Menu, X, Film, Instagram, Linkedin } from 'lucide-react';
import FloatingSpheres from './FloatingSpheres';
import border from './media/border2.jpg';
import team_photo1 from './media/team_photo1.jpg';
import team_photo2 from './media/team_photo2.jpg';
import freddy from './media/freddy.png';
import style_frame from './media/style_frame.png';
import project_artwork from './media/project_photo.jpg';
import characters from './media/characters.png';
import tomato from './media/tomato.png';
import logo from './media/logo.png';
import poppy from './media/poppy.png';

export default function AnimationStudio() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Paper texture overlay
  const textureStyle = {
    backgroundImage: `url("data:image/svg+xml,%3Csvg width='200' height='200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' /%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23noise)' opacity='0.08'/%3E%3C/svg%3E")`,
    backgroundRepeat: 'repeat'
  };

  return (
    <div className="min-h-screen relative overflow-x-hidden" style={{ backgroundColor: '#f8e4dc' }}>
      {/* Background fill from border image center */}
      <div
        className="fixed inset-0 pointer-events-none z-0 hidden md:block"
        style={{
          backgroundImage: `url(${border})`,
          backgroundSize: '110%',
          backgroundPosition: 'center'
        }}
      />
      {/* Responsive Border Frame */}
      {/* Left border - from top to bottom */}
      <div
        className="fixed top-0 bottom-0 left-0 w-[54px] lg:w-[69px] xl:w-[84px] 2xl:w-[99px] pointer-events-none z-30 hidden md:block"
        style={{
          backgroundImage: `url(${border})`,
          backgroundSize: 'max(100vw, 100vh * 0.9) auto',
          backgroundPosition: 'left top',
          backgroundRepeat: 'no-repeat'
        }}
      />
      {/* Right border - from top to bottom */}
      <div
        className="fixed top-0 bottom-0 right-0 w-[54px] lg:w-[69px] xl:w-[84px] 2xl:w-[99px] pointer-events-none z-30 hidden md:block"
        style={{
          backgroundImage: `url(${border})`,
          backgroundSize: 'max(100vw, 100vh * 0.9) auto',
          backgroundPosition: 'right top',
          backgroundRepeat: 'no-repeat'
        }}
      />
      
<FloatingSpheres />
      {/* Notebook paper lines background */}
      <div className="fixed inset-0 opacity-20 pointer-events-none" style={{
        backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 29px, rgba(150,150,150,0.15) 29px, rgba(150,150,150,0.15) 30px)`
      }}></div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-red-200/80 z-50" style={{
        clipPath: 'polygon(0 0, 2% 1%, 5% 0, 8% 2%, 12% 1%, 15% 0, 18% 1%, 22% 2%, 25% 0, 28% 1%, 32% 2%, 35% 1%, 38% 0, 42% 2%, 45% 1%, 48% 0, 52% 1%, 55% 2%, 58% 0, 62% 1%, 65% 2%, 68% 1%, 72% 0, 75% 2%, 78% 1%, 82% 0, 85% 1%, 88% 2%, 92% 1%, 95% 0, 98% 2%, 100% 1%, 100% 92%, 98% 95%, 96% 93%, 94% 96%, 91% 94%, 88% 97%, 85% 95%, 82% 98%, 78% 96%, 75% 94%, 72% 97%, 68% 95%, 65% 98%, 62% 96%, 58% 94%, 55% 97%, 52% 95%, 48% 98%, 45% 96%, 42% 94%, 38% 97%, 35% 95%, 32% 98%, 28% 96%, 25% 94%, 22% 97%, 18% 95%, 15% 98%, 12% 96%, 8% 94%, 5% 97%, 2% 95%, 0 98%)',
        ...textureStyle
      }}>
        <div className="max-w-6xl mx-auto px-4 py-4 md:py-5 min-[1700px]:py-7">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <span className="text-sm md:text-xl font-bold font-josefin-sans text-orange-900/80">lemoncheeks animation cooperative</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-6">
              {['home', 'about', 'projects', 'our-team', 'contact'].map((section) => (
                <a
                  key={section}
                  href={`#${section}`}
                  className="font-bold transition-all px-3 py-1 font-josefin-sans text-orange-800/60 hover:text-orange-900/80"
                >
                  {section === 'our-team' ? 'our team' : section}
                </a>
              ))}
            </div>

            <button
              type="button"
              className="md:hidden text-orange-900/70"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
          {menuOpen && (
            <div className="md:hidden mt-4 pb-4 space-y-2">
              {['home', 'about', 'projects', 'our-team', 'contact'].map((section) => (
                <a
                  key={section}
                  href={`#${section}`}
                  onClick={() => setMenuOpen(false)}
                  className="block w-full text-left px-3 py-2 font-bold transition-all font-josefin-sans text-orange-800/60"
                >
                  {section === 'our-team' ? 'our team' : section}
                </a>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Home Section - PRESERVED EXACTLY AS ORIGINAL */}
      <section id="home" className="relative w-full max-w-6xl min-[1700px]:max-w-7xl mx-auto pt-16 md:pt-20 min-[1700px]:pt-32 px-4 text-center">
        {/* Layer 1 (background paper, slightly rotated) */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[95%] h-[60vh] md:h-[90vh] max-h-[600px] min-[1700px]:max-h-[750px] bg-orange-50/70 rounded-lg transform rotate-3 shadow-lg z-0" style={textureStyle}></div>
        {/* Layer 2 (background paper, slightly rotated differently) */}
        <div className="absolute top-[10px] left-1/2 -translate-x-1/2 w-[96%] h-[60vh] md:h-[90vh] max-h-[600px] min-[1700px]:max-h-[750px] bg-orange-100/70 rounded-lg transform -rotate-2 shadow-lg z-0" style={textureStyle}></div>
        {/* Layer 3 (middle paper layer) */}
        <div className="absolute top-[20px] left-1/2 -translate-x-1/2 w-[97%] h-[60vh] md:h-[90vh] max-h-[600px] min-[1700px]:max-h-[750px] bg-orange-200/70 rounded-lg transform rotate-1 shadow-lg z-0" style={textureStyle}></div>
        {/* Layer 4 (inner paper layer) */}
        <div className="absolute top-[30px] left-1/2 -translate-x-1/2 w-[98%] h-[60vh] md:h-[90vh] max-h-[600px] min-[1700px]:max-h-[750px] bg-orange-300/70 rounded-lg transform -rotate-3 shadow-lg z-0" style={textureStyle}></div>
        {/* Layer 5 (top-most paper layer) */}
        <div className="absolute top-[40px] left-1/2 -translate-x-1/2 w-[99%] h-[60vh] md:h-[90vh] max-h-[600px] min-[1700px]:max-h-[750px] bg-yellow-100/70 rounded-lg transform rotate-2 shadow-xl z-0" style={textureStyle}></div>

        <img src={style_frame} alt="Decorative frame" className="relative z-10 block w-full h-auto object-contain mx-auto max-w-full min-[1700px]:max-w-7xl mt-4 md:mt-8 min-[1700px]:mt-12 mb-2 md:mb-4" />
      </section>

      {/* About Section - Made Responsive */}
      <section id="about" className="py-8 md:py-16 px-4 relative">
        <div className="flex justify-center mb-4 md:mb-6">
          <img src={logo} alt="lemoncheeks logo" loading="lazy" className="h-16 md:h-24 object-contain relative z-0 transition-transform duration-300 hover:rotate-12" />
        </div>
        <div className="flex justify-center relative z-10 w-full max-w-4xl mx-auto">
          {/* Layer 1 (background paper, slightly rotated) */}
          <div className="absolute inset-0 bg-red-100/70 rounded-lg transform -rotate-3 shadow-lg z-0" style={textureStyle}></div>
          {/* Layer 3 (new paper layer) */}
          <div className="absolute inset-0 bg-pink-100/70 rounded-lg transform -rotate-1 shadow-xl z-0" style={textureStyle}></div>

          <div className="relative bg-gradient-to-br from-green-50/60 to-teal-50/60 shadow-xl p-6 sm:p-8 md:p-10 lg:p-12 border-2 md:border-4 border-green-200/50 z-10 w-full rounded-lg" style={textureStyle}>
            <div className="flex items-center gap-3 mb-4 md:mb-6">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-orange-800/70 font-josefin-sans" style={{
                textShadow: '2px 2px 0px rgba(255,255,255,0.4)'
              }}>About Us</h2>
            </div>

            <div className="space-y-3 md:space-y-4 text-base sm:text-lg text-orange-800/70 leading-relaxed font-lexend">
              <p>
                Welcome! Lemoncheeks Animation Cooperative is a worker cooperative, 
                with a mission to tell inclusive, original stories through animation. 
                We are collectively owned and governed, grounded in equity, inclusion, and care.
              </p>
              <p>
                We believe animation can be a powerful way to amplify underrepresented voices. As a cooperative
                rooted in bicultural perspectives, we want to create work that reflects the richness of our communities
                and experiences. 
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Poppy between About and Projects */}
      <div className="flex justify-center py-0 relative z-0">
        <img src={poppy} alt="Poppy" loading="lazy" className="h-48 md:h-64 object-contain" />
      </div>

      {/* Projects Section - Made Responsive */}
      <section id="projects" className="py-8 md:py-16 px-4 relative">
        <div className="flex justify-center relative z-10 w-full max-w-4xl mx-auto">
          {/* Layer 1 (background paper, slightly rotated) */}
          <div className="absolute inset-0 bg-pink-50/70 rounded-lg transform rotate-3 shadow-lg z-0" style={textureStyle}></div>
          {/* Layer 2 (another background paper, slightly rotated differently) */}
          <div className="absolute inset-0 bg-red-50/70 rounded-lg transform -rotate-2 shadow-lg z-0" style={textureStyle}></div>

          {/* Tomato artwork - responsive positioning */}
          <img
            src={tomato}
            alt="Tomato artwork"
            loading="lazy"
            className="absolute w-48 sm:w-56 md:w-72 lg:w-80 xl:w-96 object-contain rotate-6 z-20 opacity-90"
            style={{
              top: 'calc(clamp(-6rem, -15vw, -10rem) - 125px)',
              right: 'clamp(-4rem, -10vw, -15rem)'
            }}
          />
          
          {/* Project Card */}
          <div className="relative bg-gradient-to-br from-pink-50/60 to-red-50/60 border-2 md:border-4 border-pink-200/50 shadow-xl rounded-lg overflow-hidden z-10 w-full" style={textureStyle}>
            {/* Large artwork placeholder for project image/scene */}
            <img
              src={project_artwork}
              alt="Decorative frame"
              loading="lazy"
              className="relative z-10 block w-full h-auto object-contain mx-auto max-w-full sm:max-w-md md:max-w-lg lg:max-w-xl mt-4 sm:mt-6 md:mt-8 mb-2 sm:mb-3 md:mb-4"
            />
            <div className="p-6 sm:p-8 md:p-10 lg:p-12 relative">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 md:mb-4 text-pink-900/70 font-josefin-sans" style={{
                textShadow: '2px 2px 0px rgba(255,255,255,0.3)'
              }}>Projects</h3>
              
              <div className="w-full">
                <p className="text-base sm:text-lg text-pink-900/70 leading-relaxed mb-4 md:mb-6 font-nunito">
                  Our animated short film is currently in production! 

                  Our story will explore the small, tender complexities of bicultural identity and
                  intergenerational love between parent and child.
                </p>
                <p className="text-base sm:text-lg text-pink-900/70 leading-relaxed mb-4 md:mb-6 font-nunito">
                  This short explores questions like - 
                  What does it mean to grow up in two cultures at once? 
                  How do both love and misunderstanding 
                  coexist between an immigrant parent and their child? 
                  What are the small rituals and idiosyncrasies that carry whole histories?
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founders Section - Made Responsive */}
      <section id="our-team" className="py-8 md:py-16 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-6 md:mb-12">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-pink-900/70 inline-block font-josefin-sans" style={{
              textShadow: '2px 2px 0px rgba(255,255,255,0.4)'
            }}>🍋hello world!🍋</h2>
          </div>
          
          <div className="flex justify-center relative z-10 w-full max-w-4xl mx-auto">
            {/* Layer 1 (background paper, slightly rotated) */}
            <div className="absolute inset-0 bg-yellow-100/70 rounded-lg transform -rotate-2 shadow-lg z-0" style={textureStyle}></div>
            {/* Layer 2 (another background paper, slightly rotated differently) */}
            <div className="absolute inset-0 bg-pink-100/70 rounded-lg transform rotate-1 shadow-lg z-0" style={textureStyle}></div>

            {/* Main content card */}
            <div className="relative bg-gradient-to-br from-yellow-50/60 to-orange-50/60 border-2 md:border-4 border-orange-200/50 shadow-xl p-6 sm:p-8 md:p-10 lg:p-12 w-full flex flex-col lg:flex-row items-center lg:items-start gap-6 md:gap-8 rounded-lg z-10" style={textureStyle}>
              {/* Picture Left */}
              <div className="relative w-full lg:w-1/2 flex justify-center lg:justify-start flex-shrink-0">
                <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md h-56 sm:h-64 md:h-80 lg:h-96 shadow-lg transform rotate-3 bg-red-100/50 flex flex-col items-center justify-center group"style={{...textureStyle, border: '8px solid transparent', borderImageSlice: '8 fill', borderImageRepeat: 'stretch'}}>
                  <img src={team_photo1} alt="Team" loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
                  <img src={team_photo2} alt="Team" loading="lazy" className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ease-in-out opacity-0 group-hover:opacity-100" />
                </div>
              </div>
              {/* Words Right */}
              <div className="relative w-full lg:w-1/2 z-10" style={textureStyle}>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-left mb-2 sm:mb-3 text-orange-900/80 font-josefin-sans">Our Team</h3>
                <p className="text-base sm:text-lg text-orange-800/70 text-left leading-relaxed font-nunito">
                  We're Jackie, Frank, and Lauren, 3 California based artists (hello from SF and LA!) 
                  Our final secret member is Freddy the cat. He has bad teeth but he's still giving you a smile:) 
                </p>
                <img
                  src={freddy}
                  alt="freddy"
                  loading="lazy"
                  className="w-20 sm:w-24 md:w-28 lg:w-32 absolute -bottom-[140px] sm:-bottom-[132px] md:-bottom-[172px] lg:-bottom-[268px] right-2 md:right-3" 
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Characters image between Our Team and Contact */}
      <div className="flex justify-center -my-16 md:-my-24">
        <img
          src={characters}
          alt="Character artwork"
          loading="lazy"
          className="w-64 sm:w-80 md:w-96 lg:w-[28rem] object-contain opacity-90 transition-transform duration-300 hover:rotate-6"
        />
      </div>

      {/* Social Links Section - Made Responsive */}
      <section id="contact" className="py-8 md:py-16 px-4 relative">
        <div className="flex justify-center relative z-10 w-full max-w-4xl mx-auto">
          {/* Layer 1 (background paper, slightly rotated) */}
          <div className="absolute inset-0 bg-blue-50/70 rounded-lg transform rotate-2 shadow-lg z-0" style={textureStyle}></div>
          {/* Layer 2 (another background paper, slightly rotated differently) */}
          <div className="absolute inset-0 bg-purple-50/70 rounded-lg transform -rotate-3 shadow-lg z-0" style={textureStyle}></div>

          <div className="relative max-w-4xl mx-auto text-center p-6 sm:p-8 md:p-10 lg:p-12 rounded-lg shadow-xl z-10 w-full" style={{ backgroundColor: 'rgba(255,255,255,0.7)', ...textureStyle }}>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-orange-900/80 mb-4 md:mb-6 font-josefin-sans" style={{
              textShadow: '2px 2px 0px rgba(255,255,255,0.4)'
            }}>Stay Connected!</h2>
            <div className="flex justify-center gap-4 sm:gap-6">
              <a
                href="https://www.instagram.com/lemoncheeks_animation"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-yellow-200/50 hover:bg-yellow-300/60 p-3 sm:p-4 border-2 md:border-3 border-yellow-400/50 shadow-lg transition-all transform hover:scale-110"
                style={textureStyle}
              >
                <Instagram className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-orange-900/70" />
              </a>
              <a
                href="https://www.linkedin.com/company/lemoncheeksanimation"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-200/50 hover:bg-blue-300/60 p-3 sm:p-4 border-2 md:border-3 border-blue-400/50 shadow-lg transition-all transform hover:scale-110"
                style={textureStyle}
              >
                <Linkedin className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-blue-900/70" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer - Made Responsive */}
      <footer className="py-6 md:py-8 px-4 relative">
        <div className="flex justify-center relative z-10 w-full max-w-6xl mx-auto">
          {/* Layer 1 (background paper, slightly rotated) */}
          <div className="absolute inset-0 bg-yellow-50/70 rounded-lg transform -rotate-1 shadow-lg z-0" style={textureStyle}></div>
          {/* Layer x (another background paper, slightly rotated differently) */}
          <div className="absolute inset-0 bg-orange-50/70 rounded-lg transform rotate-2 shadow-lg z-0" style={textureStyle}></div>

          <div className="relative max-w-6xl mx-auto text-center p-6 sm:p-8 rounded-lg shadow-xl z-10 w-full" style={{ backgroundColor: 'rgba(255,255,255,0.7)', ...textureStyle }}>
            <div className="flex items-center justify-center gap-2 mb-3 md:mb-4">
              <Film className="w-5 h-5 sm:w-6 sm:h-6 text-orange-700/60" />
              <span className="text-sm sm:text-base md:text-lg lg:text-xl font-bold font-josefin-sans text-orange-900/80">lemoncheeks animation cooperative</span>
            </div>
            <p className="font-bold font-nunito text-orange-900/80 text-xs sm:text-sm md:text-base">© 2026 lemoncheeks animation cooperative. All rights reserved.</p>
            <p className="text-orange-700/50 text-xs sm:text-sm mt-2 font-nunito">Moving and grooving</p>
          </div>
        </div>
      </footer>
    </div>
  );
}