import '@testing-library/jest-dom'

// Mock next-i18next for testing (not react-i18next)
jest.mock('next-i18next', () => ({
  useTranslation: () => ({
    t: (key) => key,
    i18n: {
      changeLanguage: () => new Promise(() => {}),
    },
  }),
}))

// Also mock react-i18next in case some components use it directly
jest.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key) => key,
    i18n: {
      changeLanguage: () => new Promise(() => {}),
    },
  }),
}), { virtual: true })
