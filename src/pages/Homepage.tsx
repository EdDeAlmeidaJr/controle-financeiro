import React from "react";

import PosicaoAtual from "../components/PosicaoAtual";
import UltimosMovimentos from "../components/UltimosMovimentos";

const Homepage = () => (
	<div className="container-fluid homepage">
		<div className="col-8 last-movements">
			<UltimosMovimentos />
		</div>
		<div className="col-3 current-position">
			<PosicaoAtual />
		</div>
	</div>
);
 
export default Homepage;