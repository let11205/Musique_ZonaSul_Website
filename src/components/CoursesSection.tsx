import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Guitar, Music2, Mic, Baby, Piano, Zap } from "lucide-react";

// Import course images
import bassImage from "@/assets/bass-course.jpg";
import guitarImage from "@/assets/guitar-course.jpg";
import electricGuitarImage from "@/assets/electric-guitar-course.jpg";
import vocalImage from "@/assets/vocal-course.jpg";
import kidsImage from "@/assets/kids-music-course.jpg";
import keyboardImage from "@/assets/keyboard-course.jpg";

const CoursesSection = () => {
  const courses = [
    {
      title: "Baixo",
      description: "Domine as técnicas fundamentais do baixo elétrico e desenvolva seu groove único.",
      image: bassImage,
      icon: Music2,
      color: "text-secondary"
    },
    {
      title: "Violão",
      description: "Aprenda desde acordes básicos até técnicas avançadas de violão popular e clássico.",
      image: guitarImage,
      icon: Guitar,
      color: "text-primary"
    },
    {
      title: "Guitarra",
      description: "Explore diferentes estilos e técnicas na guitarra elétrica com equipamentos profissionais.",
      image: electricGuitarImage,
      icon: Zap,
      color: "text-secondary"
    },
    {
      title: "Canto",
      description: "Desenvolva sua voz com técnicas de respiração, projeção e interpretação vocal.",
      image: vocalImage,
      icon: Mic,
      color: "text-primary"
    },
    {
      title: "Musicalização Infantil",
      description: "Introdução lúdica à música para crianças através de jogos e atividades criativas.",
      image: kidsImage,
      icon: Baby,
      color: "text-secondary"
    },
    {
      title: "Teclado",
      description: "Aprenda piano e teclado com repertório diversificado e teoria musical aplicada.",
      image: keyboardImage,
      icon: Piano,
      color: "text-primary"
    }
  ];

  const scrollToForm = () => {
    const element = document.getElementById('agendamento');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="cursos" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Explore Nossas 
            <span className="gradient-text"> Modalidades Musicais</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Descubra o instrumento perfeito para você e comece sua jornada musical com nossos professores especializados.
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => {
            const IconComponent = course.icon;
            return (
              <Card 
                key={course.title} 
                className="group hover-lift cursor-pointer border-0 shadow-lg overflow-hidden"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={course.image} 
                    alt={`Curso de ${course.title}`}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className={`absolute top-4 right-4 p-2 rounded-full bg-background/90 ${course.color}`}>
                    <IconComponent className="w-5 h-5" />
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {course.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {course.description}
                  </p>
                  <Button 
                    variant="outline" 
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all duration-300"
                    onClick={scrollToForm}
                  >
                    Experimente Agora
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default CoursesSection;