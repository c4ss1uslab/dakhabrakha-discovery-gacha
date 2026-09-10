'use client'

import React, { useState, useEffect } from 'react'

// Core song categories
const songCategories = [
  { 
    id: 1, 
    name: 'intense', 
    emoji: '🎢',
    links: [
      'https://www.youtube.com/watch?v=x3GVCpEhkfE',
      'https://www.youtube.com/watch?v=7UapQurLjg4',
      'https://www.youtube.com/watch?v=BPDcUonf6fA',
      'https://www.youtube.com/watch?v=qt6E5yxy-uc',
      'https://www.youtube.com/watch?v=paTQSBqNrBk',
      'https://www.youtube.com/watch?v=mbse9N-cYHQ',
      'https://www.youtube.com/watch?v=RmqhOaR9UX8',
      'https://www.youtube.com/watch?v=72gB4Ch_auk',
      'https://www.youtube.com/watch?v=3iRYtfkfp94',
      'https://www.youtube.com/watch?v=6Ws8movN9C0'
    ]
  },
  { 
    id: 2, 
    name: 'ritualistic', 
    emoji: '🪘',
    links: [
      'https://www.youtube.com/watch?v=AObDpJ6xQMk',
      'https://www.youtube.com/watch?v=paTQSBqNrBk',
      'https://www.youtube.com/watch?v=7UapQurLjg4',
      'https://www.youtube.com/watch?v=Hn67wR-rrtQ',
      'https://www.youtube.com/watch?v=bHI1dbpZ1A0',
      'https://www.youtube.com/watch?v=BPDcUonf6fA',
      'https://www.youtube.com/watch?v=qt6E5yxy-uc',
      'https://www.youtube.com/watch?v=3iRYtfkfp94',
      'https://www.youtube.com/watch?v=Lzpe4Jp6NYc',
      'https://www.youtube.com/watch?v=R1km9WTzHfE',
      'https://www.youtube.com/watch?v=GdSnTmxCEkg',
      'https://www.youtube.com/watch?v=5VcJreRFMtI',
      'https://www.youtube.com/watch?v=x3GVCpEhkfE'
    ]
  },
  { 
    id: 3, 
    name: 'heartwarming', 
    emoji: '🥰',
    links: [
      'https://www.youtube.com/watch?v=Lzpe4Jp6NYc',
      'https://www.youtube.com/watch?v=u1KdGDEkj_U',
      'https://www.youtube.com/watch?v=bHI1dbpZ1A0',
      'https://www.youtube.com/watch?v=931UUbLTs3M',
      'https://www.youtube.com/watch?v=56t45vxMQlg',
      'https://www.youtube.com/watch?v=i2LnCQQujcA',
      'https://www.youtube.com/watch?v=6Ws8movN9C0',
      'https://www.youtube.com/watch?v=AObDpJ6xQMk',
      'https://www.youtube.com/watch?v=GdSnTmxCEkg',
      'https://www.youtube.com/watch?v=OAoY_R4gXuw',
      'https://www.youtube.com/watch?v=R1km9WTzHfE'
    ]
  },
  { 
    id: 4, 
    name: 'danceable', 
    emoji: '💃🏻',
    links: [
      'https://www.youtube.com/watch?v=vmvSrW9vzHo',
      'https://www.youtube.com/watch?v=wADbySMw7Gk',
      'https://www.youtube.com/watch?v=l1wnHHjnT28',
      'https://www.youtube.com/watch?v=2zYCBhokaDk',
      'https://www.youtube.com/watch?v=d4TCu-OX0uU',
      'https://www.youtube.com/watch?v=zGXP4CJv7HE',
      'https://www.youtube.com/watch?v=OqcYOmNNs5o',
      'https://www.youtube.com/watch?v=a16UzaND5co',
      'https://www.youtube.com/watch?v=EQ--PX7_PI0',
      'https://www.youtube.com/watch?v=1v4NmlHtU4o',
      'https://www.youtube.com/watch?v=sxZCe4OzLD0',
      'https://www.youtube.com/watch?v=H7cpHodEp1k',
      'https://www.youtube.com/watch?v=ubXVrYzz8rA'
    ]
  },
  { 
    id: 5, 
    name: 'atmospheric', 
    emoji: '🌄',
    links: [
      'https://www.youtube.com/watch?v=Hn67wR-rrtQ',
      'https://www.youtube.com/watch?v=bHI1dbpZ1A0',
      'https://www.youtube.com/watch?v=i2LnCQQujcA',
      'https://www.youtube.com/watch?v=S2_qXnLUyDY',
      'https://www.youtube.com/watch?v=QqzmKZMxuy8',
      'https://www.youtube.com/watch?v=w7ybe3RKjho',
      'https://www.youtube.com/watch?v=GdSnTmxCEkg',
      'https://www.youtube.com/watch?v=Fpn7_i1_M4o',
      'https://www.youtube.com/watch?v=R1km9WTzHfE'
    ]
  },
  { 
    id: 6, 
    name: 'theatrical', 
    emoji: '🎭',
    links: [
      'https://www.youtube.com/watch?v=S2_qXnLUyDY',
      'https://www.youtube.com/watch?v=xfnOnW9RcGk',
      'https://www.youtube.com/watch?v=OAoY_R4gXuw',
      'https://www.youtube.com/watch?v=q9tLDRXaLtI'
    ]
  },
  { 
    id: 7, 
    name: 'weird', 
    emoji: '❔',
    links: [
      'https://www.youtube.com/watch?v=EQ--PX7_PI0',
      'https://www.youtube.com/watch?v=q9tLDRXaLtI',
      'https://www.youtube.com/watch?v=-KA7brzWQIk',
      'https://www.youtube.com/watch?v=OAoY_R4gXuw',
      'https://www.youtube.com/watch?v=3VF42gkhcXw'
    ]
  },
  { 
    id: 8, 
    name: "c4ss1us' favs", 
    emoji: '🐉',
    links: [
      'https://www.youtube.com/watch?v=cX8dyBKGGD4',
      'https://www.youtube.com/watch?v=AObDpJ6xQMk',
      'https://www.youtube.com/watch?v=mbse9N-cYHQ',
      'https://www.youtube.com/watch?v=bwPc4AhCcgM',
      'https://www.youtube.com/watch?v=aFsjFcGeJjE',
      'https://www.youtube.com/watch?v=UfBqptcgwfc',
      'https://www.youtube.com/watch?v=8onMl6CJRdU',
      'https://www.youtube.com/watch?v=UFob9GDV-OI',
      'https://www.youtube.com/watch?v=l1wnHHjnT28',
      'https://www.youtube.com/watch?v=tpvUnl-1qJg',
      'https://www.youtube.com/watch?v=EQ--PX7_PI0',
      'https://www.youtube.com/watch?v=A9Ur_v3RmYo',
      'https://www.youtube.com/watch?v=3iRYtfkfp94',
      'https://www.youtube.com/watch?v=i2LnCQQujcA',
      'https://www.youtube.com/watch?v=ORUd4PfCX_U',
      'https://www.youtube.com/watch?v=bEUIyAci3tQ',
      'https://www.youtube.com/watch?v=x3GVCpEhkfE'
    ]
  }
]

