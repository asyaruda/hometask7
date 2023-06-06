const exchangeRate = 40

for (let dollars = 10; dollars <= 100; dollars += 10) {
  let uah = dollars * exchangeRate
  alert(dollars + ' $ = ' + uah + ' гривень')
}

