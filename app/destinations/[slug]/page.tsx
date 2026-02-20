import { supabase } from "@/app/liv/supabase";
import { notFound } from "next/navigation";

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function DestinationPage({ params }: Props) {
  const { slug } = await params; // ❌ no await here


  console.log("Slug:", slug);
  /* 1️⃣ Check DB */
  const { data, error } = await supabase
    .from("destinations")
    .select("*")
    .eq("slug", slug)
    .maybeSingle();

  if (error) {
    console.error("Supabase Error:", error);
  }


  let destination = data;

  console.log("Destination from DB:", destination);

  /* 2️⃣ If not exist → Call API */
  if (!destination) {
    try {
      const res = await fetch(`/api/generate-destination`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ slug }),
        cache: "no-store", // important for dynamic generation
      });

      if (!res.ok) {
        notFound();
      }

      destination = await res.json();
    } catch (err) {
      console.error("API Error:", err);
      notFound();
    }
  }

  /* 3️⃣ Final check */
  if (!destination) {
    notFound();
  }

  return (
    <main className="p-10">
      <h1 className="text-4xl font-bold mb-4">
        {destination.name}
      </h1>

      <div
        dangerouslySetInnerHTML={{
          __html: destination.content,
        }}
      />
    </main>
  );
}
