import path from 'path'
import url from 'url'

const projectName = 'simple'
const projectDirPath = path.resolve(import.meta.dirname, 'projects', projectName)
const configFilePath = path.resolve(projectDirPath, 'config.js')
const configFileUrl = url.pathToFileURL(configFilePath)

const configModule = await import(configFileUrl)
const configData = configModule.default

configData.templates.forEach(t => {
    console.log(t.template_path)
})
