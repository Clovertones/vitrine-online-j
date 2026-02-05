import { motion } from "framer-motion";
import { 
  Clock, 
  Zap, 
  Building2, 
  Eye, 
  ShoppingCart, 
  Coins, 
  TrendingUp 
} from "lucide-react";

const benefits = [
  {
    icon: Clock,
    title: "Venda 24 horas",
    description: "Receba pedidos todos os dias, inclusive fora do horário comercial",
  },
  {
    icon: Zap,
    title: "Atendimento rápido",
    description: "Organize seus pedidos e atenda seus clientes com mais agilidade",
  },
  {
    icon: Building2,
    title: "Imagem profissional",
    description: "Transmita modernidade e profissionalismo para sua empresa",
  },
  {
    icon: Eye,
    title: "Maior visibilidade",
    description: "Seja encontrado por mais clientes no mercado local",
  },
  {
    icon: ShoppingCart,
    title: "Mais praticidade",
    description: "Facilite a vida do seu cliente na hora de comprar",
  },
  {
    icon: Coins,
    title: "Custo acessível",
    description: "Investimento muito menor que e-commerces tradicionais",
  },
  {
    icon: TrendingUp,
    title: "Competitividade",
    description: "Não fique para trás no mercado digital",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const BenefitsSection = () => {
  return (
    <section className="bg-background py-20 md:py-28">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <span className="mb-4 inline-block rounded-full bg-secondary px-4 py-2 text-sm font-semibold text-secondary-foreground">
            Benefícios
          </span>
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
            Por que escolher o{" "}
            <span className="text-gradient">Catálogo Digital</span>?
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Uma solução eficiente, prática e pensada para a realidade do seu dia a dia
          </p>
        </motion.div>

        {/* Benefits grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative overflow-hidden rounded-2xl bg-card p-6 shadow-card transition-all duration-300 hover:-translate-y-2 hover:shadow-card-hover"
            >
              {/* Gradient accent on hover */}
              <div className="absolute inset-x-0 top-0 h-1 bg-hero-gradient opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              
              <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-secondary text-primary transition-all duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground">
                <benefit.icon className="h-7 w-7" />
              </div>
              
              <h3 className="mb-2 text-lg font-bold text-foreground">
                {benefit.title}
              </h3>
              
              <p className="text-sm text-muted-foreground">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Info text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mx-auto mt-12 max-w-3xl text-center text-muted-foreground"
        >
          Enquanto plataformas tradicionais exigem altos investimentos e estruturas complexas, 
          o <span className="font-semibold text-primary">Catálogo Digital</span> oferece uma 
          solução eficiente, prática e pensada para a realidade do seu dia a dia.
        </motion.p>
      </div>
    </section>
  );
};

export default BenefitsSection;
