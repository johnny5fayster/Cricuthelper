import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Cricut Won't Turn On? 8 Fixes for Power Problems",
  description: "Cricut not powering on, showing red light, or completely dead? Step-by-step troubleshooting for all power issues on Explore, Maker, and Joy machines.",
  keywords: ["Cricut won't turn on", "Cricut not powering on", "Cricut red light", "Cricut power issues", "Cricut dead", "Cricut no power", "Cricut power button not working"],
  openGraph: {
    title: "Cricut Won't Turn On? 8 Fixes for Power Problems",
    description: "Cricut not powering on, showing red light, or completely dead? Step-by-step troubleshooting for all power issues.",
    type: 'article',
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Why won't my Cricut turn on at all?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "First, check that the power cord is fully plugged into both the outlet and the back of the machine. Try a different outlet. If using a power strip, plug directly into a wall outlet instead. If none of these work, the power adapter or machine may need replacement."
      }
    },
    {
      "@type": "Question",
      "name": "What does a red light on my Cricut mean?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A solid red light usually means the machine needs a firmware update. A blinking red light indicates a more serious error. Connect to Design Space and check for firmware updates. If the light continues blinking after updating, contact Cricut support."
      }
    },
    {
      "@type": "Question",
      "name": "Can I use a different power cord for my Cricut?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "It's not recommended. Using a different power adapter with the wrong voltage can damage your machine or cause it not to work properly. Always use the original Cricut power adapter or an official Cricut replacement."
      }
    },
    {
      "@type": "Question",
      "name": "My Cricut turns on but won't connect - what's wrong?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "If the machine powers on but won't connect, the issue is likely Bluetooth or USB connectivity, not power. See our Bluetooth troubleshooting guide. Power issues prevent the machine from turning on entirely."
      }
    }
  ]
};

