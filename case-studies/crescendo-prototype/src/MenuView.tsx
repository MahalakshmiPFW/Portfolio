import type { CSSProperties } from 'react';
import type { Category, DisplayItem, MenuItem } from './types';

interface MenuViewProps {
  categoriesList: Category[];
  activeCategory: string;
  onSelectCategory: (id: string) => void;
  filteredItems: DisplayItem[];
  onQuickAdd: (item: MenuItem) => void;
  chipStyle: (active: boolean) => CSSProperties;
}

export default function MenuView({ categoriesList, activeCategory, onSelectCategory, filteredItems, onQuickAdd, chipStyle }: MenuViewProps) {
  return (
    <main style={{ maxWidth: 1240, margin: '0 auto', padding: '36px 32px 80px' }}>
      <h1 style={{ font: "600 34px 'Source Serif 4',serif", margin: '0 0 6px', color: 'oklch(0.2 0.016 55)' }}>Full Menu</h1>
      <p style={{ font: "400 14px 'Work Sans',sans-serif", color: 'oklch(0.5 0.015 55)', margin: '0 0 24px' }}>Breakfast served all day. Gluten-free bread available on request.</p>

      <div style={{ position: 'sticky', top: 73, zIndex: 20, background: 'oklch(0.965 0.012 55 / 0.96)', backdropFilter: 'blur(6px)', padding: '12px 0 16px', display: 'flex', gap: 8, flexWrap: 'wrap', borderBottom: '1px solid oklch(0.87 0.014 55)', marginBottom: 24 }}>
        {categoriesList.map((cat) => (
          <button key={cat.id} onClick={() => onSelectCategory(cat.id)} style={chipStyle(cat.id === activeCategory)}>{cat.label}</button>
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 18 }}>
        {filteredItems.map((item) => (
          <div key={item.id} style={{ background: 'oklch(0.985 0.006 55)', border: '1px solid oklch(0.875 0.014 55)', borderRadius: 12, padding: 16, display: 'flex', flexDirection: 'column', gap: 10 }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 8 }}>
              <div style={{ font: "600 15px 'Work Sans',sans-serif", color: 'oklch(0.27 0.018 55)', lineHeight: 1.3 }}>{item.name}</div>
              <div style={{ font: "700 14px 'Work Sans',sans-serif", color: 'oklch(0.27 0.018 55)', whiteSpace: 'nowrap' }}>{item.priceLabel}</div>
            </div>
            <div style={{ font: "400 12.5px/1.5 'Work Sans',sans-serif", color: 'oklch(0.5 0.015 55)', flex: 1 }}>{item.desc}</div>
            {item.isVeg && (
              <span style={{ alignSelf: 'flex-start', font: "600 10px 'Work Sans',sans-serif", letterSpacing: '.04em', color: 'oklch(0.42 0.1 140)', background: 'oklch(0.58 0.11 140 / 0.13)', padding: '3px 8px', borderRadius: 12 }}>VEG</span>
            )}
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <button onClick={() => onQuickAdd(item)} style={{ background: 'oklch(0.27 0.018 55)', color: 'oklch(0.965 0.012 55)', border: 'none', font: "600 12.5px 'Work Sans',sans-serif", padding: '9px 16px', borderRadius: 7, cursor: 'pointer' }}>{item.addLabel}</button>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
