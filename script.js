const body = document.body
const themeSwitcher = document.getElementById('theme-switcher')

function setThemeSwitcherIcon () {
  if (body.classList.contains('light-theme')) {
    themeSwitcher.innerHTML = '<i class="bi bi-moon-stars"></i>'
  } else if (body.classList.contains('dark-theme')) {
    themeSwitcher.innerHTML = '<i class="bi bi-sun"></i>'
  }
}

function setTheme (theme) {
  if (theme === 'dark') {
    body.classList.remove('light-theme')
    body.classList.add('dark-theme')
  } else {
    body.classList.remove('dark-theme')
    body.classList.add('light-theme')
  }
}

function switchTheme () {
  if (body.classList.contains('light-theme')) {
    setTheme('dark')
    setThemeSwitcherIcon()
  } else if (body.classList.contains('dark-theme')) {
    setTheme('light')
    setThemeSwitcherIcon()
  }
}

if (window.matchMedia('prefers-color-scheme: dark')) {
  setTheme('dark')
}

themeSwitcher.addEventListener('click', switchTheme)
setThemeSwitcherIcon()
