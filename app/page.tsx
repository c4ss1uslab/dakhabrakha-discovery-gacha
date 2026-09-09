'use client'

import React, { useEffect, useState } from 'react'

const songCategories = [
  { id: 1, name: 'intense', emoji: '🎢', links: ['https://www.youtube.com/watch?v=x3GVCpEhkfE','https://www.youtube.com/watch?v=7UapQurLjg4','https://www.youtube.com/watch?v=BPDcUonf6fA','https://www.youtube.com/watch?v=qt6E5yxy-uc','https://www.youtube.com/watch?v=paTQSBqNrBk','https://www.youtube.com/watch?v=mbse9N-cYHQ','https://www.youtube.com/watch?v=RmqhOaR9UX8','https://www.youtube.com/watch?v=72gB4Ch_auk','https://www.youtube.com/watch?v=3iRYtfkfp94','https://www.youtube.com/watch?v=6Ws8movN9C0'] },
  { id: 2, name: 'shamanic', emoji: '🐉', links: ['https://www.youtube.com/watch?v=AObDpJ6xQMk','https://www.youtube.com/watch?v=paTQSBqNrBk','https://www.youtube.com/watch?v=7UapQurLjg4','https://www.youtube.com/watch?v=Hn67wR-rrtQ','https://www.youtube.com/watch?v=bHI1dbpZ1A0','https://www.youtube.com/watch?v=BPDcUonf6fA','https://www.youtube.com/watch?v=qt6E5yxy-uc','https://www.youtube.com/watch?v=3iRYtfkfp94','https://www.youtube.com/watch?v=Lzpe4Jp6NYc','https://www.youtube.com/watch?v=R1km9WTzHfE','https://www.youtube.com/watch?v=GdSnTmxCEkg','https://www.youtube.com/watch?v=5VcJreRFMtI','https://www.youtube.com/watch?v=x3GVCpEhkfE'] },
  { id: 3, name: 'heartwarming', emoji: '🥰', links: ['https://www.youtube.com/watch?v=Lzpe4Jp6NYc','https://www.youtube.com/watch?v=u1KdGDEkj_U','https://www.youtube.com/watch?v=bHI1dbpZ1A0','https://www.youtube.com/watch?v=931UUbLTs3M','https://www.youtube.com/watch?v=56t45vxMQlg','https://www.youtube.com/watch?v=i2LnCQQujcA','https://www.youtube.com/watch?v=6Ws8movN9C0','https://www.youtube.com/watch?v=AObDpJ6xQMk','https://www.youtube.com/watch?v=GdSnTmxCEkg','https://www.youtube.com/watch?v=OAoY_R4gXuw','https://www.youtube.com/watch?v=R1km9WTzHfE'] },
  { id: 4, name: 'danceable', emoji: '💃🏻', links: ['https://www.youtube.com/watch?v=vmvSrW9vzHo','https://www.youtube.com/watch?v=wADbySMw7Gk','https://www.youtube.com/watch?v=l1wnHHjnT28','https://www.youtube.com/watch?v=2zYCBhokaDk','https://www.youtube.com/watch?v=d4TCu-OX0uU','https://www.youtube.com/watch?v=zGXP4CJv7HE','https://www.youtube.com/watch?v=OqcYOmNNs5o','https://www.youtube.com/watch?v=a16UzaND5co','https://www.youtube.com/watch?v=EQ--PX7_PI0','https://www.youtube.com/watch?v=1v4NmlHtU4o','https://www.youtube.com/watch?v=sxZCe4OzLD0','https://www.youtube.com/watch?v=H7cpHodEp1k','https://www.youtube.com/watch?v=ubXVrYzz8rA'] },
  { id: 5, name: 'atmospheric', emoji: '🌄', links: ['https://www.youtube.com/watch?v=Hn67wR-rrtQ','https://www.youtube.com/watch?v=bHI1dbpZ1A0','https://www.youtube.com/watch?v=i2LnCQQujcA','https://www.youtube.com/watch?v=S2_qXnLUyDY','https://www.youtube.com/watch?v=QqzmKZMxuy8','https://www.youtube.com/watch?v=w7ybe3RKjho','https://www.youtube.com/watch?v=GdSnTmxCEkg','https://www.youtube.com/watch?v=Fpn7_i1_M4o','https://www.youtube.com/watch?v=R1km9WTzHfE'] },
  { id: 6, name: 'theatrical', emoji: '🎭', links: ['https://www.youtube.com/watch?v=S2_qXnLUyDY','https://www.youtube.com/watch?v=xfnOnW9RcGk','https://www.youtube.com/watch?v=OAoY_R4gXuw','https://www.youtube.com/watch?v=q9tLDRXaLtI'] },
  { id: 7, name: 'weird', emoji: '❔', links: ['https://www.youtube.com/watch?v=EQ--PX7_PI0','https://www.youtube.com/watch?v=q9tLDRXaLtI','https://www.youtube.com/watch?v=-KA7brzWQIk','https://www.youtube.com/watch?v=OAoY_R4gXuw','https://www.youtube.com/watch?v=3VF42gkhcXw'] },
  { id: 8, name: "c4ss1us' favorites", emoji: '🌟', links: ['https://www.youtube.com/watch?v=cX8dyBKGGD4','https://www.youtube.com/watch?v=AObDpJ6xQMk','https://www.youtube.com/watch?v=mbse9N-cYHQ','https://www.youtube.com/watch?v=bwPc4AhCcgM','https://www.youtube.com/watch?v=aFsjFcGeJjE','https://www.youtube.com/watch?v=UfBqptcgwfc','https://www.youtube.com/watch?v=8onMl6CJRdU','https://www.youtube.com/watch?v=UFob9GDV-OI','https://www.youtube.com/watch?v=l1wnHHjnT28','https://www.youtube.com/watch?v=tpvUnl-1qJg','https://www.youtube.com/watch?v=EQ--PX7_PI0','https://www.youtube.com/watch?v=A9Ur_v3RmYo','https://www.youtube.com/watch?v=3iRYtfkfp94','https://www.youtube.com/watch?v=i2LnCQQujcA','https://www.youtube.com/watch?v=ORUd4PfCX_U','https://www.youtube.com/watch?v=bEUIyAci3tQ','https://www.youtube.com/watch?v=x3GVCpEhkfE'] },
]

