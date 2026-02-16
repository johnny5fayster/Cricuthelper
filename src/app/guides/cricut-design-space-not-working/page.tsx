import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Cricut Design Space Not Working? 11 Fixes That Actually Work',
  description: 'Design Space frozen, slow, or showing a blank screen? Fix loading issues, lag, crashes, and connection problems with these proven solutions.',
  keywords: ['Cricut Design Space not working', 'Design Space slow', 'Design Space blank screen', 'Design Space loading', 'Design Space frozen', 'Design Space lag', 'Design Space crash', 'Cricut software problems'],
  openGraph: {
    title: 'Cricut Design Space Not Working? 11 Fixes That Actually Work',
    description: 'Design Space frozen, slow, or showing a blank screen? Fix loading issues, lag, crashes, and connection problems with these proven solutions.',
    type: 'article',
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Why is Cricut Design Space so slow?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Design Space is slow due to cached data buildup, too many browser tabs open, outdated software, or your computer running in power-saving mode. Clear the cache, close other programs, and ensure your system meets the minimum requirements (4GB RAM, modern processor)."
      }
    },
    {
      "@type": "Question",
      "name": "Why does Design Space show a blank white screen?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A blank white screen usually means corrupted cache files. Fix this by clearing the Design Space cache: close the app, navigate to the cache folder (Windows: %LocalAppData%\\Cricut\\DesignSpace, Mac: ~/Library/Application Support/Cricut/DesignSpace), delete the cache folder contents, then restart the app."
      }
    },
    {
      "@type": "Question",
      "name": "Can I use Cricut Design Space without downloading the app?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! You can use the web version at design.cricut.com in Chrome, Firefox, or Edge. The web version has the same features and can be a great workaround when the desktop app isn't working properly."
      }
    },
    {
      "@type": "Question",
      "name": "Why does Design Space keep crashing?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Crashes are often caused by corrupted installation files, conflicting software (especially antivirus), or insufficient system resources. Try uninstalling and reinstalling Design Space, temporarily disabling antivirus, and closing resource-heavy programs."
      }
    },
    {
      "@type": "Question",
      "name": "How do I update Cricut Design Space?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Design Space typically updates automatically. If you need to force an update, uninstall the current version, download the latest from design.cricut.com, and reinstall. Always download directly from Cricut's official site."
      }
    }
  ]
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to Fix Cricut Design Space Not Working",
  "description": "Step-by-step guide to fix Design Space loading issues, crashes, and performance problems.",
  "step": [
    {
      "@type": "HowToStep",
      "name": "Clear Design Space Cache",
      "text": "Close Design Space completely. Navigate to the cache folder and delete its contents. On Windows: %LocalAppData%\\Cricut\\DesignSpace. On Mac: ~/Library/Application Support/Cricut/DesignSpace."
    },
    {
      "@type": "HowToStep",
      "name": "Restart Your Computer",
      "text": "A full restart clears temporary files and resets background processes that may be interfering with Design Space."
    },
    {
      "@type": "HowToStep",
      "name": "Check Internet Connection",
      "text": "Design Space requires a stable internet connection. Test your connection and try switching between WiFi and ethernet if possible."
    },
    {
      "@type": "HowToStep",
      "name": "Reinstall Design Space",
      "text": "If issues persist, uninstall Design Space completely and download a fresh copy from design.cricut.com."
    }
  ]
};

