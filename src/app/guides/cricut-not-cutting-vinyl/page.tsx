import { Metadata } from 'next';
import Link from 'next/link';
import { FAQSchema, HowToSchema } from '@/components/SchemaMarkup';

export const metadata: Metadata = {
  title: 'Cricut Not Cutting Through Vinyl? 7 Fixes That Actually Work [2026]',
  description: 'Cricut not cutting through vinyl? Learn the 7 most common causes and exactly how to fix them. Step-by-step troubleshooting guide with photos.',
  keywords: 'cricut not cutting vinyl, cricut won\'t cut, cricut blade not cutting, cricut cutting problems, vinyl not cutting through',
  openGraph: {
    title: 'Cricut Not Cutting Through Vinyl? 7 Fixes That Actually Work',
    description: 'Step-by-step guide to fix your Cricut when it won\'t cut through vinyl. Works for all Cricut machines.',
    type: 'article',
  },
};

const faqData = [
  {
    question: "Why is my Cricut not cutting through vinyl?",
    answer: "The most common causes are a dull blade, incorrect pressure settings, wrong material selected in Design Space, or a mat that's lost its grip. Start by checking your blade—if it's been used for more than 3-4 months of regular use, it's probably dull."
  },
  {
    question: "How do I know if my Cricut blade is dull?",
    answer: "A dull blade will leave vinyl partially cut, requiring you to go over cuts multiple times. Examine the blade tip—if it looks flat or rounded instead of sharp and pointy, it's time to replace it. Most blades last 3-6 months with regular use."
  },
  {
    question: "What pressure should I use for vinyl on Cricut?",
    answer: "For standard adhesive vinyl, the default pressure in Design Space usually works. If cuts aren't clean, increase pressure by 2-4 increments using the 'Edit' button next to your material selection. You can also select 'More Pressure' if available."
  },
  {
    question: "Why does my Cricut cut some parts but not others?",
    answer: "Uneven cutting is usually caused by material not being firmly adhered to the mat, a warped mat, or debris in the blade housing. Use a brayer to press material firmly onto the mat, and check that your mat lies completely flat."
  },
  {
    question: "How often should I replace my Cricut blade?",
    answer: "Most crafters replace blades every 3-6 months with regular use, or after cutting about 500-1000 linear feet of material. If you cut a lot of glitter vinyl or thicker materials, you may need to replace more frequently."
  }
];

const howToSteps = [
  { name: "Check Your Blade", text: "Remove the blade housing and inspect the blade tip. If it looks dull or rounded, replace it with a new fine-point blade." },
  { name: "Increase Cut Pressure", text: "In Design Space, click 'Edit' next to your material and increase pressure by 2-4 increments. Try a test cut." },
  { name: "Verify Material Settings", text: "Make sure you've selected the correct material in Design Space. Vinyl, iron-on, and cardstock all need different settings." },
  { name: "Check Mat Grip", text: "If your vinyl slides on the mat, it won't cut cleanly. Use a brayer to press it down firmly, or clean/replace your mat." },
  { name: "Clean the Blade Housing", text: "Remove the blade and check for debris inside the housing. Small vinyl bits can prevent the blade from extending fully." },
  { name: "Run Multiple Passes", text: "If one pass isn't enough, don't eject the mat—press the Cricut button again to cut a second time." },
  { name: "Calibrate Your Machine", text: "Go to Design Space menu → Calibration and follow the prompts. This ensures the blade cuts exactly where it should." },
];

export default function CricutNotCuttingVinylPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-pink-50 to-white">
      <FAQSchema faqs={faqData} />
      <HowToSchema 
        name="How to Fix Cricut Not Cutting Through Vinyl"
        description="Step-by-step guide to troubleshoot and fix a Cricut that won't cut through vinyl"
        steps={howToSteps}
        totalTime="PT15M"
      />
      
      <article className="max-w-4xl mx-auto px-4 py-12">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:text-pink-500">Home</Link>
          <span className="mx-2">→</span>
          <Link href="/guides" className="hover:text-pink-500">Guides</Link>
          <span className="mx-2">→</span>
          <span className="text-gray-700">Cricut Not Cutting Vinyl</span>
        </nav>

        {/* Hero */}
        <header className="mb-10">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            Cricut Not Cutting Through Vinyl? 7 Fixes That Actually Work
          </h1>
          <p className="text-xl text-gray-600 mb-4">
            Nothing's more frustrating than watching your Cricut go through the motions, only to find your vinyl barely scratched. 
            Here's exactly how to fix it—based on thousands of hours of community troubleshooting.
          </p>
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <span>Updated: February 2026</span>
            <span>•</span>
            <span>10 min read</span>
            <span>•</span>
            <span>Works for: Maker, Explore, Joy</span>
          </div>
        </header>

        {/* Quick Fixes Box */}
        <div className="bg-pink-100 rounded-2xl p-6 mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-3">⚡ Try These First (30 Second Fixes)</h2>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start gap-2">
              <span className="text-pink-500 font-bold">1.</span>
              <span><strong>Press the C button again</strong> — don't eject! Running a second pass often works.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-pink-500 font-bold">2.</span>
              <span><strong>Check blade seating</strong> — push the housing firmly until it clicks.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-pink-500 font-bold">3.</span>
              <span><strong>Verify material selection</strong> — "Premium Vinyl" and "Vinyl" have different settings.</span>
            </li>
          </ul>
        </div>

        {/* Main Content */}
        <div className="prose prose-lg prose-pink max-w-none">
          
          <h2 id="why-not-cutting">Why Your Cricut Isn't Cutting Through Vinyl</h2>
          <p>
            Before we dive into fixes, it helps to understand what's actually happening. Your Cricut uses a small, sharp blade 
            that extends from a spring-loaded housing. The machine controls how much pressure pushes that blade into your material.
          </p>
          <p>
            When cuts aren't going through, it's almost always one of these issues:
          </p>
          <ul>
            <li><strong>Dull blade</strong> — the #1 cause, responsible for about 60% of cutting problems</li>
            <li><strong>Wrong pressure settings</strong> — either too light, or material selected incorrectly</li>
            <li><strong>Material movement</strong> — vinyl sliding on a worn mat</li>
            <li><strong>Blade housing issues</strong> — debris blocking the blade or housing not seated properly</li>
          </ul>
          <p>
            Let's fix each one.
          </p>

          <hr className="my-8" />

          <h2 id="fix-1-blade">Fix #1: Check and Replace Your Blade</h2>
          <p>
            <strong>This fixes the problem 60% of the time.</strong> Seriously—if you've been using the same blade for more than 
            3-4 months, just replace it. A new blade costs $5-8 and saves hours of frustration.
          </p>
          
          <h3>How to Check Your Blade</h3>
          <ol>
            <li>Remove the blade housing from your machine (Clamp B on Maker, Clamp A on Explore/Joy)</li>
            <li>Push the plunger on top to expose the blade</li>
            <li>Look at the tip under good light</li>
          </ol>
          <p>
            A <strong>sharp blade</strong> has a pointy, needle-like tip. A <strong>dull blade</strong> looks flat, rounded, 
            or has visible nicks. When in doubt, replace it.
          </p>

          <h3>How to Replace the Blade</h3>
          <ol>
            <li>Push the plunger to expose the old blade</li>
            <li>Carefully pull the blade straight out (it's sharp!)</li>
            <li>Drop the new blade in—it's magnetic and will seat itself</li>
            <li>Release the plunger</li>
            <li>Do a test cut before your actual project</li>
          </ol>

          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-6">
            <p className="font-semibold text-yellow-800">💡 Pro Tip</p>
            <p className="text-yellow-700">
              Keep a pack of replacement blades on hand. Running out mid-project is the worst. 
              We recommend the Cricut 2-pack or a quality third-party brand like HTVRONT.
            </p>
          </div>

          <hr className="my-8" />

          <h2 id="fix-2-pressure">Fix #2: Increase Cut Pressure</h2>
          <p>
            Sometimes the default settings just aren't enough, especially with thicker vinyl brands or glitter vinyl.
          </p>

          <h3>How to Increase Pressure in Design Space</h3>
          <ol>
            <li>Load your project and click "Make It"</li>
            <li>On the material selection screen, click <strong>"Browse All Materials"</strong></li>
            <li>Select your vinyl type</li>
            <li>Click the <strong>"Edit"</strong> button (pencil icon) next to the material</li>
            <li>Increase pressure by 2-4 increments</li>
            <li>You can also enable <strong>"More Pressure"</strong> toggle if available</li>
            <li>Do a test cut</li>
          </ol>
          <p>
            Still not cutting through? Try running <strong>2 passes</strong>—there's a setting for this in the same menu, 
            or just press the flashing Cricut button again without unloading the mat.
          </p>

          <hr className="my-8" />

          <h2 id="fix-3-material">Fix #3: Verify Your Material Selection</h2>
          <p>
            This sounds obvious, but it trips up even experienced crafters. Design Space has dozens of vinyl options, 
            and picking the wrong one means wrong pressure and blade depth.
          </p>
          <p>
            Common mistakes:
          </p>
          <ul>
            <li>Selecting "Vinyl" when using "Premium Vinyl" (or vice versa)</li>
            <li>Using "Iron-On" settings for adhesive vinyl</li>
            <li>Forgetting to change material after switching projects</li>
          </ul>
          <p>
            <strong>For standard adhesive vinyl:</strong> Select "Premium Vinyl" or "Vinyl" depending on brand. 
            Cricut brand uses "Premium Vinyl." Oracal 651 works with "Vinyl" or "Glossy Vinyl."
          </p>
          <p>
            <strong>For glitter vinyl:</strong> Select "Glitter Vinyl"—it needs more pressure.
          </p>

          <hr className="my-8" />

          <h2 id="fix-4-mat">Fix #4: Check Your Mat's Grip</h2>
          <p>
            If your vinyl moves even slightly during cutting, you'll get incomplete or uneven cuts. 
            The mat needs to hold the material firmly in place.
          </p>

          <h3>Signs Your Mat Has Lost Grip</h3>
          <ul>
            <li>Vinyl peels up at corners during cutting</li>
            <li>Material slides when you load the mat</li>
            <li>Cuts are wavy or misaligned</li>
            <li>The mat looks visibly dirty or dull</li>
          </ul>

          <h3>How to Fix It</h3>
          <ol>
            <li><strong>Clean the mat:</strong> Use baby wipes (unscented) and let it air dry completely. Stickiness returns when dry.</li>
            <li><strong>Use a brayer:</strong> Roll firmly over the entire vinyl surface before cutting. This removes air bubbles and ensures full contact.</li>
            <li><strong>Re-sticky the mat:</strong> Apply Zig glue pen or spray adhesive in a thin, even layer.</li>
            <li><strong>Replace if needed:</strong> Mats typically last 25-50 projects. If cleaning doesn't help, it's time for a new one.</li>
          </ol>

          <div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-6">
            <p className="font-semibold text-blue-800">🎯 Which Mat for Vinyl?</p>
            <p className="text-blue-700">
              Use a <strong>StandardGrip (green) mat</strong> for adhesive vinyl. LightGrip is too weak; StrongGrip is overkill 
              and makes weeding harder.
            </p>
          </div>

          <hr className="my-8" />

          <h2 id="fix-5-housing">Fix #5: Clean the Blade Housing</h2>
          <p>
            Small pieces of vinyl, paper fibers, and dust can accumulate inside the blade housing. 
            This debris can prevent the blade from extending fully, resulting in shallow cuts.
          </p>

          <h3>How to Clean the Housing</h3>
          <ol>
            <li>Remove the housing from the machine</li>
            <li>Push the plunger to remove the blade</li>
            <li>Look inside the housing for debris</li>
            <li>Use compressed air or a small brush to clean it out</li>
            <li>Check that the blade moves freely when you push the plunger</li>
            <li>Reinstall blade and housing</li>
          </ol>
          <p>
            While you're at it, make sure the housing is <strong>fully seated</strong> in the clamp. 
            It should click into place. A loose housing can cause inconsistent cuts.
          </p>

          <hr className="my-8" />

          <h2 id="fix-6-passes">Fix #6: Use Multiple Cut Passes</h2>
          <p>
            Sometimes one pass just isn't enough—especially with thicker materials or slightly dull blades.
          </p>

          <h3>Two Ways to Do Multiple Passes</h3>
          <p><strong>Option 1: In Design Space</strong></p>
          <ol>
            <li>Click "Edit" on your material settings</li>
            <li>Increase the number of passes (usually found near pressure settings)</li>
            <li>The machine will automatically cut twice (or more)</li>
          </ol>
          
          <p><strong>Option 2: Manual Second Pass</strong></p>
          <ol>
            <li>After the first cut completes, <strong>don't unload the mat</strong></li>
            <li>Press the flashing Cricut button again</li>
            <li>The machine will cut the exact same path again</li>
            <li>Check the cut before unloading</li>
          </ol>
          <p>
            The manual method is great because you can check after each pass and stop when it's cut through.
          </p>

          <hr className="my-8" />

          <h2 id="fix-7-calibration">Fix #7: Calibrate Your Machine</h2>
          <p>
            If cuts are slightly off or inconsistent, calibration might help. This is especially important 
            after firmware updates or if your machine has been bumped/moved.
          </p>

          <h3>How to Calibrate</h3>
          <ol>
            <li>Open Design Space on a <strong>computer</strong> (not mobile app)</li>
            <li>Click the menu (☰) → Calibration</li>
            <li>Select your machine type</li>
            <li>Follow the on-screen instructions</li>
            <li>You'll need a Cricut pen and LightGrip mat</li>
            <li>The process takes about 5-10 minutes</li>
          </ol>
          <p>
            Calibration helps with precision but won't fix a dull blade or low pressure. 
            It's the last thing to try after checking everything else.
          </p>

          <hr className="my-8" />

          <h2 id="still-not-working">Still Not Working?</h2>
          <p>
            If you've tried all seven fixes and your Cricut still won't cut through vinyl, here's what to do next:
          </p>
          <ul>
            <li><strong>Try a different material</strong> — Cut a simple shape on regular copy paper. If that works, the issue is with your vinyl specifically.</li>
            <li><strong>Try a different blade</strong> — Even new blades can occasionally be defective.</li>
            <li><strong>Check for firmware updates</strong> — Design Space menu → Settings → Update Firmware</li>
            <li><strong>Contact Cricut Support</strong> — If nothing works, there may be a hardware issue. Check if your machine is under warranty.</li>
          </ul>

          <div className="bg-pink-50 rounded-2xl p-6 my-8">
            <h3 className="text-xl font-bold text-gray-900 mb-3">Need More Help?</h3>
            <p className="text-gray-700 mb-4">
              Try our interactive troubleshooting wizard—it'll walk you through the exact steps for your specific situation.
            </p>
            <Link 
              href="/troubleshoot?issue=not-cutting" 
              className="inline-block bg-pink-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-pink-600 transition-colors"
            >
              Start Troubleshooting Wizard →
            </Link>
          </div>

          <hr className="my-8" />

          <h2 id="prevention">How to Prevent Cutting Problems</h2>
          <p>
            A few good habits will save you hours of troubleshooting:
          </p>
          <ul>
            <li><strong>Replace blades regularly</strong> — Every 3-6 months, or when you notice issues</li>
            <li><strong>Clean mats after each use</strong> — Baby wipes work great</li>
            <li><strong>Store mats flat</strong> — Never roll them; always use the protective cover</li>
            <li><strong>Use a brayer</strong> — Press material firmly before every cut</li>
            <li><strong>Do test cuts</strong> — Especially with new materials or after changing settings</li>
            <li><strong>Keep Design Space updated</strong> — Updates fix bugs that cause cutting issues</li>
          </ul>

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
            <Link href="/guides/cricut-mat-not-sticky" className="block p-4 bg-white rounded-xl shadow hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-gray-900">Cricut Mat Not Sticky? Here's How to Fix It</h3>
              <p className="text-gray-600 text-sm mt-1">Restore grip or know when to replace</p>
            </Link>
            <Link href="/guides/htv-not-sticking" className="block p-4 bg-white rounded-xl shadow hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-gray-900">HTV Not Sticking to Shirt? Common Fixes</h3>
              <p className="text-gray-600 text-sm mt-1">Temperature, pressure, and fabric tips</p>
            </Link>
            <Link href="/problems" className="block p-4 bg-white rounded-xl shadow hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-gray-900">All Cricut Problems & Solutions</h3>
              <p className="text-gray-600 text-sm mt-1">Browse our complete troubleshooting database</p>
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
