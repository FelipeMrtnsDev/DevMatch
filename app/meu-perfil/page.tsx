"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Textarea } from "@/components/ui/textarea"
import { Github, Linkedin, Mail, MapPin, ExternalLink, Briefcase, Clock, Edit, Save, Plus, X } from "lucide-react"
import Image from "next/image"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Dados de exemplo do usuário logado
const userData = {
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
}

// Projetos do usuário logado
const userProjects = [
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
]

export default function MeuPerfilPage() {
  const [isEditing, setIsEditing] = useState(false)
  const [profile, setProfile] = useState(userData)
  const [newTech, setNewTech] = useState("")
  const [newSkill, setNewSkill] = useState("")

  const handleSaveProfile = () => {
    // Em uma implementação real, aqui você enviaria os dados para o servidor
    setIsEditing(false)
    alert("Perfil atualizado com sucesso!")
  }

  const addTechnology = () => {
    if (newTech && !profile.technologies.includes(newTech)) {
      setProfile({
        ...profile,
        technologies: [...profile.technologies, newTech],
      })
      setNewTech("")
    }
  }

  const removeTechnology = (tech: string) => {
    setProfile({
      ...profile,
      technologies: profile.technologies.filter((t) => t !== tech),
    })
  }

  const addSkill = () => {
    if (newSkill && !profile.skills.includes(newSkill)) {
      setProfile({
        ...profile,
        skills: [...profile.skills, newSkill],
      })
      setNewSkill("")
    }
  }

  const removeSkill = (skill: string) => {
    setProfile({
      ...profile,
      skills: profile.skills.filter((s) => s !== skill),
    })
  }

  return (
    <div className="container py-8">
      <Tabs defaultValue="profile">
        <TabsList className="mb-8">
          <TabsTrigger value="profile">Meu Perfil</TabsTrigger>
          <TabsTrigger value="projects">Meus Projetos</TabsTrigger>
        </TabsList>

        <TabsContent value="profile">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Informações do perfil */}
            <div className="lg:col-span-1">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <h2 className="text-xl font-bold">Perfil</h2>
                  <Button variant="ghost" size="icon" onClick={() => setIsEditing(!isEditing)}>
                    {isEditing ? <Save className="h-5 w-5" /> : <Edit className="h-5 w-5" />}
                  </Button>
                </CardHeader>
                <CardContent className="pt-2">
                  <div className="flex flex-col items-center text-center">
                    <div className="relative w-32 h-32 mb-4">
                      <Image
                        src={profile.image || "/placeholder.svg"}
                        alt={profile.name}
                        fill
                        className="rounded-full object-cover"
                      />
                      {isEditing && (
                        <div className="absolute inset-0 flex items-center justify-center bg-black/30 rounded-full">
                          <Button variant="ghost" size="icon">
                            <Edit className="h-5 w-5 text-white" />
                          </Button>
                        </div>
                      )}
                    </div>

                    {isEditing ? (
                      <div className="w-full space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="name">Nome</Label>
                          <Input
                            id="name"
                            value={profile.name}
                            onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="role">Cargo</Label>
                          <Input
                            id="role"
                            value={profile.role}
                            onChange={(e) => setProfile({ ...profile, role: e.target.value })}
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="location">Localização</Label>
                          <Input
                            id="location"
                            value={profile.location}
                            onChange={(e) => setProfile({ ...profile, location: e.target.value })}
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="email">Email</Label>
                          <Input
                            id="email"
                            type="email"
                            value={profile.email}
                            onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="website">Website</Label>
                          <Input
                            id="website"
                            value={profile.website}
                            onChange={(e) => setProfile({ ...profile, website: e.target.value })}
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="github">GitHub</Label>
                          <Input
                            id="github"
                            value={profile.github}
                            onChange={(e) => setProfile({ ...profile, github: e.target.value })}
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="linkedin">LinkedIn</Label>
                          <Input
                            id="linkedin"
                            value={profile.linkedin}
                            onChange={(e) => setProfile({ ...profile, linkedin: e.target.value })}
                          />
                        </div>
                      </div>
                    ) : (
                      <>
                        <h1 className="text-2xl font-bold">{profile.name}</h1>
                        <p className="text-muted-foreground">{profile.role}</p>

                        <div className="flex items-center mt-2 text-sm">
                          <MapPin className="h-4 w-4 mr-1 text-muted-foreground" />
                          <span>{profile.location}</span>
                        </div>

                        <div className="flex gap-2 mt-4">
                          <Button size="icon" variant="outline" asChild>
                            <a href={`https://github.com/${profile.github}`} target="_blank" rel="noopener noreferrer">
                              <Github className="h-4 w-4" />
                            </a>
                          </Button>
                          <Button size="icon" variant="outline" asChild>
                            <a
                              href={`https://linkedin.com/in/${profile.linkedin}`}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <Linkedin className="h-4 w-4" />
                            </a>
                          </Button>
                          <Button size="icon" variant="outline" asChild>
                            <a href={`mailto:${profile.email}`}>
                              <Mail className="h-4 w-4" />
                            </a>
                          </Button>
                          {profile.website && (
                            <Button size="icon" variant="outline" asChild>
                              <a href={profile.website} target="_blank" rel="noopener noreferrer">
                                <ExternalLink className="h-4 w-4" />
                              </a>
                            </Button>
                          )}
                        </div>
                      </>
                    )}
                  </div>

                  <Separator className="my-6" />

                  <div className="space-y-4">
                    {isEditing ? (
                      <>
                        <div>
                          <h3 className="font-medium mb-2">Informações</h3>
                          <div className="grid grid-cols-1 gap-4 text-sm">
                            <div className="space-y-2">
                              <Label htmlFor="experience">Experiência</Label>
                              <Input
                                id="experience"
                                value={profile.experience}
                                onChange={(e) => setProfile({ ...profile, experience: e.target.value })}
                              />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="availability">Disponibilidade</Label>
                              <Select
                                value={profile.availability}
                                onValueChange={(value) => setProfile({ ...profile, availability: value })}
                              >
                                <SelectTrigger>
                                  <SelectValue placeholder="Selecione sua disponibilidade" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="Disponível">Disponível</SelectItem>
                                  <SelectItem value="Disponível em 15 dias">Disponível em 15 dias</SelectItem>
                                  <SelectItem value="Disponível em 30 dias">Disponível em 30 dias</SelectItem>
                                  <SelectItem value="Disponível em 60 dias">Disponível em 60 dias</SelectItem>
                                  <SelectItem value="Não disponível">Não disponível</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="workType">Tipo de trabalho</Label>
                              <Select
                                value={profile.workType}
                                onValueChange={(value) => setProfile({ ...profile, workType: value })}
                              >
                                <SelectTrigger>
                                  <SelectValue placeholder="Selecione o tipo de trabalho" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="CLT">CLT</SelectItem>
                                  <SelectItem value="PJ">PJ</SelectItem>
                                  <SelectItem value="Freelance">Freelance</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                          </div>
                        </div>

                        <div>
                          <h3 className="font-medium mb-2">Tecnologias</h3>
                          <div className="flex flex-wrap gap-1 mb-2">
                            {profile.technologies.map((tech, index) => (
                              <Badge key={index} variant="secondary" className="flex gap-1 items-center">
                                {tech}
                                <button
                                  onClick={() => removeTechnology(tech)}
                                  className="ml-1 rounded-full hover:bg-destructive/20 p-0.5"
                                >
                                  <X className="h-3 w-3" />
                                </button>
                              </Badge>
                            ))}
                          </div>
                          <div className="flex gap-2">
                            <Input
                              placeholder="Adicionar tecnologia"
                              value={newTech}
                              onChange={(e) => setNewTech(e.target.value)}
                              onKeyPress={(e) => {
                                if (e.key === "Enter") {
                                  e.preventDefault()
                                  addTechnology()
                                }
                              }}
                            />
                            <Button size="sm" onClick={addTechnology}>
                              <Plus className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>

                        <div>
                          <h3 className="font-medium mb-2">Habilidades</h3>
                          <div className="flex flex-wrap gap-1 mb-2">
                            {profile.skills.map((skill, index) => (
                              <Badge key={index} variant="outline" className="flex gap-1 items-center">
                                {skill}
                                <button
                                  onClick={() => removeSkill(skill)}
                                  className="ml-1 rounded-full hover:bg-destructive/20 p-0.5"
                                >
                                  <X className="h-3 w-3" />
                                </button>
                              </Badge>
                            ))}
                          </div>
                          <div className="flex gap-2">
                            <Input
                              placeholder="Adicionar habilidade"
                              value={newSkill}
                              onChange={(e) => setNewSkill(e.target.value)}
                              onKeyPress={(e) => {
                                if (e.key === "Enter") {
                                  e.preventDefault()
                                  addSkill()
                                }
                              }}
                            />
                            <Button size="sm" onClick={addSkill}>
                              <Plus className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </>
                    ) : (
                      <>
                        <div>
                          <h3 className="font-medium mb-2">Informações</h3>
                          <div className="grid grid-cols-1 gap-2 text-sm">
                            <div className="flex items-center">
                              <Briefcase className="h-4 w-4 mr-2 text-muted-foreground" />
                              <span>{profile.experience} de experiência</span>
                            </div>
                            <div className="flex items-center">
                              <Clock className="h-4 w-4 mr-2 text-muted-foreground" />
                              <span>{profile.availability}</span>
                            </div>
                          </div>
                        </div>

                        <div>
                          <h3 className="font-medium mb-2">Tecnologias</h3>
                          <div className="flex flex-wrap gap-1">
                            {profile.technologies.map((tech, index) => (
                              <Badge key={index} variant="secondary">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h3 className="font-medium mb-2">Habilidades</h3>
                          <div className="flex flex-wrap gap-1">
                            {profile.skills.map((skill, index) => (
                              <Badge key={index} variant="outline">
                                {skill}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                </CardContent>

                {isEditing && (
                  <CardFooter>
                    <Button className="w-full" onClick={handleSaveProfile}>
                      Salvar alterações
                    </Button>
                  </CardFooter>
                )}
              </Card>
            </div>

            {/* Bio */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <h2 className="text-xl font-bold">Sobre</h2>
                </CardHeader>
                <CardContent>
                  {isEditing ? (
                    <Textarea
                      className="min-h-[200px]"
                      value={profile.bio}
                      onChange={(e) => setProfile({ ...profile, bio: e.target.value })}
                    />
                  ) : (
                    <p>{profile.bio}</p>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="projects">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Meus Projetos</h2>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Novo Projeto
            </Button>
          </div>

          {userProjects.length > 0 ? (
            <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {userProjects.map((project) => (
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
                      <Edit className="h-4 w-4 mr-2" />
                      Editar
                    </Button>
                    <Button size="sm" className="flex-1">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Ver
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground mb-4">Você ainda não possui projetos</p>
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                Criar seu primeiro projeto
              </Button>
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  )
}
