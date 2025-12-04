import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Category, categoryInfo } from '@/data/articles';
import { cn } from '@/lib/utils';

interface CategoryCardProps {
  category: Category;
  index?: number;
}

const categoryIcons: Record<Category, string> = {
  sports: '⚽',
  politics: '🏛️',
  technology: '💻',
  entertainment: '🎬',
  business: '📈',
};

export function CategoryCard({ category, index = 0 }: CategoryCardProps) {
  const info = categoryInfo[category];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      <Link
        to={`/${category}`}
        className={cn(
          'group block p-6 rounded-xl transition-all duration-300',
          'bg-card hover:shadow-card-hover hover:-translate-y-1',
          'border border-border hover:border-primary/30'
        )}
      >
        <div className="flex items-start justify-between mb-4">
          <span className="text-4xl">{categoryIcons[category]}</span>
          <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
        </div>
        <h3 className="font-display font-bold text-lg text-foreground mb-2 group-hover:text-primary transition-colors">
          {info.name}
        </h3>
        <p className="text-muted-foreground text-sm line-clamp-2">{info.description}</p>
      </Link>
    </motion.div>
  );
}
