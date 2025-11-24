# Updating Condition Pages for Multi-Language Support

## Overview

Condition pages can now display in both English and Hindi. This guide shows how to update them.

## Current Condition Page Structure

All condition pages use the `ConditionPageFactory.tsx` which generates the page UI. To make them translatable, we need to:

1. Keep the factory pattern (for code reusability)
2. Add translation keys to `en.json` and `hi.json`
3. Use the `useLanguage` hook in the factory component

## Example: Making EpilepsyFull.tsx Translatable

### Step 1: Add Translations

**In `en.json`:**
```json
{
  "conditions": {
    "epilepsy": {
      "title": "Epilepsy Management",
      "subtitle": "Long-term seizure control through personalized treatment",
      "overview": "Epilepsy is a neurological disorder...",
      "managementFocus": [
        "Reducing seizure frequency",
        "Identifying triggers",
        "Improving neurological stability",
        "Reducing medication dependency",
        "Enhancing quality of life",
        "Strengthening nervous system"
      ],
      "triggers": [
        "Stress and emotional trauma",
        "Sleep deprivation",
        "Hormonal fluctuations",
        "Flashing lights",
        "Loud sounds",
        "Menstrual changes",
        "Temperature extremes",
        "Missed medications"
      ],
      "symptoms": [
        "Recurrent seizures",
        "Loss of consciousness",
        "Muscle rigidity",
        "Aura preceding seizures",
        "Confusion after seizures",
        "Fatigue",
        "Memory disturbances",
        "Anxiety about seizures"
      ],
      "benefits": [
        "Decreased seizure frequency",
        "Reduced severity",
        "Better prediction",
        "Mental clarity",
        "Emotional stability",
        "Reduced side effects",
        "Better sleep",
        "Improved confidence"
      ]
    }
  }
}
```

**In `hi.json`:**
```json
{
  "conditions": {
    "epilepsy": {
      "title": "मिर्गी प्रबंधन",
      "subtitle": "व्यक्तिगत उपचार के माध्यम से दीर्घकालीन दौरे नियंत्रण",
      "overview": "मिर्गी एक तंत्रिका संबंधी विकार है...",
      "managementFocus": [
        "दौरों की आवृत्ति कम करना",
        "ट्रिगर्स की पहचान करना",
        "तंत्रिका स्थिरता में सुधार",
        "दवा की निर्भरता कम करना",
        "जीवन की गुणवत्ता में सुधार",
        "तंत्रिका तंत्र को मजबूत करना"
      ]
    }
  }
}
```

### Step 2: Create Translation-Aware Factory

**Create `ConditionPageWithTranslation.tsx`:**

```tsx
import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BookingModal from "@/components/BookingModal";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2, AlertCircle, Lightbulb } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

interface ConditionData {
  conditionKey: string; // e.g., "epilepsy"
  title: string;
  subtitle: string;
  overview: string;
  managementFocus: string[];
  triggers: string[];
  symptoms: string[];
  benefits: string[];
  treatmentProcess: string[];
}

export function createTranslatableConditionPage(data: ConditionData) {
  return function ConditionPage() {
    const { t } = useLanguage();
    const [bookingModalOpen, setBookingModalOpen] = useState(false);

    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

    // Get translated content
    const title = t(`conditions.${data.conditionKey}.title`) || data.title;
    const subtitle = t(`conditions.${data.conditionKey}.subtitle`) || data.subtitle;
    const overview = t(`conditions.${data.conditionKey}.overview`) || data.overview;

    return (
      <div className="min-h-screen">
        <Header />
        <main className="pt-24">
          {/* Hero Section */}
          <section className="relative py-16 md:py-24 bg-gradient-to-b from-primary/10 to-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
                  {title}
                </h1>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
                  {subtitle}
                </p>
                <Button 
                  size="lg" 
                  onClick={() => setBookingModalOpen(true)}
                  className="gap-2"
                >
                  {t('common.consultNow')}
                </Button>
              </div>
            </div>
          </section>

          {/* More sections using translations */}
        </main>
        <Footer />

        <BookingModal 
          isOpen={bookingModalOpen} 
          onOpenChange={setBookingModalOpen}
        />
      </div>
    );
  };
}
```

### Step 3: Update Condition Page

**Update `EpilepsyFull.tsx`:**

```tsx
import { createTranslatableConditionPage } from "./ConditionPageWithTranslation";

export default createTranslatableConditionPage({
  conditionKey: "epilepsy",
  title: "Epilepsy Management",
  subtitle: "Long-term seizure control and management through personalized homeopathic treatment",
  overview: "Epilepsy is a neurological disorder characterized by recurrent seizures...",
  managementFocus: [
    "Reducing seizure frequency and intensity",
    "Identifying and managing personal triggers",
    "Improving neurological stability",
    "Reducing medication dependency",
    "Enhancing overall quality of life",
    "Strengthening nervous system resilience",
  ],
  triggers: [
    "Stress and emotional trauma",
    "Sleep deprivation",
    "Hormonal fluctuations",
    "Flashing lights or patterns",
    "Loud or sudden sounds",
    "Menstrual cycle changes",
    "Extreme temperature changes",
    "Missed medications",
  ],
  symptoms: [
    "Recurrent seizures",
    "Loss of consciousness",
    "Muscle rigidity or convulsions",
    "Aura preceding seizures",
    "Confusion after seizures",
    "Fatigue and exhaustion",
    "Memory disturbances",
    "Anxiety about seizures",
  ],
  benefits: [
    "Decreased seizure frequency",
    "Reduced seizure severity",
    "Better seizure prediction",
    "Improved mental clarity",
    "Enhanced emotional stability",
    "Reduced medication side effects",
    "Better sleep quality",
    "Improved confidence and quality of life",
  ],
  treatmentProcess: [
    "Comprehensive consultation and seizure history",
    "Detailed constitutional analysis",
    "Personalized remedy selection",
    "Regular monitoring and dose adjustments",
    "Trigger identification and management",
    "Progress evaluation and support",
  ],
});
```

## Benefits of This Approach

✅ **Code Reusability**: Factory pattern still works  
✅ **Backward Compatible**: Fallback to English if translation missing  
✅ **Easy Maintenance**: All translations in one place  
✅ **Scalable**: Add new languages easily  
✅ **SEO-Friendly**: Translates titles and descriptions  

## Implementation Steps for All Conditions

1. Add all condition data to `en.json` and `hi.json`
2. Create `ConditionPageWithTranslation.tsx` factory
3. Update all 24 condition pages to use new factory
4. Test each condition in both languages
5. Verify translations are accurate

## Translation Quality Checklist

- [ ] All text is translated (not left in English)
- [ ] Hindi translations are accurate
- [ ] Medical terminology is consistent
- [ ] Punctuation and formatting match
- [ ] Both files have matching keys
- [ ] No HTML/JSX in translation strings
- [ ] Tested in both languages

## Performance Notes

- Translations are loaded once with the app
- No API calls needed for translations
- Language switching is instantaneous
- JSON files are minified in production
- No measurable performance impact

---

**Status**: Ready to implement for all 24 condition pages
