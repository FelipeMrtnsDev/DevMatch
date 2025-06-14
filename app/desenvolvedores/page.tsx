import { FilterBar } from "@/components/filter-bar"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MapPin, Briefcase, Clock, ExternalLink } from "lucide-react"
import Image from "next/image"

// Dados de exemplo
const developers = [
  {
    id: 1,
    name: "Ana Silva",
    role: "Desenvolvedora Full Stack",
    location: "São Paulo, SP",
    experience: "5 anos",
    availability: "Disponível",
    workType: "CLT",
    technologies: ["React", "Node.js", "TypeScript", "MongoDB"],
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 2,
    name: "Carlos Oliveira",
    role: "Desenvolvedor Front-end",
    location: "Rio de Janeiro, RJ",
    experience: "3 anos",
    availability: "Disponível em 30 dias",
    workType: "PJ",
    technologies: ["Vue.js", "Nuxt.js", "JavaScript", "Tailwind CSS"],
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 3,
    name: "Mariana Costa",
    role: "Desenvolvedora Back-end",
    location: "Belo Horizonte, MG",
    experience: "7 anos",
    availability: "Disponível",
    workType: "Freelance",
    technologies: ["Python", "Django", "PostgreSQL", "Docker"],
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 4,
    name: "Rafael Santos",
    role: "Desenvolvedor Mobile",
    location: "Curitiba, PR",
    experience: "4 anos",
    availability: "Disponível em 15 dias",
    workType: "CLT",
    technologies: ["React Native", "Flutter", "Swift", "Kotlin"],
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 5,
    name: "Juliana Lima",
    role: "Desenvolvedora Full Stack",
    location: "Porto Alegre, RS",
    experience: "6 anos",
    availability: "Disponível",
    workType: "PJ",
    technologies: ["Angular", "Java", "Spring Boot", "MySQL"],
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 6,
    name: "Pedro Almeida",
    role: "Desenvolvedor DevOps",
    location: "Brasília, DF",
    experience: "8 anos",
    availability: "Disponível em 60 dias",
    workType: "CLT",
    technologies: ["AWS", "Kubernetes", "Terraform", "Jenkins"],
    image: "/placeholder.svg?height=100&width=100",
  },
]

// Filtros para desenvolvedores
const developerFilters = [
  {
    name: "Tecnologias",
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
    name: "Localização",
    type: "select" as const,
    options: [
      { id: "sp", label: "São Paulo" },
      { id: "rj", label: "Rio de Janeiro" },
      { id: "mg", label: "Minas Gerais" },
      { id: "pr", label: "Paraná" },
      { id: "rs", label: "Rio Grande do Sul" },
    ],
  },
  {
    name: "Experiência",
    type: "select" as const,
    options: [
      { id: "junior", label: "Júnior (0-2 anos)" },
      { id: "pleno", label: "Pleno (3-5 anos)" },
      { id: "senior", label: "Sênior (6+ anos)" },
    ],
  },
  {
    name: "Tipo de trabalho",
    type: "checkbox" as const,
    options: [
      { id: "clt", label: "CLT" },
      { id: "pj", label: "PJ" },
      { id: "freelance", label: "Freelance" },
    ],
  },
]

export default function DesenvolvedoresPage() {
  return (
    <div className="container py-8">
      <div className="flex flex-col space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Desenvolvedores</h1>
          <p className="text-muted-foreground">Encontre os melhores talentos para o seu projeto ou empresa</p>
        </div>

        <FilterBar filters={developerFilters} />

        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {developers.map((developer) => (
            <Card key={developer.id} className="overflow-hidden">
              <CardHeader className="p-0">
                <div className="h-12 bg-primary" />
              </CardHeader>
              <CardContent className="pt-0 relative">
                <div className="flex justify-center -mt-8">
                  <Image
                    src={developer.image || "/placeholder.svg"}
                    alt={developer.name}
                    width={80}
                    height={80}
                    className="rounded-full border-4 border-background"
                  />
                </div>
                <div className="text-center mt-2 space-y-1">
                  <h3 className="font-bold text-lg">{developer.name}</h3>
                  <p className="text-muted-foreground">{developer.role}</p>
                </div>
                <div className="mt-4 space-y-2">
                  <div className="flex items-center text-sm">
                    <MapPin className="h-4 w-4 mr-2 text-muted-foreground" />
                    <span>{developer.location}</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Briefcase className="h-4 w-4 mr-2 text-muted-foreground" />
                    <span>{developer.experience} de experiência</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Clock className="h-4 w-4 mr-2 text-muted-foreground" />
                    <span>{developer.availability}</span>
                  </div>
                </div>
                <div className="mt-4">
                  <div className="flex flex-wrap gap-1">
                    {developer.technologies.slice(0, 3).map((tech, index) => (
                      <Badge key={index} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                    {developer.technologies.length > 3 && (
                      <Badge variant="outline">+{developer.technologies.length - 3}</Badge>
                    )}
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">
                  Ver perfil
                  <ExternalLink className="h-4 w-4 ml-2" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
