import React, { useState, useEffect } from 'react'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav style={{
      position:'fixed',top:0,left:0,right:0,zIndex:100,
      padding:'0 48px',height:64,
      display:'flex',alignItems:'center',justifyContent:'space-between',
      background: scrolled ? 'rgba(250,249,246,.96)' : 'rgba(250,249,246,.88)',
      backdropFilter:'blur(14px)',
      borderBottom: scrolled ? '1px solid rgba(0,0,0,.07)' : '1px solid transparent',
      transition:'all .3s'
    }}>
      <a href="#" style={{fontFamily:'var(--display)',fontSize:22,fontWeight:700,color:'var(--ink)',letterSpacing:'-.3px'}}>
        Inclui<span style={{color:'var(--teal)'}}>App</span>
      </a>
      <div style={{display:'flex',alignItems:'center',gap:32}} className="nav-links-desktop">
        {['#problema','#solucao','#assistente','#pricing'].map((href,i) => (
          <a key={i} href={href} style={{fontSize:14,fontWeight:500,color:'var(--ink3)',transition:'color .2s'}}
            onMouseEnter={e=>e.target.style.color='var(--ink)'}
            onMouseLeave={e=>e.target.style.color='var(--ink3)'}>
            {['O problema','A solução','Assistente IA','Planos'][i]}
          </a>
        ))}
      </div>
      <div style={{display:'flex',alignItems:'center',gap:10}}>
        <a href="https://especiais-one.vercel.app/" target="_blank" rel="noopener noreferrer" style={{
          background:'transparent',color:'var(--teal)',
          padding:'9px 20px',borderRadius:8,
          fontSize:14,fontWeight:600,
          border:'1.5px solid var(--teal)',
          transition:'all .2s',display:'inline-block'
        }}
          onMouseEnter={e=>e.target.style.background='var(--teal2)'}
          onMouseLeave={e=>e.target.style.background='transparent'}>
          Acessar plataforma
        </a>
        <a href="#acesso" style={{
          background:'var(--teal)',color:'#fff',
          padding:'9px 20px',borderRadius:8,
          fontSize:14,fontWeight:600,
          transition:'all .2s',display:'inline-block'
        }}
          onMouseEnter={e=>e.target.style.background='var(--teal4)'}
          onMouseLeave={e=>e.target.style.background='var(--teal)'}>
          Solicitar acesso antecipado
        </a>
      </div>
    </nav>
  )
}
