const apiUrl = import.meta.env.VITE_API_LOCAL;
const apiPublic = import.meta.env.VITE_API_PUBLIC;

function get_api_url() {
  if (import.meta.env.VITE_APP_PRODUCTION === "true") return apiPublic;
  return apiUrl;
}

export { get_api_url };
