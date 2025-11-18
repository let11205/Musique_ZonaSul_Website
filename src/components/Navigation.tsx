import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Menu, Music, ChevronDown } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "@/assets/logo.png";
import { cn } from "@/lib/utils";

const Navigation = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/sobre", label: "Sobre a Escola" },
  ];

  const courseItems = [
    { href: "/cursos/violao", label: "Violão" },
    { href: "/cursos/guitarra", label: "Guitarra" },
    { href: "/cursos/baixo", label: "Baixo" },
    { href: "/cursos/teclado", label: "Teclado" },
    { href: "/cursos/musicalizacao", label: "Musicalização" },
    { href: "/cursos/canto", label: "Canto" },
  ];

  const isActive = (href: string) => location.pathname === href;

  const handleNavigation = (to: string) => {
    window.scrollTo(0, 0);
    navigate(to);
  };

  const scrollToForm = () => {
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: 'agendamento' } });
    } else {
      const element = document.getElementById('agendamento');
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] bg-background border-b shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div onClick={() => handleNavigation("/")} className="flex items-center space-x-2 hover:opacity-80 transition-opacity cursor-pointer">
            <img src={logo} alt="Musique Zona Sul" className="h-8 w-8" />
            <div className="hidden sm:block">
              <h1 className="text-base font-bold gradient-text">Musique Zona Sul</h1>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <div
                key={item.href}
                onClick={() => handleNavigation(item.href)}
                className={`text-sm font-medium transition-colors hover:text-primary whitespace-nowrap cursor-pointer ${
                  isActive(item.href) ? "text-primary" : "text-foreground"
                }`}
              >
                {item.label}
              </div>
            ))}
            
            {/* Cursos Dropdown */}
            <div className="relative">
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="text-sm font-medium h-auto p-0 hover:bg-transparent data-[state=open]:bg-transparent">
                      Cursos
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="w-[200px] p-2 bg-background shadow-lg border">
                        <li>
                          <NavigationMenuLink asChild>
                            <div
                              onClick={() => handleNavigation("/cursos/violao")}
                              className="block select-none rounded-md px-3 py-2 text-sm leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground cursor-pointer"
                            >
                              Violão
                            </div>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink asChild>
                            <div
                              onClick={() => handleNavigation("/cursos/guitarra")}
                              className="block select-none rounded-md px-3 py-2 text-sm leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground cursor-pointer"
                            >
                              Guitarra
                            </div>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink asChild>
                            <div
                              onClick={() => handleNavigation("/cursos/baixo")}
                              className="block select-none rounded-md px-3 py-2 text-sm leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground cursor-pointer"
                            >
                              Baixo
                            </div>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink asChild>
                            <div
                              onClick={() => handleNavigation("/cursos/teclado")}
                              className="block select-none rounded-md px-3 py-2 text-sm leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground cursor-pointer"
                            >
                              Teclado
                            </div>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink asChild>
                            <div
                              onClick={() => handleNavigation("/cursos/musicalizacao")}
                              className="block select-none rounded-md px-3 py-2 text-sm leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground cursor-pointer"
                            >
                              Musicalização
                            </div>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink asChild>
                            <div
                              onClick={() => handleNavigation("/cursos/canto")}
                              className="block select-none rounded-md px-3 py-2 text-sm leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground cursor-pointer"
                            >
                              Canto
                            </div>
                          </NavigationMenuLink>
                        </li>
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>

            <div
              onClick={() => handleNavigation("/contato")}
              className={`text-sm font-medium transition-colors hover:text-primary whitespace-nowrap cursor-pointer ${
                isActive("/contato") ? "text-primary" : "text-foreground"
              }`}
            >
              Contato
            </div>
          </div>

          {/* Mobile Navigation */}
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col space-y-4 mt-6">
                <div onClick={() => handleNavigation("/")} className="flex items-center space-x-1 mb-6 cursor-pointer">
                  <img src={logo} alt="Musique Zona Sul" className="h-8 w-8" />
                  <h2 className="text-xl font-bold gradient-text">Musique Zona Sul</h2>
                </div>
                
                {navItems.map((item) => (
                  <div
                    key={item.href}
                    onClick={() => handleNavigation(item.href)}
                    className={`text-sm font-medium py-2 px-3 rounded-md transition-colors cursor-pointer ${
                      isActive(item.href)
                        ? "bg-primary/10 text-primary"
                        : "text-foreground hover:bg-accent"
                    }`}
                  >
                    {item.label}
                  </div>
                ))}
                
                {/* Cursos Mobile */}
                <div className="border-t pt-4 mt-4">
                  <p className="text-xs font-semibold text-muted-foreground mb-2 px-3">CURSOS</p>
                  {courseItems.map((course) => (
                    <div
                      key={course.href}
                      onClick={() => handleNavigation(course.href)}
                      className="text-sm font-medium py-2 px-3 rounded-md transition-colors text-foreground hover:bg-accent block cursor-pointer"
                    >
                      {course.label}
                    </div>
                  ))}
                </div>

                <div
                  onClick={() => handleNavigation("/contato")}
                  className={`text-sm font-medium py-2 px-3 rounded-md transition-colors cursor-pointer ${
                    isActive("/contato")
                      ? "bg-primary/10 text-primary"
                      : "text-foreground hover:bg-accent"
                  }`}
                >
                  Contato
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;