const ethers = document.querySelector('.ethers')
const gw = document.querySelector('.gwei')
const wei = document.querySelector('.wei')

const ethValue1 = 1;
const weiValue1 = 1000000000000000000;
const gweiValue1 = 1000000000;
ethers.addEventListener('keyup', function(){
  gw.value = ethers.value * gweiValue1
  wei.value =  ethers.value *  weiValue1
})

gw.addEventListener('keyup', function(){
    ethers.value = gw.value /parseFloat(gweiValue1)
    wei.value = gw.value * gweiValue1;
  })

wei.addEventListener('keyup', function(){
    ethers.value = wei.value /parseFloat(weiValue1)
    gw.value = wei.value /parseFloat(gweiValue1);
  })