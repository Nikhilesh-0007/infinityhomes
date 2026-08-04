import React from 'react';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { BlogPost } from '../../types';

export interface BlogCardProps {
  post: BlogPost;
  onReadMore?: (post: BlogPost) => void;
}

export const BlogCard: React.FC<BlogCardProps> = ({ post, onReadMore }) => {
  return (
    <article className="bg-white rounded-card overflow-hidden border border-gray-100 shadow-soft group hover:shadow-hover hover:-translate-y-1.5 transition-all duration-300 flex flex-col h-full">
      {/* Cover Image */}
      <div className="relative aspect-[16/9] overflow-hidden bg-gray-100">
        <img
          src={post.coverImage}
          alt={post.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <span className="absolute top-3 left-3 bg-brand-red text-white text-[10px] font-heading font-bold px-2.5 py-1 rounded-md uppercase tracking-wider shadow-sm">
          {post.category}
        </span>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-grow justify-between space-y-4">
        <div>
          {/* Metadata */}
          <div className="flex items-center gap-4 text-gray-400 text-xs mb-2">
            <span className="flex items-center gap-1">
              <Calendar className="w-3 h-3 text-brand-red" />
              {post.date}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-3 h-3 text-brand-red" />
              {post.readTimeMinutes} min read
            </span>
          </div>

          {/* Title */}
          <h3 className="font-heading font-extrabold text-base md:text-lg text-charcoal group-hover:text-brand-red transition-colors line-clamp-2 mb-2">
            {post.title}
          </h3>

          {/* Excerpt */}
          <p className="text-gray-500 text-xs sm:text-sm leading-relaxed line-clamp-3">
            {post.excerpt}
          </p>
        </div>

        {/* Card Footer */}
        <div className="pt-3 border-t border-gray-100 flex items-center justify-between">
          <span className="text-xs font-semibold text-gray-600">By {post.author}</span>
          <button
            onClick={() => onReadMore && onReadMore(post)}
            className="inline-flex items-center gap-1 text-xs font-heading font-bold text-brand-red group-hover:translate-x-1 transition-transform"
          >
            <span>Read Article</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </article>
  );
};
