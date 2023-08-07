

const oEmail = document.getElementById('contactBtn')

oEmail.addEventListener('click',function(){
    alert('我的邮箱是395944730^_^')
})

//实现个人作品部分Tab切换
const as = document.querySelectorAll('.book-tag li')

for(let i = 0; i < 3; i++)
{
    as[i].addEventListener('click',function(){
        document.querySelector('.book-tag .active').classList.remove('active')
        this.querySelector('div').classList.add('active')

       
     document.querySelector('#book-content .active').classList.remove('active')
     document.querySelector(`#book-content div:nth-child(${i + 1})`).classList.add('active')
    })

    
}


// var contactBtn = document.getElementById("contactBtn");
// var popup = document.getElementById("popup");
// var closeBtn = document.getElementsByClassName("close")[0];

// contactBtn.onclick = function () {
//     popup.style.display = "block";
// }

// closeBtn.onclick = function () {
//     popup.style.display = "none";
// }