import "./StatusBadge.css";

const STATUS_CONFIG = {
  results_available:  { label: "Results Available",   className: "status-badge--success"    },
  results_processing: { label: "Results Processing",  className: "status-badge--processing" },
  not_yet_available:  { label: "Not Yet Available",    className: "status-badge--pending"    },
  pass:               { label: "Pass",                 className: "status-badge--success"    },
  fail:               { label: "Fail",                 className: "status-badge--fail"       },
};

/**
 * Small coloured pill badge.
 *
 * @param {{ status: string, customLabel?: string }} props
 */
export default function StatusBadge({ status, customLabel }) {
  const config = STATUS_CONFIG[status] || { label: status, className: "status-badge--default" };
  return (
    <span className={`status-badge ${config.className}`}>
      {customLabel || config.label}
    </span>
  );
}
