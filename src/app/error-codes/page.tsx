"use client";

import { useState, useMemo } from "react";
import Link from "next/link";

interface ErrorCode {
  code: string;
  title: string;
  description: string;
  solutions: string[];
  commonCauses: string[];
}

const errorCodes: ErrorCode[] = [
  {
    code: "1001",
    title: "Connection Error",
    description: "Design Space cannot connect to your Cricut machine.",
    commonCauses: [
      "Bluetooth is turned off",
      "Machine is too far from computer/device",
      "USB cable is damaged or not connected",
      "Machine needs to be restarted",
    ],
    solutions: [
      "Turn Bluetooth off and on again on your device",
      "Move machine closer to computer (within 10-15 feet)",
      "Try a different USB cable",
      "Turn off machine, wait 30 seconds, turn back on",
      "Restart Design Space completely",
      "Restart your computer/device",
      "Forget the machine in Bluetooth settings and re-pair",
    ],
  },
  {
    code: "1002",
    title: "Firmware Update Required",
    description: "Your machine's firmware is out of date.",
    commonCauses: [
      "Machine firmware needs updating",
      "Update was interrupted previously",
    ],
    solutions: [
      "Connect machine via USB cable (more reliable for updates)",
      "Click 'Update' when prompted in Design Space",
      "Do NOT turn off machine during update",
      "If update fails, restart machine and try again",
      "Make sure you have a stable internet connection",
    ],
  },
  {
    code: "1006",
    title: "Machine Not Found",
    description: "Design Space cannot detect your Cricut machine.",
    commonCauses: [
      "Machine is turned off",
      "Bluetooth/USB connection lost",
      "Machine not paired to this device",
      "Another app is using the machine",
    ],
    solutions: [
      "Ensure machine is turned ON and ready (solid light)",
      "Check Bluetooth is enabled on your device",
      "Close any other apps that might connect to Cricut",
      "Try USB connection instead of Bluetooth",
      "Re-pair the machine in Bluetooth settings",
      "Restart both machine and computer",
    ],
  },
  {
    code: "1007",
    title: "Cutting Failed",
    description: "The cut operation was interrupted or failed.",
    commonCauses: [
      "Material shifted during cutting",
      "Blade housing came loose",
      "Connection lost during cut",
      "Design too complex for machine",
    ],
    solutions: [
      "Check mat and material are secure",
      "Ensure blade housing is fully inserted (click into place)",
      "Use USB connection for large/complex cuts",
      "Simplify design by reducing nodes/complexity",
      "Try cutting in smaller sections",
      "Clean the blade housing and carriage rails",
    ],
  },
  {
    code: "2001",
    title: "Print Then Cut Calibration Needed",
    description: "Your machine needs to be calibrated for Print Then Cut.",
    commonCauses: [
      "Machine was never calibrated for PTC",
      "Calibration is off after firmware update",
      "Lighting conditions affecting sensor",
    ],
    solutions: [
      "Go to Menu (☰) → Calibration → Print Then Cut",
      "Use a well-lit room (natural light is best)",
      "Make sure paper is placed correctly on mat",
      "Use LightGrip mat with white printer paper",
      "Clean the sensor lens with a dry cloth",
      "If calibration keeps failing, try USB instead of Bluetooth",
    ],
  },
  {
    code: "2003",
    title: "Print Then Cut Sensor Error",
    description: "The machine's sensor cannot read the registration marks.",
    commonCauses: [
      "Marks printed too light or smudged",
      "Wrong paper type (glossy/shiny won't work)",
      "Lighting is too bright or causes glare",
      "Sensor is dirty",
    ],
    solutions: [
      "Use matte paper only — glossy reflects and confuses sensor",
      "Ensure marks printed clearly and completely",
      "Reduce room lighting if too bright",
      "Position mat away from direct sunlight/glare",
      "Clean sensor lens gently with dry microfiber cloth",
      "Re-calibrate Print Then Cut if issues persist",
      "Try printing marks darker (check printer settings)",
    ],
  },
  {
    code: "3001",
    title: "Design Space Sync Error",
    description: "Your projects failed to sync to the cloud.",
    commonCauses: [
      "Internet connection lost",
      "Design Space servers are down",
      "Account sync issue",
    ],
    solutions: [
      "Check your internet connection",
      "Wait a few minutes and try again",
      "Log out of Design Space and log back in",
      "Clear Design Space cache (Settings → Clear Cache)",
      "Check Cricut status page for outages",
      "Try using Design Space in a web browser instead",
    ],
  },
  {
    code: "4001",
    title: "USB Connection Error",
    description: "Machine not recognized via USB cable.",
    commonCauses: [
      "USB cable is data-only or damaged",
      "USB port is not working",
      "Driver issue on computer",
    ],
    solutions: [
      "Try a different USB cable (must support data transfer)",
      "Try a different USB port on your computer",
      "Avoid USB hubs — connect directly to computer",
      "On Windows: Update USB drivers in Device Manager",
      "On Mac: Check System Preferences → Security for blocked devices",
      "Restart computer after connecting machine",
    ],
  },
  {
    code: "5001",
    title: "Material Size Error",
    description: "Design is larger than the selected material size.",
    commonCauses: [
      "Design exceeds mat/material dimensions",
      "Wrong material size selected",
      "Design is off the canvas edge",
    ],
    solutions: [
      "Check design fits within material boundaries in Design Space",
      "Select correct material size in cut settings",
      "Move design onto the mat area in Design Space",
      "Resize design if needed",
      "For long cuts, use 'Smart Materials' setting if available",
    ],
  },
  {
    code: "6001",
    title: "Blade/Tool Error",
    description: "Machine cannot detect the blade or tool.",
    commonCauses: [
      "Wrong tool installed for selected material",
      "Blade housing not fully seated",
      "Tool is damaged or worn",
      "Clamp not fully closed",
    ],
    solutions: [
      "Remove and reinstall blade housing — push until it clicks",
      "Ensure clamp is fully closed",
      "Check you have correct tool for material (fine point vs deep point)",
      "Inspect blade for damage — replace if dull or chipped",
      "Clean blade housing with compressed air",
      "Try a different blade/housing to isolate the issue",
    ],
  },
  {
    code: "7001",
    title: "Carriage Jam",
    description: "The cutting carriage is stuck or obstructed.",
    commonCauses: [
      "Material is jammed in the machine",
      "Foreign object in carriage path",
      "Carriage belt is loose or broken",
    ],
    solutions: [
      "Turn off machine and unplug",
      "Gently move carriage by hand to find obstruction",
      "Remove any jammed material carefully",
      "Check for debris in carriage rails — clean with dry cloth",
      "Ensure nothing is blocking the carriage path",
      "If belt is damaged, contact Cricut support",
      "Do NOT force the carriage — can cause damage",
    ],
  },
  {
    code: "8001",
    title: "Roller Bar Error",
    description: "The roller bar/mat feeding system has an issue.",
    commonCauses: [
      "Mat is warped or not flat",
      "Mat is not aligned with guides",
      "Debris on roller bars",
      "Material is too thick",
    ],
    solutions: [
      "Ensure mat is flat and not warped",
      "Align mat with the guides and load arrow",
      "Clean roller bars with a lint-free cloth",
      "Check material thickness is within machine limits",
      "Don't overload the mat with thick materials",
      "Try a fresh mat if current one is damaged",
    ],
  },
  {
    code: "9001",
    title: "Subscription/Access Error",
    description: "Unable to access Cricut Access content or premium features.",
    commonCauses: [
      "Subscription expired or payment failed",
      "Not logged into correct account",
      "Cricut Access servers temporarily down",
    ],
    solutions: [
      "Check subscription status at cricut.com/account",
      "Verify payment method is current",
      "Log out and log back into Design Space",
      "Ensure you're using the account with the subscription",
      "Contact Cricut support if subscription shows active but doesn't work",
    ],
  },
  {
    code: "Unknown",
    title: "General/Unknown Error",
    description: "An unspecified error occurred in Design Space.",
    commonCauses: [
      "Software glitch",
      "Corrupted cache",
      "Outdated Design Space version",
      "Computer resource issue",
    ],
    solutions: [
      "Close and reopen Design Space",
      "Restart your computer/device",
      "Clear Design Space cache (Settings → Clear Cache)",
      "Update Design Space to latest version",
      "Try using the web version of Design Space",
      "Uninstall and reinstall Design Space",
      "Check for Windows/Mac system updates",
    ],
  },
];

