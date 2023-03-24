const path = require("path")

const getPathToFile = (fileName, fileType) => {
    const allowedFileTypes = ["html", "csv"]
    if (!allowedFileTypes.includes(fileType))
        throw new Error("Tipo de archivo invalido: " + fileType)
    return path.join(__dirname, "..", "data", fileType, fileName + "." + fileType)
}

module.exports = getPathToFile