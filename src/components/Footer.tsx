import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Mail, MapPin, Phone, Clock, Instagram, Youtube } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-6">
              <img src={logo} alt="Musique Zona Sul" className="h-8 w-8" />
              <div>
                <h3 className="text-xl font-semibold text-primary">Musique Zona Sul</h3>
              </div>
            </Link>
            <p className="text-background/80 leading-relaxed mb-6">
              Transformando paixão em performance há mais de 10 anos. Sua jornada musical começa aqui, na melhor escola de música da Zona Sul.
            </p>
            <div className="flex space-x-4">
              <Button 
                variant="ghost" 
                size="icon" 
                className="text-background/80 hover:text-primary hover:bg-primary/10"
                asChild
              >
                <a href="https://instagram.com/musiquezonasul" target="_blank" rel="noopener noreferrer">
                  <Instagram className="w-5 h-5" />
                  <span className="sr-only">Instagram</span>
                </a>
              </Button>
              <Button 
                variant="ghost" 
                size="icon" 
                className="text-background/80 hover:text-primary hover:bg-primary/10"
                asChild
              >
                <a href="https://youtube.com/@musiquezonasul" target="_blank" rel="noopener noreferrer">
                  <Youtube className="w-5 h-5" />
                  <span className="sr-only">YouTube</span>
                </a>
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-primary">Links Rápidos</h4>
            <nav className="space-y-4">
              <Link 
                to="/" 
                className="block text-background/80 hover:text-primary transition-colors"
              >
                Home
              </Link>
              <Link 
                to="/sobre" 
                className="block text-background/80 hover:text-primary transition-colors"
              >
                Sobre a Escola
              </Link>
              <Link 
                to="/cursos/violao" 
                className="block text-background/80 hover:text-primary transition-colors"
              >
                Cursos
              </Link>
              <Link 
                to="/contato" 
                className="block text-background/80 hover:text-primary transition-colors"
              >
                Contato
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-primary">Contato</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-background/80 text-sm leading-relaxed">
                    Rua Barbosa Neto, 215<br />
                    Cavalhada, Porto Alegre - RS
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <a 
                  href="https://wa.me/5551985752021" 
                  className="text-background/80 hover:text-primary transition-colors text-sm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  (51) 98575-2021
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <a 
                  href="mailto:musiquezonasul@gmail.com" 
                  className="text-background/80 hover:text-primary transition-colors text-sm"
                >
                  musiquezonasul@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Business Hours */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-primary">Horário de Funcionamento</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div className="text-background/80 text-sm">
                  <p className="font-medium">Segunda a Sexta</p>
                  <p>9h às 21h</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div className="text-background/80 text-sm">
                  <p className="font-medium">Sábado</p>
                  <p>9h às 16h</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div className="text-background/80 text-sm">
                  <p className="font-medium">Domingo</p>
                  <p>Fechado</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Separator className="bg-background/20" />

        {/* Footer Bottom */}
        <div className="py-6 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-background/60 text-sm text-center md:text-left">
            © {currentYear} Musique Zona Sul. Todos os direitos reservados.
          </p>
          
          <div className="flex space-x-6 text-sm">
            <a 
              href="/politica-privacidade" 
              className="text-background/60 hover:text-primary transition-colors"
            >
              Política de Privacidade
            </a>
            <a 
              href="/termos-uso" 
              className="text-background/60 hover:text-primary transition-colors"
            >
              Termos de Uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;