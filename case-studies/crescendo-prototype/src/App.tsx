import { useMemo, useRef, useState, type CSSProperties } from 'react';
import { CATEGORIES, ITEMS, TOP_SELLERS } from './menuData';
import type { AddOnOption, CartLine, DisplayItem, MenuItem, PickupMode, View } from './types';
import HomeView from './HomeView';
import MenuView from './MenuView';
import CartPanel from './CartPanel';
import CustomizeModal from './CustomizeModal';

const TIME_SLOTS = ['12:30 PM', '12:45 PM', '1:00 PM', '1:15 PM', '1:30 PM', '1:45 PM'];

const fmt = (n: number) => n.toFixed(2);

const lineKey = (item: MenuItem, sizeLabel: string | null, addOns: AddOnOption[]) =>
  `${item.id}|${sizeLabel || ''}|${addOns.map((a) => a.label).sort().join(',')}`;

const chipStyle = (active: boolean): CSSProperties => ({
  background: active ? 'oklch(0.27 0.018 55)' : 'oklch(0.965 0.012 55)',
  color: active ? 'oklch(0.965 0.012 55)' : 'oklch(0.4 0.018 55)',
  border: `1px solid ${active ? 'oklch(0.27 0.018 55)' : 'oklch(0.83 0.015 55)'}`,
  font: "600 12.5px 'Work Sans',sans-serif",
  padding: '8px 14px',
  borderRadius: '20px',
  cursor: 'pointer',
  whiteSpace: 'nowrap',
});

