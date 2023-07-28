export default function truncateImageLink(image: string): string {
  const imagePreTruncated = image.substring(7, image.length);
  if (imagePreTruncated.length < 20) {
    return imagePreTruncated;
  } else {
    const imageFirstPart = imagePreTruncated.substring(0, 10);
    const imageLastPart = imagePreTruncated.substring(
      imagePreTruncated.length - 10,
      imagePreTruncated.length
    );
    const imageTruncate = `${imageFirstPart}(...)${imageLastPart}`;
    return imageTruncate;
  }
}
