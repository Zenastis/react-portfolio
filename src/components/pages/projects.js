import React from "react"
import Button from '@material-ui/core/Button';
import charlotteskyline from "../../assets/images/charlotteskyline.jpeg"

const projects = [
    {
        class: 'charlotteskyline',
        sourceImage: charlotteskyline,
        sourceImageAlt: 'charlotte_sights_and_lights',
        title: 'Charlotte Sights and Lights',
        description: 'Charlotte Sights And Lights',
        codeLink: 'https://kallandan.github.io/01P-Charlotte_Sights_And_Lights/',
        repoLink: 'https://github.com/Kallandan/01P-Charlotte_Sights_And_Lights',
    },
    {
        class: 'beerbox',
        sourceImage: 'https://raw.githubusercontent.com/Zenastis/eComerce_Beer_Box/main/public/pic/Beer-Sampler-Gift-Select_large.jpg',
        sourceImageAlt: 'Beerbox',
        title: 'BeerBox',
        description: 'Ecommerce Beer Box',
        codeLink: 'https://ecomercebeerbox.herokuapp.com/',
        repoLink: 'https://github.com/Zenastis/eComerce_Beer_Box'
    },
] 
  
function Projects () {
    return(
        
        <div>
            <div>
                <h1> Projects </h1>
                <div>
                    <div>
                        {
                            projects.forEach(project => (<div>
                                <a href={project.codeLink}>
                                    <img className={project.class} src={project.sourceImage} alt={project.sourceImageAlt} />
                                </a>
                                <h1 class="header2">
                                    {project.description}
                                </h1>
                                <Button href={project.repoLink}>Code @ GitHub</Button>
                            </div>))
                        }
                    </div>
                </div>
            </div>
        </div>
                        
    )
}

export default Projects;
