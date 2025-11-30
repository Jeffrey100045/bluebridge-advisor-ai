import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Check } from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import { Footer } from '@/components/Footer';

const Pricing = () => {
  const { user, hasUnlimitedMessages } = useAuth();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-background to-blue-50 dark:from-blue-50/5 dark:via-background dark:to-blue-50/5 flex flex-col">
      <div className="flex-1 container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-display font-bold mb-4">
            Simple, Transparent Pricing
          </h1>
          <p className="text-muted-foreground text-lg">
            Choose the plan that works best for your business
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Free Plan */}
          <Card className="border-2">
            <CardHeader>
              <CardTitle className="text-2xl">Free Trial</CardTitle>
              <CardDescription>Get started with basic access</CardDescription>
              <div className="mt-4">
                <span className="text-4xl font-bold">$0</span>
                <span className="text-muted-foreground">/forever</span>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-green-600" />
                  <span>25 messages per day</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-green-600" />
                  <span>Basic business advice</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-green-600" />
                  <span>Access to AI assistant</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button 
                className="w-full" 
                variant="outline"
                onClick={() => navigate(user ? '/' : '/auth')}
              >
                {user ? 'Current Plan' : 'Get Started'}
              </Button>
            </CardFooter>
          </Card>

          {/* Premium Plan */}
          <Card className="border-2 border-primary shadow-lg relative">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
              Most Popular
            </div>
            <CardHeader>
              <CardTitle className="text-2xl">Premium</CardTitle>
              <CardDescription>Unlimited access for serious businesses</CardDescription>
              <div className="mt-4">
                <span className="text-4xl font-bold">$10</span>
                <span className="text-muted-foreground">/month</span>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-green-600" />
                  <span className="font-medium">Unlimited messages</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-green-600" />
                  <span>Priority support</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-green-600" />
                  <span>Advanced business insights</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-green-600" />
                  <span>Conversation history</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-green-600" />
                  <span>Export chat transcripts</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button 
                className="w-full"
                disabled={hasUnlimitedMessages}
              >
                {hasUnlimitedMessages ? 'Current Plan' : 'Upgrade to Premium'}
              </Button>
            </CardFooter>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground">
            Payment integration coming soon. Contact us for early access.
          </p>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Pricing;
