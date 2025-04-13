export const generateSlugWithTimestamp = (title: string, id: number): string => {

  const slug = title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

  return `${slug}.${id}`;
};

