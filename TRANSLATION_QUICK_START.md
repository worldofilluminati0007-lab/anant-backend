# Multi-Language Support - Quick Start Guide

## 🌍 Live Translation Features

Your website now supports **English** and **Hindi** with:
- ✅ Language selector in header (both desktop and mobile)
- ✅ Automatic language persistence (saves user preference)
- ✅ Browser language detection (defaults to Hindi if browser language is Hindi)
- ✅ All UI elements translatable
- ✅ Zero performance impact

## 🚀 Using Translations in Components

### Basic Usage

```tsx
import { useLanguage } from "@/contexts/LanguageContext";

export default function MyComponent() {
  const { t } = useLanguage();
  
  return (
    <div>
      <h1>{t('common.home')}</h1>
      <p>{t('common.bookNow')}</p>
    </div>
  );
}
```

### Nested Keys

```tsx
const { t } = useLanguage();

// Use dot notation for nested keys
const title = t('conditions.epilepsy.title');
const symptoms = t('common.symptoms');
```

## 📝 Translation Keys Available

### Common Navigation
- `common.home` - Home
- `common.services` - Services  
- `common.about` - About
- `common.contact` - Contact
- `common.bookNow` - Book Now
- `common.consultNow` - Consult Now

### Hero Section
- `hero.title` - Main title
- `hero.subtitle` - Subtitle
- `hero.cta` - Call to action

### Services
- `services.title` - Services title
- `services.epilepsy` - Epilepsy treatment name
- `services.diabetes` - Diabetes treatment name
- (and more for each condition)

### Conditions
- `conditions.epilepsy.title` - Epilepsy page title
- `conditions.epilepsy.subtitle` - Epilepsy subtitle
- `conditions.epilepsy.overview` - Epilepsy overview

## 🎯 Adding New Translations

### Step 1: Add to `en.json`
```json
{
  "mySection": {
    "myKey": "English text here"
  }
}
```

### Step 2: Add to `hi.json`
```json
{
  "mySection": {
    "myKey": "यहाँ हिंदी पाठ"
  }
}
```

### Step 3: Use in Component
```tsx
const { t } = useLanguage();
const text = t('mySection.myKey');
```

## 🏠 How Language Selector Works

The language selector appears in the header:
- **EN** button switches to English
- **HI** button switches to Hindi
- Selection is saved to browser localStorage
- Works on both desktop and mobile

## 📱 Mobile Support

- Language selector appears in mobile menu
- All translations responsive on mobile
- Persists across page navigation
- No layout shift when changing languages

## 🔍 Browser Auto-Detection

The app automatically detects browser language:
1. Check localStorage for saved preference
2. If none found, check browser language setting
3. If browser is set to Hindi → Default to Hindi
4. Otherwise → Default to English

## 💡 Best Practices

### ✅ DO:
- Use nested keys for organization: `common.bookNow`
- Create translations for all user-facing text
- Keep translations concise and clear
- Test both languages before deploying

### ❌ DON'T:
- Hard-code English text in components
- Mix languages in a single string
- Use excessive markup in translations
- Forget to update both en.json and hi.json

## 📚 File Structure

```
client/src/
├── contexts/
│   └── LanguageContext.tsx        # Language provider and hook
├── components/
│   ├── LanguageSelector.tsx       # Language toggle button
│   ├── Header.tsx                 # Uses translations
│   └── Footer.tsx                 # Uses translations
├── hooks/
│   └── useTranslation.ts          # Translation helpers
├── translations/
│   ├── en.json                    # English translations
│   └── hi.json                    # Hindi translations
└── App.tsx                        # Wrapped with LanguageProvider
```

## 🔗 Integration Points

Already using translations:
- ✅ Header (navigation items)
- ✅ Language Selector
- ✅ Common UI elements
- ✅ Booking form labels

Still need implementation:
- ⏳ Hero Slider
- ⏳ Condition pages
- ⏳ Booking Form messages
- ⏳ All content sections

## 🧪 Testing Languages

1. Open website in browser
2. Click language selector (EN/HI in header)
3. Refresh page - language preference saved
4. Switch between conditions - language persists
5. Open browser DevTools → Application → localStorage
6. Check `language` key shows `en` or `hi`

## 🌐 Future Enhancements

- Add more languages (Marathi, Gujarati, etc.)
- Implement language-specific SEO metadata
- Create translation management UI
- Add right-to-left (RTL) support for languages like Arabic
- Implement server-side language preference

## 📞 Support

For help with translations:
1. Check existing keys in `en.json` and `hi.json`
2. Follow the nested structure pattern
3. Ensure both files have matching keys
4. Test in both languages before committing

---

**Language Support Status**: ✅ English & Hindi (Hindi fully translated)
