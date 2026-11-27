export const url = (path = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${path.replace(/^\//, '')}`;
export const mail = (address, subject='Anfrage an SDI Deutschland') => `mailto:${address}?subject=${encodeURIComponent(subject)}`;
