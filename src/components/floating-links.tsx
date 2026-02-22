import { Smile, BookCheck, Shovel, ClipboardClock } from 'lucide-react'
import { useLanguage } from '../contexts/language-context'

export function FloatingLinks() {
    const { t } = useLanguage()

    return (
        <div className="fixed bottom-8 left-8 flex gap-3 z-50">
            {/* 1 - Hoy Button */}
            <a
                href="https://apex.hoy.today"
                className="p-3 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-110 group cursor-pointer"
                aria-label={t('ariaHome') || 'Hoy'}
                title={t('ariaHome') || 'Hoy'}
            >
                <ClipboardClock className="w-6 h-6 text-zinc-900 dark:text-white group-hover:text-yellow-500 transition-colors" />
            </a>

            {/* 2 - Emojis Button (Disabled) */}
            <button
                disabled
                className="p-3 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-full shadow-lg transition-all opacity-50 cursor-not-allowed group"
                aria-label={t('ariaEmojis') || 'Emojis'}
                title={t('ariaEmojis') || 'Emojis'}
            >
                <Smile className="w-6 h-6 text-zinc-900 dark:text-white transition-colors" />
            </button>

            {/* 3 - Scripting Expansible Button */}
            <a
                href="https://apex-private.onrender.com"
                className="peer group flex items-center p-3 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-110 cursor-pointer"
                aria-label="Scripting"
            >
                <BookCheck className="w-6 h-6 shrink-0 text-zinc-900 dark:text-white group-hover:text-yellow-500 transition-colors" />
                <span className="text-sm font-semibold max-w-0 opacity-0 overflow-hidden whitespace-nowrap transition-all duration-300 ease-in-out group-hover:max-w-[150px] group-hover:opacity-100 group-hover:ml-2 group-hover:text-yellow-500">
                    Ir al Scripting
                </span>
            </a>

            {/* 4 - Shovel Contráctil Button */}
            <a
                href="https://apex.antipala.pro"
                className="p-3 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-full shadow-lg hover:shadow-xl overflow-hidden transition-all duration-300 peer-hover:w-0 peer-hover:p-0 peer-hover:border-0 peer-hover:opacity-0 peer-hover:ml-[-12px] group cursor-pointer flex items-center justify-center shrink-0"
                aria-label="Antipala"
            >
                <Shovel className="w-6 h-6 text-zinc-900 dark:text-white group-hover:text-yellow-500 transition-colors" />
            </a>
        </div>
    )
}
