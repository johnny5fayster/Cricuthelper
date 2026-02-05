export interface TroubleshootingStep {
  id: string;
  question: string;
  options: {
    label: string;
    nextStep?: string;
    solution?: Solution;
  }[];
}

export interface Solution {
  title: string;
  description: string;
  steps: string[];
  products?: {
    name: string;
    reason: string;
    affiliateUrl?: string;
  }[];
  videoUrl?: string;
}

export const troubleshootingFlows: Record<string, TroubleshootingStep[]> = {
  "not-cutting": [
    {
      id: "start",
      question: "What material are you trying to cut?",
      options: [
        { label: "Vinyl (adhesive)", nextStep: "vinyl-depth" },
        { label: "Iron-on/HTV", nextStep: "htv-depth" },
        { label: "Cardstock/Paper", nextStep: "paper-depth" },
        { label: "Faux Leather/Thick material", nextStep: "thick-depth" },
      ],
    },
    {
      id: "vinyl-depth",
      question: "Is the blade cutting into the mat (leaving marks)?",
      options: [
        { label: "Yes, cutting too deep into mat", nextStep: "too-deep" },
        { label: "No, barely scratching the material", nextStep: "blade-check" },
        { label: "Cuts some areas but not others", nextStep: "uneven-cut" },
      ],
    },
    {
      id: "htv-depth",
      question: "Is the iron-on placed shiny side down on the mat?",
      options: [
        { label: "Yes, shiny/carrier side is down", nextStep: "blade-check" },
        { label: "No / Not sure", solution: {
          title: "Flip Your Iron-On!",
          description: "Iron-on/HTV must be placed SHINY SIDE DOWN (carrier sheet facing down). The dull side is what gets cut.",
          steps: [
            "Remove material from mat",
            "Flip it over so the shiny carrier sheet is facing DOWN",
            "The textured/dull side should face UP",
            "Press firmly onto mat and try again",
          ],
        }},
      ],
    },
    {
      id: "paper-depth",
      question: "What weight is your cardstock?",
      options: [
        { label: "Light (65 lb or less)", nextStep: "blade-check" },
        { label: "Medium (80 lb)", nextStep: "blade-check" },
        { label: "Heavy (100+ lb)", nextStep: "heavy-card" },
      ],
    },
    {
      id: "thick-depth",
      question: "Which machine are you using?",
      options: [
        { label: "Cricut Maker / Maker 3", nextStep: "maker-thick" },
        { label: "Cricut Explore series", solution: {
          title: "Material Too Thick for Explore",
          description: "The Explore series has limited cutting force. Thick materials like faux leather, chipboard, and craft foam may require a Maker.",
          steps: [
            "Try using thinner material (under 2mm)",
            "If you must cut thick material, consider upgrading to Maker",
            "Some thin faux leather MAY work - try the 'Faux Leather (Paper Thin)' setting",
          ],
        }},
        { label: "Cricut Joy", solution: {
          title: "Material Too Thick for Joy",
          description: "Cricut Joy is designed for small, simple projects. It cannot cut thick materials.",
          steps: [
            "Use vinyl, iron-on, or paper only",
            "For thick materials, you need a Maker or Explore",
          ],
        }},
      ],
    },
    {
      id: "blade-check",
      question: "When did you last replace your blade?",
      options: [
        { label: "Recently / It's new", nextStep: "pressure-check" },
        { label: "A few months ago", nextStep: "blade-worn" },
        { label: "I don't remember", nextStep: "blade-worn" },
      ],
    },
    {
      id: "blade-worn",
      question: "Let's check if your blade is dull. Does it look like this?",
      options: [
        { label: "Blade tip looks flat/rounded", solution: {
          title: "Replace Your Blade",
          description: "A dull blade is the #1 cause of cutting issues. Blades typically last 3-6 months with regular use.",
          steps: [
            "Remove the blade housing from the machine",
            "Push the plunger to expose the blade",
            "Pull out the old blade (careful - it's sharp!)",
            "Insert a new blade until it clicks",
            "Do a test cut before your project",
          ],
          products: [
            { name: "Cricut Premium Fine-Point Blade (2-pack)", reason: "Official replacement blades" },
            { name: "Fine Point Blade Housing + Blade", reason: "If your housing is also damaged" },
          ],
        }},
        { label: "Blade still looks pointy/sharp", nextStep: "pressure-check" },
      ],
    },
    {
      id: "pressure-check",
      question: "Have you tried increasing the pressure?",
      options: [
        { label: "No, using default settings", solution: {
          title: "Increase Cut Pressure",
          description: "Sometimes the default pressure isn't enough. Try increasing it manually.",
          steps: [
            "In Design Space, click 'Edit' next to your material",
            "Increase pressure by 2-4 increments",
            "You can also select 'More Pressure' if available",
            "Do a test cut to check",
            "If still not cutting, increase more or try 2 passes",
          ],
        }},
        { label: "Yes, already maxed out", nextStep: "mat-check" },
      ],
    },
    {
      id: "mat-check",
      question: "How sticky is your mat?",
      options: [
        { label: "Material slides around easily", solution: {
          title: "Your Mat Has Lost Grip",
          description: "If the material moves during cutting, you'll get incomplete cuts. Time to restore or replace the mat.",
          steps: [
            "Clean your mat with baby wipes (let dry completely)",
            "If still not sticky, try a mat resticker spray",
            "For best results, replace mats every 25-50 projects",
            "Use a brayer to firmly press material onto mat before cutting",
          ],
          products: [
            { name: "Cricut StandardGrip Mat (3-pack)", reason: "Most versatile mat type" },
            { name: "Zig 2-Way Glue Pen", reason: "Cheap way to re-sticky your mat" },
          ],
        }},
        { label: "Mat is still sticky", nextStep: "calibration" },
      ],
    },
    {
      id: "calibration",
      question: "Have you calibrated your machine recently?",
      options: [
        { label: "No / What's calibration?", solution: {
          title: "Calibrate Your Machine",
          description: "Calibration ensures your blade is cutting exactly where it should. This is especially important after firmware updates.",
          steps: [
            "Open Design Space on your computer (not mobile)",
            "Go to Menu (☰) → Calibration",
            "Select your machine and follow the on-screen prompts",
            "You'll need a Cricut pen and LightGrip mat",
            "The process takes about 5-10 minutes",
          ],
        }},
        { label: "Yes, recently calibrated", solution: {
          title: "Contact Cricut Support",
          description: "If you've tried everything and still can't cut through, there may be a hardware issue with your machine.",
          steps: [
            "Document everything you've tried",
            "Check if your machine is under warranty",
            "Contact Cricut Support: help.cricut.com",
            "They may offer repair or replacement options",
          ],
        }},
      ],
    },
    {
      id: "too-deep",
      question: "The blade is cutting too deep. Let's fix that:",
      options: [
        { label: "Show me the solution", solution: {
          title: "Reduce Blade Depth & Pressure",
          description: "Cutting into your mat damages both the mat and dulls your blade faster.",
          steps: [
            "Check that you selected the correct material in Design Space",
            "Reduce pressure by 2-4 increments",
            "Make sure blade housing is fully seated (pushed all the way in)",
            "Check that you're using the right blade for the material",
            "Fine-point blade for vinyl, deep-cut for thick materials",
          ],
        }},
      ],
    },
    {
      id: "uneven-cut",
      question: "Cuts are uneven (some areas cut, others don't):",
      options: [
        { label: "Show me solutions", solution: {
          title: "Fix Uneven Cutting",
          description: "Uneven cuts usually mean the material isn't flat or the blade is catching.",
          steps: [
            "Use a brayer to press material FIRMLY and evenly onto mat",
            "Make sure there are no air bubbles under the material",
            "Check that your mat is flat (not warped)",
            "Clean the blade housing - debris can cause issues",
            "Try rotating your design 90° (some machines cut better in certain directions)",
          ],
          products: [
            { name: "Cricut Brayer", reason: "Essential for getting material flat on mat" },
          ],
        }},
      ],
    },
    {
      id: "maker-thick",
      question: "Which blade are you using for the thick material?",
      options: [
        { label: "Fine-Point blade", solution: {
          title: "Use the Knife Blade or Deep-Point Blade",
          description: "The fine-point blade isn't designed for thick materials. The Maker has special blades for this.",
          steps: [
            "For faux leather, thick cardstock: use Deep-Point Blade",
            "For balsa wood, chipboard, leather: use Knife Blade",
            "Install the correct blade in Clamp B",
            "Select the exact material in Design Space (not custom)",
            "Knife blade cuts require the material to be taped down, not just on a mat",
          ],
          products: [
            { name: "Cricut Knife Blade + Housing", reason: "For thick materials (2.4mm+)" },
            { name: "Cricut Deep-Point Blade", reason: "For medium-thick materials" },
          ],
        }},
        { label: "Deep-Point blade", nextStep: "pressure-check" },
        { label: "Knife blade", solution: {
          title: "Knife Blade Tips",
          description: "Knife blade is correct for thick materials, but it needs special handling.",
          steps: [
            "Material MUST be taped to the mat (all 4 edges)",
            "Use StrongGrip mat only",
            "Expect multiple passes (4-8 for thick materials)",
            "Don't open the machine until ALL passes complete",
            "Let the blade cool between attempts if doing multiple projects",
          ],
        }},
      ],
    },
    {
      id: "heavy-card",
      question: "For heavy cardstock, try these settings:",
      options: [
        { label: "Show me the solution", solution: {
          title: "Heavy Cardstock Settings",
          description: "Heavy cardstock (100+ lb) needs more pressure than standard settings.",
          steps: [
            "Select 'Heavy Cardstock' or 'Poster Board' in Design Space",
            "If not available, use Custom and increase pressure",
            "Use 'More Pressure' option if available",
            "Try 2 passes instead of 1",
            "Make sure to use StrongGrip mat for heavy cardstock",
          ],
        }},
      ],
    },
  ],
  
  "mat-grip": [
    {
      id: "start",
      question: "What's happening with your mat?",
      options: [
        { label: "Material won't stick to mat", nextStep: "no-stick" },
        { label: "Material is stuck and won't come off", nextStep: "too-sticky" },
        { label: "Mat is warped/curled", nextStep: "warped" },
      ],
    },
    {
      id: "no-stick",
      question: "How old is your mat?",
      options: [
        { label: "New / Less than a month", nextStep: "new-mat-issue" },
        { label: "A few months old", nextStep: "restore-mat" },
        { label: "Over 6 months / heavily used", solution: {
          title: "Time for a New Mat",
          description: "Mats typically last 25-50 projects depending on use. After that, adhesive wears out.",
          steps: [
            "Order replacement mats",
            "Keep different grip levels: LightGrip (paper), StandardGrip (vinyl), StrongGrip (thick materials)",
            "To extend mat life: always use scraper to remove material, clean regularly, store with cover on",
          ],
          products: [
            { name: "Cricut StandardGrip Mat 12x12 (3-pack)", reason: "Most common size and grip" },
            { name: "Cricut Variety Mat Pack", reason: "Get all three grip levels" },
          ],
        }},
      ],
    },
    {
      id: "restore-mat",
      question: "Have you tried cleaning it?",
      options: [
        { label: "No", solution: {
          title: "Clean Your Mat",
          description: "Mats lose stickiness when covered with debris. Cleaning often restores grip.",
          steps: [
            "Use baby wipes (unscented) to gently wipe the mat",
            "Or use lukewarm water and mild dish soap",
            "Let it air dry COMPLETELY (sticky returns when dry)",
            "Don't use paper towels (leaves lint)",
            "Scrape off any stubborn debris with the Cricut scraper",
          ],
        }},
        { label: "Yes, still not sticky", solution: {
          title: "Re-Sticky Your Mat",
          description: "You can restore adhesive with a few methods:",
          steps: [
            "Method 1: Zig 2-Way Glue Pen - apply thin layer, let dry",
            "Method 2: Spray adhesive (Krylon Easy-Tack) - light coat only",
            "Method 3: Use blue painter's tape around edges to hold material",
            "If nothing works, it's time for a new mat",
          ],
          products: [
            { name: "Zig 2-Way Glue Pen", reason: "Cheap and effective mat resticker" },
            { name: "Krylon Easy-Tack Spray", reason: "Repositionable adhesive spray" },
          ],
        }},
      ],
    },
    {
      id: "new-mat-issue",
      question: "Did you remove the clear plastic cover from the mat?",
      options: [
        { label: "Yes, cover is off", solution: {
          title: "Use a Brayer",
          description: "Even new mats need help getting material to stick properly.",
          steps: [
            "Place material on mat",
            "Use a brayer to roll firmly over entire surface",
            "This removes air bubbles and ensures full contact",
            "Press edges extra firmly - that's where lifting starts",
          ],
          products: [
            { name: "Cricut Brayer", reason: "Essential tool for mat adhesion" },
          ],
        }},
        { label: "What cover?", solution: {
          title: "Remove the Protective Cover!",
          description: "New mats come with a clear plastic film protecting the adhesive.",
          steps: [
            "Look for the clear protective sheet on the sticky side",
            "Peel it off slowly from one corner",
            "Save it! Put it back on when storing the mat",
            "The cover protects the adhesive when not in use",
          ],
        }},
      ],
    },
    {
      id: "too-sticky",
      question: "What material is stuck?",
      options: [
        { label: "Paper/Cardstock", solution: {
          title: "Remove Stuck Paper",
          description: "Paper is delicate. Here's how to remove it without tearing:",
          steps: [
            "Flip the mat over so paper faces down",
            "Gently peel the MAT away from the paper (not paper from mat)",
            "Use the spatula to help lift edges",
            "For stubborn bits: use baby wipes to soften the paper",
            "Next time: use LightGrip mat for paper, not StandardGrip",
          ],
        }},
        { label: "Vinyl/Iron-on", solution: {
          title: "Remove Stuck Vinyl",
          description: "Vinyl shouldn't stick too much if using StandardGrip. Here's how to remove it:",
          steps: [
            "Use the weeding tool to lift a corner",
            "Pull slowly at a 45° angle",
            "Use scraper to help if needed",
            "If residue remains, clean mat with baby wipes",
          ],
        }},
        { label: "Fabric/Felt", solution: {
          title: "Remove Stuck Fabric",
          description: "Fabric fibers can embed in the adhesive. Here's how to handle it:",
          steps: [
            "Use the spatula to GENTLY lift edges",
            "Pull slowly and evenly",
            "For stubborn fibers: use a lint roller on the mat after",
            "Next time: use FabricGrip mat (pink) for fabric",
            "Or use the bonded fabric setting with stabilizer",
          ],
          products: [
            { name: "Cricut FabricGrip Mat", reason: "Specifically designed for fabric" },
          ],
        }},
      ],
    },
    {
      id: "warped",
      question: "How badly is the mat warped?",
      options: [
        { label: "Slightly curled edges", solution: {
          title: "Flatten Curled Mat",
          description: "Minor warping can be fixed:",
          steps: [
            "Place mat sticky-side down on a flat surface",
            "Put heavy books on top",
            "Leave for 24-48 hours",
            "Store mats flat, never rolled",
            "Always put the cover back on when not in use",
          ],
        }},
        { label: "Severely warped/won't feed", solution: {
          title: "Replace Warped Mat",
          description: "Severely warped mats can damage your machine and won't cut accurately.",
          steps: [
            "Badly warped mats should be replaced",
            "Warping is often caused by heat or improper storage",
            "Never leave mats in hot cars or direct sunlight",
            "Store flat with protective cover on",
          ],
          products: [
            { name: "Cricut StandardGrip Mat (3-pack)", reason: "Stock up and rotate mats" },
          ],
        }},
      ],
    },
  ],

  "bluetooth": [
    {
      id: "start",
      question: "Which device are you trying to connect from?",
      options: [
        { label: "Windows computer", nextStep: "windows-bt" },
        { label: "Mac computer", nextStep: "mac-bt" },
        { label: "iPhone/iPad", nextStep: "ios-bt" },
        { label: "Android phone/tablet", nextStep: "android-bt" },
      ],
    },
    {
      id: "windows-bt",
      question: "Is Bluetooth turned on in Windows settings?",
      options: [
        { label: "Yes, Bluetooth is on", nextStep: "windows-pair" },
        { label: "No / Not sure", solution: {
          title: "Enable Bluetooth on Windows",
          description: "First, let's make sure Bluetooth is enabled:",
          steps: [
            "Click Start → Settings → Devices → Bluetooth & other devices",
            "Toggle Bluetooth to 'On'",
            "If you don't see Bluetooth, your computer may not have it",
            "You can buy a USB Bluetooth adapter (~$15) if needed",
          ],
        }},
      ],
    },
    {
      id: "windows-pair",
      question: "Have you paired the Cricut in Windows Bluetooth settings?",
      options: [
        { label: "Yes, it shows as paired", nextStep: "ds-not-finding" },
        { label: "No, can't find it", solution: {
          title: "Pair Cricut in Windows",
          description: "You need to pair your Cricut at the system level first:",
          steps: [
            "Turn off your Cricut, wait 10 seconds, turn back on",
            "Go to Settings → Devices → Bluetooth",
            "Click 'Add Bluetooth or other device'",
            "Select 'Bluetooth'",
            "Wait for your Cricut to appear (may take 30 seconds)",
            "Click on it to pair",
            "Once paired, open Design Space",
          ],
        }},
      ],
    },
    {
      id: "mac-bt",
      question: "Is Bluetooth on and Cricut paired in System Preferences?",
      options: [
        { label: "Yes", nextStep: "ds-not-finding" },
        { label: "No / Not sure", solution: {
          title: "Pair Cricut on Mac",
          description: "Let's pair your Cricut with macOS:",
          steps: [
            "Click Apple menu → System Preferences → Bluetooth",
            "Make sure Bluetooth is ON",
            "Turn off your Cricut, wait 10 seconds, turn back on",
            "Your Cricut should appear in the device list",
            "Click 'Connect' next to it",
            "Once connected, open Design Space",
          ],
        }},
      ],
    },
    {
      id: "ios-bt",
      question: "Is Bluetooth on in your iPhone/iPad settings?",
      options: [
        { label: "Yes, it's on", nextStep: "ios-pair" },
        { label: "No", solution: {
          title: "Enable Bluetooth on iOS",
          description: "Bluetooth must be enabled for Cricut connection:",
          steps: [
            "Open Settings app",
            "Tap Bluetooth",
            "Toggle it ON",
            "Then open Design Space app to connect",
          ],
        }},
      ],
    },
    {
      id: "ios-pair",
      question: "Design Space still can't find the machine?",
      options: [
        { label: "Correct, not finding it", solution: {
          title: "iOS Cricut Connection Fix",
          description: "Try these steps in order:",
          steps: [
            "Close Design Space completely (swipe up)",
            "Turn OFF your Cricut",
            "Turn OFF Bluetooth on your device",
            "Wait 30 seconds",
            "Turn Bluetooth back ON",
            "Turn Cricut back ON",
            "Wait for Cricut light to be solid (not blinking)",
            "Open Design Space and try connecting",
            "If still failing: restart your iPhone/iPad",
          ],
        }},
      ],
    },
    {
      id: "android-bt",
      question: "Does Design Space have location permission?",
      options: [
        { label: "Yes / Not sure", solution: {
          title: "Android Bluetooth Fix",
          description: "Android requires location permission for Bluetooth to work properly:",
          steps: [
            "Go to Settings → Apps → Design Space → Permissions",
            "Enable 'Location' permission",
            "Also make sure Bluetooth permission is enabled",
            "Turn off Cricut, wait 10 seconds, turn back on",
            "Make sure your Cricut light is solid (not blinking)",
            "Open Design Space and try connecting",
            "If failing: try forgetting the device in Bluetooth settings and re-pairing",
          ],
        }},
      ],
    },
    {
      id: "ds-not-finding",
      question: "Cricut is paired but Design Space can't find it?",
      options: [
        { label: "Yes, that's my issue", solution: {
          title: "Design Space Connection Fix",
          description: "Try these steps to get Design Space to recognize your machine:",
          steps: [
            "Completely close Design Space",
            "Turn OFF your Cricut machine",
            "On your computer, forget the Cricut from Bluetooth devices",
            "Restart your computer",
            "Turn ON your Cricut (wait for solid light)",
            "Re-pair in Bluetooth settings",
            "Open Design Space",
            "If using firewall/antivirus, add Design Space to exceptions",
            "Try USB cable as backup if Bluetooth keeps failing",
          ],
        }},
      ],
    },
  ],
};

export const issueCategories = [
  { id: "not-cutting", label: "Not cutting through material", icon: "✂️" },
  { id: "mat-grip", label: "Mat grip issues", icon: "📋" },
  { id: "bluetooth", label: "Bluetooth connection", icon: "📶" },
  { id: "tearing", label: "Material tearing", icon: "📄" },
  { id: "blade", label: "Blade problems", icon: "🔪" },
  { id: "software", label: "Design Space issues", icon: "💻" },
  { id: "uneven", label: "Uneven/incomplete cuts", icon: "📐" },
  { id: "shifting", label: "Material shifting", icon: "↔️" },
];
