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
    { href: "/", label: "Início" },
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

  const scrollToForm = () => {
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: 'agendamento' } });
    } else {
      const element = document.getElementById('agendamento');
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-1 hover:opacity-80 transition-opacity">
            <img src={logo} alt="Musique Zona Sul" className="h-10 w-10" />
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold gradient-text">Musique Zona Sul</h1>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isActive(item.href) ? "text-primary" : "text-foreground"
                }`}
              >
                {item.label}
              </Link>
            ))}
            
            {/* Cursos Dropdown */}
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-sm font-medium">
                    Cursos
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                      {courseItems.map((course) => (
                        <li key={course.href}>
                          <NavigationMenuLink asChild>
                            <Link
                              to={course.href}
                              className={cn(
                                "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                              )}
                            >
                              <div className="text-sm font-medium leading-none">{course.label}</div>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <Link
              to="/contato"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive("/contato") ? "text-primary" : "text-foreground"
              }`}
            >
              Contato
            </Link>
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
                <Link to="/" className="flex items-center space-x-1 mb-6">
                  <img src={logo} alt="Musique Zona Sul" className="h-8 w-8" />
                  <h2 className="text-xl font-bold gradient-text">Musique Zona Sul</h2>
                </Link>
                
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    to={item.href}
                    className={`text-sm font-medium py-2 px-3 rounded-md transition-colors ${
                      isActive(item.href)
                        ? "bg-primary/10 text-primary"
                        : "text-foreground hover:bg-accent"
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
                
                {/* Cursos Mobile */}
                <div className="border-t pt-4 mt-4">
                  <p className="text-xs font-semibold text-muted-foreground mb-2 px-3">CURSOS</p>
                  {courseItems.map((course) => (
                    <Link
                      key={course.href}
                      to={course.href}
                      className="text-sm font-medium py-2 px-3 rounded-md transition-colors text-foreground hover:bg-accent block"
                    >
                      {course.label}
                    </Link>
                  ))}
                </div>

                <Link
                  to="/contato"
                  className={`text-sm font-medium py-2 px-3 rounded-md transition-colors ${
                    isActive("/contato")
                      ? "bg-primary/10 text-primary"
                      : "text-foreground hover:bg-accent"
                  }`}
                >
                  Contato
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;