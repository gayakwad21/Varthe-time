import { motion } from 'framer-motion';
import { Megaphone, FileText, Crown, Check, ArrowRight } from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';

const adPackages = [
  { name: 'Banner Ad', price: '$500', duration: '/week', features: ['Homepage placement', '100K+ impressions', 'Mobile optimized'] },
  { name: 'Sidebar Ad', price: '$300', duration: '/week', features: ['Category pages', '50K+ impressions', 'Targeted audience'] },
  { name: 'Sponsored Article', price: '$1,000', duration: '/article', features: ['Full editorial support', 'Social media promotion', 'SEO optimization'] },
];

const subscriptionTiers = [
  {
    name: 'Free',
    price: '$0',
    duration: '/month',
    features: ['Basic news access', 'Breaking news alerts', 'Ad-supported experience', 'Limited articles/month'],
    highlighted: false,
  },
  {
    name: 'Plus',
    price: '$9.99',
    duration: '/month',
    features: ['Unlimited articles', 'Ad-free reading', 'Daily newsletter', 'Comment privileges', 'Basic analytics'],
    highlighted: true,
  },
  {
    name: 'Premium',
    price: '$19.99',
    duration: '/month',
    features: ['Everything in Plus', 'Exclusive content', 'Early access', 'Priority support', 'Advanced analytics', 'API access'],
    highlighted: false,
  },
];

export default function Services() {
  return (
    <Layout showTicker={false}>
      {/* Hero */}
      <section className="relative py-20 md:py-32 bg-primary overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              Our Services
            </h1>
            <p className="text-primary-foreground/80 text-lg md:text-xl">
              Advertising solutions and subscription plans tailored to your needs
            </p>
          </motion.div>
        </div>
      </section>

      {/* Advertising */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 text-primary mb-4">
              <Megaphone className="h-5 w-5" />
              <span className="text-sm font-semibold uppercase tracking-wider">Advertising</span>
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Advertising Packages
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Reach millions of engaged readers with our targeted advertising solutions
            </p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6">
            {adPackages.map((pkg, index) => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card p-6 rounded-xl border border-border hover:border-primary/30 transition-all hover:-translate-y-1 hover:shadow-card-hover"
              >
                <h3 className="font-display font-bold text-xl text-foreground mb-2">{pkg.name}</h3>
                <p className="mb-4">
                  <span className="text-3xl font-bold text-primary">{pkg.price}</span>
                  <span className="text-muted-foreground">{pkg.duration}</span>
                </p>
                <ul className="space-y-2 mb-6">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-muted-foreground text-sm">
                      <Check className="h-4 w-4 text-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button variant="outline" className="w-full">
                  Get Started
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sponsored Content */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 text-primary mb-4">
                <FileText className="h-5 w-5" />
                <span className="text-sm font-semibold uppercase tracking-wider">Sponsored Content</span>
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                Tell Your Story Through Quality Content
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Partner with our editorial team to create compelling sponsored content that resonates with our audience. Our experienced writers will craft stories that align with your brand while maintaining our high editorial standards.
              </p>
              <ul className="space-y-3 mb-8">
                {['Full editorial support', 'Native advertising format', 'Social media amplification', 'Performance analytics'].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-foreground">
                    <Check className="h-5 w-5 text-primary" />
                    {item}
                  </li>
                ))}
              </ul>
              <Button className="gap-2">
                Learn More <ArrowRight className="h-4 w-4" />
              </Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80"
                alt="Sponsored content"
                className="rounded-2xl shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Subscriptions */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 text-primary mb-4">
              <Crown className="h-5 w-5" />
              <span className="text-sm font-semibold uppercase tracking-wider">Subscriptions</span>
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Choose Your Plan
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Unlock premium features and support quality journalism
            </p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {subscriptionTiers.map((tier, index) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`p-6 rounded-xl transition-all hover:-translate-y-1 ${
                  tier.highlighted
                    ? 'bg-primary text-primary-foreground ring-2 ring-primary ring-offset-2 ring-offset-background'
                    : 'bg-card border border-border hover:border-primary/30'
                }`}
              >
                <h3 className={`font-display font-bold text-xl mb-2 ${tier.highlighted ? 'text-primary-foreground' : 'text-foreground'}`}>
                  {tier.name}
                </h3>
                <p className="mb-4">
                  <span className={`text-4xl font-bold ${tier.highlighted ? 'text-primary-foreground' : 'text-primary'}`}>
                    {tier.price}
                  </span>
                  <span className={tier.highlighted ? 'text-primary-foreground/80' : 'text-muted-foreground'}>
                    {tier.duration}
                  </span>
                </p>
                <ul className="space-y-2 mb-6">
                  {tier.features.map((feature) => (
                    <li
                      key={feature}
                      className={`flex items-center gap-2 text-sm ${
                        tier.highlighted ? 'text-primary-foreground/90' : 'text-muted-foreground'
                      }`}
                    >
                      <Check className={`h-4 w-4 ${tier.highlighted ? 'text-secondary' : 'text-primary'}`} />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  variant={tier.highlighted ? 'secondary' : 'outline'}
                  className="w-full"
                >
                  {tier.name === 'Free' ? 'Get Started' : 'Subscribe'}
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
