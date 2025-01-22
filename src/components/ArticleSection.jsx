// src/components/ArticleSection.js
import React from "react";

const articles = [
  {
    title: "Understanding Mental Health",
    description: "Learn about the basics of mental health and why it's important.",
    img: "article-image1.jpg",
    link: "#",
  },
  {
    title: "Coping with Anxiety",
    description: "Strategies to manage anxiety and live a more peaceful life.",
    img: "article-image2.jpg",
    link: "#",
  },
  {
    title: "The Power of Meditation",
    description: "How meditation can improve your mental health and well-being.",
    img: "article-image3.jpg",
    link: "#",
  },
];

const ArticleSection = () => {
  return (
    <section id="articles" className="container mx-auto text-center py-16">
      <h3 className="text-3xl font-semibold mb-8">Featured Articles</h3>
      <div className="grid md:grid-cols-3 gap-6">
        {articles.map((article, index) => (
          <div key={index} className="article-card border p-6 rounded-lg shadow-lg">
            <img src={article.img} alt={article.title} className="w-full h-40 object-cover rounded-lg" />
            <h4 className="mt-4 text-xl font-semibold">{article.title}</h4>
            <p className="mt-2 text-gray-600">{article.description}</p>
            <a href={article.link} className="mt-4 inline-block text-blue-500">
              Read more
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ArticleSection;
