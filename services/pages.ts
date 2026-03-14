import { payloadFetch } from "@/lib/payload";
import { PayloadCollection } from "@/types/payloadCollection";
import { Page, PageResponse } from "@/types/pages";

export async function getPages(): Promise<Page[]> {
  const res = await payloadFetch<PayloadCollection<Page>>("/pages");
  if (res.totalDocs === 0) {
    throw new Error("Pages not found");
  }
  return res.docs;
}

export async function getPageBySlug(slug: string): Promise<Page> {
  const pages = await getPages();
  const page = pages.find((p) => p.slug === slug);
  
  if (!page) {
    throw new Error(`Page with slug "${slug}" not found`);
  }
  
  return page;
}
