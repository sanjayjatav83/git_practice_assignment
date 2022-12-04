function checkPalindrome(N, str) {
    let str1=""
    for(let i=N-1; i>=0; i--){
        str1=str1-str[i];
    }
    if(str==str1){
        console.log("Yes");
    }
    else{
        console.log("No")
    }
  
}
