import { Metadata } from 'next';
import Link from 'next/link';
import { FAQSchema } from '@/components/SchemaMarkup';

export const metadata: Metadata = {
  title: 'Cricut Error Codes: Complete Reference Guide [2026] - Every Code Explained',
  description: 'Complete list of Cricut error codes with step-by-step fixes. Find your error code instantly and get back to crafting. Updated for Design Space 2026.',
  keywords: 'cricut error codes, cricut error 1001, cricut error 2003, design space error, cricut not working, cricut fix, cricut troubleshooting',
  openGraph: {
    title: 'Cricut Error Codes: Complete Reference Guide',
    description: 'Every Cricut error code explained with solutions. Instant fixes for Design Space, connectivity, cutting, and firmware errors.',
    type: 'article',
  },
};

const faqData = [
  {
    question: "What does Cricut error code 1001 mean?",
    answer: "Error 1001 is a connection error meaning Design Space cannot communicate with your Cricut machine. Fix it by checking Bluetooth is enabled, moving the machine closer to your device (within 15 feet), trying a USB cable instead, or restarting both the machine and Design Space."
  },
  {
    question: "How do I fix Cricut error code 2003?",
    answer: "Error 2003 is a Print Then Cut sensor error. The machine's sensor cannot read the registration marks. Fix it by using matte (not glossy) paper, ensuring good lighting without glare, cleaning the sensor lens with a dry cloth, and recalibrating Print Then Cut in Design Space settings."
  },
  {
    question: "Why does my Cricut show error code 1006?",
    answer: "Error 1006 means 'Machine Not Found' - Design Space cannot detect your Cricut. Ensure the machine is powered on with a solid light (not blinking), check that Bluetooth is enabled, close other apps that might be using the Cricut, and try forgetting and re-pairing the device in Bluetooth settings."
  },
  {
    question: "What is Cricut error code 4001?",
    answer: "Error 4001 indicates a USB connection error. Your computer isn't recognizing the Cricut via USB. Fix it by trying a different USB cable (must support data transfer, not just charging), using a different USB port, connecting directly to the computer instead of through a hub, and updating USB drivers."
  },
  {
    question: "How do I fix unknown Cricut errors?",
    answer: "For unknown or generic errors: 1) Close and reopen Design Space completely, 2) Clear Design Space cache in Settings, 3) Restart your computer, 4) Try the web version at design.cricut.com, 5) Uninstall and reinstall Design Space from cricut.com/setup. If issues persist, contact Cricut support."
  },
  {
    question: "When should I contact Cricut support?",
    answer: "Contact Cricut support at help.cricut.com when: the same error persists after trying all solutions, your machine makes unusual grinding or clicking noises, the carriage is physically stuck and won't move, firmware updates repeatedly fail, or you see physical damage to the machine."
  }
];

