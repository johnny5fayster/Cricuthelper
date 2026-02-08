import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Fix: Text Cutting Instead of Printing in Print Then Cut | CricutHelper',
  description: 'Solve the common Cricut problem where text boxes cut separately instead of printing on your image. Learn the difference between Flatten and Attach.',
  keywords: 'cricut text cutting, print then cut text problem, flatten vs attach, cricut text not printing, design space flatten, print then cut fix',
};

export default function PrintThenCutTextFix() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <Link href="/guides" className="text-purple-400 hover:text-purple-300">
            ← Back to Guides
          </Link>
        </nav>

        {/* Header */}
        <header className="mb-12">
          <div className="inline-block px-3 py-1 bg-red-500/20 text-red-400 rounded-full text-sm mb-4">
            Common Problem
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Text Cutting Instead of Printing in Print Then Cut
          </h1>
          <p className="text-xl text-gray-300">
            Your text should print on the image, but Cricut is cutting around each letter? Here's the fix.
          </p>
        </header>

        {/* Quick Answer */}
        <section className="bg-green-500/10 border border-green-500/30 rounded-xl p-6 mb-12">
          <h2 className="text-xl font-bold text-green-400 mb-3">⚡ Quick Fix</h2>
          <p className="text-gray-200 text-lg">
            <strong>Select BOTH your image AND text together</strong>, then click <strong>Flatten</strong> (not Attach). 
            This combines them into one printable layer that cuts as a single shape.
          </p>
        </section>

        {/* The Problem */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-4">🔴 The Problem</h2>
          <div className="bg-gray-800/50 rounded-xl p-6">
            <p className="text-gray-300 mb-4">
              You've created a beautiful Print Then Cut design — maybe a sticker or label with text on top of an image. 
              But when you go to cut, the Cricut:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li>Cuts around each individual letter</li>
              <li>Cuts the text separately from the image</li>
              <li>Creates multiple cut lines instead of one outline</li>
            </ul>
            <p className="text-gray-300 mt-4">
              <strong className="text-red-400">Why this happens:</strong> Design Space treats your text and image as 
              separate layers. Each layer has its own cut line. You need to merge them into one layer.
            </p>
          </div>
        </section>

        {/* The Solution */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-4">✅ The Solution: Flatten (Not Attach!)</h2>
          
          <div className="space-y-6">
            <div className="bg-gray-800/50 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-purple-400 mb-3">Step 1: Position Your Design</h3>
              <p className="text-gray-300">
                Arrange your text exactly where you want it on top of your image. Make sure everything 
                looks correct before flattening — you can't easily undo this.
              </p>
            </div>

            <div className="bg-gray-800/50 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-purple-400 mb-3">Step 2: Select ALL Layers</h3>
              <p className="text-gray-300 mb-3">
                This is the critical step most people miss. You must select:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-1 ml-4">
                <li>Your background image</li>
                <li>ALL text layers</li>
                <li>Any other elements you want included</li>
              </ul>
              <p className="text-gray-300 mt-3">
                <strong>Tip:</strong> Click and drag to select everything, or hold Shift/Ctrl and click each layer 
                in the Layers panel.
              </p>
            </div>

            <div className="bg-gray-800/50 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-purple-400 mb-3">Step 3: Click Flatten</h3>
              <p className="text-gray-300 mb-3">
                With everything selected, click the <strong>Flatten</strong> button at the bottom of the Layers panel.
              </p>
              <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4">
                <p className="text-yellow-300">
                  <strong>⚠️ Important:</strong> Use FLATTEN, not Attach. Attach keeps layers separate (they'll still 
                  cut individually). Flatten merges them into one printable image.
                </p>
              </div>
            </div>

            <div className="bg-gray-800/50 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-purple-400 mb-3">Step 4: Verify It Worked</h3>
              <p className="text-gray-300">
                After flattening, you should see:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-1 ml-4 mt-2">
                <li>Only ONE layer in the Layers panel (instead of multiple)</li>
                <li>The layer type shows as "Print Then Cut"</li>
                <li>One single cut line around the entire design</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Flatten vs Attach */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-4">🆚 Flatten vs Attach: What's the Difference?</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-6">
              <h3 className="text-xl font-bold text-green-400 mb-3">✅ Flatten</h3>
              <ul className="text-gray-300 space-y-2">
                <li>• Merges layers into ONE printable image</li>
                <li>• Creates a single cut line</li>
                <li>• Text becomes part of the image (not editable)</li>
                <li>• <strong>Use for: Print Then Cut</strong></li>
              </ul>
            </div>
            
            <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-6">
              <h3 className="text-xl font-bold text-red-400 mb-3">❌ Attach</h3>
              <ul className="text-gray-300 space-y-2">
                <li>• Keeps layers separate but positions them together</li>
                <li>• Each layer still has its own cut line</li>
                <li>• Used for keeping multi-piece designs aligned</li>
                <li>• <strong>NOT for Print Then Cut</strong></li>
              </ul>
            </div>
          </div>
        </section>

        {/* Common Mistakes */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-4">🚫 Common Mistakes to Avoid</h2>
          
          <div className="space-y-4">
            <div className="bg-gray-800/50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-red-400 mb-2">Mistake 1: Flattening layers separately</h3>
              <p className="text-gray-300">
                If you flatten the text by itself, then flatten the image by itself, you'll have two separate 
                Print Then Cut layers. <strong>Select everything at once, then flatten.</strong>
              </p>
            </div>

            <div className="bg-gray-800/50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-red-400 mb-2">Mistake 2: Using Attach for Print Then Cut</h3>
              <p className="text-gray-300">
                Attach is for vinyl or cardstock projects where you want pieces to stay positioned together 
                on the mat. It does NOT merge layers for printing.
              </p>
            </div>

            <div className="bg-gray-800/50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-red-400 mb-2">Mistake 3: Making duplicates before flattening</h3>
              <p className="text-gray-300">
                If you need multiple copies, use the "Project Copies" option on the Prepare screen AFTER 
                flattening. Don't duplicate on the canvas — it can cause alignment issues.
              </p>
            </div>

            <div className="bg-gray-800/50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-red-400 mb-2">Mistake 4: Forgetting to include the background shape</h3>
              <p className="text-gray-300">
                For stickers, you need a background shape for the cut line. If your image doesn't have a 
                solid background, add a shape behind it, then select all three (shape + image + text) and flatten.
              </p>
            </div>
          </div>
        </section>

        {/* Video Alternative */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-4">📱 On Mobile/iPad?</h2>
          <div className="bg-gray-800/50 rounded-xl p-6">
            <p className="text-gray-300 mb-3">
              The process is the same in the Design Space mobile app:
            </p>
            <ol className="list-decimal list-inside text-gray-300 space-y-2 ml-4">
              <li>Tap and hold, then tap "Select All" or manually select each layer</li>
              <li>Tap "Actions" at the bottom of the screen</li>
              <li>Choose "Flatten" from the menu</li>
            </ol>
          </div>
        </section>

        {/* Still Not Working */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-4">Still Not Working?</h2>
          <div className="bg-gray-800/50 rounded-xl p-6">
            <p className="text-gray-300 mb-4">If you've flattened correctly but still have issues:</p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
              <li>Check the Layers panel — you should see only ONE layer</li>
              <li>The layer should say "Print Then Cut" or show the printer icon</li>
              <li>If you see multiple layers, Undo and try again, making sure ALL layers are selected</li>
              <li>Close and reopen Design Space if it's behaving strangely</li>
            </ul>
          </div>
        </section>

        {/* Related Guides */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-4">Related Guides</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Link 
              href="/guides/print-then-cut-not-lining-up"
              className="bg-gray-800/50 hover:bg-gray-700/50 rounded-xl p-4 transition-colors"
            >
              <h3 className="font-semibold text-purple-400">Print Then Cut Not Lining Up →</h3>
              <p className="text-gray-400 text-sm">Calibration and alignment fixes</p>
            </Link>
            <Link 
              href="/guides/how-to-make-stickers"
              className="bg-gray-800/50 hover:bg-gray-700/50 rounded-xl p-4 transition-colors"
            >
              <h3 className="font-semibold text-purple-400">How to Make Stickers →</h3>
              <p className="text-gray-400 text-sm">Complete sticker-making tutorial</p>
            </Link>
          </div>
        </section>

        {/* FAQ Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "Why is my Cricut cutting each letter instead of printing them?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Your text layer is separate from your image. Select BOTH the text and image together, then click Flatten (not Attach) to merge them into one printable layer."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What's the difference between Flatten and Attach in Cricut Design Space?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Flatten merges multiple layers into one printable image with a single cut line. Attach keeps layers separate but positions them together on the mat — each layer still has its own cut line. For Print Then Cut, always use Flatten."
                  }
                },
                {
                  "@type": "Question",
                  "name": "I used Attach but my text is still cutting separately. What do I do?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Attach doesn't work for Print Then Cut. You need to Undo the Attach, select all your layers again, and use Flatten instead. Flatten creates one merged image; Attach just groups layers together while keeping them separate."
                  }
                }
              ]
            })
          }}
        />
      </div>
    </main>
  );
}
