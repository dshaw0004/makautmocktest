
import { Button } from "@/components/ui/button";

export default function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-background text-primary">
      <h1 className="text-9xl font-bold">404</h1>
      <p className="text-2xl font-medium mb-4">Page not found</p>
      <p className="text-lg text-foreground/70 mb-8">
        Sorry, the page you are looking for does not exist.
      </p>
      <Button asChild size="lg">
        <a href="/">Go Home</a>
      </Button>
    </div>
  );
}
