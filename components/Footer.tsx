import Link from "next/link";
import Image from "next/image";
export default function Footer() {
  return (
    <footer id="footer-contact" className="bg-surface-container-lowest border-t border-border/50 ace-section">
      <div className="ace-container grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* Company Info */}
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <Link
              href="/"
              className="flex items-center gap-2 hover:opacity-90 active:scale-95 transition-all"
              aria-label="Ace Capital Enterprise Home"
            >
              <Image src="/acecapital/logo-acecapital-enterprise.webp" alt="" height={100} width={100} />
            </Link>
          </div>
          <p className="font-body-md text-on-surface-variant leading-relaxed">
            Ace Capital Enterprise is dedicated to advancing the art and science of trading. As a proprietary trading firm, we exclusively trade the firm's capital, ensuring that our efforts are wholly concentrated on enhancing our quantitative systems and investment strategies.
          </p>
          <div className="flex gap-4">
            <a
              href="https://www.facebook.com/profile.php?id=61566740426997"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 border border-border flex items-center justify-center hover:text-secondary hover:border-secondary transition-all opacity-80 hover:opacity-100"
              aria-label="Facebook"
            >
              <span className="material-symbols-outlined text-lg">public</span>
            </a>
            <a
              href="https://x.com/acecapitalent"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 border border-border flex items-center justify-center hover:text-secondary hover:border-secondary transition-all opacity-80 hover:opacity-100"
              aria-label="X Twitter"
            >
              <span className="material-symbols-outlined text-lg font-bold">alternate_email</span>
            </a>
            <a
              href="https://youtube.com/@acecapitalenterprise?si=kxXjdN6WXwNZHzN7"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 border border-border flex items-center justify-center hover:text-secondary hover:border-secondary transition-all opacity-80 hover:opacity-100"
              aria-label="YouTube"
            >
              <span className="material-symbols-outlined text-lg">play_circle</span>
            </a>
            <a
              href="https://www.linkedin.com/company/ace-capital-enterprise/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 border border-border flex items-center justify-center hover:text-secondary hover:border-secondary transition-all opacity-80 hover:opacity-100"
              aria-label="LinkedIn"
            >
              <span className="material-symbols-outlined text-lg">share</span>
            </a>
          </div>

          <div className="pt-4 flex flex-col gap-3">
            <h3 className="font-section-label text-xs text-muted-foreground uppercase tracking-wider">Download Our App</h3>
            <div className="flex gap-3">
              <a href="#" className="bg-black text-white px-3 py-2 rounded-md flex items-center gap-2 hover:bg-gray-800 transition-colors w-full justify-center shadow-sm">
                <span className="material-symbols-outlined text-xl">apple</span>
                <div className="text-left flex flex-col">
                  <span className="text-[7px] leading-none uppercase tracking-wider text-gray-300">Download on the</span>
                  <span className="text-xs font-bold leading-none mt-0.5">App Store</span>
                </div>
              </a>
              <a href="#" className="bg-black text-white px-3 py-2 rounded-md flex items-center gap-2 hover:bg-gray-800 transition-colors w-full justify-center shadow-sm">
                <span className="material-symbols-outlined text-xl">shop</span>
                <div className="text-left flex flex-col">
                  <span className="text-[7px] leading-none uppercase tracking-wider text-gray-300">GET IT ON</span>
                  <span className="text-xs font-bold leading-none mt-0.5">Google Play</span>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Contact Information & Hours */}
        <div className="space-y-6">
          <h3 className="font-section-label text-section-label text-secondary uppercase tracking-widest">
            Support Desk
          </h3>
          <div className="space-y-4">
            <div>
              <p className="font-section-label text-xs text-muted-foreground uppercase tracking-wider">
                Support Email
              </p>
              <a href="mailto:support@acecapitalenterprise.com" className="font-body-md text-on-surface hover:text-secondary transition-colors break-all">
                support@acecapitalenterprise.com
              </a>
            </div>
            <div>
              <p className="font-section-label text-xs text-muted-foreground uppercase tracking-wider">
                Technical Support
              </p>
              <a href="mailto:techsupport@acecapitalenterprise.com" className="font-body-md text-on-surface hover:text-secondary transition-colors break-all">
                techsupport@acecapitalenterprise.com
              </a>
            </div>
            <div>
              <p className="font-section-label text-xs text-muted-foreground uppercase tracking-wider">
                Operational Hours
              </p>
              <p className="font-body-md text-on-surface">
                MON - FRI: 9:00 AM - 5:00 PM (IST)
              </p>
            </div>
          </div>
        </div>

        {/* Navigation & Quick Links */}
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-4">
            <h3 className="font-section-label text-section-label text-secondary uppercase tracking-widest">
              Firm Info
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="/about" className="font-body-md text-outline hover:text-secondary transition-colors text-sm">
                  About Us
                </a>
              </li>
              <li>
                <a href="/prop-trading-automated" className="font-body-md text-outline hover:text-secondary transition-colors text-sm">
                  Prop Trading & Auto Desks
                </a>
              </li>
              <li>
                <a href="/careers" className="font-body-md text-outline hover:text-secondary transition-colors text-sm">
                  Careers
                </a>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="font-section-label text-section-label text-secondary uppercase tracking-widest">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="/blogs" className="font-body-md text-outline hover:text-secondary transition-colors text-sm">
                  Our Blogs
                </a>
              </li>
              <li>
                <a href="/mutual-funds-investments" className="font-body-md text-outline hover:text-secondary transition-colors text-sm">
                  Mutual Funds & Investments
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Regulatory & Institutional Links */}
        <div className="space-y-6">
          <h3 className="font-section-label text-section-label text-secondary uppercase tracking-widest">
            Important Links
          </h3>
          <div className="grid grid-cols-1">
            <a
              href="https://www.sebi.gov.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-body-md text-outline hover:text-secondary transition-colors text-sm"
            >
              SEBI Portal
            </a>
            <a
              href="https://www.nseindia.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-body-md text-outline hover:text-secondary transition-colors text-sm"
            >
              NSE India
            </a>
            <a
              href="https://www.mcxindia.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-body-md text-outline hover:text-secondary transition-colors text-sm"
            >
              MCX India
            </a>
            <a
              href="https://scores.sebi.gov.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-body-md text-outline hover:text-secondary transition-colors text-sm"
            >
              SCORES
            </a>
            <a
              href="https://www.evoting.nsdl.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-body-md text-outline hover:text-secondary transition-colors text-sm"
            >
              NSDL Evoting
            </a>
            <a
              href="https://www.evotingindia.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-body-md text-outline hover:text-secondary transition-colors text-sm"
            >
              CDSL Evoting
            </a>
          </div>
        </div>

      </div>

      {/* Links and Copyright (Left / Right) */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-body-md text-outline border-t border-border/10 pt-6 max-w-7xl mx-auto">
        <div className="text-center md:text-left flex flex-wrap justify-center md:justify-start gap-2">
          <a href="#" className="hover:text-secondary transition-colors">Privacy Policy</a>
          <span>&middot;</span>
          <a href="#" className="hover:text-secondary transition-colors">Terms</a>
          <span>&middot;</span>
          <a href="#" className="hover:text-secondary transition-colors">Disclaimer</a>
          <span>&middot;</span>
          <a href="#" className="hover:text-secondary transition-colors">Disclosure</a>
          <span>&middot;</span>
          <a href="#" className="hover:text-secondary transition-colors">Help & Support</a>
        </div>
        <div className="text-center md:text-right">
          Copyright &copy; Ace Capital Enterprise &middot; All rights reserved.
        </div>
      </div>
      {/* Bottom Disclaimer & Copyright */}
      <div className="ace-container mt-12 pt-8 border-t border-border/30 flex flex-col gap-8 pb-8">

        {/* Centered Disclaimer */}
        <div className="text-center space-y-2 max-w-4xl mx-auto">
          <p className="font-body-md text-xs text-outline">
            SEBI/AMFI Disclaimer: Mutual fund investments are subject to market risks. Please read all scheme-related documents carefully before investing.
          </p>
          <p className="font-body-md text-xs text-outline">
            Past performance is not indicative of future results. This website does not constitute investment advice. For personalised guidance, please reach out to us.
          </p>
          <p className="font-body-md text-xs text-outline font-bold">
            AMFI Registered Mutual Fund Distributor | ARN-113576.
          </p>
        </div>
      </div>
    </footer>
  )
}
