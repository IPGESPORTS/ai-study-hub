"use client";

import { useState } from "react";
import {
  LayoutDashboard, BookOpen, Sparkles, FileText, NotebookPen,
  Layers3, ClipboardCheck, CalendarDays, ChartNoAxesColumnIncreasing,
  Settings, Bell, Plus, Clock3, Flame, Target, Check
} from "lucide-react";

const navigation = [
  { label: "Översikt", icon: LayoutDashboard },
  { label: "Mina ämnen", icon: BookOpen },
  { label: "AI-lärare", icon: Sparkles },
  { label: "Dokument", icon: FileText },
  { label: "Anteckningar", icon: NotebookPen },
  { label: "Flashcards", icon: Layers3 },
  { label: "Quiz & prov", icon: ClipboardCheck },
  { label: "Kalender", icon: CalendarDays },
  { label: "Utveckling", icon: ChartNoAxesColumnIncreasing }
];

const subjects = [
  { name: "Matematik", detail: "Algebra · Ekvationer", progress: 72, icon: "∑" },
  { name: "Engelska", detail: "Grammar · Vocabulary", progress: 58, icon: "A" },
  { name: "Biologi", detail: "Cellen · Genetik", progress: 84, icon: "⌬" }
];

const initialTasks = [
  { title: "Repetera andragradsekvationer", meta: "Matematik · Idag", done: false },
  { title: "Läs kapitel 4 och gör anteckningar", meta: "Biologi · Idag", done: false },
  { title: "Träna 15 glosor", meta: "Engelska · Imorgon", done: true }
];

