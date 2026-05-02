import bcrypt from 'bcryptjs'

const hash = await bcrypt.hash('12345', 10)
console.log(hash)

// $2b$10$iTaBwCqiY7mjTWSeiRj8pehcwe.MJ7Yv7Qj9y7Fx0vTWMt9aELhK6