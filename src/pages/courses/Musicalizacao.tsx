import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Music, CheckCircle2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import heroImage from "@/assets/hero-musicalizacao.jpg";
import sideImage from "@/assets/side-musicalizacao.jpg";

const Musicalizacao = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Musicalização Infantil – Aprendizado Lúdico | Musique Zona Sul";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Musicalização infantil na Musique Zona Sul em Porto Alegre. Desenvolvimento musical, motor e cognitivo através de atividades lúdicas. Agende uma aula experimental!"
      );
    }
  }, []);

  const scrollToForm = () => {
    navigate('/', { state: { scrollTo: 'agendamento' } });
  };

  const benefits = [
    "Desenvolvimento motor e cognitivo",
    "Atividades lúdicas e criativas",
    "Percepção musical aguçada",
    "Socialização e autoestima",
    "Preparação para instrumentos"
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="Musicalização Infantil na Musique"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Musicalização Infantil
            <span className="block gradient-text mt-2">Aprendizado Lúdico e Criativo</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl">
            Desenvolvimento musical divertido, motor e cognitivo.
          </p>
          <Button size="lg" className="pulse-gold" onClick={scrollToForm}>
            <Music className="w-5 h-5 mr-2" />
            Agende uma Aula Experimental
          </Button>
        </div>
      </section>

      {/* Sobre o Curso */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              Sobre a <span className="gradient-text">Musicalização Infantil</span>
            </h2>
            
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
              <p>
                A musicalização da Musique é voltada para crianças e adolescentes que estão dando seus primeiros passos no universo musical.
              </p>
              <p>
                Através de atividades lúdicas, jogos rítmicos, instrumentos próprios para a faixa etária e dinâmicas sensoriais, o aluno desenvolve percepção, ritmo, coordenação e expressão.
              </p>
              <p>
                O foco é aprender brincando, em um ambiente acolhedor, seguro e estimulante.
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
                Aprender <span className="gradient-text">Brincando</span>
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Cada aula trabalha canto, ritmo, expressão corporal, reconhecimento sonoro e coordenação motora.
                </p>
                <p>
                  A metodologia fortalece criatividade, socialização, autoestima e atenção — preparando o aluno para qualquer instrumento no futuro.
                </p>
              </div>
            </div>
            
            <div className="order-1 md:order-2">
              <img 
                src={sideImage} 
                alt="Metodologia de musicalização infantil"
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
            Descubra o <span className="gradient-text">Prazer de Aprender Música</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Agende uma aula experimental e veja seu filho descobrir o prazer de aprender música!
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

export default Musicalizacao;
