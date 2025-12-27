export default function ShortId(id) {
  const short = id?.toString().slice(0, 6).toUpperCase();
  return short;
}
