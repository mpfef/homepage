export const getAssetPath = (path: string) => {
  const isProd = process.env.NODE_ENV === 'production';
  const prefix = isProd ? '/homepage' : '';

  // Clean up the path to ensure no double slashes
  const cleanPath = path.startsWith('/') ? path : `/${path}`;

  return `${prefix}${cleanPath}`;
};
