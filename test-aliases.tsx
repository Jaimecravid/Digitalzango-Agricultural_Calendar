// Test file to verify @/ aliases are working
import { cn } from "@/lib/utils"
import { Button } from "@/ui/button" 
import { useLanguage } from "@/contexts/language-context"
import { useMobile } from "@/hooks/use-mobile"

export default function TestAliases() {
  return (
    <div className={cn("p-4")}>
      <h1>Alias Test</h1>
      <Button>Test Button</Button>
    </div>
  )
}
