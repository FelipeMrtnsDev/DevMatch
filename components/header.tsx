"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import { Code } from "lucide-react"
import { useState, useEffect } from "react"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export default function Header() {
  const pathname = usePathname()
  // Simular usuário logado (em uma implementação real, você usaria um hook de autenticação)
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  // Simular verificação de autenticação
  useEffect(() => {
    // Verificar se há um token no localStorage (simulação)
    const token = localStorage.getItem("auth-token")
    setIsLoggedIn(!!token)

    // Para demonstração, vamos setar como logado após 2 segundos
    setTimeout(() => {
      setIsLoggedIn(true)
    }, 2000)
  }, [])

  const navItems = [
    { name: "Projetos", href: "/projetos" },
    { name: "Desenvolvedores", href: "/desenvolvedores" },
    { name: "Vagas", href: "/vagas" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <Code className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">DevMatch</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6 ml-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  pathname === item.href ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-3">
          <ModeToggle />

          {isLoggedIn ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <Avatar className="h-8 w-8">
                    <AvatarFallback>AD</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem asChild>
                  <Link href="/meu-perfil">Meu Perfil</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/meus-projetos">Meus Projetos</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/configuracoes">Configurações</Link>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setIsLoggedIn(false)}>Sair</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Link href="/login">
              <Button variant="default" size="sm">
                Login
              </Button>
            </Link>
          )}
        </div>
      </div>
    </header>
  )
}
