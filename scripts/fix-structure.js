const fs = require("fs")
const path = require("path")

// Função para criar diretórios recursivamente
function createDirectoryIfNotExists(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true })
    console.log(`Diretório criado: ${dirPath}`)
  }
}

// Função para mover arquivos
function moveFile(source, destination) {
  try {
    // Certifique-se de que o diretório de destino existe
    const destDir = path.dirname(destination)
    createDirectoryIfNotExists(destDir)

    // Copiar o conteúdo do arquivo
    fs.copyFileSync(source, destination)
    console.log(`Arquivo copiado: ${source} -> ${destination}`)

    // Remover o arquivo original
    fs.unlinkSync(source)
    console.log(`Arquivo original removido: ${source}`)
  } catch (error) {
    console.error(`Erro ao mover arquivo ${source}: ${error.message}`)
  }
}

// Função para verificar se um diretório está vazio
function isDirEmpty(dirPath) {
  try {
    const files = fs.readdirSync(dirPath)
    return files.length === 0
  } catch (error) {
    return true
  }
}

// Função para remover diretórios vazios
function removeEmptyDirectories(dirPath) {
  if (!fs.existsSync(dirPath)) return

  const files = fs.readdirSync(dirPath)

  for (const file of files) {
    const fullPath = path.join(dirPath, file)
    if (fs.statSync(fullPath).isDirectory()) {
      removeEmptyDirectories(fullPath)
      if (isDirEmpty(fullPath)) {
        fs.rmdirSync(fullPath)
        console.log(`Diretório vazio removido: ${fullPath}`)
      }
    }
  }
}

// Criar a estrutura de diretórios src
createDirectoryIfNotExists("src")
createDirectoryIfNotExists("src/app")
createDirectoryIfNotExists("src/components")
createDirectoryIfNotExists("src/components/ui")

// Lista de diretórios e arquivos a serem movidos
const filesToMove = [
  { from: "app", to: "src/app" },
  { from: "components", to: "src/components" },
  { from: "hooks", to: "src/hooks" },
  { from: "lib", to: "src/lib" },
]

// Mover diretórios
for (const { from, to } of filesToMove) {
  if (fs.existsSync(from)) {
    // Ler todos os arquivos no diretório
    const processDirectory = (dir, targetDir) => {
      if (!fs.existsSync(dir)) return

      const entries = fs.readdirSync(dir, { withFileTypes: true })

      for (const entry of entries) {
        const sourcePath = path.join(dir, entry.name)
        const targetPath = path.join(targetDir, entry.name)

        if (entry.isDirectory()) {
          createDirectoryIfNotExists(targetPath)
          processDirectory(sourcePath, targetPath)
        } else {
          moveFile(sourcePath, targetPath)
        }
      }
    }

    processDirectory(from, to)
    console.log(`Diretório processado: ${from} -> ${to}`)
  }
}

// Remover diretórios vazios após a migração
removeEmptyDirectories("app")
removeEmptyDirectories("components")
removeEmptyDirectories("hooks")
removeEmptyDirectories("lib")

console.log("Migração concluída!")