export default function App() {
  const [view, setView] = useState<View>('home');
  const [cartOpen, setCartOpen] = useState(false);
  const [cart, setCart] = useState<CartLine[]>([]);
  const [activeCategory, setActiveCategory] = useState('all');
  const [customizingItem, setCustomizingItem] = useState<MenuItem | null>(null);
  const [custSize, setCustSize] = useState(0);
  const [custAddOns, setCustAddOns] = useState<number[]>([]);
  const [custQty, setCustQty] = useState(1);
  const [pickupMode, setPickupMode] = useState<PickupMode>('asap');
  const [scheduledTime, setScheduledTime] = useState('12:30 PM');
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [orderNumber, setOrderNumber] = useState<number | null>(null);
  const [toastMsg, setToastMsg] = useState('');
  const toastTimer = useRef<number | undefined>(undefined);

  const itemsWithDisplay: DisplayItem[] = useMemo(() => ITEMS.map((it) => {
    const priceLabel = it.sizes ? `from $${fmt(it.sizes[0].price)}` : `$${fmt(it.price ?? 0)}`;
    const addLabel = (it.sizes || (it.addOns && it.addOns.length)) ? 'Choose' : 'Add';
    return {
      ...it,
      priceLabel,
      isVeg: (it.tags || []).includes('veg'),
      addLabel,
    };
  }), []);

  const topSellerItems = useMemo(
    () => TOP_SELLERS.map((id) => itemsWithDisplay.find((i) => i.id === id)).filter((i): i is DisplayItem => !!i),
    [itemsWithDisplay],
  );

  const filteredItems = activeCategory === 'all'
    ? itemsWithDisplay
    : itemsWithDisplay.filter((i) => i.category === activeCategory);

  const categoriesList = [{ id: 'all', label: 'All' }, ...CATEGORIES];

  const showToast = (msg: string) => {
    setToastMsg(msg);
    if (toastTimer.current) window.clearTimeout(toastTimer.current);
    toastTimer.current = window.setTimeout(() => setToastMsg(''), 1800);
  };

  const addToCart = (item: MenuItem, sizeIdx: number | null, addOnIdxs: number[], qty: number) => {
    const size = item.sizes && sizeIdx !== null ? item.sizes[sizeIdx] : null;
    const addOns = (item.addOns || []).filter((_, i) => addOnIdxs.includes(i));
    const unitPrice = (size ? size.price : item.price ?? 0) + addOns.reduce((s, a) => s + a.price, 0);
    const sizeLabel = size ? size.label : null;
    const key = lineKey(item, sizeLabel, addOns);
    setCart((prev) => {
      const existing = prev.find((l) => l.key === key);
      if (existing) {
        return prev.map((l) => (l.key === key ? { ...l, qty: l.qty + qty } : l));
      }
      return [...prev, { key, id: item.id, name: item.name, unitPrice, qty, sizeLabel, addOns }];
    });
    showToast(`${item.name} added to order`);
  };

  const openCustomize = (item: MenuItem) => {
    setCustomizingItem(item);
    setCustSize(0);
    setCustAddOns([]);
    setCustQty(1);
  };

  const quickAdd = (item: MenuItem) => {
    if (!item.sizes && !(item.addOns && item.addOns.length)) {
      addToCart(item, null, [], 1);
    } else {
      openCustomize(item);
    }
  };

  const closeCustomize = () => setCustomizingItem(null);

  const toggleCustAddOn = (idx: number) => {
    setCustAddOns((prev) => (prev.includes(idx) ? prev.filter((i) => i !== idx) : [...prev, idx]));
  };

  const confirmCustomize = () => {
    if (!customizingItem) return;
    addToCart(customizingItem, custSize, custAddOns, custQty);
    setCustomizingItem(null);
    setCartOpen(true);
  };

  const updateQty = (key: string, delta: number) => {
    setCart((prev) => prev.map((l) => (l.key === key ? { ...l, qty: l.qty + delta } : l)).filter((l) => l.qty > 0));
  };
  const removeLine = (key: string) => setCart((prev) => prev.filter((l) => l.key !== key));

  const placeOrder = () => {
    if (!cart.length) return;
    setOrderPlaced(true);
    setOrderNumber(Math.floor(100 + Math.random() * 900));
  };
  const resetOrder = () => {
    setOrderPlaced(false);
    setCart([]);
    setCartOpen(false);
    setPickupMode('asap');
  };

  const cartSubtotal = fmt(cart.reduce((sum, l) => sum + l.unitPrice * l.qty, 0));
  const cartCount = cart.reduce((sum, l) => sum + l.qty, 0);
  const pickupLabel = pickupMode === 'asap' ? 'Ready in ~12 min' : `Scheduled for ${scheduledTime}`;

  const navBtnStyle = (active: boolean): CSSProperties => ({
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    font: "600 13px 'Work Sans',sans-serif",
    padding: '8px 14px',
    color: active ? 'oklch(0.27 0.018 55)' : 'oklch(0.5 0.015 55)',
  });

  return (
    <div style={{ minHeight: '100vh', background: 'oklch(0.965 0.012 55)', color: 'oklch(0.27 0.018 55)', position: 'relative', overflowX: 'hidden' }}>

      {/* HEADER */}
      <header style={{ position: 'sticky', top: 0, zIndex: 40, background: 'oklch(0.965 0.012 55 / 0.94)', backdropFilter: 'blur(8px)', borderBottom: '1px solid oklch(0.87 0.014 55)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '14px 32px' }}>
        <button onClick={() => setView('home')} style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', padding: 0 }}>
          <span style={{ font: "700 22px/1 'Source Serif 4',serif", color: 'oklch(0.27 0.018 55)', letterSpacing: '-0.01em' }}>Crescendo</span>
          <span style={{ font: "500 10px/1 'Work Sans',sans-serif", letterSpacing: '.18em', textTransform: 'uppercase', color: 'oklch(0.46 0.14 40)', marginTop: 3 }}>Coffee &amp; Café</span>
        </button>

        <nav style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          <button onClick={() => setView('home')} style={navBtnStyle(view === 'home')}>Home</button>
          <button onClick={() => setView('menu')} style={navBtnStyle(view === 'menu')}>Menu</button>
          <span style={{ display: 'flex', alignItems: 'center', gap: 5, font: "500 13px 'Work Sans',sans-serif", color: 'oklch(0.5 0.015 55)', padding: '8px 14px', opacity: 0.7 }}>Rewards ★</span>
          <span style={{ width: 1, height: 22, background: 'oklch(0.85 0.014 55)', margin: '0 6px' }} />
          <span style={{ font: "500 13px 'Work Sans',sans-serif", color: 'oklch(0.45 0.016 55)', whiteSpace: 'nowrap' }}>(260) 363-0303</span>
          <button onClick={() => setCartOpen((v) => !v)} style={{ position: 'relative', marginLeft: 10, width: 42, height: 42, borderRadius: '50%', border: '1px solid oklch(0.83 0.015 55)', background: 'oklch(0.985 0.007 55)', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="oklch(0.27 0.017 55)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
            {cartCount > 0 && (
              <span style={{ position: 'absolute', top: -4, right: -4, background: 'oklch(0.5 0.145 40)', color: 'white', font: "700 10px/1 'Work Sans',sans-serif", minWidth: 17, height: 17, borderRadius: 9, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0 4px' }}>{cartCount}</span>
            )}
          </button>
        </nav>
      </header>

      {/* TOAST */}
      {toastMsg && (
        <div style={{ position: 'fixed', top: 78, left: '50%', transform: 'translateX(-50%)', zIndex: 60, background: 'oklch(0.27 0.018 55)', color: 'oklch(0.965 0.012 55)', font: "500 13px 'Work Sans',sans-serif", padding: '10px 20px', borderRadius: 8, boxShadow: '0 8px 24px oklch(0.18 0.015 55 / 0.3)' }}>{toastMsg}</div>
      )}

      {view === 'home' && (
        <HomeView onGoMenu={() => setView('menu')} topSellerItems={topSellerItems} onQuickAdd={quickAdd} />
      )}

      {view === 'menu' && (
        <MenuView
          categoriesList={categoriesList}
          activeCategory={activeCategory}
          onSelectCategory={setActiveCategory}
          filteredItems={filteredItems}
          onQuickAdd={quickAdd}
          chipStyle={chipStyle}
        />
      )}

      {/* FOOTER */}
      <footer style={{ background: 'oklch(0.2 0.016 55)', color: 'oklch(0.885 0.008 55)', padding: '44px 32px 28px' }}>
        <div style={{ maxWidth: 1240, margin: '0 auto', display: 'grid', gridTemplateColumns: '1.3fr 1fr 1fr', gap: 32, paddingBottom: 28, borderBottom: '1px solid oklch(0.32 0.015 55)' }}>
          <div>
            <div style={{ font: "700 20px 'Source Serif 4',serif", color: 'oklch(0.965 0.012 55)', marginBottom: 10 }}>Crescendo</div>
            <p style={{ font: "400 13px/1.6 'Work Sans',sans-serif", color: 'oklch(0.75 0.011 55)', maxWidth: 280, margin: 0 }}>258 West Main Street, Fort Wayne, IN 46802 · (260) 363-0303</p>
          </div>
          <div>
            <div style={{ font: "600 12px 'Work Sans',sans-serif", letterSpacing: '.06em', textTransform: 'uppercase', color: 'oklch(0.75 0.013 55)', marginBottom: 10 }}>Hours</div>
            <div style={{ font: "400 13px/1.8 'Work Sans',sans-serif", color: 'oklch(0.84 0.008 55)' }}>Mon – Sat: 7AM – 7PM<br />Sunday: 8AM – 2PM</div>
          </div>
          <div>
            <div style={{ font: "600 12px 'Work Sans',sans-serif", letterSpacing: '.06em', textTransform: 'uppercase', color: 'oklch(0.75 0.013 55)', marginBottom: 10 }}>Stay in the loop</div>
            <div style={{ display: 'flex', gap: 8 }}>
              <input placeholder="Email address" style={{ flex: 1, minWidth: 0, background: 'oklch(0.27 0.015 55)', border: '1px solid oklch(0.38 0.015 55)', color: 'oklch(0.94 0.008 55)', font: "400 13px 'Work Sans',sans-serif", padding: '9px 12px', borderRadius: 6 }} />
              <button style={{ background: 'oklch(0.5 0.145 40)', color: 'white', border: 'none', font: "600 13px 'Work Sans',sans-serif", padding: '9px 16px', borderRadius: 6, cursor: 'pointer', whiteSpace: 'nowrap' }}>Subscribe</button>
            </div>
          </div>
        </div>
        <p style={{ maxWidth: 1240, margin: '18px auto 0', font: "400 11.5px 'Work Sans',sans-serif", color: 'oklch(0.62 0.011 55)' }}>Concept redesign based on the public crescendocoffeecafe.com, for portfolio purposes only — not affiliated with or endorsed by Crescendo Coffee &amp; Café. © 2026</p>
      </footer>

      {cartOpen && (
        <CartPanel
          onClose={() => setCartOpen(false)}
          orderPlaced={orderPlaced}
          orderNumber={orderNumber}
          pickupLabel={pickupLabel}
          onResetOrder={resetOrder}
          cart={cart}
          onGoMenuFromCart={() => { setView('menu'); setCartOpen(false); }}
          onUpdateQty={updateQty}
          onRemoveLine={removeLine}
          pickupMode={pickupMode}
          onSetPickupAsap={() => setPickupMode('asap')}
          onSetPickupScheduled={() => setPickupMode('scheduled')}
          scheduledTime={scheduledTime}
          onSetScheduledTime={setScheduledTime}
          timeSlots={TIME_SLOTS}
          cartSubtotal={cartSubtotal}
          onPlaceOrder={placeOrder}
          chipStyle={chipStyle}
        />
      )}

      {customizingItem && (
        <CustomizeModal
          item={customizingItem}
          custSize={custSize}
          custAddOns={custAddOns}
          custQty={custQty}
          onSelectSize={setCustSize}
          onToggleAddOn={toggleCustAddOn}
          onIncQty={() => setCustQty((q) => q + 1)}
          onDecQty={() => setCustQty((q) => Math.max(1, q - 1))}
          onClose={closeCustomize}
          onConfirm={confirmCustomize}
        />
      )}
    </div>
  );
}
