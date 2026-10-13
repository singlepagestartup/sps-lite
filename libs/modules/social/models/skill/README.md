# Social Skill

`social.skill` stores reusable instructions that can be linked to one or more
social profiles through `profiles-to-skills`.

A skill has no draft, active, or archived lifecycle. A persisted skill exists
and is available to its linked profiles; removing it uses the model's delete
flow. The relation controls which profiles can use the skill.

## Fields

- `title` and `adminTitle` identify the skill.
- `slug` is the stable command identifier used by chat skill mentions.
- `description` contains the reusable instructions.
- `variant` selects the rendering variant.
- `className` provides the standard optional Tailwind class extension.

## AI Chat document professions

AI Chat requires five shared skills with non-empty instructions:

| Document    | Skill slug                         |
| ----------- | ---------------------------------- |
| Brief.md    | `ai-chat-account-manager`          |
| Strategy.md | `ai-chat-strategist`               |
| Brand.md    | `ai-chat-communication-strategist` |
| Design.md   | `ai-chat-brand-designer`           |
| Products.md | `ai-chat-business-analyst`         |

An operator creates these records through the runtime API or admin interface.
New AI Chat assistants receive all five links during profile creation. The
server rejects creation when a required skill is missing or has empty
instructions. It does not generate instructions from Studio or overwrite
manual edits. Editing a shared skill affects every linked assistant.

Document messages carry the appropriate slash command and selected skill ID.
Generation reads the current instructions once for each request. Ordinary
AI Chat threads can read all profile Knowledge but do not automatically
activate these five professions.
