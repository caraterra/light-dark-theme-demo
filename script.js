const body = document.body
const themeSwitcher = document.getElementById('theme-switcher')

function setThemeSwitcherIcon () {
  if (body.classList.contains('light-theme')) {
    themeSwitcher.innerHTML = '<i class="bi bi-moon-stars"></i>'
  } else if (body.classList.contains('dark-theme')) {
    themeSwitcher.innerHTML = '<i class="bi bi-sun"></i>'
  }
}

function switchTheme () {
  if (body.classList.contains('light-theme')) {
    body.classList.replace('light-theme', 'dark-theme')
    setThemeSwitcherIcon()
  } else if (body.classList.contains('dark-theme')) {
    body.classList.replace('dark-theme', 'light-theme')
    setThemeSwitcherIcon()
  }
}

themeSwitcher.addEventListener('click', switchTheme)
setThemeSwitcherIcon()
