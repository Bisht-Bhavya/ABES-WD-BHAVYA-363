const fullname = document.getElementById('fullname')
const email = document.getElementById('email')
const password = document.getElementById('password')
const confirmPassword = document.getElementById('Confirm')
const form = document.getElementById('MyForm')
const phone = document.getElementById('phone')
const errorElement = document.getElementById('error')

form.addEventListener('submit', (e) => {
  const messages = []

  if (!fullname || !fullname.value.trim()) {
    alert('Fullname is required')
    messages.push('Fullname is required')
  }

  const emailValue = email ? email.value.trim() : ''
  const emailRegex = /^\S+@\S+\.\S+$/
  if (!emailValue) {
    alert('Email is required')
    messages.push('Email is required')
  } else if (!emailRegex.test(emailValue)) {
    messages.push('Email is not valid')
  }

  const pw = password ? password.value : ''
  if (pw.length < 6) {
    messages.push('Password must be at least 6 characters')
  }
  if (pw.length > 20) {
    messages.push('Password must be less than 20 characters')
  }

  const cpw = confirmPassword ? confirmPassword.value : ''
  if (pw && cpw !== pw) {
    messages.push('Passwords do not match')
  }

  const phoneVal = phone ? phone.value.trim() : ''
  if (phoneVal) {
    const digitsOnly = phoneVal.replace(/\D/g, '')
    if (digitsOnly.length < 7 || digitsOnly.length > 15) {
      messages.push('Phone number looks invalid')
    }
  }

  if (messages.length > 0) {
    e.preventDefault()
    if (errorElement) {
      errorElement.innerText = messages.join('. ')
    } else {
      alert(messages.join('\n'))
    }
    return false
  }

  return true
})