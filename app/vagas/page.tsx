import { FilterBar } from "@/components/filter-bar"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MapPin, Building, Briefcase, Clock, Bookmark } from "lucide-react"

// Dados de exemplo
const jobs = [
  {
    id: 1,
    title: "Desenvolvedor React Sênior",
    company: "TechCorp",
    location: "São Paulo",
    type: "CLT",
    workMode: "Híbrido",
    level: "Sênior",
    description:
      "Buscamos um desenvolvedor React sênior para liderar projetos inovadores em nossa equipe de produtos digitais.",
    technologies: ["React", "TypeScript", "Node.js", "AWS"],
    postedAt: "2 dias atrás",
    salary: "R$ 12.000 - R$ 18.000",
  },
  {
    id: 2,
    title: "Desenvolvedor Back-end Node.js",
    company: "InnovaSoft",
    location: "Remoto",
    type: "PJ",
    workMode: "Remoto",
    level: "Pleno",
    description:
      "Oportunidade para desenvolvedor Node.js trabalhar em projetos de alta escala com tecnologias modernas.",
    technologies: ["Node.js", "Express", "MongoDB", "Docker"],
    postedAt: "1 semana",
    salary: "R$ 8.000 - R$ 12.000",
  },
  {
    id: 3,
    title: "Desenvolvedor Full Stack",
    company: "WebSolutions",
    location: "Rio de Janeiro",
    type: "CLT",
    workMode: "Presencial",
    level: "Pleno/Sênior",
    description: "Desenvolvedor full stack para atuar em projetos web modernos com stack completa JavaScript.",
    technologies: ["React", "Node.js", "PostgreSQL", "AWS"],
    postedAt: "3 dias",
    salary: "R$ 10.000 - R$ 15.000",
  },
  {
    id: 4,
    title: "Desenvolvedor Mobile React Native",
    company: "AppMaster",
    location: "Belo Horizonte",
    type: "PJ",
    workMode: "Híbrido",
    level: "Pleno",
    description: "Desenvolvedor mobile para criar aplicativos inovadores usando React Native e tecnologias modernas.",
    technologies: ["React Native", "TypeScript", "Firebase", "Jest"],
    postedAt: "5 dias",
    salary: "R$ 9.000 - R$ 13.000",
  },
  {
    id: 5,
    title: "Engenheiro de Software Java",
    company: "Enterprise Solutions",
    location: "Curitiba",
    type: "CLT",
    workMode: "Híbrido",
    level: "Sênior",
    description: "Engenheiro de software para desenvolver soluções enterprise robustas usando Java e Spring.",
    technologies: ["Java", "Spring Boot", "Microservices", "Kubernetes"],
    postedAt: "1 dia",
    salary: "R$ 14.000 - R$ 20.000",
  },
  {
    id: 6,
    title: "Desenvolvedor Python",
    company: "DataTech",
    location: "Remoto",
    type: "Freelance",
    workMode: "Remoto",
    level: "Júnior/Pleno",
    description: "Desenvolvedor Python para projetos de análise de dados e desenvolvimento web.",
    technologies: ["Python", "Django", "Flask", "SQL"],
    postedAt: "4 dias",
    salary: "R$ 6.000 - R$ 10.000",
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
    name: "Modalidade",
    type: "checkbox" as const,
    options: [
      { id: "remoto", label: "Remoto" },
      { id: "presencial", label: "Presencial" },
      { id: "hibrido", label: "Híbrido" },
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

        <FilterBar filters={jobFilters} />

        <div className="grid gap-6">
          {jobs.map((job) => (
            <Card key={job.id} className="p-6">
              <CardContent className="p-0">
                <div className="flex flex-col space-y-4">
                  {/* Header da vaga */}
                  <div className="flex justify-between items-start">
                    <h3 className="text-xl font-bold">{job.title}</h3>
                    <Badge variant="secondary">{job.workMode}</Badge>
                  </div>

                  {/* Descrição */}
                  <p className="text-muted-foreground">{job.description}</p>

                  {/* Informações da empresa */}
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Building className="h-4 w-4" />
                      <span>{job.company}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      <span>{job.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Briefcase className="h-4 w-4" />
                      <span>{job.type}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>{job.postedAt}</span>
                    </div>
                  </div>

                  {/* Tecnologias e nível */}
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-sm font-medium mb-2">Tecnologias necessárias:</p>
                      <div className="flex flex-wrap gap-2">
                        {job.technologies.map((tech, index) => (
                          <Badge key={index} variant="outline">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div className="text-right">
                      <Badge className="mb-2">{job.level}</Badge>
                      <p className="text-lg font-bold text-primary">{job.salary}</p>
                    </div>
                  </div>

                  {/* Botões de ação */}
                  <div className="flex gap-3 pt-4">
                    <Button className="flex-1">Candidatar-se</Button>
                    <Button variant="outline" size="icon">
                      <Bookmark className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
