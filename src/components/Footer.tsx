export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t mt-20">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Top Section: Logo + Columns */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Branding */}
          <div>
            <h2 className="text-xl font-semibold text-gray-700">
              DonationFlows
            </h2>
            <p className="mt-3 text-gray-500 text-sm leading-relaxed">
              Empowering donors and communities through transparency and real
              impact.
            </p>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wide">
              Product
            </h3>
            <ul className="mt-4 space-y-3 text-gray-500 text-sm">
              <li className="hover:text-primary cursor-pointer">Campaigns</li>
              <li className="hover:text-primary cursor-pointer">
                How It Works
              </li>
              <li className="hover:text-primary cursor-pointer">Pricing</li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wide">
              Company
            </h3>
            <ul className="mt-4 space-y-3 text-gray-500 text-sm">
              <li className="hover:text-primary cursor-pointer">About</li>
              <li className="hover:text-primary cursor-pointer">Contact</li>
              <li className="hover:text-primary cursor-pointer">Careers</li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wide">
              Legal
            </h3>
            <ul className="mt-4 space-y-3 text-gray-500 text-sm">
              <li className="hover:text-primary cursor-pointer">
                Privacy Policy
              </li>
              <li className="hover:text-primary cursor-pointer">
                Terms of Service
              </li>
              <li className="hover:text-primary cursor-pointer">Cookies</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t mt-14 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>
            © {new Date().getFullYear()} DonationFlows — All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a className="hover:text-primary cursor-pointer">Privacy</a>
            <a className="hover:text-primary cursor-pointer">Terms</a>
            <a className="hover:text-primary cursor-pointer">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
