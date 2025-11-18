import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Target, Mic2, MapPin } from "lucide-react";

const DifferentialsSection = () => {
  const differentials = [
    {
      icon: GraduationCap,
      title: "Professores Qualificados",
      description: "Equipe formada por músicos profissionais com experiência em ensino e performance ao vivo.",
      color: "text-primary"
    },
    {
      icon: Target,
      title: "Metodologia Personalizada",
      description: "Plano de estudos individual adaptado ao seu ritmo, objetivos e estilo musical preferido.",
      color: "text-secondary"
    },
    {
      icon: Mic2,
      title: "Estúdio de Gravação",
      description: "Acesso a equipamentos profissionais para gravação e prática em ambiente real de estúdio.",
      color: "text-primary"
    },
    {
      icon: MapPin,
      title: "Localização Privilegiada",
      description: "Situada na Zona Sul de Porto Alegre, com fácil acesso e estacionamento disponível.",
      color: "text-secondary"
    }
  ];

  return (
    <section className="py-20 bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Por Que Escolher a 
            <span className="gradient-text"> Musique Zona Sul?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Descubra os diferenciais que fazem da nossa escola o local ideal para sua evolução musical.
          </p>
        </div>

        {/* Differentials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {differentials.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <Card 
                key={item.title}
                className="group hover-lift text-center border-0 shadow-lg bg-card/80 backdrop-blur-sm"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardContent className="p-8">
                  <div className={`inline-flex p-4 rounded-full bg-background/80 mb-6 ${item.color} group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-8 h-8" />
                  </div>
                  
                  <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Additional Information */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Mais de <span className="text-primary">500 alunos</span> já descobriram seu talento conosco!
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Junte-se à nossa comunidade musical e faça parte de uma história de sucesso que se escreve a cada acorde, nota e apresentação.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DifferentialsSection;