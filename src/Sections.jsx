import React from 'react'

// ───── LEI ─────
export function Lei() {
  const leis = [
    { tag:'LBI — Lei 13.146/2015', tagCor:'var(--teal)', barCor:'var(--teal)',
      title:'Lei Brasileira de Inclusão',
      text:'Obriga escolas a elaborar PEI, garantir mediador quando necessário, oferecer adaptações razoáveis e manter documentação de todo o processo inclusivo.',
      badge:'PEI · Mediador · Adaptações', badgeBg:'var(--teal2)', badgeCor:'var(--teal4)' },
    { tag:'Decreto 12.686/2025', tagCor:'var(--accent)', barCor:'var(--accent)',
      title:'Política Nacional de Educação Especial Inclusiva',
      text:'Publicado em outubro de 2025, exige relatórios individualizados bimestrais com comunicação às famílias sobre estratégias pedagógicas e evolução do aluno.',
      badge:'Relatório bimestral obrigatório', badgeBg:'var(--accent2)', badgeCor:'var(--accent)' },
    { tag:'Lei 12.764/2012 · Berenice Piana', tagCor:'var(--rose)', barCor:'var(--rose)',
      title:'Proteção da Pessoa com TEA',
      text:'Garante ao aluno com autismo o direito a acompanhante especializado em sala de aula. A escola particular não pode cobrar à parte — o custo é da instituição.',
      badge:'Acompanhante sem custo extra', badgeBg:'var(--rose2)', badgeCor:'var(--rose)' }
  ]
  return (
    <section style={{padding:'80px 48px',background:'var(--cream2)',borderTop:'1px solid var(--warm)',borderBottom:'1px solid var(--warm)'}}>
      <div style={{maxWidth:1160,margin:'0 auto'}}>
        <div style={{fontSize:12,fontWeight:600,letterSpacing:'.1em',textTransform:'uppercase',color:'var(--teal)',marginBottom:14}}>Legislação em vigor</div>
        <h2 style={{fontFamily:'var(--display)',fontSize:38,fontWeight:700,letterSpacing:'-.8px',marginBottom:10}}>Não é opção. É obrigação legal.</h2>
        <p style={{fontSize:16,color:'var(--ink3)',maxWidth:560,lineHeight:1.7}}>Três legislações em vigor exigem que sua escola tenha processos claros para atender alunos com NEE — e documentação que comprove.</p>
        <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:16,marginTop:48}}>
          {leis.map((l,i) => (
            <div key={i} style={{background:'#fff',borderRadius:16,padding:20,border:'1px solid var(--warm)',position:'relative',overflow:'hidden'}}>
              <div style={{position:'absolute',top:0,left:0,right:0,height:3,background:l.barCor}}/>
              <div style={{fontSize:9.5,fontWeight:700,letterSpacing:'.08em',textTransform:'uppercase',color:l.tagCor,marginBottom:8}}>{l.tag}</div>
              <div style={{fontSize:14,fontWeight:700,color:'var(--ink)',marginBottom:6,lineHeight:1.4}}>{l.title}</div>
              <div style={{fontSize:12.5,color:'var(--ink3)',lineHeight:1.65}}>{l.text}</div>
              <span style={{display:'inline-block',fontSize:11,fontWeight:700,padding:'6px 10px',borderRadius:6,marginTop:12,background:l.badgeBg,color:l.badgeCor}}>{l.badge}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ───── SOLUÇÃO ─────
const feats = [
  { ic_bg:'#f0fdfa', ic_cl:'#0d9488', badge:'MVP', badge_bg:'#f0fdfa', badge_cl:'#0f766e',
    title:'PEI digital com wizard guiado',
    text:'Crie e revise o Plano Educacional Individualizado em 5 etapas simples. Metas, estratégias, adaptações e equipe — tudo estruturado e assinado digitalmente.',
    icon:<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0d9488" strokeWidth="2" strokeLinecap="round"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg> },
  { ic_bg:'#f5f3ff', ic_cl:'#7c3aed', badge:'Diferencial exclusivo', badge_bg:'#f5f3ff', badge_cl:'#7c3aed',
    title:'Assistente IA por diagnóstico',
    text:'Cada aluno tem um assistente especializado no seu diagnóstico específico — não genérico. Responde perguntas dos pais 24h com base no PEI real do filho.',
    icon:<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="3"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14"/></svg> },
  { ic_bg:'#ecfdf5', ic_cl:'#047857', badge:'MVP', badge_bg:'#ecfdf5', badge_cl:'#047857',
    title:'Portal exclusivo para a família',
    text:'Pais acompanham o PEI, recebem relatórios, agendam reuniões e tiram dúvidas diretamente no app — com histórico rastreável de toda a comunicação.',
    icon:<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#047857" strokeWidth="2" strokeLinecap="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg> },
  { ic_bg:'#fffbeb', ic_cl:'#b45309', badge:'Seduc-SP 2025', badge_bg:'#fffbeb', badge_cl:'#b45309',
    title:'Relatório bimestral automático',
    text:'Gere o relatório exigido pela Seduc-SP com os dados já cadastrados. Edite, adicione a narrativa pedagógica e envie para a família em um clique.',
    icon:<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#b45309" strokeWidth="2" strokeLinecap="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg> },
  { ic_bg:'#fff1f2', ic_cl:'#be123c', badge:'MVP', badge_bg:'#fff1f2', badge_cl:'#be123c',
    title:'Painel de compliance legal',
    text:'Alertas automáticos de laudos vencendo, relatórios pendentes e mediadores sem alocação — antes que o problema vire processo no Ministério Público.',
    icon:<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#be123c" strokeWidth="2" strokeLinecap="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg> },
  { ic_bg:'#f0f9ff', ic_cl:'#0369a1', badge:'MVP', badge_bg:'#f0f9ff', badge_cl:'#0369a1',
    title:'Dashboard de gestão',
    text:'Visão completa de todos os alunos NEE, engajamento familiar, progresso das metas e alertas urgentes — em uma tela que a diretora abre toda manhã.',
    icon:<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0369a1" strokeWidth="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg> },
]

export function Solucao() {
  return (
    <section id="solucao" style={{padding:'100px 48px',background:'var(--cream)'}}>
      <div style={{maxWidth:1160,margin:'0 auto'}}>
        <div style={{textAlign:'center',marginBottom:64}}>
          <div style={{fontSize:12,fontWeight:600,letterSpacing:'.1em',textTransform:'uppercase',color:'var(--teal)',marginBottom:14}}>Como o IncluiApp resolve</div>
          <h2 style={{fontFamily:'var(--display)',fontSize:48,fontWeight:700,lineHeight:1.1,letterSpacing:'-1px',marginBottom:16}}>
            Tudo que sua escola precisa<br/><em style={{fontStyle:'italic',color:'var(--teal)'}}>em um só lugar.</em>
          </h2>
          <p style={{fontSize:17,color:'var(--ink3)',lineHeight:1.7,maxWidth:560,margin:'0 auto'}}>
            Do cadastro do aluno ao envio do relatório para a família — sem planilha, sem papel, sem perder prazo legal.
          </p>
        </div>
        <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:20}}>
          {feats.map((f,i) => (
            <div key={i} style={{background:'#fff',borderRadius:18,padding:24,border:'1px solid var(--warm)',transition:'all .2s',cursor:'default'}}
              onMouseEnter={e=>{e.currentTarget.style.borderColor='var(--teal3)';e.currentTarget.style.boxShadow='0 4px 20px rgba(13,148,136,.08)';e.currentTarget.style.transform='translateY(-2px)'}}
              onMouseLeave={e=>{e.currentTarget.style.borderColor='var(--warm)';e.currentTarget.style.boxShadow='none';e.currentTarget.style.transform='translateY(0)'}}>
              <div style={{width:48,height:48,borderRadius:14,background:f.ic_bg,display:'flex',alignItems:'center',justifyContent:'center',marginBottom:16}}>{f.icon}</div>
              <div style={{fontSize:15,fontWeight:700,color:'var(--ink)',marginBottom:8}}>{f.title}</div>
              <div style={{fontSize:13,color:'var(--ink3)',lineHeight:1.65}}>{f.text}</div>
              <span style={{display:'inline-block',fontSize:9.5,fontWeight:700,padding:'3px 9px',borderRadius:20,marginTop:12,background:f.badge_bg,color:f.badge_cl}}>{f.badge}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ───── ASSISTENTE IA ─────
export function AssistenteIA() {
  return (
    <section id="assistente" style={{padding:'100px 48px',background:'var(--ink)',position:'relative',overflow:'hidden'}}>
      <div style={{position:'absolute',inset:0,background:'radial-gradient(ellipse 60% 80% at 80% 50%,rgba(13,148,136,.12) 0%,transparent 60%)'}}/>
      <div style={{maxWidth:1160,margin:'0 auto',display:'grid',gridTemplateColumns:'1fr 1fr',gap:80,alignItems:'center',position:'relative',zIndex:1}}>
        <div>
          <div style={{fontSize:12,fontWeight:600,letterSpacing:'.1em',textTransform:'uppercase',color:'var(--teal3)',marginBottom:14}}>O diferencial que nenhum ERP tem</div>
          <h2 style={{fontFamily:'var(--display)',fontSize:46,fontWeight:700,lineHeight:1.1,letterSpacing:'-1px',color:'#fff',marginBottom:16}}>
            Um assistente que conhece<br/><em style={{fontStyle:'italic',color:'var(--teal3)'}}>cada aluno pelo nome.</em>
          </h2>
          <p style={{fontSize:16,color:'rgba(255,255,255,.6)',lineHeight:1.75,marginBottom:32}}>
            Não é um chatbot genérico sobre autismo ou TDAH. É um assistente treinado com o diagnóstico específico, o PEI atual e as estratégias reais de cada criança da sua escola.
          </p>
          <div style={{display:'flex',flexDirection:'column',gap:14}}>
            {[
              { ic_bg:'rgba(13,148,136,.15)', ic_cl:'#5eead4', title:'Contextualizado por diagnóstico',
                text:'TEA nível 2 com hipersensibilidade sensorial recebe respostas diferentes de TEA nível 1. O assistente sabe a diferença.',
                icon:<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#5eead4" strokeWidth="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg> },
              { ic_bg:'rgba(124,58,237,.15)', ic_cl:'#c4b5fd', title:'Atualizado com cada relatório',
                text:'Quando a escola emite o relatório bimestral, o assistente é atualizado. A família sempre recebe orientações alinhadas ao momento atual do filho.',
                icon:<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#c4b5fd" strokeWidth="2"><path d="M9 11l3 3L22 4"/></svg> },
              { ic_bg:'rgba(217,119,6,.15)', ic_cl:'#fbbf24', title:'Disponível 24 horas',
                text:'A crise acontece às 22h de uma sexta. A coordenadora não precisa mais responder WhatsApp. O assistente está lá — e responde bem.',
                icon:<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fbbf24" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg> },
            ].map((d,i) => (
              <div key={i} style={{display:'flex',alignItems:'flex-start',gap:12,padding:14,background:'rgba(255,255,255,.05)',borderRadius:12,border:'1px solid rgba(255,255,255,.06)'}}>
                <div style={{width:36,height:36,borderRadius:10,background:d.ic_bg,display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0}}>{d.icon}</div>
                <div>
                  <div style={{fontSize:13,fontWeight:700,color:'#fff',marginBottom:3}}>{d.title}</div>
                  <div style={{fontSize:12,color:'rgba(255,255,255,.5)',lineHeight:1.55}}>{d.text}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Chat demo */}
        <div style={{background:'rgba(255,255,255,.06)',border:'1px solid rgba(255,255,255,.1)',borderRadius:18,padding:20}}>
          <div style={{display:'flex',alignItems:'center',gap:10,marginBottom:16,paddingBottom:14,borderBottom:'1px solid rgba(255,255,255,.08)'}}>
            <div style={{width:36,height:36,borderRadius:'50%',background:'rgba(13,148,136,.2)',display:'flex',alignItems:'center',justifyContent:'center',fontSize:12,fontWeight:800,color:'var(--teal3)'}}>LM</div>
            <div>
              <div style={{fontSize:13,fontWeight:700,color:'#fff'}}>Assistente do Lucas M.</div>
              <div style={{fontSize:10.5,color:'rgba(255,255,255,.35)',marginTop:1}}>TEA nível 2 · PEI ativo · Mediadora: Ana Lima</div>
            </div>
            <div style={{width:7,height:7,background:'#22c55e',borderRadius:'50%',marginLeft:'auto'}}/>
          </div>
          <div style={{display:'flex',flexDirection:'column',gap:8,marginBottom:14}}>
            <div style={{padding:'10px 13px',borderRadius:12,borderBottomLeftRadius:3,background:'rgba(255,255,255,.08)',color:'rgba(255,255,255,.85)',fontSize:12,lineHeight:1.6,maxWidth:'85%'}}>
              Olá! Conheço o diagnóstico do Lucas, suas metas atuais e as estratégias da equipe. Como posso ajudar a família hoje?
            </div>
            <div style={{padding:'10px 13px',borderRadius:12,borderBottomRightRadius:3,background:'var(--teal)',color:'#fff',fontSize:12,lineHeight:1.6,maxWidth:'85%',alignSelf:'flex-end'}}>
              Ele está tendo crises no supermercado. O que faço?
            </div>
            <div style={{padding:'10px 13px',borderRadius:12,borderBottomLeftRadius:3,background:'rgba(255,255,255,.08)',color:'rgba(255,255,255,.85)',fontSize:12,lineHeight:1.6,maxWidth:'88%'}}>
              Para o Lucas (hipersensibilidade sonora e visual), supermercados são ambientes de alto estímulo. Estratégia recomendada: fones antes de entrar, horário menos movimentado e antecipação visual do percurso. Quer que eu detalhe o protocolo que a Ana Lima usa com ele na escola?
            </div>
          </div>
          <div style={{display:'flex',gap:8,background:'rgba(255,255,255,.06)',borderRadius:24,padding:'8px 8px 8px 16px',alignItems:'center'}}>
            <div style={{fontSize:12,color:'rgba(255,255,255,.25)',flex:1}}>Pergunte sobre o Lucas...</div>
            <div style={{width:32,height:32,borderRadius:'50%',background:'var(--teal)',display:'flex',alignItems:'center',justifyContent:'center'}}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ───── PIONEIROS ─────
export function Pioneiros() {
  return (
    <section style={{padding:'100px 48px',background:'var(--cream2)',borderTop:'1px solid var(--warm)'}}>
      <div style={{maxWidth:900,margin:'0 auto',textAlign:'center'}}>
        <div style={{fontSize:12,fontWeight:600,letterSpacing:'.1em',textTransform:'uppercase',color:'var(--teal)',marginBottom:14}}>Programa de acesso antecipado</div>
        <h2 style={{fontFamily:'var(--display)',fontSize:46,fontWeight:700,lineHeight:1.1,letterSpacing:'-1px',marginBottom:16}}>
          Seja uma das primeiras escolas<br/>a usar o <em style={{fontStyle:'italic',color:'var(--teal)'}}>IncluiApp.</em>
        </h2>
        <p style={{fontSize:17,color:'var(--ink3)',lineHeight:1.75,marginBottom:48,maxWidth:560,marginLeft:'auto',marginRight:'auto'}}>
          Estamos selecionando escolas particulares de São Paulo para o programa de acesso antecipado. Você ajuda a moldar o produto — em troca, tem condições exclusivas que não voltam mais.
        </p>
        <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:14,marginBottom:48,textAlign:'left'}}>
          {[
            { ic_bg:'#f0fdfa', ic_cl:'#0d9488', title:'3 meses gratuitos',
              text:'Sem cobranças enquanto você configura, testa e valida com sua equipe. Sem cartão de crédito para começar.',
              icon:<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0d9488" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg> },
            { ic_bg:'#f5f3ff', ic_cl:'#7c3aed', title:'Onboarding dedicado',
              text:'Nossa equipe configura os primeiros alunos com você, treina a coordenação e acompanha o primeiro relatório bimestral.',
              icon:<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg> },
            { ic_bg:'#fffbeb', ic_cl:'#b45309', title:'Preço travado para sempre',
              text:'Quem entrar no acesso antecipado nunca paga mais do que R$149/mês, mesmo quando o produto escalar e o preço subir.',
              icon:<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#b45309" strokeWidth="2"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg> },
          ].map((b,i) => (
            <div key={i} style={{background:'#fff',borderRadius:14,padding:18,border:'1px solid var(--warm)'}}>
              <div style={{width:36,height:36,borderRadius:10,background:b.ic_bg,display:'flex',alignItems:'center',justifyContent:'center',marginBottom:10}}>{b.icon}</div>
              <div style={{fontSize:13,fontWeight:700,color:'var(--ink)',marginBottom:4}}>{b.title}</div>
              <div style={{fontSize:12,color:'var(--ink3)',lineHeight:1.55}}>{b.text}</div>
            </div>
          ))}
        </div>
        <div style={{background:'var(--teal2)',border:'1px solid var(--teal3)',borderRadius:12,padding:'16px 20px',fontSize:13,color:'var(--teal4)',lineHeight:1.65,marginBottom:40,textAlign:'left'}}>
          <strong>Transparência total:</strong> o IncluiApp está em desenvolvimento ativo. Você verá o produto crescer em tempo real, e suas demandas reais moldarão as próximas funcionalidades. Não oferecemos números de "clientes satisfeitos" que ainda não temos — oferecemos uma parceria honesta desde o início.
        </div>
        <a href="#acesso" style={{display:'inline-flex',alignItems:'center',gap:8,background:'var(--teal)',color:'#fff',padding:'14px 28px',borderRadius:10,fontSize:15,fontWeight:600,transition:'all .2s'}}>
          Quero ser escola pioneira
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
        </a>
      </div>
    </section>
  )
}

// ───── PRICING ─────
const planos = [
  { featured:false, label:'Para começar', plan:'Essencial', price:'R$149', sub:'/mês',
    desc:'Até 15 alunos com NEE. Ideal para escolas estruturando o atendimento inclusivo.',
    items:['PEI digital para todos os alunos','Portal da família com assistente IA','Relatórios bimestrais automáticos','Painel de compliance legal'],
    disabled:['Gestão de mediadores (em breve)'] },
  { featured:true, label:'Mais completo', plan:'Profissional', price:'R$249', sub:'/mês',
    desc:'Alunos ilimitados. Para escolas com volume crescente de alunos NEE que precisam de gestão completa.',
    items:['Tudo do plano Essencial','Alunos NEE ilimitados','Gestão de mediadores','Integração com terapeuta externo','Suporte prioritário por WhatsApp'],
    disabled:[] }
]

export function Pricing() {
  return (
    <section id="pricing" style={{padding:'100px 48px',background:'var(--cream)'}}>
      <div style={{maxWidth:800,margin:'0 auto',textAlign:'center'}}>
        <div style={{fontSize:12,fontWeight:600,letterSpacing:'.1em',textTransform:'uppercase',color:'var(--teal)',marginBottom:14}}>Planos simples e transparentes</div>
        <h2 style={{fontFamily:'var(--display)',fontSize:46,fontWeight:700,letterSpacing:'-1px',marginBottom:12}}>Sem surpresas no boleto.</h2>
        <p style={{fontSize:16,color:'var(--ink3)',marginBottom:48}}>Preço por escola, não por aluno. Quanto mais sua escola cresce, mais você economiza.</p>
        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:20,textAlign:'left'}}>
          {planos.map((p,i) => (
            <div key={i} style={{
              background: p.featured ? 'linear-gradient(135deg,var(--teal2),#fff)' : '#fff',
              borderRadius:20,padding:28,
              border: p.featured ? '2px solid var(--teal)' : '1px solid var(--warm)' }}>
              <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',marginBottom:2}}>
                <div style={{fontSize:10,fontWeight:700,letterSpacing:'.1em',textTransform:'uppercase',color:p.featured?'var(--teal4)':'var(--ink4)'}}>{p.label}</div>
                {p.featured && <span style={{background:'var(--teal)',color:'#fff',fontSize:9.5,fontWeight:700,padding:'3px 9px',borderRadius:20}}>Recomendado</span>}
              </div>
              <div style={{fontFamily:'var(--display)',fontSize:22,fontWeight:700,color:'var(--ink)',marginBottom:8}}>{p.plan}</div>
              <div style={{fontSize:42,fontWeight:800,color:'var(--ink)',letterSpacing:'-1.5px',lineHeight:1}}>
                {p.price}<span style={{fontSize:16,fontWeight:500,color:'var(--ink4)',letterSpacing:0}}>{p.sub}</span>
              </div>
              <div style={{fontSize:12.5,color:'var(--ink3)',margin:'12px 0 20px',lineHeight:1.6}}>{p.desc}</div>
              <div style={{display:'flex',flexDirection:'column',gap:8,marginBottom:24}}>
                {p.items.map((it,j) => (
                  <div key={j} style={{display:'flex',alignItems:'flex-start',gap:8,fontSize:12.5,color:'var(--ink2)'}}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0d9488" strokeWidth="2.5" style={{flexShrink:0,marginTop:1}}><polyline points="20 6 9 17 4 12"/></svg>
                    {it}
                  </div>
                ))}
                {p.disabled.map((it,j) => (
                  <div key={j} style={{display:'flex',alignItems:'flex-start',gap:8,fontSize:12.5,color:'#94a3b8'}}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="2" style={{flexShrink:0,marginTop:1}}><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                    {it}
                  </div>
                ))}
              </div>
              <a href="#acesso" style={{
                display:'block',textAlign:'center',padding:12,borderRadius:10,fontSize:14,fontWeight:700,
                background: p.featured ? 'var(--teal)' : 'transparent',
                color: p.featured ? '#fff' : 'var(--ink2)',
                border: p.featured ? 'none' : '1.5px solid var(--warm)',
                transition:'all .2s'
              }}>
                Solicitar acesso
              </a>
            </div>
          ))}
        </div>
        <p style={{fontSize:12,color:'var(--ink4)',textAlign:'center',marginTop:16,lineHeight:1.6}}>
          Ambos os planos incluem 15 dias gratuitos · Sem fidelidade · Cancele quando quiser<br/>
          Escolas no programa de acesso antecipado têm preço travado permanentemente.
        </p>
      </div>
    </section>
  )
}

// ───── CTA FINAL ─────
export function CTAFinal() {
  const [email, setEmail] = React.useState('')
  const [sent, setSent] = React.useState(false)

  function handleSend() {
    if (email.trim()) setSent(true)
  }

  return (
    <section id="acesso" style={{padding:'120px 48px',background:'var(--teal)',position:'relative',overflow:'hidden',textAlign:'center'}}>
      <div style={{position:'absolute',inset:0,background:'radial-gradient(ellipse 70% 80% at 50% 50%,rgba(255,255,255,.08) 0%,transparent 60%)'}}/>
      <div style={{maxWidth:640,margin:'0 auto',position:'relative',zIndex:1}}>
        <h2 style={{fontFamily:'var(--display)',fontSize:52,fontWeight:700,lineHeight:1.1,letterSpacing:'-1.5px',color:'#fff',marginBottom:16}}>
          Sua escola já atende.<br/><em style={{fontStyle:'italic',opacity:.8}}>Agora pode gerir.</em>
        </h2>
        <p style={{fontSize:18,color:'rgba(255,255,255,.75)',lineHeight:1.7,marginBottom:40}}>
          Deixe seu e-mail e entraremos em contato para agendar uma demonstração e, se fizer sentido, ativar o acesso antecipado da sua escola.
        </p>
        {!sent ? (
          <>
            <div style={{display:'flex',gap:10,maxWidth:480,margin:'0 auto 16px'}}>
              <input
                type="email"
                placeholder="e-mail da escola ou coordenação"
                value={email}
                onChange={e=>setEmail(e.target.value)}
                onKeyDown={e=>e.key==='Enter'&&handleSend()}
                style={{flex:1,padding:'14px 18px',borderRadius:10,border:'none',fontSize:14,fontFamily:'var(--body)',color:'var(--ink)',outline:'none'}}
              />
              <button onClick={handleSend} style={{padding:'14px 24px',background:'var(--ink)',color:'#fff',border:'none',borderRadius:10,fontSize:14,fontWeight:700,cursor:'pointer',fontFamily:'var(--body)',whiteSpace:'nowrap',transition:'all .2s'}}>
                Solicitar acesso
              </button>
            </div>
            <div style={{fontSize:12,color:'rgba(255,255,255,.6)',lineHeight:1.6}}>
              Sem spam. Sem compromisso. Responderemos em até 24 horas úteis.<br/>
              O IncluiApp está em desenvolvimento — seu contato nos ajuda a priorizar quem chega primeiro.
            </div>
          </>
        ) : (
          <div style={{background:'rgba(255,255,255,.15)',borderRadius:12,padding:'20px 24px',display:'inline-block'}}>
            <div style={{fontSize:16,fontWeight:700,color:'#fff',marginBottom:4}}>Recebido! 🎉</div>
            <div style={{fontSize:13,color:'rgba(255,255,255,.8)'}}>Entraremos em contato em até 24h úteis para agendar a demo.</div>
          </div>
        )}
      </div>
    </section>
  )
}

// ───── FOOTER ─────
export function Footer() {
  return (
    <footer style={{padding:'36px 48px',background:'var(--ink)',display:'flex',alignItems:'center',justifyContent:'space-between',flexWrap:'wrap',gap:16}}>
      <div style={{fontFamily:'var(--display)',fontSize:18,fontWeight:700,color:'rgba(255,255,255,.55)'}}>
        Inclui<span style={{color:'var(--teal)'}}>App</span>
      </div>
      <div style={{display:'flex',gap:24,fontSize:12}}>
        {['Privacidade','LGPD','Contato','São Paulo · Brasil'].map((l,i) => (
          <a key={i} href="#" style={{color:'rgba(255,255,255,.35)',textDecoration:'none',transition:'color .2s'}}
            onMouseEnter={e=>e.target.style.color='rgba(255,255,255,.65)'}
            onMouseLeave={e=>e.target.style.color='rgba(255,255,255,.35)'}>
            {l}
          </a>
        ))}
      </div>
      <div style={{fontSize:12,color:'rgba(255,255,255,.25)'}}>© 2025 IncluiApp</div>
    </footer>
  )
}
