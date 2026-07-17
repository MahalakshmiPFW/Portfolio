import type { CSSProperties } from 'react';
import type { CartLine, PickupMode } from './types';

interface CartPanelProps {
  onClose: () => void;
  orderPlaced: boolean;
  orderNumber: number | null;
  pickupLabel: string;
  onResetOrder: () => void;
  cart: CartLine[];
  onGoMenuFromCart: () => void;
  onUpdateQty: (key: string, delta: number) => void;
  onRemoveLine: (key: string) => void;
  pickupMode: PickupMode;
  onSetPickupAsap: () => void;
  onSetPickupScheduled: () => void;
  scheduledTime: string;
  onSetScheduledTime: (time: string) => void;
  timeSlots: string[];
  cartSubtotal: string;
  onPlaceOrder: () => void;
  chipStyle: (active: boolean) => CSSProperties;
}

export default function CartPanel({
  onClose,
  orderPlaced,
  orderNumber,
  pickupLabel,
  onResetOrder,
  cart,
  onGoMenuFromCart,
  onUpdateQty,
  onRemoveLine,
  pickupMode,
  onSetPickupAsap,
  onSetPickupScheduled,
  scheduledTime,
  onSetScheduledTime,
  timeSlots,
  cartSubtotal,
  onPlaceOrder,
  chipStyle,
}: CartPanelProps) {
  const cartEmpty = cart.length === 0;

  return (
    <>
      <div onClick={onClose} style={{ position: 'fixed', inset: 0, background: 'oklch(0.14 0.012 55 / 0.4)', zIndex: 70 }} />
      <div style={{ position: 'fixed', top: 0, right: 0, bottom: 0, width: 420, maxWidth: '92vw', background: 'oklch(0.975 0.007 55)', zIndex: 80, boxShadow: '-16px 0 40px oklch(0.18 0.015 55 / 0.2)', display: 'flex', flexDirection: 'column' }}>
        <div style={{ padding: '20px 22px', borderBottom: '1px solid oklch(0.87 0.014 55)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <span style={{ font: "600 18px 'Source Serif 4',serif", color: 'oklch(0.27 0.018 55)' }}>Your Order</span>
          <button onClick={onClose} style={{ background: 'none', border: 'none', cursor: 'pointer', font: '400 22px/1 sans-serif', color: 'oklch(0.5 0.015 55)' }}>×</button>
        </div>

        {orderPlaced && (
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: 40, textAlign: 'center', gap: 14 }}>
            <div style={{ width: 56, height: 56, borderRadius: '50%', background: 'oklch(0.58 0.11 140 / 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 26, color: 'oklch(0.4 0.1 140)' }}>✓</div>
            <div style={{ font: "600 19px 'Source Serif 4',serif", color: 'oklch(0.27 0.018 55)' }}>Order confirmed</div>
            <div style={{ font: "400 13.5px/1.6 'Work Sans',sans-serif", color: 'oklch(0.5 0.015 55)', maxWidth: 280 }}>Order #{orderNumber} · {pickupLabel}<br />We'll have it ready at the counter.</div>
            <button onClick={onResetOrder} style={{ marginTop: 8, background: 'oklch(0.27 0.018 55)', color: 'oklch(0.965 0.012 55)', border: 'none', font: "600 13.5px 'Work Sans',sans-serif", padding: '12px 22px', borderRadius: 8, cursor: 'pointer', whiteSpace: 'nowrap' }}>Start a new order</button>
          </div>
        )}

        {!orderPlaced && (
          <>
            {cartEmpty ? (
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 10, padding: 40, textAlign: 'center' }}>
                <div style={{ font: "400 14px 'Work Sans',sans-serif", color: 'oklch(0.5 0.015 55)' }}>Your cart is empty.</div>
                <button onClick={onGoMenuFromCart} style={{ background: 'oklch(0.5 0.145 40)', color: 'white', border: 'none', font: "600 13px 'Work Sans',sans-serif", padding: '10px 18px', borderRadius: 7, cursor: 'pointer' }}>Browse the menu</button>
              </div>
            ) : (
              <>
                <div style={{ flex: 1, overflowY: 'auto', padding: '14px 22px' }}>
                  {cart.map((line) => {
                    const optionsText = [line.sizeLabel, ...line.addOns.map((a) => a.label)].filter(Boolean).join(', ');
                    const lineTotal = (line.unitPrice * line.qty).toFixed(2);
                    return (
                      <div key={line.key} style={{ display: 'flex', gap: 12, padding: '14px 0', borderBottom: '1px solid oklch(0.885 0.011 55)' }}>
                        <div style={{ flex: 1 }}>
                          <div style={{ font: "600 14px 'Work Sans',sans-serif", color: 'oklch(0.27 0.018 55)' }}>{line.name}</div>
                          {optionsText && (
                            <div style={{ font: "400 12px 'Work Sans',sans-serif", color: 'oklch(0.5 0.015 55)', marginTop: 2 }}>{optionsText}</div>
                          )}
                          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginTop: 8 }}>
                            <button onClick={() => onUpdateQty(line.key, -1)} style={{ width: 24, height: 24, borderRadius: 6, border: '1px solid oklch(0.83 0.015 55)', background: 'white', cursor: 'pointer', font: '600 13px sans-serif', color: 'oklch(0.27 0.018 55)' }}>−</button>
                            <span style={{ font: "600 13px 'Work Sans',sans-serif", minWidth: 14, textAlign: 'center' }}>{line.qty}</span>
                            <button onClick={() => onUpdateQty(line.key, 1)} style={{ width: 24, height: 24, borderRadius: 6, border: '1px solid oklch(0.83 0.015 55)', background: 'white', cursor: 'pointer', font: '600 13px sans-serif', color: 'oklch(0.27 0.018 55)' }}>+</button>
                            <button onClick={() => onRemoveLine(line.key)} style={{ marginLeft: 'auto', background: 'none', border: 'none', font: "400 11.5px 'Work Sans',sans-serif", color: 'oklch(0.5 0.1 32)', cursor: 'pointer', textDecoration: 'underline' }}>Remove</button>
                          </div>
                        </div>
                        <div style={{ font: "700 14px 'Work Sans',sans-serif", color: 'oklch(0.27 0.018 55)', whiteSpace: 'nowrap' }}>${lineTotal}</div>
                      </div>
                    );
                  })}
                </div>

                <div style={{ padding: '16px 22px', borderTop: '1px solid oklch(0.87 0.014 55)' }}>
                  <div style={{ font: "600 11px 'Work Sans',sans-serif", letterSpacing: '.06em', textTransform: 'uppercase', color: 'oklch(0.5 0.015 55)', marginBottom: 8 }}>Pickup</div>
                  <div style={{ display: 'flex', gap: 8, marginBottom: 12 }}>
                    <button onClick={onSetPickupAsap} style={chipStyle(pickupMode === 'asap')}>ASAP (~12 min)</button>
                    <button onClick={onSetPickupScheduled} style={chipStyle(pickupMode === 'scheduled')}>Schedule</button>
                  </div>
                  {pickupMode === 'scheduled' && (
                    <select
                      onChange={(e) => onSetScheduledTime(e.target.value)}
                      value={scheduledTime}
                      style={{ width: '100%', font: "400 13px 'Work Sans',sans-serif", padding: '9px 10px', borderRadius: 7, border: '1px solid oklch(0.83 0.015 55)', marginBottom: 14, background: 'white', color: 'oklch(0.27 0.018 55)' }}
                    >
                      {timeSlots.map((slot) => (
                        <option key={slot} value={slot}>{slot}</option>
                      ))}
                    </select>
                  )}
                  <div style={{ display: 'flex', justifyContent: 'space-between', font: "600 15px 'Work Sans',sans-serif", color: 'oklch(0.27 0.018 55)', marginBottom: 14 }}>
                    <span>Subtotal</span><span>${cartSubtotal}</span>
                  </div>
                  <button onClick={onPlaceOrder} style={{ width: '100%', background: 'oklch(0.27 0.018 55)', color: 'oklch(0.965 0.012 55)', border: 'none', font: "600 14.5px 'Work Sans',sans-serif", padding: 14, borderRadius: 9, cursor: 'pointer' }}>Place Order — ${cartSubtotal}</button>
                </div>
              </>
            )}
          </>
        )}
      </div>
    </>
  );
}
