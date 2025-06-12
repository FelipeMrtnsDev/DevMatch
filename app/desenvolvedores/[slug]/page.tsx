import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Github, Linkedin, Mail, MapPin, ExternalLink, Briefcase, Clock } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

// Simular um banco de dados de desenvolvedores
const developers = [
  {
    id: 1,
    slug: "ana-silva",
    name: "Ana Silva",
    role: "Desenvolvedora Full Stack",
    bio: "Desenvolvedora Full Stack com mais de 5 anos de experiência em projetos web e mobile. Especializada em React, Node.js e TypeScript, com forte experiência em arquitetura de software e desenvolvimento ágil. Apaixonada por criar soluções elegantes para problemas complexos.",
    location: "São Paulo, SP",
    email: "ana.silva@example.com",
    website: "https://anasilva.dev",
    github: "anasilva",
    linkedin: "anasilvadev",
    experience: "5 anos",
    availability: "Disponível",
    workType: "CLT",
    technologies: ["React", "Node.js", "TypeScript", "MongoDB", "GraphQL", "AWS", "Docker"],
    skills: ["Frontend", "Backend", "DevOps", "UX/UI", "Gestão de Projetos"],
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 2,
    slug: "carlos-oliveira",
    name: "Carlos Oliveira",
    role: "Desenvolvedor Front-end",
    bio: "Desenvolvedor Front-end especializado em criar interfaces modernas e responsivas. Experiência em Vue.js e Nuxt.js, com grande foco em performance e acessibilidade. Tenho trabalhado em projetos de médio a grande porte para empresas em diversos setores.",
    location: "Rio de Janeiro, RJ",
    email: "carlos.oliveira@example.com",
    website: "https://carlosoliveira.dev",
    github: "carlosoliveira",
    linkedin: "carlosoliveiradev",
    experience: "3 anos",
    availability: "Disponível em 30 dias",
    workType: "PJ",
    technologies: ["Vue.js", "Nuxt.js", "JavaScript", "Tailwind CSS", "Figma", "Jest", "Cypress"],
    skills: ["Frontend", "UI/UX", "SEO", "Testes", "Performance"],
    image: "/placeholder.svg?height=300&width=300",
  },
]

// Simular banco de dados de projetos
const projects = [
  {
    id: 1,
    title: "E-commerce Dashboard",
    description: "Dashboard para gerenciamento de loja virtual com análise de vendas e gestão de produtos",
    image: "/placeholder.svg?height=200&width=400",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Node.js"],
    category: "Web",
    complexity: "Médio",
    author: "Ana Silva",
  },
  {
    id: 5,
    title: "Plataforma de Cursos Online",
    description: "Plataforma completa para criação e consumo de cursos online com sistema de pagamentos",
    image: "/placeholder.svg?height=200&width=400",
    technologies: ["React", "Node.js", "MongoDB", "AWS"],
    category: "Web",
    complexity: "Complexo",
    author: "Ana Silva",
  },
  {
    id: 2,
    title: "App de Finanças Pessoais",
    description: "Aplicativo mobile para controle de gastos e planejamento financeiro",
    image: "/placeholder.svg?height=200&width=400",
    technologies: ["Vue.js", "Firebase", "Vuex"],
    category: "Mobile",
    complexity: "Médio",
    author: "Carlos Oliveira",
  },
]

