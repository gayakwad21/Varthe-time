import { motion } from 'framer-motion';
import { ArrowRight, TrendingUp, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { NewsCard } from '@/components/news/NewsCard';
import { CategoryCard } from '@/components/news/CategoryCard';
import { Newsletter } from '@/components/news/Newsletter';
import { AdBanner } from '@/components/news/AdBanner';
import { Button } from '@/components/ui/button';
import { articles, getTrendingArticles, Category } from '@/data/articles';

const categories: Category[] = ['sports', 'politics', 'technology', 'entertainment', 'business'];

export default function Index() {
  const trendingArticles = getTrendingArticles();
  const latestArticles = articles.slice(0, 6);
  const featuredArticle = articles[0];
  const topStories = articles.slice(1, 4);

  return (
    <Layout>
      {/* Ticker spacer */}
      <div className="h-10" />

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Main Featured */}
          <div className="lg:col-span-2">
            <NewsCard article={featuredArticle} variant="featured" />
          </div>

          {/* Top Stories */}
          <div className="space-y-4">
            <h2 className="section-title flex items-center gap-2">
              <TrendingUp className="h-6 w-6 text-secondary" />
              Top Stories
            </h2>
            <div className="space-y-4">
              {topStories.map((article, index) => (
                <NewsCard key={article.id} article={article} variant="compact" index={index} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Category Shortcuts */}
      <section className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center justify-between mb-6"
        >
          <h2 className="section-title">Explore Categories</h2>
        </motion.div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {categories.map((cat, index) => (
            <CategoryCard key={cat} category={cat} index={index} />
          ))}
        </div>
      </section>

      {/* Ad Banner */}
      <section className="container mx-auto px-4 py-4">
        <AdBanner />
      </section>

      {/* Latest News */}
      <section className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center justify-between mb-6"
        >
          <h2 className="section-title flex items-center gap-2">
            <Clock className="h-6 w-6 text-primary" />
            Latest News
          </h2>
          <Link to="/gallery">
            <Button variant="ghost" className="gap-2">
              View All <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {latestArticles.map((article, index) => (
            <NewsCard key={article.id} article={article} index={index} />
          ))}
        </div>
      </section>

      {/* Trending Section */}
      <section className="bg-muted/50 py-12">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-between mb-6"
          >
            <h2 className="section-title flex items-center gap-2">
              <TrendingUp className="h-6 w-6 text-secondary" />
              Trending Now
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {trendingArticles.slice(0, 4).map((article, index) => (
              <NewsCard key={article.id} article={article} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="container mx-auto px-4 py-12">
        <Newsletter />
      </section>

      {/* Final Ad Banner */}
      <section className="container mx-auto px-4 pb-12">
        <AdBanner />
      </section>
    </Layout>
  );
}
