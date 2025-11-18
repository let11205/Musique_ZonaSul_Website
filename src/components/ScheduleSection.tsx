import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Music, Send, Star } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

const ScheduleSection = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    nome: "",
    idade: "",
    email: "",
    whatsapp: "",
    modalidade: "",
    turno: "",
    mensagem: ""
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const formatWhatsApp = (value: string) => {
    const numbers = value.replace(/\D/g, '');
    const match = numbers.match(/^(\d{2})(\d{5})(\d{4})$/);
    if (match) {
      return `(${match[1]}) ${match[2]}-${match[3]}`;
    }
    return value;
  };

  const handleWhatsAppChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatWhatsApp(e.target.value);
    handleInputChange("whatsapp", formatted);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validação dos campos obrigatórios
    if (!formData.nome || !formData.idade || !formData.email || !formData.whatsapp || !formData.modalidade || !formData.turno) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha todos os campos marcados com *",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    try {
      // Chamar a edge function para enviar os e-mails
      const { data, error } = await supabase.functions.invoke('send-schedule-email', {
        body: formData
      });

      if (error) {
        console.error('Erro ao enviar e-mails:', error);
        throw error;
      }

      console.log('E-mails enviados com sucesso:', data);

      // Mostrar mensagem de sucesso
      toast({
        title: "✅ Agendamento enviado com sucesso!",
        description: "Você receberá uma confirmação no e-mail informado e retornaremos pelo WhatsApp em breve.",
      });

      // Limpar formulário
      setFormData({
        nome: "",
        idade: "",
        email: "",
        whatsapp: "",
        modalidade: "",
        turno: "",
        mensagem: ""
      });

    } catch (error: any) {
      console.error('Erro completo:', error);
      toast({
        title: "Erro ao enviar agendamento",
        description: "Tente novamente ou entre em contato pelo WhatsApp.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="agendamento" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-full bg-primary/10">
                <Music className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold">
                  Dê o Primeiro Acorde
                </h2>
                <p className="text-lg text-primary font-medium">
                  Agende Sua Aula Gratuita!
                </p>
              </div>
            </div>

            <div className="space-y-6 mb-8">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Comece sua jornada musical hoje mesmo! Nossa aula experimental gratuita permite que você:
              </p>

              <div className="space-y-4">
                {[
                  "Conheça nosso método de ensino personalizado",
                  "Teste o instrumento de sua escolha",
                  "Avalie nossa estrutura e professores",
                  "Receba um plano de estudos individualizado"
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <Star className="w-5 h-5 text-primary fill-current" />
                    <span className="text-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-muted/50 p-6 rounded-lg">
              <h3 className="font-semibold mb-2 text-secondary">🎯 Sem Compromisso</h3>
              <p className="text-sm text-muted-foreground">
                Nossa aula gratuita é um convite. Venha sentir a vibração da Musique e descobrir se este é o palco certo para você.
              </p>
            </div>
          </div>

          {/* Right Column - Form */}
          <Card className="shadow-2xl border-0">
            <CardHeader className="text-center pb-6">
              <CardTitle className="text-2xl font-bold gradient-text">
                Formulário de Agendamento
              </CardTitle>
              <p className="text-muted-foreground">
                Preencha os dados abaixo e entraremos em contato
              </p>
            </CardHeader>
            
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                    <Label htmlFor="idade">Idade *</Label>
                    <Input
                      id="idade"
                      type="number"
                      value={formData.idade}
                      onChange={(e) => handleInputChange("idade", e.target.value)}
                      placeholder="Sua idade"
                      min="3"
                      max="100"
                      required
                    />
                  </div>
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
                  <Label htmlFor="whatsapp">WhatsApp *</Label>
                  <Input
                    id="whatsapp"
                    value={formData.whatsapp}
                    onChange={handleWhatsAppChange}
                    placeholder="(51) 99999-9999"
                    maxLength={15}
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Modalidade de Interesse *</Label>
                    <Select value={formData.modalidade} onValueChange={(value) => handleInputChange("modalidade", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Escolha o instrumento" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="baixo">Baixo</SelectItem>
                        <SelectItem value="violao">Violão</SelectItem>
                        <SelectItem value="guitarra">Guitarra</SelectItem>
                        <SelectItem value="canto">Canto</SelectItem>
                        <SelectItem value="infantil">Musicalização Infantil</SelectItem>
                        <SelectItem value="teclado">Teclado</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label>Turno Preferido *</Label>
                    <Select value={formData.turno} onValueChange={(value) => handleInputChange("turno", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione o turno" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="manha">Manhã</SelectItem>
                        <SelectItem value="tarde">Tarde</SelectItem>
                        <SelectItem value="noite">Noite</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="mensagem">Mensagem (Opcional)</Label>
                  <Textarea
                    id="mensagem"
                    value={formData.mensagem}
                    onChange={(e) => handleInputChange("mensagem", e.target.value)}
                    placeholder="Conte-nos um pouco sobre seus objetivos musicais..."
                    rows={4}
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
                      Quero Começar Minha Jornada Musical!
                    </>
                  )}
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  Ao enviar este formulário, você concorda com nossa política de privacidade.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ScheduleSection;