export default function DesignSpaceNotWorkingGuide() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
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
              <li className="text-gray-900">Design Space Not Working</li>
            </ol>
          </nav>

          {/* Header */}
          <header className="mb-8">
            <div className="flex items-center gap-2 mb-3">
              <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm font-medium">
                Software Issue
              </span>
              <span className="text-gray-500 text-sm">Updated February 2025</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Cricut Design Space Not Working? 11 Fixes That Actually Work
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Staring at a frozen screen, spinning wheel, or cryptic error? You're not alone — Design Space 
              issues are one of the most frustrating parts of owning a Cricut. Here's how to fix it.
            </p>
          </header>

          {/* Quick Fix Box */}
          <div className="bg-gradient-to-r from-[#F5FAF3] to-purple-100 rounded-xl p-6 mb-8 border-l-4 border-[#9CAF88]">
            <h2 className="font-bold text-lg text-gray-900 mb-3">⚡ Quick Fixes (Try These First)</h2>
            <ol className="space-y-2 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="font-bold text-[#9CAF88]">1.</span>
                <span><strong>Restart everything</strong> — Close Design Space, restart your computer, restart your Cricut</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-[#9CAF88]">2.</span>
                <span><strong>Clear the cache</strong> — This fixes 80% of loading issues (instructions below)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-[#9CAF88]">3.</span>
                <span><strong>Try the web version</strong> — Go to <strong>design.cricut.com</strong> in Chrome as a workaround</span>
              </li>
            </ol>
          </div>

          {/* Table of Contents */}
          <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
            <h2 className="font-bold text-lg mb-4">📋 What's Your Issue?</h2>
            <ul className="space-y-2 text-gray-700">
              <li>
                <a href="#blank-screen" className="text-[#9CAF88] hover:underline">→ Blank white screen on startup</a>
              </li>
              <li>
                <a href="#slow-laggy" className="text-[#9CAF88] hover:underline">→ Slow, laggy, or freezing</a>
              </li>
              <li>
                <a href="#wont-open" className="text-[#9CAF88] hover:underline">→ Won't open at all / crashes immediately</a>
              </li>
              <li>
                <a href="#connection-error" className="text-[#9CAF88] hover:underline">→ Connection error or can't sign in</a>
              </li>
              <li>
                <a href="#projects-not-loading" className="text-[#9CAF88] hover:underline">→ Projects or images not loading</a>
              </li>
            </ul>
          </div>

          {/* Main Content */}
          <article className="prose prose-lg max-w-none">
            
            {/* Fix 1: Clear Cache */}
            <section id="blank-screen" className="mb-10 scroll-mt-20">
              <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                <span className="bg-[#9CAF88] text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">1</span>
                Clear the Design Space Cache
              </h2>
              <p className="text-gray-600 mt-2 mb-4">
                <strong>Fixes:</strong> Blank white screen, endless loading, slow startup, frozen interface
              </p>
              <p>
                This is the #1 fix for Design Space problems. Corrupted cache files cause most loading issues, 
                and Cricut's official support recommends this as the first troubleshooting step.
              </p>

              <div className="bg-gray-50 rounded-lg p-6 my-4">
                <h3 className="font-bold text-gray-900 mb-3">On Windows:</h3>
                <ol className="list-decimal list-inside space-y-2 text-gray-700">
                  <li>Close Design Space completely (check Task Manager to make sure it's not running)</li>
                  <li>Press <strong>Windows + R</strong> to open Run dialog</li>
                  <li>Type <code className="bg-gray-200 px-2 py-1 rounded">%LocalAppData%\Cricut\DesignSpace</code> and press Enter</li>
                  <li>Delete everything inside this folder (or just the "cache" folder if you see one)</li>
                  <li>Restart Design Space</li>
                </ol>
              </div>

              <div className="bg-gray-50 rounded-lg p-6 my-4">
                <h3 className="font-bold text-gray-900 mb-3">On Mac:</h3>
                <ol className="list-decimal list-inside space-y-2 text-gray-700">
                  <li>Quit Design Space completely</li>
                  <li>Open Finder and press <strong>Cmd + Shift + G</strong></li>
                  <li>Type <code className="bg-gray-200 px-2 py-1 rounded">~/Library/Application Support/Cricut/DesignSpace</code></li>
                  <li>Delete the contents of this folder</li>
                  <li>Empty Trash and restart Design Space</li>
                </ol>
              </div>

              <div className="bg-green-50 border border-green-200 rounded-lg p-4 my-4">
                <p className="text-green-800">
                  <strong>💡 Pro tip:</strong> You won't lose any projects by clearing cache — your designs 
                  are saved in Cricut's cloud, not on your computer.
                </p>
              </div>
            </section>

            {/* Fix 2: Restart Everything */}
            <section id="slow-laggy" className="mb-10 scroll-mt-20">
              <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                <span className="bg-[#9CAF88] text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">2</span>
                Restart Your Computer (Yes, Really)
              </h2>
              <p className="text-gray-600 mt-2 mb-4">
                <strong>Fixes:</strong> Slow performance, lag, random freezing, connection drops
              </p>
              <p>
                It sounds cliché, but a full restart clears memory leaks and resets background processes 
                that accumulate over time. If your computer has been on for days, this alone might fix everything.
              </p>
              <ul className="list-disc list-inside space-y-2 my-4">
                <li>Do a full restart (not just sleep/wake)</li>
                <li>Before restarting, save any open work</li>
                <li>After restart, open Design Space <em>before</em> opening other programs</li>
              </ul>
            </section>

            {/* Fix 3: Close Other Programs */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                <span className="bg-[#9CAF88] text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">3</span>
                Close Background Programs
              </h2>
              <p className="text-gray-600 mt-2 mb-4">
                <strong>Fixes:</strong> Lag, slow response, freezing when editing
              </p>
              <p>
                Design Space is a memory hog. It needs room to breathe. Close anything you're not actively using:
              </p>
              <ul className="list-disc list-inside space-y-2 my-4">
                <li><strong>Browser tabs</strong> — Each tab uses memory, especially if playing video</li>
                <li><strong>Streaming apps</strong> — Netflix, Spotify, YouTube in background</li>
                <li><strong>Other design software</strong> — Canva, Photoshop, Silhouette Studio</li>
                <li><strong>Cloud sync apps</strong> — Dropbox, Google Drive syncing large files</li>
              </ul>
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 my-4">
                <p className="text-yellow-800">
                  <strong>⚠️ Check this:</strong> On Windows, press <strong>Ctrl + Shift + Esc</strong> to open Task Manager. 
                  If memory usage is above 80%, that's your problem.
                </p>
              </div>
            </section>

            {/* Fix 4: Use Web Version */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                <span className="bg-[#9CAF88] text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">4</span>
                Try the Web Version Instead
              </h2>
              <p className="text-gray-600 mt-2 mb-4">
                <strong>Fixes:</strong> Desktop app won't work, need a quick workaround
              </p>
              <p>
                Many crafters don't realize you can use Design Space directly in your web browser without 
                installing anything. Same features, sometimes faster than the desktop app.
              </p>
              <ol className="list-decimal list-inside space-y-2 my-4">
                <li>Open <strong>Chrome</strong>, Firefox, or Edge (not Safari)</li>
                <li>Go to <a href="https://design.cricut.com" className="text-[#9CAF88] hover:underline">design.cricut.com</a></li>
                <li>Sign in with your Cricut account</li>
                <li>Use it just like the desktop app</li>
              </ol>
              <p>
                The web version works great for designing. You'll still need the desktop plugin installed to 
                actually send cuts to your machine.
              </p>
            </section>

            {/* Fix 5: Reinstall */}
            <section id="wont-open" className="mb-10 scroll-mt-20">
              <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                <span className="bg-[#9CAF88] text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">5</span>
                Uninstall and Reinstall Design Space
              </h2>
              <p className="text-gray-600 mt-2 mb-4">
                <strong>Fixes:</strong> App won't open, crashes on startup, error messages
              </p>
              <p>
                When cache clearing doesn't work, a clean reinstall usually does. This replaces any corrupted 
                program files.
              </p>

              <div className="bg-gray-50 rounded-lg p-6 my-4">
                <h3 className="font-bold text-gray-900 mb-3">Complete Reinstall Steps:</h3>
                <ol className="list-decimal list-inside space-y-2 text-gray-700">
                  <li>Uninstall Design Space through your system settings</li>
                  <li>Clear the cache folder (see Fix #1 above)</li>
                  <li>Restart your computer</li>
                  <li>Download the latest version from <a href="https://design.cricut.com" className="text-[#9CAF88] hover:underline">design.cricut.com</a></li>
                  <li>Install and sign in fresh</li>
                </ol>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 my-4">
                <p className="text-blue-800">
                  <strong>💡 Important:</strong> Always download from the official Cricut website. Third-party 
                  download sites sometimes have outdated or modified versions.
                </p>
              </div>
            </section>

            {/* Fix 6: Check Internet */}
            <section id="connection-error" className="mb-10 scroll-mt-20">
              <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                <span className="bg-[#9CAF88] text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">6</span>
                Check Your Internet Connection
              </h2>
              <p className="text-gray-600 mt-2 mb-4">
                <strong>Fixes:</strong> Can't sign in, projects won't save, images not loading
              </p>
              <p>
                Design Space requires a constant internet connection — it can't work offline. Even if other 
                websites work, Design Space might struggle with a slow or unstable connection.
              </p>
              <ul className="list-disc list-inside space-y-2 my-4">
                <li>Try restarting your router/modem</li>
                <li>If on WiFi, try moving closer to the router or use ethernet</li>
                <li>Test your speed at <a href="https://fast.com" className="text-[#9CAF88] hover:underline">fast.com</a> — you need at least 10 Mbps</li>
                <li>If you're on VPN, try disconnecting it temporarily</li>
              </ul>
            </section>

            {/* Fix 7: Disable Antivirus */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                <span className="bg-[#9CAF88] text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">7</span>
                Temporarily Disable Antivirus/Firewall
              </h2>
              <p className="text-gray-600 mt-2 mb-4">
                <strong>Fixes:</strong> Won't connect, crashes during cut, plugin errors
              </p>
              <p>
                Security software sometimes blocks Design Space from connecting to Cricut's servers. This is 
                especially common with Norton, McAfee, and aggressive Windows Defender settings.
              </p>
              <ol className="list-decimal list-inside space-y-2 my-4">
                <li>Temporarily disable your antivirus</li>
                <li>Try running Design Space</li>
                <li>If it works, add Design Space to your antivirus whitelist/exceptions</li>
                <li>Re-enable your antivirus</li>
              </ol>
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 my-4">
                <p className="text-yellow-800">
                  <strong>⚠️ Don't forget:</strong> Re-enable your antivirus after testing! Only leave it 
                  disabled long enough to confirm that's the issue.
                </p>
              </div>
            </section>

            {/* Fix 8: Update Graphics Drivers */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                <span className="bg-[#9CAF88] text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">8</span>
                Update Graphics Drivers
              </h2>
              <p className="text-gray-600 mt-2 mb-4">
                <strong>Fixes:</strong> Glitchy display, frozen canvas, visual bugs
              </p>
              <p>
                Design Space uses your graphics card to render the canvas. Outdated drivers can cause display 
                issues, especially on older computers.
              </p>
              <ul className="list-disc list-inside space-y-2 my-4">
                <li><strong>Windows:</strong> Right-click Start → Device Manager → Display adapters → Right-click your graphics card → Update driver</li>
                <li><strong>Mac:</strong> Graphics drivers update with macOS — run Software Update</li>
              </ul>
            </section>

            {/* Fix 9: Check System Requirements */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                <span className="bg-[#9CAF88] text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">9</span>
                Check System Requirements
              </h2>
              <p className="text-gray-600 mt-2 mb-4">
                <strong>Fixes:</strong> Constant slowness on older computers
              </p>
              <p>
                Design Space has gotten more demanding over the years. If your computer is older, it might 
                be struggling to keep up.
              </p>

              <div className="bg-gray-50 rounded-lg p-6 my-4">
                <h3 className="font-bold text-gray-900 mb-3">Minimum Requirements (2025):</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li><strong>Windows:</strong> Windows 10 or newer, 4GB RAM, 2GB free disk space</li>
                  <li><strong>Mac:</strong> macOS 11 (Big Sur) or newer, 4GB RAM</li>
                  <li><strong>Both:</strong> Stable internet connection, 1024x768 resolution minimum</li>
                </ul>
              </div>
              <p>
                <strong>Real talk:</strong> While 4GB RAM is the "minimum," Design Space runs much better with 
                8GB or more. If you're on 4GB, keep other programs closed.
              </p>
            </section>

            {/* Fix 10: Try Beta Version */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                <span className="bg-[#9CAF88] text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">10</span>
                Switch to Beta Version
              </h2>
              <p className="text-gray-600 mt-2 mb-4">
                <strong>Fixes:</strong> Bugs in current version, issues after recent update
              </p>
              <p>
                Sometimes a recent update introduces bugs. Cricut's Beta version often has fixes before they 
                roll out to everyone.
              </p>
              <ol className="list-decimal list-inside space-y-2 my-4">
                <li>Open Design Space</li>
                <li>Click the menu (three lines) → Settings</li>
                <li>Look for "Beta Program" or "Beta Version" toggle</li>
                <li>Enable it and let the app update</li>
              </ol>
              <p>
                Note: Beta versions can occasionally have their own bugs, so this is a trade-off. You can 
                always switch back.
              </p>
            </section>

            {/* Fix 11: Wait for Cricut */}
            <section id="projects-not-loading" className="mb-10 scroll-mt-20">
              <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                <span className="bg-[#9CAF88] text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">11</span>
                Check If Cricut's Servers Are Down
              </h2>
              <p className="text-gray-600 mt-2 mb-4">
                <strong>Fixes:</strong> Sudden issues affecting many users, nothing works
              </p>
              <p>
                Sometimes the problem isn't on your end. Cricut's servers occasionally have outages that 
                affect everyone.
              </p>
              <ul className="list-disc list-inside space-y-2 my-4">
                <li>Check <a href="https://twitter.com/CricutHelp" className="text-[#9CAF88] hover:underline">@CricutHelp on X/Twitter</a> for outage reports</li>
                <li>Search "Cricut down" on <a href="https://downdetector.com/status/cricut/" className="text-[#9CAF88] hover:underline">DownDetector</a></li>
                <li>Check the <a href="https://www.reddit.com/r/cricut/" className="text-[#9CAF88] hover:underline">r/cricut subreddit</a> to see if others are reporting issues</li>
              </ul>
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 my-4">
                <p className="text-purple-800">
                  <strong>If it's a server issue:</strong> There's nothing to do but wait. Cricut usually 
                  resolves outages within a few hours. Use the time to prep your materials!
                </p>
              </div>
            </section>

            {/* Still Not Working */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900">Still Not Working?</h2>
              <p>
                If you've tried everything above and Design Space still won't cooperate:
              </p>
              <ul className="list-disc list-inside space-y-2 my-4">
                <li><strong>Contact Cricut Support:</strong> <a href="https://help.cricut.com" className="text-[#9CAF88] hover:underline">help.cricut.com</a> — they can check your account for issues</li>
                <li><strong>Try a different device:</strong> If you have a tablet or another computer, try using Design Space there</li>
                <li><strong>Check for Windows/Mac updates:</strong> Sometimes OS updates fix compatibility issues</li>
              </ul>
            </section>

            {/* FAQ Section */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900">Frequently Asked Questions</h2>
              
              <div className="space-y-6 mt-4">
                <div>
                  <h3 className="font-bold text-gray-900">Why is Cricut Design Space so slow?</h3>
                  <p className="text-gray-600">
                    Design Space is slow due to cached data buildup, too many browser tabs open, outdated software, 
                    or your computer running in power-saving mode. Clear the cache, close other programs, and ensure 
                    your system meets the minimum requirements (4GB RAM, modern processor).
                  </p>
                </div>
                
                <div>
                  <h3 className="font-bold text-gray-900">Why does Design Space show a blank white screen?</h3>
                  <p className="text-gray-600">
                    A blank white screen usually means corrupted cache files. Clear the Design Space cache folder, 
                    restart the app, and the issue should resolve. This is Cricut's official first-step fix.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-bold text-gray-900">Can I use Cricut Design Space without downloading?</h3>
                  <p className="text-gray-600">
                    Yes! Use the web version at design.cricut.com in Chrome, Firefox, or Edge. It has all the same 
                    features. You'll still need the plugin for cutting, but designing works entirely in-browser.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-bold text-gray-900">Why does Design Space keep crashing?</h3>
                  <p className="text-gray-600">
                    Crashes are often caused by corrupted installation files, conflicting security software, or 
                    insufficient system resources. Uninstall, clear cache, and reinstall from design.cricut.com.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-bold text-gray-900">Does Design Space work offline?</h3>
                  <p className="text-gray-600">
                    No. Design Space requires a constant internet connection to function. You can't design, access 
                    projects, or cut without being connected.
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
                <h3 className="font-bold text-gray-900">Cricut Bluetooth Not Connecting</h3>
                <p className="text-gray-600 text-sm mt-1">Can't get your Cricut to show up? Fix connection issues.</p>
              </Link>
              <Link 
                href="/guides/print-then-cut-not-lining-up"
                className="block p-4 bg-white rounded-lg border border-gray-200 hover:border-[#9CAF88] hover:shadow-md transition-all"
              >
                <h3 className="font-bold text-gray-900">Print Then Cut Not Lining Up</h3>
                <p className="text-gray-600 text-sm mt-1">Fix misaligned cuts and calibration issues.</p>
              </Link>
              <Link 
                href="/guides/cricut-not-cutting-vinyl"
                className="block p-4 bg-white rounded-lg border border-gray-200 hover:border-[#9CAF88] hover:shadow-md transition-all"
              >
                <h3 className="font-bold text-gray-900">Cricut Not Cutting Vinyl Properly</h3>
                <p className="text-gray-600 text-sm mt-1">Blade, pressure, and mat solutions.</p>
              </Link>
              <Link 
                href="/troubleshoot"
                className="block p-4 bg-white rounded-lg border border-gray-200 hover:border-[#9CAF88] hover:shadow-md transition-all"
              >
                <h3 className="font-bold text-gray-900">Troubleshooting Wizard</h3>
                <p className="text-gray-600 text-sm mt-1">Diagnose any Cricut issue step by step.</p>
              </Link>
            </div>
          </section>

          {/* CTA */}
          <section className="mt-12 bg-gradient-to-r from-[#9CAF88] to-purple-500 rounded-xl p-8 text-center text-white">
            <h2 className="text-2xl font-bold mb-3">Need More Help?</h2>
            <p className="text-white/80 mb-6">
              Our troubleshooting wizard can diagnose your specific problem and walk you through the fix.
            </p>
            <Link
              href="/troubleshoot"
              className="inline-block bg-white text-[#9CAF88] font-bold py-3 px-8 rounded-full hover:bg-[#F5FAF3] transition-colors"
            >
              Start Troubleshooting
            </Link>
          </section>
        </div>
      </div>
    </>
  );
}
