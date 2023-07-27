export default function idFormat(id: string): string {
  const idNumber = id.replace(/\D/g, "");
  return idNumber.substring(0, 8);
}
