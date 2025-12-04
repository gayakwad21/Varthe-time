import { motion } from 'framer-motion';

interface AdBannerProps {
  variant?: 'horizontal' | 'vertical';
}

export function AdBanner({ variant = 'horizontal' }: AdBannerProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className={`
        bg-muted rounded-xl flex items-center justify-center text-muted-foreground
        ${variant === 'horizontal' ? 'h-24 md:h-32 w-full' : 'w-full h-64 md:h-[400px]'}
      `}
    >
      <div className="text-center">
        <p className="text-sm font-medium uppercase tracking-wider">Advertisement</p>
        <p className="text-xs mt-1">Your Ad Here</p>
      </div>
    </motion.div>
  );
}
