import React from 'react'

function HeroCards() {
  return (
    <div style={{position:'relative',height:480}}>
      {/* Card principal */}
      <div style={{
        position:'absolute',top:0,left:20,width:320,zIndex:3,
        background:'#fff',borderRadius:18,
        boxShadow:'0 8px 40px rgba(0,0,0,.1)',
        padding:20,border:'1px solid rgba(0,0,0,.06)',
        animation:'float1 6s ease-in-out infinite'
      }}>
        <div style={{fontSize:9.5,fontWeight:700,letterSpacing:'.08em',textTransform:'uppercase',color:'var(--ink4)',marginBottom:10}}>Perfil do aluno</div>
        <div style={{display:'flex',alignItems:'center',gap:10,marginBottom:14}}>
          <div style={{width:40,height:40,borderRadius:'50%',background:'#f5f3ff',color:'#7c3aed',display:'flex',alignItems:'center',justifyContent:'center',fontSize:14,fontWeight:800,flexShrink:0}}>LM</div>
          <div>
            <div style={{fontSize:14,fontWeight:700,color:'var(--ink)'}}>Lucas M.</div>
            <div style={{fontSize:11,color:'var(--ink4)',marginTop:1}}>TEA nível 2 · 4º ano A</div>
          </div>
        </div>
        <div style={{display:'flex',justifyContent:'space-between',fontSize:11,color:'var(--ink4)',marginBottom:4}}>
          <span>PEI — progresso</span>
          <span style={{fontWeight:700,color:'var(--teal)'}}>72%</span>
        </div>
        <div style={{height:8,background:'#f1f5f9',borderRadius:8,overflow:'hidden',marginBottom:12}}>
          <div style={{width:'72%',height:'100%',borderRadius:8,background:'linear-gradient(90deg,#0d9488,#5eead4)'}}/>
        </div>
        <div style={{display:'flex',gap:6,flexWrap:'wrap'}}>
          {['Mediadora alocada','Laudo ativo','3 metas em andamento'].map((t,i) => (
            <span key={i} style={{fontSize:9.5,fontWeight:700,padding:'3px 9px',borderRadius:20,
              background:['#f0fdfa','#f5f3ff','#fffbeb'][i],
              color:['#0f766e','#7c3aed','#b45309'][i]}}>
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Card assistente IA */}
      <div style={{
        position:'absolute',top:60,right:0,width:260,zIndex:2,
        background:'#fff',borderRadius:18,
        boxShadow:'0 8px 32px rgba(0,0,0,.09)',
        padding:18,border:'1px solid rgba(0,0,0,.06)',
        transform:'rotate(2deg)',
        animation:'float2 7s ease-in-out infinite'
      }}>
        <div style={{fontSize:9.5,fontWeight:700,letterSpacing:'.08em',textTransform:'uppercase',color:'var(--ink4)',marginBottom:10}}>Assistente IA · família do Lucas</div>
        <div style={{background:'linear-gradient(135deg,#f0fdfa,#f5f3ff)',borderRadius:12,padding:12}}>
          <div style={{fontSize:9,fontWeight:700,color:'#0d9488',letterSpacing:'.06em',textTransform:'uppercase',marginBottom:5,display:'flex',alignItems:'center',gap:4}}>
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="12" cy="12" r="3"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14"/></svg>
            Especializado em TEA nível 2
          </div>
          <div style={{fontSize:11,color:'var(--ink2)',lineHeight:1.55}}>"Como lidar com crises sensoriais em casa?" — respondido com base no PEI real do Lucas.</div>
        </div>
      </div>

      {/* Card compliance */}
      <div style={{
        position:'absolute',bottom:40,left:0,width:220,zIndex:1,
        background:'#fff',borderRadius:18,
        boxShadow:'0 6px 24px rgba(0,0,0,.08)',
        padding:16,border:'1px solid rgba(0,0,0,.06)',
        transform:'rotate(-1.5deg)',
        animation:'float3 8s ease-in-out infinite'
      }}>
        <div style={{fontSize:9.5,fontWeight:700,letterSpacing:'.08em',textTransform:'uppercase',color:'var(--ink4)',marginBottom:10}}>Alertas legais</div>
        <div style={{display:'flex',alignItems:'center',gap:7,padding:'7px 9px',borderRadius:8,background:'#fff1f2',color:'#be123c',fontWeight:600,fontSize:11,marginBottom:6}}>
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/></svg>
          Laudo vence em 12 dias
        </div>
        <div style={{display:'flex',alignItems:'center',gap:7,padding:'7px 9px',borderRadius:8,background:'#f8fafc',color:'var(--ink3)',fontSize:11}}>
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#0d9488" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>
          Relatório bimestral enviado ✓
        </div>
      </div>
    </div>
  )
}

export default function Hero() {
  return (
    <section style={{
      minHeight:'100vh',display:'flex',alignItems:'center',
      padding:'100px 48px 80px',position:'relative',overflow:'hidden'
    }}>
      <div style={{position:'absolute',inset:0,background:'radial-gradient(ellipse 80% 60% at 70% 40%,rgba(13,148,136,.08) 0%,transparent 60%),radial-gradient(ellipse 50% 40% at 20% 80%,rgba(217,119,6,.06) 0%,transparent 50%)'}}/>
      <div style={{position:'absolute',inset:0,opacity:.035,backgroundImage:'linear-gradient(var(--ink) 1px,transparent 1px),linear-gradient(90deg,var(--ink) 1px,transparent 1px)',backgroundSize:'48px 48px'}}/>

      <div style={{maxWidth:1160,margin:'0 auto',display:'grid',gridTemplateColumns:'1fr 1fr',gap:80,alignItems:'center',position:'relative',zIndex:1,width:'100%'}}>
        <div>
          <div className="animate-fadeup delay-1" style={{display:'inline-flex',alignItems:'center',gap:8,background:'var(--teal2)',border:'1px solid var(--teal3)',borderRadius:20,padding:'6px 14px',fontSize:12,fontWeight:600,color:'var(--teal4)',letterSpacing:'.04em',textTransform:'uppercase',marginBottom:24}}>
            <span style={{width:6,height:6,borderRadius:'50%',background:'var(--teal)',animation:'pulse 2s ease-in-out infinite',display:'inline-block'}}/>
            Acesso antecipado aberto
          </div>

          <h1 className="animate-fadeup delay-2" style={{fontFamily:'var(--display)',fontSize:56,fontWeight:700,lineHeight:1.08,letterSpacing:'-1.5px',color:'var(--ink)',marginBottom:20}}>
            Sua escola <em style={{fontStyle:'italic',color:'var(--teal)'}}>já atende</em> alunos com necessidades especiais.<br/>Mas tem a ferramenta certa?
          </h1>

          <p className="animate-fadeup delay-3" style={{fontSize:18,color:'var(--ink3)',lineHeight:1.7,marginBottom:36,maxWidth:480}}>
            O IncluiApp é a plataforma de gestão inclusiva para escolas particulares — PEI digital, comunicação com famílias, compliance legal e assistente IA especializado em cada diagnóstico.
          </p>

          <div className="animate-fadeup delay-4" style={{display:'flex',alignItems:'center',gap:14,flexWrap:'wrap'}}>
            <a href="#acesso" style={{
              background:'var(--teal)',color:'#fff',
              padding:'14px 28px',borderRadius:10,fontSize:15,fontWeight:600,
              display:'inline-flex',alignItems:'center',gap:8,
              transition:'all .2s',boxShadow:'0 4px 14px rgba(13,148,136,.2)'
            }}>
              Quero acesso antecipado
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </a>
            <a href="#solucao" style={{color:'var(--ink2)',fontSize:15,fontWeight:500,display:'inline-flex',alignItems:'center',gap:6,transition:'color .2s'}}>
              Ver como funciona
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="6 9 12 15 18 9"/></svg>
            </a>
          </div>

          <div className="animate-fadeup delay-4" style={{fontSize:12,color:'var(--ink4)',marginTop:14,display:'flex',alignItems:'center',gap:6}}>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
            Sem cartão de crédito · 15 dias gratuitos · Cancele quando quiser
          </div>
        </div>

        <div style={{display:'flex',justifyContent:'center'}}>
          <HeroCards/>
        </div>
      </div>
    </section>
  )
}
