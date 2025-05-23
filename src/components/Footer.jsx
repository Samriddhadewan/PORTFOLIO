import { ArrowUp, ArrowUpIcon } from "lucide-react"

const Footer = () => {
  return (
    <footer className="py-12 px-4 bg-card relative border-t border-border mt-121 pt-8 flex flex-wrap justify-between items-center">
        <p className="text-sm text-muted-foreground">&copy; {new Date().getFullYear()} Samriddha.co, All Right reserved</p>
      
      <a href="#hero">
        <ArrowUp className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors" />
      </a>
    </footer>
  )
}

export default Footer