const template = document.createElement('template')
template.innerHTML = `

<link rel="stylesheet" href="Components/Articles/Articles.css" />



<div class="card">

<div class="news-bottom">
<img class="bg-card" src="" alt="img-background-card"/>
  <div class="main-box">
    <button class="btn"></button>
    <div class="text-container">
      <h2 class="title"></h2>
      <p class="text"></p>
    </div>
    
  </div>
  <div class="footer-box">
    <img src="images/whats-news/avatar-man-face.png" alt="avatar" class="avatar">
    <span><a href="javascript:void(0)">Amin Shahin</a>  <span class="date">/ March 3 ,2022</span> </span>
  </div>
</div>




<div class="news-bottom-overlay">
  <div class="main-box">
    <img class="bg-img" src="" alt="img-overlay">
    <button class="btn"></button>
    <div class="text-container">
      <h2 class="title"></h2>
      <p class="text"> Our mission is to provide our customers with responsive service and unsurpassed quality and value at competitive...</p>
    </div>

  </div>
  <div class="footer-box">
    <img src="images/whats-news/avatar-man-face.png" alt="avatar" class="avatar">
    <span><a href="javascript:void(0)">Amin Shahin</a> <span class="date">/ March 3 ,2022</span> </span>
  </div>
</div>


</div>


`

class SingleBlog extends HTMLElement {
    constructor(){
        super()


        this.attachShadow({mode:'open'})
        this.shadowRoot.appendChild(template.content.cloneNode(true))


        this.shadowRoot.querySelector('.bg-card').setAttribute('src',this.getAttribute('bg-cover'))
        this.shadowRoot.querySelector('.news-bottom .main-box .btn').innerHTML = this.getAttribute('text-btn')
        this.shadowRoot.querySelector('.news-bottom .text-container .title').innerHTML = this.getAttribute('text-title')
        this.shadowRoot.querySelector('.news-bottom .text-container .text').innerHTML = this.getAttribute('text-sub')

        ////////////////////       overlay    ///////////////////// 
        this.shadowRoot.querySelector('.news-bottom-overlay .main-box .bg-img').setAttribute('src',this.getAttribute('bg-overlay'))
        this.shadowRoot.querySelector('.news-bottom-overlay .main-box .btn').innerHTML = this.getAttribute('btn-overlay')
        this.shadowRoot.querySelector('.news-bottom-overlay .text-container .title').innerHTML = this.getAttribute('title-overlay')
        // this.shadowRoot.querySelector('news-bottom .text') = this.getAttribute('text-sub')
    }

    static observedAttributes(){
        return ['bg-cover','text-btn','text-title','text-sub','bg-overlay','btn-overlay','title-overlay']
    }
}

export {SingleBlog}