const carouselImages = [
  { src: 'https://beehy.pe/wp-content/uploads/2017/12/Ukraine-DakhaBrakha-Monakh.jpg', author: '', theme: 'yellow' },
  { src: 'https://dakhabrakha.com.ua/assets/gallery/2/18.jpg', author: 'Photo by Olga Zakrevska', theme: 'red' },
  { src: 'https://dakhabrakha.com.ua/assets/gallery/2/24.jpg', author: 'Photo by Olga Zakrevska', theme: 'red' },
  { src: 'https://dakhabrakha.com.ua/assets/gallery/6/50.jpg', author: 'Photo by Telikova Nastya', theme: 'red' },
  { src: 'https://dakhabrakha.com.ua/assets/gallery/8/71.jpg', author: 'Photo by Oli Zitch', theme: 'red' },
  { src: 'https://dakhabrakha.com.ua/assets/gallery/8/78.jpg', author: 'Photo by Oli Zitch', theme: 'red' },
  { src: 'https://dakhabrakha.com.ua/assets/gallery/10/135.jpg', author: 'Pictures by Sergey Sivyakov, Yuri Gryaznov, Stefanyak Juryj, Artem Galkin, Nastya Mantach', theme: 'red' },
  { src: 'https://dakhabrakha.com.ua/assets/gallery/13/175.jpg', author: 'Photo by Vitaliy Vorobyov', theme: 'red' },
  { src: 'https://dakhabrakha.com.ua/assets/gallery/4/40.jpg', author: 'By Tanya Vilchynska', theme: 'yellow' },
  { src: 'https://dakhabrakha.com.ua/assets/gallery/6/62.jpg', author: 'Photo by Telikova Nastya', theme: 'yellow' },
  { src: 'https://dakhabrakha.com.ua/assets/gallery/10/141.jpg', author: 'Pictures by Sergey Sivyakov, Yuri Gryaznov, Stefanyak Juryj, Artem Galkin, Nastya Mantach', theme: 'yellow' },
  { src: 'https://dakhabrakha.com.ua/assets/gallery/10/143.jpg', author: 'Pictures by Sergey Sivyakov, Yuri Gryaznov, Stefanyak Juryj, Artem Galkin, Nastya Mantach', theme: 'yellow' },
  { src: 'https://dakhabrakha.com.ua/assets/gallery/10/137.jpg', author: 'Pictures by Sergey Sivyakov, Yuri Gryaznov, Stefanyak Juryj, Artem Galkin, Nastya Mantach', theme: 'yellow' },
  { src: 'https://dakhabrakha.com.ua/assets/gallery/12/166.jpg', author: 'Photo by Olga Zakrevska', theme: 'yellow' },
]

