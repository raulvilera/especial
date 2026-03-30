import React from 'react'

const cards = [
  {
    cor:'#f87171', bg:'rgba(190,18,60,.12)',
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#f87171" strokeWidth="2" strokeLinecap="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>,
    title:'PEI feito no Word ou à mão',
    text:'A escola tem obrigação legal de elaborar e manter o Plano Educacional Individualizado. Sem ferramenta adequada, fica em gaveta e nunca é revisado a tempo.',
    lei:'LBI Art. 28 · Obrigatório'
  },
  {
    cor:'#fb923c', bg:'rgba(180,83,9,.12)',
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fb923c" strokeWidth="2" strokeLinecap="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>,
    title:'Família no escuro',
    text:'Os pais só sabem como está o filho nas reuniões bimestrais. No intervalo, recebem mensagens soltas no WhatsApp, sem histórico, sem contexto, sem rastreabilidade.',
    lei:'Decreto 12.686/2025 · Relatório bimestral obrigatório'
  },
  {
    cor:'#5eead4', bg:'rgba(13,148,136,.12)',
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#5eead4" strokeWidth="2" strokeLinecap="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
    title:'Risco legal constante',
    text:'A escola não sabe se está em conformidade. Laudos vencem, mediadores ficam sem alocação, reuniões obrigatórias são esquecidas. A denúncia ao MP é o primeiro aviso.',
    lei:'LBI · Lei Berenice Piana · Dec. 12.686'
  }
]

export default function Problema() {
  return (
    <section id="problema" style={{padding:'100px 48px',background:'var(--ink)',position:'relative',overflow:'hidden'}}>
      <div style={{position:'absolute',inset:0,opacity:.04,backgroundImage:"url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")"}}/>
      <div style={{maxWidth:1160,margin:'0 auto',position:'relative',zIndex:1}}>
        <div style={{fontSize:12,fontWeight:600,letterSpacing:'.1em',textTransform:'uppercase',color:'var(--teal3)',marginBottom:16}}>A realidade das escolas particulares hoje</div>
        <h2 style={{fontFamily:'var(--display)',fontSize:48,fontWeight:700,lineHeight:1.1,letterSpacing:'-1px',color:'#fff',marginBottom:20}}>
          Mais alunos com NEE.<br/><em style={{fontStyle:'italic',color:'var(--teal3)'}}>Menos ferramentas</em> para atendê-los.
        </h2>
        <p style={{fontSize:17,color:'rgba(255,255,255,.55)',lineHeight:1.75,maxWidth:600,marginBottom:56}}>
          As matrículas de alunos com TEA cresceram 44% em apenas um ano no Brasil. Sua escola está recebendo esses alunos — mas provavelmente ainda usa planilhas, WhatsApp e pastas físicas para gerir tudo isso.
        </p>
        <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:20}}>
          {cards.map((c,i) => (
            <div key={i} style={{background:'rgba(255,255,255,.05)',border:'1px solid rgba(255,255,255,.08)',borderRadius:16,padding:24,transition:'all .2s',cursor:'default'}}
              onMouseEnter={e=>{e.currentTarget.style.background='rgba(255,255,255,.08)';e.currentTarget.style.borderColor='rgba(13,148,136,.3)'}}
              onMouseLeave={e=>{e.currentTarget.style.background='rgba(255,255,255,.05)';e.currentTarget.style.borderColor='rgba(255,255,255,.08)'}}>
              <div style={{width:44,height:44,borderRadius:12,background:c.bg,display:'flex',alignItems:'center',justifyContent:'center',marginBottom:16}}>{c.icon}</div>
              <div style={{fontSize:15,fontWeight:700,color:'#fff',marginBottom:8}}>{c.title}</div>
              <div style={{fontSize:13,color:'rgba(255,255,255,.5)',lineHeight:1.65}}>{c.text}</div>
              <div style={{fontSize:10.5,color:'var(--teal3)',marginTop:12,fontWeight:600,letterSpacing:'.03em'}}>{c.lei}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
