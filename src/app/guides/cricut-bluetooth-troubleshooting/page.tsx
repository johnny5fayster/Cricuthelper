import { Metadata } from 'next';
import Link from 'next/link';
import { FAQSchema, HowToSchema } from '@/components/SchemaMarkup';

export const metadata: Metadata = {
  title: 'Cricut Bluetooth Not Working? Complete Troubleshooting Guide [2026]',
  description: 'Fix Cricut Bluetooth connection issues on Maker, Explore Air, Joy, and Joy Xtra. Step-by-step solutions for Windows, Mac, iOS, and Android.',
  keywords: 'cricut bluetooth not working, cricut won\'t connect bluetooth, cricut joy bluetooth pairing, cricut bluetooth troubleshooting, cricut maker bluetooth issues, cricut explore air bluetooth not connecting, cricut joy xtra bluetooth',
  openGraph: {
    title: 'Cricut Bluetooth Not Working? Complete Troubleshooting Guide',
    description: 'Fix Cricut Bluetooth connection issues on every model and device. Real fixes, no fluff.',
    type: 'article',
  },
};

const faqData = [
  {
    question: "Why does my Cricut connect to my phone but not my computer?",
    answer: "Usually a driver issue on the computer. Update Bluetooth drivers and check that Bluetooth power management isn't putting the adapter to sleep. In Device Manager → Bluetooth → right-click your adapter → Properties → Power Management → uncheck 'Allow the computer to turn off this device to save power.'"
  },
  {
    question: "Can I use a USB Bluetooth adapter/dongle with my computer?",
    answer: "Yes! If your built-in Bluetooth is flaky, a $10–15 USB Bluetooth 5.0 dongle (like TP-Link UB500) can solve everything. Plug it in, disable the built-in Bluetooth in Device Manager, and pair your Cricut to the dongle."
  },
  {
    question: "Why does my Cricut disconnect mid-cut?",
    answer: "Three common causes: (1) Bluetooth power management turning off the adapter (fix in Device Manager), (2) interference from Wi-Fi or other devices, (3) battery optimization on mobile killing Design Space in the background."
  },
  {
    question: "My Cricut shows as paired but Design Space can't find it?",
    answer: "Design Space uses its own Bluetooth discovery. Try: close Design Space completely → unpair the Cricut from your device → reopen Design Space → let it find and pair the machine itself."
  },
  {
    question: "Does Cricut work with Bluetooth 5.0 / 5.1 / 5.2?",
    answer: "Yes. All Cricut machines work with Bluetooth 4.0 and above. Newer Bluetooth versions are backward compatible."
  },
];

const howToSteps = [
  { name: "Power Cycle Your Cricut", text: "Turn off your Cricut, unplug the power cord, wait 30 seconds, plug back in, and turn on. Wait for the solid white light before proceeding." },
  { name: "Toggle Bluetooth on Your Device", text: "Turn Bluetooth off and back on from your phone, tablet, or computer settings. This resets the Bluetooth stack." },
  { name: "Forget and Re-Pair", text: "Go to your device's Bluetooth settings, find your Cricut, and select 'Forget' or 'Remove'. Then open Design Space and let it discover the machine fresh." },
  { name: "Update Design Space", text: "Check for Design Space updates — outdated versions are a top cause of connection failures. Uninstall and reinstall if needed." },
  { name: "Check for Firmware Updates", text: "Connect via USB if possible, open Design Space, go to Menu → Settings → Machine, and install any available firmware updates." },
  { name: "Reduce Bluetooth Interference", text: "Move your Cricut at least 3 feet from your Wi-Fi router. Disconnect non-essential Bluetooth devices. Move away from USB 3.0 hubs which emit 2.4GHz interference." },
  { name: "Try USB as Fallback", text: "If you need to cut now, connect via USB cable (Maker and Explore models). Joy and Joy Xtra are Bluetooth-only, so you must resolve the Bluetooth issue for those models." },
];

export default function CricutBluetoothTroubleshootingPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-sage-50 to-white">
      <FAQSchema faqs={faqData} />
      <HowToSchema 
        name="How to Fix Cricut Bluetooth Connection Problems"
        description="Step-by-step guide to troubleshoot and fix Bluetooth connectivity issues on all Cricut machines including Maker, Explore Air, Joy, and Joy Xtra."
        steps={howToSteps}
        totalTime="PT15M"
      />
      
      {/* Hero Section */}
      <section className="relative py-16 px-4 bg-gradient-to-r from-dusty-rose-500 to-dusty-rose-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block px-4 py-1 bg-white/20 rounded-full text-sm mb-4">
            Troubleshooting Guide
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Cricut Bluetooth Not Working? The Complete Fix Guide
          </h1>
          <p className="text-xl text-white/90 mb-6">
            Real fixes for every Cricut model and every device — no fluff
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <span className="bg-white/20 px-3 py-1 rounded-full">⏱️ 15 min read</span>
            <span className="bg-white/20 px-3 py-1 rounded-full">🔧 All Cricut models</span>
            <span className="bg-white/20 px-3 py-1 rounded-full">📅 Updated Feb 2026</span>
          </div>
        </div>
      </section>

      {/* Quick Fix Box */}
      <section className="max-w-4xl mx-auto px-4 -mt-8 relative z-10">
        <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-sage-500">
          <h2 className="font-bold text-lg text-sage-700 mb-2">⚡ Quick-Fix Checklist</h2>
          <p className="text-gray-700 mb-3">
            Try these first — they solve <strong>80% of Bluetooth problems</strong> in under 5 minutes:
          </p>
          <ul className="space-y-2 text-gray-700">
            <li>✅ <strong>Power cycle your Cricut</strong> — turn off, unplug 30 seconds, plug back in</li>
            <li>✅ <strong>Toggle Bluetooth off/on</strong> on your phone, tablet, or computer</li>
            <li>✅ <strong>Move within 10–15 feet</strong> of your machine (closer = better)</li>
            <li>✅ <strong>Close and reopen Design Space</strong> completely (don&apos;t just minimize)</li>
            <li>✅ <strong>&quot;Forget&quot; your Cricut</strong> in Bluetooth settings, then re-pair</li>
            <li>✅ <strong>Restart your device</strong> completely</li>
            <li>✅ <strong>Check for Design Space updates</strong></li>
            <li>✅ <strong>Try USB instead</strong> — if you need to cut NOW, use the USB cable</li>
          </ul>
        </div>
      </section>

      {/* Table of Contents */}
      <section className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-sage-50 rounded-xl p-6">
          <h2 className="font-bold text-xl mb-4 text-sage-800">📋 What&apos;s In This Guide</h2>
          <ul className="grid md:grid-cols-2 gap-2">
            <li><a href="#symptoms" className="text-sage-600 hover:text-sage-800">→ Common Bluetooth Symptoms</a></li>
            <li><a href="#by-model" className="text-sage-600 hover:text-sage-800">→ Fixes by Cricut Model</a></li>
            <li><a href="#by-os" className="text-sage-600 hover:text-sage-800">→ Fixes by Operating System</a></li>
            <li><a href="#interference" className="text-sage-600 hover:text-sage-800">→ Bluetooth Interference</a></li>
            <li><a href="#usb-fallback" className="text-sage-600 hover:text-sage-800">→ USB Fallback Options</a></li>
            <li><a href="#firmware" className="text-sage-600 hover:text-sage-800">→ Firmware Updates</a></li>
            <li><a href="#contact-support" className="text-sage-600 hover:text-sage-800">→ When to Contact Support</a></li>
            <li><a href="#prevention" className="text-sage-600 hover:text-sage-800">→ Preventing Future Problems</a></li>
          </ul>
        </div>
      </section>

      {/* Main Content */}
      <article className="max-w-4xl mx-auto px-4 py-8 prose prose-lg">

        {/* Common Symptoms */}
        <section id="symptoms">
          <h2>Common Bluetooth Symptoms</h2>
          <p>Before diving in, identify what you&apos;re seeing:</p>

          <div className="overflow-x-auto my-6">
            <table className="min-w-full bg-white border rounded-lg">
              <thead className="bg-sage-100">
                <tr>
                  <th className="px-4 py-3 text-left font-bold text-sage-800">Symptom</th>
                  <th className="px-4 py-3 text-left font-bold text-sage-800">Most Likely Cause</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                <tr>
                  <td className="px-4 py-3">Machine doesn&apos;t appear in Bluetooth list</td>
                  <td className="px-4 py-3">Machine not in pairing mode, or Bluetooth off on device</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3">Pairs but immediately disconnects</td>
                  <td className="px-4 py-3">Windows 11 Bluetooth driver issue, or interference</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">Connects but Design Space says &quot;No machine found&quot;</td>
                  <td className="px-4 py-3">Design Space needs restart or update</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3">Was working yesterday, now won&apos;t connect</td>
                  <td className="px-4 py-3">Firmware or app update broke pairing</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">Connects to phone but not computer (or vice versa)</td>
                  <td className="px-4 py-3">Device-specific Bluetooth settings issue</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3">&quot;Pairing unsuccessful&quot; error</td>
                  <td className="px-4 py-3">Too many saved Bluetooth devices, or distance</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Fixes by Model */}
        <section id="by-model">
          <h2>Fixes by Cricut Model</h2>

          <h3>Cricut Maker / Maker 3</h3>
          <p>The Maker series has built-in Bluetooth (no adapter needed).</p>
          <div className="space-y-4 my-6 not-prose">
            <div className="p-4 bg-white rounded-lg shadow-sm border">
              <h4 className="font-bold text-gray-900">1. Check the power light</h4>
              <p className="text-gray-600">Must be solid white (not flashing). Flashing means it&apos;s not fully booted.</p>
            </div>
            <div className="p-4 bg-white rounded-lg shadow-sm border">
              <h4 className="font-bold text-gray-900">2. Power cycle properly</h4>
              <p className="text-gray-600">Turn off with the power button, unplug the power cord, wait 30 seconds, plug back in, turn on. Wait for the solid white light.</p>
            </div>
            <div className="p-4 bg-white rounded-lg shadow-sm border">
              <h4 className="font-bold text-gray-900">3. Clear old pairings</h4>
              <p className="text-gray-600">The Maker can only hold a few paired devices. If you&apos;ve paired it with multiple phones/computers, try forgetting it from ALL devices, then pair fresh with just one.</p>
            </div>
            <div className="p-4 bg-white rounded-lg shadow-sm border">
              <h4 className="font-bold text-gray-900">4. Firmware update</h4>
              <p className="text-gray-600">Connect via USB first, open Design Space, and check for firmware updates (Menu → Settings → Machine). Outdated firmware is a top cause of dropped connections.</p>
            </div>
            <div className="p-4 bg-white rounded-lg shadow-sm border">
              <h4 className="font-bold text-gray-900">5. USB fallback</h4>
              <p className="text-gray-600">Maker 3 uses USB-C; original Maker uses Micro-USB. Both are more stable than Bluetooth for large cuts.</p>
            </div>
          </div>

          <h3>Cricut Explore Air 2 / Explore 3</h3>
          <p>The Explore Air 2 has built-in Bluetooth. The older Explore (non-Air) requires a USB Bluetooth adapter.</p>
          <div className="space-y-4 my-6 not-prose">
            <div className="p-4 bg-white rounded-lg shadow-sm border">
              <h4 className="font-bold text-gray-900">1. Explore Air 2 pairing trick</h4>
              <p className="text-gray-600">Turn the machine on, wait 10 seconds, THEN look for it in Bluetooth settings. It broadcasts as &quot;Cricut Explore Air 2-XXXX&quot; (last 4 digits vary).</p>
            </div>
            <div className="p-4 bg-white rounded-lg shadow-sm border">
              <h4 className="font-bold text-gray-900">2. Explore 3 pairing</h4>
              <p className="text-gray-600">Same as Maker 3. Built-in Bluetooth, should appear automatically.</p>
            </div>
            <div className="p-4 bg-white rounded-lg shadow-sm border">
              <h4 className="font-bold text-gray-900">3. One device at a time</h4>
              <p className="text-gray-600">Cricut machines only talk to ONE device at a time. Disconnect from other devices first.</p>
            </div>
            <div className="p-4 bg-white rounded-lg shadow-sm border">
              <h4 className="font-bold text-gray-900">4. The classic Explore Air 2 freeze</h4>
              <p className="text-gray-600">If the machine becomes unresponsive, hold the power button for 10 seconds to force a shutdown, then restart.</p>
            </div>
          </div>

          <h3>Cricut Joy / Joy Xtra</h3>
          <div className="bg-dusty-rose-50 p-6 rounded-xl my-6 not-prose">
            <h4 className="font-bold text-dusty-rose-800 mb-3">⚠️ Critical: Bluetooth Only</h4>
            <p className="text-dusty-rose-900">
              Joy models are Bluetooth-ONLY (no USB data port). The USB-C port is for charging only. 
              If Bluetooth doesn&apos;t work, you can&apos;t use them — making these fixes essential.
            </p>
          </div>
          <div className="space-y-4 my-6 not-prose">
            <div className="p-4 bg-white rounded-lg shadow-sm border">
              <h4 className="font-bold text-gray-900">1. Joy pairing mode</h4>
              <p className="text-gray-600">The Joy enters pairing mode automatically when powered on. The light should be solid white.</p>
            </div>
            <div className="p-4 bg-white rounded-lg shadow-sm border">
              <h4 className="font-bold text-gray-900">2. Joy Xtra requires Bluetooth 4.0 (BLE)</h4>
              <p className="text-gray-600">
                Older computers with Bluetooth 3.0 won&apos;t see it at all. Check your version: 
                <strong> Windows:</strong> Device Manager → Bluetooth → right-click adapter → Properties → Advanced tab. 
                <strong> Mac:</strong> Apple menu → About This Mac → System Report → Bluetooth → LMP Version (0x9 = BT 5.0, 0x6 = BT 4.0).
              </p>
            </div>
            <div className="p-4 bg-white rounded-lg shadow-sm border">
              <h4 className="font-bold text-gray-900">3. Joy won&apos;t pair to Windows 11</h4>
              <p className="text-gray-600">
                This is a known widespread issue. Open Settings → Bluetooth & devices → Add device → choose &quot;Bluetooth&quot; (not &quot;Everything else&quot;). 
                If the Joy doesn&apos;t appear, check Device Manager → Bluetooth for yellow warning icons. 
                Also try: Settings → Privacy & Security → Bluetooth → make sure apps can access Bluetooth.
              </p>
            </div>
            <div className="p-4 bg-white rounded-lg shadow-sm border">
              <h4 className="font-bold text-gray-900">4. Joy Xtra disappearing from Design Space</h4>
              <p className="text-gray-600">
                After a Design Space update, Joy Xtra connections sometimes break. Uninstall Design Space completely, 
                restart your device, reinstall from design.cricut.com.
              </p>
            </div>
            <div className="p-4 bg-white rounded-lg shadow-sm border">
              <h4 className="font-bold text-gray-900">5. &quot;Already paired to another device&quot; ghost pairing</h4>
              <p className="text-gray-600">
                If your Joy was previously paired to another phone/tablet, it may refuse new connections. 
                Power cycle the Joy (off, wait 30 seconds, on) to clear the active connection.
              </p>
            </div>
          </div>
        </section>

        {/* Fixes by OS */}
        <section id="by-os">
          <h2>Fixes by Operating System</h2>

          <h3>Windows 10 & 11</h3>
          <p>Windows is the #1 source of Cricut Bluetooth problems. Here&apos;s what actually works:</p>
          <div className="space-y-4 my-6 not-prose">
            <div className="p-4 bg-white rounded-lg shadow-sm border">
              <h4 className="font-bold text-gray-900">1. Run the Bluetooth troubleshooter</h4>
              <p className="text-gray-600">Settings → System → Troubleshoot → Other troubleshooters → Bluetooth → Run</p>
            </div>
            <div className="p-4 bg-white rounded-lg shadow-sm border">
              <h4 className="font-bold text-gray-900">2. Update your Bluetooth driver</h4>
              <p className="text-gray-600">Device Manager → Bluetooth → right-click your adapter → Update driver → Search automatically. If no update found, visit your laptop manufacturer&apos;s website.</p>
            </div>
            <div className="p-4 bg-white rounded-lg shadow-sm border border-l-4 border-l-sage-500">
              <h4 className="font-bold text-gray-900">3. Disable Bluetooth power management (the hidden fix!)</h4>
              <p className="text-gray-600">
                Device Manager → Bluetooth → right-click your adapter → Properties → Power Management → 
                <strong> UNCHECK &quot;Allow the computer to turn off this device to save power.&quot;</strong> This alone 
                fixes intermittent disconnections for a huge number of users.
              </p>
            </div>
            <div className="p-4 bg-white rounded-lg shadow-sm border">
              <h4 className="font-bold text-gray-900">4. Windows 11: Reset Bluetooth stack</h4>
              <p className="text-gray-600">
                Open Services (Win+R → services.msc) → Find &quot;Bluetooth Support Service&quot; → Right-click → Restart → Try pairing again.
              </p>
            </div>
            <div className="p-4 bg-white rounded-lg shadow-sm border">
              <h4 className="font-bold text-gray-900">5. Remove ghost devices</h4>
              <p className="text-gray-600">Device Manager → View → Show hidden devices → under Bluetooth, remove any grayed-out Cricut entries, then re-pair.</p>
            </div>
            <div className="p-4 bg-white rounded-lg shadow-sm border">
              <h4 className="font-bold text-gray-900">6. Firewall/antivirus interference</h4>
              <p className="text-gray-600">Norton, McAfee, and Kaspersky are known to block Design Space&apos;s Bluetooth communication. Temporarily disable your antivirus and test. If that fixes it, add Design Space to your exceptions list.</p>
            </div>
          </div>

          <h3>macOS</h3>
          <p>Macs generally work well with Cricut Bluetooth, but here are common gotchas:</p>
          <div className="space-y-4 my-6 not-prose">
            <div className="p-4 bg-white rounded-lg shadow-sm border">
              <h4 className="font-bold text-gray-900">1. macOS Sonoma / Sequoia Bluetooth permissions</h4>
              <p className="text-gray-600">Make sure Design Space has Bluetooth access: System Settings → Privacy & Security → Bluetooth → toggle on Design Space.</p>
            </div>
            <div className="p-4 bg-white rounded-lg shadow-sm border">
              <h4 className="font-bold text-gray-900">2. Reset Bluetooth module (nuclear option)</h4>
              <p className="text-gray-600">Hold Shift + Option and click the Bluetooth icon in the menu bar → Debug → Reset the Bluetooth module. On newer macOS, use Terminal: <code>sudo pkill bluetoothd</code></p>
            </div>
            <div className="p-4 bg-white rounded-lg shadow-sm border">
              <h4 className="font-bold text-gray-900">3. Remove and re-pair</h4>
              <p className="text-gray-600">System Settings → Bluetooth → hover over your Cricut → click the X to remove → re-pair.</p>
            </div>
            <div className="p-4 bg-white rounded-lg shadow-sm border">
              <h4 className="font-bold text-gray-900">4. Close other Bluetooth apps</h4>
              <p className="text-gray-600">AirPods, Apple Watch, and other BLE devices can crowd the Bluetooth stack. Disconnect non-essential Bluetooth devices while using your Cricut.</p>
            </div>
          </div>

          <h3>iOS (iPhone / iPad)</h3>
          <div className="space-y-4 my-6 not-prose">
            <div className="p-4 bg-white rounded-lg shadow-sm border border-l-4 border-l-sage-500">
              <h4 className="font-bold text-gray-900">1. Pair through Design Space, NOT Settings</h4>
              <p className="text-gray-600">On iOS, do NOT pair the Cricut in the main Bluetooth settings. Open Design Space → it will find the machine automatically. If you paired it in Settings, forget it there first.</p>
            </div>
            <div className="p-4 bg-white rounded-lg shadow-sm border">
              <h4 className="font-bold text-gray-900">2. Location Services must be on</h4>
              <p className="text-gray-600">iOS requires Location Services for Bluetooth scanning. Settings → Privacy & Security → Location Services → ON, and Design Space → While Using the App.</p>
            </div>
            <div className="p-4 bg-white rounded-lg shadow-sm border">
              <h4 className="font-bold text-gray-900">3. Background App Refresh</h4>
              <p className="text-gray-600">Settings → General → Background App Refresh → make sure Design Space is enabled.</p>
            </div>
            <div className="p-4 bg-white rounded-lg shadow-sm border">
              <h4 className="font-bold text-gray-900">4. iOS 17+ Bluetooth changes</h4>
              <p className="text-gray-600">If you updated iOS recently and lost your Cricut connection: Settings → Design Space → toggle Bluetooth OFF then ON.</p>
            </div>
            <div className="p-4 bg-white rounded-lg shadow-sm border">
              <h4 className="font-bold text-gray-900">5. iPhone 15/16 Pro interference</h4>
              <p className="text-gray-600">Ultra Wideband (UWB) on newer iPhones can cause BLE interference. Try: Settings → General → AirDrop & Handoff → turn off &quot;Bringing Devices Together.&quot;</p>
            </div>
          </div>

          <h3>Android</h3>
          <div className="space-y-4 my-6 not-prose">
            <div className="p-4 bg-white rounded-lg shadow-sm border border-l-4 border-l-sage-500">
              <h4 className="font-bold text-gray-900">1. Pair through Design Space, not Android settings</h4>
              <p className="text-gray-600">Don&apos;t pair in Android&apos;s Bluetooth settings. Let Design Space find the machine.</p>
            </div>
            <div className="p-4 bg-white rounded-lg shadow-sm border">
              <h4 className="font-bold text-gray-900">2. Grant ALL permissions</h4>
              <p className="text-gray-600">Android 12+ requires Location AND Nearby Devices permissions for Bluetooth. Go to Settings → Apps → Design Space → Permissions → enable both.</p>
            </div>
            <div className="p-4 bg-white rounded-lg shadow-sm border">
              <h4 className="font-bold text-gray-900">3. Disable battery optimization</h4>
              <p className="text-gray-600">Settings → Apps → Design Space → Battery → Unrestricted. Battery saver kills the Bluetooth connection mid-cut.</p>
            </div>
            <div className="p-4 bg-white rounded-lg shadow-sm border">
              <h4 className="font-bold text-gray-900">4. Samsung-specific fix</h4>
              <p className="text-gray-600">On Samsung Galaxy devices: Settings → Connections → Bluetooth → Advanced → toggle OFF &quot;Bluetooth control history&quot; and clear the Bluetooth cache.</p>
            </div>
            <div className="p-4 bg-white rounded-lg shadow-sm border">
              <h4 className="font-bold text-gray-900">5. Clear Design Space cache</h4>
              <p className="text-gray-600">Settings → Apps → Design Space → Storage → Clear Cache (not Clear Data — that logs you out).</p>
            </div>
          </div>
        </section>

        {/* Bluetooth Interference */}
        <section id="interference">
          <h2>Bluetooth Interference: The Overlooked Problem</h2>
          <p>
            Your Cricut uses Bluetooth Low Energy (BLE), which operates on the 2.4GHz band — the same 
            as Wi-Fi, baby monitors, wireless keyboards, and microwaves.
          </p>
          <div className="bg-dusty-rose-50 p-6 rounded-xl my-6 not-prose">
            <h3 className="font-bold text-dusty-rose-800 mb-3">📡 Reduce Interference</h3>
            <ul className="space-y-2 text-dusty-rose-900">
              <li>• <strong>Move your Cricut away from your Wi-Fi router</strong> (at least 3 feet)</li>
              <li>• <strong>Don&apos;t use the microwave while cutting</strong> (seriously — 2.4GHz interference)</li>
              <li>• <strong>Reduce active Bluetooth devices</strong> near your crafting area</li>
              <li>• <strong>USB 3.0 hubs and cables emit 2.4GHz interference</strong> — move them away</li>
              <li>• <strong>Try a different room</strong> if you&apos;re in an apartment with many Wi-Fi networks</li>
            </ul>
          </div>
        </section>

        {/* USB Fallback */}
        <section id="usb-fallback">
          <h2>The USB Fallback (When You Need to Cut NOW)</h2>
          <p>If Bluetooth is giving you grief and you have a deadline:</p>
          <div className="overflow-x-auto my-6">
            <table className="min-w-full bg-white border rounded-lg">
              <thead className="bg-sage-100">
                <tr>
                  <th className="px-4 py-3 text-left font-bold text-sage-800">Machine</th>
                  <th className="px-4 py-3 text-left font-bold text-sage-800">USB Port</th>
                  <th className="px-4 py-3 text-left font-bold text-sage-800">Cable Needed</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                <tr>
                  <td className="px-4 py-3">Maker 3</td>
                  <td className="px-4 py-3">USB-C</td>
                  <td className="px-4 py-3">USB-A to USB-C</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3">Maker</td>
                  <td className="px-4 py-3">Micro-USB</td>
                  <td className="px-4 py-3">USB-A to Micro-USB</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">Explore 3</td>
                  <td className="px-4 py-3">USB-C</td>
                  <td className="px-4 py-3">USB-A to USB-C</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3">Explore Air 2</td>
                  <td className="px-4 py-3">Micro-USB</td>
                  <td className="px-4 py-3">USB-A to Micro-USB</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-semibold">Joy</td>
                  <td className="px-4 py-3 text-red-600 font-bold">❌ None</td>
                  <td className="px-4 py-3">Bluetooth only</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3 font-semibold">Joy Xtra</td>
                  <td className="px-4 py-3 text-red-600 font-bold">❌ None</td>
                  <td className="px-4 py-3">Bluetooth only</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-6">
            <p className="font-bold text-yellow-800">⚠️ Important</p>
            <p className="text-yellow-900">
              Joy and Joy Xtra have no USB data connection. The USB-C port is for charging only. 
              If Bluetooth doesn&apos;t work on these models, you MUST fix the Bluetooth issue — there&apos;s no workaround.
            </p>
          </div>
        </section>

        {/* Firmware Updates */}
        <section id="firmware">
          <h2>Firmware Updates: How and Why</h2>
          <p>Outdated firmware is behind many &quot;it was working fine yesterday&quot; stories. To update:</p>
          <div className="space-y-4 my-6 not-prose">
            {[
              "Connect your Cricut via Bluetooth or USB",
              "Open Design Space",
              "Click the hamburger menu (☰) → Settings",
              "Select your machine",
              "If an update is available, you'll see an \"Update\" button",
              "Do not turn off your machine during the update — this can brick the firmware"
            ].map((step, index) => (
              <div key={index} className="flex gap-4 p-4 bg-white rounded-lg shadow-sm border">
                <div className="flex-shrink-0 w-10 h-10 bg-sage-500 text-white rounded-full flex items-center justify-center font-bold">
                  {index + 1}
                </div>
                <div>
                  <p className="text-gray-600">{step}</p>
                </div>
              </div>
            ))}
          </div>
          <p>
            If a firmware update <em>caused</em> your Bluetooth issues (it happens), contact{' '}
            <a href="https://help.cricut.com" target="_blank" rel="noopener noreferrer">Cricut Support</a> — 
            they can sometimes push a rollback.
          </p>
        </section>

        {/* When to Contact Support */}
        <section id="contact-support">
          <h2>When to Contact Cricut Support</h2>
          <p>You&apos;ve tried everything above and it still doesn&apos;t work. Here&apos;s when it&apos;s time to call in the pros:</p>
          <div className="space-y-4 my-6 not-prose">
            <div className="p-4 bg-red-50 rounded-lg border border-red-200">
              <h4 className="font-bold text-red-800">Machine is less than 1 year old</h4>
              <p className="text-red-700 mt-1">It&apos;s under warranty. Don&apos;t suffer — contact support.</p>
            </div>
            <div className="p-4 bg-red-50 rounded-lg border border-red-200">
              <h4 className="font-bold text-red-800">Bluetooth broke after a firmware update</h4>
              <p className="text-red-700 mt-1">This is Cricut&apos;s problem to fix.</p>
            </div>
            <div className="p-4 bg-red-50 rounded-lg border border-red-200">
              <h4 className="font-bold text-red-800">Abnormal power light behavior</h4>
              <p className="text-red-700 mt-1">Flashing patterns or red light could mean hardware failure.</p>
            </div>
            <div className="p-4 bg-red-50 rounded-lg border border-red-200">
              <h4 className="font-bold text-red-800">3+ devices can&apos;t see the machine</h4>
              <p className="text-red-700 mt-1">Likely a hardware Bluetooth module failure.</p>
            </div>
          </div>
          <div className="bg-sage-50 p-6 rounded-xl my-6 not-prose">
            <h3 className="font-bold text-sage-800 mb-3">📞 How to Reach Cricut Support</h3>
            <ul className="space-y-2 text-sage-900">
              <li>• <strong>Chat:</strong> <a href="https://help.cricut.com" target="_blank" rel="noopener noreferrer" className="text-sage-600 hover:text-sage-800 underline">help.cricut.com</a> (fastest)</li>
              <li>• <strong>Phone:</strong> 1-877-727-4288 (Mon–Fri, 6am–8pm MT; Sat 8am–5pm MT)</li>
              <li>• <strong>Have ready:</strong> Machine model, serial number (on the back), Design Space version, device and OS version</li>
            </ul>
          </div>
        </section>

        {/* Prevention */}
        <section id="prevention">
          <h2>Preventing Future Bluetooth Problems</h2>
          <p>A few habits that keep connections reliable:</p>
          <div className="space-y-4 my-6 not-prose">
            {[
              { title: "Keep Design Space updated", desc: "Enable auto-updates if available" },
              { title: "Accept firmware updates", desc: "They often include Bluetooth fixes" },
              { title: "Don't pair to more than 2–3 devices", desc: "Too many pairings causes confusion" },
              { title: "Power cycle your Cricut weekly", desc: "If you use it often — clears connection cobwebs" },
              { title: "Keep your Cricut within 10 feet", desc: "Of your device during use" },
              { title: "Dedicate a device", desc: "One tablet or computer that's always your \"Cricut machine\"" },
            ].map((tip, index) => (
              <div key={index} className="flex gap-4 p-4 bg-white rounded-lg shadow-sm border">
                <div className="flex-shrink-0 w-10 h-10 bg-sage-500 text-white rounded-full flex items-center justify-center font-bold">
                  {index + 1}
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">{tip.title}</h4>
                  <p className="text-gray-600">{tip.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="my-12">
          <h2>Frequently Asked Questions</h2>
          <div className="space-y-4 not-prose">
            {faqData.map((faq, index) => (
              <div key={index} className="bg-white border rounded-lg p-4">
                <h3 className="font-bold text-gray-900 mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Related Guides */}
        <section className="my-12 not-prose">
          <h2 className="text-2xl font-bold mb-6">Related Guides</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/guides/cricut-bluetooth-not-connecting" className="block p-4 bg-white border rounded-lg hover:shadow-md transition">
              <h3 className="font-bold text-sage-700">Cricut Bluetooth Not Connecting? 8 Quick Fixes</h3>
              <p className="text-gray-600 text-sm">Quick solutions for common connection issues</p>
            </Link>
            <Link href="/guides/cricut-design-space-not-working" className="block p-4 bg-white border rounded-lg hover:shadow-md transition">
              <h3 className="font-bold text-sage-700">Design Space Not Working? 11 Fixes</h3>
              <p className="text-gray-600 text-sm">Fix loading, crashes, and connection problems</p>
            </Link>
            <Link href="/guides/cricut-wont-turn-on" className="block p-4 bg-white border rounded-lg hover:shadow-md transition">
              <h3 className="font-bold text-sage-700">Cricut Won&apos;t Turn On?</h3>
              <p className="text-gray-600 text-sm">8 fixes for power problems</p>
            </Link>
            <Link href="/guides/design-space-update-problems" className="block p-4 bg-white border rounded-lg hover:shadow-md transition">
              <h3 className="font-bold text-sage-700">Design Space Update Problems?</h3>
              <p className="text-gray-600 text-sm">Fix crashes and bugs from updates</p>
            </Link>
          </div>
        </section>

      </article>

      {/* CTA Section */}
      <section className="bg-sage-100 py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-sage-800 mb-4">
            Still having Bluetooth issues?
          </h2>
          <p className="text-sage-600 mb-6">
            Join our community for real-time help from fellow Cricut crafters.
          </p>
          <Link 
            href="/community" 
            className="inline-block bg-sage-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-sage-700 transition"
          >
            Join the Community
          </Link>
        </div>
      </section>
    </main>
  );
}
