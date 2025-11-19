import Link from "next/link";

export default function Blogs() {
    const blogs =[{
        id:1,
        title: "Blog 1",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae obcaecati quidem incidunt unde atque pariatur natus est perferendis blanditiis veniam."
    },{
        id:2,
        title: "Blog 2",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae obcaecati quidem incidunt unde atque pariatur natus est perferendis blanditiis veniam."
    }];
  return (
   <main className="mt-10 "> 
     <div className="text-cyan-500">
      Blogs page
    </div>
    <ul>
        {blogs.map((blog) => (
            <li className="mt-6" key={blog.id}><Link href={`/blog/${blog.id}`}>{blog.title}</Link></li>
            ))}
    </ul>
   </main>
  );
}