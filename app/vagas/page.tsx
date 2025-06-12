import { FilterSidebar } from "@/components/filter-sidebar"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MapPin, Building, Briefcase } from "lucide-react"
import Image from "next/image"

// Dados de exemplo
const jobs = [
  {
    id: 1,
    title: "Desenvolvedor Front-end React",
    company: "TechCorp",
    logo: "/placeholder.svg?height=50&width=50",
    location: "São Paulo, SP",
    type: "CLT",
    level: "Pleno",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Redux"],
    postedAt: "Há 2 dias",
  },
  {
    id: 2,
    title: "Desenvolvedor Back-end Node.js",
    company: "InnovaSoft",
    logo: "/placeholder.svg?height=50&width=50",
    location: "Remoto",
    type: "PJ",
    level: "Sênior",
    technologies: ["Node.js", "Express", "MongoDB", "Docker"],
    postedAt: "Há 1 semana",
  },
  {
    id: 3,
    title: "Desenvolvedor Full Stack",
    company: "WebSolutions",
    logo: "/placeholder.svg?height=50&width=50",
    location: "Rio de Janeiro, RJ",
    type: "CLT",
    level: "Pleno/Sênior",
    technologies: ["React", "Node.js", "PostgreSQL", "AWS"],
    postedAt: "Há 3 dias",
  },
  {
    id: 4,
    title: "Desenvolvedor Mobile React Native",
    company: "AppMaster",
    logo: "/placeholder.svg?height=50&width=50",
    location: "Belo Horizonte, MG",
    type: "PJ",
    level: "Pleno",
    technologies: ["React Native", "TypeScript", "Firebase", "Jest"],
    postedAt: "Há 5 dias",
  },
  {
    id: 5,
    title: "Engenheiro de Software Java",
    company: "Enterprise Solutions",
    logo: "/placeholder.svg?height=50&width=50",
    location: "Curitiba, PR",
    type: "CLT",
    level: "Sênior",
    technologies: ["Java", "Spring Boot", "Microservices", "Kubernetes"],
    postedAt: "Há 1 dia",
  },
  {
    id: 6,
    title: "Desenvolvedor Python",
    company: "DataTech",
    logo: "/placeholder.svg?height=50&width=50",
    location: "Remoto",
    type: "Freelance",
    level: "Júnior/Pleno",
    technologies: ["Python", "Django", "Flask", "SQL"],
    postedAt: "Há 4 dias",
  },
]

// Filtros para vagas
const jobFilters = [
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
    name: "Tipo de contrato",
    type: "checkbox" as const,
    options: [
      { id: "clt", label: "CLT" },
      { id: "pj", label: "PJ" },
      { id: "freelance", label: "Freelance" },
    ],
  },
  {
    name: "Cidade",
    type: "select" as const,
    options: [
      { id: "sp", label: "São Paulo" },
      { id: "rj", label: "Rio de Janeiro" },
      { id: "mg", label: "Belo Horizonte" },
      { id: "pr", label: "Curitiba" },
      { id: "remoto", label: "Remoto" },
    ],
  },
  {
    name: "Nível",
    type: "checkbox" as const,
    options: [
      { id: "junior", label: "Júnior" },
      { id: "pleno", label: "Pleno" },
      { id: "senior", label: "Sênior" },
    ],
  },
]

export default function VagasPage() {
  return (
    <div className="container py-8">
      <div className="flex flex-col space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Vagas</h1>
          <p className="text-muted-foreground">Encontre as melhores oportunidades de trabalho</p>
        </div>

        <div className="flex flex-col md:flex-row gap-6">
          <FilterSidebar filters={jobFilters} />

          <div className="flex-1">
            <div className="grid gap-6">
              {jobs.map((job) => (
                <Card key={job.id}>
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row gap-4">
                      <div className="flex-shrink-0">
                        <Image
                          src={job.logo || "/placeholder.svg"}
                          alt={job.company}
                          width={60}
                          height={60}
                          className="rounded-md"
                        />
                      </div>
                      <div className="flex-1 space-y-2">
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                          <div>
                            <h3 className="font-bold text-lg">{job.title}</h3>
                            <div className="flex items-center text-sm">
                              <Building className="h-4 w-4 mr-1 text-muted-foreground" />
                              <span>{job.company}</span>
                            </div>
                          </div>
                          <div className="flex flex-col items-start sm:items-end gap-1">
                            <Badge variant="outline">{job.type}</Badge>
                            <span className="text-xs text-muted-foreground">{job.postedAt}</span>
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-4 text-sm">
                          <div className="flex items-center">
                            <MapPin className="h-4 w-4 mr-1 text-muted-foreground" />
                            <span>{job.location}</span>
                          </div>
                          <div className="flex items-center">
                            <Briefcase className="h-4 w-4 mr-1 text-muted-foreground" />
                            <span>{job.level}</span>
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-1 pt-2">
                          {job.technologies.map((tech, index) => (
                            <Badge key={index} variant="secondary">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="px-6 pb-6 pt-0 flex justify-end">
                    <Button>Ver detalhes</Button>
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
