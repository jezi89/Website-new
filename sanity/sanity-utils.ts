import { Project } from "@/types/Project";
import { createClient, groq } from "next-sanity";

export async function getProjects(): Promise<Project[]> { 

    const client = createClient({
    projectId: "7svjof8c",
    dataset: "production",
    apiVersion: '2023-10-15',
});

return client.fetch(
    groq`*[_type == "project"]{
        _id,
        _createdAt,
        name,
        "slug": slug.current,
        "image": image.asset->url,
        url,
        content

    }`
)
}