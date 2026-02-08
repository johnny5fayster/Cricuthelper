#!/bin/bash

# CricutHelper Link Audit Script
# Checks all external links and reports broken ones
# Run weekly via cron

set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_DIR="$(dirname "$SCRIPT_DIR")"
REPORT_DIR="$PROJECT_DIR/reports"
TIMESTAMP=$(date +%Y%m%d_%H%M%S)
REPORT_FILE="$REPORT_DIR/link-audit-$TIMESTAMP.md"

mkdir -p "$REPORT_DIR"

echo "🔍 CricutHelper Link Audit - $(date)"
echo "========================================"
echo ""

BROKEN_COUNT=0
TOTAL_COUNT=0

check_url() {
    local url="$1"
    local source="$2"
    local name="$3"
    
    TOTAL_COUNT=$((TOTAL_COUNT + 1))
    
    # Use curl with browser user agent
    local response=$(curl -s -o /tmp/curl_body.txt -w "%{http_code}" -L -A "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36" "$url" 2>/dev/null)
    
    # Check for Amazon "dog page" (404 disguised as 200)
    if [[ "$url" == *"amazon.com"* ]] || [[ "$url" == *"amazon.ca"* ]]; then
        if grep -qi "couldn't find\|page not found\|looking for something" /tmp/curl_body.txt 2>/dev/null; then
            response="404"
        fi
    fi
    
    if [[ "$response" == "200" ]] || [[ "$response" == "301" ]] || [[ "$response" == "302" ]]; then
        echo "✅ OK: $name"
        return 0
    else
        echo "❌ BROKEN ($response): $name - $url"
        echo "- **$name** ($source)" >> "$REPORT_FILE.tmp"
        echo "  - URL: $url" >> "$REPORT_FILE.tmp"
        echo "  - Status: HTTP $response" >> "$REPORT_FILE.tmp"
        echo "" >> "$REPORT_FILE.tmp"
        BROKEN_COUNT=$((BROKEN_COUNT + 1))
        return 1
    fi
}

# Initialize report
cat > "$REPORT_FILE" << EOF
# CricutHelper Link Audit Report
**Date:** $(date)
**Run by:** Automated weekly audit

---

EOF

touch "$REPORT_FILE.tmp"

echo "Checking Shop Page (Amazon links)..."
echo "-------------------------------------"

# Extract and check Amazon ASINs from shop page
SHOP_FILE="$PROJECT_DIR/src/app/shop/page.tsx"
if [[ -f "$SHOP_FILE" ]]; then
    while IFS= read -r line; do
        asin=$(echo "$line" | grep -o 'asin: "[^"]*"' | sed 's/asin: "//;s/"//')
        title=$(echo "$line" | grep -o 'title: "[^"]*"' | sed 's/title: "//;s/"//')
        if [[ -n "$asin" ]]; then
            check_url "https://www.amazon.com/dp/$asin" "shop/page.tsx" "$title" || true
            sleep 0.5
        fi
    done < <(grep -A1 'title:' "$SHOP_FILE" | paste - -)
fi

echo ""
echo "Checking Creators Page..."
echo "-------------------------"

# Extract and check creator links
CREATORS_FILE="$PROJECT_DIR/src/app/creators/page.tsx"
if [[ -f "$CREATORS_FILE" ]]; then
    # YouTube links
    grep -o 'youtube: "[^"]*"' "$CREATORS_FILE" 2>/dev/null | sed 's/youtube: "//;s/"//' | while read -r url; do
        check_url "$url" "creators/page.tsx" "YouTube: $url" || true
        sleep 0.3
    done
    
    # Website links
    grep -o 'website: "[^"]*"' "$CREATORS_FILE" 2>/dev/null | sed 's/website: "//;s/"//' | while read -r url; do
        check_url "$url" "creators/page.tsx" "Website: $url" || true
        sleep 0.3
    done
    
    # Instagram links
    grep -o 'instagram: "[^"]*"' "$CREATORS_FILE" 2>/dev/null | sed 's/instagram: "//;s/"//' | while read -r url; do
        check_url "$url" "creators/page.tsx" "Instagram: $url" || true
        sleep 0.3
    done
    
    # Pinterest links
    grep -o 'pinterest: "[^"]*"' "$CREATORS_FILE" 2>/dev/null | sed 's/pinterest: "//;s/"//' | while read -r url; do
        check_url "$url" "creators/page.tsx" "Pinterest: $url" || true
        sleep 0.3
    done
fi

echo ""
echo "Checking Materials Database..."
echo "------------------------------"

# Extract and check materials Amazon links
MATERIALS_FILE="$PROJECT_DIR/src/data/materials.ts"
if [[ -f "$MATERIALS_FILE" ]]; then
    grep -o 'amazonAsin: "[^"]*"' "$MATERIALS_FILE" 2>/dev/null | sed 's/amazonAsin: "//;s/"//' | while read -r asin; do
        if [[ -n "$asin" ]]; then
            check_url "https://www.amazon.com/dp/$asin" "data/materials.ts" "Material ASIN: $asin" || true
            sleep 0.5
        fi
    done
fi

# Finalize report
if [[ -s "$REPORT_FILE.tmp" ]]; then
    echo "## ❌ Broken Links Found" >> "$REPORT_FILE"
    echo "" >> "$REPORT_FILE"
    cat "$REPORT_FILE.tmp" >> "$REPORT_FILE"
else
    echo "## ✅ All Links Healthy!" >> "$REPORT_FILE"
    echo "" >> "$REPORT_FILE"
    echo "No broken links detected." >> "$REPORT_FILE"
fi

rm -f "$REPORT_FILE.tmp" /tmp/curl_body.txt

# Summary
echo ""
echo "========================================"
echo "AUDIT COMPLETE"
echo "Total links checked: $TOTAL_COUNT"
echo "Broken links found: $BROKEN_COUNT"
echo "Report saved to: $REPORT_FILE"
echo "========================================"

# Copy to latest
cp "$REPORT_FILE" "$REPORT_DIR/LATEST-AUDIT.md"

# Output for cron job notification
if [[ $BROKEN_COUNT -gt 0 ]]; then
    echo ""
    echo "⚠️ ACTION REQUIRED: $BROKEN_COUNT broken link(s) need repair!"
    exit 1
fi

exit 0
