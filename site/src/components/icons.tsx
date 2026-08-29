import type { SVGProps } from 'react'

type IconProps = SVGProps<SVGSVGElement>

const strokeDefaults: IconProps = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.75,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
}

const brandDefaults: IconProps = {
  viewBox: '0 0 24 24',
  fill: 'currentColor',
  'aria-hidden': true,
}

export const MailIcon = (props: IconProps) => (
  <svg {...strokeDefaults} {...props}>
    <rect x="2.5" y="4.5" width="19" height="15" rx="2.5" />
    <path d="m3 7 8.13 5.42a1.6 1.6 0 0 0 1.74 0L21 7" />
  </svg>
)

export const PhoneIcon = (props: IconProps) => (
  <svg {...strokeDefaults} {...props}>
    <path d="M6.6 3h-2A1.6 1.6 0 0 0 3 4.7C3 12.6 11.4 21 19.3 21a1.6 1.6 0 0 0 1.7-1.6v-2a1.2 1.2 0 0 0-.9-1.15l-3.1-.8a1.2 1.2 0 0 0-1.25.42l-.9 1.13a14.4 14.4 0 0 1-5.87-5.87l1.13-.9a1.2 1.2 0 0 0 .42-1.25l-.8-3.1A1.2 1.2 0 0 0 6.6 3Z" />
  </svg>
)

export const MapPinIcon = (props: IconProps) => (
  <svg {...strokeDefaults} {...props}>
    <path d="M12 21c4.5-4.4 7-7.7 7-11a7 7 0 1 0-14 0c0 3.3 2.5 6.6 7 11Z" />
    <circle cx="12" cy="10" r="2.6" />
  </svg>
)

export const DownloadIcon = (props: IconProps) => (
  <svg {...strokeDefaults} {...props}>
    <path d="M12 3v12" />
    <path d="m7.5 10.5 4.5 4.5 4.5-4.5" />
    <path d="M4 20h16" />
  </svg>
)

export const ArrowRightIcon = (props: IconProps) => (
  <svg {...strokeDefaults} {...props}>
    <path d="M4 12h16" />
    <path d="m14 6 6 6-6 6" />
  </svg>
)

export const ArrowUpIcon = (props: IconProps) => (
  <svg {...strokeDefaults} {...props}>
    <path d="M12 20V4" />
    <path d="m6 10 6-6 6 6" />
  </svg>
)

export const ArrowDownIcon = (props: IconProps) => (
  <svg {...strokeDefaults} {...props}>
    <path d="M12 4v16" />
    <path d="m6 14 6 6 6-6" />
  </svg>
)

export const ChevronDownIcon = (props: IconProps) => (
  <svg {...strokeDefaults} {...props}>
    <path d="m6 9.5 6 6 6-6" />
  </svg>
)

export const SunIcon = (props: IconProps) => (
  <svg {...strokeDefaults} {...props}>
    <circle cx="12" cy="12" r="4.2" />
    <path d="M12 2.5v2M12 19.5v2M2.5 12h2M19.5 12h2M5.3 5.3l1.4 1.4M17.3 17.3l1.4 1.4M18.7 5.3l-1.4 1.4M6.7 17.3l-1.4 1.4" />
  </svg>
)

export const MoonIcon = (props: IconProps) => (
  <svg {...strokeDefaults} {...props}>
    <path d="M20 14.2A8.2 8.2 0 0 1 9.8 4a8.4 8.4 0 1 0 10.2 10.2Z" />
  </svg>
)

export const GlobeIcon = (props: IconProps) => (
  <svg {...strokeDefaults} {...props}>
    <circle cx="12" cy="12" r="9" />
    <path d="M3.2 9h17.6M3.2 15h17.6" />
    <path d="M12 3a14 14 0 0 0 0 18a14 14 0 0 0 0-18Z" />
  </svg>
)

export const MenuIcon = (props: IconProps) => (
  <svg {...strokeDefaults} {...props}>
    <path d="M4 7h16M4 12h16M4 17h16" />
  </svg>
)

export const CloseIcon = (props: IconProps) => (
  <svg {...strokeDefaults} {...props}>
    <path d="m6 6 12 12M18 6 6 18" />
  </svg>
)

