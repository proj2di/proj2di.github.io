;(()=>{document.querySelector('.arena').style.transform='rotateZ(-5deg)'
for(let i=0;i<100;i++){setTimeout(()=>{const text=document.createElement('span')
text.textContent='(」・ω・)」うー！(／・ω・)／にゃー！'
text.style.position='absolute'
if(Math.random()>0.5){text.style.left=`${Math.random()*50}vw`}else{text.style.right=`${Math.random()*50}vw`}
text.style.top=`${Math.random()*100}vh`
text.style.color=`hsl(${Math.random()*360}, 100%, 50%)`
document.body.appendChild(text)},i*10)}})()