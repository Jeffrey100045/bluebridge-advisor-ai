import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, MessageSquare, CreditCard, Shield, Zap } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Footer } from '@/components/Footer';

const FAQ = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-background to-blue-50 dark:from-blue-50/5 dark:via-background dark:to-blue-50/5 flex flex-col">
      <div className="flex-1">
        <div className="container max-w-4xl mx-auto px-4 py-12">
          <Button
            variant="ghost"
            onClick={() => navigate('/')}
            className="mb-8"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Chat
          </Button>

          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-display font-bold bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-muted-foreground text-lg">
              Find answers to common questions about BlueBridge AI
            </p>
          </div>

          <div className="bg-card border border-border rounded-xl p-8 shadow-lg">
            <Accordion type="single" collapsible className="w-full space-y-4">
              <AccordionItem value="item-1" className="border rounded-lg px-6">
                <AccordionTrigger className="hover:no-underline">
                  <div className="flex items-center gap-3">
                    <MessageSquare className="w-5 h-5 text-blue-600" />
                    <span className="font-semibold">What is BlueBridge AI?</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pt-4">
                  BlueBridge AI is an intelligent business advisor and analyst that uses advanced AI technology to provide 
                  personalized business insights, strategic advice, and professional consultation. We help businesses make 
                  informed decisions through data-driven analysis and expert recommendations.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border rounded-lg px-6">
                <AccordionTrigger className="hover:no-underline">
                  <div className="flex items-center gap-3">
                    <CreditCard className="w-5 h-5 text-blue-600" />
                    <span className="font-semibold">How many messages can I send for free?</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pt-4">
                  New users get 25 free messages per day to explore the platform. This allows you to experience the full 
                  capabilities of BlueBridge AI before deciding to upgrade. The message count resets daily at midnight UTC.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border rounded-lg px-6">
                <AccordionTrigger className="hover:no-underline">
                  <div className="flex items-center gap-3">
                    <Zap className="w-5 h-5 text-blue-600" />
                    <span className="font-semibold">What's included in the Premium plan?</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pt-4">
                  The Premium plan at $10/month includes:
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>Unlimited messages - chat as much as you need</li>
                    <li>Full chat history - access all your previous conversations</li>
                    <li>Priority support - get help when you need it</li>
                    <li>Advanced AI features - access to more sophisticated analysis</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border rounded-lg px-6">
                <AccordionTrigger className="hover:no-underline">
                  <div className="flex items-center gap-3">
                    <Shield className="w-5 h-5 text-blue-600" />
                    <span className="font-semibold">Is my data secure?</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pt-4">
                  Yes, we take data security seriously. All conversations are encrypted, and we never share your data with 
                  third parties. Your business information is kept confidential and secure in our database. We comply with 
                  industry-standard security practices to protect your privacy.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="border rounded-lg px-6">
                <AccordionTrigger className="hover:no-underline">
                  <div className="flex items-center gap-3">
                    <MessageSquare className="w-5 h-5 text-blue-600" />
                    <span className="font-semibold">Can I cancel my subscription anytime?</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pt-4">
                  Absolutely! You can cancel your Premium subscription at any time. There are no long-term commitments or 
                  cancellation fees. Your premium features will remain active until the end of your current billing period.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6" className="border rounded-lg px-6">
                <AccordionTrigger className="hover:no-underline">
                  <div className="flex items-center gap-3">
                    <Zap className="w-5 h-5 text-blue-600" />
                    <span className="font-semibold">What kind of questions can I ask?</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pt-4">
                  You can ask about business strategy, financial analysis, market research, operational efficiency, 
                  marketing strategies, auditing questions, and any other business-related topics. Our AI is trained to 
                  provide professional advice across various business domains.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-7" className="border rounded-lg px-6">
                <AccordionTrigger className="hover:no-underline">
                  <div className="flex items-center gap-3">
                    <Shield className="w-5 h-5 text-blue-600" />
                    <span className="font-semibold">Is the advice legally binding?</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pt-4">
                  No, BlueBridge AI provides informational guidance only. All advice is for educational and informational 
                  purposes and should not be considered as professional legal, financial, or accounting advice. We recommend 
                  consulting with qualified professionals for critical business decisions.
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <div className="mt-12 p-6 bg-blue-50 dark:bg-blue-50/10 rounded-lg border border-blue-200 dark:border-blue-900">
              <h3 className="font-display font-bold text-lg mb-2">Still have questions?</h3>
              <p className="text-muted-foreground mb-4">
                Can't find the answer you're looking for? Start chatting with our AI advisor.
              </p>
              <Button onClick={() => navigate('/')} className="bg-primary hover:bg-primary/90">
                Start Chatting
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default FAQ;