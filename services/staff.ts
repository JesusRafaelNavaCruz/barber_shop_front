import { payloadFetch } from "@/lib/payload";
import { PayloadCollection } from "@/types/payloadCollection";
import { Staff } from "@/types/staff";

export async function getStaff(): Promise<Staff[]> {
    const res = await payloadFetch<PayloadCollection<Staff>>("/staff");
    if (res.totalDocs === 0) {
        throw new Error("Staff not found");
    }
    return res.docs;
}