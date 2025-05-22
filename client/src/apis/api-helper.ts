// ======================= Functions =====================
/**
 * getStrapiURL
 * Returns the full Strapi API URL for a given path.
 */
export const getStrapiURL = (path = "") => {
  return `${
    process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337"
  }${path}`;
};

/**
 * getStrapiMedia
 * Returns the full media URL, handling both absolute and relative URLs.
 */
export const getStrapiMedia = (url: string) => {
  if (url.startsWith("http") || url.startsWith("//")) {
    return url;
  }

  return `${getStrapiURL()}${url}`;
};

/**
 * formatDate
 * Formats a date string into a human-readable format (e.g., 'May 22, 2025').
 */
export const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return date.toLocaleDateString("en-US", options);
};
