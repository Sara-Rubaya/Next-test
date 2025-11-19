// app/blog/[id]/page.tsx
interface BlogPageProps {
  params: { id: string };
}

export default async function BlogPage({ params }: BlogPageProps) {
  const resolvedParams = await params;  
  const { id} = resolvedParams;

  return (
    <div >
      <h1 className="p-4 text-xl">The blog is: {id}</h1>
     
    </div>
  );
}
