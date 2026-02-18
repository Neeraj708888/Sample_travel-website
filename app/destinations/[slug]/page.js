import { supabase } from "../../liv/supabase";


export async function generateMetadata({ params }) {
  const { slug } = await params; // ✅ FIX

  const { data } = await supabase
    .from("destinations")
    .select("*")
    .eq("slug", slug)
    .single();

  if (!data) {
    return {
      title: slug,
      description: `${slug} travel guide`,
    };
  }

  return {
    title: data.meta_title,
    description: data.meta_description,
  };
}

export default async function DestinationPage({ params }) {
  const { slug } = await params; // ✅ FIX

  let { data } = await supabase
    .from("destinations")
    .select("*")
    .eq("slug", slug)
    .single();

  if (!data) {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SITE_URL}/api/generate-content`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ slug }),
      }
    );

    if (!res.ok) {
      return <h1>Failed to generate content</h1>;
    }

    data = await res.json();
  }

  if (!data) {
    return <h1>Page Not Found</h1>;
  }

  return (
    <main style={{ padding: "40px" }}>
      <h1>{data.name}</h1>
      <div dangerouslySetInnerHTML={{ __html: data.content }} />
    </main>
  );
}
