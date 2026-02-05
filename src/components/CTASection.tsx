import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Rocket } from "lucide-react";

const CTASection = () => {
  return (
    <section className="relative overflow-hidden bg-hero-gradient py-20 md:py-28">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute left-1/4 top-20 h-64 w-64 rounded-full bg-primary-foreground/10 blur-3xl"
          animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 5, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-1/4 h-80 w-80 rounded-full bg-accent/20 blur-3xl"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 6, repeat: Infinity }}
        />
      </div>

      <div className="container relative mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          {/* Icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-8 inline-flex h-20 w-20 items-center justify-center rounded-2xl bg-primary-foreground/10 backdrop-blur-sm"
          >
            <Rocket className="h-10 w-10 text-primary-foreground" />
          </motion.div>

          {/* Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-6 text-3xl font-bold text-primary-foreground md:text-4xl lg:text-5xl"
          >
            Não é apenas um site.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-8 text-xl text-primary-foreground/90 md:text-2xl"
          >
            É presença digital, vendas contínuas e conexão direta com quem realmente compra de você.
          </motion.p>

          {/* Features list */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mb-10 flex flex-wrap items-center justify-center gap-6"
          >
            {["Presença Digital", "Vendas Contínuas", "Conexão Direta"].map(
              (feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 text-primary-foreground/80"
                >
                  <CheckCircle2 className="h-5 w-5 text-accent" />
                  <span className="font-medium">{feature}</span>
                </div>
              )
            )}
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Button variant="hero" size="xl" className="group">
              Comece Agora
              <ArrowRight className="transition-transform group-hover:translate-x-1" />
            </Button>
            <p className="mt-4 text-sm text-primary-foreground/70">
              Em seguida, encaminharemos o rascunho do site para sua análise e aprovação.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
