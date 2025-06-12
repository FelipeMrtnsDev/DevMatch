import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Code, Users, Briefcase } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-[calc(100vh-4rem)]">
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                DevMatch — Conectando Devs e RHs
              </h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                A plataforma que conecta os melhores talentos de desenvolvimento com as melhores oportunidades do
                mercado.
              </p>
            </div>
            <div className="space-x-4">
              <Link href="/cadastro">
                <Button>Criar conta</Button>
              </Link>
              <Link href="/login">
                <Button variant="outline">Entrar</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary">
                <Code className="h-10 w-10 text-primary-foreground" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Projetos</h3>
                <p className="text-muted-foreground">
                  Explore projetos de desenvolvedores por linguagem, stack, categoria e nível de complexidade.
                </p>
              </div>
              <Link href="/projetos">
                <Button variant="outline">Ver projetos</Button>
              </Link>
            </div>
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary">
                <Users className="h-10 w-10 text-primary-foreground" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Desenvolvedores</h3>
                <p className="text-muted-foreground">
                  Encontre desenvolvedores por tecnologia, localização, experiência e disponibilidade.
                </p>
              </div>
              <Link href="/desenvolvedores">
                <Button variant="outline">Ver desenvolvedores</Button>
              </Link>
            </div>
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary">
                <Briefcase className="h-10 w-10 text-primary-foreground" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Vagas</h3>
                <p className="text-muted-foreground">
                  Descubra vagas por tipo de contrato, tecnologia, empresa, cidade e nível.
                </p>
              </div>
              <Link href="/vagas">
                <Button variant="outline">Ver vagas</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
