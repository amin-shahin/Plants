const template = document.createElement('template')

template.innerHTML = `
<link rel="stylesheet" href="Components/Footer/Footer.css"

<div>
<footer class="footer-container">
    <footer class="footer-container-fluid">

        <footer class="top">

            <footer class="brand-img">
            <img src="images/icon footer/logo_2.png" alt="brand">
            </footer>

            <footer class="information">

            <div class="details-info">
            <div class="icon">
                <img src="images/icon footer/icon-1-2.png" alt="">
            </div>
                <div class="info-item">
                <h4>VISIT US DAILY</h4>
                <p>27 Division St, New York,</p>
                <p>NY 10002, USA</p>
                </div>
            </div>
        

        
            <div class="details-info">
            <div class="icon">
                <img src="images/icon footer/icon-2-1.png" alt="">
            </div>

                <div class="info-item">
                <h4>CALL US 24/7</h4>
                <p>(+98) 937 - 607 - 5686</p>
                <p>(+98) 937 - 607 - 5686</p>
                </div>
            </div>
        

            
            <div class="details-info">
            <div class="icon">
                <img src="images/icon footer/icon-3-2.png" alt="">
            </div>
                <div class="info-item">
                <h4>MAIL US 24/7 </h4>
                <p>aminshahin.web@gmail.com</p>
                <p>aminshahin5686@gmail.com</p>
                </div>
            </div>

            </footer>

        </footer>
        </footer>
        </footer>


</div>



`

class Footer extends HTMLElement {
    constructor(){
        super()

        this.attachShadow({mode:'open'})
        this.shadowRoot.appendChild(template.content.cloneNode(true))
    }
}

export{Footer}