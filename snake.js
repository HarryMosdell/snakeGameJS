
       body {
        font-family: monospace;
        color:black;
        background-color: beige;
      
       }
 
 
    .snake-board {
        
        border: 4px solid black;
        display:grid; 
        grid-column-gap: 5px;
        grid-row-gap: 5px;
        background-color: aqua;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
        overflow:hidden;
        position: relative;
    }
 

    .snake-grid-column {
        
        height: 50px;
        width:50px;
        background-color:black;
    }

    .snake {
        position: absolute;
        height:20px;
        width:100px;
        background-color: green;
        
    }

    .snake-head {
        background-color: red;
        width: 20px;
        height: 100%;
        position: absolute;
        left:100%;
        transform: translateX(-50%);
    }

    .apple {
        height:20px;
        width:20px;
        background-color: blue;
        position: absolute;
        z-index: 2;
        transform: translate(-50%);
    }


    .game-over {
     position: absolute;
     height:100%;
     width:100%;
     background-color: red !important;
     display: flex;
     flex-direction: column;
     align-items: center;
     justify-content: center;
     z-index:40;
    }
