import { ArrowOutwardOutlined } from "@mui/icons-material";
import React from "react";

// BlogPosts Component
const Blog = () => {
  return (
    <section className="blog-posts py-8">
  <div className="container mx-auto px-4">
    <header className="mb-8">
      <div className="flex justify-between items-center mb-4">
        {/* Red heading "Our Blog" */}
        <h2 className="text-xl font-semibold text-red-500">Our Blog</h2>

        {/* "View all posts" Button for larger devices */}
        <a
          href="/all-posts"
          className="text-white bg-red-500 hover:bg-red-600 font-semibold py-2 px-4 rounded-md hidden sm:block"
        >
          View all posts
        </a>
      </div>

      {/* Blog title and description */}
      <h3 className="text-2xl font-bold text-gray-900 mt-4">
        Latest blog posts
      </h3>
      <p className="text-gray-600 mt-2">
        Tools and strategies modern teams need to help their companies grow.
      </p>
    </header>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <article className="post bg-white rounded-lg shadow p-4">
        <img
          src="src/assets/Image.png"
          alt="UX review presentations"
          className="rounded-t-lg mb-4"
        />
        <div className="post-details">
          <span className="category text-red-500 text-sm font-medium">
            Design
          </span>
          <div className="flex items-center justify-between mt-2">
            <h3 className="text-lg font-semibold text-gray-800">
              UX review presentations
            </h3>
            <ArrowOutwardOutlined />
          </div>
          <p className="text-gray-600 text-sm mt-2">
            How do you create compelling presentations that wow your colleagues
            and impress your managers?
          </p>
          <div className="author flex items-center mt-4">
            <img
              src="/src/assets/Avatar (2).png"
              alt="Olivia Rhye"
              className="w-8 h-8 rounded-full mr-2"
            />
            <div>
              <span className="block text-gray-800 text-sm font-medium">
                Olivia Rhye
              </span>
              <span className="block text-gray-500 text-xs">20 Jan 2024</span>
            </div>
          </div>
        </div>
      </article>
      <article className="post bg-white rounded-lg shadow p-4">
        <img
          src="src/assets/Image (1).png"
          alt="Migrating to Linear 101"
          className="rounded-t-lg mb-4"
        />
        <div className="post-details">
          <span className="category text-red-500 text-sm font-medium">
            Product
          </span>
          <div className="flex items-center justify-between mt-2">
            <h3 className="text-lg font-semibold text-gray-800">
              Migrating to Linear 101
            </h3>
            <ArrowOutwardOutlined />
          </div>
          <p className="text-gray-600 text-sm mt-2">
            Linear helps streamline software projects, sprints, tasks, and bug
            tracking. Here’s how to get started.
          </p>
          <div className="author flex items-center mt-4">
            <img
              src="/src/assets/Avatar (5).png"
              alt="Phoenix Baker"
              className="w-8 h-8 rounded-full mr-2"
            />
            <div>
              <span className="block text-gray-800 text-sm font-medium">
                Phoenix Baker
              </span>
              <span className="block text-gray-500 text-xs">19 Jan 2024</span>
            </div>
          </div>
        </div>
      </article>
      <article className="post bg-white rounded-lg shadow p-4">
        <img
          src="src/assets/Image (2).png"
          alt="Building your API stack"
          className="rounded-t-lg mb-4"
        />
        <div className="post-details">
          <span className="category text-red-500 text-sm font-medium">
            Software Engineering
          </span>
          <div className="flex items-center justify-between mt-2">
            <h3 className="text-lg font-semibold text-gray-800">
              Building your API stack
            </h3>
            <ArrowOutwardOutlined />
          </div>
          <p className="text-gray-600 text-sm mt-2">
            The rise of RESTful APIs has been met by a rise in tools for
            creating, testing, and managing them.
          </p>
          <div className="author flex items-center mt-4">
            <img
              src="/src/assets/Avatar (6).png"
              alt="Lana Steiner"
              className="w-8 h-8 rounded-full mr-2"
            />
            <div>
              <span className="block text-gray-800 text-sm font-medium">
                Lana Steiner
              </span>
              <span className="block text-gray-500 text-xs">18 Jan 2024</span>
            </div>
          </div>
        </div>
      </article>
    </div>

    {/* "View all posts" button only at the bottom for smaller devices */}
    <div className="flex justify-center mt-6 sm:mt-8">
      <a
        href="/all-posts"
        className="text-white bg-red-500 hover:bg-red-600 font-semibold py-2 px-4 rounded-md sm:hidden"
      >
        View all posts
      </a>
    </div>
  </div>
</section>

  );
};

export default Blog;
