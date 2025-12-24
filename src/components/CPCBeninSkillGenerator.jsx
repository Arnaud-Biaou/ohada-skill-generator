import React, { useState, useMemo } from 'react';
import { Copy, Download, ChevronDown, ChevronRight, RotateCcw, Book, Scale, CheckCircle } from 'lucide-react';
import { cpcData } from './cpc_data_v15.js';

export default function CPCBeninSkillGenerator() {
  const [skillName, setSkillName] = useState('CPC Bénin - Code de Procédure Civile');
  const [skillDescription, setSkillDescription] = useState('Loi N° 2008-07 du 28 février 2011 - Art. 1 à 1231');
  const [mainInstructions, setMainInstructions] = useState('Code de Procédure Civile, Commerciale, Sociale, Administrative et des Comptes du Bénin. Modifié par les lois 2016-16, 2020-08 et 2022-20.');

  const [livres, setLivres] = useState(cpcData);

  const [copied, setCopied] = useState(false);
  const [zipGenerated, setZipGenerated] = useState(false);
  const [expanded, setExpanded] = useState({
    livre: {0: true}, titre: {'0-0': true}, chapitre: {}, section: {}, subsection: {}
  });

  const toggle = (type, key) => setExpanded(prev => ({...prev, [type]: {...prev[type], [key]: !prev[type][key]}}));
  const sanitize = (name) => name.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9-_]/g, '-').replace(/-+/g, '-').substring(0, 50);
  const romanToArabic = (r) => ({'I':1,'II':2,'III':3,'IV':4,'V':5,'VI':6,'VII':7,'VIII':8,'IX':9,'X':10,'PREMIER':1,'DEUXIÈME':2,'DEUXIEME':2,'TROISIÈME':3,'TROISIEME':3}[r] || r);

  const updateField = (path, field, value) => {
    const u = JSON.parse(JSON.stringify(livres));
    let obj = u;
    for (let i = 0; i < path.length; i++) { obj = obj[path[i]]; }
    obj[field] = value;
    setLivres(u);
  };

  const stats = useMemo(() => {
    let filled = 0, total = 0;
    livres.forEach(l => l.titres.forEach(t => {
      if (t.articlesIntro) { total++; if (t.contentIntro) filled++; }
      t.chapitres.forEach(c => {
        if (c.articlesIntro) { total++; if (c.contentIntro) filled++; }
        if (c.articles) { total++; if (c.content) filled++; }
        c.sections.forEach(s => {
          if (s.articlesIntro) { total++; if (s.contentIntro) filled++; }
          if (s.articles) { total++; if (s.content) filled++; }
          s.subsections.forEach(ss => {
            if (ss.articlesIntro) { total++; if (ss.contentIntro) filled++; }
            if (ss.articles) { total++; if (ss.content) filled++; }
            ss.paragraphes.forEach(p => {
              if (p.articles) { total++; if (p.content) filled++; }
            });
          });
        });
      });
    }));
    return { filled, total, pct: total > 0 ? Math.round(filled/total*100) : 0 };
  }, [livres]);

  const generateSkillMd = () => {
    let nav = '';
    livres.forEach((livre) => {
      nav += `\n## 📖 ${livre.title}\n\n`;
      livre.titres.forEach((t) => {
        nav += `### ${t.title}\n`;
        if (t.articlesIntro) nav += `*Intro: ${t.articlesIntro}*\n`;
        nav += '\n';
        t.chapitres.forEach((chap) => {
          const path = `references/livre-${romanToArabic(livre.num)}/titre-${romanToArabic(t.num)}/chapitre-${romanToArabic(chap.num)}.md`;
          nav += `- [${chap.title}](${path})`;
          if (chap.articlesIntro) nav += ` *(Intro: ${chap.articlesIntro})*`;
          if (chap.articles) nav += ` *(${chap.articles})*`;
          nav += '\n';
        });
        nav += '\n';
      });
    });
    return `---\nname: "${sanitize(skillName)}"\ndescription: "${skillDescription}"\n---\n\n# ${skillName}\n${nav}\n## Instructions\n\n${mainInstructions}\n`;
  };

  const generateChapitreContent = (livre, t, chap) => {
    let c = `# ${livre.title}\n## ${t.title}\n### ${chap.title}\n\n`;
    if (chap.articlesIntro) c += `## Dispositions générales\n\n${chap.contentIntro || '[À compléter]'}\n\n---\n\n`;
    if (chap.articles && chap.sections.length === 0) c += `${chap.content || '[À compléter]'}\n\n`;
    
    chap.sections.forEach(sec => {
      c += `## ${sec.title}\n\n`;
      if (sec.articlesIntro) c += `${sec.contentIntro || '[À compléter]'}\n\n`;
      if (sec.articles && sec.subsections.length === 0) c += `${sec.content || '[À compléter]'}\n\n`;
      
      sec.subsections.forEach(ss => {
        c += `### ${ss.title}\n\n`;
        if (ss.articlesIntro) c += `${ss.contentIntro || '[À compléter]'}\n\n`;
        if (ss.articles && ss.paragraphes.length === 0) c += `${ss.content || '[À compléter]'}\n\n`;
        
        ss.paragraphes.forEach(p => {
          c += `#### ${p.title}\n\n`;
          c += (p.content || '[À compléter]') + '\n\n';
        });
      });
      c += '---\n\n';
    });
    
    if (chap.sections.length === 0 && !chap.articles && !chap.articlesIntro) c += '[À compléter]\n';
    return c;
  };

  const downloadZip = () => {
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/jszip/3.10.1/jszip.min.js';
    script.onload = () => {
      const zip = new window.JSZip();
      const fn = sanitize(skillName);
      zip.file(`${fn}/SKILL.md`, generateSkillMd());
      livres.forEach((livre) => {
        const ln = romanToArabic(livre.num);
        livre.titres.forEach((t) => {
          const tn = romanToArabic(t.num);
          if (t.articlesIntro) zip.file(`${fn}/references/livre-${ln}/titre-${tn}/00-intro.md`, `# ${t.title}\n\n${t.contentIntro || '[À compléter]'}\n`);
          t.chapitres.forEach((chap) => {
            const cn = romanToArabic(chap.num);
            zip.file(`${fn}/references/livre-${ln}/titre-${tn}/chapitre-${cn}.md`, generateChapitreContent(livre, t, chap));
          });
        });
      });
      zip.generateAsync({type:'blob'}).then(content => {
        const url = URL.createObjectURL(content);
        const a = document.createElement('a'); a.href = url; a.download = `${fn}.zip`;
        document.body.appendChild(a); a.click(); document.body.removeChild(a);
        setZipGenerated(true); setTimeout(() => setZipGenerated(false), 3000);
      });
    };
    document.body.appendChild(script);
  };

  const ContentField = ({ label, articles, content, onChange, color }) => (
    <div className={`bg-${color}-900/20 border border-${color}-700/50 rounded p-1.5 mb-1`}>
      <div className="flex items-center gap-1">
        <span className={`text-${color}-400 font-medium text-xs`}>{label}: {articles}</span>
        {content && <CheckCircle size={12} className="text-green-400" />}
      </div>
      <textarea 
        value={content || ''} 
        onChange={onChange}
        rows="4" 
        className="w-full mt-1 px-1 bg-slate-700 border border-slate-600 rounded text-white text-xs font-mono"
        placeholder="Contenu des articles..."
      />
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-slate-900 to-slate-900 p-2">
      <div className="max-w-7xl mx-auto">
        <div className="mb-2 flex items-center justify-between">
          <div>
            <h1 className="text-lg font-bold text-white flex items-center gap-2">
              <Scale size={18} className="text-blue-400" />CPC Bénin v15 - Contenu Intégré
            </h1>
            <p className="text-slate-400 text-xs">
              {stats.filled}/{stats.total} champs remplis ({stats.pct}%) • 1231 articles
            </p>
          </div>
          <div className="flex gap-2">
            <button onClick={downloadZip} className="px-3 py-1.5 rounded font-medium bg-green-600 hover:bg-green-700 text-white flex items-center gap-1 text-sm">
              <Download size={14} /> {zipGenerated ? '✓ OK!' : 'Télécharger ZIP'}
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-2">
          <div className="lg:col-span-2 space-y-2">
            <div className="bg-slate-800 rounded p-2 border border-slate-700">
              <input type="text" value={skillName} onChange={e => setSkillName(e.target.value)} className="w-full px-2 py-1 mb-1 bg-slate-700 border border-slate-600 rounded text-white text-sm" />
              <textarea value={mainInstructions} onChange={e => setMainInstructions(e.target.value)} rows="2" className="w-full px-2 py-1 bg-slate-700 border border-slate-600 rounded text-white text-xs font-mono" />
            </div>

            <div className="bg-slate-800 rounded p-2 border border-slate-700">
              <h2 className="text-sm font-bold text-white mb-1 flex items-center gap-1"><Book size={14} className="text-blue-400" /> Structure avec Contenu</h2>
              <div className="space-y-1 max-h-[600px] overflow-y-auto pr-1 text-xs">
                {livres.map((livre, li) => (
                  <div key={li} className="border border-slate-600 rounded">
                    <div className="flex items-center p-1.5 bg-blue-900/40 cursor-pointer" onClick={() => toggle('livre', li)}>
                      {expanded.livre[li] ? <ChevronDown size={12} /> : <ChevronRight size={12} />}
                      <span className="text-white ml-1 font-medium">📖 {livre.title}</span>
                    </div>
                    {expanded.livre[li] && (
                      <div className="p-1 space-y-1">
                        {livre.titres.map((t, ti) => (
                          <div key={ti} className="border border-slate-600 rounded ml-2">
                            <div className="flex items-center p-1.5 bg-indigo-900/40 cursor-pointer" onClick={() => toggle('titre', `${li}-${ti}`)}>
                              {expanded.titre[`${li}-${ti}`] ? <ChevronDown size={12} /> : <ChevronRight size={12} />}
                              <span className="text-indigo-200 ml-1">📁 {t.title}</span>
                              {t.articlesIntro && <span className="text-yellow-400 ml-1">({t.articlesIntro})</span>}
                            </div>
                            {expanded.titre[`${li}-${ti}`] && (
                              <div className="p-1 space-y-1">
                                {t.articlesIntro && (
                                  <ContentField 
                                    label="Intro Titre" 
                                    articles={t.articlesIntro}
                                    content={t.contentIntro}
                                    onChange={e => updateField([li, 'titres', ti], 'contentIntro', e.target.value)}
                                    color="yellow"
                                  />
                                )}
                                {t.chapitres.map((chap, ci) => (
                                  <div key={ci} className="border border-slate-600 rounded ml-2">
                                    <div className="flex items-center p-1.5 bg-green-900/30 cursor-pointer" onClick={() => toggle('chapitre', `${li}-${ti}-${ci}`)}>
                                      {expanded.chapitre[`${li}-${ti}-${ci}`] ? <ChevronDown size={12} /> : <ChevronRight size={12} />}
                                      <span className="text-green-300 ml-1">📄 {chap.title.substring(0, 40)}...</span>
                                      {(chap.articlesIntro || chap.articles) && <CheckCircle size={10} className="text-green-400 ml-auto" />}
                                    </div>
                                    {expanded.chapitre[`${li}-${ti}-${ci}`] && (
                                      <div className="p-1.5 bg-slate-900/50 space-y-1">
                                        {chap.articlesIntro && (
                                          <ContentField 
                                            label="Intro" 
                                            articles={chap.articlesIntro}
                                            content={chap.contentIntro}
                                            onChange={e => updateField([li, 'titres', ti, 'chapitres', ci], 'contentIntro', e.target.value)}
                                            color="orange"
                                          />
                                        )}
                                        {chap.articles && chap.sections.length === 0 && (
                                          <ContentField 
                                            label="Articles" 
                                            articles={chap.articles}
                                            content={chap.content}
                                            onChange={e => updateField([li, 'titres', ti, 'chapitres', ci], 'content', e.target.value)}
                                            color="lime"
                                          />
                                        )}
                                        {chap.sections.map((sec, si) => (
                                          <div key={si} className="border border-cyan-800/50 rounded p-1.5 ml-1">
                                            <div className="flex items-center cursor-pointer mb-1" onClick={() => toggle('section', `${li}-${ti}-${ci}-${si}`)}>
                                              {expanded.section[`${li}-${ti}-${ci}-${si}`] ? <ChevronDown size={10} /> : <ChevronRight size={10} />}
                                              <span className="text-cyan-300 ml-1 text-xs">{sec.title.substring(0, 35)}...</span>
                                              {(sec.articlesIntro || sec.articles) && <CheckCircle size={10} className="text-green-400 ml-auto" />}
                                            </div>
                                            {expanded.section[`${li}-${ti}-${ci}-${si}`] && (
                                              <div className="pl-2 space-y-1">
                                                {sec.articlesIntro && (
                                                  <ContentField 
                                                    label="Intro" 
                                                    articles={sec.articlesIntro}
                                                    content={sec.contentIntro}
                                                    onChange={e => updateField([li, 'titres', ti, 'chapitres', ci, 'sections', si], 'contentIntro', e.target.value)}
                                                    color="teal"
                                                  />
                                                )}
                                                {sec.articles && sec.subsections.length === 0 && (
                                                  <ContentField 
                                                    label="Articles" 
                                                    articles={sec.articles}
                                                    content={sec.content}
                                                    onChange={e => updateField([li, 'titres', ti, 'chapitres', ci, 'sections', si], 'content', e.target.value)}
                                                    color="sky"
                                                  />
                                                )}
                                                {sec.subsections.map((ss, ssi) => (
                                                  <div key={ssi} className="bg-purple-900/20 border border-purple-700/50 rounded p-1">
                                                    <div className="flex items-center cursor-pointer" onClick={() => toggle('subsection', `${li}-${ti}-${ci}-${si}-${ssi}`)}>
                                                      {expanded.subsection[`${li}-${ti}-${ci}-${si}-${ssi}`] ? <ChevronDown size={10} /> : <ChevronRight size={10} />}
                                                      <span className="text-purple-300 ml-1 text-xs">{ss.title.substring(0, 30)}...</span>
                                                      <CheckCircle size={10} className="text-green-400 ml-auto" />
                                                    </div>
                                                    {expanded.subsection[`${li}-${ti}-${ci}-${si}-${ssi}`] && (
                                                      <div className="pl-2 mt-1 space-y-1">
                                                        {ss.articlesIntro && (
                                                          <ContentField 
                                                            label="Intro" 
                                                            articles={ss.articlesIntro}
                                                            content={ss.contentIntro}
                                                            onChange={e => updateField([li, 'titres', ti, 'chapitres', ci, 'sections', si, 'subsections', ssi], 'contentIntro', e.target.value)}
                                                            color="amber"
                                                          />
                                                        )}
                                                        {ss.articles && ss.paragraphes.length === 0 && (
                                                          <ContentField 
                                                            label="Articles" 
                                                            articles={ss.articles}
                                                            content={ss.content}
                                                            onChange={e => updateField([li, 'titres', ti, 'chapitres', ci, 'sections', si, 'subsections', ssi], 'content', e.target.value)}
                                                            color="violet"
                                                          />
                                                        )}
                                                        {ss.paragraphes.map((p, pi) => (
                                                          <ContentField 
                                                            key={pi}
                                                            label={p.title.substring(0, 25)}
                                                            articles={p.articles}
                                                            content={p.content}
                                                            onChange={e => updateField([li, 'titres', ti, 'chapitres', ci, 'sections', si, 'subsections', ssi, 'paragraphes', pi], 'content', e.target.value)}
                                                            color="pink"
                                                          />
                                                        ))}
                                                      </div>
                                                    )}
                                                  </div>
                                                ))}
                                              </div>
                                            )}
                                          </div>
                                        ))}
                                      </div>
                                    )}
                                  </div>
                                ))}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <div className="bg-green-900/30 rounded p-3 border border-green-700/50">
              <h3 className="text-sm font-bold text-green-300 mb-2 flex items-center gap-2">
                <CheckCircle size={16} /> Contenu Pré-rempli
              </h3>
              <p className="text-green-200 text-xs">
                Les 1231 articles du CPC ont été automatiquement extraits et intégrés. 
                Le ZIP généré contient le texte complet de chaque article.
              </p>
            </div>

            <div className="bg-slate-800 rounded p-2 border border-slate-700">
              <h3 className="text-sm font-bold text-white mb-1">Aperçu SKILL.md</h3>
              <div className="bg-slate-900 rounded p-1.5 max-h-32 overflow-y-auto border border-slate-700">
                <pre className="text-slate-300 text-xs whitespace-pre-wrap font-mono">{generateSkillMd().substring(0, 800)}...</pre>
              </div>
              <button onClick={() => { navigator.clipboard.writeText(generateSkillMd()); setCopied(true); setTimeout(() => setCopied(false), 2000); }} className="w-full mt-1.5 px-2 py-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded text-xs flex items-center justify-center gap-1">
                <Copy size={12} /> {copied ? '✓ Copié!' : 'Copier SKILL.md'}
              </button>
            </div>

            <div className="bg-indigo-900/20 rounded p-2 border border-indigo-700/50">
              <h4 className="text-xs font-bold text-indigo-300 mb-1">📊 Statistiques</h4>
              <div className="space-y-1 text-xs">
                <div className="flex justify-between text-slate-300">
                  <span>Articles extraits:</span>
                  <span className="text-green-400 font-bold">1231</span>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span>Champs remplis:</span>
                  <span className="text-green-400 font-bold">{stats.filled}/{stats.total}</span>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span>Livres:</span>
                  <span>{livres.length}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
