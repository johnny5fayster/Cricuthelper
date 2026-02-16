import { Metadata } from 'next';
import Link from 'next/link';
import { FAQSchema, HowToSchema } from '@/components/SchemaMarkup';

export const metadata: Metadata = {
  title: 'Cricut Maker 4 Problems & Fixes: Complete Troubleshooting Guide [2026]',
  description: 'Having issues with your Cricut Maker 4? Fix scoring wheel tearing cardstock, Bluetooth connection problems, firmware bugs, calibration issues, and more. Step-by-step solutions.',
  keywords: 'cricut maker 4 problems, maker 4 troubleshooting, cricut maker 4 not cutting, maker 4 bluetooth not connecting, cricut maker 4 scoring wheel issues, maker 4 firmware update, cricut maker 4 calibration, design space maker 4 problems',
  openGraph: {
    title: 'Cricut Maker 4 Problems & Fixes: Complete Troubleshooting Guide',
    description: 'Step-by-step fixes for all common Cricut Maker 4 issues: scoring problems, Bluetooth, firmware, calibration, and more.',
    type: 'article',
  },
};

const faqData = [
  {
    question: "Why does my Cricut Maker 4 scoring wheel tear the cardstock?",
    answer: "The Maker 4's increased speed can cause scoring issues with heavier cardstock. Reduce the pressure setting by 2-4 points in Design Space, and consider using the scoring stylus instead of the wheel for cardstock under 80lb. For thicker cardstock, use the single scoring wheel at reduced pressure rather than the double scoring wheel."
  },
  {
    question: "Is the Cricut Maker 4 faster than Maker 3?",
    answer: "Yes, the Maker 4 cuts up to 2x faster than Maker 3, reaching speeds of 14.1 inches per second with Smart Materials. However, this speed can sometimes affect precision on intricate designs. You can slow it down in Design Space settings if you're getting inconsistent cuts."
  },
  {
    question: "Why won't my Cricut Maker 4 connect to Bluetooth?",
    answer: "Maker 4 Bluetooth issues are often caused by: not pairing at the system level first, another device already connected (only one at a time), interference from other devices, or outdated firmware. Try forgetting the device and re-pairing, or use USB for more reliable connection."
  },
  {
    question: "How do I update the firmware on Cricut Maker 4?",
    answer: "Connect via USB (more reliable than Bluetooth for updates), open Design Space, go to Menu → Settings → Machine → Update Firmware. Keep the machine powered and don't disconnect during the update. If it fails, restart both the machine and Design Space and try again."
  },
  {
    question: "Why does my Maker 4 stop mid-cut with an error?",
    answer: "This is often a firmware bug, especially common with multi-pass materials like wood and thick leather. Cricut has released firmware updates to address this. Make sure your firmware is current, and try reducing the complexity of your design or breaking it into smaller sections."
  },
  {
    question: "My Maker 4 mat isn't gripping materials properly. What should I do?",
    answer: "New Maker 4 machines sometimes have mats that are too sticky or not sticky enough out of the box. For too-sticky mats, lightly dab with a clean cotton shirt to reduce adhesion. For weak grip, clean the mat with baby wipes (no alcohol) or apply mat adhesive spray. Make sure you're using the right mat type for your material."
  },
  {
    question: "Why is Design Space not detecting my Cricut Maker 4?",
    answer: "Design Space detection issues are common with Maker 4. Try: updating Design Space to the latest version, restarting the app, power cycling the machine, checking Bluetooth/USB connection, clearing Design Space cache, or reinstalling the software. The web version at design.cricut.com can be a helpful backup."
  },
  {
    question: "How do I calibrate my Cricut Maker 4?",
    answer: "Go to Design Space Menu → Settings → Calibration. For Print Then Cut issues, run the PTC calibration with a printed test sheet on white paper. For knife blade calibration (multi-pass cuts not aligning), use the knife calibration option. Good lighting and printing at 100% scale are essential."
  }
];

const howToSteps = [
  { name: "Identify the Problem", text: "Determine which category your issue falls into: cutting/scoring, connectivity, firmware, calibration, or software." },
  { name: "Check Basics First", text: "Power cycle the machine, restart Design Space, and ensure firmware is updated before advanced troubleshooting." },
  { name: "Adjust Settings", text: "For cutting/scoring issues, adjust pressure, speed, or blade settings in Design Space's material settings." },
  { name: "Clean and Maintain", text: "Clean the blade housing, rollers, sensor lens, and mat. Replace dull blades." },
  { name: "Test with Known-Good Materials", text: "Try Cricut-brand materials to rule out third-party material issues." },
  { name: "Reset if Needed", text: "As a last resort, perform a factory reset: hold the power button for 10 seconds until lights flash." },
];

