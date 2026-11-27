import sizes from '../data/image-dimensions.json';
export const imageSize = src => { if (!sizes[src]) throw new Error('Bildabmessungen fehlen: '+src); return sizes[src]; };
