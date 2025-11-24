import { useLanguage } from "@/contexts/LanguageContext";

export const useTranslatedCondition = (conditionKey: string) => {
  const { t } = useLanguage();

  return {
    title: t(`conditions.${conditionKey}.title`),
    subtitle: t(`conditions.${conditionKey}.subtitle`),
    overview: t(`conditions.${conditionKey}.overview`),
    focus1: t(`conditions.${conditionKey}.focus1`),
    focus2: t(`conditions.${conditionKey}.focus2`),
    focus3: t(`conditions.${conditionKey}.focus3`),
    focus4: t(`conditions.${conditionKey}.focus4`),
    focus5: t(`conditions.${conditionKey}.focus5`),
    focus6: t(`conditions.${conditionKey}.focus6`),
  };
};

// Translation keys for all common buttons and labels
export const commonTranslations = {
  bookNow: () => {
    const { t } = useLanguage();
    return t('common.bookNow');
  },
  learnMore: () => {
    const { t } = useLanguage();
    return t('common.learnMore');
  },
  symptoms: () => {
    const { t } = useLanguage();
    return t('common.symptoms');
  },
  treatment: () => {
    const { t } = useLanguage();
    return t('common.treatment');
  },
  benefits: () => {
    const { t } = useLanguage();
    return t('common.benefits');
  },
  whyChooseUs: () => {
    const { t } = useLanguage();
    return t('common.whyChooseUs');
  },
};
