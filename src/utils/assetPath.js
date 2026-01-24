/**
 * Helper function to get the correct asset path for production and development
 * Automatically adds the base URL (e.g., /Portfolio/) in production
 */
export const getAssetPath = (path) => {
  // Remove leading slash if present
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  // import.meta.env.BASE_URL will be "/" in dev and "/Portfolio/" in production
  return `${import.meta.env.BASE_URL}${cleanPath}`;
};
