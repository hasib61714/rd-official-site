export default function Section({ children, id, className = '' }) {
  return (
    <section id={id} className={`py-14 lg:py-20 ${className}`}>
      {children}
    </section>
  )
}
