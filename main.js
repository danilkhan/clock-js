// таймер
const timerH = document.querySelector('.timerH input')
const timerM = document.querySelector('.timerM input')
const timerS = document.querySelector('.timerS input')
const timerMi = document.querySelector('.timerMi input')
const timerStartBtn = document.querySelector('.timer-start')
const timerСlearBtn = document.querySelector('.timer-clear')
timerStartBtn.addEventListener('click', function(){
  let valueH = Number(timerH.value)
  let valueM = Number(timerM.value)
  let valueS = Number(timerS.value)
  let valueMi = Number(timerMi.value)
  if(timerStartBtn.innerHTML == 'start'){
    timerStartBtn.innerHTML = 'pause'
    timer(valueH,valueM,valueS,valueMi,timerStartBtn)
    timerH.disabled = true
    timerM.disabled = true
    timerS.disabled = true
    timerMi.disabled = true
  }else{
    timerStartBtn.innerHTML = 'start'
  }
})
// 
timerСlearBtn.addEventListener('click', function(){
    timerStartBtn.innerHTML = 'start'
    timerH.disabled = false
    timerM.disabled = false
    timerS.disabled = false
    timerMi.disabled = false
    timerH.value = ''
    timerM.value = ''
    timerS.value = ''
    timerMi.value = ''
})
// 
function timer(h,m,s,mi,btn){
  if(btn.innerHTML == 'pause'){
    timerS.value = s<10?`0${s}`:s
    timerM.value = m<10?`0${m}`:m
    timerH.value = h<10?`0${h}`:h
    if(mi == 0) {
      mi = 99
      timerMi.value = mi<10?`0${mi}`:mi
      if(s == 0){
        s = 59
        timerS.value = s<10?`0${s}`:s
        if(m == 0){
          m = 59
          timerM.value = m<10?`0${m}`:m
          if(h == 0){
            h = 23
            timerH.value = h<10?`0${h}`:h
          }else{
            h--
            timerH.value = h<10?`0${h}`:h
          }
        }else{
          m--
          timerM.value = m<10?`0${m}`:m
        }
      } else{
        s--
        timerS.value = s<10?`0${s}`:s
      }
    }else{
      mi--
      timerMi.value = mi<10?`0${mi}`:mi
    }
    // 
    // 
    if(h > 0 || m > 0 || s > 0 || mi > 0){
      setTimeout(() => {
        timer(h,m,s,mi,btn)
      }, 10.10101010);
    }
    else{
      timerH.disabled = false
      timerM.disabled = false
      timerS.disabled = false
      timerMi.disabled = false
      timerH.value = ''
      timerM.value = ''
      timerS.value = ''
      timerMi.value = ''
      timerStartBtn.innerHTML = 'start'
    }
  }
}
// сукундомер
const stopwatchM = document.querySelector('.stopwatchM span')
const stopwatchS = document.querySelector('.stopwatchS span')
const stopwatchMi = document.querySelector('.stopwatchMi span')
const start = document.querySelector('.start ')
const result = document.querySelector('.result ')
const startBtn = document.querySelector('.start')
const resultBtn = document.querySelector('.result')
const indicator = document.querySelector('.indicator')
const stopwatchResult = document.querySelector('.stopwatch-result')
resultBtn.addEventListener('click', function(){
  let m = stopwatchM.innerHTML
  let s = stopwatchS.innerHTML
  let mi = stopwatchMi.innerHTML
  stopwatchResult.innerHTML += `<p>${m}:${s}:${mi}</p>`
})
startBtn.addEventListener('click', function(){
  if(startBtn.innerHTML == 'start'){
    startBtn.innerHTML = 'stop'
    indicator.classList.add('indicator__start')
    stopwatchResult.innerHTML=''
    stopWatch(0,0,0, startBtn)
  }
  else if(startBtn.innerHTML == 'stop'){
    startBtn.innerHTML ='clear'
    indicator.classList.remove('indicator__start')
    indicator.classList.add('indicator__stop')
  } 
  else{
    startBtn.innerHTML = 'start'
    indicator.classList.remove('indicator__stop')
    stopwatchMi.innerHTML = '00'
    stopwatchS.innerHTML = '00'
    stopwatchM.innerHTML = '00'
    stopwatchResult.innerHTML=''
  }
})
function stopWatch(m,s,mi,btn){
  if(btn.innerHTML == 'stop'){
    if(mi == 99){
      mi = 0
      stopwatchMi.innerHTML = mi<10?`0${mi}`:mi
      if(s == 59){
        s = 0
        stopwatchS.innerHTML = s<10?`0${s}`:s
        if(m == 59){
          m = 0
          stopwatchM.innerHTML = m<10?`0${m}`:m
        } else{
          m++
          stopwatchM.innerHTML = m<10?`0${m}`:m
        }
      }else{
        s++
        stopwatchS.innerHTML = s<10?`0${s}`:s
      }
    }
    else {
      mi++
      stopwatchMi.innerHTML = mi<10?`0${mi}`:mi
    }
    setTimeout(function(){
    stopWatch(m,s,mi,btn)
  }, 10.10101010)
  }
}
// табы
const tabsPanelLinks = document.querySelectorAll('.tabsPanel-links a')
const tabsPanelItems = document.querySelectorAll('.tabsPanel-content__items')
tabsPanelLinks.forEach(function(link, key){
  link.addEventListener('click', function(){
    tabsPanelLinks.forEach(function(link2, key2){
      tabsPanelLinks[key2].classList.remove('active')
      tabsPanelItems[key2].classList.remove('active')
    })
    tabsPanelLinks[key].classList.add('active')
    tabsPanelItems[key].classList.add('active')
  })
})
// часы
const arrH = document.querySelector('.arrH')
const arrM = document.querySelector('.arrM')
const arrS = document.querySelector('.arrS')
const watchH = document.querySelector('.watchH span')
const watchM = document.querySelector('.watchM span')
const watchS = document.querySelector('.watchS span')
function clock(){
  const time = new Date();
  const hours = time.getHours()
  const minutes = time.getMinutes()
  const seconds = time.getSeconds()

  arrH.style.transform = `rotate(${hours * 30 + (minutes / 2)}deg)`
  arrM.style.transform = `rotate(${minutes * 6}deg)`
  arrS.style.transform = `rotate(${seconds * 6}deg)`
  
  watchH.innerHTML = hours<10?`0${hours}`:hours;
  watchM.innerHTML = minutes<10?`0${minutes}`:minutes;
  watchS.innerHTML = seconds<10?`0${seconds}`:seconds;
  
  setTimeout(function(){
    clock()
  }, 1000)
}
clock()