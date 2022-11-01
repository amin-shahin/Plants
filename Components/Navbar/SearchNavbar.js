const template = document.createElement("template");

template.innerHTML =`
<link rel="stylesheet" href="Components/Navbar/Navbar.css" />
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css" integrity="sha512-xh6O/CkQoPOWDdYTDqeRdPCVd1SpvCA9XXcUnZS2FmJNp1coAFzvtCN9BmamE+4aHK8yyUHUSCcJHgXloTyT2A==" crossorigin="anonymous" referrerpolicy="no-referrer" />



    <div class="search-navbar-icon">

        <button class="search-btn-icon">
            <i class="fas fa-search searchIconInNavbar"></i>
            <span class="closeModal" >&times;</span>
        </button>

        <div class="inputSearchContainer">
            <input class="input-search-navbar" type="text" placeholder="search..." autocomplete="off" />
            <button class ='search-btn'> <i class="fas fa-search search-modal-icon"></i></button>
        </div>

    </div>

`

class SearchNavbar extends HTMLElement {
    constructor(){
        super()

        this.attachShadow({mode:'open'})
        this.shadowRoot.appendChild(template.content.cloneNode(true))
    }

    toggleSearchIcon =  (event) => {
    
        this.shadowRoot.querySelector(".inputSearchContainer").classList.add("active");
        this.shadowRoot.querySelector(".inputSearchContainer").classList.remove("notActive");
        
        this.shadowRoot.querySelector(".searchIconInNavbar").classList.add("displaySearchIcon");
        this.shadowRoot.querySelector(".closeModal").classList.add('displayCancelIcon')
        
        
        
        this.shadowRoot.querySelector(".input-search-navbar").focus();
      };
    
      closeModalHandler = ()=>{
       
        this.shadowRoot.querySelector(".inputSearchContainer").classList.add("notActive");
        this.shadowRoot.querySelector(".searchIconInNavbar").classList.remove("displaySearchIcon");
        this.shadowRoot.querySelector(".closeModal").classList.remove('displayCancelIcon')
    
    
      }

    connectedCallback(){
        this.shadowRoot.querySelector(".searchIconInNavbar").addEventListener("click", this.toggleSearchIcon);
        this.shadowRoot.querySelector(".closeModal").addEventListener("click", this.closeModalHandler);
    }
}

export default SearchNavbar