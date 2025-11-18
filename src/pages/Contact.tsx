import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { 
  ChevronRight, 
  Home, 
  Send, 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  MessageCircle
} from "lucide-react";
import { Link } from "react-router-dom";

const Contact = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    assunto: "",
    mensagem: ""
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const formatPhone = (value: string) => {
    const numbers = value.replace(/\D/g, '');
    const match = numbers.match(/^(\d{2})(\d{5})(\d{4})$/);
    if (match) {
      return `(${match[1]}) ${match[2]}-${match[3]}`;
    }
    return value;
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhone(e.target.value);
    handleInputChange("telefone", formatted);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));

    toast({
      title: "Mensagem enviada com sucesso! ✨",
      description: "Entraremos em contato em breve. Obrigado pelo interesse!",
    });

    // Reset form
    setFormData({
      nome: "",
      email: "",
      telefone: "",
      assunto: "",
      mensagem: ""
    });

    setIsLoading(false);
  };

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
              <span className="text-foreground font-medium">Contato</span>
            </nav>
          </div>
        </section>

        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-r from-primary/5 via-secondary/5 to-primary/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Entre em <span className="gradient-text">Contato</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Estamos aqui para esclarecer suas dúvidas e ajudar você a dar o primeiro passo na sua jornada musical.
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <Card className="shadow-2xl border-0">
                <CardHeader className="text-center pb-6">
                  <CardTitle className="text-2xl font-bold gradient-text">
                    Envie-nos uma Mensagem
                  </CardTitle>
                  <p className="text-muted-foreground">
                    Preencha o formulário e entraremos em contato rapidamente
                  </p>
                </CardHeader>
                
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="nome">Nome Completo *</Label>
                      <Input
                        id="nome"
                        value={formData.nome}
                        onChange={(e) => handleInputChange("nome", e.target.value)}
                        placeholder="Seu nome completo"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">E-mail *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        placeholder="seu@email.com"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="telefone">Telefone/WhatsApp *</Label>
                      <Input
                        id="telefone"
                        value={formData.telefone}
                        onChange={handlePhoneChange}
                        placeholder="(51) 99999-9999"
                        maxLength={15}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label>Assunto *</Label>
                      <Select value={formData.assunto} onValueChange={(value) => handleInputChange("assunto", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione o assunto" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="duvidas">Dúvidas Gerais</SelectItem>
                          <SelectItem value="agendamento">Agendamento</SelectItem>
                          <SelectItem value="parcerias">Parcerias</SelectItem>
                          <SelectItem value="outros">Outros</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="mensagem">Mensagem *</Label>
                      <Textarea
                        id="mensagem"
                        value={formData.mensagem}
                        onChange={(e) => handleInputChange("mensagem", e.target.value)}
                        placeholder="Conte-nos como podemos ajudar você..."
                        rows={6}
                        required
                      />
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full text-lg py-6 pulse-gold" 
                      disabled={isLoading}
                    >
                      {isLoading ? (
                        <>
                          <div className="animate-spin rounded-full h-5 w-5 border-2 border-current border-t-transparent mr-2"></div>
                          Enviando...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5 mr-2" />
                          Enviar Mensagem
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Contact Information */}
              <div className="space-y-8">
                <Card className="hover-lift">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="p-3 rounded-full bg-primary/10">
                        <MapPin className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold">Localização</h3>
                    </div>
                    <div className="space-y-2 text-muted-foreground">
                      <p className="font-medium text-foreground">Endereço:</p>
                      <p>Rua Barbosa Neto, 215</p>
                      <p>Cavalhada, Porto Alegre - RS</p>
                      <p className="text-sm">CEP: 91750-160</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover-lift">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="p-3 rounded-full bg-secondary/10">
                        <Phone className="w-6 h-6 text-secondary" />
                      </div>
                      <h3 className="text-xl font-semibold">Telefone</h3>
                    </div>
                    <div className="space-y-3">
                      <a 
                        href="https://wa.me/5551985752021" 
                        className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <MessageCircle className="w-5 h-5" />
                        <span>(51) 98575-2021</span>
                      </a>
                      <p className="text-sm text-muted-foreground">
                        Clique para conversar no WhatsApp
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover-lift">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="p-3 rounded-full bg-primary/10">
                        <Mail className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold">E-mail</h3>
                    </div>
                    <a 
                      href="mailto:musiquezonasul@gmail.com" 
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      musiquezonasul@gmail.com
                    </a>
                  </CardContent>
                </Card>

                <Card className="hover-lift">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="p-3 rounded-full bg-secondary/10">
                        <Clock className="w-6 h-6 text-secondary" />
                      </div>
                      <h3 className="text-xl font-semibold">Horários</h3>
                    </div>
                    <div className="space-y-3 text-muted-foreground">
                      <div className="flex justify-between">
                        <span className="font-medium text-foreground">Segunda a Sexta:</span>
                        <span>9h às 21h</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium text-foreground">Sábado:</span>
                        <span>9h às 16h</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium text-foreground">Domingo:</span>
                        <span>Fechado</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-20 bg-muted/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Como Chegar</h2>
              <p className="text-xl text-muted-foreground">
                Estamos localizados na Zona Sul de Porto Alegre, com fácil acesso
              </p>
            </div>
            
            <Card className="overflow-hidden shadow-2xl">
              <CardContent className="p-0">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3457.2469658736957!2d-51.25203892390564!3d-30.062396831884996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x951979f0f0f0f0f0%3A0x0!2sRua%20Barbosa%20Neto%2C%20215%20-%20Cavalhada%2C%20Porto%20Alegre%20-%20RS!5e0!3m2!1spt-BR!2sbr!4v1234567890"
                  width="100%" 
                  height="400" 
                  className="border-0"
                  allowFullScreen
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localização da Musique Zona Sul"
                ></iframe>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;