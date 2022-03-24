const fs = require('fs')
const { join } = require('path')
const { default: caz, inject } = require('caz')

const temp = join(__dirname, 'temp')
const template = join(temp, 'src')

beforeAll(async () => {
  jest.spyOn(console, 'log').mockImplementation()
  jest.spyOn(console, 'clear').mockImplementation()
  await fs.promises.mkdir(template, { recursive: true })
  await fs.promises.cp(join(__dirname, 'index.js'), join(template, 'index.js'))
  await fs.promises.cp(join(__dirname, 'package.json'), join(template, 'package.json'))
  await fs.promises.cp(join(__dirname, 'template'), join(template, 'template'), { recursive: true })
})

test('minimal', async () => {
  inject(['minimal', '0.1.0', 'minimal template', 'zce', 'w@zce.me', 'https://zce.me', 'zce', false, 'npm'])
  const project = join(temp, 'minimal')
  await caz(template, project, { force: true })
  expect(fs.existsSync(project)).toBe(true)
  expect(fs.existsSync(join(project, '.git'))).toBe(true)
  expect(fs.existsSync(join(project, 'README.md'))).toBe(true)
})

test('maximal', async () => {
  inject(['maximal', '0.1.0', 'maximal template', 'zce', 'w@zce.me', 'https://zce.me', 'zce', false, 'npm'])
  const project = join(temp, 'maximal')
  await caz(template, project, { force: true })
  expect(fs.existsSync(project)).toBe(true)
  expect(fs.existsSync(join(project, '.git'))).toBe(true)
  expect(fs.existsSync(join(project, 'README.md'))).toBe(true)
})

afterAll(async () => {
  jest.clearAllMocks()
  await fs.promises.rm(temp, { recursive: true })
})
