import "./PerformanceSummary.css";

/**
 * Renders a row of summary stat cards.
 *
 * @param {{ cards: Array<{ label: string, value: string|number, icon?: string, note?: string }> }} props
 */
export default function PerformanceSummary({ cards }) {
  return (
    <div className="perf-summary">
      {cards.map((card, idx) => (
        <div className="perf-summary__card" key={idx}>
          {card.icon && <span className="perf-summary__icon">{card.icon}</span>}
          <span className="perf-summary__value">{card.value}</span>
          <span className="perf-summary__label">{card.label}</span>
          {card.note && <span className="perf-summary__note">{card.note}</span>}
        </div>
      ))}
    </div>
  );
}
