import './App.css';

// ─── SVG ÍCONES ───
const IconPDF = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
    <polyline points="14 2 14 8 20 8"/>
    <line x1="9" y1="15" x2="15" y2="15"/>
    <line x1="9" y1="11" x2="15" y2="11"/>
  </svg>
);

const IconDrive = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 12H2"/>
    <path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"/>
    <line x1="6" y1="16" x2="6.01" y2="16"/>
    <line x1="10" y1="16" x2="10.01" y2="16"/>
  </svg>
);

const IconArrow = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12"/>
    <polyline points="12 5 19 12 12 19"/>
  </svg>
);

const IconDown = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
    <polyline points="7 10 12 15 17 10"/>
    <line x1="12" y1="15" x2="12" y2="3"/>
  </svg>
);

// ─── APP ───
function App() {
  // Essa constante captura automaticamente o caminho correto gerado pelo seu base no vite.config.ts
  const baseUrl = import.meta.env.BASE_URL;

  return (
    <>
      {/* ══════════════════════════════════════
          HERO
      ══════════════════════════════════════ */}
      <section className="hero">
        <div className="hero-inner">
          {/* ESQUERDA */}
          <div>
            <div className="hero-tag">
              <span className="hero-tag-dot" />
              Design System · 2026
            </div>

            <h1 className="hero-heading">
              {/* CORRIGIDO: Agora aponta dinamicamente para a pasta do repositório remoto */}
              <img src={`${baseUrl}logogoldalt.svg`} alt="Fernanda Dayrell Advogada" width={300} />  
            </h1>
            <p className="hero-sub">Manual de Identidade Visual</p>
            <p className="hero-desc">
              Documentação completa da identidade da marca — paleta, tipografia,
              componentes, manifesto e arquivos para download.
            </p>

            <div className="hero-meta">
              <span>by kauanfdesign</span>
              <span className="hero-meta-sep" />
              <span>v1.0 · 2026</span>
              <span className="hero-meta-sep" />
              <span>Uso exclusivo do cliente</span>
            </div>
          </div>

          {/* DIREITA — mini preview */}
          <div className="hero-panel">
            <div className="hero-panel-label">Paleta principal</div>

            <div className="hero-colors">
              <div className="hero-color-chip" style={{ background: '#1E3057' }}>
                <span className="hero-color-chip-label">Navy</span>
              </div>
              <div className="hero-color-chip" style={{ background: '#B8922A' }}>
                <span className="hero-color-chip-label">Gold</span>
              </div>
              <div className="hero-color-chip" style={{ background: '#8B2035' }}>
                <span className="hero-color-chip-label">Wine</span>
              </div>
            </div>

            <div className="hero-type-preview">
              <div className="hero-type-name">Fernanda Dayrell</div>
              <span className="hero-type-sub">Advogada</span>
              <div className="hero-type-spec">
                Tipografia: Relicta + Poppins + Cormorant Garamond<br />
                Cores: Navy, Gold e Wine<br />
                Componentes: Botões, badges, inputs e cards 
              </div>
            </div>

            <div style={{ display: 'flex', gap: 8 }}>
              <span className="badge badge-navy">Família</span>
              <span className="badge badge-wine">Civil</span>
              <span className="badge badge-gold">Trabalhista</span>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          DOWNLOADS
      ══════════════════════════════════════ */}
      <section className="downloads">
        <div className="downloads-inner">
          <div className="downloads-header">
            <div>
              <span className="eyebrow">Arquivos do projeto</span>
              <h2 className="section-title downloads-title">
                Faça o download
                <br /><em>dos materiais</em>
              </h2>
            </div>
            <p className="downloads-desc">
              Acesse os documentos e assets criados exclusivamente para a marca
              Fernanda Dayrell Advogada.
            </p>
          </div>

          <div className="downloads-grid">
            {/* Card 1 — Manual */}
            <div className="dl-card">
              <div className="dl-card-top">
                <div className="dl-card-icon" style={{ background: '#EEF1F7', color: 'var(--navy)' }}>
                  <IconPDF />
                </div>
                <span className="dl-card-type" style={{ color: 'var(--navy)' }}>PDF · 10 páginas</span>
                <h3 className="dl-card-title">Manual de Identidade Visual</h3>
                <p className="dl-card-desc">
                  Diretrizes completas de aplicação de marca: manifesto, logotipo, paleta de cores,
                  tipografia e mockups de uso.
                </p>
              </div>
              <div className="dl-card-footer">
                {/* CORRIGIDO: Arquivos da pasta public devem perder o prefixo 'public/' no link final */}
                <a
                  href={`${baseUrl}MANUAL_DE_IDENTIDADE_VISUAL.pdf`}
                  download
                  className="dl-btn dl-btn-navy"
                >
                  <IconDown /> Baixar Manual
                </a>
              </div>
            </div>

            {/* Card 2 — Relatório */}
            <div className="dl-card">
              <div className="dl-card-top">
                <div className="dl-card-icon" style={{ background: '#F5EEF0', color: 'var(--wine)' }}>
                  <IconPDF />
                </div>
                <span className="dl-card-type" style={{ color: 'var(--wine)' }}>PDF · Relatório</span>
                <h3 className="dl-card-title">Relatório de Criação de Marca</h3>
                <p className="dl-card-desc">
                  Defesa do conceito criativo, estudo de público, análise semântica dos símbolos
                  e histórico completo do projeto.
                </p>
              </div>
              <div className="dl-card-footer">
                {/* CORRIGIDO: Removido o prefixo 'public/' e injetado o baseUrl */}
                <a
                  href={`${baseUrl}RELATORIO_DE_CRIACAO_DE_MARCA.pdf`}
                  download
                  className="dl-btn dl-btn-wine"
                >
                  <IconDown /> Baixar Relatório
                </a>
              </div>
            </div>

            {/* Card 3 — Drive */}
            <div className="dl-card">
              <div className="dl-card-top">
                <div className="dl-card-icon" style={{ background: '#FBF5E6', color: 'var(--gold-700)' }}>
                  <IconDrive />
                </div>
                <span className="dl-card-type" style={{ color: 'var(--gold-700)' }}>Google Drive · Pasta</span>
                <h3 className="dl-card-title">Arquivos de Logo & Assets</h3>
                <p className="dl-card-desc">
                  Logos em PNG, SVG e PDF — todas as variações de cor e aplicação, prontas
                  para uso em qualquer mídia.
                </p>
              </div>
              <div className="dl-card-footer">
                <a
                  href="https://drive.google.com/drive/folders/1DjEGGxw33yqy4b8QBrW_1uVome4ovi8B?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="dl-btn dl-btn-gold"
                >
                  <IconArrow /> Acessar Drive
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          DESIGN SYSTEM SHOWCASE
      ══════════════════════════════════════ */}
      <section className="showcase">
        <div className="showcase-inner">
          <div className="showcase-header">
            <span className="eyebrow">Design System</span>
            <h2 className="section-title">Elementos<br /><em>da identidade</em></h2>
            <p>Documentação visual de todos os componentes e tokens utilizados na construção da marca.</p>
          </div>

          {/* ── PALETA DE CORES ── */}
          <div className="ds-block">
            <div className="ds-block-label">Paleta de Cores</div>
            {/* O restante do bloco de cores permanece idêntico ao seu original */}
            <div className="palette-group-title" style={{ color: 'var(--gold-700)' }}>Primária</div>
            <div className="palette-row">
              {[
                { name: 'Navy Institutional', hex: '#1E3057', token: '--navy' },
                { name: 'Gold Prestige',      hex: '#B8922A', token: '--gold' },
                { name: 'Wine Signature',     hex: '#8B2035', token: '--wine' },
              ].map(s => (
                <div className="swatch" key={s.hex}>
                  <div className="swatch-color" style={{ background: s.hex }} />
                  <div className="swatch-info">
                    <span className="swatch-name">{s.name}</span>
                    <span className="swatch-hex">{s.hex}</span>
                    <span className="swatch-token">{s.token}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="palette-group-title" style={{ color: 'var(--text-muted)', marginTop: 8 }}>Secundária</div>
            <div className="palette-row">
              {[
                { name: 'Soft Cream', hex: '#EDE8DC', token: '--cream' },
                { name: 'Dolphin',    hex: '#8A8A8A', token: '--dolphin' },
                { name: 'Olive Green',hex: '#4B5C3E', token: '--olive' },
              ].map(s => (
                <div className="swatch" key={s.hex}>
                  <div className="swatch-color" style={{ background: s.hex, border: s.hex === '#EDE8DC' ? '0.5px solid #ddd' : undefined }} />
                  <div className="swatch-info">
                    <span className="swatch-name">{s.name}</span>
                    <span className="swatch-hex">{s.hex}</span>
                    <span className="swatch-token">{s.token}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="palette-group-title" style={{ color: 'var(--text-muted)', marginTop: 8 }}>Variações Navy</div>
            <div className="palette-row">
              {['#C6D0DF','#8799B3','#1E3056','#0E1B34'].map((hex, i) => (
                <div className="swatch" key={hex}>
                  <div className="swatch-color" style={{ background: hex }} />
                  <div className="swatch-info">
                    <span className="swatch-name">Navy {[200,400,700,900][i]}</span>
                    <span className="swatch-hex">{hex}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="palette-group-title" style={{ color: 'var(--text-muted)', marginTop: 8 }}>Variações Gold</div>
            <div className="palette-row">
              {['#F2E5C2','#D3A93E','#B89329','#7A6118'].map((hex, i) => (
                <div className="swatch" key={hex}>
                  <div className="swatch-color" style={{ background: hex }} />
                  <div className="swatch-info">
                    <span className="swatch-name">Gold {[200,400,700,900][i]}</span>
                    <span className="swatch-hex">{hex}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="palette-group-title" style={{ color: 'var(--text-muted)', marginTop: 8 }}>Variações Wine</div>
            <div className="palette-row">
              {['#F5D0D7','#B84057','#8B2035','#4F0F1E'].map((hex, i) => (
                <div className="swatch" key={hex}>
                  <div className="swatch-color" style={{ background: hex }} />
                  <div className="swatch-info">
                    <span className="swatch-name">Wine {[200,400,700,900][i]}</span>
                    <span className="swatch-hex">{hex}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── TIPOGRAFIA ── */}
          <div className="ds-block">
            <div className="ds-block-label">Tipografia</div>
            <div className="type-showcase">
              <div className="type-row">
                {/* CORRIGIDO: Injetado o baseUrl para corrigir a quebra do nome.svg */}
                <img src={`${baseUrl}nome.svg`} alt="Fernanda Dayrell Advogada" width={300} />
                <span className="type-spec">Relicta · 44px · Light 300 · Display</span>
              </div>
              <div className="type-row">
                <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 28, fontWeight: 600, color: 'var(--navy)' }}>
                  Direito Civil e Família
                </span>
                <span className="type-spec">Cormorant Garamond · 28px · SemiBold · H1</span>
              </div>
              <div className="type-row">
                <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 20, fontStyle: 'italic', color: 'var(--wine)' }}>
                  "Seu direito, nossa missão."
                </span>
                <span className="type-spec">Cormorant Garamond · 20px · Italic · Citação</span>
              </div>
              <div className="type-row">
                <span style={{ fontFamily: "'Poppins', sans-serif", fontSize: 11, fontWeight: 600, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--gold)' }}>
                  ADVOGADA · OAB/MG
                </span>
                <span className="type-spec">Poppins · 11px · SemiBold · Uppercase · Eyebrow</span>
              </div>
              <div className="type-row">
                <span style={{ fontFamily: "'Poppins', sans-serif", fontSize: 14, fontWeight: 400, color: 'var(--text)' }}>
                  Atendimento humanizado com excelência jurídica.
                </span>
                <span className="type-spec">Poppins · 14px · Regular · Corpo de texto</span>
              </div>
              <div className="type-row">
                <span style={{ fontFamily: "'Poppins', sans-serif", fontSize: 13, fontWeight: 300, color: 'var(--text-muted)' }}>
                  Belo Horizonte, Minas Gerais · Brasil
                </span>
                <span className="type-spec">Poppins · 13px · Light · Legenda</span>
              </div>
            </div>
          </div>

          {/* ── COMPONENTES ── */}
          <div className="ds-block">
            <div className="ds-block-label">Componentes</div>
            <div className="comp-grid">
              <div className="comp-card">
                <span className="comp-card-title">Botões</span>
                <div className="btn-stack">
                  <button className="ds-btn ds-btn-primary">Agendar consulta</button>
                  <button className="ds-btn ds-btn-secondary">Saiba mais</button>
                  <button className="ds-btn ds-btn-ghost">Entre em contato</button>
                  <button className="ds-btn ds-btn-gold">Área do cliente</button>
                </div>
              </div>

              <div className="comp-card">
                <span className="comp-card-title">Badges & Tags</span>
                <div className="badge-wrap" style={{ marginBottom: 24 }}>
                  <span className="badge badge-navy">Direito Civil</span>
                  <span className="badge badge-gold">Família</span>
                  <span className="badge badge-wine">Trabalhista</span>
                  <span className="badge badge-cream">Creme</span>
                  <span className="badge badge-olive">Olive</span>
                  <span className="badge badge-out">Outline</span>
                </div>
                <span className="comp-card-title" style={{ marginTop: 0 }}>Campo de texto</span>
                <label className="ds-label">Nome completo</label>
                <input className="ds-input" type="text" placeholder="Ex.: Maria Silva" />
                <label className="ds-label">E-mail</label>
                <input className="ds-input" type="email" placeholder="email@exemplo.com" />
              </div>

              <div className="comp-card" style={{ padding: 0, overflow: 'hidden' }}>
                <span className="comp-card-title" style={{ padding: '20px 20px 0', display: 'block' }}>Card de serviço</span>
                <div style={{ padding: '0 16px 16px' }}>
                  <div className="srv-card">
                    <div className="srv-card-head">
                      <div className="srv-card-head-title">Direito de Família</div>
                      <div className="srv-card-head-sub">Área de atuação</div>
                    </div>
                    <div className="srv-card-body">
                      Divórcio, guarda, inventário e planejamento patrimonial com acompanhamento humanizado.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ── ATRIBUTOS ── */}
          <div className="ds-block">
            <div className="ds-block-label">Atributos & Personalidade</div>
            <div className="attributes-grid">
              <div className="attr-card attr-card-a">
                <span className="attr-card-label" style={{ color: 'var(--navy)' }}>Humana</span>
                <span className="attr-card-desc">Empática, acolhedora e focada nas pessoas.</span>
              </div>
              <div className="attr-card attr-card-b">
                <span className="attr-card-label" style={{ color: 'var(--wine)' }}>Firme</span>
                <span className="attr-card-desc">Segura, técnica e focada na solução real.</span>
              </div>
              <div className="attr-card attr-card-c">
                <span className="attr-card-label" style={{ color: 'var(--gold-700)' }}>Preventiva</span>
                <span className="attr-card-desc">Estratégica, inteligente e voltada para o futuro.</span>
              </div>
              <div className="attr-card attr-card-d">
                <span className="attr-card-label" style={{ color: 'var(--olive)' }}>Empoderada</span>
                <span className="attr-card-desc">Potente, contemporânea e forte.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          MANIFESTO
      ══════════════════════════════════════ */}
      <section className="manifesto">
        <div className="manifesto-inner">
          <div>
            <span className="eyebrow manifesto-eyebrow">Manifesto de Marca</span>
            <h2 className="manifesto-title">
              A engrenagem da
              <br /><em>justiça é feita</em>
              <br />de pessoas.
            </h2>
            <p className="manifesto-text">
              Por trás de cada contrato ou estrutura familiar, existem vidas e negócios que buscam segurança.
            </p>
            <p className="manifesto-text">
              Enquanto a advocacia tradicional costuma focar apenas no litígio, a marca Fernanda Dayrell atua para prevenir, acolher e empoderar.
            </p>
            <p className="manifesto-text">
              Nossa missão é transformar a complexidade jurídica em soluções reais. Por meio da escuta ativa, focamos em resolver o problema na raiz, com uma visão criteriosa e humana.
            </p>
          </div>

          <div className="manifesto-right">
            <blockquote className="manifesto-quote">
              Unimos a potência do empoderamento feminino à estratégia jurídica para proteger o que realmente importa: o patrimônio e a família.
            </blockquote>

            <div className="manifesto-pillars">
              <div className="manifesto-pillar">
                <div className="manifesto-pillar-dot" style={{ background: 'var(--navy-200)' }} />
                <span className="manifesto-pillar-text">
                  <strong>Direito de Família:</strong> Atuação humanizada pacificando conflitos com sensibilidade e critérios firmes.
                </span>
              </div>
              <div className="manifesto-pillar">
                <div className="manifesto-pillar-dot" style={{ background: 'var(--gold)' }} />
                <span className="manifesto-pillar-text">
                  <strong>Direito Trabalhista:</strong> Advocacia preventiva — sanando riscos antes que virem processos.
                </span>
              </div>
              <div className="manifesto-pillar">
                <div className="manifesto-pillar-dot" style={{ background: 'var(--wine-400)' }} />
                <span className="manifesto-pillar-text">
                  <strong>Direito Civil:</strong> Contratos, responsabilidade civil e proteção patrimonial estratégica.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          FOOTER
      ══════════════════════════════════════ */}
      <footer className="footer">
        <div className="footer-inner">
          <div>
            <div className="footer-brand">Fernanda Dayrell</div>
            <span className="footer-sub">Advogada · Design System v1.0</span>
          </div>
          <div style={{ display: 'flex', gap: 12 }}>
            {/* CORRIGIDO: Caminhos atualizados também nos botões do rodapé */}
            <a href={`${baseUrl}MANUAL_DE_IDENTIDADE_VISUAL.pdf`} download className="dl-btn dl-btn-navy" style={{ padding: '10px 18px', fontSize: 10 }}>
              <IconDown /> Manual
            </a>
            <a href={`${baseUrl}RELATORIO_DE_CRIACAO_DE_MARCA.pdf`} download className="dl-btn dl-btn-wine" style={{ padding: '10px 18px', fontSize: 10 }}>
              <IconDown /> Relatório
            </a>
            <a href="https://drive.google.com/drive/folders/1DjEGGxw33yqy4b8QBrW_1uVome4ovi8B" target="_blank" rel="noopener noreferrer" className="dl-btn dl-btn-gold" style={{ padding: '10px 18px', fontSize: 10 }}>
              <IconArrow /> Drive
            </a>
          </div>
        </div>
        <div className="footer-copy">
          <span>© 2026 Fernanda Dayrell Advogada. Todos os direitos reservados.</span>
          <span>Design System by kauanfdesign</span>
        </div>
      </footer>
    </>
  );
}

export default App;