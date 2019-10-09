// trying the find the magic box

/*

	THE MAGIC BOX


	A "Magic Square" in math terms is refered to as a matrix of NxN size where the sum of every row, columb, and primary diagonals, equal the same value... (example)

	8|1|6
	-----
	3|5|7
	-----
	4|9|2
	
	this magic square is of size 3, with the sums being 15 for this example. for this project, we are looing for a way to find the largest magic box within a matrix if one exits. If the values in a NxN or MxM size does not exit within an NxM matrix, we will scale down the size, with size 1 being trivial as any cell within a matrix will qualify. 1 will be the default return value if no other sized magic square is found. we will use the variable "K" to denote the max size within a given matrix, and take an input of any sized matrix (note the matrix itself does not have to be a square). For simplicity, we will use arrays for the matixies

*/

//correct
var examplematrix1 = [[8,1,6],
                      [3,5,7],
                      [4,9,2]];
//incorrect
//var examplematrix1 = [[8,1,6],[3,5,7],[4,6,2]];
var examplematrix2 = [[2,2,0],
                      [2,2,0],
                      [0,0,0],
                      [0,1,0],
                      [0,1,0]];

var examplematrix3 = [[0,0,0,0],
                      [2,2,3,0],
                      [2,2,0,0]];

var examplematrix4 = [[0,0,0,0],
                      [2,2,0,1],
                      [2,2,0,1],
                      [0,1,0,0]];


function magicsquare(matrixA){

	let mtx = matrixA;
	//our return value
	let k = 1;
	//now let's find our the size of the given matrix
	var gridsize = [ mtx.length, mtx[0].length ];
    //max x and y lengths
    var maxy = gridsize[0];
    var maxx = gridsize[1];
    console.log("maxtrix size:   ["+ maxx + ":" + maxy +"]" );
    
    //we will start by fitting the max size of k to the the closest edge that a square KxK matrix can fit within the given MxN
    if(maxx > maxy){
        k = maxy;
    }else{
        k = maxx;
    }
    //now we need points locate the position of where we start to calculate the magic square
    let xpos= maxx-k,    ypos=maxy-k;
    //these will start at zero, but should go up in size as k gets smaller and we recalculate the values
    // we should only need compare each some to the last one, if there is no differnce we can continue. if we find a difference we can safely assume that we do not currently have a magic square and move on
    let sum =  0;
    let lastsum = 0;
    
    //we will use this value to control the loop
    // if we can't find a magic square we can end the loop
    let tryingMagic = true;
    let notequal = false;
    let xlimit = false;
    let ylimit = false;
    let zerolimit =false;

    //we will start with sum and lastsum being the same at the start of the main loop
    // for(i = 0; i < k; i++){
    //  lastsum += mtx[i][0];
    // }
    while(tryingMagic){
    	console.log("testing: " + k + "    pos: [" + xpos + ":" + ypos + "]");
    	lastsum = 0;
   		for(i = 0; i < k; i++){
   			console.log((i+xpos) + ":" +(0+ypos) + " -> "+ mtx[i+ypos][0+xpos]);
     		lastsum += mtx[i+ypos][0+xpos];
    	}
    	sum = 0;
    	//first lets go through each row
    	for(j = 0; j < k; j++){
    		for(i = 0; i < k; i++){
    			sum += mtx[i+ypos][j+xpos];
    		}
    		if(sum === lastsum){
				//sums equal, continue
    		}else{
    			notequal = true;
    			console.log("not equal row " + sum + "    lastsum: " + lastsum);
    			break;
    		}
    		//sum is reset
    		sum =0;	
    	}
    	sum = 0;
    	//next we go by columb
    	for(j = 0; j < k; j++){
    		for(i = 0; i < k; i++){
    			sum += mtx[j+ypos][i+xpos];
    		}
    		if(sum === lastsum){
				//sums equal, continue
    		}else{
    			notequal = true;
    			console.log("not equal col " + sum + "    lastsum: " + lastsum);
    			break;
    		}
    		//sum is reset
    		sum =0;			
    	}

    	sum = 0;
    	//and then we check diagonals (i cant spell this late at night)
    	//diag 1
    	for(i = 0; i < k; i++){
    		sum += mtx[i+ypos][i+xpos];	
    	}
			if(sum === lastsum){
				//sums equal, continue
    		}else{
    			notequal = true;
    			console.log("not equal diag1 " + sum + "    lastsum: " + lastsum);
    		}

    	sum =0;
    	//diag2
    	var tempj = k-1;
    	for(i = 0; i < k; i++){
    		sum += mtx[i+ypos][tempj+xpos];
    		tempj--;
    		//we move up j, and go forward i each step
    		
    	}

		if(sum === lastsum){
		//sums equal, continue
		 }else{
			notequal = true;
			console.log("not equal diag2 " + sum + "    lastsum: " + lastsum);
		  }

    	//now we check to see if we have a solve
    	// if not we see if we can move the matrix
    	if(notequal === true){
    		//shift over x and start again
			//if we hit the wall of the matrix
			if(xlimit === true && ylimit === true){
				zerolimit =true;
			}
			if(xpos===0){
    			 xlimit = true;
    		}
    		if(ypos===0){
    			ylimit= true;
    		}
    		console.log("not equal");
    		if(xpos>0){
    			xpos--;
    		}

    		//if x limit is reached we move up y
    		if(ypos>0 && xlimit === true){
    			ypos--;
    			xpos = maxx-k;
    			xlimit = false;
    		}

    		//if we are in the final corner of the matrix we must evaluate what to do next
    		if(xlimit === true && ylimit === true && zerolimit === true){
    			k--;
    			//if we go below 2
    			if(k===1){
    				//we can't go any smaller
    				return 1;
    			}else{
    				//we reset the values with the new smaller k value and restart
    				xpos = maxx-k;
    				ypos = maxy-k;
    				xlimit =false;
    				ylimit =false;
    				zerolimit =false;
    			}

    		}

    		//and reset the notequal
    		notequal = false;
 		
    	}else{
    		return k;
    	}	
    }
	return k;
}

console.log(magicsquare(examplematrix4));