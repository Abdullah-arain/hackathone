import { createClient } from "next-sanity";

export const client = createClient({
    apiVersion : "v2023-07-19",
    dataset : "production",
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    token: process.env.NEXT_PUBLIC_SANITY_ACCESS,
    useCdn: true,
})