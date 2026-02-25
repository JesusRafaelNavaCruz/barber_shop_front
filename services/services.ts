import { payloadFetch } from "@/lib/payload";
import { PayloadCollection } from "@/types/payloadCollection";
import { Services } from "@/types/services";

export async function getServices(): Promise<Services[]> {
    const res = await payloadFetch<PayloadCollection<Services>>("/services")
    if (res.totalDocs === 0) {
        throw new Error("Services not found");
    }
    return res.docs;
}