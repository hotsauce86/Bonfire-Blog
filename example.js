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



var examplematrix1 = [[8,1,6],[3,5,7],[4,9,2]];


function magicsquare(matrixA){

	let mtx = matrixA;
	//our return value
	let k = 1;

	//now let's find our the size of the given matrix
	var gridsize = [ mtx.length, mtx[0].length ];
    
    //max x and y lengths
    var maxy = gridsize[0];
    var maxx = gridsize[1];
    

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
    let baseline = 0;
    
    //we will use this value to control the loop
    // if we can't find a magic square we can end the loop
    let tryingMagic = true;
    let notequal = false;

    //we will start with sum and baseline being the same at the start of the main loop
    for(i = 0; i < k; i++){
     baseline += mtx[i][0];
    }

    while(tringMagic){

    	//first lets go through each row
    	for(j = 0; j < k; j++){
    		for(i = 0; i < k; i++){
    			sum += mtx[i+xpos][j+ypos];
    		}

    		if(sum == baseline){
				//sums equal, continue
    		}else{
    			notequal = true;
    			break;
    		}
    		//sum is reset
    		sum =0;
    			
    	}

    	sum = 0;


    	//next we go by columb
    	for(j = 0; j < k; j++){
    		for(i = 0; i < k; i++){
    			sum += mtx[j+xpos][i+ypos];
    		}

    		if(sum == baseline){
				//sums equal, continue
    		}else{
    			notequal = true;
    			break;
    		}

    		//sum is reset
    		sum =0;
    			
    	}

    	//and then we check diagonals (i cant spell this late at night)
    	//diag 1
    	for(i = 0; i < k; i++){
    		sum += mtx[i][i];

    		if(sum == baseline){
				//sums equal, continue
    		}else{
    			notequal = true;
    			break;
    		}
    	}
    	sum =0;

    	//diag2
    	var tempj = k-1;
    	for(i = 0; i < k; i++){
    		sum += mtx[i][j];
    		j--;
    		//we move up j, and go forward i each step
    		if(sum == baseline){
				//sums equal, continue
    		}else{
    			notequal = true;
    			break;
    		}
    	}

    	



    		

    }









	return k;
}