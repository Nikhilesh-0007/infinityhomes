import React from 'react';
import { X, Calendar, Clock, User, Share2 } from 'lucide-react';
import { BlogPost } from '../../types';

export interface BlogDetailsModalProps {
  post: BlogPost | null;
  onClose: () => void;
}

export const BlogDetailsModal: React.FC<BlogDetailsModalProps> = ({ post, onClose }) => {
  if (!post) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/70 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-gray-100 relative text-charcoal">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/50 hover:bg-black/70 text-white flex items-center justify-center transition-colors"
          aria-label="Close article modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Cover Photo */}
        <div className="relative aspect-[16/9] bg-gray-900 overflow-hidden">
          <img src={post.coverImage} alt={post.title} className="w-full h-full object-cover" />
          <span className="absolute bottom-4 left-4 bg-brand-red text-white text-xs font-bold px-3 py-1 rounded-md uppercase">
            {post.category}
          </span>
        </div>

        {/* Article Body */}
        <div className="p-6 md:p-8 space-y-6">
          {/* Metadata */}
          <div className="flex flex-wrap items-center gap-4 text-xs text-gray-500 border-b border-gray-100 pb-4">
            <span className="flex items-center gap-1.5 font-semibold text-charcoal">
              <User className="w-4 h-4 text-brand-red" />
              {post.author}
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-brand-red" />
              {post.date}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-brand-red" />
              {post.readTimeMinutes} min read
            </span>
          </div>

          {/* Title */}
          <h1 className="font-heading font-extrabold text-2xl sm:text-3xl text-charcoal leading-tight">
            {post.title}
          </h1>

          {/* Excerpt */}
          <p className="text-gray-600 font-medium text-base leading-relaxed bg-red-50/50 p-4 rounded-xl border-l-4 border-brand-red">
            {post.excerpt}
          </p>

          {/* Content */}
          <div className="prose prose-sm sm:prose-base max-w-none text-gray-700 leading-relaxed whitespace-pre-line space-y-4">
            {post.content}
          </div>

          {/* Tags */}
          <div className="pt-4 border-t border-gray-100 flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap gap-1.5">
              {post.tags.map((tag, idx) => (
                <span key={idx} className="bg-gray-100 text-gray-600 text-xs px-2.5 py-1 rounded-md font-medium">
                  #{tag}
                </span>
              ))}
            </div>

            <button
              onClick={() => {
                if (navigator.share) {
                  navigator.share({ title: post.title, url: window.location.href });
                }
              }}
              className="flex items-center gap-1.5 text-xs font-bold text-brand-red hover:underline"
            >
              <Share2 className="w-4 h-4" />
              <span>Share Article</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
