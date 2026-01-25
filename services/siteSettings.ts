import { payloadFetch } from "@/lib/payload";
import { PayloadCollection } from "@/types/payloadCollection";
import { SiteSettings } from "@/types/siteSettings";

export async function getSiteSetting(): Promise<SiteSettings> {
    const res = await payloadFetch<PayloadCollection<SiteSettings>>('/siteSettings?limit=1')
    if (res.totalDocs = 0) {
        throw new Error("SiteSettings not found")
    }

    return res.docs[0];
}