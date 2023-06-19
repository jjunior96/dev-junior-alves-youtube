import { PostService } from '@/services';
import Rss from 'rss';

const SITE_URL = 'http://localhost:3000';

export async function GET() {
  const { posts: articles } = PostService.getAll();

  const feed = new Rss({
    title: 'Example blog',
    description: 'Lorem ipsum dolor sit amet.',
    feed_url: `${SITE_URL}/rss.xml`,
    site_url: SITE_URL,
    language: 'en'
  });

  articles.forEach((article) => {
    feed.item({
      title: article.title,
      description: article.description,
      url: `${SITE_URL}/blog/${article.slug}`,
      guid: `${SITE_URL}/blog/${article.id}`,
      date: article.publishedAt
    });
  });

  return new Response(feed.xml(), {
    headers: {
      'Content-Type': 'application/xml'
    }
  });
}

// import { writeFileSync } from 'fs';
// import RSS from 'rss';

// import { allBlogs } from '../.contentlayer/generated';

// const feed = new RSS({
//   title: 'Dev Junior Alves',
//   feed_url: 'localhost:3000/rss.xml',
//   site_url: 'localhost:3000'
// });

// allBlogs
//   .map((blog) => ({
//     title: blog.title,
//     description: blog.description,
//     url: `localhost:3000/articles/${blog.slug}`,
//     date: blog.publishedAt
//   }))
//   .forEach((item) => {
//     feed.item(item);
//   });

// writeFileSync('./public/rss.xml', feed.xml({ indent: true }));
