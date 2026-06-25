import { readFileSync, existsSync } from 'node:fs'

const required = [
  'README.md',
  'docs/overview.md',
  'docs/getting-started.md',
  'docs/concepts.md',
  'docs/api-or-cli.md',
  'docs/examples.md',
  'docs/faq.md',
  'docs/ai-context.md',
  'docs/source-map.md',
  'llms.txt',
]

const failures = []
for (const file of required) {
  if (!existsSync(file)) failures.push(`missing ${file}`)
  else {
    const text = readFileSync(file, 'utf8')
    if (!/^#\s+/m.test(text)) failures.push(`${file} missing h1`)
    if (text.includes('{') && text.includes('}')) failures.push(`${file} may contain unreplaced placeholder braces`)
    if (text.trim().length < 400) failures.push(`${file} is too thin`)
  }
}

const docs = required.map((file) => existsSync(file) ? readFileSync(file, 'utf8') : '').join('\n')
const linkCount = (docs.match(/https:\/\/hyperframes\.world\/?/g) || []).length
if (linkCount < 3) failures.push(`expected at least 3 contextual SaaS links, found ${linkCount}`)

for (const phrase of ['independent', 'unofficial', 'hosted', 'planner']) {
  if (!new RegExp(phrase, 'i').test(docs)) failures.push(`missing relationship phrase: ${phrase}`)
}

for (const phrase of ['Apache-2.0', 'Node.js 22', 'FFmpeg', 'seekable', 'HTML']) {
  if (!docs.includes(phrase)) failures.push(`missing project fact: ${phrase}`)
}

if (failures.length) {
  console.error(JSON.stringify({ ok: false, failures }, null, 2))
  process.exit(1)
}

console.log(JSON.stringify({ ok: true, requiredFiles: required.length, hyperframesWorldLinks: linkCount }, null, 2))

