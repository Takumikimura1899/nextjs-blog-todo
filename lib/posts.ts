export type Post = {
  id: string;
  title: string;
  created_at: string;
  content: string;
};

export async function getAllPostsData() {
  const res = await fetch(
    new URL(`${process.env.NEXT_PUBLIC_RESTAPI_URL}api/list-post/`).toString()
  );
  const posts = await res.json();
  const filteredPosts = posts.sort(
    (a: Post, b: Post) =>
      new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
  );
  return filteredPosts;
}

export async function getAllPostIds() {
  const res = await fetch(
    new URL(`${process.env.NEXT_PUBLIC_RESTAPI_URL}api/list-post/`).toString()
  );
  const posts = await res.json();
  return posts.map((post: Post) => {
    const id = post.id.toString();
    return {
      params: {
        id,
      },
    };
  });
}

export async function getPostData(id: string | number) {
  const res = await fetch(
    new URL(
      `${process.env.NEXT_PUBLIC_RESTAPI_URL}api/detail-post/${id}/`
    ).toString()
  );
  const post = await res.json();
  return {
    post,
  };
}
