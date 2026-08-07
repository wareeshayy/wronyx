'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { Bot, ChevronRight, MessageCircle, Send, ShieldCheck, X } from 'lucide-react';

const welcome = {
  role: 'assistant',
  text: "Hi — I’m the WRONYX knowledge assistant. Ask me about our services, AI capabilities, careers, leadership, or how to start a project.",
  sources: [],
};
const prompts = ['Who is the founder?', 'What AI services do you offer?', 'How can I apply?'];

export default function RagChatbot() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([welcome]);
  const [busy, setBusy] = useState(false);
  const end = useRef(null);

  useEffect(() => { end.current?.scrollIntoView({ behavior: 'smooth' }); }, [messages, busy]);

  const ask = async (text) => {
    const question = (text || input).trim();
    if (!question || busy) return;
    setMessages((current) => [...current, { role: 'user', text: question }]);
    setInput('');
    setBusy(true);
    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: question }),
      });
      const output = await response.json();
      if (!response.ok) throw new Error(output.message);
      setMessages((current) => [...current, { role: 'assistant', text: output.answer, sources: output.sources || [] }]);
    } catch (error) {
      setMessages((current) => [...current, { role: 'assistant', text: error.message || 'The assistant is temporarily unavailable.', sources: [] }]);
    } finally { setBusy(false); }
  };

  return (
    <div className={`rag-widget ${open ? 'open' : ''}`}>
      <button className="rag-launch" onClick={() => setOpen((current) => !current)} aria-label={open ? 'Close WRONYX assistant' : 'Open WRONYX assistant'}>
        {open ? <X /> : <><MessageCircle /><span className="rag-status-dot" /></>}
      </button>
      {open && (
        <section className="rag-panel">
          <header>
            <div><span><Bot /></span><p><b>WRONYX AI</b><small><span className="rag-online-dot" /> Knowledge online</small></p></div>
            <button onClick={() => setOpen(false)} aria-label="Close"><X /></button>
          </header>
          <div className="rag-context"><ShieldCheck /> Answers are grounded in the WRONYX knowledge base.</div>
          <div className="rag-messages">
            {messages.map((message, index) => (
              <article key={`${message.role}-${index}`} className={message.role}>
                <div>{message.text}</div>
                {message.sources?.length > 0 && <footer>{message.sources.map((source) => <Link key={source.title} href={source.url}>{source.title}<ChevronRight /></Link>)}</footer>}
              </article>
            ))}
            {messages.length === 1 && <nav>{prompts.map((prompt) => <button key={prompt} onClick={() => ask(prompt)}>{prompt}</button>)}</nav>}
            {busy && <article className="assistant typing"><span /><span /><span /></article>}
            <span ref={end} className="rag-end" />
          </div>
          <form onSubmit={(event) => { event.preventDefault(); ask(); }}>
            <input value={input} onChange={(event) => setInput(event.target.value)} placeholder="Ask WRONYX anything…" aria-label="Message WRONYX assistant" />
            <button disabled={busy || !input.trim()} aria-label="Send message"><Send /></button>
          </form>
        </section>
      )}
    </div>
  );
}
