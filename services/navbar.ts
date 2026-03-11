import { payloadFetch } from "@/lib/payload";
import { NavbarData } from "@/types/navbar";

export async function getNavbarLinks(): Promise<NavbarData> {
  const res = await payloadFetch<NavbarData>("/globals/navbar");
  if (!res) {
    throw new Error("Navbar data not found");
  }
  return res;
}
