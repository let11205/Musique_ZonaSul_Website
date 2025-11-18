import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Music, CheckCircle2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import heroImage from "@/assets/hero-baixo.jpg";
import sideImage from "@/assets/side-baixo.jpg";

const Baixo = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Aulas de Baixo – Groove, Técnica e Musicalidade | Musique Zona Sul";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Aprenda baixo na Musique. Curso de baixo completo com groove, técnica e musicalidade. Slap, tapping e construção de linhas. Agende sua aula experimental!"
      );
    }
  }, []);

  const scrollToForm = () => {
    navigate('/', { state: { scrollTo: 'agendamento' } });
  };

  const benefits = [
    "Desenvolvimento de groove e pegada",
    "Técnicas: pizzicato, slapping, tapping",
    "Consciência rítmica e presença musical",
    "Diversos estilos (pop, jazz, rock, funk, gospel)",
    "Construção de linhas de baixo"
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="Aulas de Baixo na Musique"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Aulas de Baixo
            <span className="block gradient-text mt-2">Groove, Técnica e Musicalidade</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl">
            Construa base sólida, consciência rítmica e presença musical.
          </p>
          <Button size="lg" className="pulse-gold" onClick={scrollToForm}>
            <Music className="w-5 h-5 mr-2" />
            Agende sua Aula Experimental
          </Button>
        </div>
      </section>

      {/* Sobre o Curso */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              Sobre o <span className="gradient-text">Curso de Baixo</span>
            </h2>
            
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
              <p>
                O curso de baixo na Musique ensina o aluno a desenvolver groove, pegada, ritmo e entendimento musical. O aprendizado é prático, fluido e conectado com diferentes estilos: pop, jazz, rock, MPB, funk e gospel.
              </p>
              <p>
                O aluno aprende técnicas como pizzicato, slapping, tapping, ghost notes, leitura de groove e construção de linhas de baixo.
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
                Evolução <span className="gradient-text">Personalizada</span>
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Com acompanhamento próximo do professor, o aluno entende seu papel dentro da música, aprende a ouvir a banda, criar linhas próprias e evoluir no tempo certo.
                </p>
                <p>
                  O foco é garantir segurança, consistência e musicalidade desde os primeiros exercícios.
                </p>
              </div>
            </div>
            
            <div className="order-1 md:order-2">
              <img 
                src={sideImage} 
                alt="Metodologia de ensino de baixo"
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
            Descubra o Poder do <span className="gradient-text">Groove</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Agende sua aula experimental e descubra o poder do groove no baixo!
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

export default Baixo;
