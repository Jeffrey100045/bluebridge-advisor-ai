import { ChatInterface } from '@/components/ChatInterface';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-background to-blue-50 dark:from-blue-50/5 dark:via-background dark:to-blue-50/5 flex flex-col">
      <ChatInterface />
      <Footer />
    </div>
  );
};

export default Index;
