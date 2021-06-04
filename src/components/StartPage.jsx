
import '../mycss/StartPage.css';

const StartPage = () => {

	return(
		<section className="startpagewrapper">
			<h1 className="mainheader">HamsterWars:</h1>
			<div className="pratbubbla">
				<div className="prat">
					<h1>Välkommen till HamsterWars!</h1>
					<p>
						Under "Tävla" visas två hamstrar. Klicka på den som är sötast för att ge den en vinst.
					</p>
					<p>
						I galleri hittar du alla hamstrar. Du kan klicka på en hamster för mer information om den. Längst ned i sektionen kan du även posta nya hamstrar.
					</p>
					<p>
						Under statistik visas de fem hamstrar med flest vinster, respektive de fem med flest förluster.
					</p>
					<p>
						I historik listas matcherna.
					</p>
				</div>
			</div>
			<div className="hamsterimgwrapper">
				<div className="mirrorbg">
				</div>
				<div className="mirrorbg upside">
				</div>
			</div>
		</section>
	)

}


export default StartPage;