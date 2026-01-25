const API_URL = process.env.NEXT_PUBLIC_PAYLOAD_URL;

export async function payloadFetch<T>(
  endpoint: string,
  options?: RequestInit,
): Promise<T> {
    const res = await fetch(`${API_URL}/api/${endpoint}`, {
        ...options,
        next: {revalidate: 60}
    });

    if (!res.ok) {
        throw new Error("Error fetching Payload data");
    }

    return res.json();
}
