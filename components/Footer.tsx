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
                <a href="/proprietary" className="font-body-md text-outline hover:text-secondary transition-colors text-sm">
                  Prop Trading
                </a>
              </li>
              <li>
                <a href="/automated" className="font-body-md text-outline hover:text-secondary transition-colors text-sm">
                  Auto Desks
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
                <a href="/investments" className="font-body-md text-outline hover:text-secondary transition-colors text-sm">
                  Investments
                </a>
              </li>
              <li>
                <a href="/mutual-funds" className="font-body-md text-outline hover:text-secondary transition-colors text-sm">
                  Mutual Funds
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

      {/* Bottom Disclaimer & Copyright */}
      <div className="ace-container mt-12 pt-8 border-t border-border/30 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left space-y-2">
          <p className="font-body-md text-xs text-outline">
            Disclaimer: Proprietary trading involves substantial risk of loss and is not suitable for all investors. Fiduciary references pertain to compliance frameworks across global liquidity nodes.
          </p>
          <p className="font-body-md text-xs text-outline">
            Copyright © 2026 ACE CAPITAL ENTERPRISE. All rights reserved.
          </p>
        </div>
        <div className="text-center md:text-right text-xs">
          <a
            href="https://aiprgmr.in"
            target="_blank"
            rel="noopener noreferrer"
            className="font-body-md text-outline hover:text-secondary transition-colors"
          >
            Designed & Developed by AI PRGMR.
          </a>
        </div>
      </div>
    </footer>
  )
}
