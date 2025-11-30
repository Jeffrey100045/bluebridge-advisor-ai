import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const AboutUs = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-background to-blue-50 dark:from-blue-50/5 dark:via-background dark:to-blue-50/5">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <Button
          variant="ghost"
          onClick={() => navigate('/')}
          className="mb-8"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Chat
        </Button>

        <div className="space-y-8">
          <div>
            <h1 className="text-4xl font-display font-bold mb-4">
              About BlueBridge AI
            </h1>
            <p className="text-muted-foreground text-lg">
              Your intelligent business companion powered by advanced AI
            </p>
          </div>

          <div className="space-y-6">
            <section>
              <h2 className="text-2xl font-semibold mb-3">Our Mission</h2>
              <p className="text-muted-foreground leading-relaxed">
                At BlueBridge AI, we're dedicated to making advanced artificial intelligence 
                accessible to businesses of all sizes. Our mission is to empower entrepreneurs, 
                small business owners, and professionals with intelligent tools that help them 
                make better decisions, save time, and grow their ventures.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">What We Offer</h2>
              <p className="text-muted-foreground leading-relaxed">
                BlueBridge AI provides an intelligent chat interface that understands your 
                business needs and offers personalized advice, insights, and solutions. Whether 
                you're looking for strategic guidance, operational tips, or creative ideas, our 
                AI assistant is here to help you succeed.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">Why Choose Us</h2>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span><strong>Smart & Intuitive:</strong> Our AI understands context and provides relevant, actionable advice</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span><strong>Affordable Pricing:</strong> Start free with 5 messages per day, upgrade for unlimited access</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span><strong>Conversation History:</strong> Premium users can access their entire chat history anytime</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span><strong>Always Improving:</strong> We continuously update our AI to provide better insights</span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">Get Started Today</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Join thousands of business professionals who trust BlueBridge AI for their 
                daily business decisions. Start with our free tier and experience the power 
                of AI-driven business intelligence.
              </p>
              <div className="flex gap-4">
                <Button onClick={() => navigate('/auth')}>
                  Sign Up Free
                </Button>
                <Button variant="outline" onClick={() => navigate('/pricing')}>
                  View Pricing
                </Button>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
