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
  guideUrl?: string; // Link to detailed guide
}

export interface IssueCategory {
  id: string;
  label: string;
  icon: string;
  popular?: boolean;
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
          guideUrl: "/guides/cricut-mat-not-sticky",
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
          guideUrl: "/guides/cricut-bluetooth-not-connecting",
        }},
      ],
    },
  ],
  "adhesion": [
    {
      id: "start",
      question: "What's not sticking properly?",
      options: [
        { label: "HTV/Iron-on won't stick to blank", nextStep: "htv-blank" },
        { label: "Adhesive vinyl won't stick to surface", nextStep: "vinyl-surface" },
        { label: "Infusible Ink not transferring", nextStep: "infusible" },
        { label: "Sublimation not working", nextStep: "sublimation" },
      ],
    },
    {
      id: "htv-blank",
      question: "What type of blank are you pressing onto?",
      options: [
        { label: "Cotton t-shirt/fabric", nextStep: "htv-cotton" },
        { label: "Polyester/Dri-fit/shiny fabric", nextStep: "htv-poly" },
        { label: "Nylon (bags, jackets)", nextStep: "htv-nylon" },
        { label: "Tumbler/mug/hard surface", nextStep: "htv-hard" },
      ],
    },
    {
      id: "htv-cotton",
      question: "Is the HTV peeling after washing or immediately?",
      options: [
        { label: "Peels right away", solution: {
          title: "Check Press Settings",
          description: "HTV on cotton usually works well. The issue is likely temperature, time, or pressure.",
          steps: [
            "Verify temperature: 305-315°F for standard HTV",
            "Verify time: 10-15 seconds minimum",
            "Use FIRM pressure — you should need effort to close the press",
            "Pre-press the fabric for 3-5 seconds to remove moisture",
            "Make sure the shiny carrier side is UP when pressing",
            "Let it cool appropriately before peeling (check if warm or cold peel)",
          ],
          products: [
            { name: "Teflon Pressing Sheet", reason: "Protects HTV and ensures even heat" },
            { name: "Heat Press Pillow", reason: "For seams, zippers, or uneven surfaces" },
          ],
        }},
        { label: "Peels after washing", solution: {
          title: "Improve Adhesion & Wash Care",
          description: "If HTV survives pressing but fails in wash, it's usually incomplete bonding or harsh washing.",
          steps: [
            "Wait 24-48 hours before first wash (lets adhesive fully cure)",
            "Re-press the design for 5-10 extra seconds",
            "Wash inside out in COLD water",
            "NO fabric softener — it breaks down HTV adhesive",
            "Tumble dry LOW or hang dry",
            "Don't iron directly on the design",
            "Try a different brand of HTV — quality varies significantly",
          ],
        }},
      ],
    },
    {
      id: "htv-poly",
      question: "Is the fabric shiny/slick like athletic wear?",
      options: [
        { label: "Yes, very shiny/slick", solution: {
          title: "Use Low-Temp HTV for Polyester",
          description: "Polyester melts at high temps and has a coating that resists standard HTV. You need special products.",
          steps: [
            "USE LOW-TEMP HTV (designed for poly) — regular HTV won't bond well",
            "Or use Siser EasyWeed Electric or SportFlex (made for poly)",
            "Lower temperature: 270-285°F max",
            "Shorter press time: 10-12 seconds",
            "Light to medium pressure only",
            "ALWAYS test on a scrap or hidden area first",
            "Consider sublimation instead — polyester is perfect for it",
          ],
          products: [
            { name: "Siser SportFlex", reason: "Designed specifically for athletic/stretchy fabrics" },
            { name: "Low-Temp HTV", reason: "Won't melt or scorch polyester" },
          ],
        }},
        { label: "No, just regular polyester blend", nextStep: "htv-cotton" },
      ],
    },
    {
      id: "htv-nylon",
      question: "Nylon is tricky — here's what you need to know:",
      options: [
        { label: "Show me the solution", solution: {
          title: "Pressing HTV on Nylon",
          description: "Nylon has a very low melting point (around 300°F). Standard HTV temps will damage it.",
          steps: [
            "Use LOW-TEMP HTV only — absolutely required",
            "Temperature: 265-275°F MAXIMUM",
            "Time: 10 seconds or less",
            "Light pressure only",
            "ALWAYS test on hidden area first — nylon can melt, bubble, or discolor",
            "Press from INSIDE if possible (put heat on inside of bag/jacket)",
            "Consider using a pressing cloth between heat and nylon",
            "Some nylon simply won't work — know when to use a different blank",
          ],
          products: [
            { name: "Low-Temp HTV", reason: "Essential for nylon — regular HTV will damage it" },
            { name: "Teflon Pressing Sheet", reason: "Protects nylon from direct heat" },
          ],
        }},
      ],
    },
    {
      id: "htv-hard",
      question: "What type of hard surface?",
      options: [
        { label: "Tumbler/water bottle", solution: {
          title: "HTV on Tumblers — Use Mug Press",
          description: "Flat heat presses don't work well on curved surfaces. You need even pressure all around.",
          steps: [
            "Use a mug press or tumbler press (even heat + pressure)",
            "Or use silicone wrap bands with a convection oven",
            "Clean surface with rubbing alcohol first",
            "Use high-quality HTV designed for hard surfaces",
            "Temperature: 320-340°F typically",
            "Time: 30-60 seconds (longer than fabric)",
            "Let cool completely before handling",
            "Consider adhesive vinyl instead — often easier for tumblers",
          ],
          products: [
            { name: "Tumbler Press", reason: "Essential for even pressure on curved surfaces" },
            { name: "Silicone Tumbler Bands", reason: "Budget option with convection oven" },
          ],
        }},
        { label: "Wood/metal/other", solution: {
          title: "HTV on Hard Surfaces",
          description: "HTV can work on hard surfaces but requires proper prep and technique.",
          steps: [
            "Clean surface thoroughly with rubbing alcohol",
            "Surface must be smooth — sand if needed",
            "Use a flat heat press or EasyPress with firm pressure",
            "Higher temps needed: 320-350°F",
            "Longer time: 30-60 seconds",
            "May need multiple presses",
            "For wood: seal with polycrylic first for better adhesion",
            "For metal: ensure powder-coated or primed surface",
          ],
        }},
      ],
    },
    {
      id: "vinyl-surface",
      question: "What surface won't the adhesive vinyl stick to?",
      options: [
        { label: "Tumbler/cup (curved)", solution: {
          title: "Vinyl on Curved Surfaces",
          description: "Vinyl struggles with curves and textured surfaces. Here's how to make it work.",
          steps: [
            "Clean surface with rubbing alcohol (remove all oils/residue)",
            "Use PERMANENT vinyl (not removable) for curved surfaces",
            "Apply transfer tape firmly with a scraper",
            "Use the 'hinge method' — tape one side, flip and apply slowly",
            "Work in small sections, pressing out air bubbles",
            "Use a heat gun on LOW to help vinyl conform to curves",
            "Let it cure 24-72 hours before use/washing",
            "For extreme curves, consider vinyl designed for vehicles (more conformable)",
          ],
          products: [
            { name: "Oracal 651 Permanent Vinyl", reason: "Strong adhesive, great for tumblers" },
            { name: "Heat Gun", reason: "Helps vinyl conform to curves" },
          ],
        }},
        { label: "Painted/sealed surface", solution: {
          title: "Vinyl on Painted/Sealed Surfaces",
          description: "Some paints and sealers prevent vinyl adhesion. Here's how to troubleshoot.",
          steps: [
            "Test adhesion in a hidden area first",
            "Ensure paint/sealer is FULLY cured (can take weeks)",
            "Clean with rubbing alcohol",
            "Lightly sand glossy surfaces with fine grit (400+) for better grip",
            "Don't apply vinyl over wax or silicone-based sealers",
            "Use permanent vinyl, not removable",
            "Consider a different sealer — Polycrylic works well under vinyl",
          ],
        }},
        { label: "Textured surface", solution: {
          title: "Vinyl on Textured Surfaces",
          description: "Vinyl needs smooth surfaces for good adhesion. Texture creates air gaps.",
          steps: [
            "Vinyl generally won't work on heavily textured surfaces",
            "For light texture: use more transfer tape pressure, burnish well",
            "For canvas: apply Mod Podge first, let dry, then apply vinyl",
            "Consider paint or stenciling instead of vinyl for textured items",
            "HTV with a heat press may work better than adhesive vinyl",
          ],
        }},
        { label: "Plastic container (smooth)", solution: {
          title: "Vinyl on Plastic",
          description: "Plastic can be tricky because some types resist adhesive.",
          steps: [
            "Clean thoroughly with rubbing alcohol",
            "Make sure it's not a 'non-stick' plastic",
            "Use PERMANENT vinyl (651 or similar)",
            "Avoid applying in cold — vinyl adhesive works best at room temp",
            "Press firmly with scraper, removing all air bubbles",
            "Let cure 24 hours before handling",
            "For dishwasher safety, the plastic must be dishwasher safe AND hand wash recommended",
          ],
        }},
      ],
    },
    {
      id: "infusible",
      question: "What's happening with your Infusible Ink?",
      options: [
        { label: "Colors are faded/dull", solution: {
          title: "Fix Faded Infusible Ink",
          description: "Infusible Ink requires very specific conditions to transfer vibrant colors.",
          steps: [
            "Temperature must be 385-400°F — too low = faded colors",
            "Time must be 40-60 seconds MINIMUM",
            "Use light pressure only (too much traps moisture)",
            "Blank MUST be polyester or Cricut-branded Infusible Ink blank",
            "100% cotton will NOT work — colors will be very faded",
            "Don't open the press early — full time required",
            "Use Cricut's butcher paper (or plain white) under and over",
            "Make sure transfer sheet is face DOWN on blank",
          ],
          products: [
            { name: "Cricut Infusible Ink Blanks", reason: "Specifically coated for Infusible Ink" },
            { name: "White Butcher Paper", reason: "Absorbs excess ink, prevents blowout" },
          ],
        }},
        { label: "Ghosting/blurry image", solution: {
          title: "Fix Infusible Ink Ghosting",
          description: "Ghosting happens when the transfer sheet moves during pressing. Any shift = blur.",
          steps: [
            "Tape transfer sheet to blank with heat-resistant tape",
            "Use light pressure — heavy pressure can cause shifting",
            "Do NOT move or peek during pressing",
            "Pre-press blank for 15 seconds to remove moisture",
            "Make sure blank is perfectly flat",
            "Let cool COMPLETELY before removing transfer sheet (cold peel)",
            "If using a tumbler, use shrink wrap or silicone bands to hold in place",
          ],
          products: [
            { name: "Heat Resistant Tape", reason: "Keeps transfer from shifting" },
            { name: "Cricut Mug Press", reason: "Even pressure prevents ghosting on mugs" },
          ],
        }},
        { label: "Not transferring at all", solution: {
          title: "Infusible Ink Not Transferring",
          description: "If nothing is transferring, the basics are wrong.",
          steps: [
            "Confirm blank is POLYESTER or Infusible Ink compatible — cotton won't work",
            "Make sure transfer is face DOWN (ink touching blank)",
            "Temperature must reach 385°F+ — use a temp gun to verify",
            "For mugs: Cricut Mug Press required — regular press won't work",
            "Don't use parchment paper — use plain butcher paper only",
            "Transfer should be completely dry before pressing",
            "Try a longer press (60+ seconds)",
          ],
        }},
      ],
    },
    {
      id: "sublimation",
      question: "What's the sublimation issue?",
      options: [
        { label: "Colors are faded/washed out", solution: {
          title: "Fix Faded Sublimation",
          description: "Sublimation requires specific conditions for vibrant colors. Any deviation = faded results.",
          steps: [
            "Blank MUST be polyester (65%+ poly) or poly-coated",
            "Temperature: 385-400°F (use infrared thermometer to verify)",
            "Time: 45-60 seconds minimum",
            "Print on CORRECT side of sublimation paper (bright white side)",
            "Use sublimation ink only — regular ink won't work",
            "Colors look dull on paper but brighten when pressed — this is normal",
            "Make sure ICC color profile is installed for your printer",
            "Check ink levels — low ink = faded areas",
          ],
          products: [
            { name: "Infrared Thermometer", reason: "Verify actual press temperature" },
            { name: "A-Sub Sublimation Paper", reason: "Quality paper for vibrant transfers" },
          ],
        }},
        { label: "Ghosting/blurry", solution: {
          title: "Fix Sublimation Ghosting",
          description: "Sublimation turns to gas instantly — any movement causes ghosting/blur.",
          steps: [
            "Tape paper to blank securely with heat-resistant tape",
            "Use light-medium pressure (not too heavy)",
            "DO NOT move or lift press during transfer",
            "Pre-press blank to remove moisture (moisture = ghosting)",
            "Make sure paper is flat against blank — no air gaps",
            "Use fresh paper — humidity-damaged paper ghosts more",
            "Let cool before removing paper",
          ],
        }},
        { label: "Won't transfer to blank", solution: {
          title: "Sublimation Not Transferring",
          description: "Sublimation only works on polyester or poly-coated surfaces.",
          steps: [
            "CRITICAL: Blank must be 65%+ polyester or have poly coating",
            "Cotton, bamboo, uncoated ceramics = will NOT work",
            "Make sure you're using SUBLIMATION ink (not regular inkjet)",
            "Print on correct side of sublimation paper (usually brighter side)",
            "Image should be MIRRORED before printing",
            "Verify press reaches 385-400°F (use temp gun)",
            "Try pressing longer (60+ seconds)",
            "For hard blanks: must have sublimation coating",
          ],
        }},
        { label: "Colors are wrong/off", solution: {
          title: "Fix Sublimation Color Issues",
          description: "Color management in sublimation is complex. Here's how to troubleshoot.",
          steps: [
            "Install correct ICC profile for your printer + paper combo",
            "Don't use color management in BOTH the design software AND printer driver — pick one",
            "Ensure monitor is calibrated (what you see may not be accurate)",
            "Different blanks absorb differently — white/light blanks only",
            "Sublimation is transparent — won't show on dark blanks",
            "Try increasing saturation by 10-20% in your design",
            "Yellow often looks green when underheated — increase temp",
            "Do test prints on paper before committing to blanks",
          ],
        }},
      ],
    },
  ],

  "design-space": [
    {
      id: "start",
      question: "What's happening with Design Space?",
      options: [
        { label: "Slow/lagging", nextStep: "slow" },
        { label: "Crashes or freezes", nextStep: "crashes" },
        { label: "Won't open/blank screen", nextStep: "wont-open" },
        { label: "Can't log in", nextStep: "login" },
        { label: "Won't find my machine", nextStep: "no-machine" },
      ],
    },
    {
      id: "slow",
      question: "When does it lag?",
      options: [
        { label: "All the time", solution: {
          title: "Speed Up Design Space",
          description: "Design Space can be resource-hungry. Here's how to improve performance.",
          steps: [
            "Close other programs — especially Chrome/browsers",
            "Clear the Design Space cache (see steps below)",
            "Windows: C:\\Users\\[You]\\AppData\\Local\\Cricut Design Space\\Cache — delete contents",
            "Mac: ~/Library/Application Support/Cricut Design Space/Cache — delete contents",
            "Uninstall and reinstall Design Space (fresh install)",
            "Disable 'Efficiency Mode' in Windows (Settings → Apps → Design Space)",
            "Make sure your computer meets minimum requirements (8GB RAM recommended)",
            "Consider using the web version: design.cricut.com",
          ],
        }},
        { label: "Only with large/complex designs", solution: {
          title: "Optimize Complex Designs",
          description: "Large designs slow down Design Space. Here's how to work with them.",
          steps: [
            "Break large designs into smaller pieces",
            "Flatten layers you're done editing",
            "Reduce image quality/resolution before uploading",
            "Avoid using many small images — combine them first",
            "Weld shapes together when possible",
            "Close and reopen Design Space periodically",
            "Save your work frequently",
          ],
        }},
        { label: "After a recent update", solution: {
          title: "Post-Update Lag Fix",
          description: "Updates often cause temporary performance issues.",
          steps: [
            "Wait 24-48 hours — sometimes updates need to 'settle'",
            "Clear Design Space cache",
            "Completely uninstall, then reinstall from cricut.com/setup",
            "Check Cricut community forums — often others have the same issue",
            "Report the issue to Cricut so they can fix in next update",
            "Try the web version temporarily: design.cricut.com",
          ],
        }},
      ],
    },
    {
      id: "crashes",
      question: "When does it crash?",
      options: [
        { label: "When I try to cut/send to machine", solution: {
          title: "Fix Crashes When Cutting",
          description: "Crashes during cut are often connection or file issues.",
          steps: [
            "Restart both Design Space AND your Cricut machine",
            "Disconnect and reconnect your machine (Bluetooth or USB)",
            "Reduce design complexity — try a simple test cut first",
            "Clear Design Space cache",
            "Check for antivirus/firewall blocking Design Space",
            "Add Design Space to your firewall's allowed list",
            "Try USB cable instead of Bluetooth",
            "Update your machine firmware (Settings → Update Firmware)",
          ],
        }},
        { label: "Randomly while designing", solution: {
          title: "Fix Random Crashes",
          description: "Random crashes often point to software corruption or resource issues.",
          steps: [
            "Save work frequently! (Ctrl/Cmd + S)",
            "Clear the Design Space cache",
            "Uninstall completely, restart computer, reinstall fresh",
            "Make sure you have at least 2GB free disk space",
            "Update your graphics drivers",
            "Run as Administrator (Windows) — right-click, 'Run as Administrator'",
            "Check Windows Event Viewer for error details",
            "Try on a different device to rule out computer issues",
          ],
        }},
        { label: "When uploading images", solution: {
          title: "Fix Upload Crashes",
          description: "Large or incompatible files can crash the upload process.",
          steps: [
            "Reduce image file size — aim for under 5MB",
            "Use PNG or SVG formats (avoid BMP, TIFF)",
            "Make sure SVG files aren't corrupt — open in another program first",
            "For photos, reduce resolution before uploading",
            "Clear browser cache if using web version",
            "Try uploading from a different device",
            "Convert complex SVGs to simpler versions using Inkscape",
          ],
        }},
      ],
    },
    {
      id: "wont-open",
      question: "What happens when you try to open Design Space?",
      options: [
        { label: "Shows blank white screen", solution: {
          title: "Fix Blank Screen",
          description: "A blank screen usually means corrupted cache or display issues.",
          steps: [
            "Clear Design Space cache:",
            "Windows: Delete contents of C:\\Users\\[You]\\AppData\\Local\\Cricut Design Space\\Cache",
            "Mac: Delete contents of ~/Library/Application Support/Cricut Design Space/Cache",
            "Restart your computer",
            "Uninstall Design Space, restart, reinstall fresh from cricut.com/setup",
            "Update your graphics drivers",
            "Try running in compatibility mode (Windows)",
            "Disable hardware acceleration in graphics settings",
          ],
        }},
        { label: "Loads then closes immediately", solution: {
          title: "Fix Immediate Close",
          description: "Instant closes often indicate corruption or blocked processes.",
          steps: [
            "Right-click Design Space → Run as Administrator",
            "Disable antivirus temporarily and try again",
            "Check Task Manager — end any stuck Design Space processes",
            "Clear Design Space cache files",
            "Completely uninstall (use Revo Uninstaller for thorough removal)",
            "Restart computer, reinstall fresh",
            "If still failing, try creating a new Windows user account and installing there",
          ],
        }},
        { label: "Spinner forever/infinite loading", solution: {
          title: "Fix Infinite Loading",
          description: "Infinite spinner usually means network or login issues.",
          steps: [
            "Check your internet connection",
            "Restart your router/modem",
            "Clear Design Space cache",
            "Check if Cricut servers are down (check @cricutdesigns on Twitter)",
            "Disable VPN if you're using one",
            "Try using web version: design.cricut.com",
            "Reinstall Design Space fresh",
          ],
        }},
      ],
    },
    {
      id: "login",
      question: "What's the login issue?",
      options: [
        { label: "Password not working", solution: {
          title: "Password Reset",
          description: "If your password isn't working, reset it through Cricut's website.",
          steps: [
            "Go to cricut.com and click 'Sign In'",
            "Click 'Forgot Password'",
            "Enter your email and check your inbox",
            "Click the reset link (check spam folder if not in inbox)",
            "Create a new password (8+ characters, mix of letters/numbers)",
            "Try logging into Design Space with new password",
            "If still failing, contact Cricut support",
          ],
        }},
        { label: "Account locked/error message", solution: {
          title: "Unlock Account",
          description: "Too many failed login attempts can lock your account.",
          steps: [
            "Wait 30 minutes and try again",
            "Clear browser cookies and cache",
            "Reset your password (even if you think it's correct)",
            "Try logging in at cricut.com first",
            "Contact Cricut Member Care if still locked",
            "Cricut Support: help.cricut.com",
          ],
        }},
        { label: "Can't create account", solution: {
          title: "Account Creation Issues",
          description: "Having trouble creating a new Cricut account?",
          steps: [
            "Make sure email isn't already registered",
            "Try a different email address",
            "Use a different browser",
            "Disable ad blockers temporarily",
            "Check that password meets requirements (8+ chars, numbers, special char)",
            "Try creating account at cricut.com, not in Design Space",
            "Contact Cricut support if issues persist",
          ],
        }},
      ],
    },
    {
      id: "no-machine",
      question: "Is the machine turned on with a solid light?",
      options: [
        { label: "Yes, light is solid", nextStep: "machine-solid" },
        { label: "Light is blinking", solution: {
          title: "Machine Still Connecting",
          description: "A blinking light means the machine is still starting up or searching.",
          steps: [
            "Wait 30-60 seconds for light to become solid",
            "If still blinking, turn off machine, wait 10 seconds, turn back on",
            "Make sure Bluetooth is enabled on your device",
            "Move machine closer to computer (within 10 feet)",
            "Try USB cable connection instead of Bluetooth",
            "Check if machine is already connected to a different device",
          ],
        }},
        { label: "No light/machine won't turn on", solution: {
          title: "Machine Power Issues",
          description: "If the machine won't turn on, check power connections.",
          steps: [
            "Ensure power cord is firmly plugged into machine AND outlet",
            "Try a different outlet",
            "Check if outlet works (plug in a lamp)",
            "Try a different power cord if available",
            "Look for any tripped breakers",
            "If none of this works, contact Cricut — may be hardware issue",
          ],
        }},
      ],
    },
    {
      id: "machine-solid",
      question: "Is the machine paired in your Bluetooth settings?",
      options: [
        { label: "Yes", solution: {
          title: "Machine Paired But Not Found",
          description: "Sometimes the connection gets stuck. Here's how to reset it.",
          steps: [
            "Close Design Space completely",
            "Turn OFF the Cricut machine",
            "Forget/remove the machine from your Bluetooth settings",
            "Restart your computer",
            "Turn ON the Cricut (wait for solid light)",
            "Re-pair in Bluetooth settings",
            "Open Design Space",
            "If still not found, try USB cable",
          ],
        }},
        { label: "No, can't find it to pair", solution: {
          title: "Machine Not Appearing in Bluetooth",
          description: "If the machine isn't showing up in Bluetooth search:",
          steps: [
            "Turn off machine, wait 10 seconds, turn back on",
            "Wait for solid light (not blinking)",
            "On your computer, turn Bluetooth off then on",
            "Click 'Add Bluetooth device' and search again",
            "Try on a different device (phone/other computer)",
            "If using USB Bluetooth adapter, try a different USB port",
            "Some older machines need USB — check your model",
          ],
        }},
      ],
    },
  ],

  "print-then-cut": [
    {
      id: "start",
      question: "What's the Print Then Cut issue?",
      options: [
        { label: "Cuts are misaligned/offset", nextStep: "misaligned" },
        { label: "Machine can't read the sensor marks", nextStep: "sensor-marks" },
        { label: "Calibration keeps failing", nextStep: "calibration-fail" },
        { label: "Print size is wrong", nextStep: "print-size" },
        { label: "Text is cutting instead of printing", solution: {
          title: "Text Cutting Instead of Printing",
          description: "When you add text to an image, each layer cuts separately unless you flatten them together.",
          steps: [
            "Select BOTH your image AND all text layers (hold Shift and click each, or drag to select all)",
            "Click 'Flatten' at the bottom of the Layers panel (NOT Attach!)",
            "You should now see ONE combined layer that says 'Print Then Cut'",
            "Flatten merges layers into one printable image; Attach just groups them but keeps separate cut lines",
          ],
          guideUrl: "/guides/print-then-cut-text-cutting-fix",
        }},
      ],
    },
    {
      id: "misaligned",
      question: "How far off is the cut?",
      options: [
        { label: "Way off (1/4 inch or more)", nextStep: "calibration-fail" },
        { label: "Slightly off (consistent direction)", solution: {
          title: "Fine-Tune Calibration",
          description: "If cuts are consistently off in one direction, recalibrate with precision.",
          steps: [
            "Go to Design Space → Menu (☰) → Calibration",
            "Print the calibration sheet (don't use 'fit to page' — print at 100%)",
            "Run through calibration carefully — really look at those lines",
            "After the rough calibration, do the FINE calibration",
            "Fine calibration adjusts in small increments — take your time",
            "If still off after calibration, note which direction and contact Cricut",
          ],
          guideUrl: "/guides/print-then-cut-not-lining-up",
        }},
        { label: "Varies/inconsistent", solution: {
          title: "Fix Inconsistent Cut Alignment",
          description: "If alignment varies between cuts, it's usually a material or feeding issue.",
          steps: [
            "Make sure material is FLAT against the mat — use a brayer",
            "Ensure mat is feeding straight (check rollers for debris)",
            "Use a fresh, sticky mat",
            "Don't load mat at an angle",
            "Check that room lighting isn't interfering (avoid direct sunlight)",
            "Make sure sensor window on machine is clean",
            "Try printing on plain white paper first as a test",
          ],
        }},
      ],
    },
    {
      id: "sensor-marks",
      question: "What type of paper are you using?",
      options: [
        { label: "Glossy/shiny sticker paper", solution: {
          title: "Sensor Can't Read Glossy Paper",
          description: "Glossy and reflective papers interfere with the sensor. Here's the fix.",
          steps: [
            "Apply MATTE transparent tape over the black sensor marks",
            "Or use matte sticker paper instead of glossy",
            "Make sure lighting in the room isn't causing reflections",
            "Try tilting the machine slightly away from lights",
            "Ensure sensor marks printed solid black (not gray/faded)",
            "Clean the sensor lens on your machine with a soft cloth",
          ],
          products: [
            { name: "Matte Printable Sticker Paper", reason: "Works best with Print Then Cut" },
            { name: "Scotch Magic Tape (Matte)", reason: "Covers glossy sensor marks" },
          ],
        }},
        { label: "Colored/kraft paper", solution: {
          title: "Use White Paper Only",
          description: "Print Then Cut only works on white or very light paper. The sensor needs contrast.",
          steps: [
            "Use WHITE paper only — sensor needs black marks on white background",
            "Light cream/ivory may work, but results vary",
            "Kraft, colored, or dark paper will NOT work",
            "Consider printing onto white sticker paper, then applying to colored surface after",
          ],
        }},
        { label: "White matte paper", solution: {
          title: "Sensor Reading Issues on Matte Paper",
          description: "If even matte white paper fails, try these fixes.",
          steps: [
            "Clean the sensor lens on your machine (small window near blade)",
            "Make sure sensor marks are DARK black — check printer ink levels",
            "Use 'Best' or 'High Quality' print setting — draft mode can fade marks",
            "Avoid direct sunlight/bright lights shining on the machine",
            "Try a different lighting angle in the room",
            "Make sure paper is flat and smooth on mat",
            "Calibrate your machine (Menu → Calibration)",
          ],
        }},
      ],
    },
    {
      id: "calibration-fail",
      question: "What happens during calibration?",
      options: [
        { label: "Machine cuts, but lines don't match", solution: {
          title: "Calibration Lines Off",
          description: "If calibration cuts don't match printed lines, here's how to get it right.",
          guideUrl: "/guides/how-to-calibrate-cricut",
          steps: [
            "Print calibration page at EXACTLY 100% — don't use 'Fit to Page'",
            "In print dialog, make sure 'Actual Size' or '100%' is selected",
            "Use bright lighting when evaluating the cuts",
            "Really look at which line the cut goes through — be precise",
            "If you can't tell, try again with fresh printout",
            "After selecting lines, run the FINE calibration too",
            "If still way off, try factory reset (Settings → Reset) then recalibrate",
          ],
        }},
        { label: "Machine won't read calibration page", solution: {
          title: "Can't Read Calibration Page",
          description: "Same fixes as sensor mark issues apply here.",
          steps: [
            "Make sure you printed from Design Space (not downloaded PDF)",
            "Print at 100% scale — no shrinking or fitting",
            "Use white, matte paper",
            "Check that black lines printed solid (not faded)",
            "Clean the sensor lens on machine",
            "Avoid bright lights shining on the mat",
            "Try covering any glossy areas with matte tape",
          ],
        }},
        { label: "Machine doesn't cut at all", solution: {
          title: "Calibration Not Cutting",
          description: "If the machine moves but doesn't cut during calibration:",
          steps: [
            "Make sure blade is installed in Clamp B",
            "Check that blade is seated properly (push until it clicks)",
            "Try a new blade",
            "Ensure mat is loaded correctly — machine should grab it",
            "Check for debris in blade housing",
            "Restart machine and Design Space, try again",
          ],
        }},
      ],
    },
    {
      id: "print-size",
      question: "What's wrong with the print size?",
      options: [
        { label: "Print is smaller than expected", solution: {
          title: "Print Shrinking — Scale Issue",
          description: "This is the #1 Print Then Cut problem! Here's the fix.",
          steps: [
            "When printing, NEVER use 'Fit to Page' or 'Scale to Fit'",
            "Select 'Actual Size' or '100%' in print settings",
            "Check the preview — it should match your Design Space size",
            "If printing from Design Space, let it handle the sizing",
            "For system print dialog: Actual Size > Fit/Shrink",
            "If still wrong, check your printer's default settings",
            "Some printers have 'Borderless' settings that affect size",
          ],
        }},
        { label: "Print is larger than expected", solution: {
          title: "Print Enlarging",
          description: "Enlarging is less common but can happen.",
          steps: [
            "Check print settings — should be '100%' or 'Actual Size'",
            "Disable any 'Borderless' printing options",
            "Verify the design size in Design Space before printing",
            "Make sure your printer driver isn't auto-scaling",
            "Some photo printers enlarge by default — check settings",
          ],
        }},
        { label: "Print is cropped/cut off", solution: {
          title: "Print Being Cropped",
          description: "If parts of your design aren't printing:",
          steps: [
            "Make sure design is within Print Then Cut limits (9.25\" x 6.75\")",
            "Check margin/edge settings in print dialog",
            "Avoid 'Borderless' printing — can cause cropping",
            "Make sure entire design including sensor marks is on page",
            "Verify paper size matches what you loaded (Letter vs A4)",
          ],
        }},
      ],
    },
  ],

  "htv-problems": [
    {
      id: "start",
      question: "What's happening with your HTV/iron-on?",
      options: [
        { label: "Won't stick to fabric", nextStep: "not-sticking" },
        { label: "Peels after washing", nextStep: "peel-wash" },
        { label: "Peels when removing carrier sheet", nextStep: "peel-carrier" },
        { label: "Cracking or flaking", nextStep: "cracking" },
        { label: "Burnt or scorched look", nextStep: "burnt" },
      ],
    },
    {
      id: "not-sticking",
      question: "Is your heat press/iron reaching proper temperature?",
      options: [
        { label: "Yes, verified with temp gun", nextStep: "temp-verified" },
        { label: "I think so/not sure", solution: {
          title: "Verify Your Temperature",
          description: "Inaccurate temperature is the #1 cause of HTV failures. Heat presses can be off by 20-50°F!",
          steps: [
            "Get an infrared thermometer ($15-20) — essential tool",
            "Check temp at multiple spots on your press — can vary across surface",
            "Adjust press setting until gun reads correct temp (305-320°F for most HTV)",
            "Regular irons are unreliable — temp settings don't match actual heat",
            "If using iron, EasyPress is a worthy upgrade",
            "Press surface should be hot throughout — preheat for 5+ minutes",
          ],
          products: [
            { name: "Infrared Thermometer", reason: "Verify actual press temperature — essential" },
            { name: "Cricut EasyPress 2", reason: "Consistent temp and pressure for HTV" },
          ],
        }},
        { label: "Using a regular clothes iron", solution: {
          title: "Irons Are Unreliable",
          description: "Regular irons have inconsistent temperature and no pressure. This is likely your issue.",
          steps: [
            "Regular irons are the #1 cause of HTV failures",
            "Settings (cotton, linen) don't match actual temperature",
            "No steam! Steam = moisture = adhesive failure",
            "If you must use iron: max heat, no steam, heavy pressure",
            "Press multiple times: 15-20 seconds, lift, repeat",
            "Seriously consider an EasyPress or heat press — game changer",
          ],
          products: [
            { name: "Cricut EasyPress 2 (9x9)", reason: "Consistent temp, proper pressure, much better results" },
            { name: "Heat Press Machine", reason: "Best option for serious crafting" },
          ],
        }},
      ],
    },
    {
      id: "temp-verified",
      question: "Did you pre-press the fabric first?",
      options: [
        { label: "Yes", nextStep: "check-pressure" },
        { label: "No, what's pre-pressing?", solution: {
          title: "Pre-Press Your Fabric",
          description: "Pre-pressing removes moisture and wrinkles — both enemies of HTV adhesion.",
          steps: [
            "Press blank fabric for 3-5 seconds BEFORE applying HTV",
            "This removes moisture from fabric and sizing",
            "Especially important for new shirts (manufacturing chemicals)",
            "Also flattens any wrinkles or seams",
            "Let fabric cool slightly, then apply HTV and press again",
            "For best results on 100% cotton: wash the shirt first",
          ],
        }},
      ],
    },
    {
      id: "check-pressure",
      question: "Are you pressing with firm, even pressure?",
      options: [
        { label: "Yes, pressing hard", solution: {
          title: "Check Other Factors",
          description: "If temp and pressure are right, consider these other causes:",
          steps: [
            "Wrong side of HTV — shiny carrier should face UP during pressing",
            "Fabric may have coating/finish that repels adhesive",
            "Try a different blank from a different source",
            "HTV may be old/expired — adhesive degrades over time",
            "Try a different brand of HTV",
            "Make sure pressing surface is FLAT and HARD",
            "Check for seams/bumps under the design — use pressing pillow",
          ],
          products: [
            { name: "Pressing Pillow", reason: "Creates even pressure over seams and buttons" },
          ],
        }},
        { label: "Maybe not hard enough?", solution: {
          title: "Apply More Pressure",
          description: "Pressure is just as important as heat. Here's how to improve it.",
          steps: [
            "With EasyPress: lean your body weight into it",
            "With regular iron: press down HARD with both hands",
            "With heat press: should close with slight resistance",
            "Surface MUST be hard — ironing boards are too soft",
            "Use a flat, sturdy table or the floor",
            "Put a folded towel or mat under the shirt for firm base",
            "Press multiple areas if design is larger than press",
          ],
        }},
      ],
    },
    {
      id: "peel-wash",
      question: "How soon did you wash it?",
      options: [
        { label: "Within 24 hours", solution: {
          title: "Wait Before Washing",
          description: "HTV adhesive needs time to fully cure.",
          steps: [
            "Wait 24-48 hours before first wash — adhesive needs to cure",
            "Some brands recommend 72 hours",
            "This is the most commonly ignored instruction",
            "After waiting, wash inside out on cold",
            "No fabric softener! It breaks down adhesive",
            "Tumble dry low or hang dry",
          ],
        }},
        { label: "After 24+ hours", solution: {
          title: "Improve Wash Durability",
          description: "If you waited but it still peeled, try these improvements:",
          steps: [
            "Always wash inside out",
            "Cold water only — hot water loosens adhesive",
            "NO fabric softener — ever (breaks down adhesive)",
            "No dryer sheets — same problem",
            "Check detergent doesn't contain fabric softener",
            "Tumble dry LOW or hang dry",
            "Never iron directly on the design",
            "Consider re-pressing the design for 5-10 extra seconds",
            "Try a higher-quality HTV brand (Siser EasyWeed is highly rated)",
          ],
          products: [
            { name: "Siser EasyWeed HTV", reason: "Known for excellent durability after washing" },
          ],
        }},
      ],
    },
    {
      id: "peel-carrier",
      question: "Is the HTV a warm peel or cold peel?",
      options: [
        { label: "Warm peel", solution: {
          title: "Warm Peel Technique",
          description: "Warm peel HTV needs to be peeled while still warm but not hot.",
          steps: [
            "Remove carrier sheet while still warm to touch",
            "Wait 5-10 seconds after pressing — not immediately",
            "Peel slowly at a 45° angle",
            "If HTV is lifting with carrier, press again for 10+ seconds",
            "Try peeling from a different corner",
            "Press again over the design after removing carrier (with parchment paper)",
          ],
        }},
        { label: "Cold peel", solution: {
          title: "Cold Peel Technique",
          description: "Cold peel HTV must cool completely before removing carrier.",
          steps: [
            "Wait until COMPLETELY cool to touch",
            "Don't rush — at least 30-60 seconds",
            "Peel slowly at a 45° angle",
            "If HTV is pulling up, wait longer",
            "Press again if needed after carrier is removed",
            "Some cold peel HTV benefits from pressing again after removal",
          ],
        }},
        { label: "Not sure/mixed results", solution: {
          title: "Determine Peel Type",
          description: "If you're getting inconsistent results, try both methods to see what works.",
          steps: [
            "Check packaging or manufacturer website for peel instructions",
            "If unknown: try cold peel first (safer)",
            "Test on a scrap piece of fabric first",
            "Generally: glitter/specialty HTV = cold peel, standard HTV = warm peel",
            "Cricut Everyday Iron-On = warm peel",
            "Cricut SportFlex = warm peel",
            "Cricut Glitter = cold peel",
          ],
        }},
      ],
    },
    {
      id: "cracking",
      question: "Is it cracking right away or after wearing/washing?",
      options: [
        { label: "Right away", solution: {
          title: "Fix Immediate Cracking",
          description: "Cracking right after pressing usually means too much heat or wrong material choice.",
          steps: [
            "Temperature may be too HIGH — lower by 10-15°F",
            "Time may be too long — reduce by 5-10 seconds",
            "Make sure you're not pressing same area multiple times",
            "Check HTV compatibility with fabric (poly needs lower temp)",
            "Some cheap HTV cracks easily — try a quality brand",
            "For stretch fabrics, use stretch HTV (like SportFlex)",
          ],
          products: [
            { name: "Siser EasyWeed Stretch", reason: "Flexes with fabric, won't crack" },
            { name: "Cricut SportFlex", reason: "Designed for athletic/stretchy materials" },
          ],
        }},
        { label: "After multiple washes/wears", solution: {
          title: "Extend HTV Life",
          description: "Some cracking over time is normal, but you can extend the life.",
          steps: [
            "Use quality HTV — it lasts longer",
            "Wash inside out, cold water",
            "Avoid the dryer when possible — hang dry",
            "Never iron directly on the design",
            "Consider pressing again occasionally to 'refresh' adhesion",
            "Stretch HTV lasts longer on stretchy fabrics",
            "Thinner HTV tends to last longer than thick",
          ],
          guideUrl: "/guides/htv-peeling-after-washing",
        }},
      ],
    },
    {
      id: "burnt",
      question: "What does the burn look like?",
      options: [
        { label: "HTV is discolored/yellowed", solution: {
          title: "HTV Burning/Discoloration",
          description: "Discolored HTV means too much heat or time.",
          steps: [
            "Lower your temperature by 15-20°F",
            "Reduce press time — try 10-12 seconds",
            "Use a Teflon sheet or parchment paper between press and HTV",
            "Never press HTV multiple times without protection",
            "White HTV shows heat damage most easily — be extra careful",
            "Check your press temp with an infrared thermometer",
          ],
          products: [
            { name: "Teflon Pressing Sheet", reason: "Protects HTV from direct heat/scorching" },
          ],
        }},
        { label: "Fabric is burned/scorched", solution: {
          title: "Fabric Scorching",
          description: "If the fabric itself is burning, you need to adjust for that fabric type.",
          steps: [
            "Different fabrics need different temps:",
            "Polyester: MAX 270-280°F — it melts at high temps",
            "Nylon: MAX 265°F — very heat sensitive",
            "Cotton: Can handle 305-320°F",
            "Blends: Use lower temp of the blend (poly-blend = use poly temp)",
            "Always test on a hidden area or scrap first",
            "Pre-made shirts may have unknown fabric content",
          ],
        }},
        { label: "Shiny/melted appearance", solution: {
          title: "HTV Melting",
          description: "A shiny, melted look means excessive heat or wrong HTV type.",
          steps: [
            "Lower temperature immediately — probably 20-30°F too high",
            "Standard HTV shouldn't exceed 320°F",
            "For polyester fabrics, use LOW-TEMP HTV only",
            "Check that you're using the right side up (textured side down)",
            "Never press longer than 15 seconds at high temps",
            "Some HTV brands are more heat-sensitive than others",
          ],
          products: [
            { name: "Low-Temp HTV", reason: "Required for polyester and heat-sensitive fabrics" },
          ],
        }},
      ],
    },
  ],

  "weeding": [
    {
      id: "start",
      question: "What's making weeding difficult?",
      options: [
        { label: "Small pieces won't come out", nextStep: "small-pieces" },
        { label: "Vinyl is tearing during weeding", nextStep: "tearing" },
        { label: "Letters/shapes lifting with waste", nextStep: "lifting" },
        { label: "Can't see what to weed", nextStep: "visibility" },
      ],
    },
    {
      id: "small-pieces",
      question: "How small are the pieces?",
      options: [
        { label: "Tiny (inside of letters like o, e, a)", solution: {
          title: "Remove Tiny Centers",
          description: "The insides of letters are the hardest to weed. Here's how.",
          steps: [
            "Use a fine-point weeding tool — not the hook end",
            "Poke into the CENTER of the piece, twist, lift",
            "Good lighting is essential — use a bright lamp",
            "A light pad under the vinyl helps see cut lines",
            "For HTV: weed from the back side sometimes helps",
            "Slow down — rushing tears things",
            "If pieces won't lift, design may not have cut through — recut with more pressure",
          ],
          products: [
            { name: "Cricut Weeding Tool Set", reason: "Multiple tip styles for different situations" },
            { name: "LED Light Pad", reason: "See cut lines clearly — game changer" },
          ],
        }},
        { label: "Intricate design with lots of small cuts", solution: {
          title: "Weeding Complex Designs",
          description: "Intricate designs require patience and technique.",
          steps: [
            "Consider if design is TOO intricate — simplify if possible",
            "Use the 'weed all at once' method — peel waste vinyl in one sheet",
            "Work from outside edges inward",
            "Use fingers for large areas, tool for details",
            "For adhesive vinyl: apply transfer tape FIRST, then weed from the back",
            "Take breaks — eye strain causes mistakes",
            "Good posture and lighting reduce fatigue",
          ],
          guideUrl: "/guides/how-to-weed-vinyl",
        }},
      ],
    },
    {
      id: "tearing",
      question: "Is the vinyl tearing when you pull?",
      options: [
        { label: "Yes, rips instead of clean edges", solution: {
          title: "Prevent Vinyl Tearing",
          description: "Tearing usually means the blade didn't cut through cleanly.",
          steps: [
            "Blade may be dull — try a fresh blade",
            "Increase cut pressure in Design Space",
            "Slow down cut speed for intricate designs",
            "Make sure vinyl is stuck firmly to mat",
            "Pull waste at a 45° angle, not straight up",
            "Pull slowly and evenly — don't jerk",
            "Warm the vinyl slightly with a heat gun (low setting) to make it more pliable",
          ],
        }},
        { label: "Vinyl stretches and distorts", solution: {
          title: "Prevent Vinyl Stretching",
          description: "Cheap vinyl or wrong technique causes stretching.",
          steps: [
            "Use quality vinyl — cheap vinyl stretches and tears more",
            "Don't pull too fast",
            "Keep the vinyl flat on the backing — don't bend it",
            "Weed in a cool room — heat makes vinyl stretchy",
            "If it's stretched, that piece is ruined — recut",
            "For HTV: peel backing slowly to avoid stretching",
          ],
          products: [
            { name: "Oracal 651 Vinyl", reason: "Quality vinyl that weeds cleanly" },
            { name: "Siser EasyWeed HTV", reason: "Weeds beautifully, doesn't stretch" },
          ],
        }},
      ],
    },
    {
      id: "lifting",
      question: "Design lifting with waste — what type of vinyl?",
      options: [
        { label: "Adhesive vinyl", solution: {
          title: "Keep Adhesive Vinyl In Place",
          description: "Adhesive vinyl lifting during weeding means cuts went too deep or vinyl isn't stuck.",
          steps: [
            "Make sure blade isn't cutting into the backing paper",
            "Reduce pressure if you see backing marks",
            "Press vinyl firmly to mat before cutting",
            "Weed slowly — if piece starts to lift, press it back down",
            "Use fingers to hold design while weeding around it",
            "Pull waste AWAY from the design, not toward it",
            "For permanent vinyl: try 'reverse weeding' — apply transfer tape, then weed from back",
          ],
        }},
        { label: "HTV/Iron-on", solution: {
          title: "Keep HTV Design In Place",
          description: "HTV is usually easier to weed because it's on a carrier sheet.",
          steps: [
            "HTV should be cut mirrored and placed shiny-side DOWN",
            "The carrier sheet holds everything in place — don't remove it",
            "Weed from the textured/dull side (the cut side)",
            "Use hook tool to lift waste, not the design",
            "If design lifts, blade didn't cut through — increase pressure",
            "Some HTV (like glitter) requires more pressure to cut through",
          ],
        }},
      ],
    },
    {
      id: "visibility",
      question: "Hard to see what needs to be weeded?",
      options: [
        { label: "Can't see the cut lines", solution: {
          title: "See Cut Lines Better",
          description: "If you can't see where cuts are, try these tricks.",
          steps: [
            "Use an LED light pad under the vinyl — shows every cut",
            "Angle a bright desk lamp to create shadows on cuts",
            "Flex the vinyl slightly — cuts will show as lines",
            "Try different colored vinyl (white on white is hardest)",
            "For HTV: weed from the dull side where cuts are more visible",
            "Mark the waste areas with a Sharpie before cutting",
            "Use the 'Contour' feature in Design Space to simplify designs",
          ],
          products: [
            { name: "LED Light Pad (A4 size)", reason: "Best tool for seeing cut lines" },
            { name: "Cricut BrightPad", reason: "Official light pad, larger size" },
          ],
        }},
        { label: "Eye strain/can't focus on details", solution: {
          title: "Reduce Eye Strain",
          description: "Detailed weeding is hard on the eyes. Here's how to make it easier.",
          steps: [
            "Use magnifying glasses or a magnifying lamp",
            "Take breaks every 15-20 minutes — look away from work",
            "Work in a well-lit area — no shadows",
            "Position work at comfortable height",
            "Use a light pad to reduce squinting",
            "Consider making designs slightly larger if possible",
            "Weed in the morning when eyes are fresh",
          ],
          products: [
            { name: "Magnifying Lamp", reason: "Combines light and magnification" },
            { name: "Cricut Bright 360 Lamp", reason: "Great lighting for crafting" },
          ],
        }},
      ],
    },
  ],

  // Maker 4 Specific Problems
  "maker-4": [
    {
      id: "start",
      question: "What issue are you having with your Maker 4?",
      options: [
        { label: "Scoring wheel is tearing my cardstock", nextStep: "scoring" },
        { label: "Bluetooth keeps disconnecting", nextStep: "bluetooth-m4" },
        { label: "Firmware issues or update problems", nextStep: "firmware" },
        { label: "Cuts are inaccurate or misaligned", nextStep: "calibration" },
        { label: "Machine stops mid-cut with error", nextStep: "mid-cut" },
        { label: "Mat adhesion problems", nextStep: "mat-m4" },
      ],
    },
    {
      id: "scoring",
      question: "What weight cardstock are you using?",
      options: [
        { label: "Light to medium (65-80 lb)", solution: {
          title: "Reduce Scoring Pressure",
          description: "The Maker 4's speed can cause scoring issues. Try these fixes.",
          steps: [
            "Reduce pressure by 2-4 points in Design Space material settings",
            "Consider using the scoring stylus instead of the wheel for lighter cardstock",
            "Create a custom material with lower pressure",
            "Test on scrap cardstock first",
          ],
          guideUrl: "/guides/maker-4-problems-fixes#scoring-wheel",
        }},
        { label: "Heavy (100+ lb)", solution: {
          title: "Heavy Cardstock Scoring Fix",
          description: "Heavy cardstock needs different handling on Maker 4.",
          steps: [
            "Use the single scoring wheel, not double",
            "Reduce pressure significantly (try -6 to -8)",
            "Slow down the cut speed with custom material settings",
            "Make sure cardstock is firmly adhered to mat",
            "Consider pre-scoring by hand for very thick cardstock",
          ],
          guideUrl: "/guides/maker-4-problems-fixes#scoring-wheel",
        }},
      ],
    },
    {
      id: "bluetooth-m4",
      question: "When does the Bluetooth disconnect?",
      options: [
        { label: "Won't connect at all", solution: {
          title: "Maker 4 Bluetooth Setup",
          description: "Maker 4 needs to be paired at the system level first.",
          steps: [
            "Go to your device's Bluetooth settings (not Design Space)",
            "Put Maker 4 in pairing mode (hold power until light flashes)",
            "Pair at the system level first",
            "THEN open Design Space and connect",
            "On Android: Enable location permissions for Design Space",
            "Only one device can connect at a time",
          ],
          guideUrl: "/guides/maker-4-problems-fixes#bluetooth",
        }},
        { label: "Disconnects during cuts", solution: {
          title: "Fix Mid-Cut Disconnections",
          description: "Bluetooth drops during cutting are common. Here's how to fix.",
          steps: [
            "Use USB connection instead (more reliable for large projects)",
            "Move machine closer to your device (within 10-15 feet)",
            "Remove other Bluetooth devices from the area",
            "Disable WiFi on your device temporarily",
            "Update Maker 4 firmware via USB",
          ],
          guideUrl: "/guides/maker-4-problems-fixes#bluetooth",
        }},
      ],
    },
    {
      id: "firmware",
      question: "What's happening with the firmware?",
      options: [
        { label: "Update keeps failing", solution: {
          title: "Fix Firmware Update Failures",
          description: "Firmware updates can be finicky. Use USB for reliability.",
          steps: [
            "Connect via USB cable (not Bluetooth)",
            "Close ALL other programs on your computer",
            "Ensure stable power — don't unplug during update",
            "Restart both machine and Design Space, try again",
            "If repeated failures: factory reset (hold power 10 sec)",
            "Contact Cricut support if still failing",
          ],
          guideUrl: "/guides/maker-4-problems-fixes#firmware",
        }},
        { label: "Machine acting buggy after update", solution: {
          title: "Post-Update Bug Fixes",
          description: "New firmware can introduce bugs. Here's what to try.",
          steps: [
            "Power cycle the machine (off for 30 seconds, then on)",
            "Recalibrate Print Then Cut and knife blade",
            "Clear Design Space cache (Settings → Clear Cache)",
            "Check Cricut forums for known issues with your firmware version",
            "If serious issues: factory reset and re-update",
          ],
          guideUrl: "/guides/maker-4-problems-fixes#firmware",
        }},
      ],
    },
    {
      id: "calibration",
      question: "What type of cut is misaligned?",
      options: [
        { label: "Print Then Cut is off", solution: {
          title: "Recalibrate Print Then Cut",
          description: "The Maker 4 may need calibration after setup.",
          steps: [
            "Go to Design Space → Menu → Settings → Calibration",
            "Select 'Print Then Cut'",
            "Use white matte paper (not glossy)",
            "Print at 100% scale — never 'Fit to Page'",
            "Good lighting, no direct sunlight",
            "Follow on-screen prompts carefully",
            "Recalibrate monthly for best results",
          ],
          guideUrl: "/guides/maker-4-problems-fixes#calibration",
        }},
        { label: "Regular cuts are drifting", solution: {
          title: "Fix Cut Drift",
          description: "If cuts drift or don't align between passes.",
          steps: [
            "Clean the rollers with a lint-free cloth",
            "Check mat adhesion — material shouldn't shift",
            "Use appropriate mat for material (don't use LightGrip for heavy materials)",
            "Slow down cut speed with custom material settings",
            "Check that carriage moves smoothly on rails",
          ],
          guideUrl: "/guides/maker-4-problems-fixes#calibration",
        }},
      ],
    },
    {
      id: "mid-cut",
      question: "What happens when it stops?",
      options: [
        { label: "Shows an error code", solution: {
          title: "Look Up Your Error Code",
          description: "Error codes tell you exactly what's wrong.",
          steps: [
            "Note the error code number",
            "Check our complete error codes reference",
            "Most common: 1001 (connection), 7001 (carriage jam)",
            "Follow the specific fix for your error",
          ],
          guideUrl: "/guides/error-codes-reference",
        }},
        { label: "Just stops with no message", solution: {
          title: "Fix Silent Mid-Cut Stops",
          description: "The Maker 4 has known firmware bugs causing mid-cut stops.",
          steps: [
            "Update to latest firmware (this is a known bug being patched)",
            "Use USB instead of Bluetooth for large projects",
            "Simplify complex designs — break into smaller cuts",
            "Check that power cable is secure",
            "Avoid using computer for other tasks during cut",
          ],
          guideUrl: "/guides/maker-4-problems-fixes#cutting",
        }},
      ],
    },
    {
      id: "mat-m4",
      question: "What's the mat problem?",
      options: [
        { label: "New mat is too sticky", solution: {
          title: "Break In a New Mat",
          description: "New Maker 4 mats are often too sticky.",
          steps: [
            "Lightly press a clean cotton t-shirt onto the mat",
            "Peel off — this removes some adhesive",
            "Repeat until materials release easily",
            "Don't use tape or lint — it leaves residue",
          ],
          guideUrl: "/guides/maker-4-problems-fixes#mat-adhesion",
        }},
        { label: "Mat isn't gripping material", solution: {
          title: "Restore Mat Grip",
          description: "Mats lose grip over time. Here's how to restore it.",
          steps: [
            "Clean with baby wipes (no alcohol)",
            "Let dry completely",
            "If still weak: apply mat adhesive spray",
            "Use the right mat type for your material",
            "Replace mats every 25-50 projects",
          ],
          guideUrl: "/guides/cricut-mat-not-sticky",
        }},
      ],
    },
  ],

  // Error Codes
  "error-codes": [
    {
      id: "start",
      question: "What error code are you seeing?",
      options: [
        { label: "1001 - Connection Error", solution: {
          title: "Fix Error 1001",
          description: "Design Space cannot connect to your machine.",
          steps: [
            "Check Bluetooth is enabled on your device",
            "Move machine closer (within 15 feet)",
            "Power cycle the Cricut (off 30 sec, then on)",
            "Try USB cable instead of Bluetooth",
            "Only one device can connect at a time",
          ],
          guideUrl: "/guides/error-codes-reference#connectivity",
        }},
        { label: "1006 - Machine Not Found", solution: {
          title: "Fix Error 1006",
          description: "Design Space cannot detect your Cricut.",
          steps: [
            "Ensure machine is powered on (solid light, not blinking)",
            "Forget device in Bluetooth settings, re-pair",
            "Close other apps that might be using the Cricut",
            "Restart Design Space",
            "Try USB connection",
          ],
          guideUrl: "/guides/error-codes-reference#connectivity",
        }},
        { label: "2003 - Sensor Can't Read Marks", solution: {
          title: "Fix Error 2003",
          description: "The Print Then Cut sensor can't read registration marks.",
          steps: [
            "Use matte paper, not glossy or holographic",
            "Clean sensor lens with dry microfiber cloth",
            "Ensure good lighting, no direct sunlight or glare",
            "Recalibrate Print Then Cut",
            "For holographic paper: see our workaround guide",
          ],
          guideUrl: "/guides/error-codes-reference#print-then-cut",
        }},
        { label: "4001 - USB Not Recognized", solution: {
          title: "Fix Error 4001",
          description: "Computer isn't detecting the Cricut via USB.",
          steps: [
            "Use a DATA-capable USB cable (not charge-only)",
            "Try a different USB port",
            "Connect directly, not through a hub",
            "Update USB drivers (Windows)",
            "Restart computer after connecting",
          ],
          guideUrl: "/guides/error-codes-reference#usb",
        }},
        { label: "7001 - Carriage Jam", solution: {
          title: "Fix Error 7001",
          description: "The carriage is stuck or obstructed.",
          steps: [
            "Turn off the machine immediately",
            "Gently move carriage by hand to check for obstructions",
            "Remove any material scraps or debris",
            "Check blade housing is seated properly",
            "Clean rails with dry cloth",
            "Power on and try again",
          ],
          guideUrl: "/guides/error-codes-reference#cutting",
        }},
        { label: "Other error code", solution: {
          title: "Look Up Your Error Code",
          description: "Find your specific error code in our complete reference.",
          steps: [
            "Visit our complete error codes reference guide",
            "Find your error code by number or category",
            "Follow the step-by-step fix for your specific error",
          ],
          guideUrl: "/guides/error-codes-reference",
        }},
      ],
    },
  ],

  // Holographic/Reflective Stickers
  "holographic": [
    {
      id: "start",
      question: "What's happening with your holographic stickers?",
      options: [
        { label: "Cricut won't read the sensor marks", nextStep: "sensor-fail" },
        { label: "Cuts are misaligned on holographic paper", nextStep: "misaligned" },
        { label: "Looking for holographic sticker options", nextStep: "options" },
      ],
    },
    {
      id: "sensor-fail",
      question: "Have you tried the standard Print Then Cut fixes?",
      options: [
        { label: "Yes, nothing works", solution: {
          title: "Holographic Paper Workaround",
          description: "The Cricut sensor CANNOT read marks on holographic/reflective surfaces. This is a hardware limitation, not user error. But there are workarounds!",
          steps: [
            "METHOD 1 (Most Popular): Print on MATTE sticker paper first",
            "Apply holographic laminate overlay OVER the printed design",
            "The sensor reads through the overlay to see marks underneath",
            "Then cut as normal",
            "",
            "METHOD 2: Apply matte laminate OVER holographic paper",
            "Print on the matte laminate surface",
            "Sensor reads the matte surface",
            "",
            "See our detailed guide for step-by-step instructions and material recommendations.",
          ],
          guideUrl: "/guides/holographic-sticker-print-cut",
        }},
        { label: "No, let me try basics first", solution: {
          title: "Try Standard PTC Fixes First",
          description: "Before using workarounds, try these standard Print Then Cut fixes.",
          steps: [
            "Clean the sensor lens with dry microfiber cloth",
            "Use good lighting (no direct sunlight or glare)",
            "Print at 100% scale, never 'Fit to Page'",
            "Recalibrate Print Then Cut in Settings",
            "Try placing paper in different position on mat",
            "",
            "If these don't work (common with holographic), see our holographic workaround guide.",
          ],
          guideUrl: "/guides/holographic-sticker-print-cut",
        }},
      ],
    },
    {
      id: "misaligned",
      question: "Is the paper holographic/reflective?",
      options: [
        { label: "Yes, holographic/glitter/shiny", solution: {
          title: "Holographic Paper Alignment Issues",
          description: "Reflective surfaces confuse the sensor, causing misalignment.",
          steps: [
            "The sensor cannot accurately read marks on reflective surfaces",
            "You need to use one of the workaround methods:",
            "",
            "RECOMMENDED: Print-Then-Overlay Method",
            "1. Print on matte sticker paper",
            "2. Apply holographic laminate overlay",
            "3. Cut through both layers",
            "",
            "This gives accurate cuts with holographic finish.",
          ],
          guideUrl: "/guides/holographic-sticker-print-cut",
        }},
        { label: "No, regular matte paper", solution: {
          title: "Standard PTC Alignment Fix",
          description: "For matte paper, try these calibration fixes.",
          steps: [
            "Recalibrate Print Then Cut (Settings → Calibration)",
            "Use white paper for calibration",
            "Print at exactly 100% scale",
            "Check printer settings aren't scaling",
            "Good lighting, no glare",
          ],
          guideUrl: "/guides/print-then-cut-not-lining-up",
        }},
      ],
    },
    {
      id: "options",
      question: "What holographic effect are you going for?",
      options: [
        { label: "Holographic finish on the entire sticker", solution: {
          title: "Print-Then-Overlay Method",
          description: "This is the most popular method for holographic stickers.",
          steps: [
            "Print your design on matte sticker paper",
            "Apply holographic self-adhesive laminate over the entire sheet",
            "Cut through both layers",
            "The holographic effect covers your entire design",
            "",
            "Recommended materials:",
            "- Matte printable sticker paper (Koala, Online Labels)",
            "- Holographic cold laminate sheets (Amazon, craft stores)",
          ],
          guideUrl: "/guides/holographic-sticker-print-cut#method-2",
        }},
        { label: "Holographic background showing through design", solution: {
          title: "Laminate-First Method",
          description: "Use this for holographic background effects.",
          steps: [
            "Apply MATTE laminate OVER holographic sticker paper",
            "Print on the matte surface",
            "The sensor reads the matte laminate",
            "Holographic shows through transparent areas of your design",
            "",
            "Note: Matte laminate slightly dulls the holographic effect",
          ],
          guideUrl: "/guides/holographic-sticker-print-cut#method-1",
        }},
      ],
    },
  ],
};

export const issueCategories: IssueCategory[] = [
  { id: "not-cutting", label: "Not cutting through material", icon: "✂️", popular: true },
  { id: "mat-grip", label: "Mat grip issues", icon: "📋" },
  { id: "bluetooth", label: "Bluetooth connection", icon: "📶", popular: true },
  { id: "adhesion", label: "Material won't stick to blank", icon: "🔥" },
  { id: "design-space", label: "Design Space problems", icon: "💻" },
  { id: "print-then-cut", label: "Print Then Cut issues", icon: "🖨️", popular: true },
  { id: "htv-problems", label: "HTV/Iron-on not working", icon: "👕" },
  { id: "weeding", label: "Weeding difficulties", icon: "🔍" },
  { id: "maker-4", label: "Cricut Maker 4 problems", icon: "🆕" },
  { id: "error-codes", label: "Error codes & messages", icon: "⚠️" },
  { id: "holographic", label: "Holographic/reflective stickers", icon: "✨" },
];
