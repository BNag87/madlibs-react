	//First, import the 'createGlobalStyle' 
	import { createGlobalStyle } from "styled-components";

    // styled, { css, 

    // const palette = {
    //     "backGround": "rgb(45,60,60)",
    //     "foreGround": "rgb(65,140,140)",
    //     "highlight": "rgb(150,150,50)",
    //     "fontMain": "rgb(200,200,200)"
    // }

	//Then, create the global rules
	export const GlobalStyle = createGlobalStyle`
	  body {
        display: flex;
		background-color: lightgreen;
		color: yellow;
		margin: 0;
		padding: 0;
		font-family: calibri;
	  }
	`;