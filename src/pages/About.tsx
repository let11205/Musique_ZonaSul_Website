import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ChevronRight, Home, Music, Users, Target, Award, Mic2, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import recitalImage from "@/assets/recital-musique.jpg";

const About = () => {
  return (
    <div className="min-h-screen pt-16">
      <Navigation />
      
      <main>
        {/* Breadcrumb */}
        <section className="bg-muted/30 py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex items-center space-x-2 text-sm">
              <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
                <Home className="w-4 h-4" />
              </Link>
              <ChevronRight className="w-4 h-4 text-muted-foreground" />
              <span className="text-foreground font-medium">Sobre a Escola</span>
            </nav>
          </div>
        </section>

        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-r from-primary/5 via-secondary/5 to-primary/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Sobre a <span className="gradient-text">Musique Zona Sul</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Conheça nossa história, nossa paixão pela música e o que nos motiva a formar novos talentos todos os dias.
            </p>
          </div>
        </section>

        {/* Internal Menu */}
        <section className="py-8 bg-background border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-center space-x-8">
              <a 
                href="#quem-somos" 
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('quem-somos')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Quem Somos
              </a>
              <a 
                href="#metodologia" 
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('metodologia')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Metodologia
              </a>
            </div>
          </div>
        </section>

        {/* Who We Are Section */}
        <section id="quem-somos" className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Users className="w-8 h-8 text-primary" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold">Quem Somos</h2>
                </div>

                <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    A <strong className="text-foreground">Musique Zona Sul</strong> nasceu do sonho de democratizar o ensino musical em Porto Alegre. Fundada há mais de 10 anos, nossa escola surgiu da paixão de músicos profissionais que acreditam no poder transformador da música.
                  </p>
                  
                  <p>
                    Localizada estrategicamente na Zona Sul da capital gaúcha, nossa escola se tornou referência em educação musical, formando centenas de músicos de todos os níveis e idades. Desde crianças dando seus primeiros passos na musicalização até adultos realizando sonhos musicais adormecidos.
                  </p>

                  <div className="bg-secondary/10 p-6 rounded-lg">
                    <h3 className="font-semibold text-secondary mb-3">Nossa Missão</h3>
                    <p>
                      Proporcionar ensino musical de qualidade, desenvolvendo talentos e formando não apenas músicos tecnicamente capazes, mas artistas completos e apaixonados pela arte.
                    </p>
                  </div>

                  <div className="bg-primary/10 p-6 rounded-lg">
                    <h3 className="font-semibold text-primary mb-3">Nossa Visão</h3>
                    <p>
                      Ser reconhecida como a melhor escola de música da região, referência em excelência pedagógica e formação de talentos musicais.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <Card className="hover-lift">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <Award className="w-8 h-8 text-primary" />
                      <h3 className="text-xl font-semibold">Nossos Valores</h3>
                    </div>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span><strong>Excelência:</strong> Buscamos sempre a melhor qualidade em tudo que fazemos</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                        <span><strong>Paixão:</strong> Música é nossa vida e isso contagia nossos alunos</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span><strong>Respeito:</strong> Cada aluno tem seu ritmo e suas particularidades</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                        <span><strong>Inovação:</strong> Sempre buscando novas formas de ensinar e aprender</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">500+</div>
                    <div className="text-sm text-muted-foreground">Alunos Formados</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-secondary mb-2">10+</div>
                    <div className="text-sm text-muted-foreground">Anos de História</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">6</div>
                    <div className="text-sm text-muted-foreground">Modalidades</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-secondary mb-2">100%</div>
                    <div className="text-sm text-muted-foreground">Satisfação</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Separator />

        {/* Community Section */}
        <section className="py-20 bg-gradient-to-b from-background to-muted/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-3 mb-4">
                <div className="p-3 rounded-full bg-secondary/10">
                  <Heart className="w-8 h-8 text-secondary" />
                </div>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Nossa <span className="gradient-text">Comunidade</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Muito mais que uma escola, somos uma família musical unida pela paixão pela arte
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative group overflow-hidden rounded-2xl shadow-2xl">
                <img 
                  src={recitalImage} 
                  alt="Alunos e professores da Musique Zona Sul em recital"
                  className="w-full h-auto transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <div className="space-y-6">
                <Card className="hover-lift border-secondary/20">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-full bg-secondary/10 flex-shrink-0">
                        <Music className="w-6 h-6 text-secondary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2">Recitais e Apresentações</h3>
                        <p className="text-muted-foreground">
                          Realizamos recitais periódicos onde nossos alunos podem apresentar seu progresso, ganhar experiência de palco e celebrar suas conquistas junto com família e amigos.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover-lift border-primary/20">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-full bg-primary/10 flex-shrink-0">
                        <Users className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2">Ambiente Acolhedor</h3>
                        <p className="text-muted-foreground">
                          Nossa escola proporciona um ambiente amigável e acolhedor onde alunos de todas as idades se sentem confortáveis para aprender, errar e crescer musicalmente.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover-lift border-secondary/20">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-full bg-secondary/10 flex-shrink-0">
                        <Mic2 className="w-6 h-6 text-secondary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2">Professores Dedicados</h3>
                        <p className="text-muted-foreground">
                          Nossa equipe de professores é formada por músicos profissionais apaixonados pelo ensino, comprometidos com o desenvolvimento individual de cada aluno.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <Separator />

        {/* Methodology Section */}
        <section id="metodologia" className="py-20 bg-muted/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="lg:order-2">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 rounded-full bg-secondary/10">
                    <Target className="w-8 h-8 text-secondary" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold">Nossa Metodologia</h2>
                </div>

                <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    Nossa metodologia é baseada em décadas de experiência e no que há de mais moderno em pedagogia musical. Acreditamos que cada aluno é único, por isso desenvolvemos planos de estudo individualizados.
                  </p>

                  <div className="bg-primary/10 p-6 rounded-lg">
                    <h3 className="font-semibold text-primary mb-3 flex items-center gap-2">
                      <Music className="w-5 h-5" />
                      A Importância da Prática
                    </h3>
                    <p>
                      Teoria sem prática não forma músicos. Por isso, desde a primeira aula, nossos alunos têm contato direto com o instrumento, desenvolvendo técnica e musicalidade simultaneamente.
                    </p>
                  </div>

                  <div className="bg-secondary/10 p-6 rounded-lg">
                    <h3 className="font-semibold text-secondary mb-3 flex items-center gap-2">
                      <Mic2 className="w-5 h-5" />
                      Estúdio de Gravação
                    </h3>
                    <p>
                      Nosso estúdio profissional permite que os alunos vivenciem a experiência completa de gravação, desenvolvendo habilidades técnicas e artísticas em ambiente real.
                    </p>
                  </div>

                  <p>
                  Combinamos tradição e inovação, utilizando desde métodos clássicos comprovados até as mais modernas tecnologias de ensino musical, sempre respeitando o tempo e os objetivos de cada aluno.
                </p>
              </div>
            </div>

              <div className="lg:order-1">
                <Card className="hover-lift">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold mb-6 text-center">Nosso Método de Ensino</h3>
                    <div className="space-y-6">
                      {[
                        {
                          step: "01",
                          title: "Avaliação Inicial",
                          description: "Conhecemos seu nível atual e objetivos musicais"
                        },
                        {
                          step: "02", 
                          title: "Plano Personalizado",
                          description: "Criamos um programa de estudos sob medida para você"
                        },
                        {
                          step: "03",
                          title: "Prática Orientada",
                          description: "Aulas práticas com acompanhamento individual"
                        },
                        {
                          step: "04",
                          title: "Desenvolvimento Contínuo",
                          description: "Avaliamos progresso e ajustamos o plano constantemente"
                        }
                      ].map((item, index) => (
                        <div key={index} className="flex items-start gap-4">
                          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <span className="font-bold text-primary">{item.step}</span>
                          </div>
                          <div>
                            <h4 className="font-semibold mb-2">{item.title}</h4>
                            <p className="text-sm text-muted-foreground">{item.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;