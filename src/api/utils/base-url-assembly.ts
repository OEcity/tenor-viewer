export default function () {
  const url = import.meta.env.VITE_TENOR_URL;
  const apiVersion = import.meta.env.VITE_TENOR_API_VERSION;
  return `${url}/${apiVersion}/`;
}
