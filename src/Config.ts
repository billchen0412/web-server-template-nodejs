export const isDev = process.env.NODE_ENV !== 'production';
export const serverPort = isDev ? 9100 : 8100;
