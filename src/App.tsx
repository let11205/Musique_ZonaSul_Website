import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WhatsAppButton from "@/components/WhatsAppButton";
import Index from "./pages/Index";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Violao from "./pages/courses/Violao";
import Guitarra from "./pages/courses/Guitarra";
import Baixo from "./pages/courses/Baixo";
import Teclado from "./pages/courses/Teclado";
import Musicalizacao from "./pages/courses/Musicalizacao";
import Canto from "./pages/courses/Canto";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/sobre" element={<About />} />
          <Route path="/contato" element={<Contact />} />
          <Route path="/cursos/violao" element={<Violao />} />
          <Route path="/cursos/guitarra" element={<Guitarra />} />
          <Route path="/cursos/baixo" element={<Baixo />} />
          <Route path="/cursos/teclado" element={<Teclado />} />
          <Route path="/cursos/musicalizacao" element={<Musicalizacao />} />
          <Route path="/cursos/canto" element={<Canto />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <WhatsAppButton />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
