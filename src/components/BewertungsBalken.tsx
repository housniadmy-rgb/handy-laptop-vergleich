interface BewertungsBalkenProps {
  label: string;
  wert: number;
  maxWert?: number;
}

export default function BewertungsBalken({ label, wert, maxWert = 10 }: BewertungsBalkenProps) {
  const prozent = (wert / maxWert) * 100;
  return (
    <div className="flex items-center gap-3">
      <span className="text-sm text-gray-600 w-32 flex-shrink-0">{label}</span>
      <div className="flex-1 bg-gray-200 rounded-full h-2">
        <div
          className="bg-blue-600 h-2 rounded-full transition-all"
          style={{ width: `${prozent}%` }}
        />
      </div>
      <span className="text-sm font-semibold text-gray-700 w-8 text-right">{wert}</span>
    </div>
  );
}
