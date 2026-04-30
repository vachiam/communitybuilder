const STORAGE_KEY = 'ibd-brand-colors';

export const defaultColors = {
  primary: '#2563EB',
  secondary: '#1E40AF',
};

export function loadColors(): typeof defaultColors {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? { ...defaultColors, ...JSON.parse(saved) } : defaultColors;
  } catch {
    return defaultColors;
  }
}

export function applyColors(colors: typeof defaultColors) {
  document.documentElement.style.setProperty('--brand-primary', colors.primary);
  document.documentElement.style.setProperty('--brand-secondary', colors.secondary);
}

export function saveColors(colors: typeof defaultColors) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(colors));
  applyColors(colors);
}
