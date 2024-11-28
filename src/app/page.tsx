import Link from "next/link";
import { db } from "../server/db"; // Adjust the path as needed

const mockUrls = [
  "https://utfs.io/f/MOA66ou6ZmXlYsDU3b0yzPBVXvwFGD5n1ps2LbIcMxue60Yl",
  "https://utfs.io/f/MOA66ou6ZmXlfQ6umfa8MJPjWIdvzXmDGpUCu7s2tYScEZgR",
  "https://utfs.io/f/MOA66ou6ZmXlz5InCEZOCHhFtaryTRxS5iGDk8sp2YQJeXw4",
  "https://utfs.io/f/MOA66ou6ZmXlJaWakevzOlJ9FvDmuaey8k2QtUVRKE0ZoxXA",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default async function HomePage() {
  const posts = await db.query.posts.findMany();
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {posts.map((post) => (
          <div key={post.id}>{post.name}</div>
        ))}

        {[...mockImages, ...mockImages, ...mockImages].map((image) => (
          <div key={image.id} className="w-48">
            <img src={image.url} alt="image" />
          </div>
        ))}
      </div>
    </main>
  );
}
