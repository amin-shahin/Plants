import { SingleEmployeeComponent } from "./SingleEmployeeComponent.js"

const template = document.createElement('template')
template.innerHTML = `
<link rel="stylesheet" href="Components/About-us-page/Employees/Employees.css"/>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css" integrity="sha512-xh6O/CkQoPOWDdYTDqeRdPCVd1SpvCA9XXcUnZS2FmJNp1coAFzvtCN9BmamE+4aHK8yyUHUSCcJHgXloTyT2A==" crossorigin="anonymous" referrerpolicy="no-referrer" />


<div class="perfect-stuff-container">

    <div class="perfect-stuff-container-fluid">

        <div class="perfect-stuff-top">

            <div class="text">
                <span>
                    <img class="leaf-side-text" src="images/leaf-side-text.png" alt="leaf-side-text" >
                    <h3>Our perfect stuff</h3>
                </span>
                <h1 class="lastest-perfect-stuff">Meet Our Specialists</h1>
            </div>

            <div class="more-perfect-stuff-btn">
                <button>View All</button>
            </div>
         </div>


    </div>    
</div> 
`  

class Employees extends HTMLElement {

    constructor(){
        super()

        this.attachShadow({mode:'open'})
        this.shadowRoot.appendChild(template.content.cloneNode(true))
    }


}

window.customElements.define('single-employee-component',SingleEmployeeComponent)

export{Employees}