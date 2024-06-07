function MyRecipesComponent ({transfer, image, calories, ingredients, cautions}) {
    return (
        <div >
            <div className="container">
            <h2>{transfer}</h2>
            </div>

            <div className="container">
            <img src ={image} alt = "productimage"/>
            </div>
            <ul className="container list">
{ingredients.map((ingredient, index) => (
    <li className="first" key={index}>
        <img className="tick" src ="https://img.icons8.com/external-kiranshastry-gradient-kiranshastry/64/000000/external-check-multimedia-kiranshastry-gradient-kiranshastry.png " alt="tick"/>{ingredient}</li>
))}
            </ul>
            <h3>Cautions</h3>
<ul className="containerTwo">
    {cautions.length > 0 ? (
    cautions.map((caution, ind) => (
        <li key ={ind}>
            <img className="danger" src ="https://img.icons8.com/?size=100&id=21181&format=png&color=000000" width="30px" alt="cautionicon"/>
            {caution}
        </li>
    ))
) : <li>None</li>}
</ul>
          

            <div className="container">
            <p>{calories.toFixed()} calories</p>
            </div>



        </div>
    )
}
export default MyRecipesComponent;