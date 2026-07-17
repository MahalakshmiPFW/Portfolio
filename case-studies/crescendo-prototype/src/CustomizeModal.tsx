import type { CSSProperties } from 'react';
import type { MenuItem } from './types';

const fmt = (n: number) => n.toFixed(2);

interface CustomizeModalProps {
  item: MenuItem;
  custSize: number;
  custAddOns: number[];
  custQty: number;
  onSelectSize: (idx: number) => void;
  onToggleAddOn: (idx: number) => void;
  onIncQty: () => void;
  onDecQty: () => void;
  onClose: () => void;
  onConfirm: () => void;
}

export default function CustomizeModal({
  item,
  custSize,
  custAddOns,
  custQty,
  onSelectSize,
  onToggleAddOn,
  onIncQty,
  onDecQty,
  onClose,
  onConfirm,
}: CustomizeModalProps) {
  const hasSizes = !!item.sizes;
  const hasAddOns = !!(item.addOns && item.addOns.length);
  const unit = (item.sizes ? item.sizes[custSize].price : item.price ?? 0) +
    (item.addOns || []).filter((_, i) => custAddOns.includes(i)).reduce((sum, a) => sum + a.price, 0);
  const totalPrice = fmt(unit * custQty);

  const optionStyle = (active: boolean): CSSProperties => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 10,
    width: '100%',
    background: active ? 'oklch(0.5 0.145 40 / 0.12)' : 'white',
    border: `1.5px solid ${active ? 'oklch(0.5 0.145 40)' : 'oklch(0.83 0.015 55)'}`,
    borderRadius: 8,
    padding: '10px 14px',
    cursor: 'pointer',
    whiteSpace: 'nowrap',
    font: "500 13.5px 'Work Sans',sans-serif",
    color: 'oklch(0.27 0.018 55)',
  });

  return (
    <div onClick={onClose} style={{ position: 'fixed', inset: 0, background: 'oklch(0.14 0.012 55 / 0.45)', zIndex: 90, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div onClick={(e) => e.stopPropagation()} style={{ background: 'oklch(0.985 0.006 55)', borderRadius: 14, width: 420, maxWidth: '92vw', maxHeight: '86vh', overflowY: 'auto', padding: 24 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 4 }}>
          <span style={{ font: "600 19px 'Source Serif 4',serif", color: 'oklch(0.27 0.018 55)' }}>{item.name}</span>
          <button onClick={onClose} style={{ background: 'none', border: 'none', cursor: 'pointer', font: '400 22px/1 sans-serif', color: 'oklch(0.5 0.015 55)' }}>×</button>
        </div>
        <p style={{ font: "400 13px/1.5 'Work Sans',sans-serif", color: 'oklch(0.5 0.015 55)', margin: '6px 0 18px' }}>{item.desc}</p>

        {hasSizes && (
          <>
            <div style={{ font: "600 11px 'Work Sans',sans-serif", letterSpacing: '.06em', textTransform: 'uppercase', color: 'oklch(0.5 0.015 55)', marginBottom: 8 }}>Size</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 18 }}>
              {item.sizes!.map((sz, i) => (
                <button key={sz.label} onClick={() => onSelectSize(i)} style={optionStyle(i === custSize)}>
                  <span>{sz.label}</span><span>${fmt(sz.price)}</span>
                </button>
              ))}
            </div>
          </>
        )}

        {hasAddOns && (
          <>
            <div style={{ font: "600 11px 'Work Sans',sans-serif", letterSpacing: '.06em', textTransform: 'uppercase', color: 'oklch(0.5 0.015 55)', marginBottom: 8 }}>Add-ons</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 18 }}>
              {item.addOns!.map((ad, i) => {
                const checked = custAddOns.includes(i);
                return (
                  <button key={ad.label} onClick={() => onToggleAddOn(i)} style={optionStyle(checked)}>
                    <span>{checked ? '☑' : '☐'} {ad.label}</span><span>+${fmt(ad.price)}</span>
                  </button>
                );
              })}
            </div>
          </>
        )}

        <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 18 }}>
          <span style={{ font: "600 11px 'Work Sans',sans-serif", letterSpacing: '.06em', textTransform: 'uppercase', color: 'oklch(0.5 0.015 55)' }}>Qty</span>
          <button onClick={onDecQty} style={{ width: 28, height: 28, borderRadius: 7, border: '1px solid oklch(0.83 0.015 55)', background: 'white', cursor: 'pointer', font: '600 14px sans-serif' }}>−</button>
          <span style={{ font: "600 14px 'Work Sans',sans-serif", minWidth: 16, textAlign: 'center' }}>{custQty}</span>
          <button onClick={onIncQty} style={{ width: 28, height: 28, borderRadius: 7, border: '1px solid oklch(0.83 0.015 55)', background: 'white', cursor: 'pointer', font: '600 14px sans-serif' }}>+</button>
        </div>

        <button onClick={onConfirm} style={{ width: '100%', background: 'oklch(0.27 0.018 55)', color: 'oklch(0.965 0.012 55)', border: 'none', font: "600 14.5px 'Work Sans',sans-serif", padding: 14, borderRadius: 9, cursor: 'pointer' }}>Add to Order — ${totalPrice}</button>
      </div>
    </div>
  );
}