// The carousel gallery sorted into specific visual themes, with wide layout flags added
const carouselImages = [
  { src: 'https://beehy.pe/wp-content/uploads/2017/12/Ukraine-DakhaBrakha-Monakh.jpg', author: '', theme: 'yellow', isWide: true },
  { src: 'https://dakhabrakha.com.ua/assets/gallery/2/18.jpg', author: 'Photo by Olga Zakrevska', theme: 'red' },
  { src: 'https://dakhabrakha.com.ua/assets/gallery/2/24.jpg', author: 'Photo by Olga Zakrevska', theme: 'red' },
  { src: 'https://dakhabrakha.com.ua/assets/gallery/6/50.jpg', author: 'Photo by Telikova Nastya', theme: 'red' },
  { src: 'https://dakhabrakha.com.ua/assets/gallery/8/71.jpg', author: 'Photo by Oli Zitch', theme: 'red' },
  { src: 'https://dakhabrakha.com.ua/assets/gallery/8/78.jpg', author: 'Photo by Oli Zitch', theme: 'red' },
  { src: 'https://dakhabrakha.com.ua/assets/gallery/10/135.jpg', author: 'Pictures by Sergey Sivyakov, Yuri Gryaznov, Stefanyak Juryj, Artem Galkin, Nastya Mantach', theme: 'red' },
  { src: 'https://dakhabrakha.com.ua/assets/gallery/13/175.jpg', author: 'Photo by Vitaliy Vorobyov', theme: 'red' },
  { src: 'https://dakhabrakha.com.ua/assets/gallery/4/40.jpg', author: 'By Tanya Vilchynska', theme: 'yellow', isWide: true },
  { src: 'https://dakhabrakha.com.ua/assets/gallery/6/62.jpg', author: 'Photo by Telikova Nastya', theme: 'yellow' },
  { src: 'https://dakhabrakha.com.ua/assets/gallery/10/141.jpg', author: 'Pictures by Sergey Sivyakov, Yuri Gryaznov, Stefanyak Juryj, Artem Galkin, Nastya Mantach', theme: 'yellow' },
  { src: 'https://dakhabrakha.com.ua/assets/gallery/10/143.jpg', author: 'Pictures by Sergey Sivyakov, Yuri Gryaznov, Stefanyak Juryj, Artem Galkin, Nastya Mantach', theme: 'yellow' },
  { src: 'https://dakhabrakha.com.ua/assets/gallery/10/137.jpg', author: 'Pictures by Sergey Sivyakov, Yuri Gryaznov, Stefanyak Juryj, Artem Galkin, Nastya Mantach', theme: 'yellow' },
  { src: 'https://dakhabrakha.com.ua/assets/gallery/12/166.jpg', author: 'Photo by Olga Zakrevska', theme: 'yellow' }
]

