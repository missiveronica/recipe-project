function MyRecipesComponent ({transfer, image, calories, ingredients}) {
    return (
        <div >
            <div className="container">
            <h2>{transfer}</h2>
            </div>

            <div className="container">
            <img src ={image} alt = "productimage"/>
            </div>
            <ul className="container list">
{ingredients.map(ingredient => (
    <li><img className="tick" src ="https://img.icons8.com/external-kiranshastry-gradient-kiranshastry/64/000000/external-check-multimedia-kiranshastry-gradient-kiranshastry.png " alt="tick"/>{ingredient}</li>
))}
            </ul>
            <div className="container">
            <p>{calories.toFixed()} calories</p>
            </div>



        </div>
    )
}
export default MyRecipesComponent;