export default function DakhaBrakhaGame() {
  const [selectedSong, setSelectedSong] = useState<string | null>(null)
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const currentImage = carouselImages[currentIndex]
  const accentColor = currentImage.theme === 'yellow' ? '#f4a902' : '#c82424'

  useEffect(() => {
    const timer = setInterval(() => setCurrentIndex((prev) => (prev + 1) % carouselImages.length), 5000)
    return () => clearInterval(timer)
  }, [])

  const selectRandomSong = (category: (typeof songCategories)[number]) => {
    setSelectedSong(category.links[Math.floor(Math.random() * category.links.length)])
    setSelectedCategory(category.name)
    setTimeout(() => document.getElementById('ritual-video')?.scrollIntoView({ behavior: 'smooth' }), 150)
  }

  const getYoutubeVideoId = (url: string) => {
    const match = url.match(/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/)
    return match?.[2]?.length === 11 ? match[2] : null
  }

  return (
    <main className="min-h-screen overflow-hidden bg-[#141414] px-4 py-16 font-serif text-[#f4f4f0] transition-colors duration-1000 sm:px-8">
      <header className="mb-12 text-center">
        <h1 className="mb-4 text-3xl font-light uppercase tracking-[0.2em] md:text-5xl">DakhaBrakha</h1>
        <h2 className="text-xl uppercase tracking-[0.3em] transition-colors duration-1000 md:text-2xl" style={{ color: accentColor }}>Discovery Gacha</h2>
      </header>

      <section className="mx-auto mb-16 flex w-full max-w-md flex-col items-center">
        <div className="relative aspect-[4/5] w-full overflow-hidden border p-3 transition-colors duration-1000 sm:aspect-square" style={{ borderColor: `${accentColor}50` }}>
          <div className="relative h-full w-full border border-[#f4f4f0]/10 bg-[#0a0a0a]">
            {carouselImages.map((image, index) => <img key={image.src} src={image.src} alt="DakhaBrakha Gallery" className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${index === currentIndex ? 'z-10 opacity-100' : 'z-0 opacity-0'}`} />)}
          </div>
        </div>
        <p className="mt-4 h-6 w-full text-center text-xs uppercase tracking-widest text-[#f4f4f0]/50 md:text-sm">{currentImage.author || '✧'}</p>
      </section>

      <p className="mx-auto mb-12 max-w-lg text-center italic leading-relaxed tracking-wide text-[#f4f4f0]/70">Each pull grants you a unique DakhaBrakha rite. <br />Select a category below to reveal your journey.</p>

      <section aria-label="Song categories" className="relative z-10 mx-auto mb-16 grid w-full max-w-3xl grid-cols-1 gap-4 sm:grid-cols-2">
        {songCategories.map((category) => <button key={category.id} type="button" onClick={() => selectRandomSong(category)} className="group relative flex w-full items-center justify-between overflow-hidden border-b border-[#f4f4f0]/10 bg-transparent px-6 py-5 text-left transition-all">
          <span className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-15" style={{ backgroundColor: accentColor }} />
          <span className="relative z-10 flex items-center gap-6"><span className="text-lg italic text-[#f4f4f0]/30 transition-colors group-hover:text-[#f4f4f0]/80">{String(category.id).padStart(2, '0')}</span><span className="text-sm font-medium uppercase tracking-[0.2em] text-[#f4f4f0] transition-colors group-hover:text-white md:text-base">{category.name}</span></span>
          <span aria-hidden="true" className="relative z-10 text-2xl transition-transform duration-500 group-hover:scale-110">{category.emoji}</span>
          <span className="absolute bottom-0 left-0 z-20 h-px w-0 transition-all duration-700 ease-out group-hover:w-full" style={{ backgroundColor: accentColor }} />
        </button>)}
      </section>

      {selectedSong && <section id="ritual-video" className="mx-auto mt-4 w-full max-w-4xl scroll-mt-12 p-px transition-colors duration-1000" style={{ backgroundColor: `${accentColor}40` }}>
        <div className="flex flex-col items-center bg-[#141414] p-6 md:p-10">
          <h2 className="mb-8 text-center text-lg uppercase tracking-[0.3em] md:text-xl">The <span style={{ color: accentColor }} className="font-bold transition-colors duration-1000">{selectedCategory}</span> Pull</h2>
          <div className="relative mb-8 aspect-video w-full border border-[#f4f4f0]/10 bg-[#0a0a0a] shadow-2xl">
            <iframe src={`https://www.youtube.com/embed/${getYoutubeVideoId(selectedSong)}`} title="DakhaBrakha song discovery" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className="absolute inset-0 h-full w-full" />
          </div>
          <a href={selectedSong} target="_blank" rel="noopener noreferrer" className="text-xs uppercase tracking-widest transition-opacity hover:opacity-70 md:text-sm" style={{ color: accentColor }}>Open in YouTube ✦</a>
        </div>
      </section>}

      <p className="mx-auto mb-20 mt-20 max-w-xl text-center text-sm italic text-[#f4f4f0]/40">A few songs weave through multiple categories. If you&apos;ve heard it before, or seek a different resonance, simply pull again.</p>
      <footer className="flex justify-center pb-16"><a href="https://dakhabrakha.com.ua" target="_blank" rel="noopener noreferrer" className="opacity-50 transition-opacity duration-700 hover:opacity-100"><img src="https://dakhabrakha.com.ua/img/bottom_logo.png" alt="DakhaBrakha Official Website" className="h-16 w-auto" /></a></footer>
    </main>
  )
}
