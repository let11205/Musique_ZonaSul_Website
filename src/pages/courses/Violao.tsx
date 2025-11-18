import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Music, CheckCircle2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import heroImage from "@/assets/hero-violao.jpg";
import sideImage from "@/assets/side-violao.jpg";

const Violao = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Aulas de Violão – Do Zero ao Avançado na Musique | Musique Zona Sul";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Aprenda violão na Musique. Curso completo de violão do básico ao avançado. Técnica, repertório personalizado e evolução garantida. Agende sua aula experimental!"
      );
    }
  }, []);

  const scrollToForm = () => {
    navigate('/', { state: { scrollTo: 'agendamento' } });
  };

  const benefits = [
    "Base sólida com exercícios direcionados",
    "Metodologia prática e evolutiva",
    "Integração de técnica, ritmo e percepção",
    "Ambiente leve e motivador",
    "Evolução do básico ao avançado"
  ];

  return (
    <div className="min-h-screen flex flex-col pt-16">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="Aulas de Violão na Musique"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Aulas de Violão
            <span className="block gradient-text mt-2">Do Zero ao Avançado na Musique</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl">
            Aprenda a tocar com segurança, musicalidade e expressão.
          </p>
          <Button size="lg" className="pulse-gold" onClick={scrollToForm}>
            <Music className="w-5 h-5 mr-2" />
            Agende sua aula experimental e dê o primeiro passo para evoluir no violão!
          </Button>
        </div>
      </section>

      {/* Sobre o Curso */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              Sobre o <span className="gradient-text">Curso de Violão</span>
            </h2>
            
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
              <p>
                O curso de violão da Musique foi desenvolvido para quem deseja aprender de forma prática, musical e evolutiva. A cada aula, o aluno constrói uma base sólida, com exercícios direcionados ao seu nível e ao estilo que deseja tocar.
              </p>
              <p>
                A metodologia integra técnica, ritmo, percepção e repertório, criando um ambiente de aprendizado leve, motivador e totalmente personalizado.
              </p>
              <p>
                Se você sempre quis tocar suas músicas favoritas, acompanhar voz, improvisar ou desenvolver técnica avançada, este curso oferece o caminho ideal.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mt-12">
              {benefits.map((benefit, index) => (
                <Card key={index} className="border-primary/20">
                  <CardContent className="flex items-start gap-3 p-6">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <p className="text-foreground font-medium">{benefit}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Seção com Imagem Lateral */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Metodologia <span className="gradient-text">Prática e Personalizada</span>
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  No curso de violão, o aluno explora diferentes estilos musicais — do pop ao MPB, rock, sertanejo e fingerstyle. As aulas combinam teoria aplicada, exercícios práticos e estudos que fortalecem coordenação, precisão e fluidez.
                </p>
                <p>
                  O professor acompanha sua evolução de perto, adaptando cada passo à sua necessidade para garantir confiança desde os primeiros acordes até arranjos completos.
                </p>
              </div>
            </div>
            
            <div className="order-1 md:order-2">
              <img 
                src={sideImage} 
                alt="Metodologia de ensino de violão"
                className="rounded-lg shadow-2xl w-full hover-lift"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-secondary/10 to-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Pronto para Começar sua <span className="gradient-text">Jornada Musical?</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Agende sua aula experimental e dê o primeiro passo para evoluir no violão!
          </p>
          <Button size="lg" className="pulse-gold text-lg px-8 py-6" onClick={scrollToForm}>
            <Music className="w-5 h-5 mr-2" />
            Agendar Aula Experimental Gratuita
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Violao;
