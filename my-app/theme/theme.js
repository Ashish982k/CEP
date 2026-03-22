export const colors = {
  background: '#F6F7FB',
  surface: '#FFFFFF',
  text: '#0F172A',
  mutedText: '#64748B',
  border: '#E6E8F0',
  purple: '#7C3AED',
  blue: '#2563EB',
  green: '#10B981',
  red: '#EF4444',
  amber: '#F59E0B',
};

export const radii = {
  sm: 12,
  md: 16,
  lg: 20,
  xl: 28,
};

export const spacing = {
  xs: 8,
  sm: 12,
  md: 16,
  lg: 20,
  xl: 24,
  xxl: 32,
};

export const typography = {
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: colors.text,
  },
  h1: {
    fontSize: 22,
    fontWeight: '700',
    color: colors.text,
  },
  h2: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.text,
  },
  body: {
    fontSize: 15,
    fontWeight: '500',
    color: colors.text,
  },
  muted: {
    fontSize: 13,
    fontWeight: '500',
    color: colors.mutedText,
  },
};

export const shadows = {
  card: {
    shadowColor: '#0B1220',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.08,
    shadowRadius: 18,
    elevation: 6,
  },
  soft: {
    shadowColor: '#0B1220',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.06,
    shadowRadius: 14,
    elevation: 4,
  },
};

export const gradients = {
  primary: ['#7C3AED', '#2563EB'],
  success: ['#10B981', '#22C55E'],
  cool: ['#2563EB', '#06B6D4'],
};
