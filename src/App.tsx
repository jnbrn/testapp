import { useState } from 'react';
import { ThemeProvider } from '@/components/theme-provider';
import { Button } from '@/components/ui/button';
import { ModeToggle } from '@/components/mode-toggle';
import { Toaster } from '@/components/ui/toaster';
import { useToast } from '@/components/ui/use-toast';
import { Home } from 'lucide-react';

function App() {
  const [count, setCount] = useState(0);
  const { toast } = useToast();

  const handleClick = () => {
    setCount((count) => count + 1);
    toast({
      title: 'Count increased',
      description: `The count is now ${count + 1}`,
    });
  };

  return (
    <ThemeProvider defaultTheme="system" enableSystem>
      <div className="min-h-screen flex flex-col items-center justify-center p-4">
        <header className="w-full max-w-md flex justify-between items-center mb-8">
          <Home className="w-6 h-6" />
          <ModeToggle />
        </header>
        <main className="w-full max-w-md text-center">
          <h1 className="text-4xl font-bold mb-4">Capacitor React PWA</h1>
          <p className="mb-4">
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
          <div className="mb-4">
            <Button onClick={handleClick}>
              count is {count}
            </Button>
          </div>
          <p className="text-sm text-muted-foreground">
            Click on the Vite and React logos to learn more
          </p>
        </main>
      </div>
      <Toaster />
    </ThemeProvider>
  );
}

export default App;