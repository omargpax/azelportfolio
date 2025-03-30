import Image from 'next/image'
import { useState } from 'react';

export function useMDXComponents(components) {
  return {
    // Allows customizing built-in components, e.g. to add styling.
    h1: ({ children }) => (
      <h1 style={{ color: '#eeeeee', fontSize: '2.5rem', fontWeight: '700', borderBottom: 'solid 2px gray', marginBottom: '1.5rem' }}>{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 style={{ color: '#eeeeee', fontSize: '2rem', fontWeight: '700', borderBottom: 'solid 2px gray', marginBottom: '1.5rem' }}>{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 style={{
        color: '#dddddd',
        fontSize: '1.5rem',
        fontWeight: '600',
        margin: '1.5rem 0 1rem'
      }}>{children}</h3>
    ),
    p: ({ children }) => (
      <p style={{
        color: '#cccccc',
        fontSize: '1rem',
        lineHeight: '1.6',
        margin: '1rem 0'
      }}>{children}</p>
    ),
    a: (props) => {
      const [isHovered, setIsHovered] = useState(false);

      return (
        <a
          {...props}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          style={{
            color: 'cyan',
            textDecoration: 'underline',
            ...(isHovered && {
              color: '#00ffff',
              textDecoration: 'none',
              backgroundColor: 'rgba(0, 255, 255, 0.1)'
            }),
            // Mantiene estilos adicionales de props si existen
            ...props.style
          }}
        />
      );
    },
    // Listas desordenadas
    ul: ({ children }) => (
      <ul style={{
        listStyleType: 'disc',
        margin: '1rem 0 1rem 1.5rem',
        paddingLeft: '1rem',
        color: '#cccccc'
      }}>{children}</ul>
    ),

    // Listas ordenadas
    ol: ({ children }) => (
      <ol style={{
        listStyleType: 'decimal',
        margin: '1rem 0 1rem 1.5rem',
        paddingLeft: '1rem',
        color: '#cccccc'
      }}>{children}</ol>
    ),

    // Items de lista
    li: ({ children }) => (
      <li style={{
        margin: '0.5rem 0',
        lineHeight: '1.6',
        paddingLeft: '0.5rem'
      }}>{children}</li>
    ),

    // Código en línea
    code: ({ children }) => (
      <code style={{
        padding: '0.2rem 0.4rem',
        borderRadius: '0.3rem',
        color: '#f8fafc',
        fontSize: '0.9em',
        fontFamily: 'monospace'
      }}>{children}</code>
    ),

    // Bloques de código (pre)
    pre: ({ children }) => (
      <pre style={{
        backgroundColor: '#0f172a',
        borderRadius: '0.5rem',
        padding: '1rem',
        margin: '1.5rem 0',
        overflowX: 'auto',
        fontSize: '0.9rem',
        lineHeight: '1.5'
      }}>{children}</pre>
    ),

    // Imágenes
    img: (props) => (
      <div style={{
        margin: '2rem 0',
        borderRadius: '0.5rem',
        overflow: 'hidden',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
      }}>
        <Image
          sizes="100vw"
          style={{
            width: '100%',
            height: 'auto',
            display: 'block'
          }}
          {...props}
        />
      </div>
    ),

    // Bloques de cita
    blockquote: ({ children }) => (
      <blockquote style={{
        borderLeft: '4px solid #3b82f6',
        padding: '0.5rem 1rem',
        margin: '1.5rem 0',
        backgroundColor: 'rgba(59, 130, 246, 0.1)',
        color: '#e2e8f0',
        fontStyle: 'italic'
      }}>{children}</blockquote>
    ),

    // Tablas
    table: ({ children }) => (
      <div style={{ overflowX: 'auto', margin: '1.5rem 0' }}>
        <table style={{
          width: '100%',
          borderCollapse: 'collapse',
          borderSpacing: '0'
        }}>{children}</table>
      </div>
    ),

    th: ({ children }) => (
      <th style={{
        backgroundColor: '#1e293b',
        color: '#ffffff',
        padding: '0.75rem',
        textAlign: 'left',
        border: '1px solid #334155'
      }}>{children}</th>
    ),

    td: ({ children }) => (
      <td style={{
        padding: '0.75rem',
        border: '1px solid #334155',
        backgroundColor: '#0f172a'
      }}>{children}</td>
    ),

    // Línea horizontal
    hr: () => (
      <hr style={{
        border: 'none',
        height: '1px',
        backgroundColor: '#334155',
        margin: '2rem 0'
      }} />
    ),

    // Texto fuerte (negrita)
    strong: ({ children }) => (
      <strong style={{ fontWeight: '700', color: '#ffffff' }}>{children}</strong>
    ),

    // Texto enfatizado (cursiva)
    em: ({ children }) => (
      <em style={{ fontStyle: 'italic', color: '#e2e8f0' }}>{children}</em>
    ),

    // Texto tachado
    del: ({ children }) => (
      <del style={{ textDecoration: 'line-through', color: '#94a3b8' }}>{children}</del>
    ),
    ...components,
  }
}