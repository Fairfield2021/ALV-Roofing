const trustSignals = [
  '400+ 5-Star Reviews',
  'GAF Master Elite',
  'Owens Corning Platinum',
  'BBB A+',
  "Workers' Comp Covered",
]

export default function TrustBar() {
  return (
    <div className="bg-brand-red w-full">
      {/* Mobile: horizontal scroll — single clean row, no wrapping */}
      <div className="sm:hidden overflow-x-auto scrollbar-none">
        <ul className="flex items-center w-max px-4 py-3 gap-0">
          {trustSignals.map((signal, i) => (
            <li key={signal} className="flex items-center shrink-0">
              <span className="font-body font-semibold text-white text-xs uppercase tracking-wide whitespace-nowrap px-3">
                {signal}
              </span>
              {i < trustSignals.length - 1 && (
                <span className="text-white/40 select-none" aria-hidden="true">|</span>
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* sm+: centered wrap layout */}
      <div className="hidden sm:block max-w-7xl mx-auto px-6 lg:px-8 py-3">
        <ul className="flex flex-wrap items-center justify-center gap-y-1">
          {trustSignals.map((signal, i) => (
            <li key={signal} className="flex items-center">
              <span className="font-body font-semibold text-white text-sm uppercase tracking-wide whitespace-nowrap px-4">
                {signal}
              </span>
              {i < trustSignals.length - 1 && (
                <span className="text-white/40 select-none" aria-hidden="true">|</span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
