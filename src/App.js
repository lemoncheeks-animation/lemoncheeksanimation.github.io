import React, { useState } from 'react';
import { Menu, X, Film, Users, Briefcase, Heart, Instagram, Twitter, Youtube } from 'lucide-react';
import FloatingSpheres from './FloatingSpheres';
import border from './media/border2.jpg';
import team_photo1 from './media/team_photo1.jpg';
import team_photo2 from './media/team_photo2.jpg';
import style_frame from './media/style_frame.png';

export default function AnimationStudio() {
  const [activeSection, setActiveSection] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (section) => {
    setActiveSection(section);
    setMenuOpen(false);
    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
  };

  // Paper texture overlay
  const textureStyle = {
    backgroundImage: `url("data:image/svg+xml,%3Csvg width='200' height='200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' /%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23noise)' opacity='0.08'/%3E%3C/svg%3E")`,
    backgroundRepeat: 'repeat'
  };

  return (
    <div className="min-h-screen bg-orange-50/20 relative overflow-x-hidden" style={{
      border: '5px solid transparent',
      borderImageSource: `url(${border})`,
      borderImageSlice: '2 fill',
      borderImageRepeat: 'stretch'
    }}>
      <FloatingSpheres />
      {/* Notebook paper lines background */}
      <div className="fixed inset-0 opacity-20 pointer-events-none" style={{
        backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 29px, rgba(150,150,150,0.15) 29px, rgba(150,150,150,0.15) 30px)`
      }}></div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-red-200/60 backdrop-blur-sm z-50" style={{
        clipPath: 'polygon(0 0, 2% 1%, 5% 0, 8% 2%, 12% 1%, 15% 0, 18% 1%, 22% 2%, 25% 0, 28% 1%, 32% 2%, 35% 1%, 38% 0, 42% 2%, 45% 1%, 48% 0, 52% 1%, 55% 2%, 58% 0, 62% 1%, 65% 2%, 68% 1%, 72% 0, 75% 2%, 78% 1%, 82% 0, 85% 1%, 88% 2%, 92% 1%, 95% 0, 98% 2%, 100% 1%, 100% 92%, 98% 95%, 96% 93%, 94% 96%, 91% 94%, 88% 97%, 85% 95%, 82% 98%, 78% 96%, 75% 94%, 72% 97%, 68% 95%, 65% 98%, 62% 96%, 58% 94%, 55% 97%, 52% 95%, 48% 98%, 45% 96%, 42% 94%, 38% 97%, 35% 95%, 32% 98%, 28% 96%, 25% 94%, 22% 97%, 18% 95%, 15% 98%, 12% 96%, 8% 94%, 5% 97%, 2% 95%, 0 98%)',
        ...textureStyle
      }}>
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              {/* Placeholder for logo artwork */}
              <img src={style_frame} alt="logo" className="w-12 h-12 bg-orange-200/40 flex items-center justify-center"
                
                style={{
                  clipPath: 'polygon(2% 5%, 8% 2%, 15% 4%, 22% 1%, 30% 3%, 38% 1%, 45% 4%, 52% 2%, 60% 5%, 68% 2%, 75% 4%, 82% 1%, 90% 3%, 95% 6%, 98% 12%, 99% 20%, 98% 28%, 100% 35%, 99% 43%, 98% 50%, 100% 58%, 99% 65%, 98% 72%, 100% 80%, 98% 88%, 95% 94%, 90% 97%, 82% 99%, 75% 96%, 68% 98%, 60% 95%, 52% 98%, 45% 96%, 38% 99%, 30% 97%, 22% 99%, 15% 96%, 8% 98%, 2% 95%)',
                  border: '2px dashed rgba(251, 146, 60, 0.5)'
                }} />

            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-6">
              {['main-image-section', 'about', 'founders', 'projects'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize font-bold transition-all px-3 py-1 ${
                    activeSection === section
                      ? 'text-orange-900/80 underline'
                      : 'text-orange-800/60 hover:text-orange-900/80'
                  }`}
                  style={{ fontFamily: 'Comic Sans MS, cursive' }}
                >
                  {section}
                </button>
              ))}
            </div>

            <button
              className="md:hidden text-orange-900/70"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {menuOpen && (
            <div className="md:hidden mt-4 pb-4 space-y-2">
              {['main-image-section', 'about', 'founders', 'projects'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="block w-full text-left capitalize py-2 px-3 text-orange-800/70 font-bold"
                  style={{ fontFamily: 'Comic Sans MS, cursive' }}
                >
                  {section}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      <div id="main-image-section" className="relative w-full max-w-6xl mx-auto pt-20 px-4 text-center">
        {/* Layer 1 (background paper, slightly rotated) */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[95%] h-[93%] bg-orange-50/70 rounded-lg transform rotate-3 shadow-lg z-0" style={textureStyle}></div>
        {/* Layer 2 (background paper, slightly rotated differently) */}
        <div className="absolute top-[10px] left-1/2 -translate-x-1/2 w-[96%] h-[94%] bg-orange-100/70 rounded-lg transform -rotate-2 shadow-lg z-0" style={textureStyle}></div>
        {/* Layer 3 (middle paper layer) */}
        <div className="absolute top-[20px] left-1/2 -translate-x-1/2 w-[97%] h-[95%] bg-orange-200/70 rounded-lg transform rotate-1 shadow-lg z-0" style={textureStyle}></div>
        {/* Layer 4 (inner paper layer) */}
        <div className="absolute top-[30px] left-1/2 -translate-x-1/2 w-[98%] h-[96%] bg-orange-300/70 rounded-lg transform -rotate-3 shadow-lg z-0" style={textureStyle}></div>
        {/* Layer 5 (top-most paper layer) */}
        <div className="absolute top-[40px] left-1/2 -translate-x-1/2 w-[99%] h-[97%] bg-yellow-100/70 rounded-lg transform rotate-2 shadow-xl z-0" style={textureStyle}></div>

        <img src={style_frame} alt="Decorative frame" className="relative z-10 w-full h-auto object-contain mx-auto max-w-full lg:max-w-6xl mb-4" />
      </div>

      {/* Hero Section */}
      <section id="home" className="pt-16 pb-16 px-4 relative">

        <div className="flex justify-center relative z-10 w-full max-w-6xl mx-auto">
          {/* Layer 1 (background paper, slightly rotated) */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[90%] h-[90%] bg-red-50/70 rounded-lg transform rotate-3 shadow-lg z-0" style={textureStyle}></div>
          {/* Layer 2 (another background paper, slightly rotated differently) */}
          <div className="absolute top-[10px] left-1/2 -translate-x-1/2 w-[92%] h-[92%] bg-orange-50/70 rounded-lg transform -rotate-2 shadow-lg z-0" style={textureStyle}></div>
          {/* Layer 3 (new paper layer) */}
          <div className="absolute top-[20px] left-1/2 -translate-x-1/2 w-[94%] h-[94%] bg-blue-50/70 rounded-lg transform rotate-1 shadow-xl z-0" style={textureStyle}></div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 relative">
        <div className="flex justify-center relative z-10 w-full max-w-4xl mx-auto">
          {/* Layer 1 (background paper, slightly rotated) */}
          <div className="absolute inset-0 bg-green-50/70 rounded-lg transform -rotate-3 shadow-lg z-0" style={textureStyle}></div>
          {/* Layer 3 (new paper layer) */}
          <div className="absolute inset-0 bg-purple-50/70 rounded-lg transform -rotate-1 shadow-xl z-0" style={textureStyle}></div>
          {/* New doodle placeholder - top right */}
          <div className="absolute -top-5 right-5 w-24 h-24 bg-red-100/40 border-2 border-dashed border-red-400/50 flex items-center justify-center text-xs text-red-600/60 transform rotate-6" title="Drag artwork here">
            Star
          </div>

          <div className="relative bg-gradient-to-br from-green-50/60 to-teal-50/60 shadow-xl p-8 md:p-12 border-4 border-green-200/50 rounded-lg z-10" style={textureStyle}>
            {/* Artwork placeholder - left side character */}
            <div className="absolute -left-10 top-10 w-40 h-48 bg-green-100/40 border-2 border-dashed border-green-400/50 flex items-center justify-center text-xs text-green-600/60 hidden lg:flex transform rotate-6" title="Drag character artwork here">
              Character
            </div>

            <div className="flex items-center gap-3 mb-6">
              <Heart className="w-8 h-8 text-red-400/70 fill-red-400/50" />
              <h2 className="text-4xl font-bold text-green-800/70" style={{
                fontFamily: 'Comic Sans MS, cursive',
                textShadow: '2px 2px 0px rgba(255,255,255,0.4)'
              }}>About Us</h2>
            </div>
            
            {/* Small artwork placeholder inside */}
            <div className="absolute -right-5 -bottom-5 w-28 h-28 bg-yellow-100/40 border-2 border-dashed border-yellow-400/50 flex items-center justify-center text-xs text-yellow-600/60 transform -rotate-12" title="Drag artwork here">
              Art
            </div>

            <div className="space-y-4 text-lg text-green-900/70 leading-relaxed" style={{ fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"' }}>
              <p>
                We're a small, passionate animation studio dedicated to creating heartwarming stories
                that resonate with audiences of all ages. Our mission is to blend creativity, artistry,
                and emotion into every frame we produce.
              </p>
              <p>
                Starting with our debut short film, we're building a collection of unique animated
                experiences that celebrate the power of imagination and the beauty of visual storytelling.
              </p>
              <p>
                Every project we undertake is crafted with love, attention to detail, and a commitment
                to bringing joy to our viewers. We believe animation has the power to transport,
                inspire, and connect people across the world.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section id="founders" className="py-16 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-pink-900/70 inline-block" style={{
              fontFamily: 'Comic Sans MS, cursive',
              textShadow: '2px 2px 0px rgba(255,255,255,0.4)'
            }}>Meet the Team</h2>
          </div>
          
          <div className="flex justify-center relative z-10 w-full max-w-4xl mx-auto">
            {/* Layer 1 (background paper, slightly rotated) */}
            <div className="absolute inset-0 bg-yellow-100/70 rounded-lg transform -rotate-2 shadow-lg z-0" style={textureStyle}></div>
            {/* Layer 2 (another background paper, slightly rotated differently) */}
            <div className="absolute inset-0 bg-pink-100/70 rounded-lg transform rotate-1 shadow-lg z-0" style={textureStyle}></div>

            {/* Main content card */}
            <div className="relative bg-gradient-to-br from-yellow-50/60 to-orange-50/60 border-4 border-orange-200/50 shadow-xl p-6 md:p-8 w-full flex flex-col lg:flex-row items-center lg:items-start gap-6 rounded-lg overflow-hidden z-10" style={textureStyle}>
              {/* Picture Left */}
              <div className="relative w-full lg:w-1/2 flex justify-center lg:justify-start flex-shrink-0">
                <div className="relative w-[28rem] h-96 border-4 border-dashed border-orange-400/70 shadow-lg transform rotate-3 bg-red-100/50 flex flex-col items-center justify-center group" title="Team photos" style={textureStyle}>
                  <img src={team_photo1} alt="Team" className="absolute inset-0 w-full h-full object-cover" />
                  <img src={team_photo2} alt="Team" className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ease-in-out opacity-0 group-hover:opacity-100" />
                </div>
              </div>
              {/* Words Right */}
              <div className="w-full lg:w-1/2 p-4 bg-blue-50/50 shadow-md transform -rotate-1 rounded-md z-10" style={textureStyle}>
                <h3 className="text-2xl font-bold text-left mb-2 text-orange-900/80" style={{ fontFamily: 'Comic Sans MS, cursive' }}>Our Team</h3>
                <p className="text-red-500/70 text-left mb-4 font-bold" style={{ fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"' }}>Animators & Storytellers</p>
                <p className="text-orange-800/70 text-left leading-relaxed" style={{ fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"' }}>
                  We are a collective of passionate artists, dreamers, and technicians united by a love for storytelling. Together, we bring imagination to life.
                </p>
              </div>
            </div>
          </div>

          {/* Small decorative artwork placeholders */}
          <div className="absolute -right-10 top-40 w-32 h-32 bg-pink-100/40 border-2 border-dashed border-pink-400/50 hidden lg:flex items-center justify-center text-xs text-pink-600/60" title="Drag artwork here">
            Doodle
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-4 relative">
        <div className="flex justify-center relative z-10 w-full max-w-4xl mx-auto">
          {/* Layer 1 (background paper, slightly rotated) */}
          <div className="absolute inset-0 bg-pink-50/70 rounded-lg transform rotate-3 shadow-lg z-0" style={textureStyle}></div>
          {/* Layer 2 (another background paper, slightly rotated differently) */}
          <div className="absolute inset-0 bg-red-50/70 rounded-lg transform -rotate-2 shadow-lg z-0" style={textureStyle}></div>

          {/* Project Card */}
          <div className="relative bg-gradient-to-br from-pink-50/60 to-red-50/60 border-4 border-pink-200/50 shadow-xl rounded-lg overflow-hidden z-10" style={textureStyle}>
            {/* Large artwork placeholder for project image/scene */}
            <div className="h-80 bg-gradient-to-br from-yellow-100/40 to-orange-100/40 border-b-4 border-pink-200/50 flex flex-col items-center justify-center relative transform -rotate-1 scale-105" style={textureStyle}>
              <div className="w-64 h-48 border-2 border-dashed border-orange-400/50 flex flex-col items-center justify-center text-orange-600/60">
                <Film className="w-12 h-12 mb-2 opacity-50" />
                <span className="text-sm">Project Artwork</span>
                <span className="text-xs">Drag scene or poster here</span>
              </div>
            </div>
            <div className="p-8 md:p-12">
              <h3 className="text-3xl font-bold mb-4 text-pink-900/70" style={{
                fontFamily: 'Comic Sans MS, cursive',
                textShadow: '2px 2px 0px rgba(255,255,255,0.3)'
              }}>Our First Short Film</h3>
              
              {/* Small character placeholder */}
              <div className="float-left mr-4 mb-4 w-24 h-32 bg-red-100/40 border-2 border-dashed border-red-400/50 flex items-center justify-center text-xs text-red-600/60 transform rotate-6" title="Drag character here">
                Character
              </div>

              <p className="text-lg text-pink-900/70 leading-relaxed mb-6" style={{ fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"' }}>
                Our debut animated short film is currently in production! This heartwarming story
                explores themes of friendship, adventure, and self-discovery through stunning
                visuals and compelling characters.
              </p>
              <p className="text-pink-800/70 leading-relaxed mb-4" style={{ fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"' }}>
                Follow our journey as we bring this magical world to life. We're pouring our hearts
                into every frame, and we can't wait to share it with you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Links Section */}
      <section className="py-16 px-4 relative">
        <div className="flex justify-center relative z-10 w-full max-w-4xl mx-auto">
          {/* Layer 1 (background paper, slightly rotated) */}
          <div className="absolute inset-0 bg-blue-50/70 rounded-lg transform rotate-2 shadow-lg z-0" style={textureStyle}></div>
          {/* Layer 2 (another background paper, slightly rotated differently) */}
          <div className="absolute inset-0 bg-purple-50/70 rounded-lg transform -rotate-3 shadow-lg z-0" style={textureStyle}></div>

          <div className="relative max-w-4xl mx-auto text-center p-8 md:p-12 rounded-lg shadow-xl z-10" style={{ backgroundColor: 'rgba(255,255,255,0.7)', ...textureStyle }}>
            <h2 className="text-4xl font-bold text-orange-900/80 mb-6" style={{
              fontFamily: 'Comic Sans MS, cursive',
              textShadow: '2px 2px 0px rgba(255,255,255,0.4)'
            }}>Stay Connected</h2>
            <p className="text-orange-800/70 text-lg mb-8" style={{ fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"' }}>
              Follow us on social media for behind-the-scenes content, updates, and more!
            </p>
            <div className="flex justify-center gap-6">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-yellow-200/50 hover:bg-yellow-300/60 p-4 border-3 border-yellow-400/50 shadow-lg transition-all transform hover:scale-110"
                style={textureStyle}
              >
                <Instagram className="w-8 h-8 text-orange-900/70" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-teal-200/50 hover:bg-teal-300/60 p-4 border-3 border-teal-400/50 shadow-lg transition-all transform hover:scale-110"
                style={textureStyle}
              >
                <Twitter className="w-8 h-8 text-teal-900/70" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-red-300/50 hover:bg-red-400/60 p-4 border-3 border-red-500/50 shadow-lg transition-all transform hover:scale-110"
                style={textureStyle}
              >
                <Youtube className="w-8 h-8 text-red-900/70" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      {/* Footer */}
      <footer className="py-8 px-4 relative">
        <div className="flex justify-center relative z-10 w-full max-w-6xl mx-auto">
          {/* Layer 1 (background paper, slightly rotated) */}
          <div className="absolute inset-0 bg-yellow-50/70 rounded-lg transform -rotate-1 shadow-lg z-0" style={textureStyle}></div>
          {/* Layer 2 (another background paper, slightly rotated differently) */}
          <div className="absolute inset-0 bg-orange-50/70 rounded-lg transform rotate-2 shadow-lg z-0" style={textureStyle}></div>

          <div className="relative max-w-6xl mx-auto text-center p-8 rounded-lg shadow-xl z-10" style={{ backgroundColor: 'rgba(255,255,255,0.7)', ...textureStyle }}>
            <div className="flex items-center justify-center gap-2 mb-4">
              <Film className="w-6 h-6 text-orange-700/60" />
              <span className="text-xl font-bold" style={{ fontFamily: 'Comic Sans MS, cursive' }}>lemoncheeks</span>
            </div>
            <p className="text-orange-800/60" style={{ fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"' }}>© 2024 lemoncheeks. All rights reserved.</p>
            <p className="text-orange-700/50 text-sm mt-2" style={{ fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"' }}>Creating magic, one frame at a time ✨</p>
          </div>
        </div>
      </footer>
    </div>
  );
}