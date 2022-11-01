
const template = document.createElement('template')
template.innerHTML = `
<link rel="stylesheet" href="Components/About-us-page/Employees/Employees.css"/>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css" integrity="sha512-xh6O/CkQoPOWDdYTDqeRdPCVd1SpvCA9XXcUnZS2FmJNp1coAFzvtCN9BmamE+4aHK8yyUHUSCcJHgXloTyT2A==" crossorigin="anonymous" referrerpolicy="no-referrer" />


<div class="card-employee">

    <div class="employee-img">
        <div class="plus-icon"> + </div>
        <div class="a-icon b-icon"><a href="javascript:void(0)"><i class="fa-brands fa-twitter"></i></a></div>
        <div class="a-icon c-icon"><a href="javascript:void(0)"><i class="fa-brands fa-facebook-f"></i></a></div>
        <div class="a-icon d-icon"><a href="javascript:void(0)"><i class="fa-brands fa-pinterest-p"></i></div>
        <div class="a-icon f-icon"><a href="javascript:void(0)"><i class="fa-brands fa-instagram"></i></a></div>
        <img src="" alt="employee image"/>
     </div>
    <h3 class="employee-name"></h3>
    <span></span>
    
</div> 
`  

class SingleEmployeeComponent extends HTMLElement {

    constructor(){
        super()

        this.attachShadow({mode:'open'})
        this.shadowRoot.appendChild(template.content.cloneNode(true))


        this.icons = this.shadowRoot.querySelectorAll('.a-icon')
        this.employeeImage = this.shadowRoot.querySelector('.employee-img img')
        
        this.shadowRoot.querySelector('.employee-img img').setAttribute('src',this.getAttribute('cover'))
        this.shadowRoot.querySelector('.card-employee h3').innerHTML = this.getAttribute('name')
        this.shadowRoot.querySelector('.card-employee span').innerHTML = this.getAttribute('work')
        
    }

    iconsShowOpacity = () => {

        for (let i = 0; i < this.icons.length; i++) {
            this.icons[i].classList.add(`opacity-${i+1}`)
            this.icons[i].classList.remove(`opacity-remove-${i+1}`)  
          }

    }
    iconsRemoveOpacity = () => { 

        for (let i = 0; i < this.icons.length; i++) {
          this.icons[i].classList.remove(`opacity-${i+1}`)
          this.icons[i].classList.add(`opacity-remove-${i+1}`)  
        }

    }

    connectedCallback(){
        this.employeeImage.addEventListener('mouseenter',this.iconsShowOpacity)
        this.employeeImage.addEventListener('mouseleave',this.iconsRemoveOpacity)

        for (let i = 0; i < this.icons.length; i++) {
        this.icons[i].addEventListener('mouseenter',this.iconsShowOpacity)
        this.icons[i].addEventListener('mouseleave',this.iconsRemoveOpacity)
        }
    }

    static observedAttributes(){
        return ['cover','name','work']
    }
}

export{SingleEmployeeComponent}