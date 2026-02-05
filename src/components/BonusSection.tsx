import { motion } from "framer-motion";
import { Gift, Megaphone, Users, Bot, Sparkles } from "lucide-react";

const bonuses = [
  {
    icon: Gift,
    title: "Entrada gratuita no Marketplace",
    description: "Acesse nossa plataforma de vendas sem custo adicional",
  },
  {
    icon: Megaphone,
    title: "1 mês de publicidade",
    description: "Publicidade gratuita dentro do Marketplace por 30 dias",
  },
  {
    icon: Users,
    title: "Leads qualificados",
    description: "Receba clientes vindos dos Grupos de Bairro",
  },
  {
    icon: Bot,
    title: "Inteligência Artificial",
    description: "IA conectada aos grupos locais, identificando pedidos e necessidades de clientes da sua região",
  },
];

const BonusSection = () => {
  return (
    <section className="relative overflow-hidden bg-muted py-20 md:py-28">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -right-20 top-0 h-72 w-72 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-accent/5 blur-3xl" />
      </div>

      <div className="container relative mx-auto px-4">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-2 text-sm font-semibold text-accent">
            <Sparkles className="h-4 w-4" />
            Exclusivo
          </span>
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
            Bônus Exclusivos para{" "}
            <span className="text-gradient">Impulsionar Suas Vendas</span>
          </h2>
        </motion.div>

        {/* Bonus cards */}
        <div className="grid gap-6 md:grid-cols-2">
          {bonuses.map((bonus, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-8 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover"
            >
              {/* Gradient background on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              
              <div className="relative flex gap-5">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-accent-gradient text-accent-foreground shadow-accent">
                  <bonus.icon className="h-8 w-8" />
                </div>
                
                <div>
                  <h3 className="mb-2 text-xl font-bold text-foreground">
                    {bonus.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {bonus.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BonusSection;