export default function Home() {
  const [active, setActive] = useState("Översikt");
  const [tasks, setTasks] = useState(initialTasks);
  const [question, setQuestion] = useState("");

  function toggleTask(index: number) {
    setTasks(current => current.map((task, i) => i === index ? { ...task, done: !task.done } : task));
  }

  return (
    <div className="app-shell">
      <aside className="sidebar">
        <div className="brand">
          <div className="brand-mark">S</div>
          <div><div className="brand-name">Studyspace</div><div className="brand-sub">AI STUDY HUB</div></div>
        </div>
        <div>
          <div className="nav-label">ARBETSPLATS</div>
          <nav className="nav-list">
            {navigation.map(({ label, icon: Icon }) => (
              <button key={label} className={`nav-item ${active === label ? "active" : ""}`} onClick={() => setActive(label)}>
                <Icon size={17} className="nav-icon" />{label}
              </button>
            ))}
          </nav>
        </div>
        <div className="sidebar-bottom">
          <div className="nav-list">
            <button className="nav-item" onClick={() => setActive("Inställningar")}><Settings size={17} className="nav-icon" />Inställningar</button>
          </div>
          <div className="profile">
            <div className="avatar">OS</div>
            <div><div className="profile-name">Min studieprofil</div><div className="profile-plan">Personlig arbetsyta</div></div>
          </div>
        </div>
      </aside>

      <main className="main">
        <header className="topbar">
          <div>
            <div className="eyebrow">SÖNDAG · DIN STUDIEÖVERSIKT</div>
            <h1>{active === "Översikt" ? "Dags att nå dina mål." : active}</h1>
            <div className="subtitle">Här är läget i dina studier. Små framsteg blir stora resultat.</div>
          </div>
          <div className="top-actions">
            <button className="icon-btn" aria-label="Notiser"><Bell size={16} /></button>
            <button className="primary-btn" onClick={() => setActive("Mina ämnen")}><Plus size={14} style={{display:"inline", marginRight:6}} />Nytt studietillfälle</button>
          </div>
        </header>

        <section className="stats">
          <div className="card"><div className="stat-top"><span><Clock3 size={13} style={{display:"inline",marginRight:5}} />Studietid denna vecka</span><span>↗</span></div><div className="stat-value">6h 40m</div><div className="stat-note">+12% mot förra veckan</div></div>
          <div className="card"><div className="stat-top"><span><Target size={13} style={{display:"inline",marginRight:5}} />Uppgifter klara</span><span>◎</span></div><div className="stat-value">{tasks.filter(t => t.done).length + 8}/12</div><div className="stat-note">Du är på god väg</div></div>
          <div className="card"><div className="stat-top"><span><Flame size={13} style={{display:"inline",marginRight:5}} />Studie-streak</span><span>✦</span></div><div className="stat-value">5 dagar</div><div className="stat-note">Nytt personligt rekord nära</div></div>
          <div className="card"><div className="stat-top"><span><ChartNoAxesColumnIncreasing size={13} style={{display:"inline",marginRight:5}} />Genomsnittlig nivå</span><span>↗</span></div><div className="stat-value">71%</div><div className="stat-note">+5% senaste månaden</div></div>
        </section>

        <div className="content-grid">
          <div>
            <section className="card" style={{marginBottom:17}}>
              <div className="section-head"><h2>Mina ämnen</h2><button className="muted-link" onClick={() => setActive("Mina ämnen")}>Visa alla →</button></div>
              <div className="subjects">
                {subjects.map(subject => (
                  <button className="subject-card" key={subject.name} onClick={() => setActive(subject.name)} style={{textAlign:"left",color:"inherit"}}>
                    <div className="subject-icon">{subject.icon}</div><h3>{subject.name}</h3><p>{subject.detail}</p>
                    <div className="progress-label"><span>Framsteg</span><span>{subject.progress}%</span></div>
                    <div className="progress"><span style={{width:`${subject.progress}%`}} /></div>
                  </button>
                ))}
              </div>
            </section>

            <section className="card">
              <div className="section-head"><h2>Veckans studietid</h2><span className="muted-link">Denna vecka</span></div>
              <div className="week-bars">
                {[35,62,48,82,55,95,24].map((height, i) => <div className="week-day" key={i}><div className="bar" style={{height:`${height}%`}} /><span>{["Mån","Tis","Ons","Tor","Fre","Lör","Sön"][i]}</span></div>)}
              </div>
            </section>
          </div>

          <div>
            <section className="ai-card">
              <div className="ai-top"><div className="ai-spark"><Sparkles size={18}/></div><div><h3>Din AI-studiecoach</h3><div style={{color:"#a99cce",fontSize:10,marginTop:3}}>Redo att hjälpa dig</div></div></div>
              <p>Behöver du förstå ett svårt område, sammanfatta ett dokument eller skapa ett quiz? Börja här.</p>
              <form onSubmit={e => { e.preventDefault(); if (question.trim()) setActive("AI-lärare"); }}>
                <input className="ai-input" value={question} onChange={e => setQuestion(e.target.value)} placeholder="Fråga om något du pluggar..." />
              </form>
            </section>

            <section className="card" style={{marginBottom:17}}>
              <div className="section-head"><h2>Att göra</h2><span className="muted-link">{tasks.filter(t=>t.done).length}/{tasks.length} klara</span></div>
              <div className="task-list">
                {tasks.map((task, index) => <button className="task" key={task.title} onClick={() => toggleTask(index)} style={{textAlign:"left",background:"none",border:0,padding:0,color:task.done?"#778293":"#c7ced9"}}>
                  <span className="task-check" style={task.done?{background:"#6655a8",borderColor:"#6655a8",display:"grid",placeItems:"center",color:"white"}:{}}>{task.done?<Check size={12}/>:null}</span>
                  <span style={{textDecoration:task.done?"line-through":"none"}}>{task.title}<span style={{display:"block",fontSize:9,color:"#7f8a9d",marginTop:4}}>{task.meta}</span></span>
                </button>)}
              </div>
            </section>

            <section className="card">
              <div className="section-head"><h2>Veckans mål</h2><span className="muted-link">3 av 5</span></div>
              <div className="progress-label"><span>Studera 8 timmar</span><span>6h 40m</span></div>
              <div className="progress"><span style={{width:"83%"}} /></div>
              <div style={{fontSize:10,color:"#929bad",marginTop:10}}>Bara 1 timme och 20 minuter kvar till målet.</div>
            </section>
          </div>
        </div>
        <footer style={{color:"#657084",fontSize:10,textAlign:"center",marginTop:30}}>AI Study Hub · Din kunskap, samlad på ett ställe</footer>
      </main>
    </div>
  );
}