export default function ErrorCodesReferencePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#FAF8F5] to-white">
      <FAQSchema faqs={faqData} />
      
      {/* JSON-LD for error codes table (ItemList schema) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TechArticle",
            "headline": "Cricut Error Codes: Complete Reference Guide",
            "description": "Comprehensive reference guide to all Cricut error codes with explanations and solutions",
            "datePublished": "2026-02-09",
            "dateModified": "2026-02-09",
            "author": {
              "@type": "Organization",
              "name": "CricutHelper"
            }
          })
        }}
      />
      
      <article className="max-w-4xl mx-auto px-4 py-12">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:text-[#9CAF88]">Home</Link>
          <span className="mx-2">→</span>
          <Link href="/guides" className="hover:text-[#9CAF88]">Guides</Link>
          <span className="mx-2">→</span>
          <span className="text-gray-700">Error Codes Reference</span>
        </nav>

        {/* Hero */}
        <header className="mb-10">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            Cricut Error Codes: Complete Reference Guide
          </h1>
          <p className="text-xl text-gray-600 mb-4">
            Every Cricut error code explained with step-by-step fixes. Find your error, fix the problem, 
            and get back to crafting in minutes.
          </p>
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <span>Updated: February 2026</span>
            <span>•</span>
            <span>Complete Reference</span>
            <span>•</span>
            <span>All Machines</span>
          </div>
        </header>

        {/* Quick Jump Navigation */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-10">
          <h2 className="text-lg font-bold text-gray-900 mb-4">🔍 Jump to Error Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            <a href="#connectivity" className="flex items-center gap-2 p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
              <span>📶</span>
              <span className="text-sm font-medium text-blue-800">Connectivity (1xxx)</span>
            </a>
            <a href="#print-then-cut" className="flex items-center gap-2 p-3 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors">
              <span>🖨️</span>
              <span className="text-sm font-medium text-purple-800">Print Then Cut (2xxx)</span>
            </a>
            <a href="#design-space" className="flex items-center gap-2 p-3 bg-green-50 rounded-lg hover:bg-green-100 transition-colors">
              <span>💻</span>
              <span className="text-sm font-medium text-green-800">Design Space (3xxx)</span>
            </a>
            <a href="#usb" className="flex items-center gap-2 p-3 bg-yellow-50 rounded-lg hover:bg-yellow-100 transition-colors">
              <span>🔌</span>
              <span className="text-sm font-medium text-yellow-800">USB Errors (4xxx)</span>
            </a>
            <a href="#cutting" className="flex items-center gap-2 p-3 bg-red-50 rounded-lg hover:bg-red-100 transition-colors">
              <span>✂️</span>
              <span className="text-sm font-medium text-red-800">Cutting/Hardware (5-8xxx)</span>
            </a>
            <a href="#subscription" className="flex items-center gap-2 p-3 bg-[#F5FAF3] rounded-lg hover:bg-[#F5E6E6] transition-colors">
              <span>💳</span>
              <span className="text-sm font-medium text-[#6B7F5E]">Subscription (9xxx)</span>
            </a>
          </div>
        </div>

        {/* Quick Answer Box for Featured Snippet */}
        <div className="bg-[#F5E6E6] rounded-2xl p-6 mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-3">⚡ Most Common Cricut Error Codes</h2>
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-[#B8C9A9]">
                <th className="text-left py-2 font-semibold">Code</th>
                <th className="text-left py-2 font-semibold">Meaning</th>
                <th className="text-left py-2 font-semibold">Quick Fix</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-[#B8C9A9]">
                <td className="py-2 font-mono font-bold text-[#6B7F5E]">1001</td>
                <td className="py-2">Connection Error</td>
                <td className="py-2">Restart machine + check Bluetooth</td>
              </tr>
              <tr className="border-b border-[#B8C9A9]">
                <td className="py-2 font-mono font-bold text-[#6B7F5E]">1006</td>
                <td className="py-2">Machine Not Found</td>
                <td className="py-2">Forget & re-pair in Bluetooth settings</td>
              </tr>
              <tr className="border-b border-[#B8C9A9]">
                <td className="py-2 font-mono font-bold text-[#6B7F5E]">2003</td>
                <td className="py-2">Sensor Can't Read Marks</td>
                <td className="py-2">Use matte paper, clean sensor</td>
              </tr>
              <tr className="border-b border-[#B8C9A9]">
                <td className="py-2 font-mono font-bold text-[#6B7F5E]">4001</td>
                <td className="py-2">USB Not Recognized</td>
                <td className="py-2">Try different cable/port</td>
              </tr>
              <tr>
                <td className="py-2 font-mono font-bold text-[#6B7F5E]">7001</td>
                <td className="py-2">Carriage Jam</td>
                <td className="py-2">Turn off, clear obstruction</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Main Content */}
        <div className="prose prose-lg prose-slate max-w-none">
          
          {/* CONNECTIVITY ERRORS */}
          <h2 id="connectivity" className="flex items-center gap-2">
            <span>📶</span> Connectivity Errors (1xxx Series)
          </h2>
          <p>
            Connectivity errors are the most common Cricut issues. These occur when Design Space 
            can't communicate with your machine via Bluetooth or USB.
          </p>

          {/* Error 1001 */}
          <div className="bg-white rounded-xl border-2 border-blue-200 p-6 my-6 not-prose">
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-lg font-mono font-bold text-xl">1001</span>
              <h3 className="text-xl font-bold text-gray-900">Connection Error</h3>
            </div>
            <p className="text-gray-600 mb-4">Design Space cannot connect to your Cricut machine.</p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-700 mb-2">❓ Common Causes</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Bluetooth is disabled on your device</li>
                  <li>• Machine is too far from computer (15+ feet)</li>
                  <li>• Another device is connected to the Cricut</li>
                  <li>• USB cable is charge-only (no data)</li>
                  <li>• Machine needs to be power cycled</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-700 mb-2">✅ Step-by-Step Fix</h4>
                <ol className="text-sm text-gray-600 space-y-1">
                  <li>1. Turn off Cricut, wait 30 seconds, turn on</li>
                  <li>2. Check Bluetooth is ON in device settings</li>
                  <li>3. Move machine within 10-15 feet of device</li>
                  <li>4. Close Design Space completely, reopen</li>
                  <li>5. If still failing, try USB cable instead</li>
                  <li>6. Forget device in Bluetooth settings, re-pair</li>
                </ol>
              </div>
            </div>
          </div>

          {/* Error 1002 */}
          <div className="bg-white rounded-xl border-2 border-blue-200 p-6 my-6 not-prose">
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-lg font-mono font-bold text-xl">1002</span>
              <h3 className="text-xl font-bold text-gray-900">Firmware Update Required</h3>
            </div>
            <p className="text-gray-600 mb-4">Your machine's firmware is out of date and must be updated.</p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-700 mb-2">❓ Common Causes</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Machine firmware is outdated</li>
                  <li>• Previous update was interrupted</li>
                  <li>• New Design Space requires firmware update</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-700 mb-2">✅ Step-by-Step Fix</h4>
                <ol className="text-sm text-gray-600 space-y-1">
                  <li>1. Connect via USB (more reliable for updates)</li>
                  <li>2. Ensure stable internet connection</li>
                  <li>3. Click "Update" when prompted</li>
                  <li>4. <strong>DO NOT</strong> turn off machine during update</li>
                  <li>5. Wait 5-15 minutes for completion</li>
                  <li>6. If fails, restart machine and retry</li>
                </ol>
              </div>
            </div>
            <div className="mt-4 p-3 bg-yellow-50 rounded-lg">
              <p className="text-sm text-yellow-800"><strong>⚠️ Warning:</strong> Never unplug or turn off your Cricut during a firmware update. This can brick your machine.</p>
            </div>
          </div>

          {/* Error 1003 */}
          <div className="bg-white rounded-xl border-2 border-blue-200 p-6 my-6 not-prose">
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-lg font-mono font-bold text-xl">1003</span>
              <h3 className="text-xl font-bold text-gray-900">Bluetooth Pairing Failed</h3>
            </div>
            <p className="text-gray-600 mb-4">The Bluetooth pairing process did not complete successfully.</p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-700 mb-2">❓ Common Causes</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Pairing timed out</li>
                  <li>• Too many devices trying to pair</li>
                  <li>• Bluetooth adapter issues on computer</li>
                  <li>• Machine already paired to max devices</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-700 mb-2">✅ Step-by-Step Fix</h4>
                <ol className="text-sm text-gray-600 space-y-1">
                  <li>1. Forget Cricut from ALL devices' Bluetooth</li>
                  <li>2. Turn off Cricut for 60 seconds</li>
                  <li>3. Turn on Cricut, wait for solid light</li>
                  <li>4. On your device, search for new Bluetooth devices</li>
                  <li>5. Select Cricut and complete pairing</li>
                  <li>6. Then open Design Space and connect</li>
                </ol>
              </div>
            </div>
          </div>

          {/* Error 1006 */}
          <div className="bg-white rounded-xl border-2 border-blue-200 p-6 my-6 not-prose">
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-lg font-mono font-bold text-xl">1006</span>
              <h3 className="text-xl font-bold text-gray-900">Machine Not Found</h3>
            </div>
            <p className="text-gray-600 mb-4">Design Space cannot detect any Cricut machine on the network.</p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-700 mb-2">❓ Common Causes</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Machine is powered off or in sleep mode</li>
                  <li>• Bluetooth/USB disconnected</li>
                  <li>• Machine not paired to this device</li>
                  <li>• Another app is using the Cricut connection</li>
                  <li>• Light is blinking (not ready yet)</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-700 mb-2">✅ Step-by-Step Fix</h4>
                <ol className="text-sm text-gray-600 space-y-1">
                  <li>1. Check machine is ON with SOLID light</li>
                  <li>2. Verify Bluetooth enabled on your device</li>
                  <li>3. Close other apps (especially other craft apps)</li>
                  <li>4. Try USB connection instead of Bluetooth</li>
                  <li>5. Check device Bluetooth settings for Cricut</li>
                  <li>6. Restart both machine and computer</li>
                </ol>
              </div>
            </div>
          </div>

          {/* Error 1007 */}
          <div className="bg-white rounded-xl border-2 border-blue-200 p-6 my-6 not-prose">
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-lg font-mono font-bold text-xl">1007</span>
              <h3 className="text-xl font-bold text-gray-900">Cutting Failed / Connection Lost During Cut</h3>
            </div>
            <p className="text-gray-600 mb-4">The cut operation was interrupted due to connection issues.</p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-700 mb-2">❓ Common Causes</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Bluetooth signal dropped during cut</li>
                  <li>• Computer went to sleep</li>
                  <li>• Design too complex for Bluetooth</li>
                  <li>• Power saving mode on device</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-700 mb-2">✅ Step-by-Step Fix</h4>
                <ol className="text-sm text-gray-600 space-y-1">
                  <li>1. Use USB connection for large/complex cuts</li>
                  <li>2. Disable power saving mode on computer</li>
                  <li>3. Keep Design Space as active window</li>
                  <li>4. Move machine closer to device</li>
                  <li>5. Close other Bluetooth-using apps</li>
                  <li>6. For big projects, cut in sections</li>
                </ol>
              </div>
            </div>
          </div>

          <hr className="my-8" />

          {/* PRINT THEN CUT ERRORS */}
          <h2 id="print-then-cut" className="flex items-center gap-2">
            <span>🖨️</span> Print Then Cut Errors (2xxx Series)
          </h2>
          <p>
            Print Then Cut errors occur when the machine's optical sensor has trouble reading 
            registration marks on printed materials.
          </p>

          {/* Error 2001 */}
          <div className="bg-white rounded-xl border-2 border-purple-200 p-6 my-6 not-prose">
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-purple-100 text-purple-700 px-4 py-2 rounded-lg font-mono font-bold text-xl">2001</span>
              <h3 className="text-xl font-bold text-gray-900">Print Then Cut Calibration Needed</h3>
            </div>
            <p className="text-gray-600 mb-4">Your machine needs to be calibrated before using Print Then Cut.</p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-700 mb-2">❓ Common Causes</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Machine never calibrated for PTC</li>
                  <li>• Calibration reset after firmware update</li>
                  <li>• Changed computers/devices</li>
                  <li>• Previous calibration was inaccurate</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-700 mb-2">✅ Step-by-Step Fix</h4>
                <ol className="text-sm text-gray-600 space-y-1">
                  <li>1. Go to Menu (☰) → Calibration</li>
                  <li>2. Select "Print Then Cut"</li>
                  <li>3. Print calibration sheet on white paper</li>
                  <li>4. Place on LightGrip mat, load into machine</li>
                  <li>5. Ensure room is well-lit (no direct sunlight)</li>
                  <li>6. Follow on-screen prompts to complete</li>
                </ol>
              </div>
            </div>
          </div>

          {/* Error 2002 */}
          <div className="bg-white rounded-xl border-2 border-purple-200 p-6 my-6 not-prose">
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-purple-100 text-purple-700 px-4 py-2 rounded-lg font-mono font-bold text-xl">2002</span>
              <h3 className="text-xl font-bold text-gray-900">Calibration Failed</h3>
            </div>
            <p className="text-gray-600 mb-4">The Print Then Cut calibration process could not complete.</p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-700 mb-2">❓ Common Causes</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Wrong paper type (glossy reflects)</li>
                  <li>• Calibration sheet printed incorrectly</li>
                  <li>• Poor lighting conditions</li>
                  <li>• Dirty sensor lens</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-700 mb-2">✅ Step-by-Step Fix</h4>
                <ol className="text-sm text-gray-600 space-y-1">
                  <li>1. Use plain white MATTE paper only</li>
                  <li>2. Reprint calibration sheet at 100% size</li>
                  <li>3. Ensure marks printed dark and clear</li>
                  <li>4. Use diffused lighting (no harsh shadows)</li>
                  <li>5. Clean sensor with dry microfiber cloth</li>
                  <li>6. Try USB connection instead of Bluetooth</li>
                </ol>
              </div>
            </div>
          </div>

          {/* Error 2003 */}
          <div className="bg-white rounded-xl border-2 border-purple-200 p-6 my-6 not-prose">
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-purple-100 text-purple-700 px-4 py-2 rounded-lg font-mono font-bold text-xl">2003</span>
              <h3 className="text-xl font-bold text-gray-900">Sensor Cannot Read Registration Marks</h3>
            </div>
            <p className="text-gray-600 mb-4">The optical sensor failed to detect the black registration marks on your printed material.</p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-700 mb-2">❓ Common Causes</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Using glossy or shiny paper</li>
                  <li>• Marks printed too light or faded</li>
                  <li>• Direct sunlight causing glare</li>
                  <li>• Sensor lens is dirty or smudged</li>
                  <li>• Paper shifted on mat</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-700 mb-2">✅ Step-by-Step Fix</h4>
                <ol className="text-sm text-gray-600 space-y-1">
                  <li>1. Use MATTE paper only (never glossy)</li>
                  <li>2. Check printer ink levels, reprint if faded</li>
                  <li>3. Move away from windows/bright lights</li>
                  <li>4. Clean sensor with dry lint-free cloth</li>
                  <li>5. Ensure paper is flat and secure on mat</li>
                  <li>6. Try printing marks at higher quality</li>
                  <li>7. Re-calibrate Print Then Cut</li>
                </ol>
              </div>
            </div>
            <div className="mt-4 p-3 bg-purple-50 rounded-lg">
              <p className="text-sm text-purple-800"><strong>💡 Pro Tip:</strong> For best results, use Cricut printable vinyl or sticker paper. Regular copy paper works well too. Avoid photo paper, cardstock, or any glossy finish.</p>
            </div>
          </div>

          {/* Error 2004 */}
          <div className="bg-white rounded-xl border-2 border-purple-200 p-6 my-6 not-prose">
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-purple-100 text-purple-700 px-4 py-2 rounded-lg font-mono font-bold text-xl">2004</span>
              <h3 className="text-xl font-bold text-gray-900">Print Then Cut Size Exceeded</h3>
            </div>
            <p className="text-gray-600 mb-4">Your design exceeds the maximum Print Then Cut dimensions.</p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-700 mb-2">❓ Common Causes</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Design larger than 9.25" x 6.75"</li>
                  <li>• Design placed outside printable area</li>
                  <li>• Using wrong machine settings</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-700 mb-2">✅ Step-by-Step Fix</h4>
                <ol className="text-sm text-gray-600 space-y-1">
                  <li>1. Check your design dimensions</li>
                  <li>2. Resize to fit within 9.25" x 6.75"</li>
                  <li>3. Center design on canvas</li>
                  <li>4. Split large designs into multiple prints</li>
                  <li>5. Ensure proper margins around design</li>
                </ol>
              </div>
            </div>
          </div>

          <hr className="my-8" />

          {/* DESIGN SPACE ERRORS */}
          <h2 id="design-space" className="flex items-center gap-2">
            <span>💻</span> Design Space Software Errors (3xxx Series)
          </h2>
          <p>
            These errors occur within the Design Space software itself, often related to cloud sync, 
            login issues, or application problems.
          </p>

          {/* Error 3001 */}
          <div className="bg-white rounded-xl border-2 border-green-200 p-6 my-6 not-prose">
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-green-100 text-green-700 px-4 py-2 rounded-lg font-mono font-bold text-xl">3001</span>
              <h3 className="text-xl font-bold text-gray-900">Cloud Sync Error</h3>
            </div>
            <p className="text-gray-600 mb-4">Your projects failed to sync with Cricut's cloud servers.</p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-700 mb-2">❓ Common Causes</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Internet connection lost or unstable</li>
                  <li>• Cricut servers temporarily down</li>
                  <li>• Account sync issue</li>
                  <li>• Corrupted local cache</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-700 mb-2">✅ Step-by-Step Fix</h4>
                <ol className="text-sm text-gray-600 space-y-1">
                  <li>1. Check your internet connection</li>
                  <li>2. Wait 5 minutes and try again</li>
                  <li>3. Log out and log back into Design Space</li>
                  <li>4. Clear cache: Settings → Clear Cache</li>
                  <li>5. Check status.cricut.com for outages</li>
                  <li>6. Try design.cricut.com web version</li>
                </ol>
              </div>
            </div>
          </div>

          {/* Error 3002 */}
          <div className="bg-white rounded-xl border-2 border-green-200 p-6 my-6 not-prose">
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-green-100 text-green-700 px-4 py-2 rounded-lg font-mono font-bold text-xl">3002</span>
              <h3 className="text-xl font-bold text-gray-900">Login Failed</h3>
            </div>
            <p className="text-gray-600 mb-4">Unable to sign into your Cricut account.</p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-700 mb-2">❓ Common Causes</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Incorrect email or password</li>
                  <li>• Account locked due to failed attempts</li>
                  <li>• Session expired</li>
                  <li>• Server authentication issues</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-700 mb-2">✅ Step-by-Step Fix</h4>
                <ol className="text-sm text-gray-600 space-y-1">
                  <li>1. Verify email address is correct</li>
                  <li>2. Reset password at cricut.com</li>
                  <li>3. Wait 15 minutes if locked out</li>
                  <li>4. Clear Design Space cache</li>
                  <li>5. Try logging in via web browser first</li>
                  <li>6. Reinstall Design Space if persistent</li>
                </ol>
              </div>
            </div>
          </div>

          {/* Error 3003 */}
          <div className="bg-white rounded-xl border-2 border-green-200 p-6 my-6 not-prose">
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-green-100 text-green-700 px-4 py-2 rounded-lg font-mono font-bold text-xl">3003</span>
              <h3 className="text-xl font-bold text-gray-900">Project Load Failed</h3>
            </div>
            <p className="text-gray-600 mb-4">Unable to open or load a saved project.</p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-700 mb-2">❓ Common Causes</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Project file corrupted</li>
                  <li>• Sync incomplete</li>
                  <li>• Using fonts no longer available</li>
                  <li>• Design Space version mismatch</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-700 mb-2">✅ Step-by-Step Fix</h4>
                <ol className="text-sm text-gray-600 space-y-1">
                  <li>1. Close Design Space, reopen it</li>
                  <li>2. Check internet connection</li>
                  <li>3. Update Design Space to latest version</li>
                  <li>4. Try opening on different device</li>
                  <li>5. If using custom fonts, reinstall them</li>
                  <li>6. Contact support if project critical</li>
                </ol>
              </div>
            </div>
          </div>

          {/* Error 3004 */}
          <div className="bg-white rounded-xl border-2 border-green-200 p-6 my-6 not-prose">
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-green-100 text-green-700 px-4 py-2 rounded-lg font-mono font-bold text-xl">3004</span>
              <h3 className="text-xl font-bold text-gray-900">Image Upload Failed</h3>
            </div>
            <p className="text-gray-600 mb-4">Unable to upload an image to Design Space.</p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-700 mb-2">❓ Common Causes</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• File too large (over 25MB)</li>
                  <li>• Unsupported file format</li>
                  <li>• Corrupted image file</li>
                  <li>• Slow/unstable internet</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-700 mb-2">✅ Step-by-Step Fix</h4>
                <ol className="text-sm text-gray-600 space-y-1">
                  <li>1. Resize image to under 25MB</li>
                  <li>2. Use JPG, PNG, SVG, or BMP format</li>
                  <li>3. Try re-saving the image file</li>
                  <li>4. Check internet stability</li>
                  <li>5. Clear Design Space cache</li>
                  <li>6. Try uploading via web version</li>
                </ol>
              </div>
            </div>
          </div>

          <hr className="my-8" />

          {/* USB ERRORS */}
          <h2 id="usb" className="flex items-center gap-2">
            <span>🔌</span> USB Connection Errors (4xxx Series)
          </h2>
          <p>
            USB errors occur when your computer cannot properly communicate with the Cricut 
            through a wired connection.
          </p>

          {/* Error 4001 */}
          <div className="bg-white rounded-xl border-2 border-yellow-200 p-6 my-6 not-prose">
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-yellow-100 text-yellow-700 px-4 py-2 rounded-lg font-mono font-bold text-xl">4001</span>
              <h3 className="text-xl font-bold text-gray-900">USB Device Not Recognized</h3>
            </div>
            <p className="text-gray-600 mb-4">Your computer cannot detect the Cricut via USB cable.</p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-700 mb-2">❓ Common Causes</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Cable is charge-only (no data transfer)</li>
                  <li>• USB port not working</li>
                  <li>• Drivers need updating</li>
                  <li>• Using a USB hub</li>
                  <li>• Cable is damaged</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-700 mb-2">✅ Step-by-Step Fix</h4>
                <ol className="text-sm text-gray-600 space-y-1">
                  <li>1. Use a DATA-capable USB cable</li>
                  <li>2. Try different USB port on computer</li>
                  <li>3. Connect directly, not through hub</li>
                  <li>4. Windows: Update drivers in Device Manager</li>
                  <li>5. Mac: Check Security settings for blocked devices</li>
                  <li>6. Restart computer after connecting</li>
                </ol>
              </div>
            </div>
            <div className="mt-4 p-3 bg-yellow-50 rounded-lg">
              <p className="text-sm text-yellow-800"><strong>💡 Cable Check:</strong> Many USB cables only support charging. Cricut needs USB-A to USB-B (printer-style) cable that supports data. If unsure, buy a new cable specifically labeled for data transfer.</p>
            </div>
          </div>

          {/* Error 4002 */}
          <div className="bg-white rounded-xl border-2 border-yellow-200 p-6 my-6 not-prose">
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-yellow-100 text-yellow-700 px-4 py-2 rounded-lg font-mono font-bold text-xl">4002</span>
              <h3 className="text-xl font-bold text-gray-900">USB Communication Error</h3>
            </div>
            <p className="text-gray-600 mb-4">The USB connection is established but data transfer is failing.</p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-700 mb-2">❓ Common Causes</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• USB cable is loose</li>
                  <li>• USB port power insufficient</li>
                  <li>• Driver conflict</li>
                  <li>• Antivirus blocking connection</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-700 mb-2">✅ Step-by-Step Fix</h4>
                <ol className="text-sm text-gray-600 space-y-1">
                  <li>1. Unplug and firmly reconnect USB</li>
                  <li>2. Try a USB 3.0 port (usually blue)</li>
                  <li>3. Close other USB-intensive applications</li>
                  <li>4. Temporarily disable antivirus</li>
                  <li>5. Uninstall Cricut drivers, restart, reinstall</li>
                  <li>6. Try on different computer to isolate issue</li>
                </ol>
              </div>
            </div>
          </div>

          <hr className="my-8" />

          {/* CUTTING/HARDWARE ERRORS */}
          <h2 id="cutting" className="flex items-center gap-2">
            <span>✂️</span> Cutting & Hardware Errors (5xxx-8xxx Series)
          </h2>
          <p>
            Hardware errors involve physical components of the machine: blades, carriage, 
            rollers, and material handling.
          </p>

          {/* Error 5001 */}
          <div className="bg-white rounded-xl border-2 border-red-200 p-6 my-6 not-prose">
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-red-100 text-red-700 px-4 py-2 rounded-lg font-mono font-bold text-xl">5001</span>
              <h3 className="text-xl font-bold text-gray-900">Material Size Error</h3>
            </div>
            <p className="text-gray-600 mb-4">Your design is larger than the selected material or mat size.</p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-700 mb-2">❓ Common Causes</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Design exceeds mat dimensions</li>
                  <li>• Wrong material size selected</li>
                  <li>• Design placed off-canvas</li>
                  <li>• Using Smart Materials without proper setting</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-700 mb-2">✅ Step-by-Step Fix</h4>
                <ol className="text-sm text-gray-600 space-y-1">
                  <li>1. Check design fits on mat preview</li>
                  <li>2. Resize design if too large</li>
                  <li>3. Select correct material size in settings</li>
                  <li>4. Move design within canvas boundaries</li>
                  <li>5. For Smart Materials, enable "Without Mat"</li>
                  <li>6. Cut large designs in sections</li>
                </ol>
              </div>
            </div>
          </div>

          {/* Error 6001 */}
          <div className="bg-white rounded-xl border-2 border-red-200 p-6 my-6 not-prose">
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-red-100 text-red-700 px-4 py-2 rounded-lg font-mono font-bold text-xl">6001</span>
              <h3 className="text-xl font-bold text-gray-900">Blade/Tool Not Detected</h3>
            </div>
            <p className="text-gray-600 mb-4">The machine cannot detect the blade or tool in the clamp.</p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-700 mb-2">❓ Common Causes</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Blade housing not fully seated</li>
                  <li>• Clamp not closed completely</li>
                  <li>• Wrong tool for selected operation</li>
                  <li>• Tool is damaged</li>
                  <li>• Debris in clamp mechanism</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-700 mb-2">✅ Step-by-Step Fix</h4>
                <ol className="text-sm text-gray-600 space-y-1">
                  <li>1. Remove blade housing completely</li>
                  <li>2. Reinsert until you hear/feel it CLICK</li>
                  <li>3. Close clamp lever firmly</li>
                  <li>4. Verify correct tool for material</li>
                  <li>5. Inspect tool for visible damage</li>
                  <li>6. Clean clamp area with compressed air</li>
                  <li>7. Try a different blade/tool</li>
                </ol>
              </div>
            </div>
          </div>

          {/* Error 6002 */}
          <div className="bg-white rounded-xl border-2 border-red-200 p-6 my-6 not-prose">
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-red-100 text-red-700 px-4 py-2 rounded-lg font-mono font-bold text-xl">6002</span>
              <h3 className="text-xl font-bold text-gray-900">Wrong Tool Installed</h3>
            </div>
            <p className="text-gray-600 mb-4">The installed tool doesn't match what's needed for the operation.</p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-700 mb-2">❓ Common Causes</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Fine point blade when deep point needed</li>
                  <li>• Scoring stylus for cutting operation</li>
                  <li>• Wrong adapter for tool type</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-700 mb-2">✅ Step-by-Step Fix</h4>
                <ol className="text-sm text-gray-600 space-y-1">
                  <li>1. Check Design Space for required tool</li>
                  <li>2. Install the correct tool/blade</li>
                  <li>3. For thick materials: use Deep Point blade</li>
                  <li>4. For delicate cuts: use Fine Point blade</li>
                  <li>5. Refer to material settings guide</li>
                </ol>
              </div>
            </div>
          </div>

          {/* Error 7001 */}
          <div className="bg-white rounded-xl border-2 border-red-200 p-6 my-6 not-prose">
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-red-100 text-red-700 px-4 py-2 rounded-lg font-mono font-bold text-xl">7001</span>
              <h3 className="text-xl font-bold text-gray-900">Carriage Jam</h3>
            </div>
            <p className="text-gray-600 mb-4">The cutting carriage is stuck and cannot move freely.</p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-700 mb-2">❓ Common Causes</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Material jammed in carriage path</li>
                  <li>• Foreign object blocking movement</li>
                  <li>• Carriage belt loose or damaged</li>
                  <li>• Debris on guide rails</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-700 mb-2">✅ Step-by-Step Fix</h4>
                <ol className="text-sm text-gray-600 space-y-1">
                  <li>1. Turn OFF machine and UNPLUG</li>
                  <li>2. Gently try moving carriage by hand</li>
                  <li>3. Look for and remove any jammed material</li>
                  <li>4. Check for debris on rails, clean gently</li>
                  <li>5. Ensure nothing blocks carriage path</li>
                  <li>6. <strong>Do NOT force</strong> — can cause damage</li>
                  <li>7. If belt damaged, contact Cricut support</li>
                </ol>
              </div>
            </div>
            <div className="mt-4 p-3 bg-red-50 rounded-lg">
              <p className="text-sm text-red-800"><strong>⚠️ Warning:</strong> Never force a stuck carriage. Forcing can damage the belt or motor. If gentle movement doesn't free it, contact support.</p>
            </div>
          </div>

          {/* Error 7002 */}
          <div className="bg-white rounded-xl border-2 border-red-200 p-6 my-6 not-prose">
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-red-100 text-red-700 px-4 py-2 rounded-lg font-mono font-bold text-xl">7002</span>
              <h3 className="text-xl font-bold text-gray-900">Carriage Movement Error</h3>
            </div>
            <p className="text-gray-600 mb-4">The carriage is moving erratically or not following the correct path.</p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-700 mb-2">❓ Common Causes</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Belt tension incorrect</li>
                  <li>• Motor calibration off</li>
                  <li>• Connection interruption</li>
                  <li>• Firmware issue</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-700 mb-2">✅ Step-by-Step Fix</h4>
                <ol className="text-sm text-gray-600 space-y-1">
                  <li>1. Turn off, wait 60 seconds, turn on</li>
                  <li>2. Check for debris on rails</li>
                  <li>3. Update firmware to latest version</li>
                  <li>4. Run a test cut with simple design</li>
                  <li>5. If persists, contact support</li>
                </ol>
              </div>
            </div>
          </div>

          {/* Error 8001 */}
          <div className="bg-white rounded-xl border-2 border-red-200 p-6 my-6 not-prose">
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-red-100 text-red-700 px-4 py-2 rounded-lg font-mono font-bold text-xl">8001</span>
              <h3 className="text-xl font-bold text-gray-900">Roller Bar / Mat Feeding Error</h3>
            </div>
            <p className="text-gray-600 mb-4">The machine cannot properly load or feed the mat.</p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-700 mb-2">❓ Common Causes</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Mat is warped or bent</li>
                  <li>• Mat not aligned with guides</li>
                  <li>• Debris on roller bars</li>
                  <li>• Material too thick</li>
                  <li>• Roller bar tension issues</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-700 mb-2">✅ Step-by-Step Fix</h4>
                <ol className="text-sm text-gray-600 space-y-1">
                  <li>1. Check mat is flat and not warped</li>
                  <li>2. Align mat edge with guides and arrow</li>
                  <li>3. Clean roller bars with lint-free cloth</li>
                  <li>4. Ensure material isn't too thick</li>
                  <li>5. Try a different mat</li>
                  <li>6. Don't overload mat with material</li>
                </ol>
              </div>
            </div>
          </div>

          {/* Error 8002 */}
          <div className="bg-white rounded-xl border-2 border-red-200 p-6 my-6 not-prose">
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-red-100 text-red-700 px-4 py-2 rounded-lg font-mono font-bold text-xl">8002</span>
              <h3 className="text-xl font-bold text-gray-900">Mat Not Detected</h3>
            </div>
            <p className="text-gray-600 mb-4">The machine doesn't recognize that a mat has been inserted.</p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-700 mb-2">❓ Common Causes</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Mat not inserted far enough</li>
                  <li>• Mat sensor dirty or blocked</li>
                  <li>• Using non-Cricut mat</li>
                  <li>• Mat edges worn</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-700 mb-2">✅ Step-by-Step Fix</h4>
                <ol className="text-sm text-gray-600 space-y-1">
                  <li>1. Firmly press mat against rollers</li>
                  <li>2. Press Load button while mat in place</li>
                  <li>3. Clean mat sensor area gently</li>
                  <li>4. Ensure using genuine Cricut mat</li>
                  <li>5. Try different mat if available</li>
                  <li>6. Check mat edges aren't peeling</li>
                </ol>
              </div>
            </div>
          </div>

          <hr className="my-8" />

          {/* SUBSCRIPTION ERRORS */}
          <h2 id="subscription" className="flex items-center gap-2">
            <span>💳</span> Subscription & Access Errors (9xxx Series)
          </h2>
          <p>
            These errors relate to Cricut Access subscriptions and premium content.
          </p>

          {/* Error 9001 */}
          <div className="bg-white rounded-xl border-2 border-[#B8C9A9] p-6 my-6 not-prose">
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-[#F5E6E6] text-[#6B7F5E] px-4 py-2 rounded-lg font-mono font-bold text-xl">9001</span>
              <h3 className="text-xl font-bold text-gray-900">Subscription/Access Error</h3>
            </div>
            <p className="text-gray-600 mb-4">Unable to access Cricut Access content or premium features.</p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-700 mb-2">❓ Common Causes</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Subscription expired</li>
                  <li>• Payment method declined</li>
                  <li>• Logged into wrong account</li>
                  <li>• Server sync issue</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-700 mb-2">✅ Step-by-Step Fix</h4>
                <ol className="text-sm text-gray-600 space-y-1">
                  <li>1. Check subscription at cricut.com/account</li>
                  <li>2. Verify payment method is current</li>
                  <li>3. Confirm correct account is logged in</li>
                  <li>4. Log out and log back in</li>
                  <li>5. Clear Design Space cache</li>
                  <li>6. Contact Cricut billing support</li>
                </ol>
              </div>
            </div>
          </div>

          {/* Error 9002 */}
          <div className="bg-white rounded-xl border-2 border-[#B8C9A9] p-6 my-6 not-prose">
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-[#F5E6E6] text-[#6B7F5E] px-4 py-2 rounded-lg font-mono font-bold text-xl">9002</span>
              <h3 className="text-xl font-bold text-gray-900">Content Not Available</h3>
            </div>
            <p className="text-gray-600 mb-4">The image or font you're trying to use is not available.</p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-700 mb-2">❓ Common Causes</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Content removed from library</li>
                  <li>• Regional restrictions</li>
                  <li>• Subscription tier doesn't include item</li>
                  <li>• Content was a limited-time offer</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-700 mb-2">✅ Step-by-Step Fix</h4>
                <ol className="text-sm text-gray-600 space-y-1">
                  <li>1. Search for similar content in library</li>
                  <li>2. Check if content requires higher tier</li>
                  <li>3. Use uploaded/purchased alternatives</li>
                  <li>4. Contact support if recently purchased</li>
                </ol>
              </div>
            </div>
          </div>

          <hr className="my-8" />

          {/* UNKNOWN/GENERAL ERRORS */}
          <h2 id="unknown" className="flex items-center gap-2">
            <span>❓</span> Unknown & General Errors
          </h2>

          <div className="bg-white rounded-xl border-2 border-gray-200 p-6 my-6 not-prose">
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg font-mono font-bold text-xl">???</span>
              <h3 className="text-xl font-bold text-gray-900">Unknown Error / Generic Error Message</h3>
            </div>
            <p className="text-gray-600 mb-4">An unspecified error occurred. These are often software glitches.</p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-700 mb-2">❓ Common Causes</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Software glitch</li>
                  <li>• Corrupted cache</li>
                  <li>• Outdated Design Space</li>
                  <li>• Computer resource issue</li>
                  <li>• Temporary server problem</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-700 mb-2">✅ Step-by-Step Fix</h4>
                <ol className="text-sm text-gray-600 space-y-1">
                  <li>1. Close Design Space completely</li>
                  <li>2. Restart your computer/device</li>
                  <li>3. Clear cache: Settings → Clear Cache</li>
                  <li>4. Update Design Space to latest version</li>
                  <li>5. Try web version: design.cricut.com</li>
                  <li>6. Uninstall and reinstall Design Space</li>
                  <li>7. Check for OS updates</li>
                </ol>
              </div>
            </div>
          </div>

          <hr className="my-8" />

          {/* When to Contact Support */}
          <h2 id="contact-support">📞 When to Contact Cricut Support</h2>
          <p>
            Most errors can be resolved with the steps above. However, contact Cricut support at 
            <strong> help.cricut.com</strong> if:
          </p>
          <div className="bg-red-50 border border-red-200 rounded-xl p-6 my-6 not-prose">
            <ul className="space-y-2 text-red-800">
              <li className="flex items-start gap-2">
                <span>🔴</span>
                <span>Same error persists after trying ALL suggested solutions</span>
              </li>
              <li className="flex items-start gap-2">
                <span>🔴</span>
                <span>Machine makes unusual grinding, clicking, or squealing noises</span>
              </li>
              <li className="flex items-start gap-2">
                <span>🔴</span>
                <span>Carriage is physically stuck and won't move even gently</span>
              </li>
              <li className="flex items-start gap-2">
                <span>🔴</span>
                <span>Firmware updates repeatedly fail</span>
              </li>
              <li className="flex items-start gap-2">
                <span>🔴</span>
                <span>Visible physical damage to machine components</span>
              </li>
              <li className="flex items-start gap-2">
                <span>🔴</span>
                <span>Machine less than 1 year old (still under warranty)</span>
              </li>
              <li className="flex items-start gap-2">
                <span>🔴</span>
                <span>Error code not listed in this guide</span>
              </li>
            </ul>
            <div className="mt-4 pt-4 border-t border-red-200">
              <p className="text-red-700 text-sm">
                <strong>Before calling:</strong> Have your machine model, serial number (bottom of machine), 
                and a description of the error ready. Screenshots help!
              </p>
            </div>
          </div>

          <hr className="my-8" />

          {/* Prevention Tips */}
          <h2 id="prevention">🛡️ Preventing Cricut Errors</h2>
          <p>
            The best fix is preventing errors in the first place. Follow these practices:
          </p>

          <h3>Regular Maintenance</h3>
          <ul>
            <li><strong>Clean your machine monthly:</strong> Wipe down rails, rollers, and sensor with dry microfiber cloth</li>
            <li><strong>Replace blades regularly:</strong> Dull blades cause tearing and jams</li>
            <li><strong>Keep mats clean:</strong> Remove debris, lint-roll sticky mats</li>
            <li><strong>Store mats flat:</strong> Warped mats cause feeding errors</li>
          </ul>

          <h3>Software Best Practices</h3>
          <ul>
            <li><strong>Update Design Space:</strong> Always use the latest version</li>
            <li><strong>Update firmware:</strong> Check monthly for machine updates</li>
            <li><strong>Clear cache periodically:</strong> Every few weeks in Settings</li>
            <li><strong>Save projects frequently:</strong> Don't lose work to crashes</li>
          </ul>

          <h3>Connection Tips</h3>
          <ul>
            <li><strong>Use USB for big projects:</strong> More reliable than Bluetooth</li>
            <li><strong>Keep machine close:</strong> 10-15 feet max for Bluetooth</li>
            <li><strong>One device at a time:</strong> Disconnect other devices first</li>
            <li><strong>Disable power saving:</strong> Prevents disconnection during cuts</li>
          </ul>

          <h3>Material Handling</h3>
          <ul>
            <li><strong>Use correct blade:</strong> Match blade to material thickness</li>
            <li><strong>Use correct mat:</strong> LightGrip for paper, StandardGrip for vinyl, StrongGrip for thick materials</li>
            <li><strong>Don't overload mats:</strong> Leave margins around edges</li>
            <li><strong>Test cuts first:</strong> Use small test cut before big projects</li>
          </ul>

          {/* Quick Reference Table */}
          <div className="bg-gray-50 rounded-xl p-6 my-8 not-prose">
            <h3 className="text-xl font-bold text-gray-900 mb-4">📋 Quick Reference: Error Code Categories</h3>
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-2">Code Range</th>
                  <th className="text-left py-2">Category</th>
                  <th className="text-left py-2">First Thing to Try</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100">
                  <td className="py-2 font-mono">1xxx</td>
                  <td className="py-2">Connectivity</td>
                  <td className="py-2">Restart machine & check Bluetooth/USB</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-2 font-mono">2xxx</td>
                  <td className="py-2">Print Then Cut</td>
                  <td className="py-2">Use matte paper, clean sensor, recalibrate</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-2 font-mono">3xxx</td>
                  <td className="py-2">Design Space</td>
                  <td className="py-2">Clear cache, logout/login, try web version</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-2 font-mono">4xxx</td>
                  <td className="py-2">USB Connection</td>
                  <td className="py-2">Try different cable, different port</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-2 font-mono">5xxx</td>
                  <td className="py-2">Material/Size</td>
                  <td className="py-2">Resize design, check material settings</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-2 font-mono">6xxx</td>
                  <td className="py-2">Blade/Tool</td>
                  <td className="py-2">Reseat blade, check correct tool</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-2 font-mono">7xxx</td>
                  <td className="py-2">Carriage</td>
                  <td className="py-2">Turn off, clear obstruction, clean rails</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-2 font-mono">8xxx</td>
                  <td className="py-2">Roller/Mat</td>
                  <td className="py-2">Check mat alignment, clean rollers</td>
                </tr>
                <tr>
                  <td className="py-2 font-mono">9xxx</td>
                  <td className="py-2">Subscription</td>
                  <td className="py-2">Check account status, payment method</td>
                </tr>
              </tbody>
            </table>
          </div>

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

        {/* CTA Box */}
        <div className="bg-[#F5FAF3] rounded-2xl p-6 mt-10">
          <h3 className="text-xl font-bold text-gray-900 mb-3">Need Interactive Help?</h3>
          <p className="text-gray-700 mb-4">
            Our troubleshooting wizard walks you through fixes step-by-step based on your exact issue.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link 
              href="/troubleshoot" 
              className="inline-block bg-[#9CAF88] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#6B7F5E] transition-colors"
            >
              Start Troubleshooting Wizard →
            </Link>
            <Link 
              href="/error-codes" 
              className="inline-block bg-white text-[#9CAF88] border-2 border-[#9CAF88] px-6 py-3 rounded-full font-semibold hover:bg-[#F5FAF3] transition-colors"
            >
              Search Error Codes →
            </Link>
          </div>
        </div>

        {/* Related Articles */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Troubleshooting Guides</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/guides/cricut-bluetooth-not-connecting" className="block p-4 bg-white rounded-xl shadow hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-gray-900">Cricut Bluetooth Not Connecting?</h3>
              <p className="text-gray-600 text-sm mt-1">8 fixes that actually work</p>
            </Link>
            <Link href="/guides/cricut-design-space-not-working" className="block p-4 bg-white rounded-xl shadow hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-gray-900">Design Space Not Working?</h3>
              <p className="text-gray-600 text-sm mt-1">Complete troubleshooting guide</p>
            </Link>
            <Link href="/guides/cricut-not-cutting-vinyl" className="block p-4 bg-white rounded-xl shadow hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-gray-900">Cricut Not Cutting Through Vinyl?</h3>
              <p className="text-gray-600 text-sm mt-1">7 fixes for cutting issues</p>
            </Link>
            <Link href="/guides/print-then-cut-not-lining-up" className="block p-4 bg-white rounded-xl shadow hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-gray-900">Print Then Cut Not Lining Up?</h3>
              <p className="text-gray-600 text-sm mt-1">Calibration and sensor fixes</p>
            </Link>
          </div>
        </section>

      </article>
    </main>
  );
}
