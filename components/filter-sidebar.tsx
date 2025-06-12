"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Filter, X } from "lucide-react"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"

interface FilterOption {
  id: string
  label: string
}

interface FilterGroup {
  name: string
  type: "checkbox" | "select" | "input"
  options?: FilterOption[]
}

interface FilterSidebarProps {
  filters: FilterGroup[]
}

export function FilterSidebar({ filters }: FilterSidebarProps) {
  const [open, setOpen] = useState(false)

  return (
    <>
      <div className="hidden md:block w-64 shrink-0">
        <div className="sticky top-20 p-4 space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold text-lg">Filtros</h3>
            <Button variant="ghost" size="sm">
              <X className="h-4 w-4 mr-2" />
              Limpar
            </Button>
          </div>
          <Separator />
          {filters.map((filter, index) => (
            <div key={index} className="space-y-3">
              <h4 className="font-medium">{filter.name}</h4>
              {filter.type === "checkbox" && filter.options && (
                <div className="space-y-2">
                  {filter.options.map((option) => (
                    <div key={option.id} className="flex items-center space-x-2">
                      <Checkbox id={option.id} />
                      <Label htmlFor={option.id}>{option.label}</Label>
                    </div>
                  ))}
                </div>
              )}
              {filter.type === "select" && filter.options && (
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder={`Selecione ${filter.name.toLowerCase()}`} />
                  </SelectTrigger>
                  <SelectContent>
                    {filter.options.map((option) => (
                      <SelectItem key={option.id} value={option.id}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}
              {filter.type === "input" && <Input placeholder={`Buscar por ${filter.name.toLowerCase()}`} />}
              {index < filters.length - 1 && <Separator className="mt-4" />}
            </div>
          ))}
          <Button className="w-full">Aplicar filtros</Button>
        </div>
      </div>

      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button variant="outline" className="md:hidden">
            <Filter className="h-4 w-4 mr-2" />
            Filtros
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-[300px] sm:w-[400px]">
          <SheetHeader>
            <SheetTitle>Filtros</SheetTitle>
          </SheetHeader>
          <div className="py-4 space-y-6">
            {filters.map((filter, index) => (
              <div key={index} className="space-y-3">
                <h4 className="font-medium">{filter.name}</h4>
                {filter.type === "checkbox" && filter.options && (
                  <div className="space-y-2">
                    {filter.options.map((option) => (
                      <div key={option.id} className="flex items-center space-x-2">
                        <Checkbox id={`mobile-${option.id}`} />
                        <Label htmlFor={`mobile-${option.id}`}>{option.label}</Label>
                      </div>
                    ))}
                  </div>
                )}
                {filter.type === "select" && filter.options && (
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder={`Selecione ${filter.name.toLowerCase()}`} />
                    </SelectTrigger>
                    <SelectContent>
                      {filter.options.map((option) => (
                        <SelectItem key={option.id} value={option.id}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                )}
                {filter.type === "input" && <Input placeholder={`Buscar por ${filter.name.toLowerCase()}`} />}
                {index < filters.length - 1 && <Separator className="mt-4" />}
              </div>
            ))}
            <div className="flex gap-2">
              <Button className="flex-1" onClick={() => setOpen(false)}>
                Aplicar
              </Button>
              <Button variant="outline" onClick={() => setOpen(false)}>
                Cancelar
              </Button>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </>
  )
}
