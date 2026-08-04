import React, { useState, useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Search, Calendar, Clock, User, ArrowRight, Tag, Mail, CheckCircle2, SlidersHorizontal, Sparkles } from 'lucide-react';
import { blogsData } from '../data/blogs';
import { BlogPost } from '../types';
import { Container } from '../components/ui/Container';
import { Section } from '../components/ui/Section';
import { BlogCard } from '../components/ui/BlogCard';
import { Button } from '../components/ui/Button';
import { BlogDetailsModal } from '../components/modals/BlogDetailsModal';
import { SEOHead } from '../components/seo/SEOHead';
import { PageTransition } from '../components/layout/PageTransition';

// Newsletter Form Validation Schema
const newsletterSchema = z.object({
  email: z.string().email({ message: 'Please enter a valid email address' }),
});

type NewsletterFormData = z.infer<typeof newsletterSchema>;

export const Blogs: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState<'recent' | 'popular'>('recent');
  const [selectedBlog, setSelectedBlog] = useState<BlogPost | null>(null);
  const [newsletterSubmitted, setNewsletterSubmitted] = useState(false);

  // Newsletter Form
  const {
    register: registerNewsletter,
    handleSubmit: handleNewsletterSubmit,
    formState: { errors: newsletterErrors, isSubmitting: newsletterSubmitting },
    reset: resetNewsletter,
  } = useForm<NewsletterFormData>({
    resolver: zodResolver(newsletterSchema),
  });

  const onNewsletterSubmit = (data: NewsletterFormData) => {
    setNewsletterSubmitted(true);
    resetNewsletter();
    setTimeout(() => setNewsletterSubmitted(false), 5000);
  };

  const featuredPost = blogsData.find((b) => b.featured) || blogsData[0];

  const categories = [
    'all',
    'Market Trends',
    'Legal & Buying Guide',
    'Location Spotlight',
    'Home Buyers Guide',
    'Finance & Loans',
    'NRI Corner',
  ];

  const popularTags = [
    'HMDA',
    'DTCP',
    'Kollur',
    'Kokapet',
    'Tellapur',
    'ORR Growth',
    'Dharani Portal',
    'Home Loans',
    'NRI Investment',
    'Vastu Layouts',
  ];

  // Filter & Sort Engine
  const filteredBlogs = useMemo(() => {
    let result = blogsData.filter((post) => {
      const matchesSearch =
        searchTerm === '' ||
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.tags.some((t) => t.toLowerCase().includes(searchTerm.toLowerCase()));

      const matchesCategory =
        selectedCategory === 'all' || post.category.toLowerCase() === selectedCategory.toLowerCase();

      return matchesSearch && matchesCategory;
    });

    if (sortBy === 'popular') {
      result = [...result].sort((a, b) => b.readTimeMinutes - a.readTimeMinutes);
    }

    return result;
  }, [searchTerm, selectedCategory, sortBy]);

  return (
    <PageTransition>
      <SEOHead
        title="Blogs & Real Estate Insights | Infinity Homes Hyderabad"
        description="Read Hyderabad real estate market trends, HMDA vs DTCP guides, Telangana property registration steps, home loan tips, and NRI investment advice."
      />

      {/* Header Banner */}
      <section className="pt-32 sm:pt-36 md:pt-40 pb-16 bg-charcoal text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal-dark to-charcoal/90"></div>
        <Container className="relative z-10">
          <div className="max-w-3xl space-y-4">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-brand-bright bg-white/10 px-3.5 py-1 rounded-full border border-white/20">
              Hyderabad Market Intelligence
            </span>
            <h1 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl text-white">
              Real Estate News, Guides & Insights
            </h1>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              Stay informed with expert advice on HMDA & DTCP layouts, ORR growth corridors, land valuation, stamp duty, and home loan pre-approvals.
            </p>
          </div>
        </Container>
      </section>

      {/* Featured Post Hero Card */}
      <Section bgVariant="white" badge="Must Read Story" title="Featured Insight">
        <div className="bg-section rounded-card border border-gray-200 overflow-hidden shadow-soft grid grid-cols-1 lg:grid-cols-12 gap-0 group">
          <div className="lg:col-span-7 relative aspect-[16/10] overflow-hidden bg-gray-900">
            <img
              src={featuredPost.coverImage}
              alt={featuredPost.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <span className="absolute top-4 left-4 bg-brand-red text-white text-xs font-heading font-bold px-3 py-1 rounded-md uppercase">
              {featuredPost.category}
            </span>
          </div>

          <div className="lg:col-span-5 p-6 md:p-8 flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="flex items-center gap-4 text-xs text-gray-500">
                <span className="flex items-center gap-1 font-semibold text-charcoal">
                  <User className="w-3.5 h-3.5 text-brand-red" />
                  {featuredPost.author}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-brand-red" />
                  {featuredPost.date}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-brand-red" />
                  {featuredPost.readTimeMinutes} min
                </span>
              </div>

              <h2 className="font-heading font-extrabold text-xl sm:text-2xl text-charcoal group-hover:text-brand-red transition-colors leading-tight">
                {featuredPost.title}
              </h2>

              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed line-clamp-4">
                {featuredPost.excerpt}
              </p>
            </div>

            <Button
              variant="primary"
              size="md"
              className="w-fit"
              onClick={() => setSelectedBlog(featuredPost)}
            >
              <span>Read Full Article</span>
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </Section>

      {/* Main Filter & Articles Grid Section */}
      <Section bgVariant="section" badge="Articles & Analysis" title="Explore Market Guides">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Articles Stream */}
          <div className="lg:col-span-8 space-y-6">
            {/* Filter Bar */}
            <div className="bg-white rounded-card p-5 border border-gray-200 shadow-sm space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-center">
                {/* Search Bar */}
                <div className="sm:col-span-8 relative">
                  <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    placeholder="Search articles by keyword or tag..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-xs text-charcoal focus:outline-none focus:border-brand-red"
                  />
                </div>

                {/* Sort Toggle */}
                <div className="sm:col-span-4 flex items-center justify-end gap-2 text-xs font-semibold text-gray-600">
                  <SlidersHorizontal className="w-3.5 h-3.5 text-brand-red" />
                  <span>Sort:</span>
                  <button
                    onClick={() => setSortBy(sortBy === 'recent' ? 'popular' : 'recent')}
                    className="bg-gray-100 hover:bg-gray-200 text-charcoal px-3 py-1.5 rounded-lg capitalize transition-colors"
                  >
                    {sortBy}
                  </button>
                </div>
              </div>

              {/* Category Pills */}
              <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-gray-100">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`text-xs font-heading font-semibold px-3 py-1.5 rounded-lg transition-all capitalize ${
                      selectedCategory === cat
                        ? 'bg-brand-red text-white shadow-sm'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    {cat === 'all' ? 'All Categories' : cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Articles Grid */}
            {filteredBlogs.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {filteredBlogs.map((post) => (
                  <BlogCard key={post.id} post={post} onReadMore={(b) => setSelectedBlog(b)} />
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-card p-10 text-center border border-gray-200">
                <p className="text-gray-500 text-sm">No articles match your current search criteria.</p>
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('all');
                  }}
                  className="mt-3 text-xs font-bold text-brand-red underline"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-6">
            {/* Suggested Topics Tags */}
            <div className="bg-white rounded-card p-6 border border-gray-200 shadow-soft space-y-4">
              <h3 className="font-heading font-bold text-base text-charcoal flex items-center gap-2">
                <Tag className="w-4 h-4 text-brand-red" />
                <span>Popular Topics</span>
              </h3>
              <div className="flex flex-wrap gap-2">
                {popularTags.map((tag) => (
                  <button
                    key={tag}
                    onClick={() => setSearchTerm(tag)}
                    className="bg-gray-100 hover:bg-red-50 hover:text-brand-red text-gray-700 text-xs font-medium px-3 py-1.5 rounded-lg transition-colors"
                  >
                    #{tag}
                  </button>
                ))}
              </div>
            </div>

            {/* Newsletter Signup Form */}
            <div className="bg-charcoal text-white rounded-card p-6 border border-gray-800 shadow-soft space-y-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center">
                <Mail className="w-5 h-5 text-white" />
              </div>
              <h3 className="font-heading font-bold text-lg text-white">Subscribe to Market Insights</h3>
              <p className="text-gray-300 text-xs leading-relaxed">
                Get monthly Hyderabad land appreciation reports, HMDA layout alerts, and legal property updates directly in your inbox.
              </p>

              {newsletterSubmitted ? (
                <div className="bg-emerald-950/60 border border-emerald-800 p-3 rounded-xl flex items-center gap-2 text-emerald-400 text-xs font-medium">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>Subscribed! Thank you for joining Infinity Homes insights.</span>
                </div>
              ) : (
                <form onSubmit={handleNewsletterSubmit(onNewsletterSubmit)} className="space-y-3">
                  <div>
                    <input
                      type="email"
                      placeholder="Enter your email address..."
                      {...registerNewsletter('email')}
                      className="w-full px-3.5 py-2.5 bg-gray-800 border border-gray-700 rounded-xl text-xs text-white placeholder-gray-400 focus:outline-none focus:border-brand-bright"
                    />
                    {newsletterErrors.email && (
                      <p className="text-red-400 text-[11px] mt-1">{newsletterErrors.email.message}</p>
                    )}
                  </div>
                  <Button variant="primary" size="sm" type="submit" className="w-full text-xs" disabled={newsletterSubmitting}>
                    <span>Subscribe Now</span>
                    <Sparkles className="w-3.5 h-3.5" />
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </Section>

      {/* Article Detail Modal Reader */}
      <BlogDetailsModal post={selectedBlog} onClose={() => setSelectedBlog(null)} />
    </PageTransition>
  );
};

