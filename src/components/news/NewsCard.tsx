import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Clock, User } from 'lucide-react';
import { Article, categoryInfo } from '@/data/articles';
import { cn } from '@/lib/utils';

interface NewsCardProps {
  article: Article;
  variant?: 'default' | 'featured' | 'compact';
  index?: number;
}

export function NewsCard({ article, variant = 'default', index = 0 }: NewsCardProps) {
  const catInfo = categoryInfo[article.category];

  if (variant === 'featured') {
    return (
      <motion.article
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="news-card group relative h-[400px] md:h-[500px]"
      >
        <Link to={`/article/${article.id}`} className="block h-full">
          <div className="absolute inset-0 overflow-hidden rounded-xl">
            <img
              src={article.image}
              alt={article.title}
              className="news-card-image w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/40 to-transparent" />
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
            <span className={cn('category-chip mb-3', catInfo.color, 'text-white')}>
              {catInfo.name}
            </span>
            <h3 className="font-display text-2xl md:text-3xl font-bold text-white mb-3 line-clamp-2 group-hover:text-secondary transition-colors">
              {article.title}
            </h3>
            <p className="text-white/80 text-sm md:text-base line-clamp-2 mb-4">{article.excerpt}</p>
            <div className="flex items-center gap-4 text-white/70 text-sm">
              <span className="flex items-center gap-1">
                <User className="h-4 w-4" />
                {article.author}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                {article.readTime}
              </span>
            </div>
          </div>
        </Link>
      </motion.article>
    );
  }

  if (variant === 'compact') {
    return (
      <motion.article
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: index * 0.1 }}
        className="group flex gap-4"
      >
        <Link to={`/article/${article.id}`} className="flex-shrink-0 w-24 h-24 overflow-hidden rounded-lg">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </Link>
        <div className="flex-1 min-w-0">
          <span className={cn('category-chip text-[10px] mb-1', catInfo.color, 'text-white')}>
            {catInfo.name}
          </span>
          <Link to={`/article/${article.id}`}>
            <h4 className="font-semibold text-foreground line-clamp-2 group-hover:text-primary transition-colors text-sm">
              {article.title}
            </h4>
          </Link>
          <p className="text-muted-foreground text-xs mt-1">{article.date}</p>
        </div>
      </motion.article>
    );
  }

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="news-card group"
    >
      <Link to={`/article/${article.id}`} className="block">
        <div className="overflow-hidden rounded-t-xl aspect-[16/10]">
          <img
            src={article.image}
            alt={article.title}
            className="news-card-image w-full h-full object-cover"
          />
        </div>
        <div className="p-5">
          <span className={cn('category-chip mb-3', catInfo.color, 'text-white')}>
            {catInfo.name}
          </span>
          <h3 className="font-display text-lg font-bold text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors">
            {article.title}
          </h3>
          <p className="text-muted-foreground text-sm line-clamp-2 mb-4">{article.excerpt}</p>
          <div className="flex items-center justify-between text-muted-foreground text-xs">
            <span className="flex items-center gap-1">
              <User className="h-3 w-3" />
              {article.author}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="h-3 w-3" />
              {article.readTime}
            </span>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}