export default function CricutWontTurnOnGuide() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      
      <div className="min-h-screen bg-gradient-to-b from-[#FAF8F5] to-white">
        <div className="container mx-auto px-4 py-8 max-w-4xl">
          {/* Breadcrumb */}
          <nav className="text-sm mb-6">
            <ol className="flex items-center space-x-2 text-gray-500">
              <li><Link href="/" className="hover:text-[#9CAF88]">Home</Link></li>
              <li>/</li>
              <li><Link href="/guides" className="hover:text-[#9CAF88]">Guides</Link></li>
              <li>/</li>
              <li className="text-gray-900">Won't Turn On</li>
            </ol>
          </nav>

          {/* Header */}
          <header className="mb-8">
            <div className="flex items-center gap-2 mb-3">
              <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm font-medium">
                Power Issue
              </span>
              <span className="text-gray-500 text-sm">Updated February 2025</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Cricut Won't Turn On? 8 Fixes for Power Problems
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Nothing more frustrating than pressing the power button and... nothing. Here's how to 
              diagnose and fix power issues on any Cricut machine.
            </p>
          </header>

          {/* Quick Diagnosis Box */}
          <div className="bg-gradient-to-r from-red-100 to-orange-100 rounded-xl p-6 mb-8 border-l-4 border-red-500">
            <h2 className="font-bold text-lg text-gray-900 mb-3">🔍 Quick Diagnosis</h2>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="font-bold text-red-600">→</span>
                <span><strong>No lights at all?</strong> Power cord issue — <a href="#no-power" className="text-[#9CAF88] underline">Jump to fixes</a></span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-red-600">→</span>
                <span><strong>Solid red light?</strong> Firmware update needed — <a href="#red-light" className="text-[#9CAF88] underline">Jump to fixes</a></span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-red-600">→</span>
                <span><strong>Blinking red light?</strong> Error state — <a href="#blinking-red" className="text-[#9CAF88] underline">Jump to fixes</a></span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-red-600">→</span>
                <span><strong>Turns on but won't connect?</strong> That's Bluetooth, not power — <a href="/guides/cricut-bluetooth-not-connecting" className="text-[#9CAF88] underline">See Bluetooth guide</a></span>
              </li>
            </ul>
          </div>

          {/* Main Content */}
          <article className="prose prose-lg max-w-none">
            
            {/* No Power Section */}
            <section id="no-power" className="mb-10 scroll-mt-20">
              <h2 className="text-2xl font-bold text-gray-900">Cricut Completely Dead (No Lights)</h2>
              <p>
                If pressing the power button does absolutely nothing — no lights, no sounds — work 
                through these fixes in order:
              </p>

              {/* Fix 1 */}
              <div className="bg-white border-l-4 border-[#9CAF88] pl-4 py-3 my-4">
                <h3 className="font-bold text-gray-900 flex items-center gap-2">
                  <span className="bg-[#9CAF88] text-white w-6 h-6 rounded-full flex items-center justify-center text-sm">1</span>
                  Check the Power Cord Connection (Both Ends)
                </h3>
                <p className="text-gray-600 mt-2">
                  The #1 cause of "dead" Cricuts: the power cord isn't fully seated.
                </p>
                <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
                  <li>Unplug the cord from the <strong>back of the machine</strong></li>
                  <li>Check for debris or damage in the port</li>
                  <li>Plug it back in firmly — you should feel it click</li>
                  <li>Check the wall outlet end too</li>
                </ul>
              </div>

              {/* Fix 2 */}
              <div className="bg-white border-l-4 border-[#9CAF88] pl-4 py-3 my-4">
                <h3 className="font-bold text-gray-900 flex items-center gap-2">
                  <span className="bg-[#9CAF88] text-white w-6 h-6 rounded-full flex items-center justify-center text-sm">2</span>
                  Try a Different Outlet
                </h3>
                <p className="text-gray-600 mt-2">
                  The outlet might be the problem, not the Cricut.
                </p>
                <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
                  <li>Try a completely different wall outlet</li>
                  <li>Avoid extension cords and power strips if possible</li>
                  <li>Test the outlet with something else (lamp, phone charger)</li>
                  <li>Check if the outlet is on a switched circuit</li>
                </ul>
              </div>

              {/* Fix 3 */}
              <div className="bg-white border-l-4 border-[#9CAF88] pl-4 py-3 my-4">
                <h3 className="font-bold text-gray-900 flex items-center gap-2">
                  <span className="bg-[#9CAF88] text-white w-6 h-6 rounded-full flex items-center justify-center text-sm">3</span>
                  Bypass Power Strips
                </h3>
                <p className="text-gray-600 mt-2">
                  Power strips with surge protectors can sometimes cause issues.
                </p>
                <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
                  <li>Plug directly into a wall outlet</li>
                  <li>If the strip has a reset button, press it</li>
                  <li>Check if the strip's circuit breaker has tripped</li>
                </ul>
              </div>

              {/* Fix 4 */}
              <div className="bg-white border-l-4 border-[#9CAF88] pl-4 py-3 my-4">
                <h3 className="font-bold text-gray-900 flex items-center gap-2">
                  <span className="bg-[#9CAF88] text-white w-6 h-6 rounded-full flex items-center justify-center text-sm">4</span>
                  Test the Power Adapter
                </h3>
                <p className="text-gray-600 mt-2">
                  The power adapter (the brick part of the cord) can fail.
                </p>
                <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
                  <li>Check if the adapter feels warm after being plugged in (it should slightly)</li>
                  <li>If it's completely cold after 5 minutes, it may be dead</li>
                  <li>Look for any damage, fraying, or burnt smell</li>
                  <li>If you know someone with the same Cricut, try their power cord</li>
                </ul>
              </div>

              {/* Fix 5 */}
              <div className="bg-white border-l-4 border-[#9CAF88] pl-4 py-3 my-4">
                <h3 className="font-bold text-gray-900 flex items-center gap-2">
                  <span className="bg-[#9CAF88] text-white w-6 h-6 rounded-full flex items-center justify-center text-sm">5</span>
                  Wait After a Power Surge
                </h3>
                <p className="text-gray-600 mt-2">
                  If there was a power outage or surge, the machine may need time.
                </p>
                <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
                  <li>Unplug the machine completely</li>
                  <li>Wait 10-15 minutes</li>
                  <li>Plug back in and try again</li>
                </ul>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 my-4">
                <p className="text-yellow-800">
                  <strong>⚠️ If none of these work:</strong> Your power adapter may need replacement. 
                  You can order a replacement from <a href="https://cricut.com" className="underline">cricut.com</a> 
                  or contact support if under warranty.
                </p>
              </div>
            </section>

            {/* Red Light Section */}
            <section id="red-light" className="mb-10 scroll-mt-20">
              <h2 className="text-2xl font-bold text-gray-900">Solid Red Power Light</h2>
              <p>
                A solid (not blinking) red light usually means your Cricut needs a firmware update.
              </p>

              <div className="bg-gray-50 rounded-lg p-6 my-4">
                <h3 className="font-bold text-gray-900 mb-3">How to Update Firmware:</h3>
                <ol className="list-decimal list-inside space-y-2 text-gray-700">
                  <li>Connect your Cricut to your computer via <strong>USB cable</strong> (not Bluetooth)</li>
                  <li>Open Design Space</li>
                  <li>Design Space should detect the machine and prompt for firmware update</li>
                  <li>Follow the on-screen instructions</li>
                  <li>Do NOT unplug or turn off during the update</li>
                  <li>Wait for the update to complete and machine to restart</li>
                </ol>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 my-4">
                <p className="text-blue-800">
                  <strong>💡 Important:</strong> Firmware updates MUST be done via USB, not Bluetooth. 
                  If you don't have a USB cable, you'll need to get one.
                </p>
              </div>
            </section>

            {/* Blinking Red Section */}
            <section id="blinking-red" className="mb-10 scroll-mt-20">
              <h2 className="text-2xl font-bold text-gray-900">Blinking Red Power Light</h2>
              <p>
                A blinking red light indicates an error state. Try these fixes:
              </p>

              <div className="space-y-4 my-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h3 className="font-bold text-gray-900">1. Power Cycle the Machine</h3>
                  <p className="text-gray-600 text-sm">
                    Turn off, unplug for 2 minutes, plug back in, turn on. This resets internal systems.
                  </p>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h3 className="font-bold text-gray-900">2. Check for Obstructions</h3>
                  <p className="text-gray-600 text-sm">
                    Open the machine and check for jammed materials, debris, or anything blocking 
                    the carriage from moving.
                  </p>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h3 className="font-bold text-gray-900">3. Try a Firmware Update</h3>
                  <p className="text-gray-600 text-sm">
                    Connect via USB and check if Design Space offers a firmware update.
                  </p>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h3 className="font-bold text-gray-900">4. Factory Reset (Last Resort)</h3>
                  <p className="text-gray-600 text-sm">
                    Some machines have a reset procedure. Check your machine's manual or Cricut's 
                    help center for specific instructions.
                  </p>
                </div>
              </div>

              <div className="bg-red-50 border border-red-200 rounded-lg p-4 my-4">
                <p className="text-red-800">
                  <strong>⚠️ Persistent blinking red:</strong> If the light continues blinking after 
                  trying all fixes, contact Cricut support. This may indicate a hardware failure.
                </p>
              </div>
            </section>

            {/* Machine-Specific Section */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900">Machine-Specific Notes</h2>

              <div className="grid md:grid-cols-2 gap-4 my-6">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h3 className="font-bold text-gray-900">Cricut Joy</h3>
                  <ul className="text-gray-600 text-sm space-y-1 mt-2">
                    <li>• Uses a different power adapter than larger machines</li>
                    <li>• Power port is on the back, easy to not fully insert</li>
                    <li>• The cord is smaller gauge, more prone to damage</li>
                  </ul>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h3 className="font-bold text-gray-900">Cricut Explore Series</h3>
                  <ul className="text-gray-600 text-sm space-y-1 mt-2">
                    <li>• Check that the dial isn't set between positions</li>
                    <li>• Power button should glow white when working</li>
                    <li>• Older models may have different power requirements</li>
                  </ul>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h3 className="font-bold text-gray-900">Cricut Maker Series</h3>
                  <ul className="text-gray-600 text-sm space-y-1 mt-2">
                    <li>• Larger power brick, more sensitive to power quality</li>
                    <li>• May take a moment to "wake up" when powered on</li>
                    <li>• Check the tool clamp isn't causing an error state</li>
                  </ul>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h3 className="font-bold text-gray-900">Cricut Venture</h3>
                  <ul className="text-gray-600 text-sm space-y-1 mt-2">
                    <li>• Requires significant power — avoid sharing circuits</li>
                    <li>• Has internal fans that may spin up on power-on</li>
                    <li>• Allow 30 seconds for full initialization</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* When to Contact Support */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900">When to Contact Cricut Support</h2>
              <p>
                Contact support if:
              </p>
              <ul className="list-disc list-inside space-y-2 my-4">
                <li>You've tried all the fixes above with no success</li>
                <li>The machine is under warranty (1 year standard, 2 years for some models)</li>
                <li>You smell burning or see visible damage</li>
                <li>The red light continues blinking after firmware update</li>
                <li>You've verified the power adapter works with another machine</li>
              </ul>

              <div className="bg-green-50 border border-green-200 rounded-lg p-4 my-4">
                <p className="text-green-800">
                  <strong>📞 Cricut Support:</strong> Visit <a href="https://help.cricut.com" className="underline">help.cricut.com</a> 
                  or call 1-877-727-4288 (US). Have your machine's serial number ready.
                </p>
              </div>
            </section>

            {/* FAQ Section */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900">Frequently Asked Questions</h2>
              
              <div className="space-y-6 mt-4">
                <div>
                  <h3 className="font-bold text-gray-900">Why won't my Cricut turn on at all?</h3>
                  <p className="text-gray-600">
                    Most likely a power connection issue. Check that the cord is fully plugged into 
                    both the wall and the back of the machine. Try a different outlet.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-bold text-gray-900">Can I use a different power cord?</h3>
                  <p className="text-gray-600">
                    No — using a different power adapter with wrong voltage can damage your machine. 
                    Only use the original Cricut adapter or official Cricut replacements.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-bold text-gray-900">What does a red light mean on my Cricut?</h3>
                  <p className="text-gray-600">
                    Solid red usually means firmware update needed. Blinking red indicates an error. 
                    Connect via USB and check Design Space for updates.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-bold text-gray-900">How long is the Cricut warranty?</h3>
                  <p className="text-gray-600">
                    Standard warranty is 1 year. Some machines and purchases may have extended 
                    warranty. Check your original purchase documentation or Cricut account.
                  </p>
                </div>
              </div>
            </section>
          </article>

          {/* Related Guides */}
          <section className="mt-12 pt-8 border-t border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Guides</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Link 
                href="/guides/cricut-bluetooth-not-connecting"
                className="block p-4 bg-white rounded-lg border border-gray-200 hover:border-[#9CAF88] hover:shadow-md transition-all"
              >
                <h3 className="font-bold text-gray-900">Bluetooth Not Connecting</h3>
                <p className="text-gray-600 text-sm mt-1">If your Cricut turns on but won't connect.</p>
              </Link>
              <Link 
                href="/guides/cricut-design-space-not-working"
                className="block p-4 bg-white rounded-lg border border-gray-200 hover:border-[#9CAF88] hover:shadow-md transition-all"
              >
                <h3 className="font-bold text-gray-900">Design Space Not Working</h3>
                <p className="text-gray-600 text-sm mt-1">Software issues that might look like power problems.</p>
              </Link>
              <Link 
                href="/troubleshoot"
                className="block p-4 bg-white rounded-lg border border-gray-200 hover:border-[#9CAF88] hover:shadow-md transition-all"
              >
                <h3 className="font-bold text-gray-900">Troubleshooting Wizard</h3>
                <p className="text-gray-600 text-sm mt-1">Diagnose any Cricut issue step by step.</p>
              </Link>
              <Link 
                href="/error-codes"
                className="block p-4 bg-white rounded-lg border border-gray-200 hover:border-[#9CAF88] hover:shadow-md transition-all"
              >
                <h3 className="font-bold text-gray-900">Error Code Lookup</h3>
                <p className="text-gray-600 text-sm mt-1">Decode error messages and lights.</p>
              </Link>
            </div>
          </section>

          {/* CTA */}
          <section className="mt-12 bg-gradient-to-r from-red-500 to-orange-500 rounded-xl p-8 text-center text-white">
            <h2 className="text-2xl font-bold mb-3">Need More Help?</h2>
            <p className="text-red-100 mb-6">
              Our troubleshooting wizard can help diagnose what's wrong with your Cricut.
            </p>
            <Link
              href="/troubleshoot"
              className="inline-block bg-white text-red-600 font-bold py-3 px-8 rounded-full hover:bg-red-50 transition-colors"
            >
              Start Troubleshooting
            </Link>
          </section>
        </div>
      </div>
    </>
  );
}
