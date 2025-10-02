interface CardProps {
  header?: React.ReactNode
  children?: React.ReactNode
  footer?: React.ReactNode
  classes?: string
}

export default function Card({ classes, header, children, footer }: CardProps) {
  return (
    <div className={classes ?? "max-w-40"}>
      <header>{header}</header>
      <div>{children}</div>
      <footer>{footer}</footer>
    </div>
  )
}
