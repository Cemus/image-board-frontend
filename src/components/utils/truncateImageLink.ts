export default function truncateImageLink(image: string): string {
  const imagePreTruncated = image.substring(7, image.length);
  if (imagePreTruncated.length < 20) {
    return imagePreTruncated;
  } else {
    const imageLastPart = imagePreTruncated.substring(
      imagePreTruncated.length - 12,
      imagePreTruncated.length
    );
    const imageTruncate = `(...)${imageLastPart}`;
    return imageTruncate;
  }
}
