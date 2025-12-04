export type Category = 'sports' | 'politics' | 'technology' | 'entertainment' | 'business';

export interface Article {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: Category;
  author: string;
  date: string;
  readTime: string;
  image: string;
  tags: string[];
  isTrending?: boolean;
  isBreaking?: boolean;
}

export const categoryInfo: Record<Category, { name: string; description: string; color: string }> = {
  sports: {
    name: 'Sports',
    description: 'Latest scores, match analyses, player insights, and major sports events worldwide.',
    color: 'bg-green-500',
  },
  politics: {
    name: 'Politics',
    description: 'Key political headlines, government updates, election coverage, and policy insights.',
    color: 'bg-red-500',
  },
  technology: {
    name: 'Technology',
    description: 'Updates on AI, gadgets, software, innovations, startups, and digital trends.',
    color: 'bg-blue-500',
  },
  entertainment: {
    name: 'Entertainment',
    description: 'Celebrity news, movie reviews, OTT updates, music releases, and pop culture trends.',
    color: 'bg-purple-500',
  },
  business: {
    name: 'Business',
    description: 'Market updates, finance insights, startup stories, industry news, and economic analysis.',
    color: 'bg-amber-500',
  },
};

export const articles: Article[] = [
  // Sports
  {
    id: 'sports-1',
    title: 'Last-Minute Goal Decides the Championship',
    excerpt: 'In a thrilling finale, the underdog team clinched victory with a dramatic goal in injury time, sending fans into a frenzy.',
    content: `The stadium erupted as the final whistle blew, marking one of the most dramatic conclusions to a championship in recent memory. With just seconds remaining, striker Marcus Chen found space in the box and delivered a perfectly placed shot that left the goalkeeper helpless.

The victory caps off an incredible season for the team, who were written off by many pundits at the start of the campaign. Manager Sarah Thompson praised her players' resilience and dedication throughout the season.

"This moment belongs to everyone who believed in us," Thompson said in the post-match press conference. "The players showed tremendous character to keep pushing when it looked like we might be heading for extra time."

The championship win represents a historic achievement for the club, ending a 25-year drought without a major trophy.`,
    category: 'sports',
    author: 'James Rodriguez',
    date: '2025-12-04',
    readTime: '4 min',
    image: 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=800&q=80',
    tags: ['Championship', 'Football', 'Breaking'],
    isTrending: true,
    isBreaking: true,
  },
  {
    id: 'sports-2',
    title: 'Top 10 Players Dominating This Season',
    excerpt: 'Our expert analysts break down the standout performers who have captured the sports world attention this year.',
    content: `As we approach the midpoint of the season, several players have emerged as genuine contenders for the Most Valuable Player award. From record-breaking scorers to defensive stalwarts, this year's crop of talent is exceptional.

Leading the pack is forward Elena Vasquez, whose 28 goals in 20 matches have put her on pace to shatter the all-time scoring record. Her combination of speed, technique, and finishing ability has proven unstoppable.

Not far behind is midfielder David Park, whose creative genius has transformed his team's attacking play. With 15 assists and counting, Park's vision and passing range have been a joy to watch.`,
    category: 'sports',
    author: 'Maria Santos',
    date: '2025-12-03',
    readTime: '6 min',
    image: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?w=800&q=80',
    tags: ['Analysis', 'Rankings', 'Athletes'],
    isTrending: true,
  },
  {
    id: 'sports-3',
    title: 'National Team Coach Announces New Squad',
    excerpt: 'Several surprise inclusions and notable omissions as the national team prepares for upcoming international fixtures.',
    content: `The national team coach revealed the 26-player squad that will represent the country in next month's crucial qualifying matches. The announcement included several surprising selections and some notable absentees.

Young sensation Alex Rivera, just 19 years old, earned his first call-up after an impressive start to the domestic season. Meanwhile, veteran defender Carlos Martinez was left out despite his experience.

"We're building for the future while remaining competitive now," the coach explained. "Every selection was made with careful consideration of our tactical needs and long-term goals."`,
    category: 'sports',
    author: 'Carlos Mendez',
    date: '2025-12-02',
    readTime: '3 min',
    image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&q=80',
    tags: ['National Team', 'Squad', 'International'],
  },
  // Politics
  {
    id: 'politics-1',
    title: 'Government Releases New Education Policy Roadmap',
    excerpt: 'A comprehensive plan to transform the education system over the next decade, with major investments in technology and teacher training.',
    content: `The Ministry of Education unveiled an ambitious 10-year roadmap aimed at modernizing the country's education system. The plan includes significant investments in educational technology, teacher development programs, and infrastructure improvements.

Key highlights of the policy include universal access to digital learning tools, reduced class sizes in primary schools, and enhanced vocational training pathways. The government has committed $50 billion over the decade to implement these reforms.

"Education is the foundation of our nation's future prosperity," said the Education Minister during the announcement. "This roadmap ensures every child has access to world-class learning opportunities."

Critics have raised concerns about the implementation timeline and funding mechanisms, but initial public response has been largely positive.`,
    category: 'politics',
    author: 'Helen Wright',
    date: '2025-12-04',
    readTime: '5 min',
    image: 'https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=800&q=80',
    tags: ['Education', 'Policy', 'Government'],
    isTrending: true,
    isBreaking: true,
  },
  {
    id: 'politics-2',
    title: 'Election Heat Rises as Major Parties Announce Manifestos',
    excerpt: 'With the election just months away, the major political parties have released their policy platforms, setting the stage for intense debates.',
    content: `The campaign season officially kicked into high gear as the three major parties unveiled their comprehensive manifestos. Each platform offers distinct visions for the country's future, from economic policy to healthcare reform.

The ruling party's manifesto focuses on continuity and stability, emphasizing their track record on job creation and economic growth. Opposition parties have countered with promises of sweeping changes to taxation and social welfare programs.

Political analysts predict this will be one of the closest elections in a generation, with polling showing all three parties within the margin of error.`,
    category: 'politics',
    author: 'Robert Chen',
    date: '2025-12-03',
    readTime: '7 min',
    image: 'https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?w=800&q=80',
    tags: ['Election', 'Manifesto', 'Campaign'],
  },
  {
    id: 'politics-3',
    title: 'Parliament Passes Landmark Bill This Week',
    excerpt: 'After months of debate, lawmakers approved historic legislation that will reshape key aspects of national policy.',
    content: `In a decisive vote, Parliament passed the landmark reform bill that had been the subject of intense political debate for nearly a year. The legislation, which passed with a significant majority, introduces sweeping changes to environmental regulations and corporate accountability standards.

Supporters hailed the vote as a watershed moment for the country's commitment to sustainable development. Industry groups have expressed concerns about compliance costs, though many acknowledged the need for updated regulations.

"This is a victory for future generations," said the bill's primary sponsor. "We've demonstrated that meaningful reform is possible when there's political will."`,
    category: 'politics',
    author: 'Amanda Foster',
    date: '2025-12-01',
    readTime: '4 min',
    image: 'https://images.unsplash.com/photo-1555848962-6e79363ec58f?w=800&q=80',
    tags: ['Legislation', 'Parliament', 'Reform'],
  },
  // Technology
  {
    id: 'tech-1',
    title: 'AI Breakthrough: New Model Outperforms Previous Benchmarks',
    excerpt: 'Researchers announce a revolutionary AI system that achieves unprecedented performance across multiple domains.',
    content: `A team of researchers has unveiled a groundbreaking artificial intelligence system that has shattered previous performance records across a wide range of benchmarks. The new model demonstrates remarkable capabilities in reasoning, language understanding, and multimodal processing.

The breakthrough represents a significant leap forward in AI development, with potential applications ranging from scientific research to creative industries. The team published their findings in a peer-reviewed journal, allowing the broader research community to examine their methodology.

"We've achieved something that many thought was years away," said the lead researcher. "This opens up possibilities we're only beginning to explore."

Tech industry leaders have already expressed interest in licensing the technology, while regulators are calling for careful consideration of the ethical implications.`,
    category: 'technology',
    author: 'Dr. Sarah Kim',
    date: '2025-12-04',
    readTime: '6 min',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80',
    tags: ['AI', 'Research', 'Innovation'],
    isTrending: true,
    isBreaking: true,
  },
  {
    id: 'tech-2',
    title: 'Top Tech Trends Shaping 2025',
    excerpt: 'From quantum computing to sustainable tech, explore the innovations that will define the coming year.',
    content: `As we look ahead to 2025, several technological trends are poised to transform industries and everyday life. Our analysis identifies the key developments that business leaders and consumers should watch closely.

Quantum computing is moving from laboratory experiments to practical applications, with major companies announcing commercial-grade quantum processors. Meanwhile, sustainable technology solutions are gaining momentum as both consumers and corporations prioritize environmental responsibility.

The convergence of AI, IoT, and 5G networks is enabling new possibilities in smart cities, healthcare, and manufacturing. These interconnected systems promise greater efficiency but also raise important questions about privacy and security.`,
    category: 'technology',
    author: 'Michael Torres',
    date: '2025-12-02',
    readTime: '8 min',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80',
    tags: ['Trends', '2025', 'Innovation'],
    isTrending: true,
  },
  {
    id: 'tech-3',
    title: 'Smartphone Innovation Reaches New Heights',
    excerpt: 'The latest generation of smartphones introduces features that seemed like science fiction just a few years ago.',
    content: `The smartphone industry continues to push boundaries with this year's flagship releases. New devices feature advanced AI processing capabilities, revolutionary camera systems, and battery technology that promises multi-day usage on a single charge.

Perhaps most exciting is the introduction of holographic display technology in select premium models. While still in early stages, this feature points to the future of mobile computing and entertainment.

Industry analysts predict these innovations will drive significant upgrade cycles, as consumers seek to take advantage of the new capabilities.`,
    category: 'technology',
    author: 'Lisa Park',
    date: '2025-12-01',
    readTime: '5 min',
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&q=80',
    tags: ['Smartphones', 'Gadgets', 'Mobile'],
  },
  // Entertainment
  {
    id: 'entertainment-1',
    title: 'Blockbuster Movie Breaks Box Office Records',
    excerpt: 'The highly anticipated sequel has shattered opening weekend records, exceeding even the most optimistic projections.',
    content: `Hollywood is celebrating as the latest blockbuster surpassed all expectations with a record-breaking opening weekend. The film earned $350 million globally in its first three days, making it the biggest opening in cinema history.

Critics and audiences alike have praised the sequel for its stunning visual effects, compelling performances, and emotionally satisfying conclusion to the franchise. Director James Cameron called it "a vindication of theatrical moviegoing."

The success signals a strong recovery for the cinema industry, which has faced challenges in recent years from streaming competition. Theater chains reported sold-out shows and unprecedented demand for premium formats like IMAX.`,
    category: 'entertainment',
    author: 'Rachel Green',
    date: '2025-12-04',
    readTime: '4 min',
    image: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=800&q=80',
    tags: ['Movies', 'Box Office', 'Hollywood'],
    isTrending: true,
    isBreaking: true,
  },
  {
    id: 'entertainment-2',
    title: 'Celebrity Interview: Upcoming Show Insights',
    excerpt: 'In an exclusive interview, the star reveals behind-the-scenes details about the most anticipated streaming series of the year.',
    content: `In a candid conversation, the acclaimed actor shared insights about their upcoming streaming series that has generated massive buzz. The show, which premieres next month, promises to push creative boundaries in ways viewers haven't seen before.

"This project challenged me in ways I never expected," the star revealed. "The character goes through such a profound transformation, and I had to dig deep to find that truth."

The interview also touched on the actor's views about the evolving entertainment landscape and their excitement about working with the visionary director behind the project.`,
    category: 'entertainment',
    author: 'Jennifer Adams',
    date: '2025-12-03',
    readTime: '6 min',
    image: 'https://images.unsplash.com/photo-1598387993441-a364f854c3e1?w=800&q=80',
    tags: ['Interview', 'Streaming', 'Celebrity'],
  },
  {
    id: 'entertainment-3',
    title: 'New OTT Series Gains Massive Popularity',
    excerpt: 'The surprise hit series has captured viewers worldwide, becoming the most-watched show on the platform.',
    content: `What started as an under-the-radar release has become a global phenomenon. The new series has topped viewing charts across multiple countries, generating unprecedented social media engagement and critical acclaim.

The show's unique blend of genres and diverse cast has resonated with audiences seeking fresh storytelling. Streaming executives have already greenlit two additional seasons, confident in the property's long-term potential.

Fan theories and discussions have dominated online conversations, with viewers eagerly dissecting each episode for hidden clues and connections.`,
    category: 'entertainment',
    author: 'David Lee',
    date: '2025-12-01',
    readTime: '5 min',
    image: 'https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?w=800&q=80',
    tags: ['OTT', 'Streaming', 'TV Series'],
  },
  // Business
  {
    id: 'business-1',
    title: 'Stock Market Sees Unexpected Surge',
    excerpt: 'Major indices rallied to all-time highs as positive economic data exceeded analyst expectations.',
    content: `Financial markets experienced a dramatic upswing as new economic reports painted an optimistic picture of growth and stability. The benchmark index closed at record levels, with technology and healthcare sectors leading the gains.

Analysts attribute the rally to stronger-than-expected employment numbers, moderating inflation, and increased consumer confidence. International investors have also increased their allocations to domestic equities, further driving demand.

"The fundamentals are solid," said a senior market strategist at a leading investment firm. "We're seeing broad-based participation in this rally, which suggests it has staying power."

Despite the enthusiasm, some experts caution that valuations in certain sectors are becoming stretched and recommend a balanced approach to portfolio management.`,
    category: 'business',
    author: 'Thomas Wright',
    date: '2025-12-04',
    readTime: '5 min',
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80',
    tags: ['Stock Market', 'Finance', 'Economy'],
    isTrending: true,
    isBreaking: true,
  },
  {
    id: 'business-2',
    title: 'Local Startup Secures Major Funding Round',
    excerpt: 'The innovative fintech company raised $200 million in its Series C round, valuing it at over $2 billion.',
    content: `A local startup has joined the unicorn club after completing a highly successful funding round. The Series C investment, led by prominent venture capital firms, values the company at $2.3 billion and will fuel ambitious expansion plans.

The fintech company has developed a revolutionary platform that simplifies financial services for small and medium businesses. Its user base has grown 400% over the past year, demonstrating strong product-market fit.

"This funding will allow us to accelerate our mission of democratizing financial services," said the company's founder and CEO. "We're just getting started."

The success story has energized the local startup ecosystem, with investors showing renewed interest in the region's emerging technology companies.`,
    category: 'business',
    author: 'Emily Chen',
    date: '2025-12-03',
    readTime: '4 min',
    image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&q=80',
    tags: ['Startup', 'Funding', 'Fintech'],
    isTrending: true,
  },
  {
    id: 'business-3',
    title: 'Business Leaders Gather for Global Summit',
    excerpt: 'CEOs and executives from around the world convene to discuss the future of sustainable business practices.',
    content: `Thousands of business leaders descended on the convention center for the annual Global Business Summit, focused this year on sustainability and responsible growth. The gathering featured keynote speeches from industry titans and interactive workshops on implementing green initiatives.

Panel discussions covered topics ranging from carbon neutrality commitments to the business case for diversity and inclusion. Many attendees expressed optimism about the private sector's ability to drive positive change.

"Sustainability is no longer optional—it's a business imperative," said the summit's organizer. "The companies that embrace this reality will be the leaders of tomorrow."

The event concluded with several major announcements, including new corporate commitments to environmental goals and industry-wide collaboration initiatives.`,
    category: 'business',
    author: 'Marcus Johnson',
    date: '2025-12-01',
    readTime: '6 min',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80',
    tags: ['Summit', 'Leadership', 'Sustainability'],
  },
];

export const searchSuggestions = [
  'AI',
  'Elections',
  'Match Highlights',
  'Movie Review',
  'Finance News',
  'Trending Headlines',
  'Technology',
  'Sports',
  'Business',
  'Entertainment',
];

export const getArticlesByCategory = (category: Category): Article[] => {
  return articles.filter((article) => article.category === category);
};

export const getTrendingArticles = (): Article[] => {
  return articles.filter((article) => article.isTrending);
};

export const getBreakingNews = (): Article[] => {
  return articles.filter((article) => article.isBreaking);
};

export const getArticleById = (id: string): Article | undefined => {
  return articles.find((article) => article.id === id);
};

export const searchArticles = (query: string): Article[] => {
  const lowerQuery = query.toLowerCase();
  return articles.filter(
    (article) =>
      article.title.toLowerCase().includes(lowerQuery) ||
      article.excerpt.toLowerCase().includes(lowerQuery) ||
      article.tags.some((tag) => tag.toLowerCase().includes(lowerQuery)) ||
      article.category.toLowerCase().includes(lowerQuery)
  );
};
