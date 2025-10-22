export default function sitemap() {
  const base = "https://rosies-country-cafe.vercel.app";
  return [
    { url: `${base}/`, lastModified: new Date() },
    { url: `${base}/menu`, lastModified: new Date() },
    { url: `${base}/about`, lastModified: new Date() },
    { url: `${base}/gallery`, lastModified: new Date() },
    { url: `${base}/contact`, lastModified: new Date() },
    { url: `${base}/order`, lastModified: new Date() }
  ];
}
