let fs=require("fs");
let path=require("path");

let content = ""+fs.readFileSync("f1.txt");
let contentArr=content.split(" ");
let codeArr=[];
let decArr=[];
for(let i=0;i<contentArr.length;i++){
    let word=contentArr[i];
    let codeMsg="";
    for(let j=0;j<word.length;j++){
        
        let code=word[j];
        if(code>='a'&&code<='z'){
            code=code.charCodeAt(0)-96;
        }else{
            code=code.charCodeAt(0)-64;
        }
        codeMsg+=code;
    }
    // console.log(codeMsg);
    codeArr.push(RSA1(codeMsg));
    RSA2(codeMsg);

}

// encryption
function RSA1(msg){
   
function gcd( a, h)
{
	let temp;
	while (1)
	{
		temp = a%h;
		if (temp == 0)
		return h;
		a = h;
		h = temp;
	}
}
	// Two random prime numbers
	let p = 3;
	let q = 7;

	// First part of public key:
	let n = p*q;

	// Finding other part of public key.
	// e stands for encrypt
	let e = 2;
	let phi = (p-1)*(q-1);
	while (e < phi)
	{
		// e must be co-prime to phi and
		// smaller than phi.
		if (gcd(e, phi)==1)
			break;
		else
			e++;
	}

	// Private key (d stands for decrypt)
	// choosing d such that it satisfies
	// d*e = 1 + k * totient
	let k = 2; // A constant value
	let d = (1 + (k*phi))/e;

	// Encryption c = (msg ^ e) % n
    
	let c = Math.pow(msg, e);
    c = c%n;
    

    return c;
}

function RSA2(msg){
   
    function gcd( a, h)
    {
        let temp;
        while (1)
        {
            temp = a%h;
            if (temp == 0)
            return h;
            a = h;
            h = temp;
        }
    }
        // Two random prime numbers
        let p = 3;
        let q = 7;
    
        // First part of public key:
        let n = p*q;
    
        // Finding other part of public key.
        // e stands for encrypt
        let e = 2;
        let phi = (p-1)*(q-1);
        while (e < phi)
        {
            // e must be co-prime to phi and
            // smaller than phi.
            if (gcd(e, phi)==1)
                break;
            else
                e++;
        }
    
        // Private key (d stands for decrypt)
        // choosing d such that it satisfies
        // d*e = 1 + k * totient
        let k = 2; // A constant value
        let d = (1 + (k*phi))/e;
    
        // Encryption c = (msg ^ e) % n
        let c = Math.pow(msg, e);
        c = (c%n);
    
        // Decryption 
        let m = Math.pow(c, d);
        m = Math.floor(m%n)+"";
        decArr.push(m);
    
    }
    console.log(codeArr);
    console.log(decArr);
    decryptText(decArr);
    function decryptText(decArr){
        let dec1Arr=decArr;
        let arr=[];
        let decodeMsg="";
        for(let i=0;i<dec1Arr.length;i++){
            let code = dec1Arr[i];
            
            for(let j=0;j<code.length;j++){
                let ans=String.fromCharCode((parseInt(code[j])+96));
                decodeMsg+=(ans);
            }
            arr.push(decodeMsg);
            decodeMsg="";
        }
        console.log(arr.join(" "));
    }
    


    