export default function PerfilPage({ params }: { params: { slug: string } }) {
  const { slug } = params
  const developer = developers.find((dev) => dev.slug === slug)

  if (!developer) {
    return (
      <div className="container py-32 text-center">
        <h1 className="text-2xl font-bold">Perfil não encontrado</h1>
        <p className="mt-4">O desenvolvedor que você está procurando não existe</p>
        <Button className="mt-6" asChild>
          <Link href="/desenvolvedores">Voltar para desenvolvedores</Link>
        </Button>
      </div>
    )
  }

  const devProjects = projects.filter((project) => project.author === developer.name)

  return (
    <div className="container py-8">
      <div className="flex flex-col gap-8">
        {/* Perfil */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Informações do perfil */}
          <div className="lg:col-span-1">
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="relative w-32 h-32 mb-4">
                    <Image
                      src={developer.image || "/placeholder.svg"}
                      alt={developer.name}
                      fill
                      className="rounded-full object-cover"
                    />
                  </div>
                  <h1 className="text-2xl font-bold">{developer.name}</h1>
                  <p className="text-muted-foreground">{developer.role}</p>

                  <div className="flex items-center mt-2 text-sm">
                    <MapPin className="h-4 w-4 mr-1 text-muted-foreground" />
                    <span>{developer.location}</span>
                  </div>

                  <div className="flex gap-2 mt-4">
                    <Button size="icon" variant="outline" asChild>
                      <a href={`https://github.com/${developer.github}`} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4" />
                      </a>
                    </Button>
                    <Button size="icon" variant="outline" asChild>
                      <a
                        href={`https://linkedin.com/in/${developer.linkedin}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Linkedin className="h-4 w-4" />
                      </a>
                    </Button>
                    <Button size="icon" variant="outline" asChild>
                      <a href={`mailto:${developer.email}`}>
                        <Mail className="h-4 w-4" />
                      </a>
                    </Button>
                    {developer.website && (
                      <Button size="icon" variant="outline" asChild>
                        <a href={developer.website} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </Button>
                    )}
                  </div>
                </div>

                <Separator className="my-6" />

                <div className="space-y-4">
                  <div>
                    <h3 className="font-medium mb-2">Informações</h3>
                    <div className="grid grid-cols-1 gap-2 text-sm">
                      <div className="flex items-center">
                        <Briefcase className="h-4 w-4 mr-2 text-muted-foreground" />
                        <span>{developer.experience} de experiência</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-2 text-muted-foreground" />
                        <span>{developer.availability}</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-medium mb-2">Tecnologias</h3>
                    <div className="flex flex-wrap gap-1">
                      {developer.technologies.map((tech, index) => (
                        <Badge key={index} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="font-medium mb-2">Habilidades</h3>
                    <div className="flex flex-wrap gap-1">
                      {developer.skills.map((skill, index) => (
                        <Badge key={index} variant="outline">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>

              <CardFooter>
                <Button className="w-full" asChild>
                  <a href={`mailto:${developer.email}`}>Entrar em contato</a>
                </Button>
              </CardFooter>
            </Card>
          </div>

          {/* Bio e projetos */}
          <div className="lg:col-span-2">
            <Card className="mb-8">
              <CardHeader>
                <h2 className="text-xl font-bold">Sobre</h2>
              </CardHeader>
              <CardContent>
                <p>{developer.bio}</p>
              </CardContent>
            </Card>

            <h2 className="text-xl font-bold mb-4">Projetos de {developer.name}</h2>
            <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2">
              {devProjects.length > 0 ? (
                devProjects.map((project) => (
                  <Card key={project.id} className="overflow-hidden">
                    <CardHeader className="p-0">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        width={400}
                        height={200}
                        className="w-full h-48 object-cover"
                      />
                    </CardHeader>
                    <CardContent className="p-4">
                      <div className="space-y-2">
                        <div className="flex justify-between items-start">
                          <h3 className="font-bold text-lg">{project.title}</h3>
                          <Badge>{project.complexity}</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground line-clamp-2">{project.description}</p>
                        <div className="flex flex-wrap gap-1 pt-2">
                          {project.technologies.slice(0, 3).map((tech, index) => (
                            <Badge key={index} variant="secondary">
                              {tech}
                            </Badge>
                          ))}
                          {project.technologies.length > 3 && (
                            <Badge variant="outline">+{project.technologies.length - 3}</Badge>
                          )}
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="flex gap-2 p-4 pt-0">
                      <Button variant="outline" size="sm" className="flex-1">
                        <Github className="h-4 w-4 mr-2" />
                        Código
                      </Button>
                      <Button size="sm" className="flex-1">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Demo
                      </Button>
                    </CardFooter>
                  </Card>
                ))
              ) : (
                <div className="col-span-full text-center py-8">
                  <p className="text-muted-foreground">Este desenvolvedor ainda não possui projetos</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
