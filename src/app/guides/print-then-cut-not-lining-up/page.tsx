import { Metadata } from 'next';
import Link from 'next/link';
import { FAQSchema, HowToSchema } from '@/components/SchemaMarkup';

export const metadata: Metadata = {
  title: 'Cricut Print Then Cut Not Lining Up? 9 Proven Fixes [2026]',
  description: 'Cricut Print Then Cut cutting off-center or missing the design? Step-by-step troubleshooting guide with the 9 most common causes and exactly how to fix them.',
  keywords: 'cricut print then cut not lining up, print then cut off center, cricut calibration, print then cut problems, cricut sensor marks, print then cut troubleshooting',
  openGraph: {
    title: 'Cricut Print Then Cut Not Lining Up? 9 Proven Fixes',
    description: 'Fix your Print Then Cut alignment issues. Step-by-step guide for all Cricut machines.',
    type: 'article',
  },
};

const faqData = [
  {
    question: "Why is my Cricut Print Then Cut not lining up with my printed design?",
    answer: "The most common causes are incorrect printer scaling (printing at 'Fit to Page' instead of 100%), needing to calibrate your machine, or lighting interference. Start by checking your printer settings—the design must print at exactly 100% scale, not 'Fit to Page' or 'Scale to Fit'."
  },
  {
    question: "How do I calibrate my Cricut for Print Then Cut?",
    answer: "In Design Space, click the menu (three lines), go to Settings, then 'Calibration'. Select 'Print Then Cut' and follow the prompts. You'll print a calibration sheet, then feed it into your Cricut. Select which cut lines are closest to center, and your machine will save the calibration."
  },
  {
    question: "Why can't my Cricut read the sensor marks?",
    answer: "The sensor needs good contrast to read the black marks. Common issues include: glossy or reflective paper (use matte), strong lighting causing glare, dirty sensor lens, or marks that are too faded. Try covering the sensor marks with matte tape if using glossy paper."
  },
  {
    question: "Why is my Print Then Cut cutting too far to the right or left?",
    answer: "This is usually a calibration issue. Run a new calibration in Design Space. If calibration doesn't help, check that your printed sheet isn't skewed on the mat and that you're loading the mat straight into the machine."
  },
  {
    question: "Can lighting affect Print Then Cut?",
    answer: "Yes! Direct sunlight or strong overhead fluorescent lights can create shadows or glare that confuse the sensor. Try moving your Cricut away from windows, dimming overhead lights, or cutting in a different location."
  },
  {
    question: "Why does Print Then Cut work sometimes but not others?",
    answer: "Inconsistent results usually point to printer scaling settings changing between prints, different paper types (matte vs glossy), or lighting conditions. Create a print preset at 100% scale and always use matte paper for best results."
  }
];

const howToSteps = [
  { name: "Check Printer Scale Settings", text: "Print at exactly 100% scale—never 'Fit to Page' or 'Scale to Fit'. This is the #1 cause of misalignment." },
  { name: "Calibrate Your Machine", text: "Go to Design Space menu → Settings → Calibration → Print Then Cut. Complete the full calibration process." },
  { name: "Use Matte Paper", text: "Glossy or reflective paper can confuse the sensor. Use matte sticker paper or apply matte tape over the sensor marks." },
  { name: "Check Your Lighting", text: "Move away from direct sunlight and dim strong overhead lights. Shadows and glare interfere with the sensor." },
  { name: "Clean the Sensor Lens", text: "Use a soft, dry cloth to gently clean the sensor lens inside the machine. Dust can affect readings." },
  { name: "Load Mat Straight", text: "Ensure the mat feeds perfectly straight into the machine and the paper is aligned with the mat grid." },
  { name: "Check for Software Updates", text: "Outdated Design Space can have bugs. Update to the latest version from cricut.com/setup." },
  { name: "Verify Bleed Settings", text: "In Design Space, make sure 'Add Bleed' is enabled for stickers to give the sensor a margin of error." },
  { name: "Test with Plain White Paper", text: "If all else fails, do a test cut on plain white paper to isolate whether it's a paper or machine issue." },
];

export default function PrintThenCutNotLiningUpPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#FAF8F5] to-white">
      <FAQSchema faqs={faqData} />
      <HowToSchema 
        name="How to Fix Cricut Print Then Cut Not Lining Up"
        description="Step-by-step guide to troubleshoot and fix Print Then Cut alignment issues on your Cricut"
        steps={howToSteps}
        totalTime="PT20M"
      />
      
      <article className="max-w-4xl mx-auto px-4 py-12">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:text-[#9CAF88]">Home</Link>
          <span className="mx-2">→</span>
          <Link href="/guides" className="hover:text-[#9CAF88]">Guides</Link>
          <span className="mx-2">→</span>
          <span className="text-gray-700">Print Then Cut Not Lining Up</span>
        </nav>

        {/* Hero */}
        <header className="mb-10">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            Cricut Print Then Cut Not Lining Up? 9 Proven Fixes
          </h1>
          <p className="text-xl text-gray-600 mb-4">
            You printed your beautiful stickers, loaded the mat, and... the Cricut cut completely off-center. 
            Or worse—right through your design. Here's exactly how to fix it.
          </p>
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <span>Updated: February 2026</span>
            <span>•</span>
            <span>12 min read</span>
            <span>•</span>
            <span>Works for: Maker, Explore Air 2, Explore 3</span>
          </div>
        </header>

        {/* Quick Fixes Box */}
        <div className="bg-[#F5E6E6] rounded-2xl p-6 mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-3">⚡ Check These First (60 Second Fixes)</h2>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start gap-2">
              <span className="text-[#9CAF88] font-bold">1.</span>
              <span><strong>Printer scaling at 100%?</strong> — "Fit to Page" is the #1 cause. Must be exactly 100%.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#9CAF88] font-bold">2.</span>
              <span><strong>Using glossy paper?</strong> — The sensor can't read reflective surfaces. Use matte.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#9CAF88] font-bold">3.</span>
              <span><strong>Direct sunlight on machine?</strong> — Move it to a shaded spot and try again.</span>
            </li>
          </ul>
        </div>

        {/* Table of Contents */}
        <div className="bg-white rounded-xl border border-gray-200 p-6 mb-10">
          <h2 className="text-lg font-bold text-gray-900 mb-3">📋 What We'll Cover</h2>
          <ul className="space-y-1 text-gray-600">
            <li><a href="#how-ptc-works" className="hover:text-[#9CAF88]">→ How Print Then Cut Actually Works</a></li>
            <li><a href="#printer-settings" className="hover:text-[#9CAF88]">→ Fix #1: Printer Scale Settings (The #1 Cause)</a></li>
            <li><a href="#calibration" className="hover:text-[#9CAF88]">→ Fix #2: Calibrate Your Machine</a></li>
            <li><a href="#paper-type" className="hover:text-[#9CAF88]">→ Fix #3: Use the Right Paper</a></li>
            <li><a href="#lighting" className="hover:text-[#9CAF88]">→ Fix #4: Fix Your Lighting</a></li>
            <li><a href="#sensor" className="hover:text-[#9CAF88]">→ Fix #5: Clean the Sensor</a></li>
            <li><a href="#mat-loading" className="hover:text-[#9CAF88]">→ Fix #6: Load Your Mat Correctly</a></li>
            <li><a href="#software" className="hover:text-[#9CAF88]">→ Fix #7: Update Design Space</a></li>
            <li><a href="#bleed" className="hover:text-[#9CAF88]">→ Fix #8: Check Bleed Settings</a></li>
            <li><a href="#still-not-working" className="hover:text-[#9CAF88]">→ Still Not Working? Advanced Fixes</a></li>
          </ul>
        </div>

        {/* Main Content */}
        <div className="prose prose-lg max-w-none">
          
          <section id="how-ptc-works" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">How Print Then Cut Actually Works</h2>
            <p className="text-gray-700 mb-4">
              Understanding the process helps you troubleshoot. Here's what happens:
            </p>
            <ol className="list-decimal list-inside space-y-2 text-gray-700 mb-4">
              <li><strong>Design Space adds sensor marks</strong> — those black lines around your design</li>
              <li><strong>You print the sheet</strong> — including the sensor marks</li>
              <li><strong>The Cricut's sensor reads the marks</strong> — it uses these to orient the design</li>
              <li><strong>The machine calculates where to cut</strong> — based on mark positions</li>
              <li><strong>It cuts around your printed design</strong> — hopefully perfectly aligned!</li>
            </ol>
            <p className="text-gray-700">
              When alignment fails, it's usually because something went wrong in steps 2-4: the print scaled wrong, 
              the sensor couldn't read the marks, or the marks were in a different position than expected.
            </p>
          </section>

          <section id="printer-settings" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Fix #1: Printer Scale Settings (The #1 Cause)</h2>
            <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-4">
              <p className="text-red-800 font-semibold">
                🚨 This fixes the problem for about 70% of people. Check this first!
              </p>
            </div>
            <p className="text-gray-700 mb-4">
              When you print, your printer might automatically scale the image to "fit" the page. 
              This shrinks everything by a few percent—including the sensor marks. Now the marks are 
              closer together than Design Space expects, and your cuts land in the wrong spot.
            </p>
            
            <h3 className="text-xl font-semibold text-gray-900 mb-3">How to Fix It:</h3>
            <div className="bg-gray-50 rounded-lg p-4 mb-4">
              <p className="font-semibold mb-2">Windows:</p>
              <ol className="list-decimal list-inside space-y-1 text-gray-700">
                <li>When the print dialog opens, look for "Scale" or "Fit"</li>
                <li>Change it to <strong>"Actual Size"</strong> or <strong>"100%"</strong></li>
                <li>Make sure "Fit to Page" is <strong>unchecked</strong></li>
              </ol>
            </div>
            <div className="bg-gray-50 rounded-lg p-4 mb-4">
              <p className="font-semibold mb-2">Mac:</p>
              <ol className="list-decimal list-inside space-y-1 text-gray-700">
                <li>In the print dialog, look for "Scale"</li>
                <li>Set it to <strong>100%</strong></li>
                <li>Uncheck "Scale to Fit" if present</li>
              </ol>
            </div>
            <div className="bg-gray-50 rounded-lg p-4 mb-4">
              <p className="font-semibold mb-2">From Design Space Mobile:</p>
              <ol className="list-decimal list-inside space-y-1 text-gray-700">
                <li>Make sure "Use System Dialog" is enabled</li>
                <li>In your phone's print options, select "Actual Size"</li>
                <li>Avoid any "Fit" or "Fill" options</li>
              </ol>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <p className="text-yellow-800">
                <strong>💡 Pro Tip:</strong> Create a print preset called "Cricut PTC" with 100% scale saved. 
                Use this preset every time to avoid accidentally scaling.
              </p>
            </div>
          </section>

          <section id="calibration" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Fix #2: Calibrate Your Machine</h2>
            <p className="text-gray-700 mb-4">
              Calibration teaches your Cricut exactly where its sensor is in relation to where its blade cuts. 
              Even small misalignments matter—and they can drift over time.
            </p>
            
            <h3 className="text-xl font-semibold text-gray-900 mb-3">How to Calibrate (Desktop):</h3>
            <ol className="list-decimal list-inside space-y-2 text-gray-700 mb-4">
              <li>Open Design Space on your computer</li>
              <li>Click the <strong>☰ menu</strong> (three lines, top left)</li>
              <li>Select <strong>Settings</strong> → <strong>Calibration</strong></li>
              <li>Choose <strong>Print Then Cut</strong></li>
              <li>Print the calibration sheet at <strong>100% scale</strong> (crucial!)</li>
              <li>Place it on your mat, shiny side up on LightGrip mat</li>
              <li>Load into your Cricut and click Continue</li>
              <li>The machine will make test cuts</li>
              <li>Select which cut is closest to center of each line</li>
              <li>Click Save when done</li>
            </ol>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">How to Calibrate (Mobile):</h3>
            <ol className="list-decimal list-inside space-y-2 text-gray-700 mb-4">
              <li>Open Design Space app</li>
              <li>Tap the <strong>☰ menu</strong></li>
              <li>Go to <strong>Settings</strong> → <strong>Print Then Cut Settings</strong></li>
              <li>Make sure correct machine is selected</li>
              <li>Tap <strong>Calibrate Your Machine</strong></li>
              <li>Follow the same process as desktop</li>
            </ol>

            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <p className="text-green-800">
                <strong>✅ Calibration Checklist:</strong> After calibration, cuts should land on or before line 1 
                AND on or after line 21, plus on or before line A AND on or after line U. If not, recalibrate.
              </p>
            </div>
          </section>

          <section id="paper-type" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Fix #3: Use the Right Paper</h2>
            <p className="text-gray-700 mb-4">
              The sensor uses infrared light to read the black marks. Reflective surfaces bounce that light back 
              unpredictably, confusing the sensor.
            </p>
            
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Paper Types That Work Well:</h3>
            <ul className="list-disc list-inside space-y-1 text-gray-700 mb-4">
              <li>Matte sticker paper ✅</li>
              <li>Matte photo paper ✅</li>
              <li>Regular printer paper (for tests) ✅</li>
              <li>Matte cardstock ✅</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">Paper Types That Cause Problems:</h3>
            <ul className="list-disc list-inside space-y-1 text-gray-700 mb-4">
              <li>Glossy sticker paper ❌</li>
              <li>Glossy photo paper ❌</li>
              <li>Metallic or glitter paper ❌</li>
              <li>Holographic materials ❌</li>
            </ul>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <p className="text-blue-800">
                <strong>🔧 Workaround for Glossy Paper:</strong> Apply a strip of matte transparent tape 
                (like Scotch Magic Tape) over the sensor marks only. This gives the sensor a readable surface 
                while keeping your design shiny.
              </p>
            </div>
          </section>

          <section id="lighting" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Fix #4: Fix Your Lighting</h2>
            <p className="text-gray-700 mb-4">
              This is sneaky because your Cricut might work fine at night but fail during the day—or vice versa.
            </p>
            
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Lighting Problems:</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
              <li><strong>Direct sunlight</strong> — Creates glare on the paper and overwhelms the sensor</li>
              <li><strong>Strong overhead fluorescents</strong> — Can cast shadows into the machine</li>
              <li><strong>Desk lamp pointing at the machine</strong> — Creates uneven lighting</li>
              <li><strong>Complete darkness</strong> — The sensor needs some ambient light</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">How to Fix:</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Move your Cricut away from windows</li>
              <li>Close blinds or curtains if working during the day</li>
              <li>Turn off direct overhead lights and use softer, indirect lighting</li>
              <li>Try cutting in a different room or time of day</li>
              <li>If it's too dark, add soft ambient light (not pointed at the machine)</li>
            </ul>
          </section>

          <section id="sensor" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Fix #5: Clean the Sensor</h2>
            <p className="text-gray-700 mb-4">
              Dust, paper particles, and vinyl bits can build up on the sensor lens over time, 
              making it harder to read the marks accurately.
            </p>
            
            <h3 className="text-xl font-semibold text-gray-900 mb-3">How to Clean:</h3>
            <ol className="list-decimal list-inside space-y-2 text-gray-700 mb-4">
              <li>Turn off and unplug your Cricut</li>
              <li>Open the front—the sensor is the small lens near where the mat loads</li>
              <li>Use a soft, dry microfiber cloth</li>
              <li>Gently wipe the sensor lens</li>
              <li>Use a can of compressed air to blow out dust from the area</li>
              <li>Never use liquid cleaners on the sensor</li>
            </ol>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <p className="text-yellow-800">
                <strong>⚠️ Be Gentle:</strong> The sensor lens can scratch. Only use soft, dry materials—no 
                paper towels, no cleaning solutions.
              </p>
            </div>
          </section>

          <section id="mat-loading" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Fix #6: Load Your Mat Correctly</h2>
            <p className="text-gray-700 mb-4">
              If the mat goes in at an angle, or the paper is crooked on the mat, the sensor marks won't 
              be where the machine expects them.
            </p>
            
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Proper Loading Steps:</h3>
            <ol className="list-decimal list-inside space-y-2 text-gray-700 mb-4">
              <li>Align your printed sheet with the mat grid lines</li>
              <li>The sensor marks should be parallel to the mat edges</li>
              <li>Use a brayer to firmly press the paper down</li>
              <li>Check that no corners are lifting</li>
              <li>Align the mat with the guides on the machine</li>
              <li>Push the mat in until the rollers grab it evenly</li>
              <li>Press the load button—watch that it feeds straight</li>
            </ol>

            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <p className="text-green-800">
                <strong>✅ Test Tip:</strong> After loading, watch from the side as it feeds in. 
                If the mat goes in crooked, eject and reload.
              </p>
            </div>
          </section>

          <section id="software" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Fix #7: Update Design Space</h2>
            <p className="text-gray-700 mb-4">
              Cricut occasionally releases updates that fix Print Then Cut bugs. Running an old version 
              could mean you're dealing with a problem they've already solved.
            </p>
            
            <h3 className="text-xl font-semibold text-gray-900 mb-3">How to Update:</h3>
            <ol className="list-decimal list-inside space-y-2 text-gray-700 mb-4">
              <li>Go to <a href="https://cricut.com/setup" className="text-[#9CAF88] hover:underline">cricut.com/setup</a></li>
              <li>Download the latest version</li>
              <li>Install it (it will replace your current version)</li>
              <li>Sign back in and try Print Then Cut again</li>
            </ol>

            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <p className="text-red-800">
                <strong>🐛 Known Issue:</strong> Some Design Space updates have temporarily broken Print Then Cut. 
                If it was working before an update and now isn't, check Cricut's social media or forums—they 
                usually acknowledge and fix these quickly.
              </p>
            </div>
          </section>

          <section id="bleed" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Fix #8: Check Bleed Settings</h2>
            <p className="text-gray-700 mb-4">
              "Bleed" extends your design's colors slightly beyond the cut line. This gives the sensor 
              a little margin of error—if the cut is slightly off, you won't see white edges.
            </p>
            
            <h3 className="text-xl font-semibold text-gray-900 mb-3">How to Enable Bleed:</h3>
            <ol className="list-decimal list-inside space-y-2 text-gray-700 mb-4">
              <li>Select your image in Design Space</li>
              <li>In the operation dropdown, ensure it's set to "Print Then Cut"</li>
              <li>Look for the "Bleed" toggle—turn it ON</li>
              <li>You'll see colors extend slightly beyond your cut lines</li>
            </ol>

            <p className="text-gray-700">
              <strong>Note:</strong> Bleed only helps with small misalignments. If your cuts are way off, 
              bleed won't fix it—you need to address the root cause with the fixes above.
            </p>
          </section>

          <section id="still-not-working" className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Still Not Working? Advanced Fixes</h2>
            
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Try These:</h3>
            <div className="space-y-4">
              <div className="bg-gray-50 rounded-lg p-4">
                <p className="font-semibold mb-2">1. Reset Calibration Completely</p>
                <p className="text-gray-700">
                  Delete the Design Space app, reinstall fresh, and run calibration from scratch. 
                  Sometimes old calibration data gets corrupted.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-4">
                <p className="font-semibold mb-2">2. Check for Firmware Updates</p>
                <p className="text-gray-700">
                  When you connect your Cricut, Design Space should prompt you if a firmware update 
                  is available. Always keep firmware current.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-4">
                <p className="font-semibold mb-2">3. Try a Different Computer/Device</p>
                <p className="text-gray-700">
                  If you normally use a laptop, try the mobile app (or vice versa). This helps 
                  isolate whether it's a device-specific issue.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-4">
                <p className="font-semibold mb-2">4. Contact Cricut Support</p>
                <p className="text-gray-700">
                  If you've tried everything and it's still off, there may be a hardware issue 
                  with the sensor. Cricut support can run diagnostics: 
                  <a href="https://help.cricut.com" className="text-[#9CAF88] hover:underline ml-1">help.cricut.com</a>
                </p>
              </div>
            </div>
          </section>

          {/* Summary */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Quick Summary</h2>
            <div className="bg-[#F5FAF3] rounded-xl p-6">
              <ol className="list-decimal list-inside space-y-2 text-gray-700">
                <li><strong>Print at 100%</strong> — Never use "Fit to Page" (fixes 70% of issues)</li>
                <li><strong>Calibrate your machine</strong> — Do this after any major alignment problems</li>
                <li><strong>Use matte paper</strong> — Glossy confuses the sensor</li>
                <li><strong>Check your lighting</strong> — No direct sunlight or harsh overhead lights</li>
                <li><strong>Clean the sensor</strong> — Dust builds up over time</li>
                <li><strong>Load mat straight</strong> — Paper aligned to grid, mat feeds evenly</li>
                <li><strong>Update Design Space</strong> — Bugs get fixed in updates</li>
                <li><strong>Enable bleed</strong> — Gives margin for small misalignments</li>
                <li><strong>Test on plain paper</strong> — Isolate paper vs machine issues</li>
              </ol>
            </div>
          </section>

        </div>

        {/* Related Guides */}
        <section className="mt-12 pt-8 border-t border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Guides</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/guides/cricut-not-cutting-vinyl" className="block p-4 bg-white rounded-xl border border-gray-200 hover:border-[#9CAF88] hover:shadow-md transition-all">
              <h3 className="font-semibold text-gray-900 mb-1">Cricut Not Cutting Through Vinyl?</h3>
              <p className="text-sm text-gray-600">7 fixes when your blade isn't cutting deep enough</p>
            </Link>
            <Link href="/guides/cricut-bluetooth-not-connecting" className="block p-4 bg-white rounded-xl border border-gray-200 hover:border-[#9CAF88] hover:shadow-md transition-all">
              <h3 className="font-semibold text-gray-900 mb-1">Bluetooth Not Connecting?</h3>
              <p className="text-sm text-gray-600">Get your Cricut connected wirelessly</p>
            </Link>
          </div>
        </section>

        {/* CTA */}
        <section className="mt-12 bg-gradient-to-r from-[#9CAF88] to-purple-500 rounded-2xl p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-3">Still Stuck?</h2>
          <p className="mb-4 opacity-90">
            Our troubleshooting wizard can help diagnose your specific issue in under 2 minutes.
          </p>
          <Link 
            href="/troubleshoot" 
            className="inline-block bg-white text-[#9CAF88] font-semibold px-6 py-3 rounded-full hover:bg-gray-100 transition-colors"
          >
            Start Troubleshooting →
          </Link>
        </section>
      </article>
    </main>
  );
}
