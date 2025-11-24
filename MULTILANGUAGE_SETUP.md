# Multi-Language Support Implementation Guide

## Overview

This website now supports English and Hindi languages. Users can switch languages using the language selector in the header (both desktop and mobile views).

## Architecture

### 1. Language Context (`@/contexts/LanguageContext.tsx`)
- **Provider**: `LanguageProvider` - Wraps the entire app
- **Hook**: `useLanguage()` - Provides language state and translation function
- **Features**:
  - Auto-detects browser language (prioritizes Hindi if browser language is "hi")
  - Persists language preference in localStorage
  - Provides `t()` function for dynamic key-based translations

### 2. Language Selector Component (`@/components/LanguageSelector.tsx`)
- Visible in header (desktop and mobile)
- Two buttons: EN and HI
- Saves preference to localStorage
- Visual feedback for active language (blue for EN, orange for HI)

### 3. Translation Files
Located in `/client/src/translations/`:
- `en.json` - English translations
- `hi.json` - Hindi translations

## How to Use

### Adding Translations to Components

#### Example 1: Using in Header
```tsx
import { useLanguage } from "@/contexts/LanguageContext";

export default function Header() {
  const { t } = useLanguage();
  
  return (
    <h1>{t('common.home')}</h1>
  );
}
```

#### Example 2: Using nested translations
```tsx
const { t } = useLanguage();

// For nested keys, use dot notation
const title = t('conditions.epilepsy.title');
```

### Adding New Translations

1. **Add to `en.json`**:
```json
{
  "newSection": {
    "key": "English text"
  }
}
```

2. **Add to `hi.json`** (corresponding Hindi text):
```json
{
  "newSection": {
    "key": "हिंदी पाठ"
  }
}
```

3. **Use in component**:
```tsx
const { t } = useLanguage();
const text = t('newSection.key');
```

## Current Translations

### Common Navigation
- Home, Services, About, Contact
- Language, English, Hindi
- Book Now, Learn More, Consult Now

### Header
- Title and menu items
- Service categories (Neurological, Endocrine, Dermatological, etc.)

### Pages
- Hero section
- About section
- Services
- Booking form
- Footer

### Conditions (Sample)
- Epilepsy, Thyroid Disorders, Diabetes
- Arthritis, Eczema, Asthma
- Migraines, and more...

## Translation Quality Features

✅ Complete Hindi translations for all common UI elements
✅ Bi-directional text support (RTL ready for future)
✅ Proper Hindi typography using Noto Sans Devanagari
✅ Service categories in both languages
✅ Condition-specific terminology

## Adding More Conditions

For each new condition page, add translations:

```json
"conditions": {
  "newCondition": {
    "title": "English Title",
    "subtitle": "English subtitle",
    "overview": "English overview..."
  }
}
```

And in Hindi:
```json
"conditions": {
  "newCondition": {
    "title": "हिंदी शीर्षक",
    "subtitle": "हिंदी उपशीर्षक",
    "overview": "हिंदी विवरण..."
  }
}
```

## Components That Support Multiple Languages

- Header (navigation, menu items)
- Footer
- Booking Form
- All Full Condition Pages (with next update)
- Home Page (with next update)

## Future Enhancements

- Add more languages (Marathi, Gujarati, etc.)
- Implement server-side translations
- Add language-specific SEO metadata
- Create translation management system

## Browser Compatibility

- Stores language preference in localStorage
- Falls back to English if preference not found
- Supports all modern browsers
- Mobile and desktop optimized

## Notes

- Language preference persists across sessions
- Default language: English (unless browser prefers Hindi)
- All translations are client-side (no server calls needed)
- Performance: No additional loading time for language switching