export default function DakhaBrakhaGame() {
  const [selectedSong, setSelectedSong] = useState<string | null>(null)
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [currentIndex, setCurrentIndex] = useState(0)

  // Carousel timer logic
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % carouselImages.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  // Dynamic Theme Colors & Layout
  const currentImage = carouselImages[currentIndex]
  const isYellow = currentImage.theme === 'yellow'
  const isWide = currentImage.isWide
  const accentColor = isYellow ? '#f4a902' : '#c82424'

  const selectRandomSong = (category: typeof songCategories[0]) => {
    const randomIndex = Math.floor(Math.random() * category.links.length)
    const randomLink = category.links[randomIndex]
    setSelectedSong(randomLink)
    setSelectedCategory(category.name)
    
    // Smooth scroll down to the video when a pull is made
    setTimeout(() => {
      document.getElementById('ritual-video')?.scrollIntoView({ behavior: 'smooth' })
    }, 150)
  }

  const getYoutubeVideoId = (url: string) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/
    const match = url?.match(regExp)
    return (match && match[2].length === 11) ? match[2] : null
  }

  return (
    <div className="min-h-screen bg-[#141414] text-[#f4f4f0] font-serif flex flex-col items-center py-8 px-4 sm:px-8 transition-colors duration-1000 overflow-hidden">
      
      {/* Header - Reduced Margins & Size */}
      <div className="text-center mb-6">
        <h1 className="text-2xl md:text-4xl tracking-[0.2em] uppercase font-light mb-2">
          DakhaBrakha
        </h1>
        <h2 className="text-base md:text-lg tracking-[0.3em] uppercase transition-colors duration-1000" style={{ color: accentColor }}>
          Discovery Gacha
        </h2>
      </div>

      {/* Main Image Carousel Frame - Tighter Margins */}
      <div 
        className={`relative w-full mx-auto flex flex-col items-center mb-8 transition-all duration-1000 ease-in-out ${
          isWide ? 'max-w-2xl' : 'max-w-[18rem] md:max-w-sm'
        }`}
      >
        <div 
          className={`relative w-full overflow-hidden p-2 border transition-all duration-1000 ease-in-out ${
            isWide ? 'aspect-video' : 'aspect-[4/5] sm:aspect-square'
          }`}
          style={{ borderColor: `${accentColor}50` }}
        >
          <div className="relative w-full h-full border border-[#f4f4f0]/10 bg-[#0a0a0a]">
            {carouselImages.map((img, idx) => (
              <img
                key={idx}
                src={img.src}
                alt="DakhaBrakha Gallery"
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                  idx === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
                }`}
              />
            ))}
          </div>
        </div>
        
        {/* Author Credit - Reduced space */}
        <div className="h-4 mt-2 w-full text-center">
          <p className="text-[10px] md:text-xs tracking-widest uppercase text-[#f4f4f0]/50 transition-opacity duration-700">
            {carouselImages[currentIndex].author || '✧'}
          </p>
        </div>
      </div>

      {/* Intro Text - Smaller margins */}
      <p className="text-center text-[#f4f4f0]/70 mb-6 max-w-lg mx-auto text-sm tracking-wide leading-relaxed italic">
        each pull grants you a unique DakhaBrakha song. <br/> 
        select a category below to reveal your journey.
      </p>

      {/* Gacha Category Buttons - Grid condensed into 2 cols mobile, 4 cols desktop */}
      <div className="w-full max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3 mb-8 relative z-10">
        {songCategories.map((category) => (
          <button
            key={category.id}
            onClick={() => selectRandomSong(category)}
            className="group relative w-full flex items-center justify-between px-3 py-3 border border-[#f4f4f0]/10 bg-transparent transition-all overflow-hidden"
          >
            {/* Dynamic hover background */}
            <div 
              className="absolute inset-0 opacity-0 group-hover:opacity-15 transition-opacity duration-500" 
              style={{ backgroundColor: accentColor }} 
            />
            
            <div className="relative flex items-center space-x-2 z-10">
              <span className="italic text-[#f4f4f0]/30 group-hover:text-[#f4f4f0]/80 transition-colors text-xs">
                {String(category.id).padStart(2, '0')}
              </span>
              <span className="uppercase tracking-widest text-[10px] sm:text-xs font-medium text-[#f4f4f0] group-hover:text-white transition-colors text-left leading-tight">
                {category.name}
              </span>
            </div>
            
            <span className="relative z-10 text-sm sm:text-base transform group-hover:scale-110 transition-transform duration-500 ml-1">
              {category.emoji}
            </span>
            
            {/* Animated Bottom Border */}
            <span 
              className="absolute bottom-0 left-0 h-[1px] w-0 group-hover:w-full transition-all duration-700 ease-out z-20" 
              style={{ backgroundColor: accentColor }}
            />
          </button>
        ))}
      </div>

{/* Dynamic Results Display - Tighter internal padding */}
      {selectedSong && (
        <div id="ritual-video" className="w-full max-w-3xl mx-auto mt-2 p-[1px] transition-colors duration-1000 scroll-mt-6" style={{ backgroundColor: `${accentColor}40` }}>
          {/* Added 'relative' here so the absolute button aligns to this box */}
          <div className="bg-[#141414] p-4 md:p-6 flex flex-col items-center relative">
            
            {/* Minimize / Close Button */}
            <button
              onClick={() => setSelectedSong(null)}
              className="absolute top-2 right-2 sm:top-4 sm:right-4 w-8 h-8 flex items-center justify-center text-[#f4f4f0]/40 hover:text-[#f4f4f0] transition-colors text-lg"
              aria-label="Minimize"
            >
              ✕
            </button>

            {/* Added mt-4 sm:mt-0 to prevent the text from overlapping the button on small screens */}
            <h2 className="text-base md:text-lg uppercase tracking-[0.3em] mb-4 text-[#f4f4f0] text-center mt-4 sm:mt-0">
              The <span style={{ color: accentColor }} className="transition-colors duration-1000 font-bold">{selectedCategory}</span> Pull
            </h2>
            
            <div className="relative aspect-video w-full mb-4 bg-[#0a0a0a] shadow-2xl border border-[#f4f4f0]/10">
              <iframe 
                width="100%" 
                height="100%" 
                src={`https://www.youtube.com/embed/${getYoutubeVideoId(selectedSong)}`} 
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              ></iframe>
            </div>
            
            <a
              href={selectedSong}
              target="_blank"
              rel="noopener noreferrer"
              className="tracking-widest uppercase text-[10px] md:text-xs hover:opacity-70 transition-opacity"
              style={{ color: accentColor }}
            >
              Open in YouTube ✦
            </a>
          </div>
        </div>
      )}

      {/* Footer Instructions - Tighter spacing */}
      <p className="text-xs text-[#f4f4f0]/40 text-center mt-8 mb-8 max-w-xl mx-auto italic">
        a few songs are featured across multiple categories. if you've heard it before, or seek a different resonance, simply pull again.
      </p>

      {/* Footer Area with Logo and Signature */}
      <div className="pb-8 w-full relative flex justify-center items-center px-4 sm:px-8 max-w-6xl mx-auto">
        
        {/* Clickable Logo (Centered) */}
        <a 
          href="https://dakhabrakha.com.ua" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="opacity-50 hover:opacity-100 transition-opacity duration-700"
        >
          <img 
            src="https://dakhabrakha.com.ua/img/bottom_logo.png" 
            alt="DakhaBrakha Official Website" 
            className="h-10 w-auto"
          />
        </a>

        {/* Signature (Right-aligned) */}
        <div className="absolute right-4 sm:right-8 text-[10px] sm:text-xs text-[#f4f4f0]/50 tracking-wide italic">
          made with <span className="not-italic">❤️</span> by:{' '}
          <a
            href="https://c4ss1us.mmm.page/music"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold not-italic transition-colors duration-1000 hover:opacity-80"
            style={{ color: accentColor }}
          >
            c4ss1us
          </a>
        </div>
      </div>
    </div>
  )
}