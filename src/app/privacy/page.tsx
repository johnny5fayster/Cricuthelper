import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy | CricutHelper',
  description: 'CricutHelper privacy policy. How we collect, use, and protect your information.',
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-pink-50 to-white py-12">
      <article className="max-w-3xl mx-auto px-4">
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
          <p className="text-gray-600">Last updated: February 8, 2026</p>
        </header>

        <div className="prose prose-pink max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Overview</h2>
            <p className="text-gray-700">
              CricutHelper ("we," "our," or "us") respects your privacy. This policy explains 
              what information we collect, how we use it, and your rights regarding that information.
            </p>
            <p className="text-gray-700 mt-2">
              <strong>The short version:</strong> We collect minimal data, don't sell your information, 
              and only use it to improve your experience on our site.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Information We Collect</h2>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Information You Provide</h3>
            <ul className="text-gray-700 space-y-2">
              <li><strong>Email address:</strong> If you subscribe to our newsletter, we collect your email address.</li>
              <li><strong>Contact information:</strong> If you contact us directly, we may collect additional information you provide.</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Information Collected Automatically</h3>
            <ul className="text-gray-700 space-y-2">
              <li><strong>Analytics data:</strong> We use Google Analytics to understand how visitors use our site. This includes pages visited, time on site, and general location (country/city level).</li>
              <li><strong>Device information:</strong> Browser type, operating system, and device type.</li>
              <li><strong>Cookies:</strong> We use cookies for analytics and to remember your preferences.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">How We Use Your Information</h2>
            <ul className="text-gray-700 space-y-2">
              <li>To send you our newsletter (if you subscribed)</li>
              <li>To improve our website and content</li>
              <li>To understand how visitors use our site</li>
              <li>To respond to your questions or feedback</li>
            </ul>
            <p className="text-gray-700 mt-4">
              <strong>We do NOT:</strong>
            </p>
            <ul className="text-gray-700 space-y-2">
              <li>Sell your personal information</li>
              <li>Share your email with third parties for marketing</li>
              <li>Use your data for purposes other than those listed above</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Third-Party Services</h2>
            <p className="text-gray-700 mb-4">We use the following third-party services:</p>
            <ul className="text-gray-700 space-y-2">
              <li><strong>Google Analytics:</strong> For website analytics. <a href="https://policies.google.com/privacy" className="text-pink-600 hover:underline" target="_blank" rel="noopener noreferrer">Google's Privacy Policy</a></li>
              <li><strong>Buttondown:</strong> For email newsletter delivery. <a href="https://buttondown.email/privacy" className="text-pink-600 hover:underline" target="_blank" rel="noopener noreferrer">Buttondown's Privacy Policy</a></li>
              <li><strong>Vercel:</strong> For website hosting. <a href="https://vercel.com/legal/privacy-policy" className="text-pink-600 hover:underline" target="_blank" rel="noopener noreferrer">Vercel's Privacy Policy</a></li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Cookies</h2>
            <p className="text-gray-700">
              We use cookies for:
            </p>
            <ul className="text-gray-700 space-y-2 mt-2">
              <li><strong>Analytics:</strong> To understand site usage (Google Analytics)</li>
              <li><strong>Preferences:</strong> To remember your settings</li>
            </ul>
            <p className="text-gray-700 mt-4">
              You can disable cookies in your browser settings, though some site features may not work properly.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Rights</h2>
            <p className="text-gray-700 mb-4">You have the right to:</p>
            <ul className="text-gray-700 space-y-2">
              <li><strong>Access:</strong> Request a copy of the data we have about you</li>
              <li><strong>Correction:</strong> Request we correct inaccurate data</li>
              <li><strong>Deletion:</strong> Request we delete your data</li>
              <li><strong>Unsubscribe:</strong> Opt out of our newsletter at any time (link in every email)</li>
            </ul>
            <p className="text-gray-700 mt-4">
              To exercise these rights, contact us at: <strong>privacy@cricuthelper.com</strong>
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Retention</h2>
            <p className="text-gray-700">
              We retain your email address as long as you remain subscribed to our newsletter. 
              Analytics data is retained according to Google Analytics' standard retention periods (14 months).
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Children's Privacy</h2>
            <p className="text-gray-700">
              Our site is not directed at children under 13. We do not knowingly collect 
              information from children under 13. If you believe we have collected such 
              information, please contact us.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes to This Policy</h2>
            <p className="text-gray-700">
              We may update this policy from time to time. We'll post any changes on this page 
              and update the "Last updated" date.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
            <p className="text-gray-700">
              Questions about this privacy policy? Contact us at: <strong>privacy@cricuthelper.com</strong>
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
