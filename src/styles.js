	//First, import the 'createGlobalStyle' 
	import styled, { createGlobalStyle } from "styled-components";

    // styled, { css, 

    const palette = {
        "backGround": "rgb(45,60,60)",
        "foreGround": "rgb(65,140,140)",
        "highlight": "rgb(150,150,50)",
        "fontMain": "rgb(200,200,200)"
    }

	//Then, create the global rules
	export const GlobalStyle = createGlobalStyle`
	  body {
        display: flex;
		text-align: center;
		align-items:center;
		justify-content: center;
		background-color: ${palette.backGround};
		color: ${palette.fontMain};
		margin: 0;
		padding: 0;
		font-family: calibri;
	  }
	`;

	export const PlateDiv = styled.div`
		display: flex;
		text-align: center;
		align-items: center;
		background: rgba(100, 130,130,0.2);
		width: 50%;
		margin: 10px;
		padding: 10px;
	`;