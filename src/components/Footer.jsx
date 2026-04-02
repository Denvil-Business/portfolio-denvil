import { useLanguage } from '../i18n'

export default function Footer() {
  const { t } = useLanguage()
  return (
    <footer className="py-8 px-6 border-t border-neon/10 text-center">
      <p className="text-text-dim text-sm">
        {t('footer.text')}
      </p>
    </footer>
  )
}
