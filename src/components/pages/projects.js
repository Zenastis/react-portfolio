import React from "react"
import charlotteskyline from "../../assets/images/charlotteskyline.jpeg"

  
  
function Projects () {
    return(
        
        <div>
            <div>
                <h1> Projects </h1>
                <div>
                    <div>
                        <div>
                            <a href="https://kallandan.github.io/01P-Charlotte_Sights_And_Lights/">
                            <img className="charlotteskyline" src={charlotteskyline} alt="charlotte_sights_and_lights"></img>
                            </a>
                            <h1 class="header1"> Charlotte Sights And Lights </h1>
                            <p class="link1">- Repository Link: https://github.com/Kallandan/01P-Charlotte_Sights_And_Lights</p>          
                        </div>

                        <div>
                            <a href="https://ecomercebeerbox.herokuapp.com/">
                                <img className="beerbox" src="https://raw.githubusercontent.com/Zenastis/eComerce_Beer_Box/main/public/pic/Beer-Sampler-Gift-Select_large.jpg" alt="beerbox"></img>
                            </a>
                            <h1 class="header2"> Ecommerce Beer Box </h1>
                            <p class="link2">- Repository Link: https://github.com/Zenastis/eComerce_Beer_Box</p>
                        </div>

                        <div>
                            <a href="https://safe-cliffs-00867.herokuapp.com/">
                                <img className="textadventure" src="https://i.ytimg.com/vi/yhfTmAOgb5E/hqdefault.jpg" alt="Castle of Madness"></img>
                            </a>
                            <h1 class="header2"> Text Adventure Game "Castle of Madness" </h1>
                            <p class="link4">- Repository Link: https://github.com/jdrabot/text-adventure-game</p>
                            
                        </div>

                        <div>
                            <a href="https://hidden-bastion-49542.herokuapp.com/">
                                <img className="notetaker" src="https://images.ctfassets.net/lzny33ho1g45/5iJ10OKtmYa4BZpYvhb2xw/3d30495ba0fb4603cc957a25193df4fd/best-note-taking-apps-00-hero__2_.png?w=1520&fm=jpg&q=30&fit=thumb&h=760" alt="notetakerapp"></img>
                            </a>
                            <h1 class="header4"> Note Taking App </h1>
                            <p class="link4">- Repository Link: https://github.com/Zenastis/express.js_notetaker </p>   
                        </div>

                    </div>
                </div>
            </div>
        </div>
                        
    )
}














export default Projects