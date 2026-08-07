'use client';

const signals = ['APPLIED AI', 'PRODUCT SYSTEMS', 'CLOUD', 'DATA', 'AUTOMATION', 'SECURITY'];

export default function MotionLayer() {
  return (
    <div className="motion-layer" aria-hidden="true">
      <div className="motion-aurora motion-aurora-one" />
      <div className="motion-aurora motion-aurora-two" />
      <div className="motion-grid" />
      <div className="motion-orbit-ring ring-one" />
      <div className="motion-orbit-ring ring-two" />
      <div className="motion-signal-cloud">
        {signals.map((signal, index) => <span key={signal} style={{ '--signal-index': index }}>{signal}</span>)}
      </div>
    </div>
  );
}
