import { motion } from 'framer-motion';
import { Layout } from '@/components/layout/Layout';
import { NewsCard } from '@/components/news/NewsCard';
import { Newsletter } from '@/components/news/Newsletter';
import { Category, categoryInfo, getArticlesByCategory } from '@/data/articles';

interface CategoryPageProps {
  category: Category;
}

export function CategoryPage({ category }: CategoryPageProps) {
  const info = categoryInfo[category];
  const articles = getArticlesByCategory(category);
  const featuredArticle = articles[0];
  const otherArticles = articles.slice(1);

  return (
    <Layout>
      {/* Ticker spacer */}
      <div className="h-10" />

      {/* Hero */}
      <section className="relative py-16 md:py-24 bg-primary overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              {info.name}
            </h1>
            <p className="text-primary-foreground/80 text-lg md:text-xl">
              {info.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Article */}
      {featuredArticle && (
        <section className="container mx-auto px-4 py-8">
          <NewsCard article={featuredArticle} variant="featured" />
        </section>
      )}

      {/* Other Articles */}
      <section className="container mx-auto px-4 py-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title mb-8"
        >
          Latest in {info.name}
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherArticles.map((article, index) => (
            <NewsCard key={article.id} article={article} index={index} />
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="container mx-auto px-4 py-12">
        <Newsletter />
      </section>
    </Layout>
  );
}
