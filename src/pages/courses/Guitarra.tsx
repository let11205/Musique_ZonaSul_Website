import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Music, CheckCircle2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import heroImage from "@/assets/hero-guitarra.jpg";
import sideImage from "@/assets/side-guitarra.jpg";

const Guitarra = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Aulas de Guitarra – Técnica, Estilo e Performance | Musique Zona Sul";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Aprenda guitarra na Musique. Curso de guitarra completo do básico ao avançado com solos, riffs e improvisação. Agende sua aula experimental!"
      );
    }
  }, []);

  const scrollToForm = () => {
    navigate('/', { state: { scrollTo: 'agendamento' } });
  };

  const benefits = [
    "Ensino moderno e dinâmico",
    "Técnicas avançadas (bends, ligados, improvisação)",
    "Metodologia adaptável ao seu nível",
    "Diversos estilos (rock, blues, pop, metal, funk)",
    "Aprofundamento técnico e estilístico"
  ];

  return (
    <div className="min-h-screen flex flex-col pt-16">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="Aulas de Guitarra na Musique"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Aulas de Guitarra
            <span className="block gradient-text mt-2">Técnica, Estilo e Performance</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl">
            Domine solos, riffs e linguagem musical com acompanhamento profissional.
          </p>
          <Button size="lg" className="pulse-gold" onClick={scrollToForm}>
            <Music className="w-5 h-5 mr-2" />
            Agende a sua Aula Experimental
          </Button>
        </div>
      </section>

      {/* Sobre o Curso */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              Sobre o <span className="gradient-text">Curso de Guitarra</span>
            </h2>
            
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
              <p>
                O curso de guitarra da Musique é focado em ensino moderno, dinâmico e prático. O aluno aprende desde os fundamentos até técnicas avançadas como palhetada alternada, bends, ligados, improvisação, construção de solos e percepção harmônica.
              </p>
              <p>
                A metodologia é adaptável: iniciantes aprendem com segurança e clareza, enquanto alunos experientes recebem aprofundamento técnico e estilístico.
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
                Evolução <span className="gradient-text">Real e Contínua</span>
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  As aulas trabalham repertórios variados: rock, blues, pop, metal, funky e soul, permitindo que o aluno evolua dentro de seu estilo favorito. Cada exercício é pensado para desenvolver musicalidade, precisão e presença sonora.
                </p>
                <p>
                  O professor acompanha o processo de forma individualizada, garantindo evolução real e contínua.
                </p>
              </div>
            </div>
            
            <div className="order-1 md:order-2">
              <img 
                src={sideImage} 
                alt="Metodologia de ensino de guitarra"
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
            Pronto para <span className="gradient-text">Dominar a Guitarra?</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Agende sua aula experimental e comece a dominar a guitarra do jeito que sempre imaginou!
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

export default Guitarra;
