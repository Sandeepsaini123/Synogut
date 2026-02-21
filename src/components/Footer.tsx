const Footer = () => {
  return (
    <footer className="py-8 px-4 bg-background border-t">
      <div className="max-w-4xl mx-auto text-center space-y-4">
        
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} BalancedGutLiving. All rights reserved.
        </p>

        <p className="text-xs text-muted-foreground">
          Supporting better digestion through natural wellness education.
        </p>

      </div>
    </footer>
  );
};

export default Footer;