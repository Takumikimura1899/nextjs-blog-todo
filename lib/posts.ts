export async function getAllPostsData() {
  const res = await fetch(
    new URL(`${process.env.NEXT_PUBLIC_RESTAPI_URL}api/list-post/`).toString()
  );
  const posts = await res.json();
  const filteredPosts = posts.sort(
    (a: any, b: any) =>
      new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
  );
  return filteredPosts;
}

export async function getAllPostIds() {
  const res = await fetch(
    new URL(`${process.env.NEXT_PUBLIC_RESTAPI_URL}api/list-post/`).toString()
  );
  const posts = await res.json();
  return posts.map((post: { id: string }) => {
    return {
      params: {
        id: post.id,
      },
    };
  });
}

export async function getPostData(id: string) {
  const res = await fetch(
    new URL(
      `${process.env.NEXT_PUBLIC_RESTAPI_URL}apo/detail-post/{id}/`
    ).toString()
  );
  const post = await res.json();
  return {
    post,
  };
}
