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
              <Image src="/acecapital/logo-acecapital-enterprise.webp" alt="" height={150} width={150} />
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
              className="w-10 h-10 border border-border flex items-center justify-center hover:text-[#1877F2] hover:border-[#1877F2] transition-all opacity-80 hover:opacity-100"
              aria-label="Facebook"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
            </a>
            <a
              href="https://x.com/acecapitalent"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 border border-border flex items-center justify-center hover:text-foreground hover:border-foreground transition-all opacity-80 hover:opacity-100"
              aria-label="X Twitter"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4l11.733 16h4.267l-11.733 -16z" /><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" /></svg>
            </a>
            <a
              href="https://youtube.com/@acecapitalenterprise?si=kxXjdN6WXwNZHzN7"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 border border-border flex items-center justify-center hover:text-[#FF0000] hover:border-[#FF0000] transition-all opacity-80 hover:opacity-100"
              aria-label="YouTube"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z" /><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" /></svg>
            </a>
            <a
              href="https://www.linkedin.com/company/ace-capital-enterprise/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 border border-border flex items-center justify-center hover:text-[#0A66C2] hover:border-[#0A66C2] transition-all opacity-80 hover:opacity-100"
              aria-label="LinkedIn"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg>
            </a>
          </div>

          <div className="pt-4 flex flex-col gap-3">
            <h3 className="font-section-label text-xs text-muted-foreground uppercase tracking-wider">Download Dhan Setu</h3>
            <div className="flex gap-3">
              <a href="https://apps.apple.com/in/app/dhan-setu/id6761404925" target="_blank" rel="noopener noreferrer" className="bg-black text-white px-3 py-2 rounded-md flex items-center gap-2 hover:bg-gray-800 transition-colors w-full justify-center shadow-sm">
                <svg className="h-12 w-auto fill-current" viewBox="0 0 14 44" xmlns="http://www.w3.org/2000/svg">
                  <path d="m13.0729 17.6825a3.61 3.61 0 0 0 -1.7248 3.0365 3.5132 3.5132 0 0 0 2.1379 3.2223 8.394 8.394 0 0 1 -1.0948 2.2618c-.6816.9812-1.3943 1.9623-2.4787 1.9623s-1.3633-.63-2.613-.63c-1.2187 0-1.6525.6507-2.644.6507s-1.6834-.9089-2.4787-2.0243a9.7842 9.7842 0 0 1 -1.6628-5.2776c0-3.0984 2.014-4.7405 3.9969-4.7405 1.0535 0 1.9314.6919 2.5924.6919.63 0 1.6112-.7333 2.8092-.7333a3.7579 3.7579 0 0 1 3.1604 1.5802zm-3.7284-2.8918a3.5615 3.5615 0 0 0 .8469-2.22 1.5353 1.5353 0 0 0 -.031-.32 3.5686 3.5686 0 0 0 -2.3445 1.2084 3.4629 3.4629 0 0 0 -.8779 2.1585 1.419 1.419 0 0 0 .031.2892 1.19 1.19 0 0 0 .2169.0207 3.0935 3.0935 0 0 0 2.1586-1.1368z" />
                </svg>
                <div className="text-left flex flex-col">
                  <span className="text-[7px] leading-none uppercase tracking-wider text-gray-300">Download on the</span>
                  <span className="text-xs font-bold leading-none mt-0.5">App Store</span>
                </div>
              </a>
              <a href="https://play.google.com/store/apps/details?id=com.dhan.app.setu" target="_blank" rel="noopener noreferrer" className="bg-black text-white px-3 py-2 rounded-md flex items-center gap-2 hover:bg-gray-800 transition-colors w-full justify-center shadow-sm">
                <svg className="h-6 w-auto" aria-hidden="true" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
                  <path fill="none" d="M0,0h40v40H0V0z"></path>
                  <g>
                    <path d="M19.7,19.2L4.3,35.3c0,0,0,0,0,0c0.5,1.7,2.1,3,4,3c0.8,0,1.5-0.2,2.1-0.6l0,0l17.4-9.9L19.7,19.2z" fill="#EA4335"></path>
                    <path d="M35.3,16.4L35.3,16.4l-7.5-4.3l-8.4,7.4l8.5,8.3l7.5-4.2c1.3-0.7,2.2-2.1,2.2-3.6C37.5,18.5,36.6,17.1,35.3,16.4z" fill="#FBBC04"></path>
                    <path d="M4.3,4.7C4.2,5,4.2,5.4,4.2,5.8v28.5c0,0.4,0,0.7,0.1,1.1l16-15.7L4.3,4.7z" fill="#4285F4"></path>
                    <path d="M19.8,20l8-7.9L10.5,2.3C9.9,1.9,9.1,1.7,8.3,1.7c-1.9,0-3.6,1.3-4,3c0,0,0,0,0,0L19.8,20z" fill="#34A853"></path>
                  </g>
                </svg>
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
                <Link href="/about" className="font-body-md text-outline hover:text-secondary transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/prop-trading-automated" className="font-body-md text-outline hover:text-secondary transition-colors text-sm">
                  Prop Trading & Auto Desks
                </Link>
              </li>
              <li>
                <Link href="/careers" className="font-body-md text-outline hover:text-secondary transition-colors text-sm">
                  Careers
                </Link>
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
          <a href="https://mf.acecapitalenterprise.com/privacy_policy" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors">Privacy Policy</a>
          <span>&middot;</span>
          <a href="https://mf.acecapitalenterprise.com/terms" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors">Terms</a>
          <span>&middot;</span>
          <a href="https://mf.acecapitalenterprise.com/disclaimer" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors">Disclaimer</a>
          <span>&middot;</span>
          <a href="https://mf.acecapitalenterprise.com/disclosure" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors">Disclosure</a>
          <span>&middot;</span>
          <a href="https://mf.acecapitalenterprise.com/help_support" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors">Help & Support</a>
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
