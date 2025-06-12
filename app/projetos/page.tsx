import { FilterSidebar } from "@/components/filter-sidebar"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink, User } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

// Dados de exemplo
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
    id: 2,
    title: "App de Finanças Pessoais",
    description: "Aplicativo mobile para controle de gastos e planejamento financeiro",
    image: "/placeholder.svg?height=200&width=400",
    technologies: ["React Native", "Firebase", "Redux"],
    category: "Mobile",
    complexity: "Médio",
    author: "Carlos Oliveira",
  },
  {
    id: 3,
    title: "API de Gerenciamento de Tarefas",
    description: "API RESTful para gerenciamento de tarefas e projetos com autenticação JWT",
    image: "/placeholder.svg?height=200&width=400",
    technologies: ["Node.js", "Express", "MongoDB", "Jest"],
    category: "Backend",
    complexity: "Simples",
    author: "Mariana Costa",
  },
  {
    id: 4,
    title: "Sistema de Reconhecimento Facial",
    description: "Sistema de reconhecimento facial usando machine learning para controle de acesso",
    image: "/placeholder.svg?height=200&width=400",
    technologies: ["Python", "TensorFlow", "OpenCV", "Flask"],
    category: "IA",
    complexity: "Complexo",
    author: "Rafael Santos",
  },
  {
    id: 5,
    title: "Plataforma de Cursos Online",
    description: "Plataforma completa para criação e consumo de cursos online com sistema de pagamentos",
    image: "/placeholder.svg?height=200&width=400",
    technologies: ["Angular", "Java", "Spring Boot", "PostgreSQL"],
    category: "Web",
    complexity: "Complexo",
    author: "Juliana Lima",
  },
  {
    id: 6,
    title: "Infraestrutura como Código",
    description: "Projeto de IaC para provisionamento de infraestrutura na AWS usando Terraform",
    image: "/placeholder.svg?height=200&width=400",
    technologies: ["Terraform", "AWS", "Docker", "Kubernetes"],
    category: "DevOps",
    complexity: "Médio",
    author: "Pedro Almeida",
  },
]

// Filtros para projetos
const projectFilters = [
  {
    name: "Tecnologia",
    type: "checkbox" as const,
    options: [
      { id: "react", label: "React" },
      { id: "node", label: "Node.js" },
      { id: "typescript", label: "TypeScript" },
      { id: "python", label: "Python" },
      { id: "java", label: "Java" },
      { id: "angular", label: "Angular" },
    ],
  },
  {
    name: "Categoria",
    type: "checkbox" as const,
    options: [
      { id: "web", label: "Web" },
      { id: "mobile", label: "Mobile" },
      { id: "backend", label: "Backend" },
      { id: "ia", label: "IA" },
      { id: "devops", label: "DevOps" },
    ],
  },
  {
    name: "Nível de complexidade",
    type: "checkbox" as const,
    options: [
      { id: "simple", label: "Simples" },
      { id: "medium", label: "Médio" },
      { id: "complex", label: "Complexo" },
    ],
  },
]

export default function ProjetosPage() {
  return (
    <div className="container py-8">
      <div className="flex flex-col space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Projetos</h1>
          <p className="text-muted-foreground">Explore projetos desenvolvidos pela comunidade</p>
        </div>

        <div className="flex flex-col md:flex-row gap-6">
          <FilterSidebar filters={projectFilters} />

          <div className="flex-1">
            <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {projects.map((project) => (
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
                      <p className="text-xs text-muted-foreground pt-2">Por: {project.author}</p>
                    </div>
                  </CardContent>
                  <CardFooter className="flex flex-col gap-2 p-4 pt-0">
                    <div className="flex gap-2 w-full">
                      <Button variant="outline" size="sm" className="flex-1">
                        <Github className="h-4 w-4 mr-2" />
                        Código
                      </Button>
                      <Button size="sm" className="flex-1">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Demo
                      </Button>
                    </div>
                    <Button variant="secondary" size="sm" className="w-full" asChild>
                      <Link href={`/desenvolvedores/${project.author.toLowerCase().replace(/\s+/g, "-")}`}>
                        <User className="h-4 w-4 mr-2" />
                        Ver perfil do criador
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