export default function Maker4ProblemsFixes() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#FAF8F5] to-white">
      <FAQSchema faqs={faqData} />
      <HowToSchema 
        name="How to Fix Cricut Maker 4 Common Problems"
        description="Step-by-step troubleshooting guide for Cricut Maker 4 issues including scoring, Bluetooth, firmware, and calibration problems"
        steps={howToSteps}
        totalTime="PT30M"
      />
      
      <article className="max-w-4xl mx-auto px-4 py-12">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:text-[#9CAF88]">Home</Link>
          <span className="mx-2">→</span>
          <Link href="/guides" className="hover:text-[#9CAF88]">Guides</Link>
          <span className="mx-2">→</span>
          <span className="text-gray-700">Maker 4 Problems & Fixes</span>
        </nav>

        {/* Hero */}
        <header className="mb-10">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            Cricut Maker 4 Problems & Fixes: Complete Troubleshooting Guide
          </h1>
          <p className="text-xl text-gray-600 mb-4">
            Just got your shiny new Maker 4 but running into issues? You're not alone. From scoring wheel tearing cardstock 
            to Bluetooth dropouts and firmware bugs, here's how to fix the most common Maker 4 problems.
          </p>
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
            <span>Updated: February 2026</span>
            <span>•</span>
            <span>20 min read</span>
            <span>•</span>
            <span>Cricut Maker 4 Specific</span>
          </div>
        </header>

        {/* Quick Jump Box */}
        <div className="bg-[#F5E6E6] rounded-2xl p-6 mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-3">🔧 Jump to Your Issue</h2>
          <div className="grid md:grid-cols-2 gap-2 text-gray-700">
            <a href="#scoring-wheel" className="flex items-center gap-2 hover:text-[#9CAF88]">
              <span>→</span> Scoring Wheel Tearing Cardstock
            </a>
            <a href="#speed-accuracy" className="flex items-center gap-2 hover:text-[#9CAF88]">
              <span>→</span> Speed vs Accuracy Issues
            </a>
            <a href="#firmware" className="flex items-center gap-2 hover:text-[#9CAF88]">
              <span>→</span> Firmware Bugs & Updates
            </a>
            <a href="#calibration" className="flex items-center gap-2 hover:text-[#9CAF88]">
              <span>→</span> Calibration Problems
            </a>
            <a href="#bluetooth" className="flex items-center gap-2 hover:text-[#9CAF88]">
              <span>→</span> Bluetooth Connection Issues
            </a>
            <a href="#mat-adhesion" className="flex items-center gap-2 hover:text-[#9CAF88]">
              <span>→</span> Mat Adhesion Problems
            </a>
            <a href="#design-space" className="flex items-center gap-2 hover:text-[#9CAF88]">
              <span>→</span> Design Space Compatibility
            </a>
            <a href="#cutting" className="flex items-center gap-2 hover:text-[#9CAF88]">
              <span>→</span> Cutting Issues & Errors
            </a>
          </div>
        </div>

        {/* What's Different About Maker 4 */}
        <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-10 rounded-r-lg">
          <h2 className="text-lg font-bold text-blue-800 mb-2">🆕 What's Different About Maker 4?</h2>
          <p className="text-blue-700 mb-3">
            The Maker 4 brings significant upgrades—but also new quirks. Understanding these differences helps with troubleshooting:
          </p>
          <ul className="text-blue-700 space-y-1">
            <li>• <strong>2x faster cutting</strong> — up to 14.1" per second (can cause issues with delicate materials)</li>
            <li>• <strong>Smart Materials matless cutting</strong> — up to 12 feet long without a mat</li>
            <li>• <strong>New firmware</strong> — still being refined with ongoing updates</li>
            <li>• <strong>Same accessories</strong> — compatible with all Maker 3 tools and blades</li>
          </ul>
        </div>

        {/* Main Content */}
        <div className="prose prose-lg prose-slate max-w-none">
          
          {/* Problem 1: Scoring Wheel */}
          <section id="scoring-wheel" className="scroll-mt-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <span className="bg-[#9CAF88] text-white w-10 h-10 rounded-full flex items-center justify-center text-lg">1</span>
              Scoring Wheel Tearing Cardstock
            </h2>
            
            <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-6 rounded-r-lg">
              <p className="font-semibold text-red-800">Common Complaint</p>
              <p className="text-red-700">
                "My Maker 4 scoring wheel is ripping through my cardstock instead of just scoring it!"
              </p>
            </div>

            <p>
              This is one of the most reported issues with the Maker 4. The machine's increased speed and power, combined with 
              default pressure settings, can be too aggressive for cardstock—especially heavier weights (65lb+) and textured varieties.
            </p>

            <h3>Why It Happens</h3>
            <ul>
              <li><strong>Higher default pressure:</strong> Maker 4 uses more force than previous models</li>
              <li><strong>Speed + pressure combo:</strong> Fast movement with high pressure tears paper fibers</li>
              <li><strong>Cardstock quality:</strong> Some cardstock has weaker fibers that can't handle the wheel</li>
              <li><strong>Double scoring wheel:</strong> Too aggressive for standard cardstock</li>
            </ul>

            <h3>How to Fix It</h3>
            <ol>
              <li>
                <strong>Reduce pressure by 2-4 points</strong>
                <p className="text-gray-600">In Design Space, select your material, then click "Edit" or use custom settings. Lower the pressure from the default. Start with 2 points less and test.</p>
              </li>
              <li>
                <strong>Use the scoring stylus instead of the wheel</strong>
                <p className="text-gray-600">For cardstock under 80lb, the scoring stylus (goes in Clamp A) is gentler than the scoring wheel. It won't create as deep a score line but won't tear either.</p>
              </li>
              <li>
                <strong>Switch to the single scoring wheel</strong>
                <p className="text-gray-600">If you're using the double scoring wheel, switch to the single. The double wheel is designed for very thick materials like chipboard, not regular cardstock.</p>
              </li>
              <li>
                <strong>Slow down the cut</strong>
                <p className="text-gray-600">In custom material settings, you can reduce speed. A slower pass with less pressure prevents tearing.</p>
              </li>
              <li>
                <strong>Test with Cricut cardstock first</strong>
                <p className="text-gray-600">Some third-party cardstock has inconsistent fiber strength. Test with Cricut-brand cardstock to establish a baseline.</p>
              </li>
            </ol>

            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-6 rounded-r-lg">
              <p className="font-semibold text-yellow-800">💡 Pro Tip: Scoring Wheel Settings by Cardstock Weight</p>
              <ul className="text-yellow-700 mt-2">
                <li><strong>65lb cardstock:</strong> Pressure 280-300, use scoring stylus or single wheel</li>
                <li><strong>80lb cardstock:</strong> Pressure 300-320, single scoring wheel works well</li>
                <li><strong>100lb+ cardstock:</strong> Pressure 340-360, single scoring wheel, slow speed</li>
                <li><strong>Chipboard:</strong> Double scoring wheel, default pressure, multiple passes if needed</li>
              </ul>
            </div>
          </section>

          <hr className="my-10" />

          {/* Problem 2: Speed vs Accuracy */}
          <section id="speed-accuracy" className="scroll-mt-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <span className="bg-[#9CAF88] text-white w-10 h-10 rounded-full flex items-center justify-center text-lg">2</span>
              Speed vs Accuracy Tradeoffs
            </h2>

            <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-6 rounded-r-lg">
              <p className="font-semibold text-red-800">Common Complaint</p>
              <p className="text-red-700">
                "My intricate designs come out jagged or misaligned. The Maker 4 is cutting too fast!"
              </p>
            </div>

            <p>
              The Maker 4's headline feature—2x faster cutting—can actually work against you on detailed work. 
              At high speeds, the blade can skip over fine details or create rough edges on curves.
            </p>

            <h3>Signs of Speed-Related Problems</h3>
            <ul>
              <li>Jagged edges on curves and circles</li>
              <li>Small details not cutting cleanly</li>
              <li>Letters and fine text looking rough</li>
              <li>Mat shifting slightly during fast cuts</li>
              <li>Material lifting or bunching at high speeds</li>
            </ul>

            <h3>How to Fix It</h3>
            <ol>
              <li>
                <strong>Create a custom material setting with slower speed</strong>
                <p className="text-gray-600">
                  Go to Custom Materials in Design Space. Duplicate your material's default settings, then 
                  reduce the speed slider. Name it something like "Vinyl - Detailed" for easy access.
                </p>
              </li>
              <li>
                <strong>Use "Intricate Cuts" if available</strong>
                <p className="text-gray-600">
                  Some material presets have an "Intricate Cuts" toggle that automatically slows the machine for detailed work.
                </p>
              </li>
              <li>
                <strong>Simplify complex designs</strong>
                <p className="text-gray-600">
                  If your design has extremely fine details, consider simplifying slightly or using the "Contour" feature 
                  to remove problematic small elements.
                </p>
              </li>
              <li>
                <strong>Ensure proper mat grip</strong>
                <p className="text-gray-600">
                  At high speeds, weak mat adhesion causes material shift. Use a fresh mat or apply mat adhesive spray 
                  to maintain grip during fast cuts.
                </p>
              </li>
            </ol>

            <div className="bg-green-50 border-l-4 border-green-400 p-4 my-6 rounded-r-lg">
              <p className="font-semibold text-green-800">✅ When Speed is Your Friend</p>
              <ul className="text-green-700 mt-2">
                <li>• Large, simple shapes with straight lines</li>
                <li>• Smart Materials without a mat (stable feed)</li>
                <li>• Production batches of the same design</li>
                <li>• Vinyl and iron-on with clean, bold designs</li>
              </ul>
            </div>
          </section>

          <hr className="my-10" />

          {/* Problem 3: Firmware Bugs */}
          <section id="firmware" className="scroll-mt-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <span className="bg-[#9CAF88] text-white w-10 h-10 rounded-full flex items-center justify-center text-lg">3</span>
              Firmware Bugs & Update Process
            </h2>

            <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-6 rounded-r-lg">
              <p className="font-semibold text-red-800">Common Complaint</p>
              <p className="text-red-700">
                "My Maker 4 stops mid-cut with an error!" or "Firmware update failed and now my machine won't work!"
              </p>
            </div>

            <p>
              As a new machine, the Maker 4's firmware is still being refined. Early adopters have reported issues 
              including mid-cut errors (especially with multi-pass materials like wood), failed updates, and inconsistent behavior.
            </p>

            <h3>Known Firmware Issues (as of early 2026)</h3>
            <ul>
              <li><strong>Multi-pass material failures:</strong> Machine stops during knife blade or deep-cut operations on wood, leather, chipboard</li>
              <li><strong>Random errors:</strong> Error codes appearing without clear cause</li>
              <li><strong>Update failures:</strong> Firmware update process freezing or failing</li>
              <li><strong>Bluetooth instability:</strong> Connection drops after firmware updates</li>
            </ul>

            <h3>How to Update Firmware Safely</h3>
            <div className="bg-white rounded-xl shadow-lg p-6 my-6">
              <ol className="space-y-4 text-gray-700">
                <li>
                  <strong>1. Connect via USB (not Bluetooth)</strong>
                  <p className="text-gray-600 text-sm">USB is more reliable for firmware updates. Use a data-capable cable directly to your computer.</p>
                </li>
                <li>
                  <strong>2. Close all other applications</strong>
                  <p className="text-gray-600 text-sm">Ensure Design Space has maximum system resources.</p>
                </li>
                <li>
                  <strong>3. Go to Menu → Settings → Machine → Update Firmware</strong>
                  <p className="text-gray-600 text-sm">If no update is available, you're already on the latest version.</p>
                </li>
                <li>
                  <strong>4. Don't interrupt the update</strong>
                  <p className="text-gray-600 text-sm">This is critical. Don't close Design Space, unplug the machine, or turn it off until complete. Updates can take 10-15 minutes.</p>
                </li>
                <li>
                  <strong>5. Restart everything after the update</strong>
                  <p className="text-gray-600 text-sm">Power cycle the Maker 4, restart Design Space, and re-establish your Bluetooth pairing.</p>
                </li>
              </ol>
            </div>

            <h3>If Firmware Update Fails</h3>
            <ol>
              <li>Unplug the machine from USB and power</li>
              <li>Wait 30 seconds</li>
              <li>Reconnect power only, turn on the machine</li>
              <li>Wait for solid light (not blinking)</li>
              <li>Connect USB again</li>
              <li>Open Design Space and retry the update</li>
              <li>If it fails repeatedly, try a different USB port or computer</li>
              <li>Contact Cricut support if issues persist—they can force-push firmware</li>
            </ol>

            <h3>Forced Firmware Reset (Last Resort)</h3>
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-6 rounded-r-lg">
              <p className="font-semibold text-yellow-800">⚠️ Factory Reset</p>
              <p className="text-yellow-700">
                If your Maker 4 is completely unresponsive after a failed update, try a factory reset: 
                With the machine off, hold the power button for 10+ seconds until all lights flash rapidly. 
                This resets the machine to factory state. You'll need to re-pair Bluetooth and may need to 
                update firmware again.
              </p>
            </div>
          </section>

          <hr className="my-10" />

          {/* Problem 4: Calibration */}
          <section id="calibration" className="scroll-mt-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <span className="bg-[#9CAF88] text-white w-10 h-10 rounded-full flex items-center justify-center text-lg">4</span>
              Calibration Issues
            </h2>

            <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-6 rounded-r-lg">
              <p className="font-semibold text-red-800">Common Complaint</p>
              <p className="text-red-700">
                "My Print Then Cut is way off!" or "Multi-pass cuts aren't lining up!"
              </p>
            </div>

            <p>
              The Maker 4's sensors and mechanics may need calibration out of the box, and definitely after 
              firmware updates or if the machine was jostled during shipping.
            </p>

            <h3>Types of Calibration</h3>
            <div className="grid md:grid-cols-2 gap-4 my-6">
              <div className="bg-white rounded-xl shadow-lg p-4">
                <h4 className="font-bold text-gray-900 mb-2">Print Then Cut Calibration</h4>
                <p className="text-gray-600 text-sm">Aligns the blade with printed images. Essential if your PTC cuts are offset from the printed design.</p>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-4">
                <h4 className="font-bold text-gray-900 mb-2">Knife Blade Calibration</h4>
                <p className="text-gray-600 text-sm">Ensures multi-pass cuts align perfectly. Run this if knife/deep-cut passes look like "double cuts."</p>
              </div>
            </div>

            <h3>How to Calibrate Print Then Cut</h3>
            <ol>
              <li>Go to <strong>Menu → Settings → Calibration → Print Then Cut</strong></li>
              <li>Print the calibration sheet at <strong>100% scale</strong> (never "Fit to Page")</li>
              <li>Use <strong>plain white paper</strong>—not glossy, not colored, not sticker paper</li>
              <li>Place on LightGrip mat, align <strong>top-left corner exactly</strong> with the mat grid</li>
              <li>Ensure <strong>bright, even lighting</strong>—no glare, no shadows on the sheet</li>
              <li>Load mat and let the machine scan the printed marks</li>
              <li>It will cut a test line—check if it aligns with the printed line</li>
              <li>If off, select the square that shows where the cut actually landed</li>
              <li>Repeat until the cut is precisely on the printed line</li>
            </ol>

            <h3>Calibration Tips for Maker 4</h3>
            <ul>
              <li><strong>Clean the sensor lens</strong> — Use a soft, dry microfiber cloth on the sensor window under the carriage</li>
              <li><strong>Check lighting</strong> — LED or fluorescent overhead lights work best. Avoid colored lighting or direct sunlight</li>
              <li><strong>Use fresh ink</strong> — If your printer is low on ink, the registration marks won't be dark enough</li>
              <li><strong>Recalibrate after firmware updates</strong> — Updates can reset calibration data</li>
              <li><strong>Run calibration twice</strong> — The first calibration gets it close, the second perfects it</li>
            </ul>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-6 rounded-r-lg">
              <p className="font-semibold text-blue-800">📍 Maker 4 Calibration Quirk</p>
              <p className="text-blue-700">
                Some Maker 4 users report that calibration "drifts" over time. If your PTC was working perfectly 
                and gradually becomes misaligned, don't assume something is broken—just recalibrate. Consider 
                recalibrating once a month as routine maintenance.
              </p>
            </div>
          </section>

          <hr className="my-10" />

          {/* Problem 5: Bluetooth */}
          <section id="bluetooth" className="scroll-mt-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <span className="bg-[#9CAF88] text-white w-10 h-10 rounded-full flex items-center justify-center text-lg">5</span>
              Bluetooth Connectivity Problems
            </h2>

            <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-6 rounded-r-lg">
              <p className="font-semibold text-red-800">Common Complaint</p>
              <p className="text-red-700">
                "Design Space can't find my Maker 4!" or "Bluetooth connects then immediately drops!"
              </p>
            </div>

            <p>
              Bluetooth issues are common across all Cricut machines, and the Maker 4 is no exception. 
              The good news: most Bluetooth problems have straightforward fixes.
            </p>

            <h3>Quick Fixes (Try These First)</h3>
            <ol>
              <li><strong>Power cycle everything</strong> — Turn off Maker 4, close Design Space, restart your device, then power everything back on</li>
              <li><strong>Check the light</strong> — Maker 4's light should be SOLID, not blinking. Blinking = still starting up</li>
              <li><strong>Move closer</strong> — Keep within 10-15 feet, minimize walls/obstacles between machine and device</li>
            </ol>

            <h3>Full Bluetooth Troubleshooting</h3>
            
            <h4>Step 1: Pair at the System Level First</h4>
            <p>
              This is the #1 mistake. You must pair the Maker 4 in your device's Bluetooth settings 
              BEFORE trying to connect in Design Space.
            </p>
            <ul>
              <li><strong>Windows:</strong> Settings → Devices → Bluetooth → Add device → Look for "Cricut Maker 4"</li>
              <li><strong>Mac:</strong> System Settings → Bluetooth → Connect to "Cricut Maker 4"</li>
              <li><strong>iOS/Android:</strong> Bluetooth Settings → Pair with Cricut Maker 4</li>
            </ul>

            <h4>Step 2: Forget and Re-Pair</h4>
            <p>If previously paired but not connecting:</p>
            <ol>
              <li>Go to Bluetooth settings on your device</li>
              <li>Find Cricut Maker 4 and select "Forget" or "Remove"</li>
              <li>Turn off the Maker 4, wait 10 seconds</li>
              <li>Turn it back on, wait for solid light</li>
              <li>Search for Bluetooth devices and re-pair</li>
            </ol>

            <h4>Step 3: Check for Conflicting Connections</h4>
            <p>
              <strong>The Maker 4 can only connect to ONE device at a time.</strong> If someone's phone is connected, 
              your computer can't connect. Check all family devices to see if one is hogging the connection.
            </p>

            <h4>Step 4: Android Users — Enable Location Permission</h4>
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-4 rounded-r-lg">
              <p className="font-semibold text-yellow-800">📱 Android Requirement</p>
              <p className="text-yellow-700">
                Android requires Location permission for Bluetooth to work. Go to Settings → Apps → 
                Design Space → Permissions → Enable Location. Without this, Bluetooth literally won't function.
              </p>
            </div>

            <h4>When to Use USB Instead</h4>
            <p>Consider USB for:</p>
            <ul>
              <li>Firmware updates (much more reliable)</li>
              <li>Long, complex cuts</li>
              <li>When Bluetooth keeps dropping</li>
              <li>Production/business use</li>
            </ul>
            <p>
              Use a <strong>data-capable USB cable</strong> (not charge-only) with a USB-A to USB-B connection. 
              Connect directly to your computer, avoiding USB hubs.
            </p>

            <p className="mt-4">
              <Link href="/guides/cricut-bluetooth-not-connecting" className="text-[#9CAF88] hover:text-[#6B7F5E] font-semibold">
                → Full Bluetooth troubleshooting guide →
              </Link>
            </p>
          </section>

          <hr className="my-10" />

          {/* Problem 6: Mat Adhesion */}
          <section id="mat-adhesion" className="scroll-mt-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <span className="bg-[#9CAF88] text-white w-10 h-10 rounded-full flex items-center justify-center text-lg">6</span>
              Mat Adhesion Problems
            </h2>

            <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-6 rounded-r-lg">
              <p className="font-semibold text-red-800">Common Complaint</p>
              <p className="text-red-700">
                "The mat that came with my Maker 4 is way too sticky!" or "Material keeps lifting during cuts!"
              </p>
            </div>

            <p>
              Mat issues are frustrating but common with new machines. The included mat might be too aggressive 
              (ripping delicate materials) or not sticky enough (materials shifting during cuts).
            </p>

            <h3>Mat Too Sticky (New Mat Problems)</h3>
            <p>Brand new mats, especially the LightGrip mat included with Maker 4, can be excessively sticky:</p>
            <ol>
              <li><strong>Press a clean cotton t-shirt on the mat</strong> — Press and peel several times to reduce adhesion</li>
              <li><strong>Never use paper towels</strong> — They leave fibers that reduce stickiness unevenly</li>
              <li><strong>Let it "break in"</strong> — After 5-10 uses, new mats settle to optimal stickiness</li>
              <li><strong>Use a brayer</strong> — Roll materials flat instead of pressing with hands to reduce air bubbles</li>
            </ol>

            <h3>Mat Not Sticky Enough</h3>
            <p>If materials lift, shift, or bunch during cutting:</p>
            <ol>
              <li><strong>Clean the mat</strong> — Use baby wipes (alcohol-free) or a lint roller to remove debris</li>
              <li><strong>Apply mat adhesive spray</strong> — Krylon Easy-Tack or Zig 2-Way Glue works well. Apply lightly, let dry until tacky</li>
              <li><strong>Replace worn mats</strong> — Mats have a limited lifespan. If cleaning doesn't help, it's time for a new one</li>
              <li><strong>Use the right mat</strong> — LightGrip for paper/vinyl, StandardGrip for most materials, StrongGrip for thick materials</li>
            </ol>

            <h3>Maker 4 Mat Compatibility</h3>
            <div className="overflow-x-auto">
              <table className="w-full my-6 text-sm">
                <thead>
                  <tr className="bg-[#F5E6E6]">
                    <th className="text-left p-3 border-b">Mat Type</th>
                    <th className="text-left p-3 border-b">Color</th>
                    <th className="text-left p-3 border-b">Best For</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-3 border-b">LightGrip</td>
                    <td className="p-3 border-b">Blue</td>
                    <td className="p-3 border-b">Paper, light cardstock, vinyl, vellum</td>
                  </tr>
                  <tr>
                    <td className="p-3 border-b">StandardGrip</td>
                    <td className="p-3 border-b">Green</td>
                    <td className="p-3 border-b">Cardstock, iron-on, patterned paper</td>
                  </tr>
                  <tr>
                    <td className="p-3 border-b">StrongGrip</td>
                    <td className="p-3 border-b">Purple</td>
                    <td className="p-3 border-b">Leather, chipboard, thick materials, wood</td>
                  </tr>
                  <tr>
                    <td className="p-3 border-b">FabricGrip</td>
                    <td className="p-3 border-b">Pink</td>
                    <td className="p-3 border-b">Fabric (with rotary blade)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="mt-4">
              <Link href="/guides/cricut-mat-not-sticky" className="text-[#9CAF88] hover:text-[#6B7F5E] font-semibold">
                → Complete mat care guide →
              </Link>
            </p>
          </section>

          <hr className="my-10" />

          {/* Problem 7: Design Space */}
          <section id="design-space" className="scroll-mt-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <span className="bg-[#9CAF88] text-white w-10 h-10 rounded-full flex items-center justify-center text-lg">7</span>
              Design Space Compatibility Issues
            </h2>

            <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-6 rounded-r-lg">
              <p className="font-semibold text-red-800">Common Complaint</p>
              <p className="text-red-700">
                "Design Space is laggy!" or "The app keeps crashing!" or "Maker 4 not appearing in machine list!"
              </p>
            </div>

            <p>
              Design Space has a... reputation. Even Cricut acknowledges it's not the smoothest software. 
              Here's how to minimize frustration.
            </p>

            <h3>Design Space Problems & Fixes</h3>

            <div className="space-y-4 my-6">
              <div className="bg-white rounded-xl shadow-lg p-4">
                <h4 className="font-bold text-gray-900">Maker 4 Not Showing in Machine List</h4>
                <ul className="text-gray-700 text-sm mt-2 space-y-1">
                  <li>• Ensure Bluetooth/USB is connected at system level first</li>
                  <li>• Click the machine dropdown and select "Add Machine"</li>
                  <li>• Power cycle the Maker 4 and restart Design Space</li>
                  <li>• Check that Design Space is updated to latest version</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-4">
                <h4 className="font-bold text-gray-900">App Running Slowly / Lagging</h4>
                <ul className="text-gray-700 text-sm mt-2 space-y-1">
                  <li>• Clear Design Space cache: Settings → Advanced → Clear Application Cache</li>
                  <li>• Close other resource-heavy applications</li>
                  <li>• Reduce design complexity (flatten layers, simplify images)</li>
                  <li>• Try the web version: design.cricut.com (sometimes faster)</li>
                  <li>• Ensure you have at least 4GB RAM free</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-4">
                <h4 className="font-bold text-gray-900">Crashing / Freezing</h4>
                <ul className="text-gray-700 text-sm mt-2 space-y-1">
                  <li>• Uninstall and reinstall Design Space completely</li>
                  <li>• Restart your computer before reinstalling</li>
                  <li>• Disable antivirus temporarily during install</li>
                  <li>• Update your graphics drivers</li>
                  <li>• On Mac: Check System Settings → Privacy → Files and Folders permissions</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-4">
                <h4 className="font-bold text-gray-900">"Make" Button Grayed Out</h4>
                <ul className="text-gray-700 text-sm mt-2 space-y-1">
                  <li>• Ensure your machine is selected in the machine dropdown</li>
                  <li>• Check that your machine is connected (solid icon, not grayed)</li>
                  <li>• Verify your design has actual cut/draw elements (not just images)</li>
                  <li>• Flatten or attach elements if they seem disconnected</li>
                </ul>
              </div>
            </div>

            <h3>Design Space Alternatives</h3>
            <ul>
              <li><strong>Web version:</strong> design.cricut.com — Works in any browser, no install required</li>
              <li><strong>Mobile app:</strong> iOS/Android versions can be more stable for simple projects</li>
              <li><strong>Design elsewhere:</strong> Create SVGs in Illustrator, Canva, or Inkscape, then import to Design Space</li>
            </ul>

            <p className="mt-4">
              <Link href="/guides/cricut-design-space-not-working" className="text-[#9CAF88] hover:text-[#6B7F5E] font-semibold">
                → Full Design Space troubleshooting guide →
              </Link>
            </p>
          </section>

          <hr className="my-10" />

          {/* Problem 8: Cutting Issues */}
          <section id="cutting" className="scroll-mt-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <span className="bg-[#9CAF88] text-white w-10 h-10 rounded-full flex items-center justify-center text-lg">8</span>
              Cutting Issues & Mid-Cut Errors
            </h2>

            <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-6 rounded-r-lg">
              <p className="font-semibold text-red-800">Common Complaint</p>
              <p className="text-red-700">
                "My Maker 4 stopped in the middle of cutting!" or "It's not cutting all the way through!"
              </p>
            </div>

            <h3>Machine Stops Mid-Cut</h3>
            <p>This issue is often firmware-related, especially with multi-pass materials:</p>
            <ul>
              <li><strong>Update firmware</strong> — Cricut has released fixes for mid-cut stopping issues</li>
              <li><strong>Check USB/Bluetooth stability</strong> — Connection drops cause mid-cut stops</li>
              <li><strong>Reduce design complexity</strong> — Extremely complex designs can overwhelm the machine</li>
              <li><strong>Break into smaller sections</strong> — For large designs, cut in multiple sessions</li>
              <li><strong>Check for debris</strong> — Material stuck in the roller or blade housing can trigger errors</li>
            </ul>

            <h3>Not Cutting Through Material</h3>
            <ol>
              <li>
                <strong>Select the correct material in Design Space</strong>
                <p className="text-gray-600">The Maker 4 uses material settings to determine pressure and blade depth. Wrong selection = wrong cut.</p>
              </li>
              <li>
                <strong>Check blade condition</strong>
                <p className="text-gray-600">Fine-point blades dull quickly, especially with cardstock. Replace every 3-6 months with regular use.</p>
              </li>
              <li>
                <strong>Increase pressure</strong>
                <p className="text-gray-600">Use "More Pressure" in the cut prompt, or create a custom material with +10-20 pressure.</p>
              </li>
              <li>
                <strong>Do a test cut first</strong>
                <p className="text-gray-600">The star icon in Design Space does a test cut before committing to your full design.</p>
              </li>
              <li>
                <strong>Clean the blade housing</strong>
                <p className="text-gray-600">Remove the blade, wipe inside the housing with a dry cloth. Debris can prevent full blade extension.</p>
              </li>
            </ol>

            <h3>Cutting Too Deep / Cutting Through Mat</h3>
            <ul>
              <li><strong>Reduce pressure</strong> — Custom material settings let you dial back pressure</li>
              <li><strong>Check blade type</strong> — Make sure you're using Fine-Point for vinyl/paper, not Deep-Cut</li>
              <li><strong>Blade extended too far</strong> — For adjustable blades, turn the dial to a lower setting</li>
            </ul>

            <p className="mt-4">
              <Link href="/guides/cricut-not-cutting-vinyl" className="text-[#9CAF88] hover:text-[#6B7F5E] font-semibold">
                → Complete cutting troubleshooting guide →
              </Link>
            </p>
          </section>

          <hr className="my-10" />

          {/* Summary Box */}
          <section className="bg-gradient-to-r from-[#F5E6E6] to-purple-100 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">🛠️ Quick Reference: Maker 4 Fixes</h2>
            <div className="grid md:grid-cols-2 gap-6 text-gray-700">
              <div>
                <h3 className="font-bold mb-3">Hardware Issues</h3>
                <ul className="text-sm space-y-2">
                  <li>• <strong>Scoring tears:</strong> Reduce pressure, use stylus over wheel</li>
                  <li>• <strong>Mat issues:</strong> Right mat + proper care</li>
                  <li>• <strong>Not cutting through:</strong> Check blade, increase pressure</li>
                  <li>• <strong>Calibration drift:</strong> Recalibrate monthly</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold mb-3">Software/Connection Issues</h3>
                <ul className="text-sm space-y-2">
                  <li>• <strong>Bluetooth drops:</strong> Use USB, or forget/re-pair</li>
                  <li>• <strong>Firmware problems:</strong> Update via USB, reset if needed</li>
                  <li>• <strong>Design Space slow:</strong> Clear cache, try web version</li>
                  <li>• <strong>Mid-cut errors:</strong> Update firmware, simplify design</li>
                </ul>
              </div>
            </div>
          </section>
        </div>

        {/* FAQ Section */}
        <section className="mt-12 bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {faqData.map((faq, index) => (
              <div key={index} className="border-b border-gray-100 pb-4 last:border-0">
                <h3 className="font-semibold text-gray-900 mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Related Articles */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Troubleshooting Guides</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/guides/cricut-bluetooth-not-connecting" className="block p-4 bg-white rounded-xl shadow hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-gray-900">Cricut Bluetooth Not Connecting?</h3>
              <p className="text-gray-600 text-sm mt-1">8 fixes for all Cricut machines</p>
            </Link>
            <Link href="/guides/how-to-calibrate-cricut" className="block p-4 bg-white rounded-xl shadow hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-gray-900">How to Calibrate Your Cricut</h3>
              <p className="text-gray-600 text-sm mt-1">Print Then Cut & Knife Blade calibration</p>
            </Link>
            <Link href="/guides/cricut-not-cutting-vinyl" className="block p-4 bg-white rounded-xl shadow hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-gray-900">Cricut Not Cutting Vinyl?</h3>
              <p className="text-gray-600 text-sm mt-1">7 fixes for cutting issues</p>
            </Link>
            <Link href="/guides/cricut-mat-not-sticky" className="block p-4 bg-white rounded-xl shadow hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-gray-900">Mat Not Sticky?</h3>
              <p className="text-gray-600 text-sm mt-1">How to restore and maintain mats</p>
            </Link>
            <Link href="/guides/cricut-design-space-not-working" className="block p-4 bg-white rounded-xl shadow hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-gray-900">Design Space Not Working?</h3>
              <p className="text-gray-600 text-sm mt-1">Fixes for crashes, lag, and errors</p>
            </Link>
            <Link href="/guides/cricut-maker-vs-explore" className="block p-4 bg-white rounded-xl shadow hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-gray-900">Maker vs Explore: Which to Buy?</h3>
              <p className="text-gray-600 text-sm mt-1">Complete comparison guide</p>
            </Link>
          </div>
        </section>

        {/* CTA */}
        <section className="mt-12 bg-gradient-to-r from-[#9CAF88] to-purple-500 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">Still Having Issues?</h2>
          <p className="mb-6 opacity-90">
            Our interactive troubleshooting wizard can diagnose your specific problem step-by-step.
          </p>
          <Link 
            href="/troubleshoot" 
            className="inline-block bg-white text-[#9CAF88] px-8 py-3 rounded-full font-semibold hover:bg-[#F5FAF3] transition-colors"
          >
            Start Troubleshooting Wizard →
          </Link>
        </section>
      </article>
    </main>
  );
}