export const CheckIcon = (props: IconProps) => (
  <svg {...strokeDefaults} {...props}>
    <path d="m4.5 12.5 5 5 10-11" />
  </svg>
)

export const CopyIcon = (props: IconProps) => (
  <svg {...strokeDefaults} {...props}>
    <rect x="9" y="9" width="12" height="12" rx="2.2" />
    <path d="M15 5.8A1.8 1.8 0 0 0 13.2 4H4.8A1.8 1.8 0 0 0 3 5.8v8.4A1.8 1.8 0 0 0 4.8 16" />
  </svg>
)

export const SparkIcon = (props: IconProps) => (
  <svg {...strokeDefaults} {...props}>
    <path d="M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9Z" />
    <path d="M18.5 15.5l.8 2.2 2.2.8-2.2.8-.8 2.2-.8-2.2-2.2-.8 2.2-.8Z" />
  </svg>
)

export const ServerIcon = (props: IconProps) => (
  <svg {...strokeDefaults} {...props}>
    <rect x="3" y="4" width="18" height="7" rx="2" />
    <rect x="3" y="13" width="18" height="7" rx="2" />
    <path d="M7 7.5h.01M7 16.5h.01" />
  </svg>
)

export const DatabaseIcon = (props: IconProps) => (
  <svg {...strokeDefaults} {...props}>
    <ellipse cx="12" cy="6" rx="8" ry="3" />
    <path d="M4 6v12c0 1.7 3.6 3 8 3s8-1.3 8-3V6" />
    <path d="M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3" />
  </svg>
)

export const BoltIcon = (props: IconProps) => (
  <svg {...strokeDefaults} {...props}>
    <path d="M13.5 3 5 13.5h5l-1.5 7.5L18 10.5h-5Z" />
  </svg>
)

export const PlugIcon = (props: IconProps) => (
  <svg {...strokeDefaults} {...props}>
    <path d="M9 3v5M15 3v5" />
    <path d="M6.5 8h11v3a5.5 5.5 0 0 1-11 0Z" />
    <path d="M12 16.5V21" />
  </svg>
)

export const ExternalLinkIcon = (props: IconProps) => (
  <svg {...strokeDefaults} {...props}>
    <path d="M14 4h6v6" />
    <path d="M20 4 11 13" />
    <path d="M18 14.5V18a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3.5" />
  </svg>
)

export const GraduationIcon = (props: IconProps) => (
  <svg {...strokeDefaults} {...props}>
    <path d="M12 4 2.5 8.5 12 13l9.5-4.5L12 4Z" />
    <path d="M6 10.6V16c0 1.7 2.7 3 6 3s6-1.3 6-3v-5.4" />
    <path d="M21.5 8.5V15" />
  </svg>
)

export const SendIcon = (props: IconProps) => (
  <svg {...strokeDefaults} {...props}>
    <path d="M21 3 10.5 13.5" />
    <path d="M21 3l-7 18-3.5-7.5L3 10Z" />
  </svg>
)

export const GithubIcon = (props: IconProps) => (
  <svg {...brandDefaults} {...props}>
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23a11.5 11.5 0 0 1 3-.405c1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
  </svg>
)

export const LinkedinIcon = (props: IconProps) => (
  <svg {...brandDefaults} {...props}>
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
)

export const WhatsappIcon = (props: IconProps) => (
  <svg {...brandDefaults} {...props}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.347-.347.52-.52.174-.174.232-.298.347-.497.115-.198.057-.371-.03-.52-.086-.148-.658-1.585-.9-2.164-.213-.512-.43-.512-.594-.52-.16-.008-.347-.008-.53-.008-.183 0-.48.068-.73.365-.25.297-.958.936-.958 2.283 0 1.347.98 2.648 1.115 2.83.135.183 1.91 2.917 4.63 4.09.647.28 1.152.447 1.546.573.65.207 1.242.178 1.71.108.522-.078 1.606-.657 1.833-1.291.227-.635.227-1.18.16-1.291-.067-.11-.246-.174-.512-.297m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
  </svg>
)
