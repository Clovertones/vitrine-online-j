import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, Store, Smartphone } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-hero-gradient">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-primary-foreground/10 blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 5, repeat: Infinity }}
        />
        <motion.div
          className="absolute top-1/2 -left-40 h-96 w-96 rounded-full bg-accent/20 blur-3xl"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 6, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-1/4 h-64 w-64 rounded-full bg-primary-foreground/10 blur-3xl"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
      </div>

      <div className="container relative mx-auto flex min-h-screen flex-col items-center justify-center px-4 py-20 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-2 backdrop-blur-sm"
        >
          <Store className="h-4 w-4 text-primary-foreground" />
          <span className="text-sm font-medium text-primary-foreground">
            Solução para pequenas e médias empresas
          </span>
        </motion.div>

        {/* Main headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-6 max-w-4xl text-4xl font-extrabold leading-tight tracking-tight text-primary-foreground md:text-5xl lg:text-6xl xl:text-7xl"
        >
          CATÁLOGO DIGITAL
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-4 max-w-2xl text-xl font-semibold text-primary-foreground/90 md:text-2xl lg:text-3xl"
        >
          Seu negócio vendendo mesmo com a loja fechada.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-10 max-w-3xl text-base text-primary-foreground/80 md:text-lg"
        >
          Transforme sua empresa em uma vitrine online profissional e esteja disponível 
          para seus clientes 24 horas por dia.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col gap-4 sm:flex-row"
        >
          <Button variant="hero" size="xl" className="group">
            Comece Agora
            <ArrowRight className="transition-transform group-hover:translate-x-1" />
          </Button>
          <Button variant="heroOutline" size="xl">
            Saiba Mais
          </Button>
        </motion.div>

        {/* Feature badges */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 flex flex-wrap items-center justify-center gap-6 md:gap-10"
        >
          <div className="flex items-center gap-2 text-primary-foreground/80">
            <Clock className="h-5 w-5" />
            <span className="text-sm font-medium">Disponível 24h</span>
          </div>
          <div className="flex items-center gap-2 text-primary-foreground/80">
            <Smartphone className="h-5 w-5" />
            <span className="text-sm font-medium">100% Responsivo</span>
          </div>
          <div className="flex items-center gap-2 text-primary-foreground/80">
            <Store className="h-5 w-5" />
            <span className="text-sm font-medium">Estilo E-commerce</span>
          </div>
        </motion.div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
        >
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="hsl(210 40% 98%)"
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
