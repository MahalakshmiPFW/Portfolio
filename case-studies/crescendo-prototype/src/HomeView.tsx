import type { DisplayItem, MenuItem } from './types';

const TRUST_ITEMS = [
  { icon: '☀️', title: 'Open until 7 PM', sub: 'Mon–Sat · Sun till 2 PM' },
  { icon: '🥤', title: 'DORA participant', sub: 'Take select drinks to go' },
  { icon: '🌾', title: 'Gluten-free options', sub: 'Ask about substitutions' },
  { icon: '★', title: 'Rewards program', sub: 'Earn on every order' },
];

interface HomeViewProps {
  onGoMenu: () => void;
  topSellerItems: DisplayItem[];
  onQuickAdd: (item: MenuItem) => void;
}

export default function HomeView({ onGoMenu, topSellerItems, onQuickAdd }: HomeViewProps) {
  return (
    <main>
      {/* HERO */}
      <section style={{ position: 'relative', padding: '64px 32px 56px', display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: 48, alignItems: 'center', maxWidth: 1240, margin: '0 auto' }}>
        <div>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, font: "600 11px 'Work Sans',sans-serif", letterSpacing: '.1em', textTransform: 'uppercase', color: 'oklch(0.46 0.14 40)', background: 'oklch(0.5 0.145 40 / 0.1)', padding: '6px 12px', borderRadius: 20, marginBottom: 20 }}>In The Pearl · Downtown Fort Wayne</div>
          <h1 style={{ font: "600 52px/1.08 'Source Serif 4',serif", margin: '0 0 18px', color: 'oklch(0.2 0.016 55)', textWrap: 'balance' }}>Coffee, made unhurried.</h1>
          <p style={{ font: "400 16px/1.6 'Work Sans',sans-serif", color: 'oklch(0.42 0.018 55)', maxWidth: 460, margin: '0 0 28px', textWrap: 'pretty' }}>Scratch-made breakfast, lunch, and specialty drinks in the heart of downtown — the neighborhood spot for catching up, settling in, or ordering ahead on your way out the door.</p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <button onClick={onGoMenu} style={{ background: 'oklch(0.27 0.018 55)', color: 'oklch(0.965 0.012 55)', border: 'none', font: "600 14px 'Work Sans',sans-serif", padding: '14px 26px', borderRadius: 8, cursor: 'pointer' }}>View Full Menu</button>
            <button onClick={onGoMenu} style={{ background: 'none', color: 'oklch(0.27 0.018 55)', border: '1.5px solid oklch(0.27 0.018 55)', font: "600 14px 'Work Sans',sans-serif", padding: '14px 26px', borderRadius: 8, cursor: 'pointer', whiteSpace: 'nowrap' }}>Order Ahead</button>
          </div>
        </div>
        <div style={{ aspectRatio: '5/4', borderRadius: 16, background: 'repeating-linear-gradient(135deg, oklch(0.885 0.015 55), oklch(0.885 0.015 55) 14px, oklch(0.915 0.014 55) 14px, oklch(0.915 0.014 55) 28px)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 20px 50px oklch(0.27 0.017 55 / 0.15)' }}>
          <span style={{ font: '12px ui-monospace,monospace', color: 'oklch(0.45 0.016 55)', background: 'oklch(0.975 0.007 55 / 0.85)', padding: '6px 12px', borderRadius: 6 }}>storefront / latte-art photo</span>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section style={{ maxWidth: 1240, margin: '0 auto', padding: '0 32px 56px', display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 16 }}>
        {TRUST_ITEMS.map((t) => (
          <div key={t.title} style={{ background: 'oklch(0.93 0.013 55)', border: '1px solid oklch(0.87 0.014 55)', borderRadius: 10, padding: '16px 18px', display: 'flex', alignItems: 'center', gap: 12 }}>
            <span style={{ fontSize: 20 }}>{t.icon}</span>
            <div>
              <div style={{ font: "600 13px 'Work Sans',sans-serif", color: 'oklch(0.27 0.018 55)' }}>{t.title}</div>
              <div style={{ font: "400 11.5px 'Work Sans',sans-serif", color: 'oklch(0.5 0.015 55)' }}>{t.sub}</div>
            </div>
          </div>
        ))}
      </section>

      {/* TOP SELLERS */}
      <section style={{ maxWidth: 1240, margin: '0 auto', padding: '8px 32px 64px' }}>
        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 20 }}>
          <h2 style={{ font: "600 26px 'Source Serif 4',serif", margin: 0, color: 'oklch(0.2 0.016 55)' }}>What people order</h2>
          <button onClick={onGoMenu} style={{ background: 'none', border: 'none', font: "600 13px 'Work Sans',sans-serif", color: 'oklch(0.46 0.14 40)', cursor: 'pointer' }}>See full menu →</button>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 20 }}>
          {topSellerItems.map((item) => (
            <div key={item.id} style={{ background: 'oklch(0.985 0.006 55)', border: '1px solid oklch(0.875 0.014 55)', borderRadius: 12, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
              <div style={{ aspectRatio: '4/3', background: 'repeating-linear-gradient(45deg, oklch(0.895 0.014 55), oklch(0.895 0.014 55) 10px, oklch(0.92 0.013 55) 10px, oklch(0.92 0.013 55) 20px)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ font: '10.5px ui-monospace,monospace', color: 'oklch(0.5 0.015 55)' }}>{item.name} photo</span>
              </div>
              <div style={{ padding: '14px 16px 16px', display: 'flex', flexDirection: 'column', gap: 8, flex: 1 }}>
                <div style={{ font: "600 14.5px 'Work Sans',sans-serif", color: 'oklch(0.27 0.018 55)' }}>{item.name}</div>
                <div style={{ font: "400 12px/1.5 'Work Sans',sans-serif", color: 'oklch(0.5 0.015 55)', flex: 1 }}>{item.desc}</div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 4 }}>
                  <span style={{ font: "700 14px 'Work Sans',sans-serif", color: 'oklch(0.27 0.018 55)' }}>{item.priceLabel}</span>
                  <button onClick={() => onQuickAdd(item)} style={{ background: 'oklch(0.5 0.145 40)', color: 'white', border: 'none', font: "600 12px 'Work Sans',sans-serif", padding: '8px 14px', borderRadius: 7, cursor: 'pointer' }}>Add</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section style={{ background: 'oklch(0.93 0.012 55)', padding: '64px 32px' }}>
        <div style={{ maxWidth: 1240, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 56, alignItems: 'center' }}>
          <div style={{ aspectRatio: '5/4', borderRadius: 16, background: 'repeating-linear-gradient(135deg, oklch(0.85 0.02 60), oklch(0.85 0.02 60) 14px, oklch(0.87 0.018 62) 14px, oklch(0.87 0.018 62) 28px)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ font: '12px ui-monospace,monospace', color: 'oklch(0.42 0.015 55)', background: 'oklch(0.975 0.007 55 / 0.85)', padding: '6px 12px', borderRadius: 6 }}>interior / seating area photo</span>
          </div>
          <div>
            <div style={{ font: "600 11px 'Work Sans',sans-serif", letterSpacing: '.1em', textTransform: 'uppercase', color: 'oklch(0.62 0.07 85)', marginBottom: 12 }}>Serving the Summit City</div>
            <h2 style={{ font: "600 30px/1.2 'Source Serif 4',serif", margin: '0 0 16px', color: 'oklch(0.2 0.016 55)' }}>A neighborhood shop, right in the heart of town</h2>
            <p style={{ font: "400 15px/1.65 'Work Sans',sans-serif", color: 'oklch(0.42 0.018 55)', margin: '0 0 14px' }}>Crescendo Coffee &amp; Café is a local coffee shop inside The Pearl in downtown Fort Wayne — a welcoming space where neighbors and visitors feel at home, whether they're catching up with friends, settling in to work, or bringing the family.</p>
            <p style={{ font: "400 15px/1.65 'Work Sans',sans-serif", color: 'oklch(0.42 0.018 55)', margin: 0 }}>We're a Designated Outdoor Refreshment Area (DORA) participant, so you can take select drinks with you as you explore downtown.</p>
          </div>
        </div>
      </section>

      {/* LOCATION / HOURS */}
      <section style={{ maxWidth: 1240, margin: '0 auto', padding: '64px 32px', display: 'grid', gridTemplateColumns: '1fr 1.3fr', gap: 40 }}>
        <div>
          <h2 style={{ font: "600 26px 'Source Serif 4',serif", margin: '0 0 20px', color: 'oklch(0.2 0.016 55)' }}>Visit us</h2>
          <div style={{ font: "600 15px 'Work Sans',sans-serif", color: 'oklch(0.27 0.018 55)', marginBottom: 4 }}>258 West Main Street</div>
          <div style={{ font: "400 14px 'Work Sans',sans-serif", color: 'oklch(0.5 0.015 55)', marginBottom: 20 }}>Fort Wayne, IN 46802</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 6, font: "400 14px 'Work Sans',sans-serif", color: 'oklch(0.42 0.018 55)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', maxWidth: 280 }}><span>Mon – Sat</span><span style={{ fontWeight: 600 }}>7:00 AM – 7:00 PM</span></div>
            <div style={{ display: 'flex', justifyContent: 'space-between', maxWidth: 280 }}><span>Sunday</span><span style={{ fontWeight: 600 }}>8:00 AM – 2:00 PM</span></div>
          </div>
        </div>
        <div style={{ aspectRatio: '16/8', borderRadius: 16, background: 'repeating-linear-gradient(45deg, oklch(0.905 0.012 55), oklch(0.905 0.012 55) 12px, oklch(0.93 0.011 55) 12px, oklch(0.93 0.011 55) 24px)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <span style={{ font: '12px ui-monospace,monospace', color: 'oklch(0.5 0.015 55)' }}>map embed</span>
        </div>
      </section>
    </main>
  );
}
