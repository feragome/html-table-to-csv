const htmlParser = require("node-html-parser")
const fs = require("fs")
const tableToCSV = require("./tableToCSV")
const getPathToFile = require("./getPathToFile")

/**
 * Ejecuta el proceso en base a los argumentos recibidos
 */
const cli = () => {
    let [, , filename] = process.argv

    if (!(filename)) {
        throw new Error("No se recibio nombre del archivo")
    }

    source = getPathToFile(filename, "html")
    target = getPathToFile(filename, "csv")

    if (!fs.existsSync(source)) throw new Error("Archivo fuente no existe")
    const htmlTable = fs.readFileSync(source)
    const parsedTable = htmlParser.parse(htmlTable)
    const csv = tableToCSV(parsedTable)
    fs.writeFileSync(target, csv)
}

// Se verifica que se haya llamado por linea de comandos
if (require.main === module) {
    // Si se llama el script por linea de comandos, se procede
    cli()
} else {
    throw new Error(
        "Solamente invocaciones via linea de comandos. Ej: node file.js"
    )
}
