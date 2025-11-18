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
        <section className="relative py-32 overflow-hidden">
          <div className="absolute inset-0">
            <img 
              src={recitalImage} 
              alt="Alunos e professores da Musique Zona Sul em recital"
              className="w-full h-full object-cover object-center"
            />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-background/90 backdrop-blur-md rounded-3xl p-8 md:p-12 shadow-2xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Sobre a <span className="gradient-text">Musique Zona Sul</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Conheça nossa história, nossa paixão pela música e o que nos motiva a formar novos talentos todos os dias.
              </p>
            </div>
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
        <section id="quem-somos" className="py-20 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
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

        {/* Testimonials Section */}
        <section className="py-20 bg-gradient-to-br from-secondary/10 via-primary/5 to-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-3 mb-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Heart className="w-8 h-8 text-primary" />
                </div>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                O Que Dizem <span className="gradient-text">Nossos Alunos</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Depoimentos de quem vive a experiência Musique Zona Sul
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="hover-lift bg-card/80 backdrop-blur">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-4 text-primary">
                    <Music className="w-5 h-5 fill-current" />
                    <Music className="w-5 h-5 fill-current" />
                    <Music className="w-5 h-5 fill-current" />
                    <Music className="w-5 h-5 fill-current" />
                    <Music className="w-5 h-5 fill-current" />
                  </div>
                  <p className="text-muted-foreground mb-4 italic">
                    "A Musique transformou minha relação com a música. Os professores são incríveis e sempre me incentivam a superar meus limites. Hoje toco violão em apresentações e jamais imaginei chegar tão longe!"
                  </p>
                  <div>
                    <p className="font-semibold text-foreground">Ana Carolina</p>
                    <p className="text-sm text-muted-foreground">Aluna de Violão há 2 anos</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover-lift bg-card/80 backdrop-blur">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-4 text-primary">
                    <Music className="w-5 h-5 fill-current" />
                    <Music className="w-5 h-5 fill-current" />
                    <Music className="w-5 h-5 fill-current" />
                    <Music className="w-5 h-5 fill-current" />
                    <Music className="w-5 h-5 fill-current" />
                  </div>
                  <p className="text-muted-foreground mb-4 italic">
                    "Meu filho começou na musicalização infantil e o desenvolvimento dele foi impressionante. Além de aprender música, melhorou a concentração e a coordenação. Recomendo muito a escola!"
                  </p>
                  <div>
                    <p className="font-semibold text-foreground">Mariana Santos</p>
                    <p className="text-sm text-muted-foreground">Mãe de aluno de Musicalização</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover-lift bg-card/80 backdrop-blur">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-4 text-primary">
                    <Music className="w-5 h-5 fill-current" />
                    <Music className="w-5 h-5 fill-current" />
                    <Music className="w-5 h-5 fill-current" />
                    <Music className="w-5 h-5 fill-current" />
                    <Music className="w-5 h-5 fill-current" />
                  </div>
                  <p className="text-muted-foreground mb-4 italic">
                    "Sempre quis aprender guitarra mas achava que era tarde demais. Na Musique descobri que nunca é tarde para realizar um sonho. A metodologia é excelente e já toco minhas músicas favoritas!"
                  </p>
                  <div>
                    <p className="font-semibold text-foreground">Roberto Silva</p>
                    <p className="text-sm text-muted-foreground">Aluno de Guitarra há 1 ano</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover-lift bg-card/80 backdrop-blur">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-4 text-primary">
                    <Music className="w-5 h-5 fill-current" />
                    <Music className="w-5 h-5 fill-current" />
                    <Music className="w-5 h-5 fill-current" />
                    <Music className="w-5 h-5 fill-current" />
                    <Music className="w-5 h-5 fill-current" />
                  </div>
                  <p className="text-muted-foreground mb-4 italic">
                    "As aulas de canto me ajudaram a ganhar confiança e descobrir minha verdadeira voz. A professora é muito atenciosa e cria um ambiente super confortável para aprender."
                  </p>
                  <div>
                    <p className="font-semibold text-foreground">Júlia Mendes</p>
                    <p className="text-sm text-muted-foreground">Aluna de Canto há 6 meses</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover-lift bg-card/80 backdrop-blur">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-4 text-primary">
                    <Music className="w-5 h-5 fill-current" />
                    <Music className="w-5 h-5 fill-current" />
                    <Music className="w-5 h-5 fill-current" />
                    <Music className="w-5 h-5 fill-current" />
                    <Music className="w-5 h-5 fill-current" />
                  </div>
                  <p className="text-muted-foreground mb-4 italic">
                    "A estrutura da escola é ótima e o estúdio de gravação é um diferencial incrível. Poder gravar as músicas que aprendo nas aulas é uma experiência única!"
                  </p>
                  <div>
                    <p className="font-semibold text-foreground">Pedro Oliveira</p>
                    <p className="text-sm text-muted-foreground">Aluno de Teclado há 3 anos</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover-lift bg-card/80 backdrop-blur">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-4 text-primary">
                    <Music className="w-5 h-5 fill-current" />
                    <Music className="w-5 h-5 fill-current" />
                    <Music className="w-5 h-5 fill-current" />
                    <Music className="w-5 h-5 fill-current" />
                    <Music className="w-5 h-5 fill-current" />
                  </div>
                  <p className="text-muted-foreground mb-4 italic">
                    "Escola com profissionais de altíssima qualidade. Minha filha adora as aulas e já apresentou em dois recitais. Estamos muito satisfeitos com todo o processo de aprendizado."
                  </p>
                  <div>
                    <p className="font-semibold text-foreground">Fernanda Costa</p>
                    <p className="text-sm text-muted-foreground">Mãe de aluna de Violão</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <Separator />

        {/* Methodology Section */}
        <section id="metodologia" className="py-20 bg-gradient-to-br from-background via-primary/5 to-secondary/10">
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