import { motion } from 'framer-motion';
import { Target, History, Users, Award, Shield, Zap, Heart, Globe } from 'lucide-react';
import { Layout } from '@/components/layout/Layout';

const team = [
  { name: 'Sarah Johnson', role: 'Editor-in-Chief', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80' },
  { name: 'Michael Chen', role: 'Managing Editor', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80' },
  { name: 'Emily Rodriguez', role: 'Senior Reporter', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80' },
  { name: 'James Williams', role: 'Tech Editor', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80' },
];

const values = [
  { icon: Shield, title: 'Accuracy', description: 'We verify every story before publishing to ensure factual reporting.' },
  { icon: Zap, title: 'Speed', description: 'Breaking news delivered instantly without compromising quality.' },
  { icon: Heart, title: 'Integrity', description: 'Honest journalism that serves the public interest above all.' },
  { icon: Globe, title: 'Reach', description: 'Global coverage with local perspectives that matter.' },
];

export default function About() {
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
              About NewsPortal
            </h1>
            <p className="text-primary-foreground/80 text-lg md:text-xl">
              Your trusted source for breaking news and in-depth journalism since 2010
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 text-primary mb-4">
                <Target className="h-5 w-5" />
                <span className="text-sm font-semibold uppercase tracking-wider">Our Mission</span>
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                Delivering Truth in the Digital Age
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                At NewsPortal, we believe in the power of accurate, timely, and unbiased journalism. Our mission is to keep you informed about the events shaping our world, from local stories to global developments.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We're committed to upholding the highest standards of journalistic integrity, ensuring that every story we publish has been thoroughly researched and verified. In an era of misinformation, we stand as a beacon of truth and reliability.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=600&q=80"
                alt="Newsroom"
                className="rounded-2xl shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* History */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 text-primary mb-4">
              <History className="h-5 w-5" />
              <span className="text-sm font-semibold uppercase tracking-wider">Our History</span>
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              A Legacy of Excellence
            </h2>
            <p className="text-muted-foreground text-lg">
              Founded in 2010, NewsPortal started as a small digital publication with a handful of dedicated journalists. Today, we've grown into one of the most trusted news sources, reaching millions of readers worldwide.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-4 gap-6 text-center">
            {[
              { number: '15+', label: 'Years of Excellence' },
              { number: '50M+', label: 'Monthly Readers' },
              { number: '500+', label: 'Stories Daily' },
              { number: '100+', label: 'Journalists' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card p-6 rounded-xl"
              >
                <p className="font-display text-4xl font-bold text-primary mb-2">{stat.number}</p>
                <p className="text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 text-primary mb-4">
              <Award className="h-5 w-5" />
              <span className="text-sm font-semibold uppercase tracking-wider">Our Values</span>
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
              What We Stand For
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card p-6 rounded-xl border border-border hover:border-primary/30 transition-colors"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <value.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-display font-bold text-foreground mb-2">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 text-primary mb-4">
              <Users className="h-5 w-5" />
              <span className="text-sm font-semibold uppercase tracking-wider">Our Team</span>
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
              Meet the Editorial Team
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card rounded-xl overflow-hidden group"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-4 text-center">
                  <h3 className="font-display font-bold text-foreground">{member.name}</h3>
                  <p className="text-muted-foreground text-sm">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
