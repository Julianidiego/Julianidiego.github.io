export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  readingTime: string;
  content: string[];
};

const postsDirectory = path.join(process.cwd(), 'content', 'blog');

export const blogPosts: BlogPost[] = fs
  .readdirSync(postsDirectory)
  .filter((fileName) => fileName.endsWith('.json'))
  .map((fileName) => JSON.parse(fs.readFileSync(path.join(postsDirectory, fileName), 'utf8')) as BlogPost)
  .sort((a, b) => b.date.localeCompare(a.date));

export { blogPostsData };
import fs from 'node:fs';
import path from 'node:path';
import { blogPostsData } from './blog-data';
