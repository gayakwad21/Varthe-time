import { Link } from 'react-router-dom';
import { Zap } from 'lucide-react';
import { getBreakingNews } from '@/data/articles';

export function BreakingNewsTicker() {
  const breakingNews = getBreakingNews();

  if (breakingNews.length === 0) return null;

  const tickerContent = breakingNews.map((article) => article.title).join('  •  ');

  return (
    <div className="fixed top-16 md:top-20 left-0 right-0 z-40 bg-secondary text-secondary-foreground overflow-hidden">
      <div className="container mx-auto px-4 flex items-center h-10">
        <div className="flex items-center gap-2 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider flex-shrink-0 mr-4">
          <Zap className="h-3 w-3" />
          Breaking
        </div>
        <div className="overflow-hidden flex-1">
          <div className="ticker-scroll whitespace-nowrap inline-block">
            {[...Array(2)].map((_, i) => (
              <span key={i} className="inline-block">
                {breakingNews.map((article, index) => (
                  <Link
                    key={`${i}-${article.id}`}
                    to={`/article/${article.id}`}
                    className="inline-block mx-4 hover:underline text-sm font-medium"
                  >
                    {article.title}
                    {index < breakingNews.length - 1 && (
                      <span className="mx-4 text-secondary-foreground/50">•</span>
                    )}
                  </Link>
                ))}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
