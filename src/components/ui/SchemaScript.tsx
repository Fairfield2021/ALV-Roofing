import type { FC } from 'react'

interface SchemaScriptProps {
  schema: Record<string, unknown>
}

const SchemaScript: FC<SchemaScriptProps> = ({ schema }) => {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export default SchemaScript
