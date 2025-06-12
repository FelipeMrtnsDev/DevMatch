"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Code, Github } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function CadastroPage() {
  const [isLoading, setIsLoading] = useState(false)
  const [userType, setUserType] = useState("desenvolvedor")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    // Simulação de cadastro
    setTimeout(() => {
      setIsLoading(false)
    }, 1000)
  }

  return (
    <div className="container flex h-screen w-screen flex-col items-center justify-center">
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[400px]">
        <div className="flex flex-col space-y-2 text-center">
          <Code className="mx-auto h-6 w-6" />
          <h1 className="text-2xl font-semibold tracking-tight">Crie sua conta</h1>
          <p className="text-sm text-muted-foreground">Preencha os dados abaixo para criar sua conta</p>
        </div>
        <div className="grid gap-6">
          <form onSubmit={handleSubmit}>
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="name">Nome completo</Label>
                <Input id="name" placeholder="Seu nome completo" disabled={isLoading} required />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  placeholder="nome@exemplo.com"
                  type="email"
                  autoCapitalize="none"
                  autoComplete="email"
                  autoCorrect="off"
                  disabled={isLoading}
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="password">Senha</Label>
                <Input id="password" type="password" disabled={isLoading} required />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="userType">Tipo de usuário</Label>
                <Select value={userType} onValueChange={setUserType} disabled={isLoading}>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione o tipo de usuário" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="desenvolvedor">Desenvolvedor</SelectItem>
                    <SelectItem value="recrutador">Recrutador</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button disabled={isLoading}>{isLoading ? "Criando conta..." : "Criar conta"}</Button>
            </div>
          </form>
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <Separator className="w-full" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">Ou continue com</span>
            </div>
          </div>
          <Button variant="outline" type="button" disabled={isLoading}>
            <Github className="mr-2 h-4 w-4" />
            Google
          </Button>
        </div>
        <p className="px-8 text-center text-sm text-muted-foreground">
          Já tem uma conta?{" "}
          <Link href="/login" className="underline underline-offset-4 hover:text-primary">
            Faça login
          </Link>
        </p>
      </div>
    </div>
  )
}
