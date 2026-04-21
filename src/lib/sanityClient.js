import { createClient } from "@sanity/client";

export const client = createClient({
    projectId: "gx9ecsrm",
    dataset: "production",
    useCdn: true,
    apiVersion: "2023-01-01",
});
