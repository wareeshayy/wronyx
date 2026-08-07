export default function SignalMarquee({ label = 'Intelligence in motion' }) {
  const items = ['STRATEGY', 'PRODUCT', 'ENGINEERING', 'APPLIED AI', 'MEASURABLE OUTCOMES'];
  return (
    <section className="signal-marquee" aria-label={label}>
      <div className="signal-marquee-track">
        {[...items, ...items].map((item, index) => <span key={`${item}-${index}`}><i />{item}</span>)}
      </div>
    </section>
  );
}
