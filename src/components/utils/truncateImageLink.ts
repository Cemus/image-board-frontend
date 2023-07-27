export default function truncateImageLink(image: string): string {
  if (image.length < 20) {
    return image;
  } else {
    const imageFirstPart = image.substring(0, 10);
    const imageLastPart = image.substring(image.length - 10, image.length);
    const imageTruncate = `${imageFirstPart}(...)${imageLastPart}`;
    return imageTruncate;
  }
}
