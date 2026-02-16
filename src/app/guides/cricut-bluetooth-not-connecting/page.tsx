import { Metadata } from 'next';
import Link from 'next/link';
import { FAQSchema, HowToSchema } from '@/components/SchemaMarkup';

export const metadata: Metadata = {
  title: 'Cricut Bluetooth Not Connecting? 8 Fixes That Actually Work [2026]',
  description: 'Cricut won\'t connect via Bluetooth? Here\'s exactly how to fix it on Windows, Mac, iPhone, iPad, and Android. Step-by-step solutions that actually work.',
  keywords: 'cricut bluetooth not connecting, cricut won\'t connect, cricut bluetooth problems, cricut not finding machine, design space not connecting',
  openGraph: {
    title: 'Cricut Bluetooth Not Connecting? 8 Fixes That Actually Work',
    description: 'Step-by-step guide to fix Cricut Bluetooth connection issues on any device. Works for Maker, Explore, and Joy.',
    type: 'article',
  },
};

const faqData = [
  {
    question: "Why won't my Cricut connect to Bluetooth?",
    answer: "The most common causes are: Bluetooth being disabled on your device, the Cricut not being paired at the system level (not just in Design Space), the machine being connected to a different device, or interference from other Bluetooth devices. Start by checking that Bluetooth is ON and that your Cricut appears in your device's Bluetooth settings."
  },
  {
    question: "How do I put my Cricut in pairing mode?",
    answer: "Cricut machines are always in pairing mode when turned on — there's no special button to press. Just turn on your Cricut, wait for the light to become solid (not blinking), and then search for it in your device's Bluetooth settings. The machine should appear as 'Cricut Maker', 'Cricut Explore', or similar."
  },
  {
    question: "Why does Design Space say 'No machines found' when Bluetooth is connected?",
    answer: "This usually means your Cricut is paired at the system level but Design Space can't communicate with it. Try: closing and reopening Design Space, forgetting the device in Bluetooth settings and re-pairing, or checking if another device/app is connected to your Cricut. Only one device can connect at a time."
  },
  {
    question: "Can I use USB instead of Bluetooth?",
    answer: "Yes! USB is often more reliable than Bluetooth, especially for large or complex cuts. Use a data-capable USB cable (not a charge-only cable) and connect directly to your computer, avoiding USB hubs. The Cricut Joy is Bluetooth-only, but Maker and Explore machines support both USB and Bluetooth."
  },
  {
    question: "Why does my Cricut keep disconnecting during cuts?",
    answer: "Disconnections during cuts are usually caused by: distance (move closer to your device), interference from other Bluetooth devices, or power-saving settings on your computer. Try switching to USB for long cuts, or disable Bluetooth power saving in your device settings."
  },
  {
    question: "Do I need to pair my Cricut in Windows/Mac settings AND Design Space?",
    answer: "Yes, on computers you need to pair twice: first in your system's Bluetooth settings, then in Design Space. On iOS/Android, Design Space handles the pairing directly, but you still need Bluetooth enabled in your device settings."
  }
];

const howToSteps = [
  { name: "Restart Everything", text: "Turn off your Cricut machine, close Design Space, and restart your computer or device. Turn the Cricut back on and wait for a solid light." },
  { name: "Check Bluetooth is Enabled", text: "Go to your device's Bluetooth settings and make sure Bluetooth is turned ON. On Android, also enable Location permissions for Design Space." },
  { name: "Forget and Re-pair", text: "In your Bluetooth settings, find your Cricut, click 'Forget' or 'Remove', then search for devices again and re-pair." },
  { name: "Close Other Bluetooth Apps", text: "Close any other apps that might be using your Cricut. Only one device can connect at a time." },
  { name: "Move Closer", text: "Keep your Cricut within 10-15 feet of your device. Walls and interference can weaken the signal." },
  { name: "Try USB Instead", text: "If Bluetooth keeps failing, connect via USB cable. It's more reliable for large projects anyway." },
  { name: "Update Firmware", text: "In Design Space, go to Menu → Settings → Update Firmware. Outdated firmware can cause connection issues." },
  { name: "Reinstall Design Space", text: "If nothing else works, uninstall Design Space completely, restart your device, and reinstall from cricut.com/setup." },
];

export default function CricutBluetoothNotConnectingPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#FAF8F5] to-white">
      <FAQSchema faqs={faqData} />
      <HowToSchema 
        name="How to Fix Cricut Bluetooth Connection Problems"
        description="Step-by-step guide to troubleshoot and fix Cricut Bluetooth connectivity issues on any device"
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
          <span className="text-gray-700">Bluetooth Not Connecting</span>
        </nav>

        {/* Hero */}
        <header className="mb-10">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            Cricut Bluetooth Not Connecting? 8 Fixes That Actually Work
          </h1>
          <p className="text-xl text-gray-600 mb-4">
            You've got a project ready to cut, but your Cricut just won't connect. The light is on, Bluetooth is enabled... 
            yet Design Space says "No machines found." Here's exactly how to fix it.
          </p>
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <span>Updated: February 2026</span>
            <span>•</span>
            <span>12 min read</span>
            <span>•</span>
            <span>Works for: Maker, Explore, Joy</span>
          </div>
        </header>

        {/* Quick Fixes Box */}
        <div className="bg-[#F5E6E6] rounded-2xl p-6 mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-3">⚡ Try These First (60 Second Fixes)</h2>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start gap-2">
              <span className="text-[#9CAF88] font-bold">1.</span>
              <span><strong>Turn it off and on again</strong> — seriously. Power cycle both the Cricut AND your device.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#9CAF88] font-bold">2.</span>
              <span><strong>Check the light</strong> — it should be SOLID, not blinking. Blinking = still starting up.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#9CAF88] font-bold">3.</span>
              <span><strong>Close Design Space completely</strong> — not just minimize. Reopen it fresh.</span>
            </li>
          </ul>
        </div>

        {/* Main Content */}
        <div className="prose prose-lg prose-slate max-w-none">
          
          <h2 id="understanding">Why Bluetooth Connections Fail</h2>
          <p>
            Before we dive into fixes, here's why Cricut Bluetooth is notoriously finicky: your Cricut needs to connect 
            at <strong>two levels</strong> — first to your operating system (Windows, Mac, iOS, Android), and then to 
            Design Space itself. If either connection breaks, you get the dreaded "No machines found" error.
          </p>
          <p>
            Common causes include:
          </p>
          <ul>
            <li><strong>Not paired at the system level</strong> — Design Space can't find what your OS doesn't see</li>
            <li><strong>Another device is connected</strong> — Cricut only allows one connection at a time</li>
            <li><strong>Bluetooth interference</strong> — other devices, walls, or distance weakening the signal</li>
            <li><strong>Software glitches</strong> — Design Space or your OS needs a refresh</li>
            <li><strong>Outdated firmware</strong> — old Cricut software causing compatibility issues</li>
          </ul>

          <hr className="my-8" />

          <h2 id="fix-1-restart">Fix #1: The Full Restart (Fixes 50% of Issues)</h2>
          <p>
            <strong>This sounds too simple, but it works half the time.</strong> Bluetooth connections can get "stuck" 
            in a bad state, and a full restart clears that.
          </p>
          
          <h3>The Proper Restart Sequence</h3>
          <ol>
            <li><strong>Close Design Space completely</strong> — on Mac, right-click the dock icon and Quit. On Windows, check Task Manager.</li>
            <li><strong>Turn OFF your Cricut machine</strong> — use the power button, wait for the light to go out</li>
            <li><strong>Turn OFF Bluetooth on your device</strong> — Settings → Bluetooth → toggle OFF</li>
            <li><strong>Wait 30 seconds</strong> — this lets everything fully reset</li>
            <li><strong>Turn Bluetooth back ON</strong></li>
            <li><strong>Turn your Cricut back ON</strong> — wait for SOLID light (not blinking)</li>
            <li><strong>Open Design Space</strong> — try connecting now</li>
          </ol>

          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-6">
            <p className="font-semibold text-yellow-800">💡 Pro Tip</p>
            <p className="text-yellow-700">
              If you're on a computer, restart the whole computer — not just Design Space. 
              Windows and Mac can have Bluetooth services stuck in the background.
            </p>
          </div>

          <hr className="my-8" />

          <h2 id="fix-2-system-pairing">Fix #2: Pair at the System Level (Not Just Design Space)</h2>
          <p>
            This is the #1 mistake people make: they try to connect in Design Space without first pairing the Cricut 
            in their device's Bluetooth settings. <strong>You need to do both.</strong>
          </p>

          <h3>On Windows</h3>
          <ol>
            <li>Click Start → Settings → Devices → Bluetooth & other devices</li>
            <li>Make sure Bluetooth is ON</li>
            <li>Click "Add Bluetooth or other device"</li>
            <li>Select "Bluetooth"</li>
            <li>Wait for your Cricut to appear (may take 30 seconds)</li>
            <li>Click it to pair</li>
            <li>Once paired, open Design Space and select your machine</li>
          </ol>

          <h3>On Mac</h3>
          <ol>
            <li>Click Apple menu → System Preferences → Bluetooth</li>
            <li>Make sure Bluetooth is ON</li>
            <li>Your Cricut should appear in the devices list</li>
            <li>Click "Connect" next to it</li>
            <li>Once connected, open Design Space</li>
          </ol>

          <h3>On iPhone/iPad</h3>
          <ol>
            <li>Go to Settings → Bluetooth</li>
            <li>Make sure Bluetooth is ON</li>
            <li>Your Cricut should appear under "Other Devices"</li>
            <li>Tap to pair (or it may connect automatically)</li>
            <li>Open the Design Space app</li>
          </ol>

          <h3>On Android</h3>
          <ol>
            <li>Go to Settings → Connections → Bluetooth</li>
            <li>Make sure Bluetooth is ON</li>
            <li>Tap "Scan" or "Search for devices"</li>
            <li>Tap your Cricut to pair</li>
            <li><strong>Important:</strong> Also grant Location permission to Design Space (required for Bluetooth on Android)</li>
          </ol>

          <div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-6">
            <p className="font-semibold text-blue-800">📱 Android Users: Enable Location</p>
            <p className="text-blue-700">
              Android requires Location permission for Bluetooth to work properly. Go to Settings → Apps → 
              Design Space → Permissions → enable Location. Without this, Design Space literally cannot use Bluetooth.
            </p>
          </div>

          <hr className="my-8" />

          <h2 id="fix-3-forget-repair">Fix #3: Forget the Device and Re-Pair</h2>
          <p>
            Sometimes the pairing gets corrupted. The fix is to completely remove the Cricut from your device and start fresh.
          </p>

          <h3>How to Forget and Re-Pair</h3>
          <ol>
            <li>Go to your Bluetooth settings</li>
            <li>Find your Cricut in the list of paired devices</li>
            <li>Click the info (i) icon or right-click</li>
            <li>Select "Forget Device" or "Remove Device"</li>
            <li>Turn OFF your Cricut, wait 10 seconds, turn it back ON</li>
            <li>Wait for solid light</li>
            <li>Search for Bluetooth devices again</li>
            <li>Pair as a new device</li>
            <li>Open Design Space and connect</li>
          </ol>
          <p>
            This clears any corrupted pairing data and establishes a fresh connection.
          </p>

          <hr className="my-8" />

          <h2 id="fix-4-one-device">Fix #4: Disconnect Other Devices</h2>
          <p>
            <strong>Cricut machines can only connect to ONE device at a time.</strong> If your phone is connected, 
            your computer can't connect. If your spouse's iPad is connected, nobody else can use it.
          </p>

          <h3>How to Check What's Connected</h3>
          <ul>
            <li>On iOS: Look for the Cricut in Settings → Bluetooth. If it says "Connected," it's using that device.</li>
            <li>On Android: Same — check if Cricut shows as connected in Bluetooth settings.</li>
            <li>On computers: Check Bluetooth device list for connection status.</li>
          </ul>

          <h3>How to Disconnect Other Devices</h3>
          <ol>
            <li>On the other device, go to Bluetooth settings</li>
            <li>Find the Cricut and tap "Disconnect" or forget the device</li>
            <li>Or simply: close Design Space on that device</li>
            <li>Now try connecting from your desired device</li>
          </ol>

          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-6">
            <p className="font-semibold text-yellow-800">👨‍👩‍👧 Multiple Users?</p>
            <p className="text-yellow-700">
              If multiple people in your household use the Cricut, coordinate who's using it. 
              The machine won't automatically disconnect — whoever connected first stays connected 
              until they close Design Space or turn off Bluetooth.
            </p>
          </div>

          <hr className="my-8" />

          <h2 id="fix-5-distance">Fix #5: Move Closer and Reduce Interference</h2>
          <p>
            Bluetooth range is typically 30 feet in open air, but walls, furniture, and other electronics 
            can significantly reduce that. Cricut's Bluetooth seems particularly sensitive to interference.
          </p>

          <h3>Optimal Setup</h3>
          <ul>
            <li>Keep Cricut within <strong>10-15 feet</strong> of your device</li>
            <li>Minimize walls and obstacles between them</li>
            <li>Move away from other Bluetooth devices (speakers, headphones, smart home gadgets)</li>
            <li>Keep away from USB 3.0 hubs — they can interfere with Bluetooth signals</li>
            <li>Avoid placing near microwaves or WiFi routers operating on 2.4GHz</li>
          </ul>

          <p>
            If your crafting space is far from your computer, consider using a <strong>USB connection</strong> 
            instead — it's more reliable anyway.
          </p>

          <hr className="my-8" />

          <h2 id="fix-6-usb">Fix #6: Switch to USB (Most Reliable Option)</h2>
          <p>
            Here's a secret many crafters don't know: <strong>USB is more reliable than Bluetooth for Cricut.</strong> 
            If you're doing large, complex cuts or experiencing frequent disconnections, USB is the answer.
          </p>

          <h3>How to Connect via USB</h3>
          <ol>
            <li>Get a USB data cable (not just a charging cable — it must support data transfer)</li>
            <li>Connect the USB cable directly to your computer (avoid USB hubs)</li>
            <li>The other end goes into your Cricut's USB port</li>
            <li>Open Design Space — it should detect the machine automatically</li>
            <li>You may need to select USB as the connection type</li>
          </ol>

          <h3>Which Cable to Use</h3>
          <ul>
            <li><strong>Maker & Explore:</strong> USB-A to USB-B cable (the printer-style square end)</li>
            <li><strong>Joy:</strong> Bluetooth only — no USB option, unfortunately</li>
          </ul>

          <div className="bg-green-50 border-l-4 border-green-400 p-4 my-6">
            <p className="font-semibold text-green-800">✅ USB Advantages</p>
            <ul className="text-green-700 mt-2 space-y-1">
              <li>• No disconnections during long cuts</li>
              <li>• Faster data transfer for complex designs</li>
              <li>• Works even when Bluetooth is acting up</li>
              <li>• More reliable for firmware updates</li>
            </ul>
          </div>

          <hr className="my-8" />

          <h2 id="fix-7-firmware">Fix #7: Update Cricut Firmware</h2>
          <p>
            Outdated firmware can cause connection issues. Cricut regularly releases updates that fix 
            Bluetooth bugs and improve connectivity.
          </p>

          <h3>How to Update Firmware</h3>
          <ol>
            <li>Connect your Cricut via USB (more reliable for updates)</li>
            <li>Open Design Space on a computer</li>
            <li>Click the menu (☰) → Settings</li>
            <li>Look for "Update Firmware" or "Machine" settings</li>
            <li>If an update is available, click to install</li>
            <li><strong>Do NOT turn off the machine during update</strong></li>
            <li>Wait for the process to complete (can take 5-10 minutes)</li>
          </ol>

          <p>
            After updating, restart both the Cricut and Design Space, then try Bluetooth again.
          </p>

          <hr className="my-8" />

          <h2 id="fix-8-reinstall">Fix #8: Reinstall Design Space</h2>
          <p>
            If nothing else works, the Design Space installation itself may be corrupted. A clean reinstall 
            often fixes persistent connection issues.
          </p>

          <h3>How to Clean Reinstall</h3>
          <ol>
            <li>Close Design Space completely</li>
            <li>Uninstall Design Space:
              <ul>
                <li><strong>Windows:</strong> Settings → Apps → Cricut Design Space → Uninstall</li>
                <li><strong>Mac:</strong> Drag Design Space from Applications to Trash</li>
                <li><strong>iOS/Android:</strong> Long-press the app → Delete/Uninstall</li>
              </ul>
            </li>
            <li>Restart your device</li>
            <li>Go to <strong>cricut.com/setup</strong></li>
            <li>Download and install the latest version</li>
            <li>Log in with your Cricut account</li>
            <li>Try connecting to your machine</li>
          </ol>

          <div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-6">
            <p className="font-semibold text-blue-800">🌐 Try the Web Version</p>
            <p className="text-blue-700">
              While troubleshooting, you can use <strong>design.cricut.com</strong> in a web browser. 
              It works with Bluetooth and can help determine if the issue is with the desktop app specifically.
            </p>
          </div>

          <hr className="my-8" />

          <h2 id="specific-devices">Device-Specific Troubleshooting</h2>

          <h3>Windows-Specific Issues</h3>
          <ul>
            <li><strong>Bluetooth driver outdated:</strong> Go to Device Manager → Bluetooth → right-click your adapter → Update Driver</li>
            <li><strong>Power saving mode:</strong> Device Manager → Bluetooth adapter → Properties → Power Management → uncheck "Allow computer to turn off this device"</li>
            <li><strong>Firewall blocking:</strong> Add Design Space to Windows Firewall exceptions</li>
          </ul>

          <h3>Mac-Specific Issues</h3>
          <ul>
            <li><strong>Bluetooth preferences corrupted:</strong> Delete ~/Library/Preferences/com.apple.Bluetooth.plist and restart</li>
            <li><strong>SMC reset:</strong> For persistent Bluetooth issues, try resetting the SMC (search Apple's guide for your Mac model)</li>
          </ul>

          <h3>iPhone/iPad-Specific Issues</h3>
          <ul>
            <li><strong>Low Power Mode:</strong> Turn off Low Power Mode — it can affect Bluetooth</li>
            <li><strong>Reset Network Settings:</strong> Settings → General → Transfer or Reset → Reset → Reset Network Settings (this resets all Bluetooth pairings)</li>
          </ul>

          <h3>Android-Specific Issues</h3>
          <ul>
            <li><strong>Battery optimization:</strong> Settings → Apps → Design Space → Battery → Don't optimize</li>
            <li><strong>Location permission:</strong> Must be enabled for Bluetooth to work — this is an Android requirement</li>
            <li><strong>Clear app cache:</strong> Settings → Apps → Design Space → Storage → Clear Cache</li>
          </ul>

          <hr className="my-8" />

          <h2 id="still-not-working">Still Not Working?</h2>
          <p>
            If you've tried all eight fixes and Bluetooth still won't connect:
          </p>
          <ul>
            <li><strong>Test on another device</strong> — Try connecting from a different phone or computer. If it works, the problem is with your original device.</li>
            <li><strong>Try a different Cricut</strong> — If you have access to another machine, test if that connects. This helps identify if it's your machine or your device.</li>
            <li><strong>Check Cricut community forums</strong> — Sometimes there are known issues after app updates. Others may have found workarounds.</li>
            <li><strong>Contact Cricut Support</strong> — If nothing works, there may be a hardware issue with your machine's Bluetooth module. Visit help.cricut.com.</li>
          </ul>

          <div className="bg-[#F5FAF3] rounded-2xl p-6 my-8">
            <h3 className="text-xl font-bold text-gray-900 mb-3">Need More Help?</h3>
            <p className="text-gray-700 mb-4">
              Our interactive troubleshooting wizard walks you through device-specific steps based on your exact setup.
            </p>
            <Link 
              href="/troubleshoot?issue=bluetooth" 
              className="inline-block bg-[#9CAF88] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#6B7F5E] transition-colors"
            >
              Start Troubleshooting Wizard →
            </Link>
          </div>

          <hr className="my-8" />

          <h2 id="prevention">Preventing Future Connection Issues</h2>
          <p>
            Once you get connected, here's how to keep it working:
          </p>
          <ul>
            <li><strong>Keep Design Space updated</strong> — Updates often fix Bluetooth bugs</li>
            <li><strong>Update device OS</strong> — Operating system updates include Bluetooth improvements</li>
            <li><strong>Use USB for big projects</strong> — Avoid risking disconnection during complex cuts</li>
            <li><strong>Close Design Space when done</strong> — Don't leave it running in the background</li>
            <li><strong>Keep Cricut firmware current</strong> — Check for updates monthly</li>
            <li><strong>Maintain consistent setup</strong> — Keep Cricut in the same spot, same distance from your device</li>
          </ul>

          <h3>USB vs Bluetooth: When to Use Each</h3>
          <table className="w-full my-6">
            <thead>
              <tr>
                <th className="text-left p-2 border-b">Use Bluetooth When...</th>
                <th className="text-left p-2 border-b">Use USB When...</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-2 border-b">Doing quick, simple cuts</td>
                <td className="p-2 border-b">Cutting complex designs</td>
              </tr>
              <tr>
                <td className="p-2 border-b">Using phone/tablet</td>
                <td className="p-2 border-b">Doing long projects (30+ min)</td>
              </tr>
              <tr>
                <td className="p-2 border-b">Cricut is far from computer</td>
                <td className="p-2 border-b">Updating firmware</td>
              </tr>
              <tr>
                <td className="p-2 border-b">Casual crafting</td>
                <td className="p-2 border-b">Running a craft business</td>
              </tr>
            </tbody>
          </table>

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
            <Link href="/guides/cricut-not-cutting-vinyl" className="block p-4 bg-white rounded-xl shadow hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-gray-900">Cricut Not Cutting Through Vinyl?</h3>
              <p className="text-gray-600 text-sm mt-1">7 fixes for cutting issues</p>
            </Link>
            <Link href="/guides/design-space-slow" className="block p-4 bg-white rounded-xl shadow hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-gray-900">Design Space Running Slow?</h3>
              <p className="text-gray-600 text-sm mt-1">Speed up your Cricut software</p>
            </Link>
            <Link href="/error-codes" className="block p-4 bg-white rounded-xl shadow hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-gray-900">Cricut Error Codes Explained</h3>
              <p className="text-gray-600 text-sm mt-1">Look up any error code</p>
            </Link>
            <Link href="/troubleshoot" className="block p-4 bg-white rounded-xl shadow hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-gray-900">Interactive Troubleshooting Wizard</h3>
              <p className="text-gray-600 text-sm mt-1">Step-by-step diagnosis for any problem</p>
            </Link>
          </div>
        </section>

      </article>
    </main>
  );
}
