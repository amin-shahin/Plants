const template = document.createElement('template')

template.innerHTML = `
<link rel="stylesheet" href="Components/HeaderAnotherPages/HeaderAnotherPage.css"/>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css" integrity="sha512-xh6O/CkQoPOWDdYTDqeRdPCVd1SpvCA9XXcUnZS2FmJNp1coAFzvtCN9BmamE+4aHK8yyUHUSCcJHgXloTyT2A==" crossorigin="anonymous" referrerpolicy="no-referrer" />

<div class="container-header-another-page">
    <div class="header-another-page">
    <img src="" alt="flower background"/>
        <div class="content">
            <h1 class="header-title"></h1>
            <div class="breadcrumbs">
               <a href='../../index.html'><span class="bread-one"></span></a> 
                <i class="fa-solid fa-arrow-right and-more-icon"></i>
                <span class="bread-two"></span>
                <span class="bread-three"></span>
                <span class="bread-four"></span>
            </div>
        </div>
    </div>
</div>


`

class HeaderAnotherPage extends HTMLElement {
    constructor(){
        super()

        this.attachShadow({mode:'open'})
        this.shadowRoot.appendChild(template.content.cloneNode(true))

        this.shadowRoot.querySelector('.header-another-page img').setAttribute('src',this.getAttribute('cover'))
        this.shadowRoot.querySelector('.content .header-title').innerHTML = this.getAttribute('header-title')
        this.shadowRoot.querySelector('.bread-one').innerHTML = this.getAttribute('bread-one')
        this.shadowRoot.querySelector('.bread-two').innerHTML = this.getAttribute('bread-two')
        this.shadowRoot.querySelector('.bread-three').innerHTML = this.getAttribute('bread-three')
        this.shadowRoot.querySelector('.bread-four').innerHTML = this.getAttribute('bread-four')

        
    }

    static observedAttributes(){
        return ['cover','header-title','bread-one','bread-two','bread-three','bread-four']
    }
}

export{HeaderAnotherPage}