import { useState } from 'react';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';
import { Link } from 'react-router';
import { MapPin } from 'lucide-react';
import { Expert } from '../data/mockData';

const GEO_URL = 'https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json';

const FIPS_TO_ABBR: Record<string, string> = {
  '01': 'AL', '02': 'AK', '04': 'AZ', '05': 'AR', '06': 'CA',
  '08': 'CO', '09': 'CT', '10': 'DE', '11': 'DC', '12': 'FL',
  '13': 'GA', '15': 'HI', '16': 'ID', '17': 'IL', '18': 'IN',
  '19': 'IA', '20': 'KS', '21': 'KY', '22': 'LA', '23': 'ME',
  '24': 'MD', '25': 'MA', '26': 'MI', '27': 'MN', '28': 'MS',
  '29': 'MO', '30': 'MT', '31': 'NE', '32': 'NV', '33': 'NH',
  '34': 'NJ', '35': 'NM', '36': 'NY', '37': 'NC', '38': 'ND',
  '39': 'OH', '40': 'OK', '41': 'OR', '42': 'PA', '44': 'RI',
  '45': 'SC', '46': 'SD', '47': 'TN', '48': 'TX', '49': 'UT',
  '50': 'VT', '51': 'VA', '53': 'WA', '54': 'WV', '55': 'WI',
  '56': 'WY',
};

const ABBR_TO_NAME: Record<string, string> = {
  AL: 'Alabama', AK: 'Alaska', AZ: 'Arizona', AR: 'Arkansas', CA: 'California',
  CO: 'Colorado', CT: 'Connecticut', DE: 'Delaware', DC: 'D.C.', FL: 'Florida',
  GA: 'Georgia', HI: 'Hawaii', ID: 'Idaho', IL: 'Illinois', IN: 'Indiana',
  IA: 'Iowa', KS: 'Kansas', KY: 'Kentucky', LA: 'Louisiana', ME: 'Maine',
  MD: 'Maryland', MA: 'Massachusetts', MI: 'Michigan', MN: 'Minnesota', MS: 'Mississippi',
  MO: 'Missouri', MT: 'Montana', NE: 'Nebraska', NV: 'Nevada', NH: 'New Hampshire',
  NJ: 'New Jersey', NM: 'New Mexico', NY: 'New York', NC: 'North Carolina', ND: 'North Dakota',
  OH: 'Ohio', OK: 'Oklahoma', OR: 'Oregon', PA: 'Pennsylvania', RI: 'Rhode Island',
  SC: 'South Carolina', SD: 'South Dakota', TN: 'Tennessee', TX: 'Texas', UT: 'Utah',
  VT: 'Vermont', VA: 'Virginia', WA: 'Washington', WV: 'West Virginia', WI: 'Wisconsin',
  WY: 'Wyoming',
};

interface Props {
  experts: Expert[];
  compact?: boolean;
}

interface HoveredState {
  abbr: string;
  name: string;
  experts: Expert[];
  x: number;
  y: number;
}

export function USMap({ experts, compact = false }: Props) {
  const [hovered, setHovered] = useState<HoveredState | null>(null);

  const expertsByState: Record<string, Expert[]> = {};
  experts.forEach((expert) => {
    const parts = expert.location.split(', ');
    const abbr = parts[parts.length - 1];
    if (abbr) {
      if (!expertsByState[abbr]) expertsByState[abbr] = [];
      expertsByState[abbr].push(expert);
    }
  });

  const getFill = (abbr: string) => {
    const count = expertsByState[abbr]?.length ?? 0;
    if (count === 0) return 'var(--color-gray-200, #e5e7eb)';
    if (count === 1) return 'var(--color-blue-200, #bfdbfe)';
    return 'var(--color-blue-600, #2563eb)';
  };

  const handleMouseMove = (e: React.MouseEvent, abbr: string) => {
    setHovered({
      abbr,
      name: ABBR_TO_NAME[abbr] ?? abbr,
      experts: expertsByState[abbr] ?? [],
      x: e.clientX,
      y: e.clientY,
    });
  };

  return (
    <div style={compact ? undefined : { maxWidth: 1000 }} className={compact ? undefined : 'mx-auto'}>
      {!compact && (
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-xl font-bold text-gray-900">Find Experts Near You</h2>
            <p className="text-sm text-gray-500 mt-0.5">Hover over a state to see available specialists</p>
          </div>
          <div className="hidden sm:flex items-center gap-4 text-xs text-gray-500">
            <span className="flex items-center gap-1.5">
              <span className="w-4 h-4 rounded bg-gray-200 inline-block" /> No experts
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-4 h-4 rounded bg-blue-200 inline-block" /> 1 expert
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-4 h-4 rounded bg-blue-600 inline-block" /> 2+ experts
            </span>
          </div>
        </div>
      )}

      <div className="relative" onMouseLeave={() => setHovered(null)}>
        <ComposableMap
          projection="geoAlbersUsa"
          className="w-full"
          style={{ height: 'auto' }}
        >
          <Geographies geography={GEO_URL}>
            {({ geographies }) =>
              geographies.map((geo) => {
                const abbr = FIPS_TO_ABBR[String(geo.id).padStart(2, '0')] ?? '';
                const isHovered = hovered?.abbr === abbr;
                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill={getFill(abbr)}
                    stroke="#fff"
                    strokeWidth={0.75}
                    style={{
                      default: { outline: 'none', opacity: 1 },
                      hover: { outline: 'none', opacity: 0.8, cursor: 'pointer' },
                      pressed: { outline: 'none' },
                    }}
                    className="transition-opacity duration-150"
                    onMouseMove={(e) => handleMouseMove(e, abbr)}
                  />
                );
              })
            }
          </Geographies>
        </ComposableMap>

        {/* Tooltip */}
        {hovered && (
          <div
            className="fixed z-50 pointer-events-none"
            style={{
              left: hovered.x,
              top: hovered.y,
              transform: 'translate(-50%, calc(-100% - 14px))',
            }}
          >
            <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 p-4 w-64">
              <div className="flex items-center gap-2 mb-3 pb-2 border-b border-gray-100">
                <MapPin size={14} className="text-blue-600 shrink-0" />
                <span className="font-bold text-gray-900 text-sm">{hovered.name}</span>
                {hovered.experts.length > 0 && (
                  <span className="ml-auto text-xs bg-blue-100 text-blue-700 font-semibold px-2 py-0.5 rounded-full">
                    {hovered.experts.length} {hovered.experts.length === 1 ? 'expert' : 'experts'}
                  </span>
                )}
              </div>
              {hovered.experts.length > 0 ? (
                <div className="space-y-2">
                  {hovered.experts.map((expert) => (
                    <div key={expert.id} className="flex items-center gap-3">
                      <img
                        src={expert.image}
                        alt={expert.name}
                        className="w-9 h-9 rounded-full object-cover shrink-0"
                      />
                      <div className="min-w-0">
                        <p className="font-semibold text-sm text-gray-900 truncate">{expert.name}</p>
                        <p className="text-xs text-gray-500 truncate">{expert.specialty}</p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-sm text-gray-400">No experts in this state yet</p>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
