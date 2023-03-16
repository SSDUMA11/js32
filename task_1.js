function validateEmail(email){
  if (email == '') return false
        
  if (typeof email !== 'string') return false
    
  if (email.length < 5) return false 

  if ((email.split('@').length - 1) !== 1) return false

  if (email.indexOf('@') > email.lastIndexOf('.') || (email[email.indexOf('@') - 1] == '.')) return false

  if (!email.split('').includes('@') || email.split('')[0] == '@') return false
  return true
}
