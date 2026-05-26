export const AVATAR_COLORS = [
    '#10b981',
    '#0ea5e9',
    '#8b5cf6',
    '#f59e0b',
    '#ef4444',
    '#06b6d4',
    '#ec4899',
    '#14b8a6',
];

export const initials = (name = '') =>
    name
        .split(' ')
        .slice(0, 2)
        .map((w) => w[0])
        .join('')
        .toUpperCase();

export const likesToStars = (likes) => Math.min(Math.max(likes, 1), 5);
