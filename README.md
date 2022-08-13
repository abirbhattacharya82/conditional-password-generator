# Conditional Password Generator
Passwords are important security passes that we use every day. However, sometimes we use same passwords everywhere which is not a safe method at all. Sometimes passwords are just a variation of the master password by just replacing some letters with symbols, like 'a' with @, 's' with $ and so on. This doesn't make our passwords secure at all. A secure password would be one that has a mix of letters both capital and small, numbers and symbols which is generated randomly. <br>
Conditional Password Generator generates password in a random order with customized number of characters, numbers and symbols, making it impossible for hackers to guess.

# Installation
```
npm i conditional-password-generator
```

# Usage

- For generating a password containing w number of characters, x number of capital letters, y number of small letters and z number of numbers use the following snippet
```
const generate_password=require('conditional-password-generator');
console.log(generate_password(w,x,y,z));
```

- pass zero to the parameters which you don't want in your generated password <br>
The following snippet generates a password containing only capital letters, small letters and numbers
```
const generate_password=require('conditional-password-generator');
console.log(generate_password(0,x,y,z));
```
General Format
```
numbers-----------------|
small letters---------| |
capital letters-----| | |
characters--------| | | |
                  | | | |
                  | | | |
generate_password(w,x,y,z);
```


# How it works
For generate_password(w,x,y,z)
- First a string is created by randomly picking up symbols w number of times
- Then the string is concatenated with randomly picked up capital letters x number of times
- Then the string is concatenated with randomly picked up small letters y number of times
- Then the string is concatenated with randomly picked up numbers z number of times
- Then the string is jumbled and the password is generated

### View in [Github](https://github.com/abirbhattacharya82/conditional-password-generator)
### View in [npm](https://www.npmjs.com/package/conditional-password-generator)