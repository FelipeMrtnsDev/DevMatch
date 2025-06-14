"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Filter, X, ChevronDown } from "lucide-react"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"

interface FilterOption {
  id: string
  label: string
}

interface FilterGroup {
  name: string
  type: "checkbox" | "select" | "input"
  options?: FilterOption[]
}

interface FilterBarProps {
  filters: FilterGroup[]
}

export function FilterBar({ filters }: FilterBarProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="w-full border rounded-lg bg-card">
      <Collapsible open={isOpen} onOpenChange={setIsOpen}>
        <CollapsibleTrigger asChild>
          <Button variant="ghost" className="w-full justify-between p-4 h-auto">
            <div className="flex items-center gap-2">
              <Filter className="h-4 w-4" />
              <span className="font-medium">Filtros</span>
            </div>
            <ChevronDown className={`h-4 w-4 transition-transform ${isOpen ? "rotate-180" : ""}`} />
          </Button>
        </CollapsibleTrigger>
        <CollapsibleContent className="px-4 pb-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-4 border-t">
            {filters.map((filter, index) => (
              <div key={index} className="space-y-3">
                <h4 className="font-medium text-sm">{filter.name}</h4>
                {filter.type === "checkbox" && filter.options && (
                  <div className="space-y-2 max-h-32 overflow-y-auto">
                    {filter.options.map((option) => (
                      <div key={option.id} className="flex items-center space-x-2">
                        <Checkbox id={option.id} />
                        <Label htmlFor={option.id} className="text-sm">
                          {option.label}
                        </Label>
                      </div>
                    ))}
                  </div>
                )}
                {filter.type === "select" && filter.options && (
                  <Select>
                    <SelectTrigger className="w-full">
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
              </div>
            ))}
            <div className="flex items-end">
              <div className="flex gap-2 w-full">
                <Button className="flex-1">Aplicar</Button>
                <Button variant="outline" size="icon">
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </CollapsibleContent>
      </Collapsible>
    </div>
  )
}
