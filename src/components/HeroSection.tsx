import { Button } from "@/components/ui/button";
import { Music, Play } from "lucide-react";
import heroImage from "@/assets/hero-music-studio.jpg";

const HeroSection = () => {
  const scrollToForm = () => {
    const element = document.getElementById('agendamento');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToCourses = () => {
    const element = document.getElementById('cursos');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Estúdio musical profissional" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70"></div>
      </div>

      {/* Floating Musical Notes */}
      <div className="absolute inset-0 z-10 overflow-hidden pointer-events-none">
        <div className="floating-notes absolute top-1/4 left-1/4 text-primary/30">
          <Music className="w-8 h-8" />
        </div>
        <div className="floating-notes absolute top-3/4 right-1/4 text-secondary/30">
          <Music className="w-6 h-6" />
        </div>
        <div className="floating-notes absolute top-1/2 right-1/3 text-primary/30">
          <Music className="w-10 h-10" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-20 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
          Musique Zona Sul
          <span className="block text-2xl md:text-3xl lg:text-4xl font-normal mt-2 text-primary">
            Sua jornada musical começa aqui
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
          Transformando paixão em performance. Descubra seu potencial musical conosco!
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            className="text-lg px-8 py-6 pulse-gold hover-lift"
            onClick={scrollToForm}
          >
            <Play className="w-5 h-5 mr-2" />
            Agende Sua Aula Gratuita
          </Button>
          
          <Button 
            size="lg" 
            variant="outline" 
            className="text-lg px-8 py-6 border-white/30 text-white hover:bg-white/10 hover:text-white"
            onClick={scrollToCourses}
          >
            <Music className="w-5 h-5 mr-2" />
            Conheça Nossos Cursos
          </Button>
        </div>

        {/* Stats or Trust Indicators */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-white/80">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">500+</div>
            <div className="text-sm">Alunos Satisfeitos</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">10+</div>
            <div className="text-sm">Anos de Experiência</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">6</div>
            <div className="text-sm">Modalidades Musicais</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;