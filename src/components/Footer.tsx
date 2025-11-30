import { NavLink } from './NavLink';

export const Footer = () => {
  return (
    <footer className="bg-card border-t border-border mt-auto">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-display font-bold bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent mb-3">
              BlueBridge AI
            </h3>
            <p className="text-sm text-muted-foreground">
              Your trusted business advisor and analyst powered by AI.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <NavLink to="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Chat
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink to="/pricing" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Pricing
                </NavLink>
              </li>
              <li>
                <NavLink to="/faq" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  FAQ
                </NavLink>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-3">Contact</h4>
            <p className="text-sm text-muted-foreground">
              Get in touch for support or inquiries about our services.
            </p>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-6 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} BlueBridge AI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};