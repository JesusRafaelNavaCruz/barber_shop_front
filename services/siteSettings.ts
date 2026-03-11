import { payloadFetch } from "@/lib/payload";
import { SiteSettings } from "@/types/siteSettings";

export async function getSiteSetting(): Promise<SiteSettings> {
    const res = await payloadFetch<SiteSettings>("/globals/siteSettings");
    if (!res) {
        throw new Error("SiteSettings not found");
    }
    return res;
}