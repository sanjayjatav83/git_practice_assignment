let num=13;
let c=0;
for(let i=1; i<=num; i++){
	if(num%i==0){
		c++;
	}
	if(c==1){
		console.log("no");
	}
	else{
		console.log("yes");
	}
}