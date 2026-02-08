import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms of Service | CricutHelper',
  description: 'CricutHelper terms of service. Rules and guidelines for using our website.',
};

export default function TermsOfServicePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-pink-50 to-white py-12">
      <article className="max-w-3xl mx-auto px-4">
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Terms of Service</h1>
          <p className="text-gray-600">Last updated: February 8, 2026</p>
        </header>

        <div className="prose prose-pink max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Agreement to Terms</h2>
            <p className="text-gray-700">
              By accessing or using CricutHelper.com ("the Site"), you agree to be bound by these 
              Terms of Service. If you disagree with any part of these terms, you may not access the Site.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Use of the Site</h2>
            <p className="text-gray-700 mb-4">You may use our Site for lawful purposes only. You agree not to:</p>
            <ul className="text-gray-700 space-y-2">
              <li>Use the Site in any way that violates applicable laws</li>
              <li>Attempt to gain unauthorized access to any part of the Site</li>
              <li>Use automated systems to scrape or collect content without permission</li>
              <li>Interfere with or disrupt the Site's operation</li>
              <li>Impersonate others or provide false information</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Intellectual Property</h2>
            <p className="text-gray-700">
              The content on CricutHelper—including text, graphics, logos, and images—is owned by 
              us or our licensors and is protected by copyright and other intellectual property laws.
            </p>
            <p className="text-gray-700 mt-4">
              You may view, download, and print content for personal, non-commercial use only. 
              You may not reproduce, distribute, or create derivative works without our written permission.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Disclaimer</h2>
            <p className="text-gray-700">
              <strong>CricutHelper is not affiliated with, endorsed by, or sponsored by Cricut, Inc.</strong> 
              "Cricut" is a registered trademark of Cricut, Inc. We are an independent resource 
              created by crafters for crafters.
            </p>
            <p className="text-gray-700 mt-4">
              The information on this Site is provided for general informational purposes only. 
              While we strive to keep information accurate and up-to-date, we make no warranties 
              about the completeness, reliability, or accuracy of this information.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Limitation of Liability</h2>
            <p className="text-gray-700">
              To the fullest extent permitted by law, CricutHelper shall not be liable for any 
              indirect, incidental, special, consequential, or punitive damages resulting from 
              your use of, or inability to use, the Site.
            </p>
            <p className="text-gray-700 mt-4">
              This includes, but is not limited to, damages for loss of profits, data, or other 
              intangible losses, even if we have been advised of the possibility of such damages.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Third-Party Links</h2>
            <p className="text-gray-700">
              Our Site may contain links to third-party websites. We are not responsible for the 
              content, privacy policies, or practices of these external sites. Visiting linked 
              sites is at your own risk.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Affiliate Disclosure</h2>
            <p className="text-gray-700">
              Some links on our Site may be affiliate links. This means we may earn a small 
              commission if you make a purchase through these links, at no additional cost to you. 
              This helps support the Site and allows us to continue creating free content.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">User-Generated Content</h2>
            <p className="text-gray-700">
              If we enable comments, forums, or other user-generated content features, you are 
              responsible for any content you post. You grant us a non-exclusive, royalty-free 
              license to use, display, and distribute your content on the Site.
            </p>
            <p className="text-gray-700 mt-4">
              We reserve the right to remove any content that violates these terms or is otherwise 
              objectionable.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes to Terms</h2>
            <p className="text-gray-700">
              We reserve the right to modify these terms at any time. We will post any changes 
              on this page and update the "Last updated" date. Your continued use of the Site 
              after changes constitutes acceptance of the modified terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Governing Law</h2>
            <p className="text-gray-700">
              These terms shall be governed by and construed in accordance with the laws of 
              Ontario, Canada, without regard to its conflict of law provisions.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
            <p className="text-gray-700">
              Questions about these terms? Contact us at: <strong>hello@cricuthelper.com</strong>
            </p>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <Link href="/" className="text-pink-600 hover:text-pink-700">
            ← Back to CricutHelper
          </Link>
        </div>
      </article>
    </main>
  );
}