export default function ErrorCodesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedCode, setExpandedCode] = useState<string | null>(null);

  const filteredErrors = useMemo(() => {
    if (!searchQuery) return errorCodes;
    const query = searchQuery.toLowerCase();
    return errorCodes.filter(
      (error) =>
        error.code.toLowerCase().includes(query) ||
        error.title.toLowerCase().includes(query) ||
        error.description.toLowerCase().includes(query)
    );
  }, [searchQuery]);

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <Link href="/" className="text-[#9CAF88] hover:underline">← Home</Link>
        <h1 className="text-3xl font-bold text-gray-800 mt-4">🚨 Cricut Error Codes</h1>
        <p className="text-gray-600 mt-2">
          Look up any Cricut Design Space error code and get solutions to fix it.
        </p>
      </div>

      {/* Search */}
      <div className="mb-6">
        <div className="relative">
          <input
            type="text"
            placeholder="Search by error code (e.g., 1001) or keyword..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-3 pl-12 rounded-xl border border-gray-200 focus:border-[#9CAF88] focus:ring-2 focus:ring-[#B8C9A9] outline-none transition-all"
          />
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">🔍</span>
        </div>
      </div>

      {/* Error Code List */}
      <div className="space-y-4">
        {filteredErrors.map((error) => (
          <div
            key={error.code}
            className="bg-white rounded-xl border border-gray-200 overflow-hidden"
          >
            <button
              onClick={() => setExpandedCode(expandedCode === error.code ? null : error.code)}
              className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center gap-4">
                <span className="bg-red-100 text-red-700 px-3 py-1 rounded-lg font-mono font-bold">
                  {error.code === "Unknown" ? "???" : error.code}
                </span>
                <div>
                  <h3 className="font-semibold text-gray-800">{error.title}</h3>
                  <p className="text-sm text-gray-500">{error.description}</p>
                </div>
              </div>
              <span className="text-gray-400 text-xl">
                {expandedCode === error.code ? "−" : "+"}
              </span>
            </button>

            {expandedCode === error.code && (
              <div className="px-6 py-4 border-t border-gray-100 bg-gray-50">
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Common Causes */}
                  <div>
                    <h4 className="font-semibold text-gray-700 mb-2 flex items-center gap-2">
                      ❓ Common Causes
                    </h4>
                    <ul className="space-y-1">
                      {error.commonCauses.map((cause, idx) => (
                        <li key={idx} className="text-sm text-gray-600 flex items-start gap-2">
                          <span className="text-red-400">•</span>
                          {cause}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Solutions */}
                  <div>
                    <h4 className="font-semibold text-gray-700 mb-2 flex items-center gap-2">
                      ✅ Solutions
                    </h4>
                    <ol className="space-y-1">
                      {error.solutions.map((solution, idx) => (
                        <li key={idx} className="text-sm text-gray-600 flex items-start gap-2">
                          <span className="text-green-500 font-medium">{idx + 1}.</span>
                          {solution}
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-gray-200">
                  <p className="text-xs text-gray-400">
                    Still having issues? Try the{" "}
                    <Link href="/troubleshoot" className="text-[#9CAF88] hover:underline">
                      Troubleshooting Wizard
                    </Link>{" "}
                    for step-by-step help.
                  </p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {filteredErrors.length === 0 && (
        <div className="text-center py-12 bg-gray-50 rounded-xl">
          <p className="text-gray-500">No error codes found matching "{searchQuery}"</p>
          <p className="text-sm text-gray-400 mt-2">
            Try searching by number (e.g., "1001") or keyword (e.g., "bluetooth")
          </p>
        </div>
      )}

      {/* Help Box */}
      <div className="mt-8 bg-[#F5FAF3] border border-[#B8C9A9] rounded-xl p-6">
        <h3 className="font-bold text-[#6B7F5E] mb-2">💡 Don't see your error code?</h3>
        <p className="text-[#6B7F5E] text-sm">
          Cricut uses different error formats across devices and versions. If you see an error
          message (not a code), try our{" "}
          <Link href="/troubleshoot" className="font-medium underline">
            Troubleshooting Wizard
          </Link>{" "}
          to diagnose the issue step by step.
        </p>
      </div>
    </div>
  );
}
