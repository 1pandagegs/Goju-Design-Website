// Every image exported from the Figma file lives in src/assets/images as <key>.webp.
const files = import.meta.glob("../assets/images/*.{webp,png}", {
  eager: true,
  import: "default",
});

export const images = Object.fromEntries(
  Object.entries(files).map(([path, url]) => [path.split("/").pop().replace(/\.(webp|png)$/, ""), url]),
);

export const img = (key) => images[key];
